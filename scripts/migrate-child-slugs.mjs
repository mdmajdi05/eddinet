// ============================================================================
//  ONE-TIME MIGRATION: child page slugs ← heroHeading (hardcoded, manual)
//  Har child page ka `slug` field uske heroHeading se derive hokar likha
//  jaata hai (slugify). Koi runtime connection NAHI — sirf ek-baar copy.
//  Baad me slug manually badal sakte ho, heroHeading se koi lena-dena nahi.
//
//  Usage:  node scripts/migrate-child-slugs.mjs --dry-run
//          node scripts/migrate-child-slugs.mjs --apply
//
//  Kya update hota hai:
//    1. data/services/child/<cat>/*.ts   → slug field + header PAGE comment
//    2. data/services/child/pages.ts     → childPages + seoChildPages keys
//    3. seo-child-services.ts            → seoItemToSlug values
//    4. next.config.ts                   → 301 redirects old → new
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APPLY = process.argv.includes("--apply");

// Wahi logic jo generated-child-services.ts slugify() me hai — exact copy.
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// ── 1. Child page files scan ────────────────────────────────────────────────
const CHILD_ROOT = path.join(ROOT, "data", "services", "child");
const SKIP_FILES = new Set([
  "_shared.ts",
  "pages.ts",
  "docx-content.ts",
  "generated-child-services.ts",
  "seo-child-services.ts",
]);

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name.startsWith("_")) continue; // _category, etc.
      out.push(...walk(p));
    } else if (e.name.endsWith(".ts") && !SKIP_FILES.has(e.name)) {
      out.push(p);
    }
  }
  return out;
}

const files = walk(CHILD_ROOT);
const mappings = []; // { category, oldSlug, newSlug, file, heading }
const skipped = [];
const perCatUsed = new Map(); // category -> Set(newSlug)

for (const file of files) {
  const rel = path.relative(ROOT, file).replaceAll("\\", "/");
  const category = path.basename(path.dirname(file));
  let src = fs.readFileSync(file, "utf8");

  const slugMatch = src.match(/^ {2}slug: "([^"]+)",?$/m);
  const headingMatch = src.match(/^ {2}heroHeading: "([^"]+)",?$/m);

  if (!slugMatch) {
    skipped.push({ rel, reason: "no top-level slug field" });
    continue;
  }
  if (!headingMatch) {
    skipped.push({ rel, reason: "no heroHeading field" });
    continue;
  }

  const oldSlug = slugMatch[1];
  const heading = headingMatch[1];
  const newSlug = slugify(heading);

  if (!newSlug) {
    skipped.push({ rel, reason: `slugify(heading) empty for: ${heading}` });
    continue;
  }

  // Duplicate check (ek category ke andar do files ka same slug nahi hona chahiye)
  if (!perCatUsed.has(category)) perCatUsed.set(category, new Set());
  const used = perCatUsed.get(category);
  if (used.has(newSlug)) {
    skipped.push({ rel, reason: `DUPLICATE newSlug "${newSlug}" in ${category}` });
    continue;
  }
  used.add(newSlug);

  mappings.push({ category, oldSlug, newSlug, file, rel, heading });

  if (APPLY) {
    // slug field (2-space indent, pehli occurrence = top-level)
    src = src.replace(
      /^ {2}slug: "[^"]+",?$/m,
      `  slug: "${newSlug}",`,
    );
    // Header comment: //  PAGE: /services/<cat>/<old>
    src = src.replace(
      new RegExp(`(//  PAGE: /services/${category}/)[a-z0-9-]+`),
      `$1${newSlug}`,
    );
    fs.writeFileSync(file, src, "utf8");
  }
}

// ── 2. Report ───────────────────────────────────────────────────────────────
console.log(`\n${APPLY ? "APPLIED" : "DRY-RUN"} — ${mappings.length} slugs migrated, ${skipped.length} skipped.`);
for (const s of skipped) console.log(`  SKIP ${s.rel}: ${s.reason}`);

const tooLong = mappings.filter((m) => m.newSlug.length > 60);
if (tooLong.length) {
  console.log(`\n  ⚠ ${tooLong.length} slugs >60 chars:`);
  for (const m of tooLong) console.log(`    ${m.newSlug.length}c  ${m.category}/${m.newSlug}`);
}

// naya slug kisi aur file ke PURANE slug se takraya? (pages.ts key swap risk)
const oldAll = new Set(mappings.map((m) => `${m.category}/${m.oldSlug}`));
const clashes = mappings.filter((m) => oldAll.has(`${m.category}/${m.newSlug}`));
if (clashes.length) console.log(`\n  ⚠ new↔old key clashes: ${clashes.map((m) => m.rel).join(", ")}`);

if (!APPLY) {
  console.log("\nSample mapping:");
  for (const m of mappings.slice(0, 8)) {
    console.log(`  ${m.category}/${m.oldSlug}  →  ${m.category}/${m.newSlug}`);
  }
  process.exit(0);
}

// ── 3. pages.ts keys ────────────────────────────────────────────────────────
const pagesPath = path.join(CHILD_ROOT, "pages.ts");
let pages = fs.readFileSync(pagesPath, "utf8");
let keyHits = 0;
for (const m of mappings) {
  const isSeo = m.category === "seo";
  const oldKey = isSeo ? `"${m.oldSlug}": ` : `"${m.category}/${m.oldSlug}": `;
  const newKey = isSeo ? `"${m.newSlug}": ` : `"${m.category}/${m.newSlug}": `;
  if (pages.includes(oldKey)) {
    pages = pages.replace(oldKey, newKey);
    keyHits += 1;
  } else {
    console.log(`  ⚠ pages.ts key not found: ${oldKey}`);
  }
}
fs.writeFileSync(pagesPath, pages, "utf8");
console.log(`pages.ts: ${keyHits}/${mappings.length} keys updated`);

// ── 4. seoItemToSlug values ─────────────────────────────────────────────────
const seoMapPath = path.join(CHILD_ROOT, "seo-child-services.ts");
let seoMap = fs.readFileSync(seoMapPath, "utf8");
let seoHits = 0;
for (const m of mappings.filter((x) => x.category === "seo")) {
  const oldLine = `"${m.oldSlug}",`;
  const newLine = `"${m.newSlug}",`;
  if (seoMap.includes(oldLine)) {
    seoMap = seoMap.replace(oldLine, newLine);
    seoHits += 1;
  }
}
fs.writeFileSync(seoMapPath, seoMap, "utf8");
console.log(`seoItemToSlug: ${seoHits} values updated`);

// ── 5. next.config.ts redirects (old → new, permanent) ──────────────────────
const cfgPath = path.join(ROOT, "next.config.ts");
let cfg = fs.readFileSync(cfgPath, "utf8");

const rules = mappings
  .map(
    (m) =>
      `      {\n        source: "/services/${m.category}/${m.oldSlug}",\n        destination: "/services/${m.category}/${m.newSlug}",\n        permanent: true,\n      },`,
  )
  .join("\n");

if (!cfg.includes("MIGRATION-REDIRECTS-START")) {
  const anchor = "    return [\n";
  const block = `      // ── MIGRATION-REDIRECTS-START (auto: slug ← heroHeading) ──────────\n${rules}\n      // ── MIGRATION-REDIRECTS-END ─────────────────────────────────────────\n`;
  cfg = cfg.replace(anchor, anchor + block);
  fs.writeFileSync(cfgPath, cfg, "utf8");
  console.log(`next.config.ts: ${mappings.length} redirects added`);
} else {
  console.log("next.config.ts: redirect block already exists — skipped");
}
