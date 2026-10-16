// ============================================================================
//  FILE: lib/chat/types.ts  (CHATBOT — SHARED TYPES)
//  Chatbot ke saare types yahan. Ye file sirf types rakhti hai (koi runtime
//  code nahi) taaki data/ aur components/ dono ise safely import kar sakein.
// ============================================================================

/** Message kisne bheja. */
export type ChatRole = "bot" | "user";

/** Quick reply chip (click karne par payload bhej diya jaata hai). */
export interface QuickReply {
  label: string;
  payload: string;
}

/** Answer ke saath dikhne wala "Read more" link. */
export interface ChatLink {
  label: string;
  href: string;
}

/** Ek chat message (UI me bubble ban ke dikhta hai). */
export interface ChatMessage {
  id: string;
  role: ChatRole;
  /** Markdown-lite text: `**bold**`, `- bullets`, `[label](href)`, `\n` newlines. */
  text: string;
  quickReplies?: QuickReply[];
  link?: ChatLink;
  createdAt: number;
}

/** Knowledge base entry ka group — sirf organise/debug ke liye. */
export type KnowledgeCategory =
  | "company"
  | "service"
  | "service-detail"
  | "faq"
  | "pricing"
  | "process"
  | "contact"
  | "portfolio"
  | "blog"
  | "industries"
  | "general";

/**
 * Ek knowledge base entry. `searchKnowledgeBase()` isi par score lagata hai.
 * Zyada `priority` = tie hone par pehle chuni jaati hai.
 */
export interface KnowledgeBaseItem {
  id: string;
  category: KnowledgeCategory;
  question: string;
  answer: string;
  keywords: string[];
  link?: ChatLink;
  priority: number;
}

/** Bot ka final jawab (engine ise return karta hai). */
export interface BotReply {
  text: string;
  quickReplies?: QuickReply[];
  link?: ChatLink;
}

/** Recognised intents — deterministic jawab ke liye. */
export type IntentId =
  | "greeting"
  | "services"
  | "pricing"
  | "process"
  | "timeline"
  | "consultation"
  | "contact"
  | "company"
  | "portfolio"
  | "blog"
  | "industries"
  | "why-us"
  | "thank-you"
  | "human-handoff"
  | "unknown";

export interface IntentMatch {
  id: IntentId;
  confidence: number;
}
