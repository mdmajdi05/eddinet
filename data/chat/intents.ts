// ============================================================================
//  FILE: data/chat/intents.ts  (CHATBOT — INTENT PATTERNS + CANNED REPLIES)
// WHAT'S IN THIS FILE:
//   INTENTS[] - har intent ke regex patterns + uska deterministic jawab
//
//  Kaam kaise karta hai:
//   1. lib/chat/intent.ts  -> user ke text par INTENTS ke patterns chalata hai
//   2. jo intent sabse zyada priority/confidence ke saath match kare, uska reply
//   3. koi intent match na ho -> lib/chat/knowledge.ts ka knowledge base search
//
//  Hinglish (Roman + Devanagari) patterns yahan deliberately include hain —
//  India ke users "kitna paisa lagega", "kaise kaam karta hai" bhi type karte hain.
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
    priority: 3,
    patterns: [
      /^(hi|hii+|hello+|hey+|heyy+|howdy|greetings|yo|sup|hola)\b/,
      /^(good\s+(morning|afternoon|evening|day|night))\b/,
      /^(namaste|namaskar|namaskaar|नमस्ते|नमस्कार)\b/,
      /^(what'?s up|wasup|kaise ho|kaise hain|how are you)\b/,
    ],
    reply: {
      text:
        `Hello! 👋 I'm **Eddy**, Eddinet's AI growth assistant. ` +
        `Ask me about our services, pricing, timelines or process — I'll answer ` +
        `instantly. And if you'd prefer a human, I can connect you on WhatsApp.`,
      quickReplies: QUICK_SUGGESTIONS,
    },
  },
  {
    id: "identity",
    priority: 9,
    patterns: [
      /what('?s| is) (your|ur) name/,
      /(your|ur) name\b/,
      /\b(who|what) are you\b/,
      /\bintroduce yourself\b/,
      /\bare you eddy\b/,
      /(tumhara|aapka|tera) naam|naam kya (hai|hain)|तुम्हारा नाम|आपका नाम|नाम क्या/,
    ],
    reply: {
      text:
        `I'm **Eddy** 😊 — ${site.name}'s AI growth assistant.\n\n` +
        `Think of me as the first person you meet at Eddinet: I understand our ` +
        `services, pricing approach, process and timelines, answer instantly, ` +
        `and hand you over to the right human on WhatsApp when you're ready.\n\n` +
        `What would you like to explore?`,
      quickReplies: [
        { label: "🔍 Our Services", payload: "What services do you offer?" },
        { label: "💰 Pricing", payload: "How much do your services cost?" },
        { label: "💬 Talk to Human", payload: "Connect me on WhatsApp" },
      ],
    },
  },
  {
    id: "bot-check",
    priority: 8,
    patterns: [
      /are you (a )?(bot|robot|human|real|ai|person)/,
      /(bot|robot|insaan|aadmi) ho/,
      /\breal (person|human)\b/,
    ],
    reply: {
      text:
        `Honest answer: I'm an AI assistant, not a human. 🤖\n\n` +
        `But I'm built by the **${site.name}** team, so the answers here come from ` +
        `our actual services and process — not generic internet content. When you ` +
        `need a real person, I'll connect you to our team on WhatsApp right away.`,
      quickReplies: [
        { label: "💬 Talk to Human", payload: "Connect me on WhatsApp" },
        { label: "🔍 Our Services", payload: "What services do you offer?" },
      ],
    },
  },
  {
    id: "capabilities",
    priority: 7,
    patterns: [
      /what can (you|eddy) (do|help|answer)/,
      /how can (you|eddy) help/,
      /what do you know/,
      /what can i ask/,
      /^(help|help me)\b/,
      /(kya kar sakte|kaise help|madad kar)/,
    ],
    reply: {
      text:
        `Here's what I can help with right now:\n\n` +
        `- 🧭 **Choosing a service** — SEO, AI SEO, ads, social, content, design, web, eCommerce, apps, software/AI, cloud or reputation\n` +
        `- 💰 **Pricing & engagement models** — how we scope work, what affects cost\n` +
        `- ⏱️ **Timelines** — realistic expectations by service\n` +
        `- 🧩 **Process** — how we diagnose the constraint and build the plan\n` +
        `- 🏢 **Company & industries** — who we are, who we work with\n` +
        `- 💬 **Human handoff** — connect you to our team on WhatsApp with your details pre-filled\n\n` +
        `Ask in English or Hinglish — whatever is comfortable.`,
      quickReplies: QUICK_SUGGESTIONS,
    },
  },
  {
    id: "services",
    priority: 7,
    patterns: [
      /what\s+(services|do\s+you\s+(do|offer|provide)|can\s+you\s+do)/,
      /\b(your|all)\s+services\b/,
      /list\s+(of\s+)?services/,
      /what\s+(are\s+)?(your\s+)?capabilit/,
      /tell\s+me\s+(about|what)\s+you\s+(do|offer|provide)/,
      /(kaunsi|kya)\s+services|services?\s+(list|details)/,
    ],
    reply: {
      text:
        `We cover **13 core capability areas** — marketing, technology and ` +
        `infrastructure as one connected growth system:\n\n${SERVICES_LIST}\n\n` +
        `👉 [See all services](/services)\n\n` +
        `Which area would you like to explore? I can go deep on any one of them.`,
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
    priority: 9,
    patterns: [
      /(how\s+much|\bprice\b|\bpricing\b|\bcost\b|\bcharges?\b|\brate\b|\bbudget\b|\bfees?\b)/,
      /what\s+(is\s+)?the\s+(price|cost|charge)/,
      /\b(cheap|affordable|expensive|quotation|quote|estimate)\b/,
      /(kitna\s+(paisa|charge|lagega|hoga)|price\s+kya|kimat|paise\s+lagenge|कितना)/,
    ],
    reply: {
      text:
        `Straight answer: we don't publish one-size-fits-all prices because the ` +
        `right scope depends on your goals, competition and channels. Here's how ` +
        `it works:\n\n` +
        `- **Discovery first** — we understand your business and the growth constraint\n` +
        `- **Right-sized scope** — only the services that solve the problem\n` +
        `- **Clear proposal** — transparent scope, deliverables and pricing\n\n` +
        `Typically, project work is milestone-based and ongoing marketing is a ` +
        `monthly retainer — but the exact mix is agreed in writing before you commit.\n\n` +
        `Share your requirement and I'll get you a custom quote from our team.`,
      quickReplies: [
        { label: "🚀 Get a Quote", payload: "I want a free consultation" },
        { label: "💬 WhatsApp Team", payload: "Connect me on WhatsApp" },
        { label: "🔍 Our Services", payload: "What services do you offer?" },
      ],
      link: { label: "Talk to our team", href: "/contact" },
    },
  },
  {
    id: "process",
    priority: 6,
    patterns: [
      /what\s+is\s+your\s+process/,
      /how\s+(do\s+you|does\s+(eddinet|it))\s+work/,
      /(your\s+)?(workflow|methodology|approach|steps)/,
      /how\s+do\s+you\s+(start|begin)/,
      /(kaam\s+kaise|kaise\s+kaam)/,
    ],
    reply: {
      text: `Here's how we work — six connected steps:\n\n${PROCESS_LIST}`,
      quickReplies: FOLLOW_UP_SUGGESTIONS,
    },
  },
  {
    id: "timeline",
    priority: 7,
    patterns: [
      /how\s+long\s+(does|do|will|until)/,
      /\b(timeline|time\s+frame|duration|how\s+soon|when\s+will|delivery\s+time)\b/,
      /how\s+many\s+(days|weeks|months)/,
      /(kitna\s+(samay|waqt|time)|kab\s+tak|कब\s+तक|कितना\s+समय)/,
    ],
    reply: {
      text:
        `Timelines depend on the service — here are realistic ranges:\n\n` +
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
    priority: 9,
    patterns: [
      /free\s+consult/,
      /(book|schedule|arrange)\s+(a\s+)?(call|meeting|consultation|demo)/,
      /(want|need|like)\s+(a\s+)?(consultation|proposal|quote)/,
      /get\s+started/,
      /talk\s+to\s+(your\s+)?(team|sales|expert)/,
      /(consultation\s+chahiye|baat\s+karni|call\s+karni)/,
    ],
    reply: {
      text:
        `Wonderful — let's get you that **free consultation**. 🚀\n\n` +
        `I'll keep it quick: just your name and what you're looking to grow, and ` +
        `I'll connect you straight to our team on WhatsApp with everything pre-filled.`,
      quickReplies: [
        { label: "💬 Just connect me", payload: "Connect me on WhatsApp" },
        { label: "💰 Pricing first", payload: "How much do your services cost?" },
      ],
    },
  },
  {
    id: "start",
    priority: 7,
    patterns: [
      /how\s+(do|can)\s+i\s+(start|begin|hire|work\s+with)/,
      /\b(start|begin)\s+(a\s+)?(project|work|engagement)/,
      /\bhire\s+(you|eddinet)\b/,
      /work\s+with\s+(you|eddinet)/,
      /\bonboard(ing)?\b/,
      /(shuru\s+karna|shuru\s+karein|kaam\s+shuru)/,
    ],
    reply: {
      text:
        `Starting is simple — **three steps**:\n\n` +
        `1. **A short conversation** — your business, goals and current bottleneck\n` +
        `2. **A clear proposal** — recommended services, scope, timeline and pricing\n` +
        `3. **Kick-off** — we begin with the highest-impact work first\n\n` +
        `No lengthy forms and no commitment before you've seen the plan.`,
      quickReplies: [
        { label: "🚀 Start Now", payload: "I want a free consultation" },
        { label: "💰 Pricing", payload: "How much do your services cost?" },
      ],
      link: { label: "Go to contact page", href: "/contact" },
    },
  },
  {
    id: "audit",
    priority: 7,
    patterns: [
      /\b(audit|website\s+review|review\s+my\s+(website|site)|analy[sz]e\s+my)\b/,
      /(website|site)\s+(check|analysis|audit)/,
      /(meri|mera)\s+(website|site)\s+(check|dekh)/,
    ],
    reply: {
      text:
        `Absolutely — a review is the fastest way to see what's holding growth back. 📊\n\n` +
        `Share your website URL and the team will look at visibility, conversion, ` +
        `speed, tracking and the biggest opportunities. You'll get a clear, honest ` +
        `picture — not a generic report.\n\n` +
        `The quickest way is to send it to us on WhatsApp; I'll pre-fill the message.`,
      quickReplies: [
        { label: "💬 Send My Website", payload: "Connect me on WhatsApp" },
        { label: "🔍 Our Services", payload: "What services do you offer?" },
      ],
      link: { label: "Open contact page", href: "/contact" },
    },
  },
  {
    id: "contact",
    priority: 7,
    patterns: [
      /(what'?s?\s+)?(your\s+)?\b(phone|telephone|contact|email|address|location)\b/,
      /how\s+(can\s+i\s+)?(reach|contact|call|email)\s+(you|your\s+team)/,
      /\b(phone|mobile|contact)\b\s+(number|details|info)/,
      /where\s+are\s+you\s+(located|based)/,
      /(office|address)\s+(kahan|kya)/,
    ],
    reply: {
      text:
        `You can reach us here:\n\n` +
        `- 📞 **Phone / WhatsApp:** ${site.phone}\n` +
        `- ✉️ **Email:** ${site.email}\n` +
        `- 📍 **Office:** ${site.address}\n` +
        `- 🕒 **Hours:** ${site.hours}\n\n` +
        `We usually respond within **2 business hours**.`,
      quickReplies: [
        { label: "💬 WhatsApp Now", payload: "Connect me on WhatsApp" },
        { label: "🚀 Free Consultation", payload: "I want a free consultation" },
      ],
      link: { label: "Open contact page", href: "/contact" },
    },
  },
  {
    id: "whatsapp",
    priority: 9,
    patterns: [
      /\bwhats\s?app\b/,
      /wa\.me/,
      /\bconnect\s+me\b/,
      /\b(transfer|forward)\s+me\s+to/,
      /(whatsapp\s+par|baat\s+karwa|व्हाट्सएप)/,
    ],
    reply: {
      text:
        `Perfect — I'll connect you to our team on WhatsApp right now. 💬\n\n` +
        `Tap the green button below and your message is already written for you. ` +
        `A real person from **${site.name}** will take it from there.`,
      quickReplies: [
        { label: "🚀 Free Consultation", payload: "I want a free consultation" },
        { label: "📞 Contact Details", payload: "How can I contact you?" },
      ],
    },
  },
  {
    id: "company",
    priority: 5,
    patterns: [
      /(tell|talk)\s+(me\s+)?(about|regarding)\s+(your\s+)?(company|agency|business|firm)/,
      /what\s+(is|does)\s+(your\s+)?(company|agency)\s+(about|do)/,
      /who\s+(are|is)\s+(you|your\s+(company|agency))/,
      /about\s+(us|your\s+(company|agency))/,
      /(company|agency)\s+(ke\s+baare|kya\s+hai)/,
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
        { label: "💬 Talk to Human", payload: "Connect me on WhatsApp" },
      ],
      link: { label: "About Eddinet", href: "/about" },
    },
  },
  {
    id: "portfolio",
    priority: 5,
    patterns: [
      /\b(portfolio|case\s+studies|case\s+study|our\s+work|past\s+(work|projects)|clients?)\b/,
      /show\s+me\s+(your\s+)?(work|projects|portfolio)/,
      /(kaam|work)\s+dikhao/,
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
      /\b(blog|articles?|posts?|insights?|guides?|news)\b/,
      /show\s+(me\s+)?(the\s+)?(blog|articles?|posts?)/,
      /latest\s+(blog|news|posts?|articles?)/,
    ],
    reply: {
      text:
        `We publish practical guides on SEO, AI search, marketing and ` +
        `technology on our blog.\n\n👉 [Read the blog](/blog)`,
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
      /\b(industries|industry|sectors?|verticals?)\b/,
      /do\s+you\s+work\s+with\s+(my|our)\s+(industry|sector|business)/,
      /which\s+(industries|sectors)/,
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
    priority: 5,
    patterns: [
      /why\s+(choose|should\s+i\s+choose|eddinet)/,
      /what\s+makes\s+you\s+different/,
      /(your\s+)?(usp|differentiator|advantage)/,
      /(kyun|kyu)\s+choose/,
    ],
    reply: {
      text: `Here's what sets Eddinet apart:\n\n${WHY_LIST}`,
      quickReplies: FOLLOW_UP_SUGGESTIONS,
    },
  },
  {
    id: "thank-you",
    priority: 2,
    patterns: [
      /^(thanks|thank\s+you|thx|ty|appreciate|grateful|great|awesome|perfect|ok(ay)?|cool)\b/,
      /thank\s+you\s+(so\s+much|very\s+much)/,
      /(shukriya|dhanyavad|धन्यवाद)/,
    ],
    reply: {
      text: `You're very welcome! 😊 Happy to help.\n\nAnything else you'd like to know before we talk?`,
      quickReplies: QUICK_SUGGESTIONS,
    },
  },
  {
    id: "affirm",
    priority: 2,
    patterns: [
      /^(yes|yeah|yep|sure|ok|okay|haan|han|theek|thik|bilkul|go ahead|let'?s do it|chalo)[\s!.]*$/,
    ],
    reply: {
      text:
        `Great! 🚀 Would you like to explore a service, get pricing, or talk to ` +
        `our team on WhatsApp?`,
      quickReplies: [
        { label: "🚀 Free Consultation", payload: "I want a free consultation" },
        { label: "💰 Pricing", payload: "How much do your services cost?" },
        { label: "💬 WhatsApp Us", payload: "Connect me on WhatsApp" },
      ],
    },
  },
  {
    id: "bye",
    priority: 2,
    patterns: [
      /^(bye|goodbye|see you|later|good night|ok bye|chalo bye|alvida)[\s!.]*$/,
    ],
    reply: {
      text:
        `Thanks for stopping by! 👋 If anything comes up, I'm right here — or you ` +
        `can reach our team on WhatsApp anytime.`,
      quickReplies: [
        { label: "💬 WhatsApp Us", payload: "Connect me on WhatsApp" },
        { label: "🚀 Free Consultation", payload: "I want a free consultation" },
      ],
    },
  },
  {
    id: "human-handoff",
    priority: 8,
    patterns: [
      /(talk|speak)\s+(to|with)\s+(a\s+)?(human|person|agent|representative|team\s+member|someone)/,
      /customer\s+(support|care|service)/,
      /(real|actual)\s+person/,
      /(insaan|aadmi)\s+se\s+baat/,
    ],
    reply: {
      text:
        `Of course — let me connect you with a real person. 💬\n\n` +
        `The fastest route is WhatsApp: tap below and your message is ready to ` +
        `send. You can also call or email us directly.\n\n` +
        `- 📞 **Call:** ${site.phone}\n` +
        `- ✉️ **Email:** ${site.email}`,
      quickReplies: [
        { label: "💬 WhatsApp Now", payload: "Connect me on WhatsApp" },
        { label: "📞 Contact Details", payload: "How can I contact you?" },
      ],
      link: { label: "Open contact page", href: "/contact" },
    },
  },
];
