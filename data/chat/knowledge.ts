// ============================================================================
//  FILE: data/chat/knowledge.ts  (CHATBOT — KNOWLEDGE BASE / "TRAINING DATA")
// WHAT'S IN THIS FILE:
//   knowledgeBase[] - chatbot ka poora knowledge base (Q/A + keywords + links)
//
//  Ye file site ke ASLI data se generate hoti hai (single source of truth):
//    - services + faqsByService + itemDetails  -> data/services/services.ts
//    - homeFaqs + processSteps                 -> data/home/home.ts
//    - industries                              -> data/industries/industries.ts
//    - site (phone/email/address/hours)        -> data/site/contact.ts
//
//  Isliye jab bhi service/FAQ/industry/process data badalta hai, chatbot apne
//  aap "re-train" ho jaata hai — yahan duplicate content maintain karne ki
//  zarurat nahi. MANUAL me sirf company/pricing jaise general jawab
//  hand-written hain, aur unke andar bhi service/industry lists data se
//  derive hoti hain (hardcoded copy nahi).
//
//  Naya general Q/A add karna ho -> neeche MANUAL array me ek entry daalo.
// ============================================================================

import { services, faqsByService, itemDetails } from "@/data/services/services";
import { homeFaqs, processSteps } from "@/data/home/home";
import { industries } from "@/data/industries/industries";
import { site } from "@/data/site/contact";
import type { KnowledgeBaseItem } from "@/lib/chat/types";
import { contentWords, keywordsFrom } from "@/lib/chat/text";

/** Har child service item ka parent slug (link banane ke liye). */
const slugByItem = new Map<string, string>();
for (const s of services) {
  for (const item of s.allItems) {
    if (!slugByItem.has(item)) slugByItem.set(item, s.slug);
  }
}

// ─── 1. SERVICE CATEGORY ENTRIES (services.ts se) ───────────────────────────

function serviceEntries(): KnowledgeBaseItem[] {
  return services.map((s) => {
    const shown = s.allItems.slice(0, 8);
    const more = s.allItems.length - shown.length;
    const list = shown.map((i) => `- ${i}`).join("\n");
    return {
      id: `service-${s.cat}`,
      category: "service",
      question: `Tell me about ${s.title} services`,
      answer:
        `**${s.title}** — ${s.desc}\n\n` +
        `**What's included:**\n${list}${more > 0 ? `\n- +${more} more` : ""}\n\n` +
        `👉 [Explore ${s.title}](/services/${s.slug})`,
      keywords: [
        s.title.toLowerCase(),
        s.cat,
        s.tabLabel.toLowerCase(),
        s.footerLabel.toLowerCase(),
        ...s.allItems.map((i) => i.toLowerCase()),
      ],
      link: { label: `Explore ${s.title}`, href: `/services/${s.slug}` },
      priority: 7,
    };
  });
}

// ─── 2. CHILD SERVICE ENTRIES (itemDetails se — "pura" coverage) ─────────────

