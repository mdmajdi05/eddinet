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
//    3. Aakhri (adhoori) row CENTER me aati hai — chahe usme sirf 1 card bache.
//       Akela card bhi bilkul theek hai, bas wo bayen (left) kinare par chipka
//       na rahe. Isliye grid flex + `justify-content: center` hai (globals.css)
//       — isse har line apne aap center hoti hai, aur poori bhari hui row par
//       koi asar nahi padta (wo pehle se hi 100% width leti hai).
//
//  Kaise:
//    - balancedGrid() sirf `cgrid` classes deta hai (globals.css me define hain):
//        cgrid <gap> cgrid-cols-<base> cgrid-at-<bp>-<cols>... [extra]
//    - Columns design se aate hain, count se nahi — isliye class output count
//      par depend nahi karta (aur orphan/pair ka koi fix nahi chahiye).
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
 * Container ke liye poora className return karta hai.
 *
 * `_count` ab class output me use nahi hota (columns sirf design se aate hain),
 * lekin signature waise hi rakhi hai taaki saare callers `balancedGrid(n, …)`
 * bina change kiye chalte rahen.
 */
export function balancedGrid(_count: number, opts: BalancedGridOptions): string {
  const parts = [
    "cgrid",
    opts.gapClass ?? "cgrid-gap-6",
    `cgrid-cols-${opts.base}`,
  ];
  for (const s of opts.stages ?? []) parts.push(`cgrid-at-${s.bp}-${s.maxCols}`);
  if (opts.extra) parts.push(opts.extra);
  return parts.join(" ");
}
