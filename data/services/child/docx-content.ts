// =============================================================================
//  FILE: data/services/child/docx-content.ts
//  WHAT'S IN THIS FILE:
//    CATEGORY-level copy transcribed from the EDDITNET .docx sources
//    (/services/<category> parent pages) + shared content types.
//
//    CHILD page content ISKO SE ALAG hai — ek page = ek file:
//        data/services/child/<category>/<child-slug>.ts
//    (barrel: data/services/child/pages.ts)
// =============================================================================

export interface DocxSection {
  title: string;
  description: string;
}

export interface DocxFaq {
  q: string;
  a: string;
}

export interface DocxProcessStep {
  num: string;
  title: string;
  description: string;
}

export interface DocxPageContent {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  about: string;
  aboutHeading?: string;
  features: DocxSection[];
  featuresHeading?: string;
  featuresDescription?: string;
  benefits: DocxSection[];
  benefitsHeading?: string;
  benefitsDescription?: string;
  whyChooseUs: { heading?: string; description?: string; points: string[] };
  process: { heading?: string; description?: string; steps: DocxProcessStep[] };
  faqs: DocxFaq[];
  faqsHeading?: string;
  /**
   * When true the document is the ONLY source for this page: a section the
   * document left empty renders nothing, rather than silently keeping the old
   * site copy. Set on the pages transcribed from "EDDITNET CONTENT (5).docx".
   * The hand-written entries (SEO, design-creative, web-development) leave it
   * unset so they keep the original fall-back behaviour.
   */
  docOnly?: boolean;
}

export interface DocxCategoryContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  about: string;
  servicesTypes: { title: string; description: string }[];
  benefits: DocxSection[];
  whyChooseUs: { heading: string; points: string[] };
  process: { heading: string; steps: DocxProcessStep[] };
}