function serviceDetailEntries(): KnowledgeBaseItem[] {
  return Object.entries(itemDetails).map(([name, desc]) => {
    const slug = slugByItem.get(name);
    return {
      id: `detail-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      category: "service-detail",
      question: `What is ${name}?`,
      answer: `${desc}${slug ? `\n\n👉 [Learn more](/services/${slug})` : ""}`,
      keywords: [name.toLowerCase()],
      link: slug ? { label: "Learn more", href: `/services/${slug}` } : undefined,
      priority: 4,
    };
  });
}

// ─── 3. FAQ ENTRIES (faqsByService + homeFaqs se) ───────────────────────────

function faqEntries(): KnowledgeBaseItem[] {
  const out: KnowledgeBaseItem[] = [];
  const seen = new Set<string>();

  const push = (q: string, a: string, slug?: string) => {
    const key = q.toLowerCase().trim();
    if (seen.has(key)) return;
    seen.add(key);
    out.push({
      id: `faq-${out.length + 1}`,
      category: "faq",
      question: q,
      answer: a + (slug ? `\n\n👉 [Read more](/services/${slug})` : ""),
      keywords: keywordsFrom(q),
      link: slug ? { label: "Read more", href: `/services/${slug}` } : undefined,
      priority: 6,
    });
  };

  for (const [slug, list] of Object.entries(faqsByService)) {
    for (const f of list) push(f.q, f.a, slug);
  }
  for (const f of homeFaqs) push(f.q, f.a);

  return out;
}

// ─── 4. INDUSTRY ENTRIES (industries.ts se) ─────────────────────────────────

function industryEntries(): KnowledgeBaseItem[] {
  return industries.map((i) => {
    const keywords = Array.from(
      new Set([
        i.name.toLowerCase(),
        i.short.toLowerCase(),
        i.slug.replace(/-/g, " "),
        ...contentWords(`${i.name} ${i.short}`),
        ...i.focuses.map((f) => f.toLowerCase()),
      ]),
    );

    return {
      id: `industry-${i.slug}`,
      category: "industries",
      question: `Do you work with ${i.name} businesses?`,
      answer:
        `${i.blurb}\n\n**Typical focus:**\n` +
        i.focuses.map((f) => `- ${f}`).join("\n") +
        `\n\n👉 [Learn more about Eddinet](/about)`,
      keywords,
      link: { label: "About Eddinet", href: "/about" },
      priority: 5,
    };
  });
}

// ─── 5. HAND-WRITTEN GENERAL ENTRIES ────────────────────────────────────────

//  MANUAL answers me bhi koi list hardcoded nahi — sab apne asli data se
//  aati hai, warna services/industries change hone par chatbot ka jawab
//  stale ho jaata hai (audit me yahi drift mila tha).
/** Service category names — services.ts se (sabhi 13 categories). */
const serviceNames = services.map((s) => s.title).join(", ");

/** Industry names — industries.ts se (sabhi 18 sectors). */
const industryNames = industries.map((i) => i.name).join(", ");

const MANUAL: KnowledgeBaseItem[] = [
  {
    id: "manual-company",
    category: "company",
    question: "What does Eddinet do?",
    answer:
      `**${site.name}** is an ROI-focused digital growth, marketing and ` +
      `technology partner in Delhi NCR.\n\n` +
      `- 🧠 Marketing + technology planned as one connected system\n` +
      `- 📈 Focused on leads, transactions, retention and efficiency\n` +
      `- 🌍 Delhi NCR base, clients across India and internationally\n\n` +
      `We cover ${serviceNames}.\n\n` +
      `👉 [Explore all services](/services)`,
    keywords: [
      "company",
      "about",
      "eddinet",
      "agency",
      "who are you",
      "what do you do",
      // Service ke slug + cat bhi keyword — raw slug (jaise "ads-ppc")
      // puchhe jaye to bhi ye entry match ho.
      ...services.map((s) => s.slug),
      ...services.map((s) => s.cat),
    ],
    link: { label: "About Eddinet", href: "/about" },
    priority: 8,
  },
  {
    id: "manual-location",
    category: "contact",
    question: "Where is Eddinet located?",
    answer:
      `Our office is at **${site.address}** (${site.addressNote}).\n\n` +
      `- 🕒 **Hours:** ${site.hours}\n` +
      `- 🌍 We also work with clients across India and internationally.`,
    keywords: ["location", "address", "office", "based", "where", "delhi", "ncr", "okhla", "new delhi"],
    link: { label: "Open contact page", href: "/contact" },
    priority: 7,
  },
  {
    id: "manual-contact",
    category: "contact",
    question: "What is Eddinet's phone number and email?",
    answer:
      `Here are our contact details:\n\n` +
      `- 📞 **Phone / WhatsApp:** ${site.phone}\n` +
      `- ✉️ **Email:** ${site.email}\n` +
      `- 📍 **Office:** ${site.address}\n` +
      `- 🕒 **Hours:** ${site.hours}`,
    keywords: ["phone", "email", "contact", "call", "whatsapp", "number", "reach"],
    link: { label: "Open contact page", href: "/contact" },
    priority: 9,
  },
  {
    id: "manual-pricing",
    category: "pricing",
    question: "How much do Eddinet's services cost?",
    answer:
      `Pricing depends on your goals, scope and the channels involved — we ` +
      `build a right-sized plan instead of fixed packages.\n\n` +
      `- We start with a short discovery of your business and the growth constraint\n` +
      `- Then recommend only the services that solve the problem\n` +
      `- You get a clear proposal with scope, deliverables and pricing\n\n` +
      `👉 Call **${site.phone}** or email **${site.email}** for a custom quote.`,
    keywords: ["price", "pricing", "cost", "budget", "charges", "fees", "rate", "quote", "expensive", "affordable"],
    link: { label: "Get a quote", href: "/contact" },
    priority: 9,
  },
  {
    id: "manual-consultation",
    category: "general",
    question: "Do you offer a free consultation?",
    answer:
      `Yes — we offer a **free consultation**. 🚀\n\n` +
      `Tell us about your business and goal, and our team will get back within ` +
      `a few business hours with next steps.\n\n` +
      `- 📞 **Call:** ${site.phone}\n` +
      `- ✉️ **Email:** ${site.email}\n` +
      `- 💬 **WhatsApp:** [chat now](${site.whatsapp})`,
    keywords: ["free", "consultation", "demo", "proposal", "get started", "book a call", "enquiry"],
    link: { label: "Go to contact page", href: "/contact" },
    priority: 9,
  },
  {
    id: "manual-process",
    category: "process",
    question: "What is Eddinet's process?",
    answer:
      `We follow a ${processSteps.length}-step process:\n\n` +
      processSteps
        .map((p) => `- **${p.num} ${p.title}** — ${p.desc}`)
        .join("\n"),
    keywords: ["process", "workflow", "steps", "methodology", "how you work", "approach"],
    priority: 8,
  },
  {
    id: "manual-results",
    category: "general",
    question: "How does Eddinet measure success?",
    answer:
      `Rankings, impressions and follower counts are indicators — not outcomes. ` +
      `We report on what those numbers should produce:\n\n` +
      `- 📈 Qualified traffic and leads\n` +
      `- 🛒 Transactions and revenue\n` +
      `- 🔁 Retention and repeat business\n` +
      `- ⚙️ Operational efficiency\n\n` +
      `Success metrics are agreed before any campaign begins, so reporting stays tied to business value.`,
    keywords: ["measure", "report", "results", "roi", "kpi", "success", "tracking", "analytics"],
    priority: 6,
  },
  {
    id: "manual-why",
    category: "general",
    question: "Why choose Eddinet?",
    answer:
      `Here's what sets Eddinet apart:\n\n` +
      `- 🧩 **Marketing + technology together** — one system, not vendor hand-offs\n` +
      `- 📈 **ROI as the starting point** — services chosen for the outcome\n` +
      `- 🔍 **Full-funnel thinking** — organic, paid, content, web and tech connected\n` +
      `- 📊 **Data-backed decisions** — no assumptions from other clients\n` +
      `- 🛠️ **Custom strategy** — shaped around your business, not a template`,
    keywords: ["why", "choose", "different", "usp", "advantage", "best"],
    link: { label: "About Eddinet", href: "/about" },
    priority: 6,
  },
  {
    id: "manual-portfolio",
    category: "portfolio",
    question: "Can I see Eddinet's work?",
    answer:
      `Sure — here's where you can see the kind of work we do:\n\n` +
      `- 🎨 [View portfolio](/portfolio) — websites, stores, apps and brand work\n` +
      `- 📊 [Read case studies](/case-studies) — challenge, strategy and outcomes`,
    keywords: ["portfolio", "work", "projects", "clients", "examples", "showcase"],
    link: { label: "View portfolio", href: "/portfolio" },
    priority: 6,
  },
  {
    id: "manual-case-studies",
    category: "portfolio",
    question: "Do you have case studies?",
    answer:
      `Yes — our case studies document the challenge, strategy, execution and ` +
      `outcome for real engagements.\n\n👉 [Read case studies](/case-studies)`,
    keywords: ["case study", "case studies", "proof", "results", "outcomes"],
    link: { label: "Read case studies", href: "/case-studies" },
    priority: 5,
  },
  {
    id: "manual-blog",
    category: "blog",
    question: "Do you have a blog?",
    answer:
      `Yes — we publish practical guides on SEO, AI search, marketing and ` +
      `technology.\n\n👉 [Read the blog](/blog)`,
    keywords: ["blog", "articles", "insights", "guides", "posts", "news"],
    link: { label: "Open blog", href: "/blog" },
    priority: 4,
  },
  {
    id: "manual-industries",
    category: "industries",
    question: "Which industries does Eddinet serve?",
    answer:
      `We work across many sectors — ${industryNames}.\n\n` +
      `👉 [Learn more about Eddinet](/about)\n\n` +
      `Tell me your industry and I'll share what typically works.`,
    keywords: ["industries", "industry", "sectors", "verticals", "serve"],
    link: { label: "About Eddinet", href: "/about" },
    priority: 6,
  },
  {
    id: "manual-ai",
    category: "service",
    question: "Can Eddinet build AI solutions?",
    answer:
      `Yes. Our **Software & AI** practice builds custom software, SaaS systems ` +
      `and AI-driven solutions, including:\n\n` +
      `- 🤖 AI chatbots and AI agents\n` +
      `- 🧠 LLM integration and RAG applications\n` +
      `- ✨ Generative AI solutions\n` +
      `- ⚙️ Business process automation\n\n` +
      `👉 [Explore Software & AI](/services/software-ai)`,
    keywords: ["ai", "chatbot", "automation", "llm", "machine learning", "ai agent", "generative ai", "rag"],
    link: { label: "Explore Software & AI", href: "/services/software-ai" },
    priority: 7,
  },
  {
    id: "manual-support",
    category: "service",
    question: "Do you provide support after launch?",
    answer:
      `Yes. Our **Maintenance & Support** plans keep websites, apps, software ` +
      `and infrastructure stable after launch:\n\n` +
      `- 🔄 Updates, patching and security\n` +
      `- 💾 Backups and disaster recovery\n` +
      `- 📈 Performance optimisation\n` +
      `- 🛟 Uptime monitoring and responsive support\n\n` +
      `👉 [Explore Maintenance & Support](/services/maintenance-support)`,
    keywords: ["support", "maintenance", "after launch", "ongoing", "amc", "help after"],
    link: { label: "Explore Maintenance & Support", href: "/services/maintenance-support" },
    priority: 7,
  },
  {
    id: "manual-technology",
    category: "service",
    question: "What technologies does Eddinet build with?",
    answer:
      `We choose the stack that fits your goals, performance and long-term ` +
      `maintainability:\n\n` +
      `- 💻 **Web:** React, Next.js, WordPress, Shopify, WooCommerce\n` +
      `- 📲 **Mobile:** native Android/iOS, Flutter, React Native\n` +
      `- ☁️ **Cloud & DevOps:** AWS, Docker, Kubernetes, CI/CD\n` +
      `- 🤖 **Software & AI:** custom software, APIs, LLM and AI integrations`,
    keywords: ["technology", "tech stack", "react", "next", "wordpress", "shopify", "flutter", "aws", "kubernetes"],
    priority: 6,
  },
  {
    id: "manual-payment",
    category: "general",
    question: "What payment methods do you accept?",
    answer:
      `Billing is agreed upfront with your proposal. We typically accept:\n\n` +
      `- 🏦 Bank transfer / NEFT / RTGS\n` +
      `- 💳 Cards and UPI\n` +
      `- 📄 Milestone-based or retainer billing for ongoing work\n\n` +
      `For specifics, our team can confirm the best option for your engagement.`,
    keywords: ["payment", "pay", "invoice", "billing", "upi", "bank transfer", "method"],
    priority: 4,
  },
  {
    id: "manual-guarantee",
    category: "general",
    question: "Do you guarantee results?",
    answer:
      `We commit to strategy, execution quality and transparent reporting — not ` +
      `to fixed numbers we can't control.\n\n` +
      `- 📊 Every engagement is tied to agreed business metrics\n` +
      `- 🧭 Plans are adapted as data comes in\n` +
      `- 🤝 You always see what's working and what's changing\n\n` +
      `We'll tell you honestly what's realistic before you commit.`,
    keywords: ["guarantee", "warranty", "refund", "promise", "assurance"],
    priority: 4,
  },
  {
    id: "manual-careers",
    category: "company",
    question: "Is Eddinet hiring?",
    answer:
      `We're always happy to hear from good people. Share your profile and what ` +
      `you'd like to work on at **${site.email}** and our team will get back to you.`,
    keywords: ["career", "careers", "job", "jobs", "hiring", "vacancy", "internship"],
    link: { label: "Contact us", href: "/contact" },
    priority: 3,
  },
];

// ─── FINAL KNOWLEDGE BASE ───────────────────────────────────────────────────

export const knowledgeBase: KnowledgeBaseItem[] = [
  ...MANUAL,
  ...serviceEntries(),
  ...serviceDetailEntries(),
  ...faqEntries(),
  ...industryEntries(),
];
