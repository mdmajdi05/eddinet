// ============================================================================
//  FILE: scripts/sync-slug-redirects.mjs
//
//  Service child pages ke slug change hote hi purane URL ke liye permanent
//  (308) redirect automatically generate karta hai.
//
//  Kaam kaise karta hai:
//    - `data/services/child/**` me sab `.ts` child pages scan karta hai
//      (excluded files/folders chhod kar).
//    - Har file ka current `slug` nikalta hai (2-space indent wala field).
//    - `scripts/slug-baseline.json` (file path -> pichhla slug) se compare
//      karta hai. Jahan slug badla ho, wahan redirect banata hai:
//         /services/<category>/<oldSlug>  ->  /services/<category>/<newSlug>
//    - Naye redirects ko `data/service-redirects.ts` ke AUTO block me
//      (`// AUTO-REDIRECTS-START` .. `// AUTO-REDIRECTS-END`) daalta hai,
//      dedupe karke (same source + same destination = skip; same source +
//      different destination = replace).
//    - Baseline ko current slugs par update karta hai.
//
//  Flags:
//    (default)  dry-run — sirf planned changes print karta hai, kuch write nahi.
//    --apply    redirects + baseline files actually write karta hai.
//
//  Idempotent: dobara chalane par koi further change nahi hota.
//  Cross-platform: sirf node:path use karta hai (Windows-safe).
// ============================================================================

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");

const childRoot = path.join(projectRoot, "data", "services", "child");
const baselinePath = path.join(projectRoot, "scripts", "slug-baseline.json");
const redirectsPath = path.join(projectRoot, "data", "service-redirects.ts");

const START_MARKER = "// AUTO-REDIRECTS-START";
const END_MARKER = "// AUTO-REDIRECTS-END";
const SLUG_PATTERN = /^ {2}slug: "([^"]+)"/m;

// Files/folders that are NOT standalone child pages.
const EXCLUDED_FILES = new Set([
  "_shared.ts",
  "pages.ts",
  "docx-content.ts",
  "generated-child-services.ts",
  "seo-child-services.ts",
]);
const EXCLUDED_DIRECTORIES = new Set(["_category"]);

const apply = process.argv.includes("--apply");

/** Convert a native path to a repo-root-relative posix path. */
function toPosix(relativePath) {
  return relativePath.split(path.sep).join("/");
}

/** Recursively collect all `.ts` files under `directory`, skipping excluded dirs/files. */
async function collectChildFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name));

  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (EXCLUDED_DIRECTORIES.has(entry.name)) continue;
      files.push(...(await collectChildFiles(path.join(directory, entry.name))));
      continue;
    }

    if (!entry.isFile()) continue;
    if (!entry.name.endsWith(".ts")) continue;
    if (EXCLUDED_FILES.has(entry.name)) continue;
    files.push(path.join(directory, entry.name));
  }

  return files;
}

