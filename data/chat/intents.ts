// ============================================================================
//  FILE: data/chat/intents.ts  (CHATBOT — INTENT PATTERNS + CANNED REPLIES)
// WHAT'S IN THIS FILE:
//   INTENTS[] - har intent ke regex patterns + uska deterministic jawab
//
//  Kaam kaise karta hai:
//   1. lib/chat/intent.ts  -> user ke text par INTENTS ke patterns chalata hai
//   2. jo intent sabse zyada priority ke saath match kare, uska `reply` diya jaata hai
//   3. koi intent match na ho -> lib/chat/knowledge.ts ka knowledge base search hota hai
//
//  Naya intent add karna ho:
//   - IntentId union (lib/chat/types.ts) me naam add karo
//   - yahan ek entry add karo (patterns + reply)
// ============================================================================

import { services } from "@/data/services/services";
import { processSteps, whyFeatures } from "@/data/home/home";
import { industries } from "@/data/industries/industries";
import { site } from "@/data/site/contact";
import type { BotReply, IntentId } from "@/lib/chat/types";
import { FOLLOW_UP_SUGGESTIONS, QUICK_SUGGESTIONS } from "./bot";

export interface IntentDef {
  id: IntentId;
  /** 1..10 — confidence = priority / 10. Zyada = pehle. */
  priority: number;
  patterns: RegExp[];
  reply: BotReply;
}

/** 13 capability areas ka bullet list (services data se generate). */
const SERVICES_LIST = services
  .map((s) => `- ${s.icon} **${s.title}** — [explore](/services/${s.slug})`)
  .join("\n");

/** 6-step process (home data se generate). */
const PROCESS_LIST = processSteps
  .map((p) => `- **${p.num} ${p.title}** — ${p.desc}`)
  .join("\n");

/** Why-choose list (home data se generate). */
const WHY_LIST = whyFeatures
  .map((w) => `- **${w.title}** — ${w.desc}`)
  .join("\n");

/** Industries list (data se generate). */
const INDUSTRIES_LIST = industries
  .map((i) => `- ${i.icon} ${i.name}`)
  .join("\n");

