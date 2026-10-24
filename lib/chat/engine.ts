// ============================================================================
//  FILE: lib/chat/engine.ts  (CHATBOT — REPLY ENGINE)
//  Ye pure function hai (koi React nahi): user ka text + context -> bot ka jawab.
//
//  Order:
//    1. Lead flow        -> naam / requirement collect karke WhatsApp handoff
//    2. High-intent      -> "human", "whatsapp", "free consultation"
//    3. Intent match     -> deterministic canned reply (intents.ts)
//    4. Knowledge base   -> best matching Q/A (knowledge.ts)
//    5. Service mention  -> services.ts data se generated answer
//    6. Smart fallback   -> honest answer + WhatsApp handoff + clarifying chips
//
//  Har reply ke saath updated context return hota hai, isliye bot naam yaad
//  rakhta hai, follow-up samajhta hai aur bina phone number maange WhatsApp
//  par lead bhej deta hai.
// ============================================================================

import { INTENTS } from "@/data/chat/intents";
import {
  buildWhatsAppMessage,
  FOLLOW_UP_SUGGESTIONS,
  NEED_SUGGESTIONS,
  QUICK_SUGGESTIONS,
} from "@/data/chat/bot";
import { services } from "@/data/services/services";
import { site } from "@/data/site/contact";
import { detectIntent } from "./intent";
import { searchKnowledgeBaseDetailed } from "./knowledge";
import {
  contentWords,
  extractName,
  isHinglish,
  isLikelyName,
  isQuestion,
  normalizeText,
  pick,
  tokenMatches,
} from "./text";
import type {
  BotReply,
  BotResult,
  ChatContext,
  ChatWhatsAppCta,
  IntentId,
  KnowledgeBaseItem,
  QuickReply,
} from "./types";

// ─── CONTEXT HELPERS ────────────────────────────────────────────────────────

export function createChatContext(): ChatContext {
  return { lead: {}, leadStage: "none", lang: "en", turn: 0 };
}

function mergeContext(prev?: ChatContext): ChatContext {
  return {
    ...createChatContext(),
    ...prev,
    lead: { ...(prev?.lead ?? {}) },
    lang: prev?.lang ?? "en",
  };
}

function firstName(name?: string): string | undefined {
  return name?.trim().split(/\s+/)[0];
}

/** WhatsApp CTA banao — message already filled, user ko sirf Send dabana hai. */
function whatsappCta(context: ChatContext, need?: string): ChatWhatsAppCta {
  const name = context.lead.name ?? context.userName;
  const interest = need ?? context.lead.need ?? context.lastService?.title;

  return {
    label: name
      ? `Continue on WhatsApp, ${firstName(name)} →`
      : "Chat with our team on WhatsApp →",
    message: buildWhatsAppMessage({ name, need: interest }),
  };
}

function withWhatsApp(
  reply: BotReply,
  context: ChatContext,
  need?: string,
): BotReply {
  if (reply.whatsapp) return reply;
  return { ...reply, whatsapp: whatsappCta(context, need) };
}

/** Common follow-up chips (conversation ko aage badhane ke liye). */
const NEXT_CHIPS: QuickReply[] = [
  { label: "💰 Pricing", payload: "How much do your services cost?" },
  { label: "🚀 Free Consultation", payload: "I want a free consultation" },
  { label: "💬 WhatsApp Team", payload: "Connect me on WhatsApp" },
];

// ─── SERVICE MATCHING ───────────────────────────────────────────────────────

interface ServiceMention {
  title: string;
  slug: string;
  desc: string;
  allItems: string[];
}

const SERVICE_TERMS = services.map((s) => ({
  service: s,
  terms: Array.from(
    new Set([
      s.title,
      s.tabLabel,
      s.footerLabel,
      s.slug.replace(/-/g, " "),
      ...s.allItems,
    ]),
  ).map((t) => {
    const normalized = normalizeText(t);
    return {
      normalized,
      tokens: Array.from(new Set(contentWords(normalized))),
    };
  }),
}));

