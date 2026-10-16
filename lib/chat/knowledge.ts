// ============================================================================
//  FILE: lib/chat/knowledge.ts  (CHATBOT — KNOWLEDGE BASE SEARCH)
//  Keyword + question-word scoring se best matching knowledge base entry
//  nikalta hai. Kuch na mile to null.
// ============================================================================

import { knowledgeBase } from "@/data/chat/knowledge";
import { contentWords } from "./text";
import type { KnowledgeBaseItem } from "./types";

/** Is score se kam = "koi match nahi". */
const MIN_SCORE = 6;

export function searchKnowledgeBase(query: string): KnowledgeBaseItem | null {
  const q = query.toLowerCase().trim();
  if (!q) return null;

  const qWords = contentWords(q);

  let best: KnowledgeBaseItem | null = null;
  let bestScore = 0;

  for (const item of knowledgeBase) {
    let score = 0;

    // 1. Keyword hits — chhote keywords (<=4 char) sirf poore word par match.
    for (const raw of item.keywords) {
      const kw = raw.toLowerCase();
      if (!kw) continue;
      if (kw.length <= 4) {
        if (qWords.includes(kw)) score += 6;
      } else if (q.includes(kw)) {
        score += 5;
      }
    }

    // 2. Question words ka overlap (sirf meaningful words).
    const questionWords = contentWords(item.question);
    let overlap = 0;
    for (const w of qWords) {
      if (questionWords.some((qw) => qw.includes(w) || w.includes(qw))) overlap++;
    }
    score += overlap * 3;

    // 3. Poora question query me hai (strong signal).
    if (item.question.toLowerCase().includes(q)) score += 12;

    // 4. Priority sirf halka tie-breaker hai.
    score += item.priority * 0.1;

    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  return bestScore >= MIN_SCORE ? best : null;
}
