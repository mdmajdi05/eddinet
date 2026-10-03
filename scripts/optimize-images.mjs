import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const imageRoot = path.join(projectRoot, "public", "images");
const backupRoot = path.join(projectRoot, "_unused-assets", "image-originals");

const maxEdge = Number.parseInt(process.env.IMAGE_MAX_EDGE ?? "1600", 10);
const quality = Number.parseInt(process.env.IMAGE_QUALITY ?? "82", 10);
const dryRun = process.argv.includes("--dry-run");
const skipBackup = process.argv.includes("--no-backup");
const supportedExtension = /\.(png|jpe?g|webp)$/i;

if (!Number.isFinite(maxEdge) || maxEdge < 640) {
  throw new Error("IMAGE_MAX_EDGE must be at least 640.");
}

if (!Number.isFinite(quality) || quality < 50 || quality > 95) {
  throw new Error("IMAGE_QUALITY must be between 50 and 95.");
}

async function findImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return findImages(entryPath);
      return entry.isFile() && supportedExtension.test(entry.name) ? [entryPath] : [];
    }),
  );

  return nestedFiles.flat();
}

function formatSize(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function backUpOriginal(filePath) {
  if (skipBackup) return;

  const relativePath = path.relative(imageRoot, filePath);
  const destination = path.join(backupRoot, relativePath);
  await mkdir(path.dirname(destination), { recursive: true });

  try {
    await stat(destination);
  } catch {
    await copyFile(filePath, destination);
  }
}

async function optimizeImage(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const targetPath = path.extname(filePath).toLowerCase() === ".webp"
    ? filePath
    : filePath.slice(0, -extension.length) + ".webp";
  const sourceBytes = (await stat(filePath)).size;
  // Read into memory first so libvips does not keep the source file locked while
  // we replace an existing WebP on Windows.
  const source = await readFile(filePath);
  const metadata = await sharp(source, { failOn: "warning" }).metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error("Image dimensions could not be read.");
  }

  const output = await sharp(source, { failOn: "warning" })
    .rotate()
    .resize({
      width: maxEdge,
      height: maxEdge,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality,
      alphaQuality: 90,
      effort: 6,
      smartSubsample: true,
    })
    .toBuffer();

  const willReplace = output.length < sourceBytes || targetPath !== filePath;
  if (!willReplace) {
    return { filePath, sourceBytes, outputBytes: output.length, changed: false };
  }

  if (!dryRun) {
    await backUpOriginal(filePath);

    if (targetPath === filePath) {
      // Writing in place avoids Windows rename/unlink locks on existing WebPs.
      await writeFile(filePath, output);
    } else {
      // A previous run may already have created the target WebP.
      await writeFile(targetPath, output);
      await rm(filePath, { force: true });
    }
  }

  return { filePath, sourceBytes, outputBytes: output.length, changed: true };
}

async function main() {
  const files = await findImages(imageRoot);
  let sourceTotal = 0;
  let outputTotal = 0;
  let changedCount = 0;
  let convertedCount = 0;

  console.log(
    `Optimizing ${files.length} images (max ${maxEdge}px, WebP quality ${quality})${dryRun ? " [dry run]" : ""}...`,
  );

  for (const filePath of files) {
    const result = await optimizeImage(filePath);
    sourceTotal += result.sourceBytes;
    outputTotal += result.outputBytes;
    if (result.changed) changedCount += 1;
    if (path.extname(result.filePath).toLowerCase() !== ".webp") convertedCount += 1;
  }

  const savedBytes = Math.max(0, sourceTotal - outputTotal);
  const savedPercent = sourceTotal === 0 ? 0 : Math.round((savedBytes / sourceTotal) * 100);
  const backupMessage = dryRun
    ? "No files were changed."
    : skipBackup
      ? "Original backup was skipped."
      : `Originals are kept in ${path.relative(projectRoot, backupRoot)}.`;

  console.log(`Changed: ${changedCount} (${convertedCount} converted to WebP)`);
  console.log(`Before: ${formatSize(sourceTotal)}`);
  console.log(`After:  ${formatSize(outputTotal)}`);
  console.log(`Saved:  ${formatSize(savedBytes)} (${savedPercent}%)`);
  console.log(backupMessage);
}

main().catch((error) => {
  console.error(`Image optimization failed: ${error instanceof Error ? error.message : error}`);
  process.exitCode = 1;
});
