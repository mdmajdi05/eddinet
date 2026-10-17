// ============================================================================
//  FILE: lib/process-grid.ts
//  Balanced card grids — "Our Process" jaise step cards aur baaki card grids.
//
//  Rule (site owner ka final rule):
//    1. Ek row me kitne cards aate hain, wo CARD KE SIZE se decide hota hai —
//       yaani us section ke apne columns (`base`, aur har breakpoint par uske
//       `stages` ka maxCols). Count ke hisaab se columns KABHI nahi badalte:
//       card ka size jaisa pehle se tha waisa hi rehta hai. Agar kisi section
//       ke cards bade hain aur 3 hi ek row me aate hain, to 3 hi rahenge —
//       4 ke liye cards chhote nahi karenge.
//    2. Rows UPAR se bhar jaati hain (max tak), bacha hua neeche. Jaise 4
//       columns par 6 cards = 4+2 (barabar 3+3 nahi).
//    3. Aakhri (sabse neeche wali) row me akela card kabhi nahi bachta. Agar
//       bachne wala ho (count % cols === 1) to "upar wali row se ek card neeche
//       aa jaata hai": aakhri do cards ko symmetric margin milta hai, jisse
//       upar wali row ka aakhri card neeche wrap ho jaata hai —
//         13 cards, 3 cols -> 3+3+3+2+2     7 cards -> 3+2+2     4 -> 2+2
//       Card ka size (columns) bilkul same rehta hai.
//    4. Adhoori last row (aur last2 ka pair) center me aata hai — flex +
//       justify-content: center ki wajah se, har screen size par.
//
//  Kaise:
//    - balancedGrid() `cgrid` classes deta hai (globals.css me define hain).
//    - Orphan fix (`cgrid-last2*`) sirf usi RANGE me on kiya jaata hai jahan
//      uska asli need hai, kyunki baaki ranges me wahi margin layout tod
//      deta hai (cols 3+ hain par count % cols 1 nahi). Isliye per-range
//      class: `cgrid-last2` (koi stage nahi), `cgrid-last2-gt-<bp>` (base
//      range), `cgrid-last2-<lo>-<hi>` (beech ki range), `cgrid-last2-lt-<bp>`
//      (sabse chhoti range). Naya breakpoint/stage jodte waqt globals.css me
//      us range ki class bhi jodni padti hai (warna fix wahan off rehta hai).
//
//  Usage:
//    const grid = balancedGrid(items.length, {
//      base: 3,
//      gapClass: "cgrid-gap-6",
//      stages: [{ bp: 1024, maxCols: 2 }, { bp: 768, maxCols: 1 }],
//    });
//    <div className={grid}>…cards…</div>
// ============================================================================

export interface GridStage {
  /** max-width breakpoint (px), e.g. 1024. */
  bp: number;
  /** Us breakpoint par columns — yaani wahan ka card size. */
  maxCols: number;
}

export interface BalancedGridOptions {
  /** Bade (desktop) screens par columns — yaani desktop card size. */
  base: number;
  /** Gap class (globals.css me defined), default "cgrid-gap-6" (1.5rem). */
  gapClass?: string;
  /** Responsive stages (max-width). */
  stages?: GridStage[];
  /** Container par extra classes (jaise "relative"). */
  extra?: string;
}

/**
 * Is range me orphan fix chahiye? 3 se kam columns par akela card nikalna
 * possible hi nahi (margin apne aap 0 ho jaata hai), isliye fix sirf jab
 * `cols >= 3` ho aur aakhri row me theek 1 card bachta ho.
 */
function needsPair(count: number, cols: number): boolean {
  return cols >= 3 && count > cols && count % cols === 1;
}

/**
 * Fix ko sirf us range me ON karne wali class. Range ke bounds `lo` (exclusive)
 * aur `hi` (inclusive) hain — dono 0 ka matlab "koi bound nahi". Ye naam
 * globals.css ki rules se match karte hain.
 */
function pairClass(lo: number, hi: number): string {
  if (lo === 0 && hi === 0) return "cgrid-last2"; // koi stage nahi: har width
  if (hi === 0) return `cgrid-last2-gt-${lo}`; // width > lo     (base range)
  if (lo === 0) return `cgrid-last2-lt-${hi}`; // width <= hi    (aakhri range)
  return `cgrid-last2-${lo}-${hi}`; // lo < width <= hi          (beech ki range)
}

/** Container ke liye poora className return karta hai. */
export function balancedGrid(count: number, opts: BalancedGridOptions): string {
  const stages = opts.stages ?? [];

  // Columns = design ke columns. Count se koi talluq nahi.
  const parts = [
    "cgrid",
    opts.gapClass ?? "cgrid-gap-6",
    `cgrid-cols-${opts.base}`,
  ];
  for (const s of stages) parts.push(`cgrid-at-${s.bp}-${s.maxCols}`);

  // Orphan fix: base (desktop) range ke liye...
  if (needsPair(count, opts.base)) {
    parts.push(pairClass(stages[0]?.bp ?? 0, 0));
  }
  // ...aur har stage ki apni range ke liye.
  for (let i = 0; i < stages.length; i++) {
    if (!needsPair(count, stages[i].maxCols)) continue;
    parts.push(pairClass(stages[i + 1]?.bp ?? 0, stages[i].bp));
  }

  if (opts.extra) parts.push(opts.extra);
  return parts.join(" ");
}