/**
 * Message me mention hui service pakdo.
 * "website banwana hai", "need seo", "shopify store" — sab kaam karta hai.
 */
export function matchService(text: string): ServiceMention | null {
  const normalized = normalizeText(text);
  if (!normalized) return null;

  const tokens = Array.from(new Set(contentWords(normalized)));
  let best: ServiceMention | null = null;
  let bestScore = 0;

  for (const entry of SERVICE_TERMS) {
    let score = 0;

    for (const term of entry.terms) {
      if (!term.normalized) continue;

      if (term.normalized.length >= 5 && normalized.includes(term.normalized)) {
        score += 3;
        continue;
      }

      let overlap = 0;
      for (const t of term.tokens) {
        if (tokens.some((q) => tokenMatches(q, t))) overlap++;
      }
      if (overlap) score += Math.min(overlap, 2);
    }

    if (score > bestScore) {
      bestScore = score;
      best = {
        title: entry.service.title,
        slug: entry.service.slug,
        desc: entry.service.desc,
        allItems: entry.service.allItems,
      };
    }
  }

  // Threshold: generic words ("business", "work") se false match na ho.
  return bestScore >= 3 ? best : null;
}

function serviceReply(service: ServiceMention, context: ChatContext): BotReply {
  const shown = service.allItems.slice(0, 8);
  const more = service.allItems.length - shown.length;

  return withWhatsApp(
    {
      text:
        `**${service.title}** — ${service.desc}\n\n` +
        `**What's included:**\n${shown.map((i) => `- ${i}`).join("\n")}` +
        `${more > 0 ? `\n- +${more} more` : ""}\n\n` +
        `👉 [Explore ${service.title}](/services/${service.slug})`,
      quickReplies: NEXT_CHIPS,
      link: { label: `Explore ${service.title}`, href: `/services/${service.slug}` },
    },
    context,
    service.title,
  );
}

// ─── LANGUAGE HELPERS ───────────────────────────────────────────────────────

function nameQuestion(hi: boolean): string {
  return hi
    ? `Aapka naam kya hai? 😊 (first name bhi chalega)`
    : `What's your name? 😊 (First name is fine.)`;
}

function needQuestion(name: string | undefined, hi: boolean): string {
  const who = name ? `${firstName(name)}` : "";
  return hi
    ? `${who ? `Nice to meet you, ${who}! ` : ""}Aap kis cheez me help chahte hain — SEO, ads, website, software/AI, ya kuch aur?`
    : `${who ? `Nice to meet you, ${who}! ` : ""}What are you looking to grow — SEO, ads, a website, software/AI, or something else?`;
}

function cleanNeed(text: string): string {
  const cleaned = text
    .replace(
      /^(i\s+(need|want)|we\s+(need|want)|help\s+(me\s+)?with|looking\s+for|interested\s+in|mujhe|humein)\s+/i,
      "",
    )
    .replace(/[.!?]+$/g, "")
    .trim();
  return (cleaned || text).slice(0, 140);
}

// ─── LEAD FLOW ──────────────────────────────────────────────────────────────

function askName(context: ChatContext, hi: boolean, note?: string): BotReply {
  context.leadStage = "name";
  return {
    text:
      `${note ? `${note}\n\n` : ""}${nameQuestion(hi)}\n\n` +
      `Once I have your name and what you need, I'll connect you to our team on ` +
      `WhatsApp with everything already filled in.`,
    quickReplies: [
      { label: "💬 Skip — just WhatsApp me", payload: "Connect me on WhatsApp" },
      { label: "💰 Pricing first", payload: "How much do your services cost?" },
    ],
  };
}

function askNeed(context: ChatContext, hi: boolean): BotReply {
  context.leadStage = "need";
  return {
    text: needQuestion(context.lead.name ?? context.userName, hi),
    quickReplies: NEED_SUGGESTIONS,
  };
}

