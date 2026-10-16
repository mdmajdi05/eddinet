// ============================================================================
//  FILE: data/chat/bot.ts  (CHATBOT — IDENTITY + PROMPTS)
// WHAT'S IN THIS FILE:
//   BOT_NAME / BOT_TAGLINE  - bot ka naam aur status line
//   GREETING_MESSAGE        - chat kholne par pehla message
//   QUICK_SUGGESTIONS       - welcome ke saath dikhne wale chips
//   FOLLOW_UP_SUGGESTIONS   - har jawab ke baad ke chips
//   NOTIFICATIONS           - floating popup ke rotating messages
//   WHATSAPP_MESSAGE        - WhatsApp par pre-filled text
//
//  >>> Bot ka naam ya tone badalna ho to sirf yahan badlo. <<<
// ============================================================================

import { site } from "@/data/site/contact";
import type { QuickReply } from "@/lib/chat/types";

/** Header + footer me dikhne wala naam. */
export const BOT_NAME = "Eddi";

/** Header ki chhoti status line. */
export const BOT_TAGLINE = "Growth Assistant";

/** Input box ka placeholder. */
export const INPUT_PLACEHOLDER = "Ask about our services...";

/** Chat pehli baar kholne par ye message aata hai. */
export const GREETING_MESSAGE =
  `Hello! 👋 Welcome to **${site.name}** — a digital marketing & software ` +
  `agency in Delhi NCR. I'm ${BOT_NAME}, your AI assistant. ` +
  `Ask me about any service, pricing, process or timelines.`;

/** Welcome message ke saath dikhne wale quick replies. */
export const QUICK_SUGGESTIONS: QuickReply[] = [
  { label: "🔍 Our Services", payload: "What services do you offer?" },
  { label: "💰 Pricing", payload: "How much do your services cost?" },
  { label: "🚀 Free Consultation", payload: "I want a free consultation" },
  { label: "⏱️ Timelines", payload: "How long does SEO take to show results?" },
  { label: "📞 Contact", payload: "How can I contact you?" },
  { label: "🧩 Our Process", payload: "What is your process?" },
];

/** Har jawab ke neeche dikhne wale follow-up chips. */
export const FOLLOW_UP_SUGGESTIONS: QuickReply[] = [
  { label: "🔍 Our Services", payload: "What services do you offer?" },
  { label: "💰 Pricing", payload: "How much do your services cost?" },
  { label: "🚀 Free Consultation", payload: "I want a free consultation" },
];

/** Floating notification popup ke rotating messages. */
export const NOTIFICATIONS: { text: string; action: string }[] = [
  {
    text: `Hey! 👋 Need SEO, ads or a new website? I can help you pick the right service for your goal.`,
    action: "Let's Talk",
  },
  {
    text: `Want a free consultation? Tell me your goal and our team will get back within a few hours.`,
    action: "Get Started",
  },
  {
    text: `Looking to grow on Google and AI search? Ask me about SEO, AI SEO and content.`,
    action: "Ask Eddi",
  },
  {
    text: `Planning a website, app or custom software? I can share timelines, process and next steps.`,
    action: "Explore",
  },
  {
    text: `Not sure where to start? Ask me about pricing, process or how we work — I reply instantly.`,
    action: "Chat Now",
  },
];

/** localStorage key — notification dismiss hone par set hoti hai. */
export const NOTIF_DISMISSED_KEY = "eddinet_chat_notif_dismissed";

/** WhatsApp par pre-filled message. */
export const WHATSAPP_MESSAGE =
  `Hi ${site.name}, I'm interested in your services. Can you share more details?`;

/** User ke message bhejne par bot kitni der "type" kare (ms range). */
export const TYPING_MIN_MS = 500;
export const TYPING_MAX_MS = 950;
