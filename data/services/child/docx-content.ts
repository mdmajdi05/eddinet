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
  /** The document carries no meta copy — pages fall back to the site default. */
  metaTitle?: string;
  metaDescription?: string;
  /** Badge chip rendered ABOVE the <h1> (doc line "Hero eyebrow badge:-"). */
  heroEyebrow?: string;
  heroHeading: string;
  /** Paragraph rendered BELOW the <h1> (doc's hero paragraph). */
  heroSubheading: string;
  about: string;
  /** Headings the document used for the about / services sections. */
  aboutHeading?: string;
  featuresHeading?: string;
  /** Intro line the document wrote under the services heading. */
  featuresDescription?: string;
  servicesTypes?: DocxSection[];
  /** Grouped service summaries the document wrote for the category hero grid. */
  serviceGroups?: { heading: string; items: DocxSection[] };
  benefits: DocxSection[];
  whyChooseUs: { heading: string; points: string[] };
  process: { heading: string; description?: string; steps: DocxProcessStep[] };
  /** FAQ copy written for this category page in the document. */
  faqs?: DocxFaq[];
  /** "…for Multi-Industry Needs" block written in the document. */
  industries?: { heading: string; items: DocxSection[] };
  /** Closing CTA written in the document. */
  cta?: { heading: string; sub?: string; description?: string };
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
  heroEyebrow: "Android App Development | iOS App Development | Flutter App Development",
  heroHeading: "Mobile App Development Company in India",
  heroSubheading: "At Eddinet, we transform ideas into high-performing, scalable mobile applications that drive real business growth. As a leading mobile app development company in India, we engineer intuitive, high-speed iOS and Android applications tailored to your business needs ensuring smooth performance, bulletproof security, and engaging user experiences from day one.",
  aboutHeading: "About Eddinet’s Full-Stack App Development Agency",
  about: "We build complete mobile ecosystems, not just standalone applications. As a Full-Stack App Development Agency, Eddinet handles every single layer of your software infrastructure from high-converting mobile interfaces to cloud backend architectures and custom API networks.\n\nBy managing your entire technical stack in-house, we remove cross-vendor friction, accelerate your time-to-market, and deliver mobile apps engineered for speed, security, and long-term scale.",
  serviceGroups: {
    heading: "Our Custom Mobile App Development Services",
    items: [
      {
        title: "Android App Development",
        description: "We build feature-rich, native Android applications optimized for high performance, smooth usability, and seamless integration across all Android devices and Google Play Store standards.",
      },
      {
        title: "iOS App Development",
        description: "We engineer secure, high-converting native iOS apps crafted specifically for Apple's ecosystem, delivering elite UI/UX, fast load times, and full compliance with App Store guidelines.",
      },
      {
        title: "Flutter App Development",
        description: "We leverage Flutter to deliver fast, native-like cross-platform applications from a single codebase, drastically reducing your development timelines and deployment costs.",
      },
      {
        title: "React Native App Development",
        description: "We build robust React Native apps that offer true cross-platform performance, giving your brand a native look and feel on both iOS and Android simultaneously.",
      },
      {
        title: "Cross-Platform App Development",
        description: "We create scalable multi-platform applications engineered to perform consistently across all mobile operating systems without compromising speed or visual appeal.",
      },
      {
        title: "App UI/UX Design",
        description: "We design clean, user-centered interfaces and intuitive navigation flows that keep users engaged, minimize bounce rates, and maximize in-app conversions.",
      },
      {
        title: "App Backend Development",
        description: "We build secure, high-capacity server architectures and database infrastructures designed to process heavy traffic loads and complex data streams effortlessly.",
      },
      {
        title: "API & Third-Party Integration",
        description: "We integrate essential third-party APIs including payment gateways, CRMs, ERPs, live tracking, and cloud services directly into your mobile application.",
      },
    ],
  },
  servicesTypes: [
    {
      title: "Android App Development",
      description: "We build feature-rich, native Android applications optimized for high performance, smooth usability, and seamless integration across all Android devices and Google Play Store standards.",
    },
    {
      title: "iOS App Development",
      description: "We engineer secure, high-converting native iOS apps crafted specifically for Apple's ecosystem, delivering elite UI/UX, fast load times, and full compliance with App Store guidelines.",
    },
    {
      title: "Flutter App Development",
      description: "We leverage Flutter to deliver fast, native-like cross-platform applications from a single codebase, drastically reducing your development timelines and deployment costs.",
    },
    {
      title: "React Native App Development",
      description: "We build robust React Native apps that offer true cross-platform performance, giving your brand a native look and feel on both iOS and Android simultaneously.",
    },
    {
      title: "Cross-Platform App Development",
      description: "We create scalable multi-platform applications engineered to perform consistently across all mobile operating systems without compromising speed or visual appeal.",
    },
    {
      title: "App UI/UX Design",
      description: "We design clean, user-centered interfaces and intuitive navigation flows that keep users engaged, minimize bounce rates, and maximize in-app conversions.",
    },
    {
      title: "App Backend Development",
      description: "We build secure, high-capacity server architectures and database infrastructures designed to process heavy traffic loads and complex data streams effortlessly.",
    },
    {
      title: "API & Third-Party Integration",
      description: "We integrate essential third-party APIs including payment gateways, CRMs, ERPs, live tracking, and cloud services directly into your mobile application.",
    },
  ],
  benefits: [],
  whyChooseUs: {
    heading: "Why Choose Eddinet for Mobile App Development",
    points: [
      "Custom-Built App Solutions: We build tailored mobile applications engineered around your exact operational workflows never rigid, pre-made app templates.",
      "Experienced Development Team: Our senior developers and UI/UX designers possess deep technical expertise across native and cross-platform frameworks.",
      "Scalable & Secure Applications: We prioritize clean code standards, robust cloud hosting, and multi-layer encryption to ensure your app scales safely as traffic grows.",
      "User-Centered UI/UX: Every interface design decision is guided by real consumer behavior insights, making app navigation effortless for your end users.",
      "Full-Stack Development Expertise: From server configuration and database management to frontend design and store deployment, we handle every layer in-house.",
      "Business-Focused Approach: We focus on metrics that matter building features that drive user retention, active engagements, and measurable revenue.",
      "Transparent Communication: We maintain clear project visibility with regular progress demos, milestone updates, and open communication channels throughout.",
      "Ongoing Support & Improvement: Our commitment extends beyond launch—we continuously monitor, update, and refine your application to keep it performing at its peak.",
    ],
  },
  process: {
    heading: "Our Mobile App Development Process",
    steps: [
      {
        num: "01",
        title: "Understanding Your Business",
        description: "We analyze your market position, target audience, and primary commercial goals to align project parameters with measurable outcomes.",
      },
      {
        num: "02",
        title: "App Strategy & Planning",
        description: "We map out user flows, feature lists, technology stacks, and milestone roadmaps to guarantee smooth execution throughout development.",
      },
      {
        num: "03",
        title: "UI/UX Design",
        description: "Our designers create interactive wireframes and visual prototypes, ensuring every screen is intuitive and aligned with your brand identity.",
      },
      {
        num: "04",
        title: "Frontend & Backend Development",
        description: "Our developers write clean, efficient code to construct both the user-facing interface and the supporting cloud infrastructure.",
      },
      {
        num: "05",
        title: "API & System Integration",
        description: "We link required third-party services, payment channels, and database management systems into a cohesive application ecosystem.",
      },
      {
        num: "06",
        title: "Testing & Quality Assurance",
        description: "We execute comprehensive performance, usability, regression, and security testing across multiple devices and operating systems.",
      },
      {
        num: "07",
        title: "App Deployment",
        description: "We manage the full submission, optimization, and approval process on both the Apple App Store and Google Play Store.",
      },
      {
        num: "08",
        title: "Maintenance & Support",
        description: "We provide ongoing SLA-backed maintenance, bug fixes, performance monitoring, and OS compatibility updates post-launch.",
      },
    ],
  },
  faqs: [
    {
      q: "What does mobile app development include?",
      a: "Mobile app development includes market research, UI/UX design, frontend and backend coding, API integration, database configuration, quality assurance, store deployment, and ongoing support.",
    },
    {
      q: "How much does mobile app development cost in India?",
      a: "Costs vary based on design complexity, required feature sets, platform selection (native vs. cross-platform), and third-party integrations. We provide tailored upfront quotes following an initial project assessment.",
    },
    {
      q: "How long does it take to develop a mobile app?",
      a: "A standard application takes 8 to 12 weeks to complete, while highly complex enterprise or custom platforms may take 16 weeks or more depending on project scope.",
    },
    {
      q: "Do you develop both Android and iOS apps?",
      a: "Yes, we specialize in both native development (Java/Kotlin for Android, Swift for iOS) and cross-platform frameworks like Flutter and React Native to cover both platforms simultaneously.",
    },
    {
      q: "Can you build a custom mobile app?",
      a: "Yes, all of our applications are custom-built to match your unique business logic, design preferences, security requirements, and operational goals.",
    },
    {
      q: "Do you provide full-stack app development?",
      a: "Yes, our team manages the entire stack, including frontend mobile interfaces, backend server architecture, cloud integration, database management, and API connections.",
    },
    {
      q: "Can you integrate APIs and third-party services?",
      a: "Yes, we seamlessly integrate payment gateways, mapping services, social logins, push notification engines, CRMs, and custom ERP tools via secure APIs.",
    },
    {
      q: "Do you provide app maintenance and support?",
      a: "Yes, we offer flexible post-launch SLA maintenance packages that include server monitoring, bug fixes, security patches, and updates for new OS releases.",
    },
  ],
  industries: {
    heading: "Mobile App Development for Different Business Needs",
    items: [
      {
        title: "Startups & New Businesses",
        description: "We build market-ready Minimum Viable Products (MVPs) that allow new ventures to launch quickly, validate ideas, and gather user feedback.",
      },
      {
        title: "Small & Growing Businesses",
        description: "We craft cost-effective mobile solutions designed to automate client management, increase bookings, and boost local brand visibility.",
      },
      {
        title: "Enterprise Businesses",
        description: "We engineer high-capacity, multi-tier applications tailored for complex organizational operations, data management, and security compliance.",
      },
      {
        title: "E-Commerce Businesses",
        description: "We develop high-converting mobile shopping apps with seamless catalog browsing, personalized offers, and instant one-click checkouts.",
      },
      {
        title: "On-Demand Platforms",
        description: "We build real-time, location-based service applications complete with live tracking, instant dispatching, and automated payment gateways.",
      },
      {
        title: "Internal Business Applications",
        description: "We create custom internal tools and mobile dashboards that empower remote workforces, streamline field operations, and track productivity.",
      },
    ],
  },
  cta: {
    heading: "BUILD YOUR MOBILE APP WITH EDDINET",
    description: "Ready to convert your app concept into a high-performing digital product? Partner with Eddinet to design, build, and launch a custom mobile application engineered to drive revenue and scale your brand. Contact our development team today to schedule your strategy consultation.",
  },
};