export const docxSeoCategory: DocxCategoryContent = {
  title: "SEO & AI SEO",
  metaTitle: "SEO Company in India | Eddinet",
  metaDescription:
    "Welcome to Eddinet, your strategic growth engine for search engine dominance, high-intent lead generation and sustained revenue acquisition. As a premier SEO agency in India, we combine technical precision with AI discovery. Get a free SEO audit.",
  heroHeading: "SEO Company in India",
  heroSubheading:
    "Transform Your Organic Search Into a High-Yield Revenue Channel. Welcome to Eddinet, your strategic growth engine for search engine dominance, high-intent lead generation, and sustained revenue acquisition. As a premier SEO Agency In India, we combine technical algorithmic precision with next-generation AI discovery to place your business directly in front of buyers at the exact moment they are ready to convert. From dominating traditional Google SERPs to securing featured recommendations across AI-synthesized answer engines, our custom SEO strategies guarantee scalable market penetration and long-term brand equity for businesses across all verticals.",
  about:
    "At Eddinet, we believe that traditional SEO metrics like impressions and vanity search rankings mean nothing if they don't impact your bottom line. We are a results-obsessed digital growth agency built for modern search dynamics.\n\nRecognized as a Best AI SEO company in Delhi, we bridge the gap between traditional search optimization and modern artificial intelligence. While conventional agencies rely on outdated keyword-stuffing tactics, our team of technical strategists, data engineers, and content architects build search dominance using real-time semantic entity mapping, structured knowledge graphs, and brand authority frameworks.\n\nWhether you are targeting local customers or scaling an enterprise platform globally, Eddinet ensures your brand is recommended by both search algorithms and generative AI tools like ChatGPT, Gemini, and Perplexity.",
  servicesTypes: [
    {
      title: "Core Organic SEO & Keyword Dominance",
      description:
        "Data-backed keyword clustering, search intent analysis, and page-level optimization to capture high-value search demand across every stage of your buying funnel.",
    },
    {
      title: "AI SEO (Generative Search Optimization)",
      description:
        "We integrate smart AI search optimization services to keep your brand recommended across traditional SERPs and AI answer portals — engineered SEO for AI search results alongside our strategies as a Generative SEO agency India.",
    },
    {
      title: "Lead Generation SEO Services",
      description:
        "Attract pre-qualified prospects. We optimize user flows, transactional landing pages, and middle-of-funnel content to transform passive organic visitors into qualified inbound leads and phone calls.",
    },
    {
      title: "Local SEO Expert Delhi NCR Solutions",
      description:
        "Dominate hyper-local searches. We optimize your Google Business Profile, manage local citation consistency, and build geo-targeted landing pages to drive foot traffic, local calls, and regional dominance.",
    },
    {
      title: "Enterprise SEO Services for Large Businesses",
      description:
        "Scalable solutions for enterprise platforms. We manage complex internal link structures, crawl budget distribution, sub-domain setups, and multi-folder architectures for sites with tens of thousands of URLs.",
    },
    {
      title: "B2B SEO Agency India Offerings",
      description:
        "Long-tail optimization strategies tailored for complex B2B decision cycles. Target key stakeholders, procurement officers, and executives with high-intent technical content and whitepaper positioning.",
    },
    {
      title: "Technical SEO Consultant Delhi Expertise",
      description:
        "Solidify your website's core architecture. Our technical audits resolve JavaScript rendering bottlenecks, optimize Core Web Vitals, fix indexing errors, and build rock-solid JSON-LD Schema structures.",
    },
    {
      title: "High-Authority Link Building & Digital PR",
      description:
        "Build unshakeable domain authority with contextually relevant, editorial backlinks and digital PR outreach on top-tier media publications.",
    },
    {
      title: "International SEO & Cross-Border Scaling",
      description:
        "Expand your brand globally with multi-region Hreflang implementation, international geotargeting, and region-specific SERP strategies.",
    },
    {
      title: "Programmatic SEO for Websites",
      description:
        "Scale your organic footprint exponentially. We deploy automated, high-quality programmatic landing page architectures targeting thousands of transactional long-tail keywords effortlessly.",
    },
    {
      title: "Amazon SEO & E-Commerce Marketplace Ranking",
      description:
        "Optimize Amazon product listings with high-volume buyer keywords, A10 algorithm optimization, backend search terms, and structured bullet copy to drive marketplace sales.",
    },
    {
      title: "eCommerce SEO Company for Shopify & Beyond",
      description:
        "Turn online shoppers into loyal buyers. We optimize product page Schema, clean up faceted navigation issues, and structure category pages for Shopify, WooCommerce, and custom enterprise storefronts.",
    },
  ],
  benefits: [
    {
      title: "Compounding Long-Term ROI",
      description:
        "Build permanent digital real estate that generates pre-qualified leads continuously without paying per click.",
    },
    {
      title: "Dual Search Visibility",
      description:
        "Rank simultaneously on Google's traditional blue links and inside modern generative AI search answers.",
    },
    {
      title: "Lower Customer Acquisition Costs (CAC)",
      description:
        "Reduce your dependency on paid ad networks by building an inbound channel that converts at a higher rate.",
    },
    {
      title: "Superior User Experience & Speed",
      description:
        "Enjoy faster page load times, lower bounce rates, and seamless mobile responsiveness across all devices.",
    },
    {
      title: "Transparent Metrics That Matter",
      description:
        "Gain full visibility into keyword positions, organic traffic increases, and direct conversion performance with live custom dashboards.",
    },
  ],
  whyChooseUs: {
    heading: "The Eddinet Advantage: Why Top Brands Partner With Us",
    points: [
      "Generative Engine Optimization (GEO) Pioneers: While other agencies treat AI as an afterthought, we build future-proof campaigns optimized for Google SGE, Gemini, and ChatGPT citations from day one.",
      "Revenue-Driven Accountability: We align our success metrics with your business outcomes — measuring qualified leads, inbound phone inquiries, and converted revenue instead of superficial traffic spikes.",
      "Unmatched Technical Mastery: Our in-house engineering team routinely resolves enterprise-level JavaScript issues, complex CMS migrations, and server performance bottlenecks without traffic drop-offs.",
      "No Template Solutions: Every strategy is custom-crafted from scratch, based on rigorous competitor analysis, industry dynamics, and your unique growth targets.",
      "100% Transparency & Direct Access: You get dedicated account management, clear weekly/monthly reporting dashboards, and zero black-box secrets.",
    ],
  },
  process: {
    heading: "Our Proven 5-Step Methodology for Scalable Organic Growth",
    steps: [
      {
        num: "01",
        title: "In-Depth Technical & Competitive Audit",
        description:
          "We perform a 100+ point inspection of your site's technical health, indexation, backlink profile, and competitor gaps.",
      },
      {
        num: "02",
        title: "Intent & Entity Mapping",
        description:
          "We identify high-converting primary keywords, secondary search entities, and AI prompt triggers relevant to your target audience.",
      },
      {
        num: "03",
        title: "On-Page & Schema Infrastructure Execution",
        description:
          "We optimize page structures, speed performance, content depth, internal links, and Schema markup.",
      },
      {
        num: "04",
        title: "Authority Acquisition & Digital PR",
        description:
          "We secure editorial mentions and high-authority backlinks from legitimate industry publications.",
      },
      {
        num: "05",
        title: "Continuous Optimization & Revenue Tracking",
        description:
          "We continuously monitor ranking shifts, AI answer citations, organic conversions, and pipeline growth, continuously refining tactics for maximum return.",
      },
    ],
  },
};

