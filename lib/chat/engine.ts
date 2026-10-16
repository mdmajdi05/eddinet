// ============================================================================
//  FILE: lib/chat/engine.ts  (CHATBOT — REPLY ENGINE)
//  Ye pure function hai (koi React nahi): user ka text -> bot ka jawab.
//
//  Order:
//    1. Intent match  -> deterministic canned reply (intents.ts)
//    2. Knowledge base -> best matching Q/A (knowledge.ts)
//    3. Fallback       -> contact details + suggestions
// ============================================================================

import { INTENTS } from "@/data/chat/intents";
import { FOLLOW_UP_SUGGESTIONS, QUICK_SUGGESTIONS } from "@/data/chat/bot";
import { site } from "@/data/site/contact";
import { detectIntent } from "./intent";
import { searchKnowledgeBase } from "./knowledge";
import type { BotReply } from "./types";

export function getBotReply(text: string): BotReply {
  // 1. Deterministic intent reply.
  const { id } = detectIntent(text);
  if (id !== "unknown") {
    const def = INTENTS.find((i) => i.id === id);
    if (def) return def.reply;
  }

  // 2. Knowledge base match.
  const kb = searchKnowledgeBase(text);
  if (kb) {
    return {
      text: kb.answer,
      quickReplies: FOLLOW_UP_SUGGESTIONS,
      link: kb.link,
    };
  }

  // 3. Fallback.
  return {
    text:
      `I'm not fully sure about that one. I can help with our services, pricing, ` +
      `process, timelines and contact details — or connect you with our team.\n\n` +
      `- 📞 **Call:** ${site.phone}\n` +
      `- ✉️ **Email:** ${site.email}`,
    quickReplies: QUICK_SUGGESTIONS,
    link: { label: "Open contact page", href: "/contact" },
  };
}
