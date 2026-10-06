import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const publicImageRoot = path.join(projectRoot, "public", "images");
const sourceDirectories = ["app", "components", "data", "config", "lib"].map((directory) =>
  path.join(projectRoot, directory),
);
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".css", ".scss"]);
const imageExtension = /\.(png|jpe?g|webp|avif|svg|gif|ico)$/i;
const maximumRecommendedBytes = 500 * 1024;
const localImageReference = /["'`](\/images\/[^"'`\s)\]}]+)(?:[?#][^"'`\s)\]}]*)?["'`]/g;
const remoteImageReference = /https?:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]+/g;

async function walk(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") return [];
    throw error;
  }

  const nestedFiles = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return walk(entryPath);
      return entry.isFile() ? [entryPath] : [];
    }),
  );

  return nestedFiles.flat();
}

async function collectImageFiles() {
  const files = await walk(publicImageRoot);
  return files.filter((file) => imageExtension.test(file));
}

async function collectReferences() {
  const files = (await Promise.all(sourceDirectories.map(walk))).flat().filter((file) =>
    sourceExtensions.has(path.extname(file).toLowerCase()),
  );
  const references = [];

  for (const file of files) {
    const content = await readFile(file, "utf8");
    for (const match of content.matchAll(localImageReference)) {
      references.push({
        sourceFile: path.relative(projectRoot, file),
        reference: match[1],
      });
    }
  }

  return references;
}

async function collectRemoteImageReferences() {
  const files = (await Promise.all(sourceDirectories.map(walk))).flat().filter(
    (file) =>
      sourceExtensions.has(path.extname(file).toLowerCase()) &&
      file !== path.join(projectRoot, "data", "site", "stock-images.ts"),
  );
  const references = [];

  for (const file of files) {
    const content = await readFile(file, "utf8");
    for (const match of content.matchAll(remoteImageReference)) {
      references.push({
        sourceFile: path.relative(projectRoot, file),
        reference: match[0],
      });
    }
  }

  return references;
}

async function fileExists(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

function formatSize(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function main() {
  const [imageFiles, references, remoteReferences] = await Promise.all([
    collectImageFiles(),
    collectReferences(),
    collectRemoteImageReferences(),
  ]);
  const missingReferences = [];

  for (const { sourceFile, reference } of references) {
    // Documentation examples such as `/images/…` are not runtime paths.
    if (reference.includes("…") || reference.includes("...")) continue;
    if (!(await fileExists(path.join(projectRoot, "public", reference.replace(/^\//, ""))))) {
      missingReferences.push(`${sourceFile}: ${reference}`);
    }
  }

  const oversizedFiles = [];
  const nonWebpFiles = [];
  const hashes = new Map();
  let totalBytes = 0;

  for (const file of imageFiles) {
    const fileStats = await stat(file);
    totalBytes += fileStats.size;
    const relativePath = path.relative(projectRoot, file);

    if (fileStats.size > maximumRecommendedBytes) {
      oversizedFiles.push(`${relativePath} (${formatSize(fileStats.size)})`);
    }

    if (path.extname(file).toLowerCase() !== ".webp") {
      nonWebpFiles.push(relativePath);
    }

    const hash = createHash("sha256").update(await readFile(file)).digest("hex");
    const duplicates = hashes.get(hash) ?? [];
    duplicates.push(relativePath);
    hashes.set(hash, duplicates);
  }

  const duplicateGroups = [...hashes.values()].filter((files) => files.length > 1);

  console.log(`Public images: ${imageFiles.length} files (${formatSize(totalBytes)})`);
  console.log(`Local image references checked: ${references.length}`);

  if (remoteReferences.length > 0) {
    console.error("\nRemote image URLs still present (run npm run images:download):");
    remoteReferences.forEach(({ sourceFile, reference }) =>
      console.error(`- ${sourceFile}: ${reference}`),
    );
  }

  if (missingReferences.length > 0) {
    console.error("\nMissing image files:");
    missingReferences.forEach((reference) => console.error(`- ${reference}`));
  }

  if (nonWebpFiles.length > 0) {
    console.warn("\nNon-WebP images (run npm run images:optimize):");
    nonWebpFiles.forEach((file) => console.warn(`- ${file}`));
  }

  if (oversizedFiles.length > 0) {
    console.warn(`\nImages above ${formatSize(maximumRecommendedBytes)}:`);
    oversizedFiles.forEach((file) => console.warn(`- ${file}`));
  }

  if (duplicateGroups.length > 0) {
    console.warn(`\nDuplicate image groups: ${duplicateGroups.length}`);
    duplicateGroups.forEach((files) => console.warn(`- ${files.join(" = ")}`));
  }

  if (missingReferences.length > 0 || remoteReferences.length > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(`Image check failed: ${error instanceof Error ? error.message : error}`);
  process.exitCode = 1;
});