export const docxDesignCreativeCategory: DocxCategoryContent = {
  title: "Design & Creative",
  metaTitle: "Graphic Designing & SEO Company in India | Eddinet",
  metaDescription:
    "Sharp graphic designing that makes people stop scrolling and SEO that makes sure they find you first. Design & creative services from Eddinet — logo, brand identity, social creatives, banners, brochures, catalogues and more.",
  heroHeading: "Design That Speaks. Rankings That Deliver.",
  heroSubheading:
    "If your website looks average and gets lost on page two of Google, you're leaving money on the table every single day. At Eddinet, we sit at the meeting point of two things every growing brand needs: sharp graphic designing that makes people stop scrolling, and an SEO company in India approach that makes sure they actually find you in the first place.",
  about:
    "Eddinet is a Delhi-based digital growth partner built by people who got tired of agencies overpromising and underdelivering. We're not the biggest name in the industry, and we're fine with that because our clients don't hire us to be famous; they hire us to grow.\n\nOur team is a mix of designers who've spent years inside brand studios, SEO specialists who've handled everything from local shop websites to enterprise-level portals, and strategists who actually read the analytics dashboard instead of just screenshotting it for a monthly report. What ties us together is a simple belief: a business's online presence should look as good as its actual product, and it should be easy for the right customer to find.\n\nWe work with startups, D2C brands, clinics, real estate developers, educational institutes, and established companies across India who want their digital presence to finally match their ambition.",
  servicesTypes: [
    {
      title: "Logo & Brand Identity",
      description:
        "A logo, color palette, and visual language that people remember and recognize instantly.",
    },
    {
      title: "Social Media Creatives",
      description:
        "Posts, carousels, and story designs built to stop the scroll and hold attention.",
    },
    {
      title: "Ad Creatives",
      description:
        "High-converting visuals for Google, Meta, and LinkedIn campaigns that are designed around clicks and conversions, not just aesthetics.",
    },
    {
      title: "Brochures, Flyers & Print Design",
      description:
        "Professional print materials that represent your brand the way it deserves to be represented.",
    },
    {
      title: "Packaging Design",
      description:
        "Designs that make your product stand out the moment someone sees it on a shelf or a screen.",
    },
    {
      title: "Website & UI Graphics",
      description:
        "Banners, icons, and layout visuals that make your website feel polished and premium.",
    },
  ],
  benefits: [
    {
      title: "Faster Visibility",
      description:
        "Search rankings and thoughtful design work together to get you seen sooner and remembered longer.",
    },
    {
      title: "Stronger Brand Recall",
      description:
        "Consistent, well-crafted visuals mean customers recognize you across platforms, not just on your homepage.",
    },
    {
      title: "Better Conversion Rates",
      description:
        "Design built with intent turns visitors into leads, not just page views.",
    },
    {
      title: "Sustainable Growth",
      description:
        "Our SEO methods are built to last, not to get your site flagged or penalized down the line.",
    },
    {
      title: "Clear Reporting",
      description:
        "You'll always know what's being worked on, why, and what results it's bringing in.",
    },
    {
      title: "One Team, Two Strengths",
      description:
        "Instead of juggling a design agency and an SEO agency separately, you get both working in sync under one roof.",
    },
  ],
  whyChooseUs: {
    heading: "Why Choose Us for Design & Creative",
    points: [
      "In-House, Never Outsourced: We don't outsource your work to random freelancers. Every project is handled by our in-house team, so quality stays consistent.",
      "Decisions, Explained: We explain our decisions. If we recommend a keyword strategy or a design direction, we'll tell you why — no vague jargon.",
      "Realistic, Honest Pacing: We move at a realistic pace. Good SEO and good design both take real work; we won't promise page-one rankings in a week, but we will show you steady, honest progress.",
      "Involved Beyond Launch: We stay involved after launch. Our work doesn't end when a design is delivered or a campaign goes live — we track, adjust, and keep improving.",
      "Cross-Industry Experience: We've done this across industries. From healthcare to real estate to e-commerce, we've learned what works and what doesn't, so you're not paying for our learning curve.",
    ],
  },
  process: {
    heading: "Our Graphic Designing Process",
    steps: [
      {
        num: "01",
        title: "Discovery Call",
        description:
          "We start by understanding your business, your audience, and what success actually looks like for you, not just generic KPIs.",
      },
      {
        num: "02",
        title: "Research & Audit",
        description:
          "For SEO, that means auditing your current site and competitors. For design, that means understanding your brand, industry, and the visual language your audience responds to.",
      },
      {
        num: "03",
        title: "Strategy & Planning",
        description:
          "We map out a clear plan — keywords to target, content to build, or design concepts to explore — before a single asset is created.",
      },
      {
        num: "04",
        title: "Execution",
        description:
          "Our designers and SEO specialists get to work, building assets and optimizations that are grounded in the strategy, not just guesswork.",
      },
      {
        num: "05",
        title: "Review & Refinement",
        description:
          "We share drafts and progress reports along the way, and we genuinely welcome your feedback before anything goes live.",
      },
      {
        num: "06",
        title: "Launch & Ongoing Optimization",
        description:
          "Designs go live, campaigns go out, rankings get tracked — and we keep refining based on real performance, not assumptions.",
      },
    ],
  },
};