export const docxMaintenanceCategory: DocxCategoryContent = {
  title: "Maintenance & Support",
  heroEyebrow: "Website Maintenance | Security & Backups | Uptime Monitoring",
  heroHeading: "Website Maintenance and Support Services in India",
  heroSubheading: "EDDINET delivers website maintenance and support services in India for enterprises that treat uptime as non-negotiable. Through vigilant monitoring, disciplined updates, and swift expert intervention, we keep your digital infrastructure resilient, secure, and consistently available.",
  aboutHeading: "About EDDINET: IT Maintenance and Support Company in Delhi",
  about: "A website launch marks the beginning of its lifecycle, not the end. Over time, software ages, plugins become obsolete, and cyber adversaries probe for vulnerabilities. One unchecked flaw can erode revenue, reputation, and customer confidence overnight.\n\nThis is why EDDINET, an IT maintenance and support company in Delhi, assumes stewardship of your digital assets after deployment. We scrutinise your systems around the clock, neutralise threats before they escalate, and keep every component current. Consequently, you can devote your energy to growth rather than firefighting.\n\nAs a web maintenance and support company in India, we serve startups, expanding brands, and established enterprises alike. Our managed website support services in India span websites, web applications, and server environments. Moreover, our annual maintenance contract for your website in India offers predictable investment and dependable assistance throughout the year.",
  featuresHeading: "Our Maintenance & Support Services",
  servicesTypes: [
    {
      title: "Website Maintenance",
      description: "We administer timely updates to your CMS, plugins, themes, and content. Your website remains polished, stable, and free of avoidable errors.",
    },
    {
      title: "Security Monitoring",
      description: "We continuously scan for malware, suspicious logins, and emerging threats. Risks are contained long before they inflict damage.",
    },
    {
      title: "Website Backup",
      description: "We create automated daily backups and archive them securely in the cloud. Restoration is swift whenever circumstances demand it.",
    },
    {
      title: "Server Maintenance",
      description: "We configure, fortify, and fine-tune your server environment. Your hosting stays dependable, even during sudden surges in traffic.",
    },
    {
      title: "Application Maintenance",
      description: "We sustain the performance of your web and software applications with meticulous care. Our engineers resolve defects, refine functionality, and evolve features alongside your business.",
    },
    {
      title: "Emergency Support",
      description: "When your website falters at an inconvenient hour, our responders act without delay. We restore normal operations, day or night.",
    },
  ],
  benefits: [],
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Website Maintenance Partner?",
    points: [
      "Proactive Stewardship: We detect anomalies early, so your audience never witnesses them.",
      "A Single Accountable Team: Maintenance, security, backups, and support converge under one roof. You are spared the burden of coordinating multiple vendors.",
      "Swift, Measured Response: We adhere to defined service levels, and urgent matters take precedence.",
      "Transparent AMC Plans: Fixed pricing and a clearly defined scope eliminate unwelcome surprises.",
      "Versatile Technical Expertise: We support WordPress, Shopify, WooCommerce, Laravel, and bespoke platforms.",
      "Lucid Reporting: Every month, you see exactly what we accomplished, in plain language.",
    ],
  },
  process: {
    heading: "Our Maintenance & Support Process",
    steps: [
      {
        num: "01",
        title: "Website Audit & Onboarding",
        description: "We conduct a comprehensive review of your website, server, security posture, and backup systems. We then document the risks and recommend a fitting plan.",
      },
      {
        num: "02",
        title: "Plan & SLA Setup",
        description: "We tailor a maintenance plan to your operational needs. Response times, support hours, and reporting standards are clearly defined in writing.",
      },
      {
        num: "03",
        title: "Monitoring & Regular Maintenance",
        description: "Our specialists monitor your systems and apply updates on a fixed schedule. Backups and security scans run in parallel.",
      },
      {
        num: "04",
        title: "Support & Issue Resolution",
        description: "Every issue is logged, prioritised, and resolved with full transparency. Critical incidents receive immediate attention.",
      },
      {
        num: "05",
        title: "Monthly Reporting & Review",
        description: "You receive a concise report covering updates, backups, uptime, and resolved issues. We also propose strategic improvements for the month ahead.",
      },
    ],
  },
  faqs: [
    {
      q: "What are website maintenance and support services?",
      a: "They are continuous services that keep your website secure, current, and high-performing. They typically encompass updates, backups, monitoring, bug fixes, and technical assistance.",
    },
    {
      q: "How much do website maintenance and support services in India cost?",
      a: "Pricing depends on your platform, website size, and the level of support required. A modest business site costs considerably less than a large ecommerce store or custom application. Share your requirements, and we will provide a transparent quote.",
    },
    {
      q: "What is an annual maintenance contract for a website?",
      a: "An annual maintenance contract (AMC) is a yearly agreement at a fixed price. It covers routine updates, backups, security, and support, so unexpected expenses never disrupt your budget.",
    },
    {
      q: "Why do I need an IT maintenance and support company in Delhi?",
      a: "Websites and servers demand constant, specialised attention. A seasoned team prevents downtime, repels security threats, and resolves faults faster than a stretched in-house department.",
    },
    {
      q: "What does managed website support include?",
      a: "It generally includes updates, security scans, backups, uptime monitoring, bug fixing, and access to a responsive support team. We calibrate every plan to your needs.",
    },
    {
      q: "Do you offer 24/7 emergency support?",
      a: "Yes. Our team responds to urgent incidents, such as outages, hacks, and critical errors, at any hour.",
    },
    {
      q: "Can you maintain a website that another agency built?",
      a: "Certainly. We first audit your website, rectify existing issues, and then assume ongoing maintenance.",
    },
  ],
  industries: {
    heading: "Maintenance & Support for Multi-Industry Needs",
    items: [
      {
        title: "E-Commerce & D2C Brands",
        description: "Dependable storefronts, secure checkouts, and rapid assistance during peak sale seasons.",
      },
      {
        title: "Corporate & B2B Companies",
        description: "Reliable websites and portals that safeguard your brand reputation and client trust.",
      },
      {
        title: "Healthcare & Education",
        description: "Secure, perpetually accessible platforms for patients, students, and parents.",
      },
      {
        title: "SaaS, Startups & Enterprises",
        description: "Application support and server care that scale gracefully alongside your user base.",
      },
    ],
  },
  cta: {
    heading: "Keep Your Website Secure, Fast, and Always Online",
    sub: "Discuss Your Maintenance Requirements",
    description: "Ready to put downtime and security worries behind you? Partner with EDDINET, a trusted IT maintenance and support company in Delhi. Contact our team today for a complimentary website audit and a clear AMC quote within 24 hours.",
  },
};