function handoffReply(context: ChatContext, hi: boolean): BotReply {
  context.leadStage = "done";
  const name = firstName(context.lead.name ?? context.userName);
  const cta = whatsappCta(context);

  return {
    text:
      hi
        ? `Perfect${name ? `, ${name}` : ""}! ✅\n\n` +
          `Neeche wala green **WhatsApp** button dabaiye — aapka message pehle se ` +
          `likha hua hoga, bas Send karna hai. Hamari team aapko jaldi reply karegi.`
        : `Perfect${name ? `, ${name}` : ""}! ✅\n\n` +
          `Tap the green **WhatsApp** button below — your message is already written ` +
          `for you, so you only need to hit Send. Our team usually replies within ` +
          `**2 business hours** on working days.`,
    quickReplies: [
      { label: "📞 Call instead", payload: "How can I contact you?" },
      { label: "🔍 Explore services", payload: "What services do you offer?" },
    ],
    link: { label: "Open contact page", href: "/contact" },
    whatsapp: cta,
  };
}

function startLead(context: ChatContext, text: string, hi: boolean): BotReply {
  const mentioned = matchService(text);
  if (mentioned) {
    context.lead.need = mentioned.title;
    context.lastService = { title: mentioned.title, slug: mentioned.slug };
  } else if (!context.lead.need && context.lastService) {
    // Pehle SEO ke baare me baat hui thi, ab "free consultation" — requirement
    // yaad rakho taaki dobara na poochhna pade.
    context.lead.need = context.lastService.title;
  }

  if (context.lead.name || context.userName) {
    context.lead.name = context.lead.name ?? context.userName;
    if (context.lead.need) return handoffReply(context, hi);
    return askNeed(context, hi);
  }

  return askName(context, hi);
}

/** Lead flow ke beech aaye sawaal ka jawab do, phir flow gently continue karo. */
function continueLead(
  text: string,
  context: ChatContext,
  intent: IntentId,
  hi: boolean,
): BotReply | null {
  if (context.leadStage !== "name" && context.leadStage !== "need") return null;

  // Escape hatch — user ko WhatsApp chahiye.
  if (intent === "whatsapp" || intent === "human-handoff") {
    return handoffReply(context, hi);
  }

  const mentioned = matchService(text);

  if (context.leadStage === "name") {
    // User ne service bata di, naam nahi — requirement yaad rakho, naam phir poochho.
    if (mentioned && !isLikelyName(text)) {
      context.lead.need = mentioned.title;
      return askName(context, hi, `Great — **${mentioned.title}**. 👌`);
    }

    // Beech me koi sawaal? Pehle uska jawab, phir naam.
    if (isQuestion(text) && !isLikelyName(text)) {
      const savedStage = context.leadStage;
      context.leadStage = "none";
      const answer = informationalReply(text, context, hi, intent);
      context.leadStage = savedStage;
      return {
        ...answer,
        text: `${answer.text}\n\nBy the way — ${nameQuestion(hi)}`,
      };
    }

    const name = extractName(text);
    if (!name) {
      return askName(
        context,
        hi,
        `I just need a name to introduce you to the team. 😊`,
      );
    }

    context.lead.name = name;
    context.userName = name;

    if (context.lead.need) return handoffReply(context, hi);
    return askNeed(context, hi);
  }

  // stage === "need"
  if (isQuestion(text) && !mentioned) {
    const savedStage = context.leadStage;
    context.leadStage = "none";
    const answer = informationalReply(text, context, hi, intent);
    context.leadStage = savedStage;
    return {
      ...answer,
      text: `${answer.text}\n\nSo, what would you like help with?`,
    };
  }

  context.lead.need = mentioned?.title ?? cleanNeed(text);

  if (!context.lead.name && context.userName) context.lead.name = context.userName;
  if (!context.lead.name) return askName(context, hi);

  return handoffReply(context, hi);
}

