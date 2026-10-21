import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import PortfolioGrid from "@/components/PortfolioGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  portfolioProjects,
  projectCategories,
} from "@/data/portfolio/portfolio";
import { balancedGrid } from "@/lib/process-grid";
import { resolvePortfolioRedirect } from "@/lib/content-fallback";
import { socialMetadata } from "@/lib/social-metadata";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return projectCategories.map((category) => ({ category: category.key }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = projectCategories.find(
    (c) => c.key === category
  );

  if (!cat) {
    return {
      title: "Portfolio | Eddinet",
      description:
        "Browse Eddinet's portfolio of websites, eCommerce stores, software, SaaS, AI, mobile apps, SEO and digital growth projects.",
      alternates: { canonical: "https://eddinet.com/portfolio" },
      robots: { index: false, follow: false },
    };
  }

  const title = `${cat.label} Portfolio | Eddinet`;
  const description = `Browse ${cat.label} projects delivered by Eddinet in Delhi NCR - real websites, apps, software and campaigns built to convert.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://eddinet.com/portfolio/${cat.key}`,
    },
    ...socialMetadata({
      title,
      description,
      url: `https://eddinet.com/portfolio/${cat.key}`,
    }),
  };
}

/*
 * CATEGORY COPY
 * --------------
 * projectCategories me sirf `key` aur `label` hain - koi blurb ya
 * description nahi. Isliye har category ka apna intro, deliverables aur
 * "How we work" yahan likha hai, taaki category page sirf 2-3 line ka
 * card grid na lage. Text generic nahi hai - har category ke actual kaam
 * se likha gaya hai. Naya category add ho to is map me bhi entry daalni hai.
 */
type CategoryContent = {
  intro: string;
  detail: string;
  deliverables: string[];
  approach: string[];
};

