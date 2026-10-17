// ============================================================================
//  FILE: lib/process-grid.ts
//  Balanced card grids — "Our Process" jaise step cards aur baaki card grids.
//
//  Rule (site owner ka final rule):
//    1. Har section ka card size uske apne `base`/`maxCols` columns se decide
//       hota hai. Card size kabhi kam ya zyada NAHI hota — isliye koi section
//       apne base se ZYADA columns use nahi karta (warna cards chhote ho
//       jaate). Agar kisi section ke cards bade hain aur sirf 3 ek row me
//       aate hain, to 3 hi rahenge — 4 ke liye chhota nahi karenge.
//    2. `count <= max` -> saare cards ek hi row me (adhoori row center me).
//    3. `count > max` -> rows UPAR se bhar jaati hain (max tak) — rows ko
//       barabar nahi baanta jaata. Jaise max 4 par 6 cards = 4+2
//       (purana behaviour 3+3 tha, aur wo cards ko chhota kar deta tha).
//    4. Aakhri (bottom) row me kabhi akela card nahi bachta — uske liye
//       thode kam columns liye jaate hain. Jaise max 4 par 5 cards = 3+2.
//    5. Adhoori bottom row center me rehti hai aur har card apne size me
//       rehta hai (partial row stretch nahi hoti).
//
//  Mapping (max = 4, yaani 4-per-row card size):
//    1 -> 1        2 -> 2        3 -> 3        4 -> 4
//    5 -> 3+2      6 -> 4+2      7 -> 4+3      8 -> 4+4
//    9 -> 3+3+3    10 -> 4+4+2   11 -> 4+4+3   12 -> 4+4+4
//    (9 -> 3+3+3 kyunki 4 columns 4+4+1 de deta, yaani akela orphan card.)
//  Mapping (max = 5, jaise home ka "Industries" — 18 cards):
//    5 -> 5        9 -> 5+4      10 -> 5+5     18 -> 5+5+5+3
//
//  Kaise:
//    1. balancedColumns() — itne columns chunta hai ki aakhri row me akela
//       card na bache.
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
 * Columns chuno taaki aakhri row me single "orphan" card na bache. `max` us
 * section ke cards ka size hai (design columns) — isse zyada columns kabhi
 * nahi lete, warna cards chhote ho jaayenge. Rows upar se bhar jaati hain
 * (barabar nahi baanti jaati) — max 4 par 6 -> 4 (4+2), 5 -> 3 (3+2).
 */
export function balancedColumns(count: number, max: number): number {
  if (count <= 1) return 1;
  if (count <= max) return count; // saare cards ek hi row me

  // Sabse zyada columns chuno jo aakhri row me akela card na chhode
  // (remainder 1 = orphan). 6 -> 4 (4+2 hi milega, 3+3 nahi).
  for (let c = max; c >= 2; c--) {
    if (count % c !== 1) return c;
  }
  // Koi bhi option orphan banata hai (jaise 13 cards, max 4) -> max hi rakho.
  return max;
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