export const docxReputationCategory: DocxCategoryContent = {
  title: "Reputation Management",
  heroEyebrow: "Online Reputation Management | Google Reviews | Brand Monitoring | Google Business Profile",
  heroHeading: "Reputation Management Services in India",
  heroSubheading: "EDDINET offers reputation management services in India to help businesses earn trust, strengthen their public image, and win more customers online. Our specialists focus on genuine reviews, vigilant monitoring, and strategic brand care, so your reputation works as a growth asset.",
  aboutHeading: "About EDDINET: Online Reputation Management Company in Delhi",
  about: "Today, customers judge you before they ever contact you. A handful of unanswered reviews or one damaging search result can send buyers to a competitor. Meanwhile, you may never learn why enquiries dried up.\n\nThis is why EDDINET, an online reputation management company in Delhi, treats reputation as a discipline rather than a reaction. We monitor what is said about you, respond with care, and build positive proof steadily. Consequently, trust grows with every search.\n\nOur business reputation management services in India serve clinics, retailers, corporates, and growing brands. As a reputation management agency in Delhi NCR, we act as your dedicated image partner. Moreover, our brand and review management services in India unite review care, listings, and brand messaging under one strategy.",
  featuresHeading: "Our Reputation Management Services in India",
  servicesTypes: [
    {
      title: "Online Reputation Management",
      description: "Our reputation management services in India shape what customers see when they search for you. Positive content rises, and harmful narratives are addressed through ethical, policy-compliant methods.",
    },
    {
      title: "Google Business Profile",
      description: "We optimise your profile, categories, photos, and posts. Your business appears prominently on Google Search and Maps.",
    },
    {
      title: "Google Review Management",
      description: "We respond to every review with professionalism and tact. Policy-violating reviews are flagged to Google for assessment.",
    },
    {
      title: "Review Generation",
      description: "We help satisfied customers share their experiences through simple, compliant requests. Your rating strengthens with authentic feedback.",
    },
    {
      title: "Review Monitoring",
      description: "We track reviews and brand mentions across major platforms. Alerts reach you promptly, so nothing goes unanswered.",
    },
    {
      title: "Brand Reputation Management",
      description: "Our brand and review management services in India protect perception and reinforce credibility. Your message stays consistent across every channel.",
    },
  ],
  benefits: [],
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Online Reputation Management Company in Delhi?",
    points: [
      "Ethical Practices: We never buy reviews or use fake profiles. Every tactic follows platform policies.",
      "Proactive Monitoring: We catch issues early, so small complaints never become public crises.",
      "Local Market Insight: Our Delhi NCR experience helps us read Indian customer sentiment accurately.",
      "Search-Led Strategy: Reputation and SEO work together to improve your visibility.",
      "Transparent Reporting: Each month, you see precisely what changed, in plain language.",
      "One Accountable Team: Reviews, listings, and brand care come from a single partner.",
    ],
  },
  process: {
    heading: "Our Reputation Management Process",
    steps: [
      {
        num: "01",
        title: "Reputation Audit",
        description: "We examine your ratings, reviews, search results, and brand mentions. We then record a clear baseline.",
      },
      {
        num: "02",
        title: "Strategy Planning",
        description: "We define priorities, platforms, and target outcomes. Your plan reflects genuine business objectives.",
      },
      {
        num: "03",
        title: "Profile & Content Building",
        description: "We refine your profiles and publish trustworthy content. Positive visibility builds steadily.",
      },
      {
        num: "04",
        title: "Review Engagement",
        description: "We request, monitor, and answer reviews on a regular schedule. Every customer feels heard.",
      },
      {
        num: "05",
        title: "Monthly Reporting",
        description: "You receive a concise report on ratings, sentiment, and progress. We also recommend improvements for the month ahead.",
      },
    ],
  },
  faqs: [
    {
      q: "What are reputation management services?",
      a: "They are services that monitor, protect, and improve how a business appears online. They typically cover reviews, search results, profiles, and brand mentions.",
    },
    {
      q: "How much do reputation management services in India cost?",
      a: "Pricing depends on your industry, number of locations, and scope of work. A single-location plan costs less than a multi-brand programme. Share your requirements, and we will send a clear quote.",
    },
    {
      q: "What does an online reputation management company in Delhi do?",
      a: "It audits your online presence, builds positive visibility, and responds to reviews. It also monitors mentions and addresses reputational risks.",
    },
    {
      q: "Can you remove negative reviews?",
      a: "We can flag reviews that violate platform policies. Genuine reviews cannot be deleted, so we focus on professional replies and building more positive feedback.",
    },
    {
      q: "How long does it take to improve my online reputation?",
      a: "Early improvements often appear within a few weeks. Lasting results typically take several months of consistent effort.",
    },
    {
      q: "Do you buy or fake reviews?",
      a: "Never. Fake reviews violate platform rules and can harm your business. We encourage authentic feedback only.",
    },
    {
      q: "Is a reputation management agency in Delhi NCR suitable for small businesses?",
      a: "Yes. We offer scalable plans for local shops, clinics, and startups as well as large enterprises.",
    },
  ],
  industries: {
    heading: "Reputation Management for Multi-Industry Needs",
    items: [
      {
        title: "Healthcare & Wellness",
        description: "Trusted ratings and patient reviews that guide appointments.",
      },
      {
        title: "Restaurants, Hotels & Travel",
        description: "Strong reviews and responsive replies that fill tables and rooms.",
      },
      {
        title: "Real Estate & Education",
        description: "Credible feedback that reassures buyers, parents, and students.",
      },
      {
        title: "Corporate, Retail & E-Commerce",
        description: "Consistent brand perception that supports sales and partnerships.",
      },
    ],
  },
  cta: {
    heading: "Build a Reputation Customers Trust",
    sub: "Discuss Your Reputation Management Needs",
    description: "Ready to strengthen your online image? Partner with EDDINET, a trusted online reputation management company in Delhi. Contact our team today for a complimentary reputation audit and a clear quote within 24 hours.",
  },
};

