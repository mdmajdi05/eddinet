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

  // ─── IDENTITY ─────────────────────────────────────────────────────────────
  {
    id: "manual-identity",
    category: "company",
    question: "What is your name and who are you?",
    answer:
      `I'm **Eddy** 😊 — ${site.name}'s AI growth assistant.\n\n` +
      `I know our services, pricing approach, process and timelines, and I can ` +
      `connect you to the human team on WhatsApp whenever you're ready. ` +
      `Ask me anything — English ya Hinglish, dono chalega.`,
    keywords: [
      "your name",
      "name",
      "who are you",
      "what are you",
      "eddy",
      "introduce yourself",
      "tumhara naam",
      "aapka naam",
      "naam kya",
    ],
    priority: 10,
  },

  // ─── GETTING STARTED / SALES PROCESS ──────────────────────────────────────
  {
    id: "manual-get-started",
    category: "process",
    question: "How do I get started with Eddinet?",
    answer:
      `Getting started takes three simple steps:\n\n` +
      `1. **A short conversation** — tell us your business, goal and current bottleneck\n` +
      `2. **A clear proposal** — recommended services, scope, timeline and pricing\n` +
      `3. **Kick-off** — we start with the highest-impact work first\n\n` +
      `No lengthy forms and no commitment before you've seen the plan.`,
    keywords: ["get started", "start", "begin", "hire", "onboard", "work with you", "shuru", "kaam shuru"],
    link: { label: "Go to contact page", href: "/contact" },
    priority: 9,
  },
  {
    id: "manual-what-i-need",
    category: "process",
    question: "What do you need from me to start a project?",
    answer:
      `To move quickly, it helps to have:\n\n` +
      `- 🎯 Your business goal and the outcome you want\n` +
      `- 🌐 Website / store access (or we can build from scratch)\n` +
      `- 📊 Analytics and ad account access, if they exist\n` +
      `- 🎨 Brand assets — logo, guidelines, product photos\n` +
      `- 🧠 Anything you already know about your customer and competitors\n\n` +
      `Missing some of these is fine — we'll guide you through what's needed at kick-off.`,
    keywords: ["what do you need", "requirements", "start project", "kick off", "onboarding", "access", "documents"],
    link: { label: "Talk to our team", href: "/contact" },
    priority: 7,
  },
  {
    id: "manual-free-review",
    category: "general",
    question: "Can you review my website or do a free audit?",
    answer:
      `Yes — share your website URL and our team will review the essentials: ` +
      `visibility, conversion, speed, tracking and the biggest opportunities.\n\n` +
      `It's a practical, honest review — not a generic report. The quickest way ` +
      `to send your URL is WhatsApp; I can pre-fill the message for you.`,
    keywords: ["audit", "free audit", "review my website", "website review", "site review", "analyze website", "seo audit"],
    link: { label: "Contact us", href: "/contact" },
    priority: 8,
  },
  {
    id: "manual-choose-service",
    category: "general",
    question: "Which service is right for my business?",
    answer:
      `That depends on where growth is stuck:\n\n` +
      `- **Not enough visibility?** → SEO / AI SEO / content\n` +
      `- **Traffic but few enquiries?** → conversion, landing pages, web or CRO\n` +
      `- **Need leads fast?** → Google / Meta ads\n` +
      `- **Store not selling?** → eCommerce, product pages, feeds and paid shopping\n` +
      `- **Operations slowing you down?** → custom software or AI automation\n\n` +
      `Tell me your business and current challenge, and I'll point you to the right starting point.`,
    keywords: ["which service", "right service", "what service do i need", "not sure", "recommend", "suggest", "kaunsi service"],
    link: { label: "Explore all services", href: "/services" },
    priority: 7,
  },
  {
    id: "manual-existing-team",
    category: "general",
    question: "Can you work with my existing marketing or dev team?",
    answer:
      `Yes. We regularly plug into existing teams — you can use us for strategy, ` +
      `a specific channel, overflow execution or the technical build while your ` +
      `team handles the rest.\n\n` +
      `We agree responsibilities upfront so there's no overlap or finger-pointing.`,
    keywords: ["existing team", "in-house team", "work with my team", "collaborate", "support my team"],
    link: { label: "Talk to our team", href: "/contact" },
    priority: 6,
  },
  {
    id: "manual-freelancer",
    category: "general",
    question: "Why choose an agency over a freelancer?",
    answer:
      `Both can work — the right choice depends on what you need.\n\n` +
      `- **Freelancer:** good for a single, well-defined task\n` +
      `- **Eddinet:** better when strategy, creative, media, web and technology need to work together\n\n` +
      `You get one accountable team across channels instead of coordinating five vendors, ` +
      `plus continuity if one person is unavailable.`,
    keywords: ["freelancer", "in-house", "agency vs freelancer", "diifference", "why agency"],
    priority: 5,
  },

  // ─── ENGAGEMENT / COMMERCIALS ─────────────────────────────────────────────
  {
    id: "manual-engagement",
    category: "pricing",
    question: "Do you work on monthly retainers or one-time projects?",
    answer:
      `Both, depending on the work:\n\n` +
      `- **Project-based** — websites, apps, software, branding and migrations (milestone billing)\n` +
      `- **Monthly retainer** — SEO, ads, social, content and ongoing optimisation\n` +
      `- **Hybrid** — a build phase followed by ongoing growth and support\n\n` +
      `The proposal will show exactly what is one-time, what is monthly and what is optional.`,
    keywords: ["retainer", "monthly", "one time", "project based", "engagement", "contract", "package", "pricing model"],
    link: { label: "Get a custom quote", href: "/contact" },
    priority: 8,
  },
  {
    id: "manual-lock-in",
    category: "pricing",
    question: "Is there a long-term lock-in contract?",
    answer:
      `We don't believe in trapping clients in long contracts. Ongoing work is ` +
      `reviewed regularly, and the commitment terms — including notice period — ` +
      `are written clearly in the proposal before you start.\n\n` +
      `If we're not earning the next month, you should be free to leave.`,
    keywords: ["lock in", "lock-in", "contract", "commitment", "notice period", "minimum term", "cancel"],
    link: { label: "Talk to our team", href: "/contact" },
    priority: 7,
  },
  {
    id: "manual-discount",
    category: "pricing",
    question: "Do you offer discounts?",
    answer:
      `We don't lead with discounts — it usually means cutting corners somewhere.\n\n` +
      `If budget is tight, we'd rather **reduce scope honestly** and focus on the ` +
      `one or two things that will move the needle fastest. Tell us your budget ` +
      `range and we'll tell you what's realistically achievable.`,
    keywords: ["discount", "cheap", "budget", "less budget", "affordable", "kam paise"],
    link: { label: "Discuss your budget", href: "/contact" },
    priority: 6,
  },
  {
    id: "manual-ad-budget",
    category: "pricing",
    question: "What is the minimum ad budget?",
    answer:
      `There's no fixed minimum from our side — the right budget is the amount ` +
      `needed to gather enough data to optimise while staying profitable.\n\n` +
      `Too small a budget spreads data too thin; too large without tracking wastes ` +
      `money. We'll recommend a realistic starting range based on your market, ` +
      `offer and goals. Ad spend is separate from our management fee.`,
    keywords: ["ad budget", "minimum budget", "media budget", "spend", "how much budget for ads"],
    link: { label: "Plan your ads", href: "/services/ads-ppc" },
    priority: 7,
  },
  {
    id: "manual-nda",
    category: "general",
    question: "Do you sign NDAs?",
    answer:
      `Yes — we're happy to sign an NDA before you share sensitive business ` +
      `details. Just mention it when you contact us and we'll sort it out upfront.`,
    keywords: ["nda", "confidential", "confidentiality", "privacy agreement", "non disclosure"],
    link: { label: "Contact us", href: "/contact" },
    priority: 5,
  },
  {
    id: "manual-ownership",
    category: "general",
    question: "Who owns the website, code and creative assets?",
    answer:
      `For your project, **you do** — on full payment you receive ownership of the ` +
      `designs, content, code and assets we create for you.\n\n` +
      `Third-party licences (themes, plugins, stock assets) stay under their own ` +
      `terms. Handover and ownership details are written into the proposal.`,
    keywords: ["ownership", "who owns", "code ownership", "source code", "assets", "handover"],
    priority: 5,
  },
  {
    id: "manual-refund",
    category: "pricing",
    question: "What is your refund and cancellation policy?",
    answer:
      `Refund and cancellation terms are set out in your proposal before any work ` +
      `begins, so there are no surprises.\n\n` +
      `If something isn't working, tell us early — we'd rather fix the engagement ` +
      `than hide behind a clause.`,
    keywords: ["refund", "cancellation", "cancel", "money back", "terminate"],
    link: { label: "Talk to our team", href: "/contact" },
    priority: 5,
  },
  {
    id: "manual-reporting",
    category: "general",
    question: "How often will I get reports?",
    answer:
      `Reporting cadence is agreed upfront — usually **monthly** for ongoing work, ` +
      `with a live dashboard where possible.\n\n` +
      `Every report ties back to the KPIs agreed before kick-off: qualified leads, ` +
      `transactions, retention and efficiency — not just impressions and likes. ` +
      `You'll also get a plain-English summary of what changed and what's next.`,
    keywords: ["report", "reporting", "frequency", "dashboard", "monthly report", "kpi"],
    link: { label: "How we measure success", href: "/about" },
    priority: 6,
  },
  {
    id: "manual-communication",
    category: "general",
    question: "How do we communicate during a project?",
    answer:
      `The way you prefer:\n\n` +
      `- 💬 **WhatsApp** for quick updates and approvals\n` +
      `- ✉️ **Email** for documents and formal sign-offs\n` +
      `- 📞 **Calls/video** for strategy and reviews\n\n` +
      `You'll have a clear point of contact and a regular update rhythm agreed at kick-off.`,
    keywords: ["communicate", "communication", "updates", "point of contact", "meetings", "whatsapp group"],
    priority: 5,
  },

  // ─── AUDIENCE / FIT ───────────────────────────────────────────────────────
  {
    id: "manual-small-business",
    category: "general",
    question: "Do you work with small businesses?",
    answer:
      `Yes — a large part of our work is helping small and growing businesses ` +
      `build a system that punches above its weight.\n\n` +
      `We right-size the scope: start with the constraint that matters most, prove ` +
      `value, then expand. You don't need a big-company budget to begin.`,
    keywords: ["small business", "small businesses", "local business", "msme", "shop", "dukaan", "chhota business"],
    link: { label: "Explore services", href: "/services" },
    priority: 6,
  },
  {
    id: "manual-startups",
    category: "general",
    question: "Do you work with startups?",
    answer:
      `Yes. For startups we focus on the shortest path to learning and revenue:\n\n` +
      `- Validate positioning and the core offer\n` +
      `- Build a credible, fast web presence\n` +
      `- Run focused acquisition with tight tracking\n` +
      `- Double down on what converts\n\n` +
      `We'll be honest about what a startup budget can and can't achieve.`,
    keywords: ["startup", "startups", "early stage", "founder", "mvp", "new business"],
    link: { label: "Talk to our team", href: "/contact" },
    priority: 6,
  },
  {
    id: "manual-international",
    category: "general",
    question: "Do you work with clients outside India?",
    answer:
      `Yes — our base is Delhi NCR, but we work with clients across India and ` +
      `internationally.\n\n` +
      `Calls are scheduled in your timezone, communication is over email/WhatsApp, ` +
      `and the strategy is shaped to your market rather than a generic playbook.`,
    keywords: ["international", "outside india", "global", "usa", "uk", "dubai", "overseas", "timezone"],
    link: { label: "About Eddinet", href: "/about" },
    priority: 6,
  },
  {
    id: "manual-languages",
    category: "general",
    question: "Which languages do you work in?",
    answer:
      `We work in **English and Hindi** — for campaigns, content and day-to-day ` +
      `communication. If your audience speaks another language, we can scope ` +
      `translation or localisation as part of the project.`,
    keywords: ["language", "languages", "hindi", "english", "localisation", "translation"],
    priority: 4,
  },
  {
    id: "manual-team",
    category: "company",
    question: "How big is your team?",
    answer:
      `Our team covers strategy, content, design, performance marketing and ` +
      `engineering — and the exact people on your project depend on scope.\n\n` +
      `You won't be passed between departments: one team owns the outcome, with a ` +
      `clear point of contact.`,
    keywords: ["team size", "how many employees", "team", "staff", "people"],
    priority: 4,
  },
  {
    id: "manual-visit",
    category: "contact",
    question: "Can I visit your office?",
    answer:
      `Of course. We're at **${site.address}** (${site.addressNote}).\n\n` +
      `- 🕒 **Hours:** ${site.hours}\n` +
      `- 📞 It's best to call **${site.phone}** first so the right person is available.\n\n` +
      `👉 [Get directions](https://www.google.com/maps/search/?api=1&query=Okhla+Industrial+Estate+Phase+1%2C+New+Delhi%2C+Delhi+110020)`,
    keywords: ["visit", "office visit", "meet in person", "come to office", "directions", "location"],
    link: { label: "Open contact page", href: "/contact" },
    priority: 6,
  },
  {
    id: "manual-response-time",
    category: "contact",
    question: "How quickly do you respond?",
    answer:
      `We aim to respond within **2 business hours** on working days ` +
      `(${site.hours}).\n\n` +
      `For anything urgent, WhatsApp or call **${site.phone}** — that's the fastest route.`,
    keywords: ["response time", "how quickly", "reply", "respond", "turnaround", "kitni jaldi"],
    link: { label: "Contact us", href: "/contact" },
    priority: 6,
  },

  // ─── SERVICE-SPECIFIC QUESTIONS ───────────────────────────────────────────
  {
    id: "manual-seo-vs-ads",
    category: "general",
    question: "Should I invest in SEO or paid ads?",
    answer:
      `They solve different jobs — the best plan often uses both:\n\n` +
      `- **SEO / AI SEO** builds compounding, durable visibility. Slower, but the ` +
      `traffic keeps coming without paying per click.\n` +
      `- **Paid ads** create immediate, controlled demand. Fast, but stops when ` +
      `spend stops.\n\n` +
      `If you need leads now, start with ads while SEO builds. If you want to ` +
      `reduce long-term acquisition cost, SEO has to be part of the mix.`,
    keywords: ["seo or ads", "seo vs ads", "seo and ads", "which is better seo or ppc", "organic vs paid"],
    link: { label: "Explore SEO", href: "/services/seo" },
    priority: 7,
  },
  {
    id: "manual-what-is-seo",
    category: "service",
    question: "What is SEO?",
    answer:
      `**SEO (Search Engine Optimization)** is the work of making a website easy ` +
      `for search engines to understand, trust and recommend for the right queries.\n\n` +
      `At Eddinet it covers technical health, content relevance, search intent, ` +
      `internal linking, authority and now **AI-search readiness** — so you earn ` +
      `visibility in both traditional results and AI-generated answers.\n\n` +
      `👉 [Explore SEO services](/services/seo)`,
    keywords: ["what is seo", "seo meaning", "search engine optimization", "seo kya hai"],
    link: { label: "Explore SEO", href: "/services/seo" },
    priority: 7,
  },
  {
    id: "manual-what-is-ai-seo",
    category: "service",
    question: "What is AI SEO / generative SEO?",
    answer:
      `**AI SEO (generative SEO)** is about being visible and cited in AI answers — ` +
      `ChatGPT, Gemini, Perplexity, Google AI Overviews and similar engines.\n\n` +
      `It combines clear entity signals, structured data, answer-first content, ` +
      `credible sources and technically clean pages so AI systems can understand ` +
      `and quote your business.\n\n` +
      `👉 [Explore AI SEO](/services/seo)`,
    keywords: ["ai seo", "generative seo", "chatgpt seo", "ai search", "rank in chatgpt", "geo"],
    link: { label: "Explore AI SEO", href: "/services/seo" },
    priority: 7,
  },
  {
    id: "manual-what-is-ppc",
    category: "service",
    question: "What is PPC and how does it work?",
    answer:
      `**PPC (pay-per-click)** is paid advertising where you bid to show ads and pay ` +
      `when someone clicks (or, for some formats, when they view).\n\n` +
      `We plan the offer, targeting, creative, landing page and tracking together — ` +
      `because the ad is only half the conversion. Google, Meta, YouTube, LinkedIn ` +
      `and Amazon each play a different role in the funnel.`,
    keywords: ["what is ppc", "pay per click", "ppc meaning", "how do ads work", "google ads"],
    link: { label: "Explore Ads / PPC", href: "/services/ads-ppc" },
    priority: 6,
  },
  {
    id: "manual-what-is-local-seo",
    category: "service",
    question: "Do you do local SEO and Google Business Profile?",
    answer:
      `Yes — local SEO is part of our SEO practice.\n\n` +
      `It typically covers Google Business Profile optimisation, local landing ` +
      `pages, citations, reviews, location schema and the intent behind ` +
      `"near me" searches. Ideal for clinics, stores, service businesses and ` +
      `multi-location brands.`,
    keywords: ["local seo", "google business profile", "gmb", "near me", "local listing", "map pack"],
    link: { label: "Explore SEO", href: "/services/seo" },
    priority: 6,
  },
  {
    id: "manual-seo-pricing",
    category: "pricing",
    question: "How much does SEO cost?",
    answer:
      `SEO pricing depends on competition, the size of the site, how many pages ` +
      `need work and how aggressive the growth target is — so a responsible quote ` +
      `needs a quick look first.\n\n` +
      `We scope it as a monthly retainer for most businesses. Share your website ` +
      `and target keywords, and our team will give you a clear range with deliverables.`,
    keywords: ["seo cost", "seo price", "seo pricing", "seo charges", "seo budget", "seo kitna"],
    link: { label: "Get an SEO quote", href: "/contact" },
    priority: 7,
  },
  {
    id: "manual-guarantee-rank",
    category: "general",
    question: "Can you guarantee #1 ranking on Google?",
    answer:
      `No one who understands search can honestly guarantee a #1 ranking — Google's ` +
      `algorithm isn't controlled by any agency.\n\n` +
      `What we do commit to: sound strategy, strong execution, transparent reporting ` +
      `and honest expectations. If an agency promises guaranteed rankings, treat it ` +
      `as a red flag.`,
    keywords: ["guarantee ranking", "number 1 ranking", "first rank", "rank guarantee", "google guarantee"],
    priority: 7,
  },
  {
    id: "manual-redesign",
    category: "service",
    question: "Can you redesign my existing website?",
    answer:
      `Yes. We can redesign an existing site or rebuild it from scratch, depending ` +
      `on what's holding it back.\n\n` +
      `A redesign usually starts with an audit of structure, speed, mobile UX, ` +
      `content and conversion. We keep what works, fix what doesn't, and protect ` +
      `SEO during the migration.`,
    keywords: ["redesign", "website redesign", "revamp", "existing website", "rebuild website", "old website"],
    link: { label: "Explore Web Development", href: "/services/web-development" },
    priority: 6,
  },
  {
    id: "manual-wordpress",
    category: "service",
    question: "Do you build WordPress websites?",
    answer:
      `Yes — WordPress is one of the platforms we build and optimise on. That ` +
      `includes custom themes, plugin setup, speed optimisation, security, ` +
      `migrations and ongoing maintenance.\n\n` +
      `👉 [Explore Web Development](/services/web-development)`,
    keywords: ["wordpress", "wordpress website", "wordpress development", "wp"],
    link: { label: "Explore Web Development", href: "/services/web-development" },
    priority: 6,
  },
  {
    id: "manual-shopify",
    category: "service",
    question: "Do you build Shopify and WooCommerce stores?",
    answer:
      `Yes. We build and optimise Shopify, WooCommerce and custom eCommerce stores — ` +
      `covering design, product pages, checkout, payment/shipping integrations, ` +
      `migration and store SEO.\n\n` +
      `👉 [Explore eCommerce Solutions](/services/ecommerce)`,
    keywords: ["shopify", "woocommerce", "ecommerce store", "online store", "store development"],
    link: { label: "Explore eCommerce", href: "/services/ecommerce" },
    priority: 6,
  },
  {
    id: "manual-content",
    category: "service",
    question: "Do you write website content and copy?",
    answer:
      `Yes — content is one of our core practices.\n\n` +
      `We write website copy, landing pages, SEO content, blogs, social content, ` +
      `email content, case studies and campaign copy. Every piece is briefed ` +
      `around the audience, the search intent and the action you want.`,
    keywords: ["content writing", "copywriting", "website content", "blog writing", "landing page copy", "content"],
    link: { label: "Explore Content", href: "/services/content" },
    priority: 6,
  },
  {
    id: "manual-social",
    category: "service",
    question: "Do you manage social media accounts?",
    answer:
      `Yes — strategy, content calendars, creative, posting, community and ` +
      `reporting for Instagram, Facebook, LinkedIn and YouTube.\n\n` +
      `We plan social to support the business goal — demand, trust or retention — ` +
      `not just to keep the page active.`,
    keywords: ["social media", "instagram", "facebook", "linkedin", "youtube", "social media management"],
    link: { label: "Explore Social Media", href: "/services/social-media-marketing" },
    priority: 6,
  },
  {
    id: "manual-video",
    category: "service",
    question: "Do you offer video editing and motion graphics?",
    answer:
      `Yes. Our Design & Creative team handles video editing, motion graphics, ` +
      `social creatives, ad creatives, presentations and brand assets.\n\n` +
      `👉 [Explore Design & Creative](/services/design-creative)`,
    keywords: ["video editing", "motion graphics", "reels", "video", "animation", "creative"],
    link: { label: "Explore Design & Creative", href: "/services/design-creative" },
    priority: 5,
  },
  {
    id: "manual-amazon",
    category: "service",
    question: "Do you offer Amazon services?",
    answer:
      `Yes — Amazon SEO, Amazon ads and Amazon store development are part of our ` +
      `eCommerce and ads capabilities.\n\n` +
      `We help with listing optimisation, keyword strategy, A+ content, campaign ` +
      `structure and marketplace growth.`,
    keywords: ["amazon", "amazon seo", "amazon ads", "marketplace", "flipkart"],
    link: { label: "Explore Ads / PPC", href: "/services/ads-ppc" },
    priority: 5,
  },
  {
    id: "manual-crm",
    category: "service",
    question: "Can you build CRM or ERP software?",
    answer:
      `Yes — custom CRM, ERP and business management software is part of our ` +
      `Software & AI practice, along with API development and automation.\n\n` +
      `We start with the workflow that's costing you time or money, then build the ` +
      `smallest system that fixes it — not software for its own sake.`,
    keywords: ["crm", "erp", "custom software", "business software", "api development"],
    link: { label: "Explore Software & AI", href: "/services/software-ai" },
    priority: 5,
  },
  {
    id: "manual-hosting",
    category: "service",
    question: "Do you provide hosting, domains and server management?",
    answer:
      `Yes. Our Hosting & Migration practice covers hosting setup, migration, DNS, ` +
      `server management, SSL and performance — and our Cloud & DevOps team handles ` +
      `AWS, Docker, Kubernetes, CI/CD, monitoring and security for larger platforms.\n\n` +
      `👉 [Explore Hosting & Migration](/services/hosting-migration)`,
    keywords: ["hosting", "domain", "server", "dns", "migration", "ssl", "vps"],
    link: { label: "Explore Hosting & Migration", href: "/services/hosting-migration" },
    priority: 5,
  },
  {
    id: "manual-speed-security",
    category: "service",
    question: "My website is slow or has security issues — can you fix it?",
    answer:
      `Yes — that's core maintenance work for us.\n\n` +
      `We diagnose speed (images, scripts, hosting, database), harden security ` +
      `(updates, malware, access, backups) and set up monitoring so issues are ` +
      `caught before they cost you sales.`,
    keywords: ["slow website", "website speed", "hacked", "malware", "security", "site down", "fix website"],
    link: { label: "Explore Maintenance & Support", href: "/services/maintenance-support" },
    priority: 6,
  },
  {
    id: "manual-reputation",
    category: "service",
    question: "Do you handle online reputation management?",
    answer:
      `Yes — reputation management is one of our capability areas.\n\n` +
      `It covers review strategy, response frameworks, brand mentions, search ` +
      `results and the content that shapes what people see when they look you up.`,
    keywords: ["reputation", "reviews", "online reputation", "brand mentions", "negative reviews"],
    link: { label: "Explore Reputation Management", href: "/services/reputation-management" },
    priority: 5,
  },
  {
    id: "manual-app",
    category: "service",
    question: "Can you build a mobile app?",
    answer:
      `Yes — native Android/iOS and cross-platform apps with Flutter or React Native.\n\n` +
      `We handle product thinking, UI/UX, backend, APIs, deployment and maintenance. ` +
      `For a first release we usually recommend a focused MVP rather than every ` +
      `feature at once.`,
    keywords: ["mobile app", "android app", "ios app", "flutter", "react native", "app development"],
    link: { label: "Explore Mobile Apps", href: "/services/mobile-app-development" },
    priority: 6,
  },
  {
    id: "manual-ai-chatbot",
    category: "service",
    question: "Can you build an AI chatbot or AI agent?",
    answer:
      `Yes. We build AI chatbots, AI agents, RAG applications, LLM integrations and ` +
      `generative-AI tools — connected to your actual business data and workflows.\n\n` +
      `The goal is practical: faster support, better lead handling, less manual work. ` +
      `We'll be clear about what AI can and can't reliably do for your use case.`,
    keywords: ["ai chatbot", "ai agent", "chatbot development", "rag", "llm", "generative ai", "automation"],
    link: { label: "Explore Software & AI", href: "/services/software-ai" },
    priority: 6,
  },
  {
    id: "manual-seo-timeline",
    category: "general",
    question: "How long until SEO shows results?",
    answer:
      `Realistically:\n\n` +
      `- **First signals** (indexing, impressions, ranking movement) — 3–4 months\n` +
      `- **Meaningful traffic and lead impact** — 6–12 months, depending on competition and site health\n` +
      `- **Compounding advantage** — after 12 months, if content and technical work continue\n\n` +
      `Anyone promising page-one rankings in 2 weeks isn't doing SEO honestly.`,
    keywords: ["seo results", "seo timeline", "how long seo", "seo time", "seo kab tak"],
    link: { label: "Explore SEO", href: "/services/seo" },
    priority: 7,
  },
  {
    id: "manual-tracking",
    category: "general",
    question: "Do you set up tracking and conversion measurement?",
    answer:
      `Yes — tracking is part of every engagement, not an afterthought.\n\n` +
      `We set up analytics, conversion events, call/WhatsApp tracking and, where ` +
      `relevant, CRM attribution — so you can see which channels actually create ` +
      `leads and revenue.\n\n` +
      `Without clean tracking, optimisation is guesswork.`,
    keywords: ["tracking", "analytics", "conversion tracking", "ga4", "pixel", "attribution", "measure"],
    link: { label: "Talk to our team", href: "/contact" },
    priority: 6,
  },
  {
    id: "manual-samples",
    category: "portfolio",
    question: "Can you share samples or a proposal?",
    answer:
      `Yes. You can start with our portfolio and case studies, and after a short ` +
      `conversation we'll prepare a proposal tailored to your goals — scope, ` +
      `timeline, deliverables and pricing.\n\n` +
      `- 🎨 [View portfolio](/portfolio)\n` +
      `- 📊 [Read case studies](/case-studies)`,
    keywords: ["samples", "proposal", "quotation", "example work", "share work", "deck"],
    link: { label: "View portfolio", href: "/portfolio" },
    priority: 6,
  },
  {
    id: "manual-whats-next",
    category: "general",
    question: "What happens after I contact you?",
    answer:
      `Here's the flow:\n\n` +
      `1. We reply within **2 business hours** on working days\n` +
      `2. A short discovery call to understand your business and goal\n` +
      `3. A clear proposal with scope, timeline and pricing\n` +
      `4. Kick-off once you're comfortable — no pressure to commit early\n\n` +
      `If you'd rather skip the back-and-forth, message us on WhatsApp and we'll ` +
      `take it from there.`,
    keywords: ["after contact", "next steps", "what happens next", "after enquiry", "then what"],
    link: { label: "Contact us", href: "/contact" },
    priority: 7,
  },

  // ─── GLOSSARY (common marketing / technology questions) ───────────────────
  {
    id: "manual-glossary-digital-marketing",
    category: "general",
    question: "What is digital marketing?",
    answer:
      `**Digital marketing** is how a business reaches, engages and converts customers online — search, social, ads, content, email and the website working as one system.\n\n` +
      `The mistake most businesses make is running each channel in isolation. Strategy, creative, media and the website have to reinforce the same message and measure the same outcome.`,
    keywords: ["what is digital marketing", "digital marketing", "digital marketing meaning"],
    link: { label: "Explore all services", href: "/services" },
    priority: 7,
  },
  {
    id: "manual-glossary-lead-generation",
    category: "general",
    question: "What is lead generation?",
    answer:
      `**Lead generation** is the process of turning attention into identifiable enquiries — people who have shown interest and shared a way to contact them.\n\n` +
      `It usually combines a clear offer, a focused landing page, SEO/content, paid ads and easy contact paths like WhatsApp or call buttons. Quality matters more than volume: a small number of sales-ready leads beats a large list that never converts.`,
    keywords: ["what is lead generation", "lead generation", "generate leads", "lead gen"],
    link: { label: "Explore services", href: "/services" },
    priority: 7,
  },
  {
    id: "manual-glossary-cro",
    category: "general",
    question: "What is conversion rate optimisation (CRO)?",
    answer:
      `**Conversion rate optimisation (CRO)** is the work of increasing the percentage of visitors who take the action you want — enquire, call, book, add to cart or buy.\n\n` +
      `It combines research, UX, copy, speed, trust signals and testing. The goal is not more traffic; it is more value from the traffic you already have.`,
    keywords: ["what is cro", "conversion rate optimization", "conversion rate optimisation", "cro", "conversion optimization"],
    link: { label: "Talk to our team", href: "/contact" },
    priority: 7,
  },
  {
    id: "manual-glossary-landing-page",
    category: "general",
    question: "What is a landing page?",
    answer:
      `A **landing page** is a focused page built around one action — usually a form, call, WhatsApp message or purchase.\n\n` +
      `Good landing pages match the ad or search query that brought the visitor, make the offer clear in seconds, remove distractions and answer objections before asking for the conversion.`,
    keywords: ["what is a landing page", "landing page", "landing pages"],
    link: { label: "Explore Web Development", href: "/services/web-development" },
    priority: 6,
  },
  {
    id: "manual-glossary-sales-funnel",
    category: "general",
    question: "What is a sales funnel?",
    answer:
      `A **sales funnel** maps the stages a customer moves through — awareness, interest, consideration, decision and retention.\n\n` +
      `Each stage needs different content and a different call to action. Most growth problems are not \"not enough traffic\"; they are a broken or missing stage in the funnel.`,
    keywords: ["what is a sales funnel", "sales funnel", "marketing funnel", "funnel"],
    link: { label: "How we work", href: "/about" },
    priority: 6,
  },
  {
    id: "manual-glossary-keyword-research",
    category: "general",
    question: "What is keyword research?",
    answer:
      `**Keyword research** is finding the words and questions your buyers actually search for, then prioritising them by intent, demand and business value.\n\n` +
      `It is not just about search volume. A low-volume query with strong buying intent can be worth far more than a high-volume informational term.`,
    keywords: ["what is keyword research", "keyword research", "keyword strategy", "keywords"],
    link: { label: "Explore SEO", href: "/services/seo" },
    priority: 6,
  },
  {
    id: "manual-glossary-backlink",
    category: "general",
    question: "What is a backlink?",
    answer:
      `A **backlink** is a link from another website to yours — a signal that your page is worth referencing.\n\n` +
      `Relevance and quality matter far more than quantity. Genuine editorial links earned through useful content, PR and partnerships help; paid link schemes can do long-term damage.`,
    keywords: ["what is a backlink", "backlink", "backlinks", "link building"],
    link: { label: "Explore SEO", href: "/services/seo" },
    priority: 6,
  },
  {
    id: "manual-glossary-core-web-vitals",
    category: "general",
    question: "What are Core Web Vitals?",
    answer:
      `**Core Web Vitals** are Google's page-experience metrics: **LCP** (loading speed), **INP** (responsiveness) and **CLS** (visual stability).\n\n` +
      `They matter for user experience and are one of many ranking signals. A fast, stable site also converts better — so the fix pays off twice.`,
    keywords: ["what are core web vitals", "core web vitals", "lcp", "cls", "inp", "page speed"],
    link: { label: "Explore Web Development", href: "/services/web-development" },
    priority: 6,
  },
  {
    id: "manual-glossary-schema",
    category: "general",
    question: "What is schema markup / structured data?",
    answer:
      `**Schema markup** is structured data added to a page to explain its content to search engines — for example a product, FAQ, review, article or local business.\n\n` +
      `It helps search engines understand entities and can enable richer results. It is not a magic ranking button, but it is part of a technically clean SEO foundation.`,
    keywords: ["what is schema markup", "schema markup", "structured data", "schema", "json ld"],
    link: { label: "Explore SEO", href: "/services/seo" },
    priority: 6,
  },
  {
    id: "manual-glossary-programmatic-seo",
    category: "general",
    question: "What is programmatic SEO?",
    answer:
      `**Programmatic SEO** is creating many useful pages from a structured data set and a repeatable template — for example location pages, comparison pages or large product catalogues.\n\n` +
      `It works only when each page has genuine, unique value. Scaling thin pages is the fastest way to damage a site.`,
    keywords: ["what is programmatic seo", "programmatic seo", "programmatic"],
    link: { label: "Explore SEO", href: "/services/seo" },
    priority: 6,
  },
  {
    id: "manual-glossary-remarketing",
    category: "general",
    question: "What is remarketing / retargeting?",
    answer:
      `**Remarketing** (or retargeting) shows ads to people who already interacted with your business — visited a page, started a form or added something to a cart.\n\n` +
      `It works because the audience is warm, but frequency and creative matter: useful reminders convert, aggressive repetition annoys.`,
    keywords: ["what is remarketing", "remarketing", "retargeting", "retarget"],
    link: { label: "Explore Ads / PPC", href: "/services/ads-ppc" },
    priority: 6,
  },
  {
    id: "manual-glossary-google-vs-meta",
    category: "general",
    question: "What is the difference between Google Ads and Meta Ads?",
    answer:
      `**Google Ads** usually captures existing demand — someone is already searching for a solution. **Meta Ads** create demand — they interrupt people with relevant creative and build interest.\n\n` +
      `Most businesses benefit from both at different stages of the funnel: Google for high-intent search, Meta for discovery, proof and retargeting.`,
    keywords: ["google ads vs meta ads", "google ads and meta ads", "meta ads", "facebook ads", "google ads difference"],
    link: { label: "Explore Ads / PPC", href: "/services/ads-ppc" },
    priority: 6,
  },
  {
    id: "manual-glossary-ui-ux",
    category: "general",
    question: "What is UI/UX design?",
    answer:
      `**UI** is how a product looks and feels; **UX** is how it works and how easily someone achieves their goal.\n\n` +
      `Great UX starts with user research and flows, then moves to wireframes and interface design. Pretty screens that confuse people are not good design.`,
    keywords: ["what is ui ux", "ui ux", "ui ux design", "user experience design", "user interface design"],
    link: { label: "Explore Design & Creative", href: "/services/design-creative" },
    priority: 6,
  },
  {
    id: "manual-glossary-mvp",
    category: "general",
    question: "What is an MVP?",
    answer:
      `An **MVP (minimum viable product)** is the smallest version of a product that delivers real value and lets you test demand with actual users.\n\n` +
      `The point is learning fast, not shipping something broken. Build the core workflow, measure how people use it, then invest in the features that matter.`,
    keywords: ["what is an mvp", "mvp", "minimum viable product", "build an mvp"],
    link: { label: "Explore Software & AI", href: "/services/software-ai" },
    priority: 6,
  },
  {
    id: "manual-glossary-headless-cms",
    category: "general",
    question: "What is a headless CMS?",
    answer:
      `A **headless CMS** stores and manages content separately from the frontend that displays it.\n\n` +
      `That gives teams flexibility to publish to a website, app or multiple channels from one content source. It is powerful, but needs more engineering than a traditional CMS like WordPress — the right choice depends on your team and roadmap.`,
    keywords: ["what is a headless cms", "headless cms", "headless"],
    link: { label: "Explore Web Development", href: "/services/web-development" },
    priority: 6,
  },
  {
    id: "manual-glossary-api",
    category: "general",
    question: "What is an API?",
    answer:
      `An **API (application programming interface)** is how two software systems talk to each other — for example a website sending a lead into a CRM, or an app requesting data from a payment provider.\n\n` +
      `Good API design makes integrations reliable and secure. Most custom software projects live or die on how well these connections are planned.`,
    keywords: ["what is an api", "api", "api integration", "api development"],
    link: { label: "Explore Software & AI", href: "/services/software-ai" },
    priority: 6,
  },
  {
    id: "manual-glossary-ab-testing",
    category: "general",
    question: "What is A/B testing?",
    answer:
      `**A/B testing** compares two versions of a page, ad or email with real traffic to see which performs better.\n\n` +
      `Test one meaningful variable at a time, make sure the sample is large enough and let the result run long enough. Otherwise you are just guessing with extra steps.`,
    keywords: ["what is a b testing", "a b testing", "ab testing", "split testing", "a/b test"],
    link: { label: "Talk to our team", href: "/contact" },
    priority: 6,
  },
  {
    id: "manual-glossary-buyer-persona",
    category: "general",
    question: "What is a buyer persona?",
    answer:
      `A **buyer persona** is a research-based profile of your ideal customer — their goals, pains, objections, triggers and decision process.\n\n` +
      `It is not a made-up character. It should come from sales conversations, reviews, analytics and customer research, and it should shape your messaging, targeting and content.`,
    keywords: ["what is a buyer persona", "buyer persona", "customer persona", "target audience"],
    link: { label: "How we work", href: "/about" },
    priority: 6,
  },
  {
    id: "manual-glossary-content-marketing",
    category: "general",
    question: "What is content marketing?",
    answer:
      `**Content marketing** is creating genuinely useful content — guides, blogs, videos, case studies — that attracts the right audience and builds trust before the sale.\n\n` +
      `It supports SEO, sales enablement and retention, but only when it is planned around real questions and a clear business goal, not published for the sake of a content calendar.`,
    keywords: ["what is content marketing", "content marketing", "content strategy"],
    link: { label: "Explore Content", href: "/services/content" },
    priority: 6,
  },
  {
    id: "manual-glossary-branding",
    category: "general",
    question: "What is branding?",
    answer:
      `**Branding** is how people perceive your business — positioning, voice, visual identity and the consistency of every interaction.\n\n` +
      `A strong brand makes marketing cheaper because people recognise you, trust you sooner and remember why you are different. A logo alone is not a brand.`,
    keywords: ["what is branding", "branding", "brand strategy", "brand identity"],
    link: { label: "Explore Design & Creative", href: "/services/design-creative" },
    priority: 6,
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
