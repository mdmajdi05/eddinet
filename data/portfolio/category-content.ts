// ============================================================================
//  FILE: data/portfolio/category-content.ts
//  WHAT'S IN THIS FILE:
//    Unique intro copy for each /portfolio/<category> page. These pages used to
//    render only the project grid (thin content); this gives every category a
//    substantial, genuinely category-specific overview instead of shared
//    boilerplate.
// ============================================================================

export interface PortfolioCategoryContent {
  introHeading: string;
  paragraphs: string[];
  deliverables: string[];
  serviceHref: string;
  serviceLabel: string;
}

export const portfolioCategoryContent: Record<
  string,
  PortfolioCategoryContent
> = {
  websites: {
    introHeading: "Websites and portals built as growth assets",
    paragraphs: [
      "A website is often the first real conversation a buyer has with a business. Our websites and portals work covers corporate sites, property portals and lead-focused builds where structure, speed and clarity matter more than decoration. Projects like the GainRealEstate property portal and the ZENTRYO industrial components website were planned around how visitors actually search, compare and enquire.",
      "We start with the buying journey, then design the page structure, navigation and conversion paths around it. That means fast-loading pages, mobile-first layouts, clear service or product hierarchy, SEO-ready headings and metadata, and enquiry forms placed where intent is highest. Where a project needs listings, filtering or a content workflow, the build includes a practical CMS instead of a static brochure.",
      "Every website is handed over with documentation, analytics wired in and a clear path for future updates. The goal is not just a good launch day - it is a site that stays fast, easy to maintain and useful to the sales team long after go-live.",
    ],
    deliverables: [
      "Custom corporate and business websites",
      "Property, listing and directory portals",
      "High-converting landing pages",
      "CMS and content-managed builds",
      "Website redesigns and platform migrations",
      "Core Web Vitals and on-page SEO foundations",
    ],
    serviceHref: "/services/web-development",
    serviceLabel: "Explore Web Development",
  },

  ecommerce: {
    introHeading: "eCommerce and D2C stores engineered to sell",
    paragraphs: [
      "An online store has to do more than look good. Our eCommerce and D2C work covers home decor, skincare and health supplement stores where discovery, product confidence and a friction-free checkout decide whether a visitor buys. We plan the catalogue, product pages, offers and post-purchase flow as one selling system rather than a collection of plugins.",
      "Product pages are structured around the questions a buyer needs answered: what it is, who it is for, what it costs, how delivery works and why they should trust the brand. We combine clear photography, benefit-led copy, reviews, schema markup and internal linking with a checkout that removes unnecessary steps. On the technical side, speed, mobile usability, secure payments, shipping rules and inventory sync are tested before launch.",
      "For growing D2C brands, the store is also connected to search, paid media and retention. That means consistent product feeds, clean tracking, campaign-ready landing pages and an analytics setup that shows which products and channels actually drive revenue - not just traffic.",
    ],
    deliverables: [
      "Shopify and WooCommerce storefronts",
      "Product catalogue and PDP optimisation",
      "Checkout and payment integration",
      "Shipping, tax and inventory setup",
      "Marketplace and Amazon store support",
      "Conversion tracking and retention flows",
    ],
    serviceHref: "/services/ecommerce",
    serviceLabel: "Explore eCommerce Solutions",
  },

  "software-saas": {
    introHeading: "Software and SaaS built around real workflows",
    paragraphs: [
      "Off-the-shelf tools stop fitting once a business grows. Our software and SaaS projects include an inventory and billing ERP, an EdTech LMS and assessment platform, and a hospital patient management system - each designed around the way the team actually works, not around a generic template.",
      "We begin with workflow mapping: who uses the system, what data moves where, which approvals and reports matter, and where manual work is slowing people down. From there we define roles and permissions, build the core screens first, and connect the system to existing tools such as payments, communication, accounting or BI. Security, audit trails, backups and clean data migration are treated as part of the build rather than an afterthought.",
      "Delivery runs in working sprints, so you can test real screens early and refine requirements before the scope hardens. After launch, the same team can handle documentation, training, maintenance and new modules as the business changes - keeping the platform maintainable instead of turning it into a black box.",
    ],
    deliverables: [
      "Custom software and internal tools",
      "SaaS platforms and subscription systems",
      "ERP, CRM and billing systems",
      "LMS, booking and management portals",
      "API integrations and data migration",
      "Role-based dashboards and reporting",
    ],
    serviceHref: "/services/software-ai",
    serviceLabel: "Explore Software & AI",
  },

  "ai-automation": {
    introHeading: "AI and automation that removes real work",
    paragraphs: [
      "AI is only useful when it solves a specific operational problem. Our AI and automation portfolio includes a generative AI brand content engine and an AI search and FAQ assistant - both built to reduce repetitive work while keeping a human in control of the output.",
      "For content workflows, we connect brand guidelines, approved source material and review steps so teams can produce first drafts faster without publishing unchecked claims. For customer-facing assistants, we ground answers in the business's own documents and data, define clear escalation paths, and test the system against real questions before it goes live. Where a task should stay manual, it stays manual.",
      "The same discipline applies to automation: map the process, remove the bottleneck, connect the tools already in use, and measure the time saved. We do not add AI for novelty. We add it where it improves response speed, accuracy or capacity in a way the team can audit and maintain.",
      "This work suits teams drowning in repetitive tasks, support inboxes that never empty, or content operations that cannot keep pace with demand. We start with a small, measurable pilot, prove the value on one workflow, and only then expand into other departments. That keeps adoption realistic and gives your team confidence in the system before it becomes part of daily operations.",
    ],
    deliverables: [
      "AI chatbots and FAQ assistants",
      "RAG systems over business documents",
      "Generative content and research workflows",
      "Workflow and back-office automation",
      "AI integrations with existing tools",
      "Guardrails, review flows and evaluations",
    ],
    serviceHref: "/services/software-ai",
    serviceLabel: "Explore Software & AI",
  },

  "mobile-apps": {
    introHeading: "Mobile apps designed for repeat use",
    paragraphs: [
      "A mobile app has to earn its place on someone's home screen. Our mobile app work includes the Food Delivery and Ordering App, built around fast browsing, clear product choices, a short order flow and reliable updates - the parts that decide whether a user comes back.",
      "We design the core journey first: onboarding, discovery, the primary action and the return path. Native and cross-platform builds are chosen based on budget, performance needs and how the app will evolve. Push notifications, account and payment flows, order or booking status, offline behaviour and analytics are planned early so the app works as a product rather than a wrapped website.",
      "Before launch we test on real devices and realistic network conditions, prepare store listings and define what will be measured after release. Post-launch, the app can be maintained and improved in iterations, with crash monitoring, feedback loops and a roadmap tied to retention instead of one-off downloads.",
      "Apps like these make sense when customers order, book, track or pay repeatedly and a mobile web flow keeps losing them. We look at the repeat journey first, then decide what belongs in the app versus what should stay on the web, so the product solves a real habit instead of duplicating the website in a smaller frame.",
    ],
    deliverables: [
      "Native and cross-platform apps",
      "Flutter and React Native development",
      "UX flows, prototyping and UI design",
      "Payments, accounts and notifications",
      "Backend APIs and admin dashboards",
      "App Store / Play Store launch support",
    ],
    serviceHref: "/services/mobile-app-development",
    serviceLabel: "Explore Mobile App Development",
  },

  seo: {
    introHeading: "SEO work measured by visibility and pipeline",
    paragraphs: [
      "SEO is not a single ranking report. Our SEO portfolio includes a multi-city local expansion, enterprise SEO for an education group and eCommerce SEO for product visibility - three very different problems that needed the same discipline: fix the technical foundation, understand real search intent, and build content that deserves to rank.",
      "For local growth, we work on location pages, business listings, citations and service-level relevance so the brand appears where nearby buyers are searching. For larger sites, the work shifts to crawl efficiency, internal linking, template quality and scaling useful pages without creating thin duplicates. For eCommerce, category and product templates, schema, imagery and on-page copy are aligned with how shoppers search.",
      "Measurement is tied to qualified organic traffic, enquiries and revenue rather than impressions alone. That means clean tracking, baseline reporting, prioritised fixes and a content roadmap that can be reviewed against actual search demand. The aim is compounding visibility that the business can understand and keep building on.",
      "These engagements fit businesses with a technically sound site that has stopped growing, multi-location brands competing in several cities, or stores whose category pages never surface in search. We review the existing data before recommending anything, so the plan targets the pages and queries that can realistically move within a quarter rather than promising blanket rankings.",
    ],
    deliverables: [
      "Technical SEO audits and fixes",
      "Keyword and search-intent research",
      "Local and multi-city SEO",
      "Enterprise and eCommerce SEO",
      "AI-search and generative SEO readiness",
      "Content planning and on-page optimisation",
    ],
    serviceHref: "/services/seo",
    serviceLabel: "Explore SEO Services",
  },

  "paid-media": {
    introHeading: "Paid media planned around cost per outcome",
    paragraphs: [
      "Paid media works when the offer, creative, landing page and tracking agree with each other. Our paid media and social portfolio includes a Meta Ads launch for a D2C product, YouTube and performance campaigns, and LinkedIn outreach for B2B - each planned around a specific conversion rather than reach for its own sake.",
      "Before increasing budgets, we check the foundation: conversion tracking, audience overlap, campaign structure, creative quality and the landing page the click lands on. From there we test audiences, angles and formats in a controlled way, cut what is not efficient and scale what proves profitable. Creative is treated as a performance variable, not a one-time design task.",
      "Reporting connects spend to leads, purchases or pipeline, with the reasoning behind changes made visible. Search, social, video and retargeting can then work as one acquisition system, with budgets moving toward the channels and messages that are actually producing a return.",
      "This work is a fit for brands launching a product, entering a new city, or already spending on ads without a clear picture of what each channel returns. We keep the account structure understandable, document every meaningful change, and make sure the numbers in the report match the numbers in your bank account.",
    ],
    deliverables: [
      "Google Ads, Meta Ads and LinkedIn Ads",
      "YouTube and video campaign management",
      "Creative strategy and ad production",
      "Landing page and offer alignment",
      "Conversion tracking and attribution setup",
      "Retargeting and audience testing",
    ],
    serviceHref: "/services/ads-ppc",
    serviceLabel: "Explore Ads / PPC",
  },

  "content-design": {
    introHeading: "Content and design that earns attention",
    paragraphs: [
      "Content and design only create value when they move someone toward a decision. Our content and design portfolio includes an SEO content programme for a blog, ad creatives with landing pages, and eCommerce packaging and brand design - work that had to look right, read clearly and support a measurable next step.",
      "For content programmes, we map topics to search demand and the buying journey, then produce articles, landing pages and campaign assets on a dependable cadence. For design, we build a consistent visual language across ads, social, packaging and web so the brand is recognisable wherever it appears. Copy and layout are reviewed together, because a beautiful page with an unclear offer still fails.",
      "Every asset is built for its actual context: a feed, a search result, a product page or a packaging shelf. That means testing readability at real sizes, keeping claims accurate, and giving each piece a clear call to action. The result is a library that can be reused and extended instead of one-off artwork that never compounds.",
    ],
    deliverables: [
      "SEO content and editorial programmes",
      "Landing page and website copy",
      "Ad creatives and campaign assets",
      "Brand identity and packaging design",
      "Social media creative systems",
      "Content refresh and consolidation",
    ],
    serviceHref: "/services/content",
    serviceLabel: "Explore Content Services",
  },

  "cloud-devops": {
    introHeading: "Cloud, hosting and DevOps that stay reliable",
    paragraphs: [
      "Infrastructure should be invisible until something goes wrong. Our cloud, hosting and DevOps work includes managed hosting and server security for live business sites - the layer that keeps pages available, data protected and releases predictable as traffic grows.",
      "We review the current setup before changing anything: server resources, DNS, SSL, backups, access control, deployment process and monitoring. From there we right-size the hosting, harden the server, automate deployments and add the alerts needed to catch problems early. Migrations are planned with staging and rollback so a move does not become an outage.",
      "On the DevOps side, the focus is repeatability: version-controlled configuration, CI/CD where it makes sense, containerisation when it solves a real scaling or consistency problem, and documentation so the team is not dependent on one person. Cost, uptime and security are reviewed together, because an environment that is cheap but fragile is not cheap for long.",
      "Typical engagements start when a site slows down during campaigns, a server is running unsupported software, or nobody can say for certain whether the backups actually restore. We begin with a documented audit and a prioritised remediation list, then handle the fixes in a planned sequence so the business keeps running throughout.",
    ],
    deliverables: [
      "Managed hosting and server security",
      "Cloud architecture and right-sizing",
      "Website and application migrations",
      "CI/CD and deployment automation",
      "Monitoring, backups and disaster recovery",
      "Docker, Kubernetes and DevOps support",
    ],
    serviceHref: "/services/cloud-devops",
    serviceLabel: "Explore Cloud & DevOps",
  },

  "support-reputation": {
    introHeading: "Maintenance and reputation that protect momentum",
    paragraphs: [
      "A launch is a starting point, not a finish line. Our maintenance and reputation work includes an ongoing website maintenance plan and an app and software support retainer, plus the review and listing work that shapes how a business is perceived before a customer ever makes contact.",
      "On the technical side, we monitor uptime, apply updates, patch security issues, manage backups and fix problems before they become outages. Performance, broken links and form failures are checked regularly, so small issues do not quietly cost enquiries. Support is handled with clear priorities and response expectations rather than an open-ended promise.",
      "On the reputation side, reviews, search results, social mentions and business listings are monitored and improved consistently. Legitimate review generation, thoughtful responses and accurate listings support local visibility and trust. Together, maintenance and reputation protect the asset the business has already paid to build - keeping it fast, secure and credible.",
      "These retainers suit businesses without in-house technical staff, teams whose developer has moved on, or brands whose online reviews no longer reflect the quality of their actual service. Support is scoped with clear response times and a named contact, so issues have an owner instead of disappearing into a ticket queue.",
    ],
    deliverables: [
      "Website maintenance and support plans",
      "Security patching and backups",
      "Uptime and performance monitoring",
      "Bug fixes and small improvements",
      "Review monitoring and response support",
      "Local listings and reputation clean-up",
    ],
    serviceHref: "/services/maintenance-support",
    serviceLabel: "Explore Maintenance & Support",
  },
};