export const docxWebDevelopmentCategory: DocxCategoryContent = {
  title: "Web Development",
  metaTitle: "Development Services in Delhi - Eddinet",
  metaDescription:
    "Looking for reliable development services in Delhi? Eddinet builds websites, web apps, and custom software on time, tested properly, and built to keep working long after you've paid the invoice.",
  heroHeading: "Development Services in Delhi",
  heroSubheading:
    "Looking for development services in Delhi? You've probably noticed the same pattern — big promises, missed deadlines, and websites that still have bugs at launch. Eddinet builds things differently: on time, tested properly, and built to keep working long after you've paid the invoice.\n\nWe're a Delhi-based team building websites, web apps, and custom software for businesses that want results, not excuses.",
  about:
    "Eddinet started with a simple frustration — watching clients get burned by agencies that oversold and underdelivered. So we built something different: a team where the person coding your project is someone you can actually talk to.\n\nToday, we're one of the more trusted names offering development services in Delhi, and we still work by the same rule — fewer clients, better work. We take on projects we know we can genuinely deliver on, not everything that walks through the door.",
  servicesTypes: [
    {
      title: "Website Development",
      description:
        "Fast, clean, SEO-friendly sites that look sharp on every device.",
    },
    {
      title: "Web Application Development",
      description:
        "Custom dashboards, booking systems, and portals built with React, Next.js, and Node.js.",
    },
    {
      title: "E-Commerce Development",
      description:
        "Shopify, WooCommerce, or fully custom stores, from product setup to payment integration.",
    },
    {
      title: "WordPress Development",
      description:
        "Clean, custom builds without the plugin clutter.",
    },
    {
      title: "Custom Software Development",
      description:
        "Internal tools and automation built around how your business actually runs.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing updates, security, and fixes so your site stays fast and stable.",
    },
  ],
  benefits: [
    {
      title: "One team, not a freelancer chain",
      description:
        "Design, dev, testing, and support under one roof.",
    },
    {
      title: "Realistic timelines",
      description:
        "We commit to what we can actually deliver.",
    },
    {
      title: "Full code ownership",
      description:
        "No lock-in, no black boxes.",
    },
    {
      title: "SEO-conscious builds",
      description:
        "Clean code and fast load times from day one.",
    },
    {
      title: "Local availability, global standards",
      description:
        "Easy to reach, built to a high bar.",
    },
  ],
  whyChooseUs: {
    heading: "Why Choose Us for Development Services in Delhi",
    points: [
      "Work We Actually Deliver: We say no to work we can't do well, so every project we take on is handled properly.",
      "Plain-Language Communication: We communicate in plain language — clear updates, no jargon, no surprises.",
      "Built for the Long Term: We build for the long term with clean, well-documented code that's easy to maintain or hand off.",
      "Support That Continues: We stick around after launch, offering ongoing support, fixes, updates, and future features.",
    ],
  },
  process: {
    heading: "How We Deliver Development Services in Delhi",
    steps: [
      {
        num: "01",
        title: "Discovery & Consultation",
        description:
          "We understand your business goals before we plan anything.",
      },
      {
        num: "02",
        title: "Planning & Strategy",
        description:
          "Right tech stack, clear timeline, no surprises later.",
      },
      {
        num: "03",
        title: "Design & Development",
        description:
          "Built in visible stages, not one big reveal at the end.",
      },
      {
        num: "04",
        title: "Testing & QA",
        description:
          "Checked across devices and edge cases before anything goes live.",
      },
      {
        num: "05",
        title: "Launch",
        description:
          "Careful deployment with a rollback plan just in case.",
      },
      {
        num: "06",
        title: "Ongoing Support",
        description:
          "We stay involved after launch — fixes, updates, and future features.",
      },
    ],
  },
};

