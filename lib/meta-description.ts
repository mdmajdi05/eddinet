// ============================================================================
//  FILE: lib/meta-description.ts  (META DESCRIPTION BUILDER)
//  WHAT'S IN THIS FILE:
//    buildMetaDescription() - meta description ko SERP-safe length (160 char)
//                             me laata hai — poore sentences bacha kar.
//
//  WHY:
//    60 child pages ki meta description 160-309 char ki thi (boilerplate tail
//    "Eddinet delivers dependable … Get a free proposal today." + pehle ka
//    paragraph). Google SERP me ~155-160 char ke baad truncate kar deta hai,
//    to extra copy ya to dikhti hi nahi ya adhoori dikhti hai.
//
//  RULE (jo helper follow karta hai):
//    1. <= 160 char → bilkul chhed nahi.
//    2. > 160 char → POORE sentences rakho jitne 160 me aa jaayein.
//       (adhoora sentence SERP me ugly lagta hai)
//    3. Agar pehla sentence hi 160 se bada hai → word-boundary pe cut karo
//       + "…" (keywords hamesha aage rehte hain, isliye kuch nahi jaata).
// ============================================================================

export const META_DESCRIPTION_MAX = 160;

/**
 * Meta description ko 160 char ke andar fit karta hai.
 * @param source - original (hand-written) meta description
 * @param max    - allowed length (default 160)
 */
export function buildMetaDescription(source: string, max = META_DESCRIPTION_MAX): string {
  const clean = source.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;

  // 1) Poore sentences prefer karo.
  const sentences = clean.match(/[^.!?]+[.!?]+/g);
  if (sentences) {
    let out = "";
    for (const raw of sentences) {
      const s = raw.trim();
      if (!s) continue;
      const candidate = out ? `${out} ${s}` : s;
      if (candidate.length > max) break;
      out = candidate;
    }
    // 60 char se chhota matlab pehla sentence hi 160 se bada tha —
    // us case me word-boundary cut better hoga.
    if (out.length >= 60) return out;
  }

  // 2) Word-boundary truncate + ellipsis.
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const head = (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trim();
  return `${head}…`;
}