export const INTENTS: IntentDef[] = [
  {
    id: "greeting",
    priority: 2,
    patterns: [
      /^(hi|hii+|hello+|hey+|howdy|greetings|good\s+(morning|evening|afternoon)|yo|sup)\b/i,
      /^(what'?s up|wasup|namaste|namaskar)\b/i,
    ],
    reply: {
      text:
        `Hello! 👋 Welcome to **${site.name}**. I'm the Eddinet assistant — ` +
        `ask me anything about our services, pricing, process or timelines.`,
      quickReplies: QUICK_SUGGESTIONS,
    },
  },
  {
    id: "services",
    priority: 7,
    patterns: [
      /what\s+(services|do\s+you\s+(do|offer|provide)|can\s+you\s+do)/i,
      /\b(your|all)\s+services\b/i,
      /list\s+(of\s+)?services/i,
      /what\s+(are\s+)?(your\s+)?capabilit/i,
      /tell\s+me\s+(about|what)\s+you\s+(do|offer|provide)/i,
    ],
    reply: {
      text:
        `We cover **13 core capability areas** — marketing, technology and ` +
        `infrastructure as one connected growth system:\n\n${SERVICES_LIST}\n\n` +
        `👉 [See all services](/services)\n\nWhich area would you like to explore?`,
      quickReplies: [
        { label: "🔍 SEO", payload: "Tell me about SEO services" },
        { label: "📊 Ads / PPC", payload: "Tell me about Ads / PPC services" },
        { label: "💻 Web Development", payload: "Tell me about Web Development services" },
        { label: "🤖 Software & AI", payload: "Tell me about Software & AI services" },
      ],
      link: { label: "See all services", href: "/services" },
    },
  },
  {
    id: "pricing",
    priority: 8,
    patterns: [
      /(how\s+much|price|pricing|cost|charges?|rate|budget|fees?)/i,
      /what\s+(is\s+)?the\s+(price|cost|charge)/i,
      /(cheap|affordable|expensive|quotation|quote|estimate)/i,
    ],
    reply: {
      text:
        `Pricing depends on your goals, scope and the channels involved — we ` +
        `don't sell one-size-fits-all packages. Here's how it works:\n\n` +
        `- **Discovery first** — we understand your business and the growth constraint\n` +
        `- **Right-sized scope** — only the services that solve the problem\n` +
        `- **Clear proposal** — transparent scope, deliverables and pricing\n\n` +
        `👉 Share your requirement and we'll send a custom quote. ` +
        `Call **${site.phone}** or email **${site.email}**.`,
      quickReplies: [
        { label: "🚀 Get a Quote", payload: "I want a free consultation" },
        { label: "🔍 Our Services", payload: "What services do you offer?" },
      ],
      link: { label: "Talk to our team", href: "/contact" },
    },
  },
  {
    id: "process",
    priority: 6,
    patterns: [
      /what\s+is\s+your\s+process/i,
      /how\s+(do\s+you|does\s+(eddinet|it))\s+work/i,
      /(your\s+)?(workflow|methodology|approach|steps)/i,
      /how\s+do\s+you\s+(start|begin)/i,
    ],
    reply: {
      text: `Here's how we work — six connected steps:\n\n${PROCESS_LIST}`,
      quickReplies: FOLLOW_UP_SUGGESTIONS,
    },
  },
  {
    id: "timeline",
    priority: 6,
    patterns: [
      /how\s+long\s+(does|do|will|until)/i,
      /\b(timeline|time\s+frame|duration|how\s+soon|when\s+will|delivery\s+time)\b/i,
      /how\s+many\s+(days|weeks|months)/i,
    ],
    reply: {
      text:
        `Timelines depend on the service — here are typical ranges:\n\n` +
        `- **SEO / AI SEO** — visible movement in 3–4 months, meaningful impact in 6–12 months\n` +
        `- **Paid ads (Google / Meta)** — live in days, optimisation ongoing\n` +
        `- **Website design & build** — 4–8 weeks\n` +
        `- **eCommerce / custom web app** — 6–12+ weeks depending on scope\n` +
        `- **Mobile app (MVP)** — 8–16 weeks\n` +
        `- **Custom software / AI** — a few weeks for tools, several months for larger systems\n\n` +
        `Tell me which service you're planning and I'll give a tighter estimate.`,
      quickReplies: [
        { label: "🔍 SEO", payload: "How long does SEO take to show results?" },
        { label: "💻 Web Development", payload: "Tell me about Web Development services" },
        { label: "🚀 Free Consultation", payload: "I want a free consultation" },
      ],
    },
  },
  {
    id: "consultation",
    priority: 8,
    patterns: [
      /free\s+consult/i,
      /(book|schedule|arrange)\s+(a\s+)?(call|meeting|consultation|demo)/i,
      /(want|need|like)\s+(a\s+)?(consultation|proposal|quote)/i,
      /get\s+started/i,
      /talk\s+to\s+(your\s+)?(team|sales|expert)/i,
    ],
    reply: {
      text:
        `Great — let's get you a **free consultation**. 🚀\n\n` +
        `Share a short note about your business and goal, and our team will ` +
        `get back within a few business hours.\n\n` +
        `- 📞 **Call:** ${site.phone}\n` +
        `- ✉️ **Email:** ${site.email}\n` +
        `- 💬 **WhatsApp:** [chat now](${site.whatsapp})`,
      quickReplies: [
        { label: "📞 Contact Details", payload: "How can I contact you?" },
        { label: "🔍 Our Services", payload: "What services do you offer?" },
      ],
      link: { label: "Go to contact page", href: "/contact" },
    },
  },
  {
    id: "contact",
    priority: 7,
    patterns: [
      /(what'?s?\s+)?(your\s+)?(phone|telephone|contact|email|address|location)/i,
      /how\s+(can\s+i\s+)?(reach|contact|call|email)\s+(you|your\s+team)/i,
      /(phone|mobile|contact)\s+(number|details|info)/i,
      /where\s+are\s+you\s+(located|based)/i,
    ],
    reply: {
      text:
        `You can reach us here:\n\n` +
        `- 📞 **Phone / WhatsApp:** ${site.phone}\n` +
        `- ✉️ **Email:** ${site.email}\n` +
        `- 📍 **Office:** ${site.address}\n` +
        `- 🕒 **Hours:** ${site.hours}`,
      quickReplies: [
        { label: "🚀 Free Consultation", payload: "I want a free consultation" },
        { label: "💰 Pricing", payload: "How much do your services cost?" },
      ],
      link: { label: "Open contact page", href: "/contact" },
    },
  },
  {
    id: "company",
    priority: 4,
    patterns: [
      /(tell|talk)\s+(me\s+)?(about|regarding)\s+(your\s+)?(company|agency|business|firm)/i,
      /what\s+(is|does)\s+(your\s+)?(company|agency)\s+(about|do)/i,
      /who\s+(are|is)\s+(you|your\s+(company|agency))/i,
      /about\s+(us|your\s+(company|agency))/i,
    ],
    reply: {
      text:
        `**${site.name}** is an ROI-focused digital growth, marketing and ` +
        `technology partner based in Delhi NCR.\n\n` +
        `- 🧠 **Strategy:** marketing + technology planned as one system\n` +
        `- 📈 **Focus:** leads, transactions, retention and efficiency — not vanity metrics\n` +
        `- 🌍 **Reach:** Delhi NCR base, clients across India and internationally\n` +
        `- 📍 **Office:** ${site.address}\n\n` +
        `We handle SEO, ads, content, design, web, eCommerce, apps, software ` +
        `& AI, cloud, hosting, maintenance and reputation.`,
      quickReplies: [
        { label: "🔍 Our Services", payload: "What services do you offer?" },
        { label: "🧩 Our Process", payload: "What is your process?" },
      ],
      link: { label: "About Eddinet", href: "/about" },
    },
  },
  {
    id: "portfolio",
    priority: 5,
    patterns: [
      /\b(portfolio|case\s+studies|case\s+study|our\s+work|past\s+(work|projects)|clients?)\b/i,
      /show\s+me\s+(your\s+)?(work|projects|portfolio)/i,
    ],
    reply: {
      text:
        `You can see the kind of work we do in our portfolio and case studies.\n\n` +
        `- 🎨 [View portfolio](/portfolio) — websites, stores, apps and brand work\n` +
        `- 📊 [Read case studies](/case-studies) — challenge, strategy and outcomes\n\n` +
        `Want to discuss a project like one of these? I can connect you with the team.`,
      quickReplies: [
        { label: "🚀 Free Consultation", payload: "I want a free consultation" },
        { label: "🔍 Our Services", payload: "What services do you offer?" },
      ],
      link: { label: "View portfolio", href: "/portfolio" },
    },
  },
  {
    id: "blog",
    priority: 4,
    patterns: [
      /\b(blog|articles?|posts?|insights?|guides?|news)\b/i,
      /show\s+(me\s+)?(the\s+)?(blog|articles?|posts?)/i,
      /latest\s+(blog|news|posts?|articles?)/i,
    ],
    reply: {
      text:
        `We publish practical guides on SEO, AI search, marketing and ` +
        `technology on our blog.\n\n` +
        `👉 [Read the blog](/blog)`,
      quickReplies: [
        { label: "🔍 Our Services", payload: "What services do you offer?" },
        { label: "🚀 Free Consultation", payload: "I want a free consultation" },
      ],
      link: { label: "Open blog", href: "/blog" },
    },
  },
  {
    id: "industries",
    priority: 5,
    patterns: [
      /\b(industries|industry|sectors?|verticals?)\b/i,
      /do\s+you\s+work\s+with\s+(my|our)\s+(industry|sector|business)/i,
      /which\s+(industries|sectors)/i,
    ],
    reply: {
      text:
        `Yes — we work across many sectors, shaping strategy to each market:\n\n` +
        `${INDUSTRIES_LIST}\n\n` +
        `👉 [Learn more about Eddinet](/about)\n\n` +
        `Tell me your industry and I'll share what typically works.`,
      quickReplies: FOLLOW_UP_SUGGESTIONS,
      link: { label: "About Eddinet", href: "/about" },
    },
  },
  {
    id: "why-us",
    priority: 4,
    patterns: [
      /why\s+(choose|should\s+i\s+choose|eddinet)/i,
      /what\s+makes\s+you\s+different/i,
      /(your\s+)?(usp|differentiator|advantage)/i,
    ],
    reply: {
      text: `Here's what sets Eddinet apart:\n\n${WHY_LIST}`,
      quickReplies: FOLLOW_UP_SUGGESTIONS,
    },
  },
  {
    id: "thank-you",
    priority: 1,
    patterns: [
      /^(thanks|thank\s+you|thx|ty|appreciate|grateful|great|awesome|perfect|ok(ay)?|cool)\b/i,
      /thank\s+you\s+(so\s+much|very\s+much)/i,
    ],
    reply: {
      text: `You're welcome! 😊 Anything else I can help you with?`,
      quickReplies: QUICK_SUGGESTIONS,
    },
  },
  {
    id: "human-handoff",
    priority: 8,
    patterns: [
      /(talk|speak)\s+(to|with)\s+(a\s+)?(human|person|agent|representative|team\s+member|someone)/i,
      /(connect|transfer|forward)\s+me\s+to/i,
      /customer\s+(support|care|service)/i,
      /(real|actual)\s+person/i,
    ],
    reply: {
      text:
        `Of course — I'll connect you with our team. In the meantime:\n\n` +
        `- 📞 **Call:** ${site.phone}\n` +
        `- ✉️ **Email:** ${site.email}\n` +
        `- 💬 **WhatsApp:** [chat now](${site.whatsapp})\n\n` +
        `Our team usually responds within a few business hours.`,
      quickReplies: [
        { label: "🚀 Free Consultation", payload: "I want a free consultation" },
        { label: "📞 Contact Details", payload: "How can I contact you?" },
      ],
      link: { label: "Open contact page", href: "/contact" },
    },
  },
];
