// ============================================================================
//  FILE: lib/chat/knowledge.ts  (CHATBOT — KNOWLEDGE BASE SEARCH)
//  Keyword + question + answer token scoring se best matching knowledge base
//  entry nikalta hai. Typo tolerance aur Hinglish aliases `./text` se aate hain.
//
//  Scoring ka idea:
//    - exact keyword phrase      -> sabse strong signal
//    - keyword token overlap     -> strong
//    - question token overlap    -> medium
//    - answer token overlap      -> halka
//    - poora question query me   -> very strong
//    - query coverage            -> isse irrelevant lambi entries nahi jeet ti
// ============================================================================

import { knowledgeBase } from "@/data/chat/knowledge";
import { contentWords, normalizeText, tokenMatches } from "./text";
import type { KnowledgeBaseItem, KnowledgeMatch } from "./types";

/** Is score se kam = "koi confident match nahi". */
const MIN_SCORE = 9;

interface CachedItem {
  keywords: { normalized: string; tokens: string[] }[];
  questionTokens: string[];
  answerTokens: string[];
  normalizedQuestion: string;
}

const cache = new WeakMap<KnowledgeBaseItem, CachedItem>();

function prepare(item: KnowledgeBaseItem): CachedItem {
  const cached = cache.get(item);
  if (cached) return cached;

  const prepared: CachedItem = {
    keywords: item.keywords
      .map((k) => normalizeText(k))
      .filter(Boolean)
      .map((k) => ({ normalized: k, tokens: Array.from(new Set(contentWords(k))) })),
    questionTokens: Array.from(new Set(contentWords(item.question))),
    answerTokens: Array.from(new Set(contentWords(item.answer))),
    normalizedQuestion: normalizeText(item.question),
  };

  cache.set(item, prepared);
  return prepared;
}

function overlapCount(queryTokens: string[], targetTokens: string[]): number {
  let count = 0;
  for (const q of queryTokens) {
    if (targetTokens.some((t) => tokenMatches(q, t))) count++;
  }
  return count;
}

/** Whole-word phrase check — "xylophone" ko "phone" na samjhe. */
function containsPhrase(haystack: string, needle: string): boolean {
  let start = haystack.indexOf(needle);
  while (start !== -1) {
    const before = start === 0 ? "" : haystack[start - 1];
    const after = haystack[start + needle.length] ?? "";
    if (
      !/[\p{L}\p{N}]/u.test(before) &&
      !/[\p{L}\p{N}]/u.test(after)
    ) {
      return true;
    }
    start = haystack.indexOf(needle, start + 1);
  }
  return false;
}

/** Detailed match — score/confidence ke saath (debug + engine dono use karte hain). */
export function searchKnowledgeBaseDetailed(query: string): KnowledgeMatch | null {
  const normalized = normalizeText(query);
  if (!normalized) return null;

  const qTokens = Array.from(new Set(contentWords(normalized)));
  if (!qTokens.length && normalized.length < 3) return null;

  let best: KnowledgeMatch | null = null;

  for (const item of knowledgeBase) {
    const prepared = prepare(item);
    let score = 0;
    let strongSignals = 0;

    // 1. Keywords — phrase ya token overlap.
    for (const kw of prepared.keywords) {
      // Phrase bonus sirf multi-word keywords ko: single generic word
      // ("website") ko extra 8 points na mile, warna FAQ har jagah jeet jaata hai.
      // Word count se check karte hain (token count se nahi) taaki "ui ux"
      // jaise 2-letter acronyms bhi phrase match ho sakein.
      const phraseWords = kw.normalized.split(/\s+/).filter(Boolean).length;
      if (
        phraseWords >= 2 &&
        kw.normalized.length >= 5 &&
        containsPhrase(normalized, kw.normalized)
      ) {
        score += 8;
        strongSignals += 1;
        continue;
      }

      const overlap = overlapCount(qTokens, kw.tokens);
      // Multi-word keyword tab hi count hota hai jab uske kam se kam 2 words
      // match hon — warna "website" jaisa generic word har entry ko trigger
      // kar deta hai (jaise "I need a website" -> audit ka jawab).
      const needed = kw.tokens.length >= 2 ? 2 : 1;
      if (overlap >= needed) {
        score += overlap * 4;
        strongSignals += overlap >= 2 ? 1 : 0.6;
      }
    }

    // 2. Question words ka overlap.
    const questionOverlap = overlapCount(qTokens, prepared.questionTokens);
    if (questionOverlap > 0) {
      score += Math.min(questionOverlap, 4) * 2.5;
      strongSignals += questionOverlap >= 2 ? 1 : 0.4;
    }

    // 3. Poora question query me hai (strong signal).
    if (normalized.length > 5 && prepared.normalizedQuestion.includes(normalized)) {
      score += 14;
      strongSignals += 1;
    }

    // 4. Answer me halka overlap — sirf tab jab pehle se kuch match ho.
    if (strongSignals > 0) {
      const answerOverlap = overlapCount(qTokens, prepared.answerTokens);
      score += Math.min(answerOverlap, 5) * 0.5;
    }

    if (strongSignals < 0.75) continue;

    // 5. Query coverage — saare words samjhe gaye ya nahi.
    const matchedQueryTokens = qTokens.filter(
      (q) =>
        prepared.keywords.some((kw) => kw.tokens.some((t) => tokenMatches(q, t))) ||
        prepared.questionTokens.some((t) => tokenMatches(q, t)),
    ).length;
    const coverage = qTokens.length
      ? matchedQueryTokens / qTokens.length
      : strongSignals > 0
        ? 1
        : 0;
    score += coverage * 6;

    // 6. Priority sirf tie-breaker.
    score += item.priority * 0.15;

    if (score >= MIN_SCORE && (!best || score > best.score)) {
      best = {
        item,
        score,
        confidence: Math.min(1, score / 26),
      };
    }
  }

  return best;
}

/** Backward-compatible simple API — sirf best item. */
export function searchKnowledgeBase(query: string): KnowledgeBaseItem | null {
  return searchKnowledgeBaseDetailed(query)?.item ?? null;
}
