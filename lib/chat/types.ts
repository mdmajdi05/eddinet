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

/**
 * WhatsApp handoff CTA. `message` pre-filled text hai jo WhatsApp me already
 * likha hua khulta hai — user ko kuch type nahi karna padta.
 */
export interface ChatWhatsAppCta {
  label: string;
  message: string;
}

/** Ek chat message (UI me bubble ban ke dikhta hai). */
export interface ChatMessage {
  id: string;
  role: ChatRole;
  /** Markdown-lite text: `**bold**`, `- bullets`, `[label](href)`, `\n` newlines. */
  text: string;
  quickReplies?: QuickReply[];
  link?: ChatLink;
  whatsapp?: ChatWhatsAppCta;
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

/** Knowledge search ka detailed result (confidence/score debugging ke liye). */
export interface KnowledgeMatch {
  item: KnowledgeBaseItem;
  score: number;
  /** 0..1 — kitna confident match hai. */
  confidence: number;
}

/**
 * Lead capture ka draft. WhatsApp handoff ke liye sirf naam + requirement
 * chahiye — phone WhatsApp khud handle karta hai.
 */
export interface LeadDraft {
  name?: string;
  need?: string;
}

/**
 * Conversation ka short-term memory.
 *  - name / last topic yaad rehta hai (follow-up questions ke liye)
 *  - leadStage se "appointment setter" wala flow chalta hai
 *  - lang se Hinglish users ko Hinglish me jawab milta hai
 */
export type LeadStage = "none" | "name" | "need" | "done";

export interface ChatContext {
  /** User ka naam (agar kabhi bataya ho). */
  userName?: string;
  /** Pichhla intent — "yes" / "tell me more" jaise follow-ups ke liye. */
  lastIntent?: IntentId;
  /** Last discussed service — pronouns ("iska", "that service") resolve karne ke liye. */
  lastService?: { title: string; slug: string };
  lead: LeadDraft;
  leadStage: LeadStage;
  /** Kis conversation language me jawab dena hai. */
  lang: "en" | "hi";
  /** Kitne user turns ho chuke hain (variation + typing delay ke liye). */
  turn: number;
}

/** Bot ka final jawab (engine ise return karta hai). */
export interface BotReply {
  text: string;
  quickReplies?: QuickReply[];
  link?: ChatLink;
  whatsapp?: ChatWhatsAppCta;
}

/** Engine ka output — reply ke saath updated context bhi. */
export interface BotResult {
  reply: BotReply;
  context: ChatContext;
}

/** Recognised intents — deterministic jawab ke liye. */
export type IntentId =
  | "greeting"
  | "identity"
  | "bot-check"
  | "capabilities"
  | "services"
  | "pricing"
  | "process"
  | "timeline"
  | "consultation"
  | "start"
  | "audit"
  | "contact"
  | "whatsapp"
  | "company"
  | "portfolio"
  | "blog"
  | "industries"
  | "why-us"
  | "thank-you"
  | "affirm"
  | "bye"
  | "human-handoff"
  | "unknown";

export interface IntentMatch {
  id: IntentId;
  confidence: number;
}