const categoryContent: Record<string, CategoryContent> = {
  websites: {
    intro:
      "A website is usually the first place a buyer checks you, and most visitors leave within a few seconds if the page does not answer their question. Our website work covers the full build - information architecture, page templates, content structure, performance and the enquiry flow that sits underneath all of it. The result is a site that explains the offer before the visitor has to ask, and makes it easy to start a conversation whether that means a call, a form or a WhatsApp message.",
    detail:
      "We also handle sites that already exist but no longer earn their keep. That usually means a clearer structure, a faster load, a design that matches how the business looks today, and pages that are built to rank rather than only to exist. Every site ships on a structure search engines can crawl and a component system your team can update without calling a developer for every small change.",
    deliverables: [
      "Responsive page system built on a reusable component library",
      "Enquiry flows wired to WhatsApp, email or your CRM",
      "SEO-ready structure, clean schema and fast page loads",
      "Analytics, Search Console and a handover guide for your team",
    ],
    approach: [
      "Discovery first: we map the audience, the pages they actually need and the action the site has to drive before a single layout is drawn.",
      "Built to convert: every template carries a clear hero, proof, offer and one call to action, with forms that validate and route correctly.",
      "Handed over ready: fast pages, clean code, analytics installed and a CMS your team can run without us in the room.",
    ],
  },
  ecommerce: {
    intro:
      "An online store has to do two jobs at once - convince a visitor who has never heard of you, and let a customer who already knows what they want check out in as few steps as possible. We build and optimise stores for that balance: catalogue architecture, product and collection pages, payment and shipping setup, and the merchandising decisions that decide what gets bought, not only what gets browsed.",
    detail:
      "Most of our eCommerce work starts with an existing store that gets traffic but no revenue, or a new brand that needs its first store. Either way the work is the same - clean product data, product pages that answer objections, a checkout that does not lose people, and a measurement setup that tells us which category, channel and creative is actually driving revenue. Where a store is already live we also fix what quietly costs revenue: slow product pages, broken tracking, checkout friction and category pages that rank for nothing. Those fixes usually pay for the engagement inside the first quarter, which is why we start with measurement and not with a redesign.",
    deliverables: [
      "Store setup on Shopify, WooCommerce or a custom stack",
      "Product, category and campaign landing page templates",
      "Payments, shipping, tax and COD configured and tested",
      "Product feeds, abandoned cart flows and review integration",
    ],
    approach: [
      "Catalogue first: we organise products into collections and filters that match how customers shop, not how the warehouse stores stock.",
      "Checkout that closes: payment, shipping, taxes and trust signals are tested end to end before the store is called live.",
      "Revenue tracked properly: spend, traffic and sales are connected so the next decision is made on margin, not on impressions.",
    ],
  },
  "software-saas": {
    intro:
      "Custom software is a real cost, so it has to earn it. Our Software and SaaS work covers business-critical systems - inventory and billing, learning platforms, patient management, internal tools and dashboards - built around how your team already works rather than around a generic template. We start from the process, map exactly where the manual work and the errors live, and build only what is needed to remove them.",
    detail:
      "Alongside the build we handle the parts most vendors skip: role-based access, audit trails, integrations with the payment, CRM and accounting tools you already use, and a release process that lets new versions ship without drama. The result is software the business can depend on after the handover, not a demo that only works during the pitch. We also write the technical documentation as we go, so the client can bring in another developer later and still understand how the system fits together. The scope is agreed module by module, so the first release stays inside the budget instead of quietly turning into a full rebuild.",
    deliverables: [
      "Role-based access, audit trails and structured data models",
      "Integrations with your CRM, payment and accounting tools",
      "Dashboards and reports that show the numbers that matter",
      "Staging environment, documentation and a release routine",
    ],
    approach: [
      "Process first: we document the current way of working and mark precisely where the hours and the mistakes go.",
      "Right-sized build: we ship the core system first, then add what the team actually asks for once it is in daily use.",
      "Clean handover: documented code, a staging environment and a release routine the client can run without us.",
    ],
  },
  "ai-automation": {
    intro:
      "Most AI work we are asked to do is not a chatbot for its own sake. It is a specific, expensive, repetitive task that a person should not be doing - writing first drafts, answering the same policy question all day, or moving data between systems by hand. We start by naming that task, measuring what it costs you today, and only then deciding whether AI, plain rules or straightforward automation is the right tool for it. The point is not to look modern. It is to move a number the business already tracks, and that framing keeps the project honest because the answer is often a workflow change rather than a model.",
    detail:
      "From there the build is ordinary software with one unusual component: a model that can be wrong. That is why every AI feature we ship has a review step, a fallback and a clear rule for when the system should hand the work back to a human. Our own content engine follows the same pattern - it drafts, a person edits, and the publishing calendar stays on schedule either way.",
    deliverables: [
      "Use case mapped, scoped and costed before we build",
      "Model, prompt and retrieval pipeline tuned on your data",
      "Human review step and a safe fallback for every output",
      "Evaluation set so quality is measured, not assumed",
    ],
    approach: [
      "Find the task: we look for work that is frequent, rule-bound and expensive in human hours, not for clever demos.",
      "Human in the loop: every output is reviewable, editable and safe to fall back from when the model is unsure.",
      "Measured against the baseline: we compare time, cost and quality with the old process, not with a demo reel.",
    ],
  },
  "mobile-apps": {
    intro:
      "An app is a bigger commitment than a website - it needs distribution, updates and people to keep coming back to it. We build mobile apps when the product genuinely needs one: when the customer has to be reached outside the browser, when a device feature carries real value, or when a dedicated experience is what makes the service stick. Where a responsive site would do the job well, we will say that instead of selling you an app. A mobile app is also a channel decision, and we make that call with you rather than after the build.",
    detail:
      "The work covers the full loop - product flow, interface design, development, store release and the analytics that show where people drop out. We build on Flutter or React Native for most products so a single codebase covers both platforms, and we design for the conditions our users are actually in: slow networks, small screens and sessions that last three minutes rather than thirty. We also plan the release properly, because an app that cannot be updated quickly becomes a liability the first time the operating system changes something.",
    deliverables: [
      "Product flow and screen map for iOS and Android",
      "Flutter or React Native codebase from one team",
      "Store release, crash monitoring and update rollout",
      "Push, payments, loyalty and analytics wired in",
    ],
    approach: [
      "Product flow first: we map the handful of screens that carry the job and cut everything that does not earn its place.",
      "Real-device testing: layouts are checked on low-end phones and poor connections, not only inside a simulator.",
      "Release and improve: store submission, crash monitoring and version updates are planned in, not added later.",
    ],
  },
  seo: {
    intro:
      "SEO at Eddinet is a compounding channel, not a monthly ranking report. We work across technical health, content and authority, and we measure it in enquiries, pipeline and revenue rather than in keyword positions. That means the work starts with what actually sells for your business, then works backwards to the pages that need to exist and the technical problems holding them back.",
    detail:
      "AI search has changed how people ask questions, so we treat visibility as two jobs: ranking in the classic results and being the answer inside AI-generated results. Both need the same foundation - clear structure, fast pages, genuinely useful content and credible sources - which is why our technical and content work run together instead of being split across two vendors. And we keep the two connected: technical work makes the content rank, content gives the technical work something to rank. A site with no pages worth reading does not become a traffic machine because the crawl budget was cleaned up. The reporting stays plain: what we did, what it moved, and what we would change if we ran the same plan again next quarter.",
    deliverables: [
      "Technical audit of crawl, speed, schema and indexation",
      "Keyword and intent map tied to revenue, not volume",
      "Topic clusters, refreshed pages and internal link structure",
      "Reporting on enquiries, pipeline and share of voice",
    ],
    approach: [
      "Revenue-led targeting: we go after the searches that can realistically convert, not the ones that look good in a report.",
      "Fix the base first: crawlability, speed, schema and internal linking are cleaned up before we publish more content.",
      "Compounding content: topic clusters that answer real questions and keep earning impressions and links for years.",
    ],
  },
  "paid-media": {
    intro:
      "Paid media is the fastest way to buy a result and the fastest way to waste money. We run campaigns against a defined target - a cost per lead, a cost per enrolment, a return on ad spend - and every rupee is tracked back to that one number. Creative is treated as the main lever, because in most accounts the biggest gains come from what people actually see rather than from where the ad is placed. Nothing here is a black box: the account stays yours, the data stays yours, and you get a report you can read without a translator.",
    detail:
      "The work covers search, social, video and remarketing, all of it built on clean conversion tracking. If a form, a call or a purchase is not being recorded properly, no amount of optimisation can fix it, so tracking is always the first task we complete. Accounts are run in-house, reported against what changed and what it cost, and scaled only where the numbers are already profitable. Creative testing is a scheduled habit, not something we do when a campaign dips - we keep a running library of what has worked, what has failed and why.",
    deliverables: [
      "Conversion tracking rebuilt and verified before spend",
      "Search, Meta, YouTube, LinkedIn and remarketing campaigns",
      "Creative testing plan with fresh angles every month",
      "Weekly reporting on spend, leads and cost per result",
    ],
    approach: [
      "Tracking before spending: conversions are recorded and tested before a rupee of budget is moved.",
      "Creative testing as a habit: new angles are tested continuously instead of once at launch and then left to decay.",
      "Scale what pays: budget follows proven campaigns, with an agreed target cost per lead or sale.",
    ],
  },
  "content-design": {
    intro:
      "Content and design are often sold separately, but they do the same job: they decide whether someone keeps reading or keeps scrolling. We build the message first - who it is for, what it has to change, and the order the arguments come in - and then design it so the point lands on the first screen and holds through the rest of the page.",
    detail:
      "That covers brand identity, campaign creative, landing pages, packaging, catalogues and the content that fills them: SEO articles, landing page copy, product descriptions and social calendars. We write for the reader comparing options, not for the search engine alone, and every asset is produced in the sizes and formats the channels actually need instead of being resized afterwards. This is also where brand consistency is won or lost - the type scale, the colour rules, the tone of the words and the way a product is photographed all have to say the same thing on a packaging box, a landing page and a paid ad. We define those rules once, so every asset afterwards is faster to make and easier to keep consistent.",
    deliverables: [
      "Brand identity, colour, type and design system rules",
      "Landing pages, campaign creatives and social assets",
      "SEO articles, product copy and email sequences",
      "Assets produced in every size each channel actually needs",
    ],
    approach: [
      "Message before layout: the argument and the proof are written first, and the design follows what has been decided.",
      "One idea per asset: every creative, page and email carries a single job and a single call to action.",
      "Produced for the channel: content is written and designed for the format it will run in, not adapted from one master file.",
    ],
  },
  "cloud-devops": {
    intro:
      "Most sites do not fail because of a bad feature. They fail because nobody was watching - a certificate expired, a backup never ran, a deployment went out at the wrong time. This is the unglamorous work that keeps everything else running: hosting, servers, deployment pipelines, monitoring, backups and security hardening for businesses that cannot afford an outage or a slow site.",
    detail:
      "We take over infrastructure that was set up once and never maintained, move workloads to managed cloud services where that is genuinely better, and document the setup so it does not depend on one person's memory. Monitoring and alerting are configured before we hand anything over, with escalation paths that say who does what when an alert fires at two in the morning. We also take on the work nobody else wants to own: renewing a domain before it lapses, rotating keys on a server that has been running for four years, or moving a site off a host that stopped answering support tickets. The result is infrastructure with a known state, a known owner and a documented recovery path if anything does go wrong.",
    deliverables: [
      "Managed hosting, DNS, SSL and hardened server configuration",
      "CI/CD pipeline with staging, backups and rollbacks",
      "Uptime, security and error monitoring with alerts",
      "Documentation of every service, renewal and credential",
    ],
    approach: [
      "Stabilise first: backups, monitoring and patching are fixed before anything new is deployed on top of it.",
      "Documented infrastructure: every server, service, renewal and credential is written down and handed over with it.",
      "Predictable releases: tested deployment pipelines so updates ship without downtime or last-minute rollbacks.",
    ],
  },
  "support-reputation": {
    intro:
      "Launching is the easy part. Keeping a site fast, secure and credible month after month is the work that decides whether a business looks professional or looks abandoned. Our support and reputation engagements cover that ongoing side: updates, backups, security patching, uptime monitoring, response times and the review and business listing presence that customers check before they buy.",
    detail:
      "We work under a clear agreement - what is covered, how quickly we respond at each severity, what is included in the month and what is billed extra. For reputation work, we set up the review and listing process, respond to feedback in a tone that sounds like a business rather than a template, and report on sentiment, response time and rating movement over time. Most businesses do not need a support team of twenty - they need a dependable one that answers quickly, documents everything and improves the site while it is already there. You get a monthly plan and a short written report, so you always know what is covered, what was done and what the next month looks like.",
    deliverables: [
      "Monthly updates, backups, patching and uptime monitoring",
      "SLA-based response times by severity and channel",
      "Review generation, monitoring and reply handling",
      "Business listings, Google Business Profile and reports",
    ],
    approach: [
      "Agree the scope: a written plan of what is covered, the response times and the monthly cost, before anything starts.",
      "Prevent before we repair: patching, backups and monitoring stop most incidents from happening in the first place.",
      "Report what changed: a monthly note on what was done, what broke, and what is planned for the next month.",
    ],
  },
};

