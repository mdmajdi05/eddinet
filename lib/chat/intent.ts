// ============================================================================
//  FILE: lib/chat/intent.ts  (CHATBOT — INTENT DETECTION)
//  User ke message par data/chat/intents.ts ke patterns chalata hai aur sabse
//  zyada priority/confidence wala intent return karta hai.
//
//  Ek message me ek se zyada pattern match ho to confidence thoda badhta hai
//  (e.g. "hi, can you book a free consultation?" -> consultation strong).
// ============================================================================

import { INTENTS } from "@/data/chat/intents";
import { normalizeText } from "./text";
import type { IntentMatch } from "./types";

export function detectIntent(text: string): IntentMatch {
  const normalized = normalizeText(text);
  if (!normalized) return { id: "unknown", confidence: 0 };

  let best: IntentMatch = { id: "unknown", confidence: 0 };

  for (const entry of INTENTS) {
    let matched = 0;

    for (const pattern of entry.patterns) {
      // Defensive: global regex ho to lastIndex reset (warna alternate calls fail).
      pattern.lastIndex = 0;
      if (pattern.test(normalized)) matched++;
    }

    if (!matched) continue;

    // Base = priority; har extra pattern ek chhota boost deta hai.
    const confidence = Math.min(
      0.99,
      entry.priority / 10 + Math.min(0.15, (matched - 1) * 0.04),
    );

    if (confidence > best.confidence) {
      best = { id: entry.id, confidence };
    }
  }

  return best;
}

/** Intent id se definition nikalo (engine ke liye). */
export function getIntent(id: string) {
  return INTENTS.find((i) => i.id === id);
}
