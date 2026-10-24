// ============================================================================
//  FILE: data/chat/bot.ts  (CHATBOT — IDENTITY + PROMPTS)
// WHAT'S IN THIS FILE:
//   BOT_NAME / BOT_TAGLINE  - bot ka naam aur status line
//   GREETING_MESSAGE        - chat kholne par pehla message
//   QUICK_SUGGESTIONS       - welcome ke saath dikhne wale chips
//   FOLLOW_UP_SUGGESTIONS   - har jawab ke baad ke chips
//   NOTIFICATIONS           - floating popup ke rotating messages
//   WHATSAPP_MESSAGE        - WhatsApp par pre-filled text
//   buildWhatsAppMessage()  - lead details ke saath pre-filled WhatsApp text
//
//  >>> Bot ka naam ya tone badalna ho to sirf yahan badlo. <<<
// ============================================================================

import { site } from "@/data/site/contact";
import type { QuickReply } from "@/lib/chat/types";

/** Header + footer me dikhne wala naam. */
export const BOT_NAME = "Eddy";

/** Bot ki asli identity — "who are you" par yahi batate hain. */
export const BOT_ROLE = "Eddinet's AI growth assistant";

/** Header ki chhoti status line. */
export const BOT_TAGLINE = "AI Growth Assistant";

/** Input box ka placeholder. */
export const INPUT_PLACEHOLDER = "Type your question — I reply instantly…";

/** Chat pehli baar kholne par ye message aata hai. */
export const GREETING_MESSAGE =
  `Hi! 👋 I'm **${BOT_NAME}**, ${BOT_ROLE} at **${site.name}**.\n\n` +
  `Ask me anything about SEO, AI SEO, ads, websites, eCommerce, apps, ` +
  `software/AI, cloud, pricing or timelines. If you'd rather talk to a human, ` +
  `I can connect you on **WhatsApp** in one tap.\n\n` +
  `What are you looking to grow?`;

/** Welcome message ke saath dikhne wale quick replies. */
export const QUICK_SUGGESTIONS: QuickReply[] = [
  { label: "🔍 Our Services", payload: "What services do you offer?" },
  { label: "💰 Pricing", payload: "How much do your services cost?" },
  { label: "🚀 Free Consultation", payload: "I want a free consultation" },
  { label: "💬 Talk to Human", payload: "Connect me on WhatsApp" },
  { label: "⏱️ SEO Timelines", payload: "How long does SEO take to show results?" },
  { label: "🧠 What Can You Do?", payload: "What can you help me with?" },
];

/** Har jawab ke neeche dikhne wale follow-up chips. */
export const FOLLOW_UP_SUGGESTIONS: QuickReply[] = [
  { label: "💰 Pricing", payload: "How much do your services cost?" },
  { label: "🚀 Free Consultation", payload: "I want a free consultation" },
  { label: "💬 WhatsApp Us", payload: "Connect me on WhatsApp" },
];

/** Lead flow me "kis cheez me help chahiye" ke liye chips. */
export const NEED_SUGGESTIONS: QuickReply[] = [
  { label: "🔍 SEO / AI SEO", payload: "SEO and AI SEO" },
  { label: "📈 Google / Meta Ads", payload: "Google and Meta Ads" },
  { label: "💻 Website / eCommerce", payload: "Website or eCommerce store" },
  { label: "🤖 Software / AI", payload: "Software or AI solution" },
  { label: "✨ Not sure yet", payload: "Not sure yet — need guidance" },
];

/** Floating notification popup ke rotating messages. */
export const NOTIFICATIONS: { text: string; action: string }[] = [
  {
    text: `Hi 👋 I'm Eddy, Eddinet's AI assistant. Ask me about SEO, ads, websites or pricing — instant answer, no form.`,
    action: "Ask Eddy",
  },
  {
    text: `Planning a new website or app? I can share the process, timelines and a realistic next step in seconds.`,
    action: "Get Answers",
  },
  {
    text: `Want a free growth consultation? Tell me your goal and I'll connect you to our team on WhatsApp.`,
    action: "Talk to Us",
  },
  {
    text: `Wondering how long SEO takes or what it costs? Ask me — I'll give you a clear, honest answer.`,
    action: "Ask a Question",
  },
  {
    text: `Not sure which service you need? Describe your business and I'll recommend the right starting point.`,
    action: "Find My Fit",
  },
];

/** localStorage key — notification dismiss hone par set hoti hai. */
export const NOTIF_DISMISSED_KEY = "eddinet_chat_notif_dismissed";

/** Chat session (messages + context) ke liye sessionStorage key. */
export const CHAT_SESSION_KEY = "eddinet_chat_session_v1";

/** WhatsApp par generic pre-filled message. */
export const WHATSAPP_MESSAGE =
  `Hi ${site.name}, I'm interested in your services. Can you share more details?`;

/**
 * Lead details ke saath WhatsApp message banao — user ko kuch type karna hi
 * nahi padta, sirf Send dabana hota hai.
 */
export function buildWhatsAppMessage({
  name,
  need,
}: {
  name?: string;
  need?: string;
}): string {
  const lines = [`Hi ${site.name}! 👋`];

  if (name) lines.push(`I'm ${name}.`);
  lines.push(
    need
      ? `I'm interested in ${need}.`
      : `I'm interested in your services.`,
  );
  lines.push(`Please share the next steps and pricing.`);

  return lines.join(" ");
}

/** User ke message bhejne par bot kitni der "type" kare (ms range). */
export const TYPING_MIN_MS = 450;
export const TYPING_MAX_MS = 900;