/*
 * Fallback copy - agar koi nayi category add ho aur is map me entry
 * na ho, to page khaali na lage. Ye label se khud generate hota hai.
 */
function getCategoryContent(
  key: string,
  label: string
): CategoryContent {
  return (
    categoryContent[key] ?? {
      intro: `${label} work at Eddinet runs as part of one connected growth system - the same team that handles strategy, build and measurement - so the work in this area stays aligned with the rest of the business instead of running as a separate project that nobody else can see.`,
      detail: `Every engagement in this area starts with the outcome you need, the baseline we can measure against and the constraint we have to respect - budget, timeline, internal capacity or an existing system we have to work with. You get the plan in writing before the build starts, and a clear view of what changed once it is live.`,
      deliverables: [
        "A written plan of scope, timeline and the metric we will be judged on",
        "The core work delivered first, so you are not waiting on a long build",
        "A handover document and an environment your own team can run",
      ],
      approach: [
        "Outcome first: we start from the result you need, not from a list of deliverables we happen to offer.",
        "Documented plan: scope, timeline and the metric we will be judged on are agreed before the work starts.",
        "Measured after launch: we compare against the baseline and report what actually moved, not what was shipped.",
      ],
    }
  );
}

export default async function PortfolioCategoryPage({
  params,
}: Props) {
  const { category } = await params;
  const cat = projectCategories.find(
    (c) => c.key === category
  );

  if (!cat) {
    const fallback = resolvePortfolioRedirect(category);
    if (fallback) permanentRedirect(fallback);
    notFound();
  }

  const content = getCategoryContent(cat.key, cat.label);
  const categoryUrl = `https://eddinet.com/portfolio/${cat.key}`;

  // Category ke projects hi list banate hain - list khud data se aati
  // hai, isliye koi category bina projects ke bhi valid JSON deta hai
  // (itemListElement khaali ho jayega, crash nahi hoga).
  const categoryProjects = portfolioProjects.filter(
    (p) => p.category === cat.key
  );

  // COLLECTIONPAGE + ITEMLIST SCHEMA
  // Category page ek collection hai - uske projects ki list se
  // linked. CollectionPage page ko, ItemList uske contents ko
  // represent karta hai.
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${categoryUrl}#page`,
    name: `${cat.label} Portfolio | Eddinet`,
    url: categoryUrl,
    description: `Browse ${cat.label} projects delivered by Eddinet in Delhi NCR - real websites, apps, software and campaigns built to convert.`,
    mainEntity: { "@id": `${categoryUrl}#list` },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${categoryUrl}#list`,
    name: `${cat.label} Projects`,
    itemListElement: categoryProjects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      description: p.summary,
      url: p.url ? p.url : categoryUrl,
    })),
  };

  return (
    <>
      {/* JSON-LD: category collection + uske projects ki list */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="pt-[125px] pb-[100px]">

      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Portfolio", href: "/portfolio" },
            { label: cat.label },
          ]}
        />

        {/* ================= CATEGORY INTRO ================= */}
        <section className="mt-8 mb-12">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-5">
            {cat.label}
          </div>

          <div className="max-w-[900px]">
            <p className="text-[1.12rem] leading-relaxed text-[var(--text-main)] mb-4">
              {content.intro}
            </p>
            <p className="text-[1rem] leading-relaxed text-[var(--text-muted)]">
              {content.detail}
            </p>
          </div>
        </section>

        {/* ================= WHAT THIS WORK INCLUDES ================= */}
        <section className="mb-14">
          <h2 className="text-[1.6rem] font-extrabold text-[var(--text-main)] mb-6">
            What This Work Includes
          </h2>

          <ul className="grid grid-cols-2 gap-3 max-[768px]:grid-cols-1">
            {content.deliverables.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 p-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)]"
              >
                <span className="w-6 h-6 rounded-full bg-[rgba(var(--accent-rgb),0.12)] flex items-center justify-center text-[var(--main-accent)] text-[0.72rem] font-bold shrink-0">
                  ✓
                </span>
                <span className="text-[0.92rem] leading-relaxed text-[var(--text-muted)]">
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ================= HOW WE WORK ================= */}
        <section className="mb-14">
          <h2 className="text-[1.6rem] font-extrabold text-[var(--text-main)] mb-6">
            How We Work
          </h2>

          <div className={balancedGrid(content.approach.length, { base: 3, gapClass: "cgrid-gap-6", stages: [{ bp: 1024, maxCols: 1 }] })}>
            {content.approach.map((point, i) => (
              <div
                key={point}
                className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] h-full"
              >
                <span className="block text-[0.8rem] font-extrabold text-[var(--text-dim)] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[0.92rem] leading-relaxed text-[var(--text-muted)]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </section>

        <PortfolioGrid
          initialCategory={cat.key}
          hideControls
        />

      </div>

    </main>
    </>
  );
}
