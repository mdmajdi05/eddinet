// ============================================================================
//  FILE: lib/chat/intent.ts  (CHATBOT — INTENT DETECTION)
//  User ke message par data/chat/intents.ts ke patterns chalata hai aur sabse
//  zyada priority wala intent return karta hai.
// ============================================================================

import { INTENTS } from "@/data/chat/intents";
import type { IntentMatch } from "./types";

export function detectIntent(text: string): IntentMatch {
  const trimmed = text.trim();
  if (!trimmed) return { id: "unknown", confidence: 0 };

  let best: IntentMatch = { id: "unknown", confidence: 0 };

  for (const entry of INTENTS) {
    for (const pattern of entry.patterns) {
      if (pattern.test(trimmed)) {
        const confidence = entry.priority / 10;
        if (confidence > best.confidence) {
          best = { id: entry.id, confidence };
        }
        break;
      }
    }
  }

  return best;
}