// ============================================================================
//  CATEGORY PAGES  (/services/<category>)
// ============================================================================

export const docxMobileAppDevelopmentCategory: DocxCategoryContent = {
  title: "Mobile App Development",
  metaTitle: "Mobile App Development Services in India | Eddinet",
  metaDescription:
    "We build complete mobile ecosystems, not just standalone applications. As a " +
    "Full-Stack App Development Agency, Eddinet handles every single layer of your",
  heroHeading: "Mobile App Development Company in India",
  heroSubheading:
    "At Eddinet, we transform ideas into high-performing, scalable mobile " +
    "applications that drive real business growth. As a leading mobile app " +
    "development company in India, we engineer intuitive, high-speed iOS and Android " +
    "applications tailored to your business needs ensuring smooth performance, " +
    "bulletproof security, and engaging user experiences from day one.",
  about: "We build complete mobile ecosystems, not just standalone applications. As a Full-Stack App Development Agency, Eddinet handles every single layer of your software infrastructure from high-converting mobile interfaces to cloud backend architectures and custom API networks.\n\nBy managing your entire technical stack in-house, we remove cross-vendor friction, accelerate your time-to-market, and deliver mobile apps engineered for speed, security, and long-term scale.",
  servicesTypes: [
    {
      title: "Android App Development",
      description:
        "We build feature-rich, native Android applications optimized for high " +
        "performance, smooth usability, and seamless integration across all Android " +
        "devices and Google Play Store standards.",
    },
    {
      title: "iOS App Development",
      description:
        "We engineer secure, high-converting native iOS apps crafted specifically for " +
        "Apple's ecosystem, delivering elite UI/UX, fast load times, and full " +
        "compliance with App Store guidelines.",
    },
    {
      title: "Flutter App Development",
      description:
        "We leverage Flutter to deliver fast, native-like cross-platform applications " +
        "from a single codebase, drastically reducing your development timelines and " +
        "deployment costs.",
    },
    {
      title: "React Native App Development",
      description:
        "We build robust React Native apps that offer true cross-platform " +
        "performance, giving your brand a native look and feel on both iOS and " +
        "Android simultaneously.",
    },
    {
      title: "Cross-Platform App Development",
      description:
        "We create scalable multi-platform applications engineered to perform " +
        "consistently across all mobile operating systems without compromising speed " +
        "or visual appeal.",
    },
    {
      title: "App UI/UX Design",
      description:
        "We design clean, user-centered interfaces and intuitive navigation flows " +
        "that keep users engaged, minimize bounce rates, and maximize in-app " +
        "conversions.",
    },
    {
      title: "App Backend Development",
      description:
        "We build secure, high-capacity server architectures and database " +
        "infrastructures designed to process heavy traffic loads and complex data " +
        "streams effortlessly.",
    },
    {
      title: "API & Third-Party Integration",
      description:
        "We integrate essential third-party APIs including payment gateways, CRMs, " +
        "ERPs, live tracking, and cloud services directly into your mobile " +
        "application.",
    },
  ],
  benefits: [],
  whyChooseUs: {
    heading: "Why Choose Eddinet for Mobile App Development",
    points: [
        "Custom-Built App Solutions: We build tailored mobile applications engineered " +
        "around your exact operational workflows never rigid, pre-made app templates.",
        "Experienced Development Team: Our senior developers and UI/UX designers " +
        "possess deep technical expertise across native and cross-platform " +
        "frameworks.",
        "Scalable & Secure Applications: We prioritize clean code standards, robust " +
        "cloud hosting, and multi-layer encryption to ensure your app scales safely " +
        "as traffic grows.",
        "User-Centered UI/UX: Every interface design decision is guided by real " +
        "consumer behavior insights, making app navigation effortless for your end " +
        "users.",
        "Full-Stack Development Expertise: From server configuration and database " +
        "management to frontend design and store deployment, we handle every layer " +
        "in-house.",
        "Business-Focused Approach: We focus on metrics that matter building features " +
        "that drive user retention, active engagements, and measurable revenue.",
        "Transparent Communication: We maintain clear project visibility with regular " +
        "progress demos, milestone updates, and open communication channels " +
        "throughout.",
        "Ongoing Support & Improvement: Our commitment extends beyond launch-we " +
        "continuously monitor, update, and refine your application to keep it " +
        "performing at its peak.",
    ],
  },
  process: {
    heading: "Our Mobile App Development Process",
    steps: [
      {
        num: "01",
        title: "Understanding Your Business",
        description:
          "We analyze your market position, target audience, and primary commercial " +
          "goals to align project parameters with measurable outcomes.",
      },
      {
        num: "02",
        title: "App Strategy & Planning",
        description:
          "We map out user flows, feature lists, technology stacks, and milestone " +
          "roadmaps to guarantee smooth execution throughout development.",
      },
      {
        num: "03",
        title: "UI/UX Design",
        description:
          "Our designers create interactive wireframes and visual prototypes, " +
          "ensuring every screen is intuitive and aligned with your brand identity.",
      },
      {
        num: "04",
        title: "Frontend & Backend Development",
        description:
          "Our developers write clean, efficient code to construct both the " +
          "user-facing interface and the supporting cloud infrastructure.",
      },
      {
        num: "05",
        title: "API & System Integration",
        description:
          "We link required third-party services, payment channels, and database " +
          "management systems into a cohesive application ecosystem.",
      },
      {
        num: "06",
        title: "Testing & Quality Assurance",
        description:
          "We execute comprehensive performance, usability, regression, and security " +
          "testing across multiple devices and operating systems.",
      },
      {
        num: "07",
        title: "App Deployment",
        description:
          "We manage the full submission, optimization, and approval process on both " +
          "the Apple App Store and Google Play Store.",
      },
      {
        num: "08",
        title: "Maintenance & Support",
        description:
          "We provide ongoing SLA-backed maintenance, bug fixes, performance " +
          "monitoring, and OS compatibility updates post-launch.",
      },
    ],
  },
};

export const docxCategoryPages: Record<string, DocxCategoryContent> = {
  seo: docxSeoCategory,
  "design-creative": docxDesignCreativeCategory,
  "web-development": docxWebDevelopmentCategory,
  "mobile-app-development": docxMobileAppDevelopmentCategory,
};