/** Extract the top-level slug of a child page, or null when absent. */
async function extractSlug(file) {
  const contents = await readFile(file, "utf8");
  const match = contents.match(SLUG_PATTERN);
  return match ? match[1] : null;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Read `data/service-redirects.ts` and split it around the AUTO block.
 *
 * Markers must be real lines (only whitespace around them) — this avoids
 * matching the literal marker strings that also appear inside the file's
 * header doc comment.
 */
async function readAutoBlock() {
  const text = await readFile(redirectsPath, "utf8");

  const startLine = new RegExp(`^[ \\t]*${escapeRegExp(START_MARKER)}[ \\t]*$`, "m");
  const endLine = new RegExp(`^[ \\t]*${escapeRegExp(END_MARKER)}[ \\t]*$`, "m");
  const startMatch = startLine.exec(text);
  const endMatch = endLine.exec(text);

  if (!startMatch || !endMatch || endMatch.index < startMatch.index) {
    throw new Error(
      `AUTO markers not found in ${path.relative(projectRoot, redirectsPath)}. ` +
        `Expected "${START_MARKER}" and "${END_MARKER}" each on their own line.`,
    );
  }

  // Prefix ends right after the newline that closes the START marker line.
  const startLineEnd = startMatch.index + startMatch[0].length;
  const prefixEnd = text.indexOf("\n", startLineEnd);
  const prefix = text.slice(0, prefixEnd === -1 ? text.length : prefixEnd + 1);
  // Body is everything between the START line and the END line (exclusive).
  const bodyStart = prefix.length;
  const bodyEnd = endMatch.index;
  const body = text.slice(bodyStart, bodyEnd);
  const suffix = text.slice(bodyEnd);

  return { prefix, body, suffix, entries: parseEntries(body) };
}

/** Parse existing redirect entries out of the AUTO block body. */
function parseEntries(body) {
  const pattern =
    /source:\s*"([^"]+)"\s*,\s*destination:\s*"([^"]+)"\s*,\s*permanent:\s*true/g;
  const entries = [];
  let match;
  while ((match = pattern.exec(body)) !== null) {
    entries.push({ source: match[1], destination: match[2] });
  }
  return entries;
}

/** Render AUTO block body from an ordered list of entries. */
function renderBody(entries) {
  return entries
    .map(
      (entry) =>
        `  {\n` +
        `    source: ${JSON.stringify(entry.source)},\n` +
        `    destination: ${JSON.stringify(entry.destination)},\n` +
        `    permanent: true,\n` +
        `  },\n`,
    )
    .join("");
}

/**
 * Merge planned redirects into the existing list.
 * - identical source + destination  -> skip (dedupe)
 * - same source, different destination -> replace destination
 * - new source                      -> append
 */
function mergeEntries(existing, additions) {
  const merged = existing.map((entry) => ({ ...entry }));
  let added = 0;
  let replaced = 0;

  for (const addition of additions) {
    const index = merged.findIndex((entry) => entry.source === addition.source);
    if (index === -1) {
      merged.push({ ...addition });
      added += 1;
    } else if (merged[index].destination !== addition.destination) {
      merged[index].destination = addition.destination;
      replaced += 1;
    }
  }

  return { merged, added, replaced };
}

async function loadBaseline() {
  try {
    const raw = await readFile(baselinePath, "utf8");
    const parsed = JSON.parse(raw);
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("baseline root must be a JSON object");
    }
    return parsed;
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

function serializeBaseline(map) {
  const sorted = {};
  for (const key of Object.keys(map).sort()) sorted[key] = map[key];
  return `${JSON.stringify(sorted, null, 2)}\n`;
}

async function main() {
  // ── Scan ──────────────────────────────────────────────────────────────────
  const files = await collectChildFiles(childRoot);
  const scanned = [];
  for (const file of files) {
    const slug = await extractSlug(file);
    if (!slug) continue;
    scanned.push({
      key: toPosix(path.relative(projectRoot, file)),
      category: path.basename(path.dirname(file)),
      slug,
    });
  }

  // ── Compare against baseline ──────────────────────────────────────────────
  const baseline = await loadBaseline();
  const baselineExists = baseline !== null;
  const baselineMap = baseline ?? {};

  const slugChanges = [];
  for (const entry of scanned) {
    const previous = baselineMap[entry.key];
    if (typeof previous === "string" && previous !== entry.slug) {
      slugChanges.push({ ...entry, oldSlug: previous });
    }
  }

  const planned = slugChanges.map((change) => ({
    source: `/services/${change.category}/${change.oldSlug}`,
    destination: `/services/${change.category}/${change.slug}`,
    permanent: true,
    file: change.key,
  }));

  // ── Merge into AUTO block ─────────────────────────────────────────────────
  const auto = await readAutoBlock();
  const { merged, added, replaced } = mergeEntries(auto.entries, planned);
  const nextBody = renderBody(merged);
  const redirectsChanged = nextBody !== auto.body;

  // ── Baseline diff ─────────────────────────────────────────────────────────
  const nextBaseline = { ...baselineMap };
  let baselineAdded = 0;
  let baselineUpdated = 0;
  for (const entry of scanned) {
    if (!(entry.key in baselineMap)) {
      baselineAdded += 1;
      nextBaseline[entry.key] = entry.slug;
    } else if (baselineMap[entry.key] !== entry.slug) {
      baselineUpdated += 1;
      nextBaseline[entry.key] = entry.slug;
    }
  }
  const nextBaselineText = serializeBaseline(nextBaseline);
  const baselineChanged =
    !baselineExists || nextBaselineText !== serializeBaseline(baselineMap);

  // ── Report ────────────────────────────────────────────────────────────────
  console.log("Slug redirect sync");
  console.log(`  Mode              : ${apply ? "APPLY (writing files)" : "DRY-RUN (no files written)"}`);
  console.log(`  Files scanned     : ${scanned.length}`);
  console.log(`  Baseline          : ${baselineExists ? "found" : "MISSING (would be initialised)"}`);
  console.log(`  Slug changes      : ${slugChanges.length}`);
  console.log(`  Redirects added   : ${added}`);
  console.log(`  Redirects replaced: ${replaced}`);
  console.log(
    `  Baseline updates  : ${baselineAdded} new, ${baselineUpdated} changed`,
  );

  if (slugChanges.length > 0) {
    console.log("\n  old -> new");
    for (const change of slugChanges) {
      console.log(
        `    /services/${change.category}/${change.oldSlug} -> /services/${change.category}/${change.slug}  (${change.key})`,
      );
    }
  }

  const totalChanges =
    slugChanges.length + added + replaced + baselineAdded + baselineUpdated;

  if (!apply) {
    console.log(
      totalChanges === 0
        ? "\n  No changes. Everything is in sync."
        : `\n  ${totalChanges} change(s) planned. Re-run with --apply to write them.`,
    );
    return;
  }

  // ── Apply ─────────────────────────────────────────────────────────────────
  if (redirectsChanged) {
    await writeFile(redirectsPath, `${auto.prefix}${nextBody}${auto.suffix}`, "utf8");
    console.log(`\n  Wrote ${toPosix(path.relative(projectRoot, redirectsPath))}`);
  }
  if (baselineChanged) {
    await writeFile(baselinePath, nextBaselineText, "utf8");
    console.log(`  Wrote ${toPosix(path.relative(projectRoot, baselinePath))}`);
  }
  if (!redirectsChanged && !baselineChanged) {
    console.log("\n  Nothing to write. Already in sync.");
  } else {
    console.log("\n  Done.");
  }
}

main().catch((error) => {
  console.error(`\nSlug redirect sync failed: ${error.message}`);
  process.exitCode = 1;
});
