// ============================================================================
//  FILE: lib/chat/text.ts  (CHATBOT — TEXT HELPERS)
//  Chhote text utilities jo intent/knowledge search dono use karte hain.
// ============================================================================

/** Common words jo search me noise banate hain — ignore. */
export const STOP_WORDS = new Set([
  "the", "and", "for", "you", "your", "yours", "our", "ours", "with", "without",
  "what", "which", "who", "why", "when", "where", "how", "does", "do", "did",
  "can", "could", "would", "should", "are", "is", "was", "were", "will", "be",
  "about", "from", "into", "that", "this", "these", "those", "have", "has", "had",
  "any", "all", "not", "but", "get", "got", "make", "made", "use", "using", "used",
  "out", "much", "many", "need", "want", "tell", "give", "show", "help", "please",
  "there", "here", "they", "them", "work", "works", "working", "thing", "things",
  "some", "just", "also", "very", "more", "most", "like", "than", "then",
]);

/**
 * Text ko meaningful words me todta hai (lowercase, punctuation hataya,
 * stop-words + chhote words ignore).
 */
export function contentWords(text: string, minLength = 3): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9+]+/)
    .filter((w) => w.length >= minLength && !STOP_WORDS.has(w));
}

/** Content words ka unique set (knowledge base keywords ke liye). */
export function keywordsFrom(text: string): string[] {
  return Array.from(new Set(contentWords(text)));
}
