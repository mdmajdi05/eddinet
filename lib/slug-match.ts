// ============================================================================
//  FILE: lib/slug-match.ts
//  "Fuzzy" slug matching — jab koi URL ka slug galat/typo ho to use sabse
//  milte-julte VALID slug se match karta hai, taaki 404 ke bajaye sahi page pe
//  redirect ho sake.
//
//  Yeh PURE functions hain (koi React/Next import nahi) — server par kahin bhi
//  use ho sakte hain.
//
//  Safety: sirf tab match deta hai jab
//    1. best similarity >= minScore (default 0.86), AUR
//    2. best match second-best se minGap (default 0.03) zyada clear ho.
//  Warna null => caller 404 dega. Isse galat page pe redirect nahi hota.
// ============================================================================

/** Classic Levenshtein edit distance (insert / delete / substitute). */
export function levenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  let prev = new Array<number>(n + 1);
  let curr = new Array<number>(n + 1);
  for (let j = 0; j <= n; j += 1) prev[j] = j;

  for (let i = 1; i <= m; i += 1) {
    curr[0] = i;
    for (let j = 1; j <= n; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(
        prev[j] + 1, // delete
        curr[j - 1] + 1, // insert
        prev[j - 1] + cost, // substitute / match
      );
    }
    [prev, curr] = [curr, prev];
  }

  return prev[n];
}

/** 0..1 similarity (1 = identical). Length-normalised edit distance. */
export function slugSimilarity(a: string, b: string): number {
  const max = Math.max(a.length, b.length);
  if (max === 0) return 1;
  return 1 - levenshteinDistance(a, b) / max;
}

export interface ClosestMatchOptions {
  /** Minimum similarity required to accept a match. Default 0.86. */
  minScore?: number;
  /** How much clearer the winner must be over the runner-up. Default 0.03. */
  minGap?: number;
}

/**
 * Return the closest candidate to `input`, or null when nothing is a
 * confident-enough match. Case-insensitive; input is trimmed.
 */
export function findClosestSlug(
  input: string,
  candidates: readonly string[],
  options: ClosestMatchOptions = {},
): string | null {
  const minScore = options.minScore ?? 0.86;
  const minGap = options.minGap ?? 0.03;

  const normalized = input.trim().toLowerCase();
  if (!normalized || candidates.length === 0) return null;

  let best: string | null = null;
  let bestScore = 0;
  let secondScore = 0;

  for (const candidate of candidates) {
    const score = slugSimilarity(normalized, candidate);
    if (score > bestScore) {
      secondScore = bestScore;
      bestScore = score;
      best = candidate;
    } else if (score > secondScore) {
      secondScore = score;
    }
  }

  if (!best || bestScore < minScore) return null;
  // Ambiguous (two candidates almost equally close) => don't guess.
  if (candidates.length > 1 && bestScore - secondScore < minGap) return null;

  return best;
}