export const docxHostingCategory: DocxCategoryContent = {
  title: "Hosting & Migration",
  heroEyebrow: "Cloud & VPS Hosting | Managed Hosting Support | Safe Website & Server Migration",
  heroHeading: "Hosting & Migration Services in India",
  heroSubheading: "Eddinet delivers hosting and migration services in India that keep your website and applications fast, secure, and online. We set up your hosting, move your data safely, and manage the servers behind it. As a result, you focus on your business while we handle the technical work. Slow servers and risky migrations cost you traffic and sales. Our team plans every move carefully, so your site stays available. Therefore, you grow without worrying about your infrastructure.",
  about: "Eddinet is a web hosting and server migration company in India built around certified sysadmins and DevOps engineers. We help businesses replace unreliable hosting and messy server setups with one clear, well-managed plan.\n\nWe listen first, then review your current setup before making any change. Our reports use plain language, so technical and non-technical teams can act on them. At the end of each project, we hand over complete documentation.\n\nGood hosting should feel invisible. It works quietly, stays fast, and never surprises you. That is the standard we follow on every project.",
  aboutHeading: "About Us: Web Hosting and Server Migration Company in India",
  featuresDescription: "We focus on four core service areas. Each one is built around your traffic, budget, and growth plans.",
  serviceGroups: {
    heading: "Our Hosting and Migration Services in India",
    items: [
      {
        title: "Website, VPS, and Cloud Hosting Services in India",
        description: "We host websites of every size on shared, VPS, and cloud platforms. Small sites get reliable, affordable plans. Growing businesses get scalable cloud hosting with room for traffic spikes. We help you pick the right plan, so you never overpay or outgrow your server.",
      },
      {
        title: "Managed Hosting and Server Support in India",
        description: "Our managed hosting service gives you an expert team without the cost of hiring one. We handle monitoring, security patches, backups, and performance tuning. In addition, our engineers respond quickly when something needs attention.",
      },
      {
        title: "Application, Database, and DNS Hosting in India",
        description: "We host web applications, databases, and domains on stable, secure infrastructure. This includes MySQL and PostgreSQL databases, plus managed DNS with high uptime. Because of this, your app, data, and domain all work together smoothly.",
      },
      {
        title: "Website, Hosting, and Database Migration Services in India",
        description: "Our hosting and migration specialists move your website, server, or database to a new home with minimal downtime. We also handle WordPress and Shopify store migrations. Every move is tested before the switch, so your data arrives complete and intact.",
      },
    ],
  },
  benefits: [],
  whyChooseUs: {
    heading: "Why Choose Eddinet for Hosting and Migration Services in India",
    points: [
      "Migration without the panic: We plan every move with backups and testing. As a result, your site stays online with minimal downtime. Your search rankings stay protected during the switch.",
      "One partner for hosting and migration: You do not need separate vendors for servers, domains, and data moves. Everything is managed by one accountable team. This saves time and avoids finger-pointing.",
      "Stack-friendly setup: We work with WordPress, Laravel, Node.js, Shopify, and custom applications. You never face a forced rebuild. We simply give your existing stack a better home.",
      "Security built in: Every server is hardened, patched, and backed up from day one. Suspicious activity is flagged early. Your data stays protected as you grow.",
      "Plain-language reports: Managers get clear summaries of uptime and performance. Meanwhile, engineers get the technical detail they need. Everyone knows exactly what was done.",
      "Indian business hours support: Our team understands local time zones and responds when your day starts. Therefore, urgent issues get attention when you need it most. You speak to real engineers who know your setup. We measure success by faster load times, stronger uptime, and smooth, low-risk migrations. Ready to move to better hosting? Contact Eddinet today for a free consultation and a clear migration plan.",
    ],
  },
  process: {
    heading: "Our Process for Hosting and Migration Setup in India",
    description: "Every Eddinet project follows a clear path, from the first review to ongoing support.",
    steps: [
      {
        num: "01",
        title: "Infrastructure review",
        description: "We study your current hosting, traffic, and applications. This shows what works and what needs to change. It also helps us choose the right plan and migration method.",
      },
      {
        num: "02",
        title: "Planning and backup",
        description: "We build a clear plan with timelines and a full backup of your data. As a result, nothing is lost if something goes wrong. Backups are verified before we touch your live site.",
      },
      {
        num: "03",
        title: "Setup and configuration",
        description: "Next, we prepare the new server with the right software, security, and settings. We also connect your domain and DNS records. Everything is configured before your site goes live.",
      },
      {
        num: "04",
        title: "Migration and testing",
        description: "Then we move your files, databases, and emails to the new environment. We test speed, links, forms, and checkout flows on the new server. Any issue is fixed before the switch.",
      },
      {
        num: "05",
        title: "Go-live and monitoring",
        description: "We switch traffic during low-traffic hours to reduce the impact on visitors. Monitoring tools then watch performance and uptime closely. Problems are caught and fixed right away.",
      },
      {
        num: "06",
        title: "Handover and support",
        description: "Finally, we train your team and share full documentation. You also get ongoing support and regular health checks. As your business grows, we adjust your hosting to match.",
      },
    ],
  },
  faqs: [
    {
      q: "What are hosting and migration services in India?",
      a: "Hosting services keep your website or application running on a secure, fast server. Migration services move your site, data, or server to a new host safely.",
    },
    {
      q: "Why do I need a web hosting and server migration company in India?",
      a: "Migrations can cause downtime, data loss, and broken pages when done alone. An expert team plans, tests, and completes the move properly.",
    },
    {
      q: "Which hosting types do you offer?",
      a: "We offer website hosting, VPS hosting, cloud hosting, managed hosting, application hosting, and database hosting.",
    },
    {
      q: "Will my website go down during migration?",
      a: "We aim for minimal downtime. We test everything on the new server first and switch traffic during low-traffic hours.",
    },
    {
      q: "Can you migrate WordPress and Shopify stores?",
      a: "Yes. We handle WordPress site moves and Shopify store data migration, including products, pages, and customer records.",
    },
    {
      q: "How long does a migration take?",
      a: "Simple website moves take a few days. Large databases or multi-server setups may take longer, and we share a timeline after the review.",
    },
    {
      q: "Do you offer support after migration?",
      a: "Yes. We provide monitoring, regular health checks, and ongoing support plans.",
    },
  ],
};

export const docxCategoryPages: Record<string, DocxCategoryContent> = {
  seo: docxSeoCategory,
  "design-creative": docxDesignCreativeCategory,
  "web-development": docxWebDevelopmentCategory,
  "mobile-app-development": docxMobileAppDevelopmentCategory,
  "maintenance-support": docxMaintenanceCategory,
  "reputation-management": docxReputationCategory,
  "hosting-migration": docxHostingCategory,
};
