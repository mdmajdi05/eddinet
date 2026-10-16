// ============================================================================
//  FILE: lib/process-grid.ts
//  Balanced card grids — "Our Process" jaise step cards aur baaki card grids.
//
//  Problem: count badalne par (4, 5, 6 …) simple CSS grid me aakhri row me ek
//  akela card bach jaata hai (jaise grid-cols-4 + 5 items = 4 upar + 1 niche).
//
//  Solution:
//    1. balancedColumns() — itne columns chunta hai ki aakhri row me akela
//       card na bache aur rows balanced rahein:
//            4 -> 4 (ek line)   5 -> 3+2   6 -> 3+3   7 -> 4+3   9 -> 3+3+3
//    2. balancedGrid() — `cgrid` classes deta hai (globals.css me defined).
//       Flex + justify-center hone ki wajah se jo aakhri row adhoori ho
//       (jaise 3 upar, 2 niche) wo APNE AAP center me aa jaati hai — har
//       screen size par.
//
//  Usage:
//    const grid = balancedGrid(items.length, {
//      base: 3,
//      gapClass: "cgrid-gap-6",
//      stages: [{ bp: 1024, maxCols: 2 }, { bp: 768, maxCols: 1 }],
//    });
//    <div className={grid}>…cards…</div>
// ============================================================================

/**
 * Columns chuno taaki aakhri row me single "orphan" card na bache aur rows
 * balanced rahein. Tie par zyada columns prefer hote hain.
 */
export function balancedColumns(count: number, max: number): number {
  if (count <= 1) return 1;
  if (count <= max) return count; // ek hi row me sab

  let best = max;
  let bestScore = Infinity;

  for (let c = max; c >= 2; c--) {
    const rows = Math.ceil(count / c);
    const lastRow = count - (rows - 1) * c;
    const emptySlots = rows * c - count;
    // Aakhri row me ek akela card = bad; khaali slots aur zyada rows bhi bad.
    const orphan = lastRow === 1 ? 1000 : 0;
    const score = orphan + emptySlots * 2 + (rows - 1) * 3;
    if (score < bestScore) {
      bestScore = score;
      best = c;
    }
  }

  return best;
}

export interface GridStage {
  /** max-width breakpoint (px), e.g. 1024. */
  bp: number;
  /** Us breakpoint par max columns. */
  maxCols: number;
}

export interface BalancedGridOptions {
  /** Bade (desktop) screens par max columns. */
  base: number;
  /** Gap class (globals.css me defined), default "cgrid-gap-6" (1.5rem). */
  gapClass?: string;
  /** Responsive stages (max-width). */
  stages?: GridStage[];
  /** Container par extra classes (jaise "relative"). */
  extra?: string;
  /**
   * `true` = card ka size FIX rahega (columns exactly base/stage ke, count se
   * badlenge nahi) — sirf kam cards center ho jaayenge. Filter wale grids ke
   * liye (jaise "13 Core Expertise Areas"): filter lagane par 1 hi card bache
   * to wo full-width stretch na ho, apne size me hi rahe.
   */
  fixed?: boolean;
}

/** Container ke liye poora className return karta hai. */
export function balancedGrid(count: number, opts: BalancedGridOptions): string {
  const cols = (max: number) => (opts.fixed ? max : balancedColumns(count, max));
  const parts = [
    "cgrid",
    opts.gapClass ?? "cgrid-gap-6",
    `cgrid-cols-${cols(opts.base)}`,
  ];
  for (const s of opts.stages ?? []) {
    parts.push(`cgrid-at-${s.bp}-${cols(s.maxCols)}`);
  }
  if (opts.extra) parts.push(opts.extra);
  return parts.join(" ");
}