// ─── INFORMATIONAL REPLIES (intent + knowledge + service + fallback) ────────

const LEAD_INTENTS: IntentId[] = [
  "consultation",
  "whatsapp",
  "human-handoff",
];

/** "tell me more" / "aur batao" jaise follow-ups. */
const FOLLOW_UP_RE =
  /^(tell me more|more (details|info|information)|explain( more)?|details|aur batao|iska detail|iske baare me batao)\b/i;

function toMention(service: (typeof services)[number]): ServiceMention {
  return {
    title: service.title,
    slug: service.slug,
    desc: service.desc,
    allItems: service.allItems,
  };
}

function lastServiceFromLink(href?: string): ChatContext["lastService"] {
  if (!href) return undefined;
  const match = href.match(/^\/services\/([^/?#]+)/);
  if (!match) return undefined;
  const service = services.find((s) => s.slug === match[1]);
  return service ? { title: service.title, slug: service.slug } : undefined;
}

function rememberService(context: ChatContext, text: string) {
  const mentioned = matchService(text);
  if (mentioned) {
    context.lastService = { title: mentioned.title, slug: mentioned.slug };
  }
}

/** "how much does it cost" jaise pronouns ko last topic se resolve karo. */
function resolvePronouns(text: string, context: ChatContext): string {
  if (!context.lastService) return text;
  if (matchService(text)) return text;

  const hasPronoun =
    /\b(it|this|that|these|those|same|service)\b/i.test(text) ||
    /\b(iska|uska|iske|uske|yeh|woh|ye|wo)\b/i.test(text);

  return hasPronoun ? `${context.lastService.title} ${text}` : text;
}

function followUpChips(): QuickReply[] {
  return [
    { label: "💬 WhatsApp Team", payload: "Connect me on WhatsApp" },
    ...FOLLOW_UP_SUGGESTIONS.filter(
      (s) => s.payload !== "I want a free consultation",
    ),
    { label: "🚀 Free Consultation", payload: "I want a free consultation" },
  ];
}

function needsCta(intent: IntentId): boolean {
  return (
    intent === "pricing" ||
    intent === "contact" ||
    intent === "audit" ||
    intent === "start" ||
    intent === "services"
  );
}

function decorateKnowledge(
  item: KnowledgeBaseItem,
  context: ChatContext,
): BotReply {
  const reply: BotReply = {
    text: item.answer,
    quickReplies: followUpChips(),
    link: item.link,
  };

  const wantsCta =
    item.category === "service" ||
    item.category === "service-detail" ||
    item.category === "pricing" ||
    item.category === "contact" ||
    item.category === "general" ||
    item.category === "process" ||
    item.category === "faq" ||
    item.category === "industries";

  return wantsCta ? withWhatsApp(reply, context) : reply;
}

function fallbackReply(text: string, context: ChatContext, hi: boolean): BotReply {
  const name = firstName(context.userName);
  const opener = pick(
    [
      `That's a good question — and I'd rather give you the right answer than guess.`,
      `I want to get this exactly right for you.`,
      `Happy to help with that — let me point you in the right direction.`,
    ],
    context.turn,
  );

  return withWhatsApp(
    {
      text:
        hi
          ? `Achha sawaal hai! Main guess nahi karna chahta — sahi jawab dene ke liye ` +
            `aapko hamari team se WhatsApp par connect kar deta hoon. 😊\n\n` +
            `Aap mujhse services, pricing, process ya timelines ke baare me bhi ` +
            `pooch sakte hain — turant jawab milega.\n\n` +
            `- 📞 **Call:** ${site.phone}\n- ✉️ **Email:** ${site.email}`
          : `${opener}${name ? ` ${name},` : ""}\n\n` +
            `I can connect you to our team on **WhatsApp** right now — or ask me ` +
            `anything about our services, pricing, process or timelines and I'll ` +
            `answer instantly.\n\n` +
            `- 📞 **Call:** ${site.phone}\n- ✉️ **Email:** ${site.email}`,
      quickReplies: [
        { label: "🧠 What can you do?", payload: "What can you help me with?" },
        { label: "🔍 Our Services", payload: "What services do you offer?" },
        { label: "💰 Pricing", payload: "How much do your services cost?" },
        { label: "💬 WhatsApp Team", payload: "Connect me on WhatsApp" },
      ],
      link: { label: "Open contact page", href: "/contact" },
    },
    context,
  );
}

function informationalReply(
  text: string,
  context: ChatContext,
  hi: boolean,
  intent: IntentId,
): BotReply {
  const mentioned = matchService(text);
  if (mentioned) {
    context.lastService = { title: mentioned.title, slug: mentioned.slug };
  }

  // "tell me more" / "aur batao" — pichhli service par deeper answer do.
  if (context.lastService && FOLLOW_UP_RE.test(text.trim())) {
    const service = services.find((s) => s.slug === context.lastService?.slug);
    if (service) return serviceReply(toMention(service), context);
  }

  // Specific service ke saath "services" poocha gaya ho to general list nahi,
  // us service ka detail do.
  if (mentioned && intent === "services") {
    return serviceReply(mentioned, context);
  }

  const def = INTENTS.find((i) => i.id === intent);

  // "Hi, I need SEO" jaise message me greeting ko jeetne na do — actual
  // requirement ka jawab do. Sirf "hi" par greeting hi rehne do.
  const greetingWithMore = intent === "greeting" && mentioned;

  if (
    def &&
    intent !== "unknown" &&
    !LEAD_INTENTS.includes(intent) &&
    !greetingWithMore
  ) {
    let reply: BotReply = def.reply;

    if (intent === "greeting") {
      if (hi) {
        reply = {
          ...reply,
          text: context.userName
            ? `Namaste, ${firstName(context.userName)}! 👋 Wapas swagat hai. ` +
              `Main **Eddy** hoon — aap services, pricing, timelines ya process ` +
              `ke baare me kuch bhi pooch sakte hain.`
            : `Namaste! 👋 Main **Eddy** hoon — Eddinet ka AI growth assistant. ` +
              `Aap SEO, AI SEO, ads, website, software/AI, pricing ya timelines ke ` +
              `baare me kuch bhi pooch sakte hain. Human se baat karni ho to main ` +
              `WhatsApp par turant connect kar dunga.`,
        };
      } else if (context.userName) {
        reply = {
          ...reply,
          text: `Welcome back, ${firstName(context.userName)}! 👋 Great to see you again.\n\n${reply.text}`,
        };
      }
    }

    if (intent === "identity" && hi) {
      reply = {
        ...reply,
        text:
          `Main **Eddy** hoon 😊 — Eddinet ka AI growth assistant.\n\n` +
          `Main aapko hamari services, pricing approach, process aur timelines ` +
          `batata hoon, aur jab aap ready hon to WhatsApp par team se connect ` +
          `kar deta hoon. Aap kya explore karna chahenge?`,
      };
    }

    if (intent === "affirm" && context.leadStage === "done") {
      reply = handoffReply(context, hi);
    }

    return needsCta(intent) ? withWhatsApp(reply, context) : reply;
  }

  // Knowledge base — pronoun-resolved query.
  const query = resolvePronouns(text, context);
  const match = searchKnowledgeBaseDetailed(query);

  if (match) {
    const service = lastServiceFromLink(match.item.link?.href);
    if (service) context.lastService = service;

    // Service ka naam liya gaya hai par KB match kamzor hai (generic FAQ) —
    // us service ka proper intro do, unrelated FAQ nahi. Pricing/contact
    // answers ko kabhi override mat karo — wahan user ka asli sawaal zyada
    // important hai.
    if (
      mentioned &&
      match.confidence < 0.55 &&
      match.item.category !== "pricing" &&
      match.item.category !== "contact"
    ) {
      return serviceReply(mentioned, context);
    }

    return decorateKnowledge(match.item, context);
  }

  // Service mention (knowledge me exact entry na mile to bhi).
  if (mentioned) return serviceReply(mentioned, context);

  return fallbackReply(text, context, hi);
}

// ─── MAIN ENTRY POINT ───────────────────────────────────────────────────────

export function getBotReply(text: string, prev?: ChatContext): BotResult {
  const context = mergeContext(prev);
  const trimmed = text.trim();

  if (!trimmed) {
    return {
      reply: {
        text: `Ask me anything about our services, pricing or timelines — I'm here to help. 😊`,
        quickReplies: QUICK_SUGGESTIONS,
      },
      context,
    };
  }

  context.turn += 1;

  // Language: Hinglish mile to Hinglish, warna English.
  if (isHinglish(trimmed)) context.lang = "hi";
  else if (/[a-zA-Z]{3}/.test(trimmed)) context.lang = "en";
  const hi = context.lang === "hi";

  const intent = detectIntent(trimmed).id;
  const explicitName = extractName(trimmed);
  const isNameIntro =
    Boolean(explicitName) &&
    /(my name is|mera naam|this is|i'?m|i am)\b/i.test(trimmed);

  let newName: string | undefined;
  if (isNameIntro && explicitName && context.userName !== explicitName) {
    newName = explicitName;
    context.userName = explicitName;
    if (!context.lead.name) context.lead.name = explicitName;
  }

  let reply: BotReply;

  // 1. Lead flow in progress.
  const leadReply = continueLead(trimmed, context, intent, hi);
  if (leadReply) {
    reply = leadReply;
  } else if (intent === "whatsapp" || intent === "human-handoff") {
    // 2. Direct human handoff — no questions asked.
    reply = handoffReply(context, hi);
    const def = INTENTS.find((i) => i.id === intent);
    if (def && intent === "human-handoff") {
      reply = {
        ...def.reply,
        text: `${def.reply.text}\n\n${hi ? "Neeche WhatsApp button se seedha connect ho jaaiye." : "Tap the WhatsApp button below and your message is ready to send."}`,
        whatsapp: whatsappCta(context),
      };
      context.leadStage = "done";
    }
  } else if (intent === "consultation") {
    // 3. Consultation = lead flow start.
    reply = startLead(context, trimmed, hi);
  } else if (
    // 3b. Clear "yes" right after a service answer = buying signal.
    intent === "affirm" &&
    context.lastService &&
    /^(yes|yeah|yep|sure|haan|han|bilkul|go ahead|let'?s do it)$/i.test(trimmed)
  ) {
    reply = startLead(context, context.lastService.title, hi);
  } else {
    // 4. Normal informational reply.
    reply = informationalReply(trimmed, context, hi, intent);

    // Naam-only introduction ka warm reply.
    if (newName && intent === "unknown" && !matchService(trimmed)) {
      const onlyName = trimmed
        .replace(/^(my name is|i'?m|i am|this is|mera naam)\s+/i, "")
        .replace(/\s+hai$/i, "")
        .replace(/[.!]/g, "")
        .trim();
      if (isLikelyName(onlyName)) {
        reply = {
          text:
            `Lovely to meet you, **${firstName(newName)}**! 😊\n\n` +
            `I'm Eddy, Eddinet's AI growth assistant. What are you looking to grow — ` +
            `SEO, ads, a website, software/AI, or something else?`,
          quickReplies: NEED_SUGGESTIONS,
        };
      }
    }
  }

  // Naam ke saath koi aur baat bhi ho ("my name is Rahul, need SEO") to
  // jawab ke shuru me warm acknowledgment add karo.
  if (newName && !reply.text.includes(newName)) {
    reply = {
      ...reply,
      text: `Nice to meet you, **${firstName(newName)}**! 😊\n\n${reply.text}`,
    };
  }

  context.lastIntent = intent;

  return { reply, context };
}
