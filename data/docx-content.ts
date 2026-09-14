// ============================================================================
//  FILE: data/docx-content.ts
//  WHAT'S IN THIS FILE:
//    Structured page content transcribed from "EDDITNET CONTENT (2).docx".
//    Each entry corresponds to one tab/section in the document and replaces the
//    legacy copy rendered on the matching service page.
// ============================================================================

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
  category: "seo" | "design-creative" | "web-development";
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  about: string;
  features: DocxSection[];
  featuresHeading?: string;
  featuresDescription?: string;
  benefits: DocxSection[];
  benefitsHeading?: string;
  benefitsDescription?: string;
  whyChooseUs: { heading: string; description?: string; points: string[] };
  process: { heading: string; description?: string; steps: DocxProcessStep[] };
  faqs: DocxFaq[];
}

export const docxChildPages: Record<string, DocxPageContent> = {
  // ==========================================================================
  //  SEO CHILD PAGES  (/services/seo/<slug>)
  // ==========================================================================

  "ai-seo": {
    slug: "ai-seo",
    category: "seo",
    title: "AI SEO (Generative SEO)",
    metaTitle: "AI SEO (Generative SEO) Service in Delhi | Eddinet",
    metaDescription:
      "We offer advanced AI SEO (Generative SEO) service in Delhi to automate, scale and future-proof your SEO. GEO, semantic targeting and visibility on ChatGPT, Gemini and Google AI Overviews. Get a free AI SEO audit.",
    heroHeading: "AI SEO (Generative SEO) Service in Delhi NCR",
    heroSubheading:
      "We offer advanced AI SEO (Generative SEO) service in Delhi to help businesses automate, scale, and future-proof their search engine optimization efforts. Our team leverages artificial intelligence and generative engine optimization (GEO) to create search-ready content, target high-intent semantic queries, and implement data-driven strategies for top rankings on search engines and AI platforms like ChatGPT, Gemini, and Google AI Overviews.",
    about:
      "As a premier AI SEO company Delhi NCR, we bridge the gap between traditional search algorithms and next-generation artificial intelligence models. Traditional agencies focus solely on keyword rankings, but our team optimizes your online presence for machine readability, semantic relevance, and generative citations. Backed by years of experience and deep expertise in Natural Language Processing (NLP) and search technology, we build future-ready digital strategies that drive authority, qualified leads, and measurable growth.",
    featuresHeading: "Types of AI SEO Solutions",
    featuresDescription:
      "Six specialized solution types that make your brand visible across Google, ChatGPT, Gemini and Perplexity — from deep AI audits to generative engine optimization, semantic content, technical SEO and authority building.",
    features: [
      {
        title: "AI SEO Audit & Strategy",
        description:
          "We run deep technical and semantic audits to analyze your current search standing and evaluate how effectively AI platforms crawl and understand your brand.",
      },
      {
        title: "Generative Engine Optimization (GEO)",
        description:
          "We optimize and structure your web content so generative tools like ChatGPT, Gemini, and Perplexity pick up your brand as an authoritative source for user queries.",
      },
      {
        title: "Intent-Based Keyword & Topic Research",
        description:
          "Moving beyond basic keywords, we target deep user search intent, semantic query clusters, and natural language questions to capture high-value organic traffic.",
      },
      {
        title: "Content Optimization for AI & Search Engines",
        description:
          "Our team writes clear, high-depth content structured specifically for readability, context, and semantic value for both human visitors and search algorithms.",
      },
      {
        title: "Structured Data & Technical SEO",
        description:
          "We implement schema markup, enhance crawlability, and eliminate technical barriers so AI engines can effortlessly interpret and index your business data.",
      },
      {
        title: "Authority & Trust Building",
        description:
          "We increase your digital footprint through authoritative citations, entity associations, and high-quality link strategies that establish strong domain trust.",
      },
    ],
    benefitsHeading: "Key Benefits of AI SEO for Your Business",
    benefitsDescription:
      "What your brand earns when you start showing up across Google, ChatGPT, Gemini and Perplexity — from higher-quality traffic to compounded organic authority.",
    benefits: [
      {
        title: "Multi-Platform Visibility",
        description:
          "Appear prominently in standard search engine results as well as inside AI-generated summaries and answer engines.",
      },
      {
        title: "Higher Conversion Rates",
        description:
          "Target searchers asking direct, high-intent questions, driving visitors who are ready to engage or purchase.",
      },
      {
        title: "Future-Proof Organic Traffic",
        description:
          "Safeguard your search presence against evolving algorithm updates and shifting user search behaviors.",
      },
      {
        title: "Improved Brand Authority",
        description:
          "Earn recognition as a trusted market leader by appearing in cited sources across conversational search models.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Us as the Best AI SEO Agency in Delhi",
      description:
        "Choosing the best AI SEO agency in Delhi means working with experts who understand both Google algorithms and generative search ecosystems.",
      points: [
        "Future-Ready Strategies: We adopt cutting-edge GEO and semantic optimization techniques well ahead of conventional digital marketing agencies.",
        "Data-Driven Execution: Our decisions are rooted in deep analytics, semantic data tracking, and verified performance metrics.",
        "Full Transparency: Clear reporting, dedicated account support, and continuous strategy updates keep you informed at every milestone.",
        "Proven ROI Focus: Every optimization tactic, content piece, and technical fix is executed with a focus on growing your organic visibility, traffic, and bottom line.",
      ],
    },
    process: {
      heading: "Our AI SEO (Generative SEO) Execution Process",
      steps: [
        {
          num: "01",
          title: "AI SEO Audit & Opportunity Analysis",
          description:
            "We assess your site's current organic performance, identify content gaps, and map out immediate opportunities for traditional and AI search visibility.",
        },
        {
          num: "02",
          title: "User Intent & Query Research",
          description:
            "We pinpoint real-world conversational queries and search behaviors to align your pages with exact user intent.",
        },
        {
          num: "03",
          title: "Content Strategy for AI Visibility",
          description:
            "We build a structured content roadmap targeting informational, commercial, and transactional queries across all search touchpoints.",
        },
        {
          num: "04",
          title: "Content Optimization & Structuring",
          description:
            "We refine headings, semantic relationships, and formatting to maximize clarity for search engines and language models.",
        },
        {
          num: "05",
          title: "Technical SEO & Structured Data Implementation",
          description:
            "We deploy custom schema markups, speed optimizations, and site architecture enhancements for seamless AI rendering.",
        },
        {
          num: "06",
          title: "Authority Building & Link Strategy",
          description:
            "We build credible off-page references, citations, and quality backlinks to boost domain trust and gain citations in AI-generated answers.",
        },
      ],
    },
    faqs: [],
  },

  "lead-generation-seo": {
    slug: "lead-generation-seo",
    category: "seo",
    title: "Lead Generation SEO",
    metaTitle: "Lead Generation SEO Services in India | Eddinet",
    metaDescription:
      "Eddinet provides targeted lead generation SEO services in India designed to capture high-intent buyers, eliminate wasted ad spend and convert organic search traffic into qualified business inquiries. Get a free proposal.",
    heroHeading: "Lead Generation SEO Services in India",
    heroSubheading:
      "High-Intent Search Engine Optimization | Conversion Rate Optimization | B2B & B2C Revenue Growth\n\nEddinet provides targeted lead generation SEO services in India designed to capture high-intent buyers, eliminate wasted ad spend, and convert organic search traffic into qualified business inquiries.",
    about:
      "Traffic is optional, pipeline growth is non-negotiable.\n\nAt Eddinet, we operate as growth partners, not just another search agency. Most SEO strategies fail because they measure success by website visits rather than closed deals. We bridge that gap by mapping organic search directly to revenue.\n\nLeveraging proven performance frameworks across competitive markets, Eddinet combines technical precision, buyer psychology, and generative AI search strategies to establish your search dominance and scale a predictable inbound sales pipeline.",
    features: [
      {
        title: "Buyer Intent Keyword Targeting",
        description:
          "We move beyond high-volume informational keywords to identify and target commercial and transactional search queries used by decision-makers ready to buy.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description:
          "Getting traffic is only half the battle. We optimize your website's messaging, page layout, form structures, and call-to-action (CTA) placements to maximize visitor-to-lead conversion rates.",
      },
      {
        title: "Landing Page Optimization",
        description:
          "We build and refine dedicated search-optimized landing pages that clearly communicate value propositions, address buyer pain points, and drive inquiries.",
      },
      {
        title: "Local Lead Generation SEO",
        description:
          "For location-dependent businesses, we optimize Google Business Profiles and local citation networks to dominate regional searches and drive high-intent phone calls and store visits.",
      },
      {
        title: "Lead Capture Content Marketing",
        description:
          "We develop targeted downloadable assets, case studies, comparison guides, and solution pages that nurture top-of-funnel traffic into actionable leads.",
      },
      {
        title: "Full Website Optimization",
        description:
          "We enhance your overall site architecture, speed performance, user experience (UX), and navigation hierarchy to eliminate bounce rates and ensure both visitors and search engines interact effortlessly with your core offerings.",
      },
    ],
    benefits: [
      {
        title: "Lower Customer Acquisition Cost (CAC)",
        description:
          "Reduce your reliance on expensive pay-per-click (PPC) ads by building an organic inbound lead pipeline that costs less over time.",
      },
      {
        title: "Higher Quality Leads",
        description:
          "Traffic driven by targeted intent keywords delivers prospects who already understand their problem and are actively seeking your specific solution.",
      },
      {
        title: "24/7 Automated Lead Pipeline",
        description:
          "Organic search rankings operate continuously, bringing inbound inquiries and sales leads even outside regular business hours.",
      },
      {
        title: "Compounding Long-Term ROI",
        description:
          "While paid advertising stops the moment your budget ends, SEO creates lasting digital assets that yield qualified leads for months and years to come.",
      },
      {
        title: "Enhanced Brand Trust & Credibility",
        description:
          "Ranking organically at the top of Google for competitive commercial search terms instantly positions your company as an industry leader.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Us for Lead Generation SEO",
      description:
        "When you choose Eddinet, you partner with a performance-focused team committed to clear accountability and tangible revenue growth. Here is why leading brands choose us:",
      points: [
        "Lead-First Growth Focus: We measure success by leads, phone calls, and revenue generated — not just keyword rankings or arbitrary pageviews.",
        "Customized Execution: We craft bespoke SEO blueprints tailored to your business model, target market, and sales cycle rather than using generic templates.",
        "Full Data Transparency: Receive straightforward, easy-to-read reports detailing organic ranking updates, form conversions, calls, and qualified lead metrics.",
        "Integrated Conversion Expertise: We combine technical SEO expertise with behavioral copywriting and conversion rate optimization to ensure peak website performance.",
        "Continuous Strategy Optimization: Digital search evolves rapidly. We actively monitor search engine algorithm updates, consumer trends, and performance metrics to keep your brand ahead of competitors.",
      ],
    },
    process: {
      heading: "Our Lead Generation SEO Process",
      description:
        "Our structured 6-step framework ensures continuous lead growth and high return on investment (ROI):",
      steps: [
        {
          num: "01",
          title: "Business & Target Audience Analysis",
          description:
            "We analyze your industry, ideal customer profile (ICP), profit margins, and existing lead funnel to establish concrete performance benchmarks.",
        },
        {
          num: "02",
          title: "Competitor & Intent Search Audit",
          description:
            "We map out your top market competitors, identify revenue-generating keyword gaps, and evaluate searcher intent across the buyer journey.",
        },
        {
          num: "03",
          title: "On-Page & CRO Implementation",
          description:
            "We rewrite headings, optimize meta content, refine UX design, and insert compelling CTAs across key sales pages to turn existing traffic into qualified inquiries.",
        },
        {
          num: "04",
          title: "Technical Infrastructure & Speed Tuning",
          description:
            "We eliminate site speed bottlenecks, mobile usability issues, and indexing errors to ensure seamless site performance for visitors and search crawlers.",
        },
        {
          num: "05",
          title: "Authority & Trust Building",
          description:
            "We secure high-authority backlinks, digital PR mentions, and industry citations to build search engine trust and elevate commercial page rankings.",
        },
        {
          num: "06",
          title: "Lead Tracking & Continuous Refinement",
          description:
            "We set up end-to-end conversion tracking (form submissions, call tracking, live chat interactions) and refine our strategy based on real sales data.",
        },
      ],
    },
    faqs: [],
  },

  "local-seo": {
    slug: "local-seo",
    category: "seo",
    title: "Local SEO",
    metaTitle: "Local SEO Services in India That Bring Customers | Eddinet",
    metaDescription:
      "Eddinet specializes in local SEO services in India that help businesses get found by people searching nearby and ready to buy — on Google Search, Google Maps and the local pack. Get a free local SEO consultation.",
    heroHeading: "Local SEO Services in Delhi NCR",
    heroSubheading:
      "If someone in your city searches for what you sell right now, does your business show up? At Eddinet, we specialize in local SEO services in India that help businesses like yours get found by people who are searching nearby and ready to buy. We get your business seen on Google Search, Google Maps, and the local pack — the results that show up right when someone types \"near me\".",
    about:
      "We're not here to throw jargon at you or hand over a report full of numbers that mean nothing. We're here to get your business seen on Google Search, Google Maps, and the local pack — the three results that show up right when someone types \"near me\". Whether you run a clinic in Pune, a restaurant in Delhi, a boutique in Bangalore, or a service business in Jaipur, ranking locally is what turns online searches into walk-ins, calls, and bookings.\n\nAt Eddinet, we focus on one thing: making sure local customers in your city find you at the exact moment they're ready to buy. Whether someone is searching on Google Maps or browsing local search results in Chennai, Mumbai, or Delhi, we optimize your local online presence so you show up at the top.\n\nWe don't rely on generic global tactics. We map out how local buyers in your specific area search, optimize your Google Business Profile, fix local map signals, and turn local searches into direct calls and directions to your doorstep. You get clear, hands-on work from a team that knows local search inside out.",
    features: [
      {
        title: "Google My Business SEO Services",
        description:
          "Your Google Business Profile is often the first thing a potential customer sees before your website, before your reviews, sometimes before they even know your brand name. We fully optimize your profile with the right categories, service areas, photos, posts, and keyword-rich descriptions so you have a real shot at appearing in the Google Map Pack.",
      },
      {
        title: "On-Page & Technical Local SEO",
        description:
          "We optimize your website's title tags, meta descriptions, headers, and content around the searches your local customers are actually typing. We also fix technical issues, slow loading speed, broken links, and mobile usability that quietly hold rankings back.",
      },
      {
        title: "Local Citation & NAP Building",
        description:
          "We list your business consistently across relevant directories and platforms, making sure your Name, Address, and Phone number match everywhere. Inconsistent listings confuse Google and cost you trust — we clean that up and build it right.",
      },
      {
        title: "Review & Reputation Management",
        description:
          "Reviews influence both rankings and buying decisions. We help you build a steady flow of genuine customer reviews and respond to them in a way that builds trust.",
      },
      {
        title: "Local Keyword Research & Content",
        description:
          "We find out exactly how your customers search — by neighborhood, by service, by intent — and build content around those terms so your site speaks their language.",
      },
      {
        title: "Local Link Building",
        description:
          "We earn backlinks from relevant, local, and industry-specific sources to strengthen your site's authority in your area.",
      },
    ],
    benefits: [
      {
        title: "More Visibility Where It Counts",
        description:
          "Show up in local searches and the Map Pack when customers are ready to act.",
      },
      {
        title: "Higher Quality Leads",
        description:
          "People finding you locally are usually closer to making a decision.",
      },
      {
        title: "Better Return Than Paid Ads Alone",
        description:
          "SEO builds visibility that keeps working long after you stop actively promoting.",
      },
      {
        title: "Increased Trust",
        description:
          "A well-optimized profile with strong reviews signals credibility instantly.",
      },
      {
        title: "Stronger Footfall and Calls",
        description:
          "For brick-and-mortar and service businesses, local SEO directly drives real-world visits and enquiries.",
      },
      {
        title: "Long-Term, Compounding Growth",
        description:
          "Unlike ads, the rankings and authority you build stick around and keep growing.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Us – Your Local SEO Experts in India",
      points: [
        "We focus only on what moves your rankings. No filler tasks, no vanity metrics — every action ties back to visibility and leads.",
        "We understand Indian local search behavior. From regional language nuances to how customers compare local options, our strategies are built for the market you're actually operating in.",
        "We're transparent, always. You'll know exactly what we're doing, why we're doing it, and what results to expect realistically, not with inflated promises.",
        "We treat your business like it's ours. As a local SEO company in India that works closely with each client, we care about your growth as much as you do, because your results are our reputation.",
        "We adapt as search evolves. Google's algorithms change constantly, and our strategies are built to adjust with them, not break because of them.",
      ],
    },
    process: {
      heading: "Our Local SEO Process",
      steps: [
        {
          num: "01",
          title: "Audit & Discovery",
          description:
            "We start by auditing your website, Google Business Profile, and current search rankings, along with a close look at your local competitors.",
        },
        {
          num: "02",
          title: "Strategy Building",
          description:
            "Based on what we find, we build a custom local SEO roadmap — realistic, prioritized, and tied to your specific business goals.",
        },
        {
          num: "03",
          title: "Execution",
          description:
            "Our team implements on-page fixes, GBP optimization, citation building, and content work, all in a logical sequence rather than everything at once.",
        },
        {
          num: "04",
          title: "Tracking & Reporting",
          description:
            "We monitor rankings, traffic, and calls/leads generated, and share clear, jargon-free reports so you always know what's happening and why.",
        },
        {
          num: "05",
          title: "Ongoing Optimization",
          description:
            "Local search keeps evolving, and so do we. We continuously refine your strategy based on real performance data, not assumptions.",
        },
      ],
    },
    faqs: [
      {
        q: "What exactly do local SEO services in India include?",
        a: "It covers Google Business Profile optimization, on-page and technical SEO, local citations, review management, local keyword targeting, and local link building — all aimed at getting your business found by nearby customers on Google Search and Maps.",
      },
      {
        q: "How is a local SEO agency in India different from a regular SEO agency?",
        a: "A local SEO agency focuses specifically on location-based rankings — the Map Pack, \"near me\" searches, and city or neighborhood-level keywords — rather than broad, national keyword competition. The strategies, tools, and priorities are different from standard SEO.",
      },
      {
        q: "Why is Google My Business SEO so important?",
        a: "Your Google Business Profile often appears before your website in local search results. Optimizing it properly — categories, photos, posts, service areas, and reviews — directly affects whether you show up in the Map Pack for relevant searches.",
      },
      {
        q: "How long does it take to see results?",
        a: "Most businesses start noticing movement in rankings and visibility within 6 to 12 weeks, with stronger, more consistent results building over 4 to 6 months. Local SEO is a compounding effort — the earlier you start, the sooner you're ahead of competitors.",
      },
      {
        q: "Do I need a website to benefit from local SEO?",
        a: "A website helps significantly, but even businesses without one can improve visibility through a well-optimized Google Business Profile, citations, and reviews. That said, we usually recommend at least a basic website for long-term growth.",
      },
      {
        q: "How do I choose the right local SEO experts in India for my business?",
        a: "Look for a team that audits before recommending anything, explains their process clearly, shows past results, and customizes strategy to your industry and city rather than offering the same package to every client.",
      },
      {
        q: "Can Eddinet help businesses with multiple locations?",
        a: "Yes. As a local SEO company in India, we manage multi-location Google Business Profiles, location-specific landing pages, and citation consistency across all your branches so each location ranks in its own area.",
      },
      {
        q: "What does it cost to work with a local SEO company in India?",
        a: "Pricing depends on your industry, competition, number of locations, and current website condition. We assess this during the initial audit and share a clear, customized quote — no vague packages, no hidden costs.",
      },
    ],
  },

  "enterprise-seo": {
    slug: "enterprise-seo",
    category: "seo",
    title: "Enterprise SEO",
    metaTitle: "Enterprise SEO Services in India | Eddinet",
    metaDescription:
      "Eddinet's enterprise SEO services in India are built for complex, cross-functional work — multi-location sites, large catalogs, technical architecture and corporate governance. Get a free enterprise SEO consultation.",
    heroHeading: "Enterprise SEO Services in Delhi NCR",
    heroSubheading:
      "Enterprise SEO isn't small-business SEO scaled up — it's hundreds of pages, multiple stakeholders, legacy tech, and a brand that can't afford experiments. Eddinet's enterprise SEO services in India are built for exactly this: complex, cross-functional work that moves the needle across your whole organization, not one landing page.",
    about:
      "If your SEO feels scattered across departments or rankings haven't moved despite real budget, that's not an effort problem — it's a structure problem. And that's where Eddinet comes in.\n\nEddinet is a full-service SEO partner built for organizations that need more than basic optimization checklists. We've worked with businesses managing multi-location websites, large product catalogs, multi-language content, and international domains — the kind of SEO work that requires coordination between marketing, IT, content, and leadership teams all at once.\n\nWhat sets us apart is that we don't treat enterprise SEO as \"regular SEO but bigger.\" It's a different discipline altogether, one that requires careful technical architecture planning, governance over content at scale, and reporting that speaks to both marketing managers and CFOs. As a growing enterprise SEO company in India, we've built our processes specifically around this complexity, so nothing falls through the cracks when a hundred people across three departments are involved in a single website.",
    features: [
      {
        title: "Enterprise Technical SEO Audits",
        description:
          "We conduct in-depth technical audits across your entire site architecture, identifying crawl budget issues, indexation problems, duplicate content, site speed bottlenecks, and structural issues that quietly limit rankings at scale.",
      },
      {
        title: "Large-Scale Content Strategy & Optimization",
        description:
          "For businesses with thousands of pages, we build scalable content frameworks, optimize existing content in batches, and create governance guidelines so every department producing content stays aligned with SEO best practices.",
      },
      {
        title: "Multi-Location & Multi-Domain SEO",
        description:
          "If your business operates across cities, states, or countries, we manage location-specific optimization, hreflang implementation, and domain structure strategy so each market performs on its own merit without cannibalizing others.",
      },
      {
        title: "Enterprise Link Building & Digital PR",
        description:
          "We build authoritative backlinks through digital PR, strategic partnerships, and content-driven outreach — the kind of link profile that matches the authority a large brand should already have.",
      },
      {
        title: "SEO Migration & Platform Support",
        description:
          "Replatforming, rebranding, or restructuring your site? We manage SEO through migrations to prevent the ranking and traffic drops that so often come with large-scale technical changes.",
      },
      {
        title: "Corporate SEO Services & Reporting",
        description:
          "As part of our corporate SEO services in India, we deliver reporting dashboards tailored to different stakeholders — technical detail for your dev team, performance summaries for marketing, and ROI-focused insights for leadership.",
      },
    ],
    benefits: [
      {
        title: "Organization-Wide Visibility Gains",
        description:
          "Improvements that compound across thousands of pages instead of a handful.",
      },
      {
        title: "Reduced Technical Risk",
        description:
          "Fewer costly mistakes during migrations, replatforming, or major site changes.",
      },
      {
        title: "Better Internal Alignment",
        description:
          "One clear SEO strategy that every department can work from, instead of conflicting efforts.",
      },
      {
        title: "Stronger Domain Authority",
        description:
          "Enterprise-grade link building and content strategy that builds lasting search equity.",
      },
      {
        title: "Scalable Systems, Not One-Off Fixes",
        description:
          "Frameworks and governance that keep working even as your site grows.",
      },
      {
        title: "Clearer ROI Reporting",
        description:
          "Insights that connect SEO performance directly to business outcomes leadership actually cares about.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Us – A Reliable Enterprise SEO Firm in India",
      points: [
        "We understand organizational complexity. From multiple stakeholders to legacy systems, we know enterprise SEO isn't just about strategy — it's about execution within a large, moving organization.",
        "We build for scale from day one. Every recommendation we make is designed to work across hundreds or thousands of pages, not just a handful of test cases.",
        "We communicate at every level. Whether it's a technical conversation with your dev team or a results conversation with leadership, we tailor communication so everyone stays informed and confident.",
        "We protect what you've already built. Enterprise brands have existing rankings and traffic to lose. Our approach prioritizes stability alongside growth, especially during migrations and major changes.",
        "We stay accountable with data. As an experienced enterprise SEO company in India, we report transparently on what's working, what isn't, and what we're doing about it — no vague promises, just clear numbers.",
      ],
    },
    process: {
      heading: "How We Execute Enterprise SEO Projects",
      steps: [
        {
          num: "01",
          title: "Discovery & Stakeholder Alignment",
          description:
            "We start by understanding your business structure, internal teams, existing tools, and current SEO performance — and align with every stakeholder who touches the website.",
        },
        {
          num: "02",
          title: "Comprehensive Technical & Content Audit",
          description:
            "We map out technical issues, content gaps, and competitive positioning across your entire digital footprint, not just a sample of pages.",
        },
        {
          num: "03",
          title: "Strategic Roadmap Development",
          description:
            "We prioritize fixes and opportunities based on business impact, resourcing, and timeline — giving you a realistic, phased plan instead of an overwhelming task list.",
        },
        {
          num: "04",
          title: "Execution & Cross-Team Coordination",
          description:
            "We work directly with your internal teams — developers, content writers, and marketing leads — to implement changes without disrupting day-to-day operations.",
        },
        {
          num: "05",
          title: "Monitoring, Reporting & Iteration",
          description:
            "We track rankings, organic traffic, and conversions at scale, adjusting strategy monthly based on real performance data across your full site.",
        },
      ],
    },
    faqs: [
      {
        q: "What makes enterprise SEO services in India different from regular SEO?",
        a: "Enterprise SEO deals with much larger websites, multiple stakeholders, complex technical architecture, and often multi-location or multi-language requirements — all of which need specialized processes that standard SEO packages aren't built to handle.",
      },
      {
        q: "How long does an enterprise SEO agency in India typically take to show results?",
        a: "Given the scale involved, initial technical improvements can show impact within 2 to 3 months, while full organizational impact across content, authority, and rankings usually builds over 6 to 12 months.",
      },
      {
        q: "Can an enterprise SEO company in India manage SEO across multiple websites or domains?",
        a: "Yes. Managing multi-domain and multi-location SEO is a core part of enterprise work, including hreflang setup, domain strategy, and avoiding keyword cannibalization between properties.",
      },
      {
        q: "Do you work with our internal marketing and development teams?",
        a: "Absolutely. Enterprise SEO firm engagements are collaborative by nature, and we coordinate directly with your developers, content teams, and marketing leadership throughout the project.",
      },
      {
        q: "What happens to our SEO during a website migration or rebrand?",
        a: "We manage the entire SEO side of migrations — redirects, technical mapping, and monitoring — to protect existing rankings and minimize traffic loss during the transition.",
      },
      {
        q: "How is reporting handled for corporate SEO services in India?",
        a: "We provide layered reporting — technical detail for your dev team, performance summaries for marketing, and business-impact metrics for leadership — so every stakeholder gets relevant, digestible information.",
      },
    ],
  },

  "b2b-seo": {
    slug: "b2b-seo",
    category: "seo",
    title: "B2B SEO",
    metaTitle: "B2B SEO Services in India | Eddinet",
    metaDescription:
      "Our B2B SEO services in India put your business in front of real decision-makers right when they are ready to buy — CTOs, founders and procurement heads with actual budgets. Get a free B2B SEO consultation.",
    heroHeading: "B2B SEO Services in Delhi NCR",
    heroSubheading:
      "Getting traffic to your website is easy. Getting inquiries from CTOs, Founders, and Procurement Heads who have actual budgets is the hard part. If your website brings in clicks but zero sales calls, you don't have a traffic problem — you have an intent problem. At Eddinet, our B2B SEO Services in India are built to put your business in front of real decision-makers right when they are ready to buy.",
    about:
      "Eddinet is a performance-led digital growth agency dedicated to closing the gap between technical search visibility and measurable pipeline growth.\n\nWe do not measure success through arbitrary keyword rankings or traffic spikes. Instead, we track metrics that align with business growth: qualified inbound leads, scheduled consultations, reduced customer acquisition costs (CAC), and pipeline revenue.\n\nOur team combines deep expertise in B2B search intent, technical architecture, content marketing, and conversion rate optimization (CRO) to provide your business with a clear competitive advantage.",
    features: [
      {
        title: "Intent-Based Keyword Research",
        description:
          "We target the exact search terms decision-makers use when evaluating or buying solutions. By prioritizing commercial intent over generic traffic, we connect your brand with buyers actively seeking your services.",
      },
      {
        title: "Website Optimization for B2B",
        description:
          "We refine your site layout and messaging to meet enterprise standards. A clean, professional structure builds immediate credibility with executive decision-makers from their first click.",
      },
      {
        title: "Decision-Focused Content",
        description:
          "We craft clear, authoritative content that answers key buying questions and addresses stakeholder pain points, guiding prospects smoothly through complex B2B buying cycles.",
      },
      {
        title: "Technical & On-Page SEO",
        description:
          "We optimize your site architecture, page speed, and backend setup for flawless search indexation and effortless user navigation across every page.",
      },
      {
        title: "Lead-Focused Strategy",
        description:
          "Our entire search strategy revolves around pipeline growth. We align organic visibility directly with your sales funnel to attract high-value, qualified business inquiries.",
      },
      {
        title: "Conversion Rate Optimization",
        description:
          "We strategically refine calls-to-action, form structures, and trust signals across your landing pages to turn casual visitors into booked consultation calls.",
      },
    ],
    benefits: [
      {
        title: "Shorter Sales Cycles",
        description:
          "Well-informed leads arrive with a clear understanding of your value proposition, speeding up initial conversations.",
      },
      {
        title: "Higher Average Contract Value",
        description:
          "Attract enterprise-level accounts that are actively seeking qualified, premium vendors.",
      },
      {
        title: "Lower Customer Acquisition Cost (CAC)",
        description:
          "Build a self-sustaining channel that reduces dependence on increasingly expensive paid ad channels.",
      },
      {
        title: "Predictable Pipeline Growth",
        description:
          "Organic search assets continue generating high-intent leads long after they are published.",
      },
      {
        title: "Sales & Marketing Alignment",
        description:
          "Attract leads that match your Ideal Customer Profile (ICP), ensuring your sales team focuses on high-value opportunities.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Us for B2B SEO Services in India",
      points: [
        "We understand complex buyer journeys. Our strategies are built around how B2B decisions actually get made, not simplified for a single-search, single-decision model.",
        "We prioritize pipeline over vanity metrics. Rankings and traffic matter, but we stay focused on what actually contributes to leads and revenue.",
        "We work well with technical and niche industries. From SaaS to industrial manufacturing, we know how to make specialized offerings understandable and search-friendly.",
        "We collaborate closely with your team. Whether it's your marketing team, sales leadership, or subject matter experts, we work with the people who understand your business best to build content that actually converts.",
        "We stay transparent at every step. No inflated promises — just clear strategy, honest reporting, and steady, measurable progress.",
      ],
    },
    process: {
      heading: "The 6-Step B2B Search Framework",
      steps: [
        {
          num: "01",
          title: "Business Understanding",
          description:
            "We analyze your services, target client profiles, and sales cycles to align search targeting directly with your revenue goals from day one.",
        },
        {
          num: "02",
          title: "Market & Buyer Analysis",
          description:
            "We study your industry landscape, direct competitors, and executive decision-makers to map out exactly how your ideal prospects evaluate vendors.",
        },
        {
          num: "03",
          title: "Strategy Planning",
          description:
            "We build a phased SEO strategy mapped to every stage of your buying funnel, ensuring every page serves a clear purpose in driving qualified prospects.",
        },
        {
          num: "04",
          title: "Website & SEO Setup",
          description:
            "We clean up site architecture, backend technical health, and on-page elements to ensure effortless search indexation and an executive-ready user experience.",
        },
        {
          num: "05",
          title: "Content Development",
          description:
            "We produce authoritative content that addresses technical questions, compares solutions, and builds instant trust with buying committees.",
        },
        {
          num: "06",
          title: "Lead Optimization",
          description:
            "We refine user paths, strategic CTAs, and lead capture forms across your key pages to systematically turn search visitors into serious inquiries.",
        },
      ],
    },
    faqs: [
      {
        q: "How is B2B SEO different from regular SEO?",
        a: "B2B SEO targets longer, multi-stakeholder buying journeys instead of quick, single-search decisions. It focuses on content and keywords that support research, comparison, and evaluation stages, not just immediate purchase intent.",
      },
      {
        q: "How long does it take to see results?",
        a: "Given longer B2B sales cycles, initial ranking improvements typically show within 3 to 4 months, with meaningful lead and pipeline impact building over 6 to 9 months.",
      },
      {
        q: "Can SEO really generate qualified B2B leads, not just traffic?",
        a: "Yes, when strategy is built around actual buyer intent — mapping content to each stage of the decision process rather than chasing high-volume but low-relevance keywords.",
      },
      {
        q: "Do you work with niche or technical industries?",
        a: "Yes. We regularly work with SaaS, IT services, manufacturing, and consulting businesses, where making complex offerings clear and search-friendly is central to the strategy.",
      },
      {
        q: "Will we need to be involved in content creation?",
        a: "Some input is usually valuable, especially from subject matter experts, but we handle strategy, planning, and optimization so the process stays light on your team's time.",
      },
      {
        q: "How do you measure success beyond rankings?",
        a: "We track organic traffic quality, form submissions, demo requests, and where possible, pipeline contribution — so you can see SEO's actual impact on revenue, not just search visibility.",
      },
    ],
  },

  "technical-seo": {
    slug: "technical-seo",
    category: "seo",
    title: "Technical SEO",
    metaTitle: "Technical SEO Services in India | Eddinet",
    metaDescription:
      "Eddinet provides professional technical SEO services in India — fixing backend bottlenecks so search engines can rank your pages effortlessly and drive qualified buyers to your business. Get a free audit.",
    heroHeading: "Technical SEO Services in Delhi NCR",
    heroSubheading:
      "Eddinet provides professional technical SEO services in India to take complete responsibility for your website's technical health, fixing backend bottlenecks so search engines can rank your pages effortlessly and drive qualified buyers directly to your business.",
    about:
      "We aren't a traditional digital marketing agency that bombards you with generic automated reports or surface-level fixes. Eddinet functions as your dedicated technical SEO execution partner, bridging the gap between complex web development and real organic revenue growth.\n\nAs a results-oriented SEO company in India, we help you solve the exact structural, server-side, and indexing challenges holding your domain back. We look beyond vanity metrics like impressions and focus on what directly impacts your bottom line: crawl efficiency, site speed, clean indexation, and frictionless client conversions.",
    features: [
      {
        title: "In-Depth Technical Audits",
        description:
          "We perform deep code audits to find crawl blocks, rendering errors, and indexing leaks, providing a clear, revenue-prioritized action plan instead of bloated automated reports.",
      },
      {
        title: "Core Web Vitals & Speed Optimization",
        description:
          "We eliminate page speed delays by optimizing heavy scripts, server response times (TTFB), images, and mobile rendering paths to maximize user retention.",
      },
      {
        title: "Site Architecture & Internal Linking",
        description:
          "We re-engineer your site hierarchy and internal link flow so search engines can easily discover, crawl, and rank your highest-converting pages.",
      },
      {
        title: "Crawling, Indexing & Rendering Fixes",
        description:
          "Whether on JavaScript frameworks like React/Angular or custom platforms, we fix rendering bugs, robots.txt directives, XML sitemaps, and canonical errors.",
      },
      {
        title: "Seamless Website Migrations",
        description:
          "We manage complex CMS switches and URL restructuring with precise 301 redirection mapping to protect existing search authority and prevent traffic drops.",
      },
    ],
    benefits: [
      {
        title: "Lower Bounce Rates",
        description:
          "Fast-loading, responsive pages keep visitors engaged longer and prevent potential clients from jumping to competitors.",
      },
      {
        title: "Maximum Crawl Budget Efficiency",
        description:
          "Googlebot spends its crawling capacity indexing your high-converting money pages instead of getting trapped in low-value URLs.",
      },
      {
        title: "Higher Conversion Rates",
        description:
          "A smooth, bug-free website creates a seamless booking or buying path for real visitors.",
      },
      {
        title: "Algorithm-Proof Stability",
        description:
          "A clean, technically optimized site protects your rankings against major Google core algorithm updates.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Eddinet For Technical SEO",
      points: [
        "Engineering-First Approach: We treat SEO as a technical discipline, mastering DOM rendering, JavaScript pipelines, and server performance.",
        "Zero Jargon: We translate complex server and rendering issues into clear business impact so you always understand the value.",
        "Focus on Revenue: Rankings only matter when they drive growth. Every fix we deploy is tied directly to lead generation.",
        "Custom Stack Execution: We tailor our technical roadmap specifically to your site's codebase, tech stack, and business goals.",
      ],
    },
    process: {
      heading: "Simple, Transparent, Results-Driven",
      steps: [
        {
          num: "01",
          title: "Log Analysis & Crawl Diagnostics",
          description:
            "We inspect real Googlebot server logs to fix broken links and eliminate wasted crawl budget.",
        },
        {
          num: "02",
          title: "Code & Security Audit",
          description:
            "We verify mobile-friendliness, HTTPS security, schema markup, and rendering efficiency.",
        },
        {
          num: "03",
          title: "Prioritized Action Roadmap",
          description:
            "We map out fixes by impact versus effort, ensuring high-value quick wins are deployed first.",
        },
        {
          num: "04",
          title: "Hands-On Developer Support",
          description:
            "Our team handles code changes directly or collaborates closely with your developers to push updates safely.",
        },
        {
          num: "05",
          title: "Live Verification & Reporting",
          description:
            "We re-crawl and validate all fixes in Google Search Console, delivering clear performance reports.",
        },
      ],
    },
    faqs: [
      {
        q: "What are Technical SEO Services, and why do I need them?",
        a: "Technical SEO fixes backend website errors like slow speed, broken links, and bad site structure. It ensures search engines can easily find, crawl, and rank your site so your content gets organic traffic.",
      },
      {
        q: "How is Eddinet different from other SEO companies in India?",
        a: "Most agencies send automated reports with superficial fixes. Eddinet fixes deep code, JavaScript rendering issues, and server bottlenecks directly, prioritizing fixes that increase conversions and sales.",
      },
      {
        q: "How fast will I see results?",
        a: "Technical fixes often show impact in 2 to 6 weeks. Fixing critical crawl blocks, indexing errors, or severe speed issues allows search bots to re-index and re-rank your pages quickly.",
      },
      {
        q: "Do you need direct access to my website code?",
        a: "No. We can either make the technical fixes directly on your CMS/codebase, or provide ready-to-use technical instructions for your internal development team to deploy.",
      },
      {
        q: "Can you handle technical SEO for React, Next.js, or Angular websites?",
        a: "Yes. We specialize in modern JavaScript frameworks, setting up Server-Side Rendering (SSR) and dynamic rendering so Googlebot reads and indexes your application correctly.",
      },
    ],
  },

  "international-seo": {
    slug: "international-seo",
    category: "seo",
    title: "International SEO",
    metaTitle: "International SEO Services in India | Eddinet",
    metaDescription:
      "Eddinet helps businesses expand across countries and languages without losing the rankings they've already earned at home — hreflang, geo-targeting and localized content. Get a free international SEO consultation.",
    heroHeading: "International SEO Services in Delhi NCR",
    heroSubheading:
      "Eddinet helps businesses expand across countries and languages without losing the rankings they've already earned at home. International SEO services aren't just translating — it's structure, and getting that structure wrong is what usually goes unnoticed until traffic starts dropping.",
    about:
      "Expanding into new markets brings technical decisions most SEO strategies never touch — hreflang tags, domain structure, geo-targeting, duplicate content across language versions. As a SEO company in India working with businesses going global, Eddinet focuses on getting these foundations right first, because everything else in an international strategy depends on them.\n\nWe've guided businesses through decisions like choosing between subdirectories, subdomains, and country-code domains, and building content strategies that reflect real regional search behavior instead of direct translation. Our approach treats every new market as its own search environment, not a copy-paste extension of your existing site.",
    features: [
      {
        title: "Site Structure & Domain Strategy",
        description:
          "We help you choose the right international structure — subdirectories, subdomains, or ccTLDs — based on your resources, markets, and long-term expansion goals.",
      },
      {
        title: "Hreflang Implementation & Auditing",
        description:
          "We implement and audit hreflang tags so search engines show the correct language and regional version of your pages to the right users, every time.",
      },
      {
        title: "Native Keyword Research by Market",
        description:
          "We research keywords directly within each target language and region, since search behavior often looks nothing like a direct translation of your existing terms.",
      },
      {
        title: "Localized Content Strategy",
        description:
          "We guide content localization built around cultural context and local intent, not just translated copy, so your message actually connects in each market.",
      },
      {
        title: "Geo-Targeting & Search Console Setup",
        description:
          "We configure geo-targeting and international properties correctly, helping search engines understand exactly which regions each part of your site is meant to serve.",
      },
      {
        title: "Cross-Market Technical Audits",
        description:
          "We audit for issues specific to global sites — duplicate content across regions, incorrect canonicals, and crawl inefficiencies across multiple site versions.",
      },
    ],
    benefits: [
      {
        title: "Accurate Audience Targeting",
        description:
          "The correct version of your site reaches the correct regional audience automatically.",
      },
      {
        title: "No Internal Competition",
        description:
          "Proper hreflang and canonical setup stops your own pages from competing against each other.",
      },
      {
        title: "Genuine Local Relevance",
        description:
          "Market-specific research and content outperform generic translated pages.",
      },
      {
        title: "Room to Grow",
        description:
          "A solid structure supports adding new markets later without rebuilding from scratch.",
      },
      {
        title: "Better User Trust",
        description:
          "Visitors land on content that actually matches their language and region.",
      },
      {
        title: "Protected Home-Market Rankings",
        description:
          "Expansion done right doesn't cost you the visibility you've already built.",
      },
    ],
    whyChooseUs: {
      heading: "Why Businesses Pick Eddinet as Their SEO Company in India",
      points: [
        "We take structure seriously. Our international SEO services in India start with getting the technical foundation right, since that's where most global SEO mistakes actually happen.",
        "We research natively, not by translation. Every market gets its own keyword research based on how people there actually search.",
        "We protect what you've already built. New market strategies are designed to add growth without disrupting your existing rankings.",
        "We coordinate across teams easily. International SEO touches development, content, and regional marketing, and we work smoothly across all of them.",
        "We report market by market. You'll always know exactly which regions are performing and why, not just one blended number.",
      ],
    },
    process: {
      heading: "How Eddinet Works, Step by Step",
      steps: [
        {
          num: "01",
          title: "Market & Structure Assessment",
          description:
            "We evaluate your target markets and current site setup to determine the right international approach for your business.",
        },
        {
          num: "02",
          title: "Architecture & Strategy Planning",
          description:
            "We define the ideal structure, hreflang mapping, and content approach for each market you're entering.",
        },
        {
          num: "03",
          title: "Implementation",
          description:
            "We implement structural and technical changes, coordinating with your development team where needed.",
        },
        {
          num: "04",
          title: "Localized Rollout",
          description:
            "We guide the creation of market-specific content built on native keyword research, not translated assumptions.",
        },
        {
          num: "05",
          title: "Market-by-Market Monitoring",
          description:
            "We track each region's performance individually, refining strategy based on how every market actually responds.",
        },
      ],
    },
    faqs: [
      {
        q: "What's the difference between international SEO and regular SEO?",
        a: "International SEO involves technical elements like hreflang tags, geo-targeting, and site structure decisions specific to serving multiple countries or languages, which standard SEO doesn't cover.",
      },
      {
        q: "Should I use subdomains, subdirectories, or country-code domains?",
        a: "It depends on your resources, target markets, and long-term goals — we assess your specific situation before recommending a structure.",
      },
      {
        q: "Is translated content enough for international SEO?",
        a: "No, direct translation often misses local search behavior and cultural nuance. Localized keyword research and content strategy typically perform much better.",
      },
      {
        q: "Will expanding internationally affect my existing rankings?",
        a: "Not if done correctly. Proper hreflang implementation and site structure prevent new market pages from competing with or diluting your existing rankings.",
      },
      {
        q: "How long does international SEO take to show results?",
        a: "Initial technical setup can be completed within weeks, but ranking growth in new markets typically takes 3 to 6 months depending on competition.",
      },
      {
        q: "Can you help us target multiple countries with the same language?",
        a: "Yes, we set up proper geo-targeting and hreflang configuration so each country version reaches the correct audience, even when the language is shared.",
      },
    ],
  },

  "programmatic-seo": {
    slug: "programmatic-seo",
    category: "seo",
    title: "Programmatic SEO",
    metaTitle: "Programmatic SEO Services in India | Eddinet",
    metaDescription:
      "Eddinet provides specialized programmatic SEO services in India for businesses that need thousands of pages — location, product variation and comparison pages built on real data. Get a free consultation.",
    heroHeading: "Programmatic SEO Services in Delhi NCR",
    heroSubheading:
      "Eddinet provides specialized Programmatic SEO Services in India for businesses that need thousands of pages, not ten — city pages, product variations, comparison pages — without flooding their site with thin, repetitive content. Scale is easy to get wrong; done right, it's one of the fastest ways to capture search demand you're currently missing entirely.",
    about:
      "Programmatic SEO gets misunderstood as simply generating pages in bulk. Done properly, it's a careful balance of real data, meaningful variation, and templates built around genuine search intent. As a SEO company in India that's built exactly this kind of system, Eddinet focuses on scale that actually holds up — pages that rank because they're useful, not just numerous.\n\nWe've helped businesses avoid the common trap of generic, duplicate-feeling pages by anchoring every template in real data and clear user value, so growth in page count doesn't come at the cost of quality or rankings.",
    features: [
      {
        title: "Opportunity Research",
        description:
          "We identify where programmatic SEO genuinely makes sense for your business — locations, comparisons, product variations — based on real search volume and business relevance.",
      },
      {
        title: "Data Structuring & Template Design",
        description:
          "We structure the data behind your pages and design templates that pull unique, relevant information into each one, avoiding repetitive, generic content.",
      },
      {
        title: "On-Page Optimization at Scale",
        description:
          "We build titles, headers, internal linking, and schema directly into your templates, so every generated page follows SEO best practices from the start.",
      },
      {
        title: "Internal Linking Architecture",
        description:
          "We design linking structures that help search engines discover and understand relationships between your programmatic pages efficiently.",
      },
      {
        title: "Quality Control & Enrichment",
        description:
          "We build quality checks and enrichment strategies into the process, ensuring pages provide real value instead of feeling automated or thin.",
      },
      {
        title: "Performance Monitoring by Page Category",
        description:
          "We track performance across entire page sets, not just individual URLs, spotting patterns that help refine templates over time.",
      },
    ],
    benefits: [
      {
        title: "Massive Content Coverage",
        description:
          "Reach thousands of relevant searches without a proportional jump in manual work.",
      },
      {
        title: "Consistent Quality",
        description:
          "Every page follows the same optimized structure, avoiding inconsistent results.",
      },
      {
        title: "Faster Market Coverage",
        description:
          "Capture location or product-based opportunities far quicker than manual page creation.",
      },
      {
        title: "Better Use of Your Team's Time",
        description:
          "Your people focus on strategy while the system handles scale.",
      },
      {
        title: "Long-Tail Search Capture",
        description:
          "Reach highly specific queries that would be impractical to target one page at a time.",
      },
      {
        title: "A Foundation That Grows With Your Data",
        description:
          "As your business expands, your page footprint can expand right alongside it.",
      },
    ],
    whyChooseUs: {
      heading: "Why Businesses Pick Eddinet as Their SEO Company in India",
      points: [
        "Quality First, Scale Second: We prioritize real page value so your rankings remain sustainable long-term.",
        "Intent-Focused Templates: Every template reflects actual user search queries rather than filler variations.",
        "Technical Scale Management: We optimize internal linking, crawl efficiency, and indexation right from launch.",
        "Data-Driven Collaboration: We structure your data carefully to power high-performing automated pages.",
        "Pattern-Based Performance Tracking: We analyze entire page categories together to continuously refine your system.",
      ],
    },
    process: {
      heading: "How Eddinet Works, Step by Step",
      steps: [
        {
          num: "01",
          title: "Opportunity Identification",
          description:
            "We analyze your data and search demand to identify where programmatic SEO can realistically drive results.",
        },
        {
          num: "02",
          title: "Template & Structure Planning",
          description:
            "We design the page structure, deciding what data points and SEO elements each page needs to include.",
        },
        {
          num: "03",
          title: "Build & Implementation",
          description:
            "We work with your team or developers to implement templates and generate pages from structured data.",
        },
        {
          num: "04",
          title: "Quality Review",
          description:
            "We review pages for uniqueness and SEO compliance before and after launch, adjusting templates as needed.",
        },
        {
          num: "05",
          title: "Monitoring & Iteration",
          description:
            "We track performance by page category, refining the approach based on what's actually working.",
        },
      ],
    },
    faqs: [
      {
        q: "What is programmatic SEO, exactly?",
        a: "It's a strategy for creating large numbers of optimized pages using data-driven templates, typically for location pages, product variations, or comparison pages, rather than building each page manually.",
      },
      {
        q: "Won't generating thousands of pages create duplicate content issues?",
        a: "Not if done correctly. The key is designing templates that pull in genuinely unique, relevant data for each page rather than repeating the same content with small tweaks.",
      },
      {
        q: "What kind of businesses benefit most from programmatic SEO?",
        a: "Businesses with location-based services, large product catalogs, or naturally scalable data — like real estate, marketplaces, or multi-location service providers — typically benefit the most.",
      },
      {
        q: "How much data do we need to get started?",
        a: "It varies by use case, but you'll generally need structured data covering the variables your pages will be built around, such as locations, products, or categories.",
      },
      {
        q: "How long does it take to see results from programmatic SEO?",
        a: "Initial indexing can happen within weeks, but meaningful ranking growth across page sets typically takes 3 to 6 months depending on competition and quality.",
      },
      {
        q: "Can programmatic SEO work alongside our existing content strategy?",
        a: "Yes, it typically complements existing content rather than replacing it, covering search opportunities that would be impractical to target manually.",
      },
    ],
  },

  "amazon-seo": {
    slug: "amazon-seo",
    category: "seo",
    title: "Amazon SEO",
    metaTitle: "Amazon SEO Services in India | Eddinet",
    metaDescription:
      "Eddinet helps sellers stop losing sales to page-three listings. Amazon SEO services in India built around A9/A10 — keywords, content, images and reviews as one system. Get a free Amazon SEO audit.",
    heroHeading: "Amazon SEO Services in Delhi NCR",
    heroSubheading:
      "Eddinet helps sellers stop losing sales to page-three listings. On Amazon, ranking has nothing to do with Google — it's about A9/A10 and what actually gets your product in front of a shopper who's ready to buy right now.",
    about:
      "Amazon runs on its own rules — relevance, conversion rate, and customer satisfaction signals, not backlinks or domain authority. As a SEO company in India working with sellers and brands, Eddinet focuses specifically on what moves the needle inside Amazon's marketplace, not generic SEO principles applied where they don't fit.\n\nWe've helped listings move from buried and ignored to consistently visible, by treating keywords, content, images, and reviews as one connected system instead of separate tasks. Ranking without conversion doesn't grow a business — so we optimize for both at once.",
    features: [
      {
        title: "Amazon Keyword Research",
        description:
          "We identify the exact terms your customers search for on Amazon, including high-intent, long-tail keywords competitors often miss entirely.",
      },
      {
        title: "Listing Optimization",
        description:
          "We rewrite titles, bullet points, descriptions, and backend search terms to satisfy both Amazon's algorithm and the shopper deciding whether to click \"Buy Now\".",
      },
      {
        title: "A+ Content & Enhanced Brand Content",
        description:
          "We help design A+ Content that strengthens brand presentation and lifts conversion rates directly on your product pages.",
      },
      {
        title: "Image & Visual Strategy Guidance",
        description:
          "We advise on image sequencing and visual content, since click-through and conversion rate are direct ranking signals on Amazon.",
      },
      {
        title: "Review & Rating Strategy",
        description:
          "We guide approaches to build genuine reviews, since both volume and rating quality influence rankings and buyer trust simultaneously.",
      },
      {
        title: "Amazon Audits & Competitor Benchmarking",
        description:
          "We audit your listings against top competitors, identifying specific gaps in keywords, content, and conversion elements.",
      },
    ],
    benefits: [
      {
        title: "Higher Listing Visibility",
        description:
          "Better rankings for the exact terms your customers search.",
      },
      {
        title: "Stronger Conversion Rates",
        description:
          "Optimized content and visuals that turn views into actual purchases.",
      },
      {
        title: "More Organic Sales",
        description:
          "Reduced reliance on Amazon PPC for consistent traffic.",
      },
      {
        title: "Smarter Ad Spend",
        description:
          "Organic visibility and paid campaigns supporting each other instead of competing.",
      },
      {
        title: "Greater Buyer Trust",
        description:
          "Well-structured listings and strong reviews build confidence before purchase.",
      },
      {
        title: "Sustained, Long-Term Growth",
        description:
          "Ongoing optimization keeps you competitive as the marketplace shifts.",
      },
    ],
    whyChooseUs: {
      heading: "Why Businesses Pick Eddinet as Their SEO Company in India",
      points: [
        "We speak Amazon's language, not just Google's. Our Amazon SEO services in India are built around A9/A10 specifically, not generic SEO applied incorrectly.",
        "We optimize for the sale, not just the click. Every recommendation considers both visibility and what actually convinces someone to buy.",
        "We look at the full listing, not one piece. Keywords, images, and reviews all get treated as part of the same system.",
        "We benchmark against real competitors. Our strategies reflect what's genuinely working in your specific category.",
        "We keep up as Amazon changes. Algorithm shifts and new best practices get folded into our approach continuously.",
      ],
    },
    process: {
      heading: "How Eddinet Works, Step by Step",
      steps: [
        {
          num: "01",
          title: "Account & Listing Audit",
          description:
            "We review your current listings and competitor positioning to find where the biggest opportunities exist.",
        },
        {
          num: "02",
          title: "Keyword & Strategy Planning",
          description:
            "We build a keyword strategy prioritizing terms with real buyer intent and realistic ranking potential.",
        },
        {
          num: "03",
          title: "Listing Optimization",
          description:
            "We rewrite and optimize titles, bullet points, and backend keywords across your catalog.",
        },
        {
          num: "04",
          title: "Content & Visual Enhancement",
          description:
            "We guide A+ Content and image strategy improvements to strengthen conversion alongside visibility.",
        },
        {
          num: "05",
          title: "Monitoring & Refinement",
          description:
            "We track rankings and conversion rates, adjusting as Amazon's algorithm and your competition shift.",
        },
      ],
    },
    faqs: [
      {
        q: "How is Amazon SEO different from Google SEO?",
        a: "Amazon SEO focuses on Amazon's own algorithm, which prioritizes keyword relevance, conversion rate, and customer satisfaction, rather than backlinks and general web authority.",
      },
      {
        q: "How long does it take to see improved rankings on Amazon?",
        a: "Initial listing changes can show impact within a few weeks, though strong, sustained rankings usually build over a couple of months alongside consistent sales and reviews.",
      },
      {
        q: "Do you help with Amazon PPC as well?",
        a: "Our focus is organic Amazon SEO, but we help ensure your organic and paid strategies complement rather than compete with each other.",
      },
      {
        q: "Can Amazon SEO help if I have very few reviews?",
        a: "Yes, listing and keyword optimization still improve visibility, but building a genuine review strategy alongside it will significantly strengthen rankings and conversions over time.",
      },
      {
        q: "Will you write my product listing content?",
        a: "Yes, we handle title, bullet point, and description optimization, along with backend search term and A+ Content guidance.",
      },
      {
        q: "Does Amazon SEO work the same across all product categories?",
        a: "The core principles stay consistent, but keyword competition and buyer behavior vary by category, so we tailor strategy accordingly.",
      },
    ],
  },

  // ==========================================================================
  //  DESIGN & CREATIVE CHILD PAGES  (/services/design-creative/<slug>)
  // ==========================================================================

  "graphic-designing": {
    slug: "graphic-designing",
    category: "design-creative",
    title: "Graphic Designing",
    metaTitle: "Graphic Designing & SEO Company in India | Eddinet",
    metaDescription:
      "Design That Speaks. Rankings That Deliver. Eddinet pairs sharp graphic designing with a SEO company in India approach — so brands get seen, understood and chosen. Get a free consultation.",
    heroHeading: "Graphic Designing Services in Delhi NCR",
    heroSubheading:
      "If your website looks average and gets lost on page two of Google, you're leaving money on the table every single day. At Eddinet, we sit at the meeting point of two things every growing brand needs: sharp graphic designing that makes people stop scrolling, and a SEO company in India approach that makes sure they actually find you in the first place.",
    about:
      "We've worked with founders who had a great product but a forgettable logo. We've worked with businesses ranking on page five for keywords their competitors owned for years. In both cases, the fix wasn't complicated; it was consistent, strategic work done by people who understand Indian markets, Indian buyers, and what actually moves the needle online.\n\nEddinet is a Delhi-based digital growth partner built by people who got tired of agencies overpromising and underdelivering. We're not the biggest name in the industry, and we're fine with that — because our clients don't hire us to be famous; they hire us to grow.\n\nOur team is a mix of designers who've spent years inside brand studios, SEO specialists who've handled everything from local shop websites to enterprise-level portals, and strategists who actually read the analytics dashboard instead of just screenshotting it for a monthly report. What ties us together is a simple belief: a business's online presence should look as good as its actual product, and it should be easy for the right customer to find.\n\nWe work with startups, D2C brands, clinics, real estate developers, educational institutes, and established companies across India who want their digital presence to finally match their ambition.",
    features: [
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
      heading: "Why Choose Us",
      points: [
        "We don't outsource your work to random freelancers. Every project is handled by our in-house team, so quality stays consistent.",
        "We explain our decisions. If we recommend a keyword strategy or a design direction, we'll tell you why — no vague jargon.",
        "We move at a realistic pace. Good SEO and good design both take real work; we won't promise page-one rankings in a week, but we will show you steady, honest progress.",
        "We stay involved after launch. Our work doesn't end when a design is delivered or a campaign goes live — we track, adjust, and keep improving.",
        "We've done this across industries. From healthcare to real estate to e-commerce, we've learned what works and what doesn't, so you're not paying for our learning curve.",
      ],
    },
    process: {
      heading: "Our Graphic Designing Process",
      steps: [
        {
          num: "01",
          title: "Discovery Call",
          description:
            "We start by understanding your business, your audience, and what \"success\" actually looks like for you, not just generic KPIs.",
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
    faqs: [],
  },

  "logo-designing": {
    slug: "logo-designing",
    category: "design-creative",
    title: "Logo Designing",
    metaTitle: "Logo Designing Services in India | Eddinet",
    metaDescription:
      "Running a business today means competing for attention every day — on Google, Instagram, WhatsApp, everywhere your customer looks. Eddinet designs logos people remember. Request a free consultation.",
    heroHeading: "Logo Designing Services in Delhi NCR",
    heroSubheading:
      "Running a business today means competing for attention every single day — on Google, on Instagram, on WhatsApp, everywhere your customer looks. That's where Eddinet comes in. We're a full-service digital agency built around one simple idea: your brand should look as good as the work you actually do.",
    about:
      "Whether you need a logo that people remember, a website that converts visitors into paying customers, or an SEO company in India that actually understands how Google ranks websites in 2026, we handle it under one roof, with one team, and one point of contact. No jargon-heavy reports. No disappearing after the contract is signed. Just steady, honest work that moves the needle for your business.\n\nEddinet started with a frustration a lot of business owners share — hiring five different freelancers for five different jobs and still ending up with a brand that doesn't feel connected. A logo from one designer, a website from another developer, and an SEO \"expert\" who disappears after month two. We built Eddinet to fix exactly that.\n\nToday, we're a team of designers, developers, SEO specialists, and content writers working together under one roof in India, serving businesses across the country and abroad. We've worked with startups just getting off the ground, local shops trying to compete online, and established companies looking to scale further.\n\nWhat hasn't changed since day one is our approach: understand the business first, then design the strategy around it, not the other way around. We're not interested in template solutions. We're interested in results you can actually measure — more calls, more leads, more sales.",
    features: [
      {
        title: "Custom Logo Concepts",
        description:
          "Custom logo concepts based on your brand story, not stock templates — a mark that says something about you in half a second.",
      },
      {
        title: "Complete Brand Identity Kits",
        description:
          "Color palette, typography and usage guidelines that keep your brand consistent across every touchpoint.",
      },
      {
        title: "Multiple Revision Rounds",
        description:
          "Iteration until you're genuinely happy, not just satisfied.",
      },
      {
        title: "Print-Ready & Web-Ready Files",
        description:
          "Your logo delivered in every format you'll ever need — from business card to billboard.",
      },
      {
        title: "Business Stationery Design",
        description:
          "Letterheads, visiting cards and email signatures that carry your brand consistently.",
      },
      {
        title: "SEO Company in India — Rankings That Bring Real Customers",
        description:
          "On-page SEO, keyword research based on how your actual customers search, local SEO, content-led SEO, link building through genuine websites, and monthly reporting that tells you what changed and why it matters.",
      },
    ],
    benefits: [
      {
        title: "Everything Under One Roof",
        description:
          "Logo design, website, SEO, ads, and content handled by one coordinated team instead of five different vendors.",
      },
      {
        title: "Transparent Pricing",
        description:
          "No hidden costs, no surprise invoices halfway through a project.",
      },
      {
        title: "Real Reporting",
        description:
          "You'll always know exactly where your money and effort are going.",
      },
      {
        title: "Faster Turnaround",
        description:
          "Dedicated designers and writers mean deadlines are actually met.",
      },
      {
        title: "Scalable Solutions",
        description:
          "Start with what you need today, add services as your business grows.",
      },
      {
        title: "Direct Communication",
        description:
          "You deal with people who know your account, not a rotating support queue.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Us",
      points: [
        "We treat your business like it's ours. We'd rather build a relationship that lasts years, which means we genuinely care whether your rankings improve or your logo actually gets used consistently across your platforms.",
        "We don't oversell. If SEO is going to take four months to show real movement, we'll tell you that on day one — not after you've already paid for three months of vague updates.",
        "Experienced, hands-on team. Your project isn't handed to a junior and forgotten. Senior designers and strategists stay involved from the first call to the final delivery.",
        "Proven across industries. We've designed logos and run SEO for doctors, real estate businesses, e-commerce brands, educational institutes, and local service providers — so we understand that a bakery's marketing needs look nothing like a law firm's.",
        "Results you can actually see. More website visitors, better search rankings, a logo you're proud to put on a hoarding — that's the standard we hold ourselves to, every single time.",
      ],
    },
    process: {
      heading: "Our Process",
      steps: [
        {
          num: "01",
          title: "Discovery Call",
          description:
            "We start by listening to your business, your goals, your past experiences with agencies (good or bad), and where you want to be in six months.",
        },
        {
          num: "02",
          title: "Research & Strategy",
          description:
            "Before we design a single pixel or write a single line of code, we research your competitors, your industry, and your target audience so every decision has a reason behind it.",
        },
        {
          num: "03",
          title: "Design & Development",
          description:
            "Whether it's a logo, a website, or a content calendar, our team builds it with your brand guidelines and business goals front and centre.",
        },
        {
          num: "04",
          title: "Feedback & Refinement",
          description:
            "We share drafts early and often. Your feedback shapes the final output — this isn't a \"take it or leave it\" process.",
        },
        {
          num: "05",
          title: "Launch & Optimisation",
          description:
            "Once approved, we launch and then we keep watching. Rankings, ad performance, and website behaviour are tracked continuously so nothing sits stagnant.",
        },
        {
          num: "06",
          title: "Reporting & Growth Planning",
          description:
            "You get clear, honest reports every month, along with a conversation about what's working and what we're changing next.",
        },
      ],
    },
    faqs: [],
  },

  "brand-identity-design": {
    slug: "brand-identity-design",
    category: "design-creative",
    title: "Brand Identity Design",
    metaTitle: "Brand Identity Design Services in India | Eddinet",
    metaDescription:
      "Logos That Speak. Brands That Stay. Eddinet builds a brand identity design people actually remember — a complete visual language across every touchpoint. Book a free consultation.",
    heroHeading: "Brand Identity Design Services in Delhi NCR",
    heroSubheading:
      "Logos That Speak. Brands That Stay. Eddinet helps businesses build a Brand Identity Design that people actually remember — not just a logo sitting on a website, but a complete visual language that shows up consistently across every touchpoint your customer sees.",
    about:
      "Most businesses in India spend lakhs on marketing and still struggle to be remembered. Why? Because nobody's paying attention to the one thing that actually sticks in a customer's mind — their brand identity.\n\nAt Eddinet, we don't treat Brand Identity Design as \"just a logo project.\" We look at how your brand looks, feels, and communicates everywhere — your website, your packaging, your social media, your invoices, even your email signature. A scattered brand confuses people. A consistent one builds trust, and trust is what actually converts a visitor into a paying customer.\n\nWe've worked with founders who came to us with nothing more than an idea and a name, and with established companies that had an outdated logo dragging down an otherwise good business. Either way, the process starts the same way: understanding what your brand stands for before we open a single design tool.\n\nAnd here's something most agencies won't tell you — a strong brand identity also makes your digital marketing cheaper and faster to scale. When your visuals are consistent, your ads perform better, your website converts more, and even your SEO efforts get a boost because people recognise and trust your brand when they see it in search results. That's exactly why we pair our design work closely with our team that also runs as a dedicated SEO company in India — because a great-looking brand that nobody can find online is only half the job done.\n\nEddinet is a design-and-growth studio based in India, working with businesses that want to look as good as they perform. We're not a giant agency with a hundred account managers between you and the designer. When you work with us, you talk directly to the people actually building your brand.",
    features: [
      {
        title: "Logo Design & Brand Identity Design",
        description:
          "This is where it all starts. We design logos that aren't just visually nice but actually mean something, built around your business goals, your audience, and what makes you different from the next ten competitors doing the same thing.",
      },
      {
        title: "Brand Guidelines & Style Manuals",
        description:
          "Colours, fonts, spacing, tone of voice — we document everything so your brand looks the same whether it's your Instagram post or your office signage.",
      },
      {
        title: "Business Stationery & Collateral Design",
        description:
          "Business cards, letterheads, invoices, ID cards — small things people overlook, but they're often the first physical impression of your brand.",
      },
      {
        title: "Packaging & Product Design",
        description:
          "For product-based businesses, we design packaging that grabs attention on a shelf or a delivery box and reflects your brand's personality at first glance.",
      },
      {
        title: "Social Media & Digital Brand Kits",
        description:
          "Templates, highlight covers, post formats, and ad creatives designed around your brand identity so your social presence looks planned, not random.",
      },
      {
        title: "Brand Positioning & Messaging",
        description:
          "Design without the right message falls flat. We help define how your brand talks — tone, tagline direction, and the story you tell your customers.",
      },
    ],
    benefits: [
      {
        title: "Instant Recognition",
        description:
          "A consistent identity means people recognise your brand within seconds, on any platform.",
      },
      {
        title: "Higher Perceived Value",
        description:
          "A professional look allows you to charge more without customers questioning it.",
      },
      {
        title: "Better Ad Performance",
        description:
          "Consistent, well-designed creatives typically get better click-through rates than generic ones.",
      },
      {
        title: "Stronger Customer Trust",
        description:
          "An inconsistent, outdated brand quietly makes people doubt your credibility, even if your product is great.",
      },
      {
        title: "Easier Marketing Across Channels",
        description:
          "Once your identity is locked in, every future campaign, post, or ad gets faster and cheaper to produce.",
      },
      {
        title: "Long-Term Brand Equity",
        description:
          "A strong identity compounds over time, becoming an asset that adds real value to your business.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Eddinet as Your Brand Identity Design Partner",
      points: [
        "We Design With Strategy, Not Just Aesthetics: Every design decision is tied back to your business goals and your audience, not just what looks trendy this month.",
        "Real Experience Across Industries: From healthcare to real estate to D2C, we've built identities across categories that actually understand different audience psychology.",
        "We Also Understand Digital Growth: Since our team also functions as an SEO company in India, we design brands that aren't just visually strong but are also built to perform online — from how your logo looks in search results to how your branding supports your website's SEO and conversion goals.",
        "Transparent, Collaborative Process: No jargon, no disappearing for three weeks. You'll always know what stage your project is at and why we made the choices we did.",
        "Fast Turnarounds Without Cutting Corners: We respect deadlines, but we don't rush the thinking — you get quality work delivered on a realistic timeline.",
        "Ongoing Support, Not a One-Time Handoff: Brands evolve. We stay available for updates, extensions, and new collateral as your business grows.",
      ],
    },
    process: {
      heading: "How We Build Your Brand Identity Design",
      steps: [
        {
          num: "01",
          title: "Discovery & Brand Audit",
          description:
            "We start by understanding your business, your competitors, and where your current brand (if you have one) is falling short.",
        },
        {
          num: "02",
          title: "Research & Market Positioning",
          description:
            "We study your industry and audience to figure out what will actually resonate, instead of copying trends that don't fit your business.",
        },
        {
          num: "03",
          title: "Concept Design",
          description:
            "Our designers create multiple logo and identity directions, each with clear reasoning behind the choices, not just \"we liked how it looked.\"",
        },
        {
          num: "04",
          title: "Feedback & Refinement",
          description:
            "You review, we listen, and we refine. This isn't a one-shot delivery; we go back and forth until it genuinely feels right for your brand.",
        },
        {
          num: "05",
          title: "Brand Guideline Documentation",
          description:
            "Once finalised, we document colours, typography, logo usage rules, and tone of voice into one clear reference file your whole team can use.",
        },
        {
          num: "06",
          title: "Rollout Across Platforms",
          description:
            "We help apply your new identity across your website, packaging, social media, and marketing materials so everything launches in sync.",
        },
      ],
    },
    faqs: [],
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    category: "design-creative",
    title: "UI/UX Design",
    metaTitle: "UI/UX Design & SEO Company in India | Eddinet",
    metaDescription:
      "Your website has about five seconds to convince someone to stay. Eddinet works at the intersection of UI/UX design and search visibility — interfaces people enjoy using, and rankings that get you found. Book a free consultation.",
    heroHeading: "UI/UX Design Services in Delhi NCR",
    heroSubheading:
      "Your website has about five seconds to convince someone to stay. That's it. If the design feels clunky, or if the page never shows up on Google in the first place, you've already lost the visitor before they even see what you're selling. That's the gap Eddinet fills — we build interfaces people actually enjoy using, and we get you found by the people already searching for what you offer.",
    about:
      "If you've been going back and forth between \"we need a better website\" and \"we need more traffic,\" you don't have to choose. That's literally what we do, together, under one roof.\n\nEddinet started because we kept seeing the same problem play out with different clients: a business would hire a designer for a slick-looking site, then hire a separate agency for SEO, and the two would barely talk to each other. Six months later, the site looked great but ranked nowhere, or it ranked fine but converted terribly because the UX was working against the content.\n\nWe built our team to close that gap. Our designers think about search intent while they're sketching wireframes, and our SEO specialists understand enough about design to know when a \"quick fix\" for rankings would wreck the user experience. It's a small thing, but it changes how projects actually turn out.\n\nToday, we work with startups, D2C brands, service businesses, and a few enterprise clients who want an agency that wouldn't need three months of hand-holding to understand their product. We're based in India; we keep our teams small enough to actually know your project by name, and we measure our own success the same way you do — by whether your numbers move.",
    features: [
      {
        title: "User Research & Wireframing",
        description:
          "Before a single pixel gets designed, we figure out who's actually using your product and what they're trying to get done. Skipping this step is how you end up with a beautiful site that confuses everyone who lands on it.",
      },
      {
        title: "Website & App UI Design",
        description:
          "Clean, on-brand interfaces for websites, web apps, and mobile apps designed to look sharp and to actually guide users toward the action you want them to take.",
      },
      {
        title: "UX Audits & Redesigns",
        description:
          "Already have a site or app that's underperforming? We'll go through it screen by screen, flag exactly where people are dropping off, and rebuild the flow so it stops fighting your users.",
      },
      {
        title: "Prototyping & Usability Testing",
        description:
          "We test designs with real people before they go live, not after. It's a lot cheaper to fix a confusing flow on a prototype than to fix it after launch, when you're already losing customers to it.",
      },
      {
        title: "Design Systems",
        description:
          "For growing brands, we build reusable component libraries and style guides so every new page or feature stays consistent, without your team reinventing the wheel each time.",
      },
      {
        title: "On-Page & Technical SEO",
        description:
          "We clean up the stuff Google actually cares about — site speed, structure, metadata, internal linking, and mobile performance — so your pages are built to rank, not just built to look nice.",
      },
      {
        title: "Keyword Research & Content Strategy",
        description:
          "We find the search terms your actual customers are typing in, then build content around them that answers real questions instead of stuffing keywords for the sake of it.",
      },
      {
        title: "Local SEO, Link Building & Reporting",
        description:
          "We get your business showing up in local search and Google Maps, build steady, credible backlinks, and report monthly on what we did, why, and what happened as a result.",
      },
    ],
    benefits: [
      {
        title: "One Team, One Strategy",
        description:
          "No more design and SEO agencies contradicting each other's advice.",
      },
      {
        title: "Faster Load Times and Cleaner Code",
        description:
          "Speed and structure that Google rewards and users notice immediately.",
      },
      {
        title: "Designs Built Around Real User Data",
        description:
          "Interfaces grounded in how people actually behave, not just what looks trendy on a mood board.",
      },
      {
        title: "Higher Organic Rankings",
        description:
          "Rankings for keywords that actually bring in buyers, not just traffic.",
      },
      {
        title: "Better Conversion Rates",
        description:
          "A site optimized to turn visitors into leads, not just visits.",
      },
      {
        title: "Clear, Honest Reporting",
        description:
          "You always know what's working and what's next.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Us",
      points: [
        "We treat design and SEO as one conversation, not two. Most agencies specialize in one and outsource the other. We built our team so both sides sit in the same room, literally and in every project plan.",
        "We're upfront when something won't work. If a request will hurt your rankings or confuse your users, we'll tell you before we build it — even if that's not what you wanted to hear.",
        "We've done this across a lot of industries. Healthcare, real estate, D2C, SaaS, education — the fundamentals of good design and good SEO don't change much, but the details do, and we've handled enough variety to know the difference.",
        "We stay reachable. No disappearing after the contract's signed. You'll have a direct line to the people actually working on your project, not just an account manager relaying messages.",
        "We care about the number that matters — growth. Not just rankings on a report, not just a pretty homepage screenshot. Whether people are finding you, staying on your site, and coming back to buy.",
      ],
    },
    process: {
      heading: "Our Process",
      steps: [
        {
          num: "01",
          title: "Discovery Call",
          description:
            "We start by understanding your business, your goals, and honestly, your frustrations with whatever hasn't worked so far. This shapes everything that comes after.",
        },
        {
          num: "02",
          title: "Research & Audit",
          description:
            "For design work, we study your users and competitors. For SEO, we audit your site's current standing and identify quick wins alongside longer-term opportunities.",
        },
        {
          num: "03",
          title: "Strategy & Planning",
          description:
            "We put together a clear roadmap of what's getting built, what's getting optimized, and in what order, so you know what to expect and when.",
        },
        {
          num: "04",
          title: "Design & Build",
          description:
            "Our designers and SEO team work in parallel, checking in with each other so a design decision never accidentally undoes an SEO gain, or the other way round.",
        },
        {
          num: "05",
          title: "Testing & Refinement",
          description:
            "Nothing ships without real feedback first — from users, from your team, and from our own internal reviews.",
        },
        {
          num: "06",
          title: "Launch & Ongoing Optimization",
          description:
            "We don't disappear after go-live. Rankings and user behavior both shift over time, so we keep monitoring and adjusting long after launch day.",
        },
      ],
    },
    faqs: [],
  },

  "social-media-creatives": {
    slug: "social-media-creatives",
    category: "design-creative",
    title: "Social Media Creatives",
    metaTitle: "Social Media Creatives & SEO Company in India | Eddinet",
    metaDescription:
      "If your business is still posting randomly on Instagram and hoping for the best, it's time for a change. Eddinet builds scroll-stopping social media creatives and the search rankings that bring in customers. Book a free consultation.",
    heroHeading: "Social Media Creatives Services in Delhi NCR",
    heroSubheading:
      "If your business is still posting randomly on Instagram and hoping for the best, it's time for a change. At Eddinet, we help brands get noticed, get found, and get chosen through scroll-stopping social media creatives and search rankings that actually bring in customers.",
    about:
      "We work with founders, D2C brands, clinics, real estate firms, and local businesses across India who want more than \"likes.\" They want calls, enquiries, and sales. That's the gap Eddinet fills. We're not another agency that hands you a report full of jargon at the end of the month. We're the team that sits down, understands your business, and builds a plan that fits your budget and your goals — not a template we reuse for every client.\n\nEddinet started with a simple observation: most small and mid-sized businesses in India were either overpaying for generic marketing packages or trying to manage everything in-house with no real strategy. Neither works long-term.\n\nSo we built an agency around two things clients kept asking for — good-looking, high-converting social media creatives, and SEO that's rooted in data, not guesswork. Our team is a mix of designers, content writers, SEO specialists, and performance marketers who've worked with brands in healthcare, real estate, fashion, education, and e-commerce.\n\nWe don't believe in one-size-fits-all packages. A skincare brand doesn't need the same content strategy as a real estate developer, and a local clinic doesn't need the same keyword targeting as an e-commerce store selling pan-India. Every account at Eddinet gets its own strategy, built around your industry, your competitors, and your actual customers.",
    features: [
      {
        title: "Social Media Creatives",
        description:
          "Reels, carousels, static posts, story templates, and campaign-specific creative sets for Instagram, Facebook, LinkedIn, and YouTube — built to stop the scroll and hold attention. Every design goes through a brand-fit check before it reaches you, so your feed always looks like it belongs to one brand, not five different designers.",
      },
      {
        title: "SEO Company in India Services",
        description:
          "The full spectrum of on-page SEO, technical SEO, local SEO, link building, and content-driven SEO — with keyword research based on real search intent, website audits, content optimization, backlink outreach, and monthly ranking reports you can actually understand.",
      },
      {
        title: "Content Writing & Copywriting",
        description:
          "Website copy, blog posts, product descriptions, ad copy written to convert, not just fill space.",
      },
      {
        title: "Performance Marketing & Paid Ads",
        description:
          "Meta Ads, Google Ads, and LinkedIn Ads campaigns built around measurable ROI, not vanity metrics.",
      },
      {
        title: "Website Design & Development",
        description:
          "Fast, mobile-friendly websites designed with SEO and conversions in mind from day one.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Clear, monthly reports on what worked, what didn't, and what we're changing next — no fluff.",
      },
    ],
    benefits: [
      {
        title: "Custom Strategy, Not a Copy-Paste Plan",
        description:
          "Your industry, your audience, your budget — every plan is built around your business.",
      },
      {
        title: "Design-First Social Media Creatives",
        description:
          "Creative that actually gets engagement, not just impressions.",
      },
      {
        title: "Proven SEO Know-How",
        description:
          "A team that's spent years learning what Google actually rewards.",
      },
      {
        title: "Transparent Monthly Reporting",
        description:
          "You always know where your money is going.",
      },
      {
        title: "Faster Turnaround Times",
        description:
          "Compared to bulky, slow-moving agencies.",
      },
      {
        title: "Direct Access to Your Team",
        description:
          "No chasing account managers for updates.",
      },
      {
        title: "Scalable Packages",
        description:
          "Grow with your business instead of locking you into rigid contracts.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Us",
      points: [
        "We don't outsource your account to a junior team the moment the contract is signed. We don't hand you a 40-page strategy deck and disappear for a month. And we definitely don't recycle the same content ideas across every client in the same industry.",
        "You get a team that treats your growth like it's our own business on the line — because, in a way, it is. Our reputation depends on your results.",
        "That's why brands stay with Eddinet long after the first three-month contract ends. We take both your social media presence and your search rankings seriously, and we build a strategy that actually moves the needle for your business.",
      ],
    },
    process: {
      heading: "Our Process",
      steps: [
        {
          num: "01",
          title: "Discovery Call",
          description:
            "We start by understanding your business, your competitors, your past marketing attempts, and where you actually want to be in six months.",
        },
        {
          num: "02",
          title: "Strategy & Planning",
          description:
            "Based on that conversation, we map out a plan — content pillars, posting frequency, SEO priorities, and target keywords tailored specifically to your industry.",
        },
        {
          num: "03",
          title: "Creative & Content Production",
          description:
            "Our design and content team gets to work producing your social media creatives, website copy, and blog content, all aligned with your brand voice.",
        },
        {
          num: "04",
          title: "Execution & Optimization",
          description:
            "Content goes live, campaigns launch, and SEO work begins — on-page fixes, technical audits, and outreach for quality backlinks.",
        },
        {
          num: "05",
          title: "Reporting & Refinement",
          description:
            "Every month, we share performance data in plain language and adjust the strategy based on what the numbers are telling us. Marketing isn't a \"set it and forget it\" job, and we treat it that way.",
        },
      ],
    },
    faqs: [],
  },

  "banner-design": {
    slug: "banner-design",
    category: "design-creative",
    title: "Banner Design",
    metaTitle: "Banner Design Services in India by Eddinet",
    metaDescription:
      "Design That Grabs Attention. Strategy That Gets You Found. Eddinet designs banners that stop the scroll and backs them up with the SEO that gets your site found. Book a free consultation.",
    heroHeading: "Banner Design Services in Delhi NCR",
    heroSubheading:
      "Design That Grabs Attention. Strategy That Gets You Found. At Eddinet, we bring together sharp visual design and result-driven digital strategy under one roof. Whether you need a banner that stops the scroll or a partner who can get your website ranking on Google, our team builds work that's made to convert, not just to look nice on a screen.",
    about:
      "A good banner does one job really well — it grabs attention before the visitor scrolls past. A bad one gets ignored in half a second. That's the gap Eddinet fills for brands across India.\n\nWe're a full-service creative and digital marketing team based out of India, and banner design happens to be one of the things we get asked for the most. Websites, ad campaigns, social media, email headers — if it needs a banner, our designers have probably made hundreds like it. But we don't stop at design. Since we're also recognised as a trusted SEO company in India, everything we design is built with your bigger marketing goals in mind, not just aesthetics.\n\nEddinet started with a simple idea — most agencies either do design or they do marketing. Rarely both, and even more rarely do they do both well. We wanted to change that.\n\nToday, our team of designers, SEO specialists, and marketers work side by side, which means your banner doesn't just look good — it's built to load fast, match your brand tone, and support the SEO and ad campaigns you're already running. As a growing SEO company in India, we've also made sure our design and content teams talk to each other constantly. That's rare in this industry, and it's exactly why clients stick with us.",
    features: [
      {
        title: "Banner Design for Every Platform",
        description:
          "We design banners for websites, Google Display Ads, Meta Ads, LinkedIn, email campaigns, and print — each one built for the platform it's going to live on.",
      },
      {
        title: "Social Media Banner & Creative Design",
        description:
          "From Instagram story banners to Facebook cover designs, we create scroll-stopping visuals that keep your feed consistent and your engagement climbing.",
      },
      {
        title: "Website Banner Design",
        description:
          "Your homepage banner is often the first thing a visitor sees. We design ones that communicate your message in under three seconds and push people toward the next step.",
      },
      {
        title: "Ad Campaign Banners (PPC & Display)",
        description:
          "Running paid campaigns? Our banners are designed to catch the eye fast and drive clicks, built specifically for performance marketing, not just visual appeal.",
      },
      {
        title: "SEO Services Alongside Design",
        description:
          "As an established SEO company in India, we help your website rank higher, so all those beautifully designed banners actually get seen by the right audience. On-page SEO, technical SEO, local SEO — we cover it end to end.",
      },
      {
        title: "Brand Identity & Print Design",
        description:
          "Logos, brochures, flyers, and packaging — we keep your visual identity consistent whether someone's viewing you online or holding your brochure in hand.",
      },
    ],
    benefits: [
      {
        title: "Faster Turnaround",
        description:
          "Most banner projects are delivered within days, not weeks.",
      },
      {
        title: "Designs Built for Conversion",
        description:
          "Not just visual appeal — every banner is designed to drive the action you want.",
      },
      {
        title: "One Team for Design and SEO",
        description:
          "Your visuals and rankings work together instead of in silos.",
      },
      {
        title: "Consistent Branding",
        description:
          "Across every platform your business shows up on.",
      },
      {
        title: "Affordable Packages",
        description:
          "Packages that suit startups as well as established businesses.",
      },
      {
        title: "Dedicated Support",
        description:
          "From a real team, not a ticketing system.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Eddinet as Your Banner Design & SEO Company in India",
      points: [
        "Design backed by strategy. We don't hand you a pretty picture and walk away. Every banner we design is tied to a goal — more clicks, more recall, more conversions.",
        "Real SEO expertise, not a side hustle. Being a genuine SEO company in India means we understand how design, page speed, and search rankings connect. Most design-only studios miss this entirely.",
        "Industry experience across sectors. From healthcare to eCommerce to real estate, we've designed banners that actually work for very different audiences.",
        "Transparent process. No jargon, no vague timelines. You'll know exactly what's happening at every stage of your project.",
        "Long-term thinking. We're not chasing a one-time project. Most of our clients come back for their next campaign, their next banner set, or their next SEO push — because the first round worked.",
      ],
    },
    process: {
      heading: "Our Process",
      steps: [
        {
          num: "01",
          title: "Understanding Your Brand",
          description:
            "We start by learning your business, your audience, and what you're trying to achieve with this specific banner or campaign — no cookie-cutter templates here.",
        },
        {
          num: "02",
          title: "Research & Benchmarking",
          description:
            "Our team studies your industry, your competitors, and current design trends so your banners feel current and relevant, not recycled.",
        },
        {
          num: "03",
          title: "Concept & Design",
          description:
            "Our designers get to work on layouts, colours, and messaging hierarchy, making sure the banner tells your story at a glance.",
        },
        {
          num: "04",
          title: "SEO & Platform Optimisation",
          description:
            "Every banner is optimised for the platform it's going on — file size, dimensions, and load speed included, which also supports your website's SEO performance.",
        },
        {
          num: "05",
          title: "Feedback & Revisions",
          description:
            "We share drafts early and often. Your feedback shapes the final output, and we revise until it's right, not just until the clock runs out.",
        },
        {
          num: "06",
          title: "Delivery & Launch Support",
          description:
            "Once approved, we hand over the final files in every format you need, and if it's part of a larger SEO or ad campaign, we help with the rollout too.",
        },
      ],
    },
    faqs: [],
  },

  "brochure-design": {
    slug: "brochure-design",
    category: "design-creative",
    title: "Brochure Design",
    metaTitle: "Brochure Design Services in India | Eddinet",
    metaDescription:
      "A brochure is often the first physical thing a customer holds from your business. Eddinet creates brochure design solutions that inform, persuade and push the reader closer to picking up the phone.",
    heroHeading: "Brochure Design Services in Delhi NCR",
    heroSubheading:
      "A brochure is often the first physical thing a customer holds in their hand from your business, and first impressions still matter, even in a digital-first world. At Eddinet, we create brochure design solutions that go beyond pretty layouts. Every brochure we design is built to inform, persuade, and push the reader one step closer to picking up the phone or walking into your store.",
    about:
      "Whether you need a trifold brochure for an exhibition, a corporate profile for investors, or a product catalog for your sales team, our designers combine clean visuals with a message that actually sells. We've worked with real estate firms, hospitals, educational institutes, and retail brands across India, and each project has taught us one thing: good design without strategy is just decoration. That's why we treat every brochure as a marketing tool first and a design piece second.\n\nEddinet started with a simple idea — that Indian businesses deserve marketing and design work that actually moves the needle, not just work that looks nice on a portfolio page. Over the years, we've grown into a full-service digital agency, and while we're best known as a dependable SEO company in India, our design bench is just as strong. Brands come to us for search rankings and stay for the creative work, or the other way around — quite often both.\n\nOur team is a mix of designers, content writers, and marketing strategists who sit in the same room (or the same call) and build campaigns together instead of working in silos. This matters more than people realize. A brochure designed without knowing your target keywords, your buyer persona, or your competitor's positioning is just guesswork with a nice font. We don't do guesswork. Every brochure, every landing page, every SEO campaign we run starts with the same question: what does this business actually need to grow?",
    features: [
      {
        title: "Brochure Design",
        description:
          "We design trifold and bifold brochures, corporate profile booklets, product catalogues, and event handouts that are as functional as they are attractive. Each brochure is customised to your brand colours, tone, and industry.",
      },
      {
        title: "Logo and Brand Identity",
        description:
          "Your logo, colour palette, and typography need to work together across every touchpoint, print or digital. We build identity systems that stay consistent whether someone's looking at your brochure or your Instagram page.",
      },
      {
        title: "Print and Marketing Collateral",
        description:
          "Beyond brochures, we handle flyers, business cards, packaging, and standee designs, all built to keep your offline branding as sharp as your online presence.",
      },
      {
        title: "SEO Services",
        description:
          "As a recognised SEO company in India, we help businesses rank for the keywords their customers are actually searching for. From on-page optimisation to technical audits and local SEO, our SEO work is built to bring in traffic that converts.",
      },
      {
        title: "Website and Digital Design",
        description:
          "Many clients who come to us for brochure design also need a website that matches. We design and build sites that carry the same visual language as your print materials, so your brand feels the same everywhere a customer meets it.",
      },
    ],
    benefits: [
      {
        title: "Stronger First Impressions",
        description:
          "A well-designed brochure signals that your business is serious and organised, before a single sales conversation happens.",
      },
      {
        title: "Clear Communication",
        description:
          "Good layout and hierarchy mean customers actually read what matters instead of skimming past it.",
      },
      {
        title: "Consistent Branding",
        description:
          "Matching your brochure design to your website and social media builds recognition over time.",
      },
      {
        title: "Better Sales Conversations",
        description:
          "Sales teams close more deals when they're handing over something that looks credible.",
      },
      {
        title: "Long-Term Value",
        description:
          "Unlike a social post that disappears in a day, a good brochure gets reused at events, meetings, and referrals for months.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Eddinet",
      points: [
        "Design Backed by Strategy: We don't design in a vacuum. Every brochure is built with your marketing goals in mind, not just visual trends.",
        "Full-Service Capability: From brochure design to being a full-fledged SEO company in India, we cover the ground most agencies split across three different vendors.",
        "Fast, Reliable Turnaround: We respect deadlines, especially when you've got an exhibition or a client meeting coming up.",
        "Honest Communication: No jargon, no vague timelines. We tell you what's realistic and stick to it.",
        "Proven Track Record: Our clients keep coming back, and that's the metric we care about most.",
      ],
    },
    process: {
      heading: "How We Design a Brochure That Works",
      steps: [
        {
          num: "01",
          title: "Understanding Your Business",
          description:
            "We start by learning what you actually sell, who buys it, and what makes them say yes. No design work begins until we understand your goals.",
        },
        {
          num: "02",
          title: "Research and Reference",
          description:
            "Our team studies your industry and competitors so the final brochure feels current, not recycled from a template someone used five years ago.",
        },
        {
          num: "03",
          title: "Content and Layout Planning",
          description:
            "Good brochures aren't just images, they're organised information. We plan the content flow before we touch a single design element, so the reader's eye moves exactly where you want it to.",
        },
        {
          num: "04",
          title: "Design Execution",
          description:
            "Our designers get to work on the actual visuals, using your brand guidelines, colour scheme, and messaging to create something that feels unmistakably yours.",
        },
        {
          num: "05",
          title: "Review and Revisions",
          description:
            "We share drafts early and often. Your feedback shapes the final product, and we revise until it's right, not until we run out of patience.",
        },
        {
          num: "06",
          title: "Final Delivery",
          description:
            "Once approved, we deliver print-ready files in whatever format your printer needs, along with digital versions for your website or email campaigns.",
        },
      ],
    },
    faqs: [],
  },

  "catalogue-design": {
    slug: "catalogue-design",
    category: "design-creative",
    title: "Catalogue Design",
    metaTitle: "Catalogue Design Services in India | Eddinet",
    metaDescription:
      "Catalogues That Sell. Eddinet designs catalogues that do more than sit on a shelf — clean layouts, sharp photography placement, and a structure that guides buyers toward picking up the phone. Get a free quote.",
    heroHeading: "Catalogue Design Services in Delhi NCR",
    heroSubheading:
      "Catalogues That Sell. Design Backed by an SEO Company in India That Understands Growth. At Eddinet, we design catalogues that do more than sit on a shelf or sit unread in someone's inbox. A catalogue is often the first real conversation a customer has with your product line, and if it looks flat, dated, or generic, that conversation ends before it starts.",
    about:
      "We build catalogues for brands that want their products to look as good on paper (or PDF) as they do in real life — clean layouts, sharp product photography placement, typography that's easy to scan, and a structure that actually guides a buyer toward picking up the phone or placing an order.\n\nEddinet started with a simple observation: most businesses in India were either getting good design or good marketing, rarely both from the same team. So we built ourselves to do both.\n\nToday, we work as a full-service digital partner handling everything from catalogue design and branding to SEO, paid ads, and website development for manufacturers, exporters, retailers, and D2C brands across the country. Our design team doesn't work in a silo either. Every catalogue we create is reviewed with one question in mind: will this actually help the client sell more?\n\nThat's really the difference. We're not just a design studio that happens to offer SEO on the side, and we're not an SEO company in India that treats design as an afterthought. Both teams sit at the same table, which means the catalogue you get is built to match how your brand actually shows up online — same colours, same tone, same story.",
    features: [
      {
        title: "Product Catalogue Design",
        description:
          "We design catalogues for single product lines or full portfolios, keeping the layout clean enough that a buyer can flip through and immediately understand what you're offering, what it costs (if you choose to include pricing), and how to reach you.",
      },
      {
        title: "Corporate & Company Profile Catalogues",
        description:
          "For businesses that need to present themselves to investors, distributors, or B2B buyers, we design company profile catalogues that cover your story, capabilities, certifications, and portfolio in a format that feels credible and put-together.",
      },
      {
        title: "Export & Wholesale Catalogues",
        description:
          "If you're selling to international buyers or wholesale distributors, we design catalogues that meet the expectations of that audience — detailed specifications, MOQ information, packaging details, and a professional tone throughout.",
      },
      {
        title: "Digital & Interactive Catalogues",
        description:
          "Not everything needs to be printed. We also build digital catalogues with clickable navigation, embedded links, and formats that work well when shared over WhatsApp, email, or your website.",
      },
      {
        title: "Print-Ready Catalogue Design",
        description:
          "Every catalogue we hand over is print-ready — correct bleed, resolution, and colour profiles sorted, so there's no back-and-forth with your printer later.",
      },
      {
        title: "Catalogue Redesign",
        description:
          "Already have a catalogue that feels outdated? We can rework your existing content into a fresh layout without you having to start from scratch.",
      },
    ],
    benefits: [
      {
        title: "Stronger First Impressions",
        description:
          "A well-designed catalogue signals that your business takes itself seriously, which matters more than most people admit.",
      },
      {
        title: "Better Product Understanding",
        description:
          "Clear layouts help buyers grasp what you sell without needing a phone call to explain it.",
      },
      {
        title: "Consistent Branding",
        description:
          "Your catalogue, website, and social pages start looking like they belong to the same company.",
      },
      {
        title: "Higher Conversion From Inquiries to Orders",
        description:
          "A catalogue that answers questions upfront (specs, pricing, MOQ) shortens the sales cycle.",
      },
      {
        title: "Reusable Across Channels",
        description:
          "The same catalogue can be printed, emailed, shared on WhatsApp, or embedded on your website.",
      },
      {
        title: "Long-Term Brand Asset",
        description:
          "Unlike a one-off social post, a good catalogue gets used for months or years.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Eddinet as Your Catalogue Design & SEO Company in India",
      points: [
        "Design that's built to convert, not just look nice. We treat every catalogue page like a small sales pitch — because that's what it is.",
        "One team for design and visibility. Since we also work as an SEO company in India, we understand how your catalogue fits into the bigger picture of how customers find and evaluate you online.",
        "Industry-specific experience. We've designed catalogues for manufacturers, exporters, real estate developers, interior brands, and retail businesses, so we're not learning your industry from scratch.",
        "Realistic timelines. We tell you upfront how long a project will take, and we stick to it.",
        "Revisions without friction. We don't count revisions like they're a scarce resource. We'd rather you leave happy with the final file.",
        "Transparent process. You'll know what stage your catalogue is at, always — no chasing us for updates.",
      ],
    },
    process: {
      heading: "Our Catalogue Design Process",
      steps: [
        {
          num: "01",
          title: "Understanding Your Product & Audience",
          description:
            "Before we open a design file, we talk. We ask about your products, who buys them, and what you want the catalogue to achieve — more inquiries, better brand perception, or simply an updated version of what you already have.",
        },
        {
          num: "02",
          title: "Content & Material Collection",
          description:
            "We collect product images, specifications, pricing, and brand assets from your side, and flag any gaps where better photography or copy might be needed.",
        },
        {
          num: "03",
          title: "Layout & Concept Design",
          description:
            "Our designers put together initial layout concepts, focusing on how a reader's eye moves through the page — what they see first, second, and where the call to action sits.",
        },
        {
          num: "04",
          title: "Design Development",
          description:
            "Once a direction is approved, we build out the full catalogue — every page, every product entry, formatted consistently across the document.",
        },
        {
          num: "05",
          title: "Review & Revisions",
          description:
            "You go through the draft, mark up what needs to change, and we revise. We keep this stage flexible because we'd rather get it right than rush it out.",
        },
        {
          num: "06",
          title: "Final Delivery",
          description:
            "You receive the finished catalogue in print-ready and digital formats, ready to share with your sales team, distributors, or customers.",
        },
      ],
    },
    faqs: [],
  },

  "presentation-design": {
    slug: "presentation-design",
    category: "design-creative",
    title: "Presentation Design",
    metaTitle: "Presentation Design Services in India | Eddinet",
    metaDescription:
      "Ever sat through a pitch and felt your attention drift within the first two minutes? That's usually a design problem. Eddinet builds presentation design solutions that hold attention and push your audience toward a decision.",
    heroHeading: "Presentation Design Services in Delhi NCR",
    heroSubheading:
      "Ever sat through a pitch and felt your attention drift within the first two minutes? That's usually not a content problem — it's a design problem. At Eddinet, we build presentation design solutions that hold attention, explain ideas clearly, and push your audience toward a decision, whether that's signing a deal, approving a budget, or funding your startup.",
    about:
      "We're a full-service digital agency, and as a trusted SEO company in India, we understand something most design studios miss: a presentation isn't just a visual, it's a piece of marketing. Every slide has to earn its place, just like every page on a website has to earn its ranking. That's the mindset we bring to every deck we design.\n\nWhether you need a single investor pitch or an entire library of sales presentations for your team, Eddinet turns scattered bullet points and rough ideas into a deck that actually gets read, remembered, and acted on.\n\nEddinet started with a simple frustration — too many businesses were spending money on great content and then losing their audience because the presentation looked like it was thrown together at midnight. So we built a team that sits right at the intersection of design, storytelling, and strategy.\n\nToday, we work with startups, growing businesses, and enterprise teams across India, helping them present themselves the way they actually deserve to be seen. Our designers have backgrounds in branding and marketing, not just software — which means every presentation we design carries your brand's tone, not a generic template pulled off the internet.\n\nWe're also known as a dependable SEO company in India, and that dual expertise matters more than people expect. A presentation designed by a team that understands search intent, audience behavior, and conversion psychology simply performs better than one designed by someone who only knows how to move shapes around a canvas.",
    features: [
      {
        title: "Pitch Deck & Investor Presentation Design",
        description:
          "Raising funds is hard enough without a deck that undersells your business. We design investor-ready pitch decks that communicate your traction, market opportunity, and vision in a way that's sharp, credible, and easy to skim — because investors rarely read every word, they scan for the story.",
      },
      {
        title: "Corporate & Business Presentation Design",
        description:
          "From quarterly reviews to board meetings, we design corporate presentations that look polished without feeling stiff. Clean layouts, consistent branding, and visuals that make complex data easy to digest.",
      },
      {
        title: "Sales Deck Design",
        description:
          "Your sales team needs a deck that does half the selling before the rep even opens their mouth. We design sales presentations focused on one goal: moving the prospect closer to \"yes,\" with messaging structured around objections, benefits, and a clear call to action.",
      },
      {
        title: "Webinar & Training Presentation Design",
        description:
          "Long-form content needs a different design rhythm. We create webinar and training presentations that keep remote audiences engaged, using visual pacing, section breaks, and interactive-style slides so people don't tune out halfway through.",
      },
      {
        title: "Infographic & Data Visualization Slides",
        description:
          "Numbers don't sell themselves — they need context. We turn spreadsheets and research into infographic-style slides and charts that make data instantly understandable.",
      },
      {
        title: "Template & Brand Kit Design",
        description:
          "Need consistency across every team member's presentations? We build custom PowerPoint and Google Slides templates matched to your brand guidelines, so anyone in your company can create a professional-looking deck in minutes.",
      },
    ],
    benefits: [
      {
        title: "Stronger First Impressions",
        description:
          "A well-designed deck signals that your business is organized and serious, before anyone even reads a word of content.",
      },
      {
        title: "Higher Engagement",
        description:
          "Clean, visual-first slides keep audiences focused instead of reading a wall of text off a screen.",
      },
      {
        title: "Faster Decision-Making",
        description:
          "When information is presented clearly, decision-makers move faster, whether that's a client signing off or an investor writing a check.",
      },
      {
        title: "Consistent Branding",
        description:
          "Every slide reflects your brand's colors, fonts, and tone, so your presentations look like they belong to the same company.",
      },
      {
        title: "Time Saved",
        description:
          "Instead of your team spending hours fighting with slide alignment, you get a finished, professional deck delivered on schedule.",
      },
      {
        title: "SEO-Aligned Messaging",
        description:
          "Because Eddinet also operates as an established SEO company in India, we naturally structure presentation content in a way that mirrors what actually converts online — clear headlines, scannable points, and a message that lands fast.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Us",
      points: [
        "Design That's Backed by Strategy: We don't just make slides look nice — every layout decision is made with your audience and goal in mind, the same way we approach SEO and marketing projects for our clients.",
        "Experienced, In-House Team: No outsourced freelancers juggling ten other projects. Our presentation designers work directly with our strategy and content teams, so nothing gets lost in translation.",
        "Dual Expertise as an SEO Company in India: Very few presentation design studios also run as a recognized SEO company in India. That means your presentations are built by people who understand what makes content perform — not just what looks good.",
        "Fast Turnaround, No Shortcuts: We respect deadlines. Whether you need a deck in three days or three weeks, we scope the timeline honestly and stick to it.",
        "Unlimited Revisions Within Scope: We're not satisfied until you're confident walking into that boardroom or investor call with your deck.",
        "Transparent Pricing: No hidden charges, no vague \"contact for pricing\" games — you know exactly what you're paying for before we start.",
      ],
    },
    process: {
      heading: "How We Design a Presentation That Works",
      steps: [
        {
          num: "01",
          title: "Discovery Call",
          description:
            "We start by understanding your audience, your goal for the presentation, and the message you want to land. A pitch deck for investors and a training deck for employees need completely different approaches, so this step shapes everything after it.",
        },
        {
          num: "02",
          title: "Content & Story Mapping",
          description:
            "Before we touch design, we map out the flow — what comes first, what builds the tension, and what closes the deal. A presentation without a story arc is just a slideshow.",
        },
        {
          num: "03",
          title: "Visual Design & Layout",
          description:
            "Our design team builds out the actual slides — typography, color, imagery, and layout — all tied back to your brand identity, not a stock template.",
        },
        {
          num: "04",
          title: "Review & Revisions",
          description:
            "You get a draft to review, and we refine it based on your feedback until it's exactly right. We'd rather do two extra rounds than hand over a deck you're not confident presenting.",
        },
        {
          num: "05",
          title: "Final Delivery",
          description:
            "You receive the finished presentation in your preferred format (PowerPoint, Google Slides, Keynote, or PDF), fully editable and ready to present.",
        },
      ],
    },
    faqs: [],
  },

  "product-design": {
    slug: "product-design",
    category: "design-creative",
    title: "Product Design",
    metaTitle: "Product Design Services in India | Eddinet",
    metaDescription:
      "If your product looks confusing, feels clunky, or doesn't click with users in the first ten seconds, you're losing customers. Eddinet blends research, strategy and visual craft to build digital products people enjoy using.",
    heroHeading: "Product Design Services in Delhi NCR",
    heroSubheading:
      "If your product looks confusing, feels clunky, or simply doesn't \"click\" with users in the first ten seconds, you're losing customers before they even give your business a fair shot. At Eddinet, we work with founders, product teams, and growing brands who want their digital products to actually feel good to use — not just look pretty in a pitch deck.",
    about:
      "Our product design team blends research, strategy, and visual craft to build apps, websites, and digital experiences that people genuinely enjoy using. We're not here to hand you a Figma file and disappear. We stay involved from the first sketch to the final handoff, and often well beyond that.\n\nAs a growing SEO company in India, we also understand something most design-only studios miss: a great-looking product that doesn't rank, load fast, or convert visitors is only half a solution. That's why our design work is always built with performance, usability, and search visibility in mind — not just aesthetics.\n\nEddinet started with a simple frustration — too many businesses were paying for design work that looked impressive but didn't move the needle. Users still dropped off. Conversions still stayed flat. So we built a team around a different idea: design should be judged by results, not just how it looks on a portfolio page.\n\nToday, we work with startups building their first MVP, established companies redesigning outdated platforms, and eCommerce brands trying to reduce cart abandonment through better UX. Our designers, researchers, and strategists sit in the same room (virtually or otherwise) as our SEO and development teams, which means your product isn't designed in a vacuum. It's built to perform — visually, functionally, and in search results.",
    features: [
      {
        title: "UI/UX Design",
        description:
          "We design interfaces that are intuitive from the first tap. Every screen, button, and interaction is planned around how real users actually behave — not how we assume they will.",
      },
      {
        title: "Product Strategy & Research",
        description:
          "Before we design a single screen, we dig into your users, your competitors, and your business goals. This stage saves you from expensive redesigns down the line.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "We build low and high-fidelity prototypes so you can test ideas, gather feedback, and validate direction before a single line of code gets written.",
      },
      {
        title: "Mobile App Design",
        description:
          "From onboarding flows to checkout screens, we design mobile experiences that feel native, fast, and easy to navigate on both iOS and Android.",
      },
      {
        title: "Web & SaaS Product Design",
        description:
          "We design dashboards, landing pages, and complete web applications that balance functionality with a clean, modern look your users will trust.",
      },
      {
        title: "Design Systems",
        description:
          "For growing products, we build scalable design systems and component libraries so your team can ship new features consistently, without reinventing the wheel every time.",
      },
      {
        title: "Design + SEO Integration",
        description:
          "Since we also work as an SEO company in India, we make sure design decisions — page speed, structure, mobile responsiveness — support your search rankings instead of working against them.",
      },
    ],
    benefits: [
      {
        title: "Better User Retention",
        description:
          "Well-designed products keep users around longer, reducing drop-off and increasing repeat usage.",
      },
      {
        title: "Fewer Development Reworks",
        description:
          "Clear, well-planned designs mean developers spend less time guessing and more time building it right the first time.",
      },
      {
        title: "Stronger Brand Perception",
        description:
          "A polished, consistent product design instantly makes your brand look more credible and trustworthy to new users.",
      },
      {
        title: "Improved Conversion Rates",
        description:
          "Every screen is designed with a purpose — whether that's a signup, a purchase, or a demo request.",
      },
      {
        title: "Search-Friendly Foundations",
        description:
          "Because our team also operates as an SEO company in India, your product's structure and performance are built to support organic visibility, not hurt it.",
      },
      {
        title: "Scalable for Growth",
        description:
          "Our design systems and documentation mean your product can grow and add features without losing consistency or quality.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Us",
      points: [
        "Design Backed by an SEO Company in India: Most design studios stop at aesthetics. Eddinet goes further — as a working SEO company in India, we design products that look great and are built to perform well in search, on speed tests, and across devices.",
        "Research-First Approach: We don't design based on trends or personal taste. Every decision is backed by user research, competitor analysis, and your actual business goals.",
        "Transparent Process: You'll know exactly what stage your project is in, what's coming next, and why we made the design choices we made. No black-box workflows.",
        "Experienced, Hands-On Team: Our designers have worked across industries — eCommerce, healthcare, SaaS, education, and more — so we bring real-world context to every project, not guesswork.",
        "Long-Term Partnership Mindset: We're not looking for one-off projects. Most of our clients come back for the next feature, the next redesign, or the next product entirely, because the relationship works.",
        "Honest Communication: If something in your brief won't work well for users, we'll tell you before you spend money building it, not after.",
      ],
    },
    process: {
      heading: "Our Product Design Process",
      steps: [
        {
          num: "01",
          title: "Discovery & Research",
          description:
            "We start by understanding your users, your business model, and what \"success\" actually looks like for this project. No assumptions, no templates.",
        },
        {
          num: "02",
          title: "Strategy & Planning",
          description:
            "Based on our research, we map out the user journey, define key screens, and set clear design goals before opening any design tool.",
        },
        {
          num: "03",
          title: "Wireframing",
          description:
            "We sketch out the skeleton of your product — layout, flow, and structure — so we can validate the logic before adding visual detail.",
        },
        {
          num: "04",
          title: "Visual Design",
          description:
            "This is where the product comes to life. Colours, typography, imagery, and micro-interactions are all crafted to match your brand and appeal to your audience.",
        },
        {
          num: "05",
          title: "Prototyping & Testing",
          description:
            "We build clickable prototypes and test them with real users or stakeholders, catching usability issues early rather than after launch.",
        },
        {
          num: "06",
          title: "Handoff & Support",
          description:
            "We deliver organized, developer-ready files along with documentation, and we stay available for questions, tweaks, or a second round of iterations post-launch.",
        },
      ],
    },
    faqs: [],
  },

  "video-editing": {
    slug: "video-editing",
    category: "design-creative",
    title: "Video Editing",
    metaTitle: "Video Editing Services in India by Eddinet",
    metaDescription:
      "Professional Video Editing That Turns Views Into Customers. Eddinet edits videos for brands that want content that performs — on reels, YouTube, ad campaigns and websites that need to rank. Get a free consultation.",
    heroHeading: "Video Editing Services in Delhi NCR",
    heroSubheading:
      "If you've ever uploaded a video and wondered why it didn't get the response you expected, chances are the problem wasn't your idea — it was the editing. A great video isn't just footage stitched together; it's pacing, sound, colour, and story working in sync to hold someone's attention long enough for them to actually care about what you're saying.",
    about:
      "At Eddinet, we edit videos for brands that want more than \"nice visuals.\" We work with businesses across India who need content that performs — on Instagram reels, YouTube channels, ad campaigns, and websites that also need to rank. Because let's be honest, a stunning video buried on page five of Google isn't doing much for anyone. That's exactly why we've built our video editing services alongside our work as an SEO company in India — so your content doesn't just look good, it gets found.\n\nEddinet is a Delhi-based digital agency built around a simple idea: creative work should also be measurable. We didn't start out chasing trends. We started out solving a problem we kept seeing — businesses spending money on video production and SEO separately, with neither team talking to the other, and results suffering because of it.\n\nOver the years, we've grown into a team of editors, colourists, sound designers, and SEO strategists who sit in the same room (sometimes literally, sometimes over a Zoom call at odd hours) to make sure content and visibility move together. As an SEO company in India, we understand what search engines and audiences reward — clarity, relevance, and consistency — and we bring that same thinking into every timeline we edit.\n\nWe've worked with doctors, real estate developers, D2C brands, ed-tech startups, and a fair share of founders who just wanted their Instagram page to stop looking abandoned. Different industries, same goal: content that works while you sleep.",
    features: [
      {
        title: "Social Media Video Editing",
        description:
          "Reels, shorts, and feed posts edited with fast cuts, captions, and hooks in the first three seconds — because that's usually all the time you get before a thumb keeps scrolling.",
      },
      {
        title: "YouTube & Long-Form Video Editing",
        description:
          "Structured edits with proper pacing, jump-cut cleanup, B-roll placement, and retention-focused storytelling for channels that need viewers to stay till the end (and come back for the next upload).",
      },
      {
        title: "Corporate & Brand Videos",
        description:
          "Clean, professional edits for company profiles, product explainers, and internal communication videos that need to look polished without feeling stiff.",
      },
      {
        title: "Ad & Promotional Video Editing",
        description:
          "Edits built for conversion — tight scripts, clear CTAs, and visuals designed to stop people from skipping your ad on Meta or YouTube.",
      },
      {
        title: "Event & Highlight Reels",
        description:
          "We take hours of raw event footage and turn it into a 2–3 minute highlight video that actually captures what the day felt like.",
      },
      {
        title: "Color Grading, Motion Graphics & Sound Design",
        description:
          "The finishing touches — grading for mood, subtle motion graphics for emphasis, and sound design that makes a video feel finished instead of raw.",
      },
      {
        title: "SEO Company in India — Because Content Needs to Be Found Too",
        description:
          "Alongside editing, Eddinet works as a full-fledged SEO company in India, helping the same videos and web pages you invest in actually show up when someone searches for them. Video titles, descriptions, on-page structure, keyword placement — none of it is an afterthought here. It's built into the process from day one.",
      },
    ],
    benefits: [
      {
        title: "Faster Turnaround",
        description:
          "Without editors rushing through your project.",
      },
      {
        title: "Platform-Specific Edits",
        description:
          "Instead of one generic version reused everywhere.",
      },
      {
        title: "In-House Color Grading and Sound Design",
        description:
          "So you're not juggling multiple vendors.",
      },
      {
        title: "SEO-Aware Content Creation",
        description:
          "Your videos are built to be discoverable, not just watchable.",
      },
      {
        title: "Transparent Revisions",
        description:
          "With real feedback loops instead of guesswork.",
      },
      {
        title: "Consistent Brand Identity",
        description:
          "Across every video, whether it's for Instagram, YouTube, or a client pitch.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Eddinet for Video Editing and SEO in India",
      points: [
        "We think about the whole journey. A video isn't done when the export finishes rendering — it's done when it's reaching the right people. That's the advantage of working with a team that operates as both a video editing studio and an established SEO company in India.",
        "We edit for retention, not just aesthetics. Pretty transitions mean little if viewers drop off in the first ten seconds. Our edits are built around keeping attention, because that's what actually drives results.",
        "We stay involved after delivery. Titles, descriptions, and on-page SEO for where the video lives matter just as much as the edit itself, and we help with that too.",
        "We're honest about timelines and expectations. No overpromising a 24-hour turnaround on a complex project just to win the client — we tell you what's realistic and then we deliver on it.",
      ],
    },
    process: {
      heading: "Our Process",
      steps: [
        {
          num: "01",
          title: "Understanding Your Brand and Goals",
          description:
            "Before anyone opens an editing software, we spend time understanding your audience, your brand tone, and what \"success\" actually looks like for this particular video.",
        },
        {
          num: "02",
          title: "Footage Review",
          description:
            "We go through every clip you send — the good, the shaky, the ones you forgot you even recorded — and figure out what's usable and what story it can tell.",
        },
        {
          num: "03",
          title: "Storyboard & Edit Plan",
          description:
            "A rough structure is created before the heavy editing begins, so the video has a clear beginning, middle, and end instead of feeling like a random montage.",
        },
        {
          num: "04",
          title: "Editing, Grading & Sound",
          description:
            "This is where the real craft happens — cutting, transitions, colour correction, music, and voiceovers all come together into one cohesive video.",
        },
        {
          num: "05",
          title: "Review & Revisions",
          description:
            "You get a draft, you tell us what's working and what isn't, and we refine it. No project goes out the door until you're genuinely happy with it.",
        },
        {
          num: "06",
          title: "Final Delivery & Optimization",
          description:
            "Along with the finished video, we help with SEO-friendly titles, descriptions, and metadata — a small step that makes a real difference in reach.",
        },
      ],
    },
    faqs: [],
  },

  "motion-graphics": {
    slug: "motion-graphics",
    category: "design-creative",
    title: "Motion Graphics",
    metaTitle: "Motion Graphics Services in India by Eddinet",
    metaDescription:
      "Turning Ideas Into Movement, Emotion, and Results. Eddinet is a motion graphics studio that builds animated content people actually watch till the end — explainer videos, animated logos, product reels and brand films.",
    heroHeading: "Motion Graphics Services in Delhi NCR",
    heroSubheading:
      "If your brand still relies on plain images and static banners to say something on the internet, you're leaving a lot of attention on the table. People scroll fast, they skip text, but they stop for movement. That's exactly where Eddinet comes in.",
    about:
      "We're a motion graphics studio that builds animated content people actually watch till the end — explainer videos, animated logos, product reels, social media snippets, and brand films that don't just look good but push the viewer to take action. Add to that the fact that Eddinet started life as an SEO company in India, and you get something most agencies can't offer: motion graphics that are made with visibility, ranking, and conversions in mind, not just aesthetics.\n\nEvery business today is fighting for two seconds of someone's attention. In those two seconds, a well-timed animation, a smooth transition, or a punchy motion graphic can decide whether a viewer stays or scrolls past. We understand that pressure because we've felt it ourselves — as an SEO company in India, we've spent years figuring out what actually keeps people engaged and what search engines reward.\n\nThat experience is now baked directly into our motion graphics work. Whether it's a 15-second Instagram reel or a two-minute explainer for your homepage, our team designs every frame keeping your audience's attention span, your brand's tone, and your marketing goals in mind. We don't hand you a \"nice video\" and walk away. We hand you a piece of content built to perform.\n\nEddinet didn't start as a video agency. We built our name as an SEO company in India, helping brands rank, get found, and grow through organic search. Somewhere along the way, our clients kept asking for the same thing: \"Can you also make our content look this good in video form?\" So we built a motion graphics team around that demand, and it's now one of the most requested services we offer.\n\nWhat makes us different is simple — most motion graphics studios think only about visuals. We think about visuals and visibility together. Every animation we create is optimized for the platform it's going on, whether that's YouTube, Instagram, a landing page, or a paid ad campaign.",
    features: [
      {
        title: "Explainer Video Animation",
        description:
          "Complicated product or service? We break it down into a simple, visual story your audience actually understands in under 90 seconds — perfect for homepages, pitch decks, and onboarding.",
      },
      {
        title: "Logo Animation & Brand Identity Motion",
        description:
          "A static logo is fine. An animated one that plays at the start of every video, every ad, and every reel builds recall faster. We design short, memorable logo stings that stick.",
      },
      {
        title: "Social Media Motion Graphics",
        description:
          "Reels, carousels, story animations, and short-form video content built specifically for Instagram, LinkedIn, and YouTube Shorts — sized right, paced right, and hooked in the first three seconds.",
      },
      {
        title: "2D & 3D Animation",
        description:
          "From flat, illustrative 2D characters to more layered 3D product visualizations, we pick the style that fits your brand rather than pushing whatever's trending.",
      },
      {
        title: "Motion Graphics for Ads",
        description:
          "Paid campaigns live or die on the first frame. Our team builds ad creatives with movement and messaging designed to stop the scroll and drive clicks.",
      },
      {
        title: "Corporate & Presentation Animation",
        description:
          "Investor decks, internal training videos, and corporate presentations get a serious upgrade when data and processes are shown through clean, animated visuals instead of bullet points.",
      },
      {
        title: "Infographic & Data Visualization Animation",
        description:
          "Numbers are boring until they move. We turn reports, statistics, and research into animated infographics that are easy to follow and easy to share.",
      },
    ],
    benefits: [
      {
        title: "Higher Engagement",
        description:
          "Moving visuals hold attention far longer than static images or plain text.",
      },
      {
        title: "Simplified Messaging",
        description:
          "Complex ideas, products, or processes become easy to grasp in seconds.",
      },
      {
        title: "Better Conversion Rates",
        description:
          "Landing pages and ads with motion graphics consistently see stronger click-through and conversion numbers.",
      },
      {
        title: "Stronger Brand Recall",
        description:
          "Consistent animated elements make your brand more memorable across every platform.",
      },
      {
        title: "SEO Advantage",
        description:
          "Because we operate as an SEO company in India too, our videos are built with metadata, thumbnails, and on-page placement that actually help your content rank, not just look pretty.",
      },
      {
        title: "Platform Versatility",
        description:
          "One core video concept, repurposed into formats for YouTube, Instagram, LinkedIn, and paid ads.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Eddinet as Your Motion Graphics & SEO Company in India",
      points: [
        "We understand ranking, not just rendering. Being an established SEO company in India means we know how content behaves in search results, not just on a screen. That perspective shapes how we script, title, and optimize every video we make.",
        "One team, zero back-and-forth. Scriptwriters, designers, animators, and sound editors work together internally, so you're not chasing five freelancers to finish one video.",
        "Real revisions, not empty promises. We build feedback rounds into every project timeline because we know the first draft is rarely the final one.",
        "Honest timelines. We tell you upfront how long a project will realistically take — no vague \"soon\" answers.",
        "Work that's built to perform, not just impress. Every motion graphic we deliver is judged by one question: does it help the business grow? If it doesn't move the needle, we go back and fix it.",
      ],
    },
    process: {
      heading: "Our Process",
      steps: [
        {
          num: "01",
          title: "Discovery Call",
          description:
            "We start by understanding your brand, your audience, and what the video is actually meant to achieve — awareness, leads, or explanation.",
        },
        {
          num: "02",
          title: "Scripting & Storyboarding",
          description:
            "Every good animation starts on paper. We write the script and map out the storyboard before a single frame is animated.",
        },
        {
          num: "03",
          title: "Style Frames & Concept Design",
          description:
            "You'll see how the final video is going to look and feel before we commit to full production, so there are no surprises later.",
        },
        {
          num: "04",
          title: "Animation & Motion Design",
          description:
            "Our animators bring the storyboard to life, frame by frame, with attention to pacing, transitions, and brand color consistency.",
        },
        {
          num: "05",
          title: "Sound Design & Voiceover",
          description:
            "Music, sound effects, and voiceover are layered in to match the mood and tone of the video.",
        },
        {
          num: "06",
          title: "Review & Revisions",
          description:
            "You get to review the draft and request changes. We don't consider a project done until you're genuinely happy with it.",
        },
        {
          num: "07",
          title: "Final Delivery",
          description:
            "You receive the finished file in whatever format and resolution your platform needs, ready to publish.",
        },
      ],
    },
    faqs: [],
  },

  // ==========================================================================
  //  WEB DEVELOPMENT CHILD PAGES  (/services/web-development/<slug>)
  // ==========================================================================

  "custom-website-design": {
    slug: "custom-website-design",
    category: "web-development",
    title: "Custom Website Design",
    metaTitle: "Custom Website Design Services in India | Eddinet",
    metaDescription:
      "Websites that don't just look good — they bring in business. Eddinet designs custom websites built to convert: fast, functional, and made around your business, not a template. Get a free consultation.",
    heroHeading: "Custom Website Design Services in Delhi NCR",
    heroSubheading:
      "Websites that don't just look good — they bring in business. Your website should be your best salesperson, not a digital brochure nobody reads. At Eddinet, we design custom websites built to convert — fast, functional, and made around your business, not a template. New site, redesign, or online store — our goal stays the same: turn visitors into customers.",
    about:
      "Eddinet is a team of designers, developers, and strategists who build websites that actually perform — not just look good in a screenshot. We've worked across healthcare, real estate, e-commerce, education, and hospitality, so we get to your business fast instead of starting from zero.\n\nWe treat every project like it's the only one we're working on — which is why clients keep coming back for their next website, redesign, or campaign page.",
    features: [
      {
        title: "Custom Website Design",
        description:
          "No themes, no recycled templates. Every website we design is built from the ground up around your brand, your audience, and what you're trying to achieve — whether that's more inquiries, more bookings, or more online sales.",
      },
      {
        title: "Responsive & Mobile-First Design",
        description:
          "More than half your visitors are probably on their phones right now. We design for mobile first and scale up, so your site looks and works exactly right on any screen, not just \"acceptable.\"",
      },
      {
        title: "UI/UX Design",
        description:
          "A pretty website that confuses people isn't doing its job. We map out how visitors actually move through a site — where they click, where they hesitate, where they drop off — and design around that behavior.",
      },
      {
        title: "E-Commerce Website Design",
        description:
          "From product pages to checkout, we build online stores that make buying easy. Fewer clicks, clearer pricing, faster load times — the details that quietly kill or boost your conversion rate.",
      },
      {
        title: "Corporate & Business Websites",
        description:
          "For companies that need to look established and trustworthy online, we design professional websites that reflect where your business actually stands — not where a template thinks it should.",
      },
      {
        title: "Landing Pages for Campaigns",
        description:
          "Running ads or a specific campaign? We build landing pages built around one job: getting the visitor to take the action you want, without distractions pulling them elsewhere.",
      },
      {
        title: "CMS & Website Management",
        description:
          "We hand over websites you can actually update yourself — new pages, new images, new offers — without needing a developer every time you want to change a line of text.",
      },
    ],
    benefits: [
      {
        title: "Higher Conversions",
        description:
          "A site built around user behavior turns more visitors into leads or customers.",
      },
      {
        title: "Better Search Visibility",
        description:
          "Clean code and SEO-ready structure give you a real shot at ranking.",
      },
      {
        title: "Stronger First Impressions",
        description:
          "A professional, fast site builds trust before a customer even talks to you.",
      },
      {
        title: "Room to Grow",
        description:
          "Your site is built to scale as your business adds services, products, or locations.",
      },
      {
        title: "Less Time Managing It",
        description:
          "An easy-to-use backend means you're not stuck calling a developer for small updates.",
      },
      {
        title: "Consistent Branding",
        description:
          "Every page, button, and form feels like it belongs to the same business.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Eddinet for Custom Website Design Services in India",
      points: [
        "Outcome-Driven Design: We design for outcomes, not just aesthetics. Every design choice is directly tied to your actual conversion and business goals.",
        "Fully Custom Layouts: We build custom sites tailored to your brand, audience, and competitors. No stock layouts or recycled templates allowed.",
        "Long-Term Partnership: We stay involved long after launch to handle updates, fixes, and ongoing growth. You will never be left hanging post-live.",
        "Transparent Communication: No black-box processes or radio silence. You will always know your project's status and review work before it goes live.",
        "Built-In SEO: We optimize for search engines from day one with fast load times, clean code, and a launch-ready structure built to rank.",
      ],
    },
    process: {
      heading: "Our Website Design Process",
      steps: [
        {
          num: "01",
          title: "Discovery Call",
          description:
            "We start by understanding your business, your customers, and what's not working with your current site (if you have one). No assumptions, no generic questionnaires.",
        },
        {
          num: "02",
          title: "Research & Strategy",
          description:
            "We look at your competitors, your industry, and your target audience before touching a single design element. This is the step most agencies skip — and it shows in the final product.",
        },
        {
          num: "03",
          title: "Wireframes & Structure",
          description:
            "Before anything looks \"designed,\" we map out the structure, what goes where, and why. You'll see and approve the skeleton before we build on top of it.",
        },
        {
          num: "04",
          title: "Visual Design",
          description:
            "This is where your brand comes to life — colors, typography, imagery, layout — all built to match how you want your business perceived.",
        },
        {
          num: "05",
          title: "Development",
          description:
            "Our developers turn approved designs into a fast, functioning website with clean code, built on WordPress, Shopify, or a custom stack depending on what your business actually needs.",
        },
        {
          num: "06",
          title: "Testing, SEO & Launch",
          description:
            "Before we hand anything over, we test across devices and browsers, set up basic SEO foundations, and make sure your site loads fast. Then, and only then, we launch.",
        },
      ],
    },
    faqs: [
      {
        q: "What does custom website design actually mean?",
        a: "It means your site is built from scratch around your brand and business goals — no recycled templates, no generic layouts.",
      },
      {
        q: "Do you design responsive, mobile-friendly websites?",
        a: "Yes, every website we build is fully responsive and tested across devices, so it works the same whether someone's on a phone, tablet, or desktop.",
      },
      {
        q: "How long does a custom website take to build?",
        a: "Most projects take 4–8 weeks depending on complexity. E-commerce or larger sites can take a bit longer. We'll give you a clear timeline upfront.",
      },
      {
        q: "Can you also help with SEO?",
        a: "Yes. Every website we build is set up with clean code and basic SEO foundations, and we offer ongoing SEO support if you want to go further.",
      },
      {
        q: "Do you offer website maintenance after launch?",
        a: "Yes, we provide ongoing updates, fixes, and support so your site stays secure and up to date long after it goes live.",
      },
      {
        q: "What platforms do you build on?",
        a: "WordPress, Shopify, or a custom stack — whichever fits your business, budget, and long-term plans best.",
      },
      {
        q: "Will the website match my existing brand?",
        a: "Yes, that's the whole point of a custom build — every design decision is made around your brand, not the other way around.",
      },
      {
        q: "Can I update the website myself after it's built?",
        a: "Absolutely. We hand over an easy-to-use CMS so you can update pages, images, and content without needing a developer for every small change.",
      },
    ],
  },

  "website-development": {
    slug: "website-development",
    category: "web-development",
    title: "Website Development",
    metaTitle: "Development Services in Delhi | Eddinet",
    metaDescription:
      "Looking for reliable development services in Delhi? Eddinet builds websites, web apps and custom software on time, tested properly, and built to keep working long after you've paid the invoice.",
    heroHeading: "Website Development Services in Delhi NCR",
    heroSubheading:
      "Searching for development services in Delhi? You've probably noticed the same pattern — big promises, missed deadlines, and websites that still have bugs at launch. Eddinet builds things differently: on time, tested properly, and built to keep working long after you've paid the invoice. We're a Delhi-based team building websites, web apps, and custom software for businesses that want results, not excuses.",
    about:
      "Eddinet started with a simple frustration — watching clients get burned by agencies that oversold and underdelivered. So we built something different: a team where the person coding your project is someone you can actually talk to.\n\nToday, we're one of the more trusted names offering development services in Delhi, and we still work by the same rule — fewer clients, better work. We take on projects we know we can genuinely deliver on, not everything that walks through the door.",
    features: [
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
        title: "One Team, Not a Freelancer Chain",
        description:
          "Design, dev, testing, and support under one roof.",
      },
      {
        title: "Realistic Timelines",
        description:
          "We commit to what we can actually deliver.",
      },
      {
        title: "Full Code Ownership",
        description:
          "No lock-in, no black boxes.",
      },
      {
        title: "SEO-Conscious Builds",
        description:
          "Clean code and fast load times from day one.",
      },
      {
        title: "Local Availability, Global Standards",
        description:
          "Easy to reach, built to a high bar.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Us for Development Services in Delhi",
      points: [
        "Plenty of agencies offer development services in Delhi. Fewer treat your project like it actually matters. At Eddinet, we say no to work we can't do well, communicate in plain language, and build for the long term with clean, documented code.",
        "If you're looking for the best development services in Delhi and want a team that sticks around after launch, let's talk about what you're building.",
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
    faqs: [
      {
        q: "What kind of development services does Eddinet offer in Delhi?",
        a: "We offer website development, web application development, e-commerce development, WordPress development, custom software, and ongoing maintenance — all handled by one in-house team based in Delhi.",
      },
      {
        q: "How much do development services cost in Delhi?",
        a: "It depends on scope — a simple business website costs far less than a custom web app or e-commerce platform. We give you a clear, itemized quote after understanding your requirements, with no hidden charges later.",
      },
      {
        q: "How long does a typical project take?",
        a: "Most business websites take 2–4 weeks, while custom web apps or e-commerce builds usually take 6–10 weeks depending on features. We share a realistic timeline upfront during the planning stage.",
      },
      {
        q: "Do you only work with businesses in Delhi?",
        a: "No. While we're based in Delhi and love meeting clients in person when possible, we also work with businesses across India and internationally, fully remote if needed.",
      },
      {
        q: "Will I own the code and design once the project is delivered?",
        a: "Yes. There's no vendor lock-in — once the project is complete, the code, design files, and access are fully yours.",
      },
      {
        q: "Do you provide support after the website or app goes live?",
        a: "Yes. We offer ongoing maintenance packages covering updates, security, bug fixes, and new features, so your project keeps running smoothly long after launch.",
      },
      {
        q: "Why should I choose Eddinet over other agencies offering development services in Delhi?",
        a: "Because we say no to projects we can't do justice to, communicate in plain language, stick to realistic timelines, and build with clean, well-documented code that's easy to maintain or hand off in the future.",
      },
    ],
  },

  "wordpress-development": {
    slug: "wordpress-development",
    category: "web-development",
    title: "WordPress Development",
    metaTitle: "WordPress Development Services in India | Eddinet",
    metaDescription:
      "Your website is your business's first impression — and if it's slow, outdated, or breaks on mobile, customers leave in a single click. Eddinet builds WordPress websites that load fast, rank on Google and convert.",
    heroHeading: "WordPress Development Services in Delhi NCR",
    heroSubheading:
      "Your website is your business's first impression — and if it's slow, outdated, or breaks on mobile, potential customers leave in a single click. That's why businesses of every size trust Eddinet for WordPress Development Services in India. We build websites that load fast, rank on Google, and turn visitors into paying customers — whether it's a simple business site or a high-traffic online store.",
    about:
      "Eddinet is an India-based team specializing in WordPress Web Solutions — from custom theme design and plugin development to core-level PHP customization.\n\nWe build every website around your actual business goals, not a generic template. That's what makes us a long-term partner for businesses that want real results, not just \"a website that's live.\"",
    features: [
      {
        title: "Custom WordPress Website Development",
        description:
          "We design websites from scratch that reflect your brand identity — no cookie-cutter templates, just a site built specifically for your business.",
      },
      {
        title: "WordPress Theme & Plugin Customization",
        description:
          "If your current WordPress site isn't meeting your needs, we customize existing themes and plugins or build entirely new, purpose-fit solutions.",
      },
      {
        title: "WooCommerce & E-Commerce Development",
        description:
          "Whether you're launching an online store or scaling an existing one, we build secure, fast-loading WooCommerce stores with smooth, conversion-friendly checkouts.",
      },
      {
        title: "Website Migration & Redesign",
        description:
          "We migrate outdated or slow websites onto a modern WordPress setup without losing your existing SEO rankings.",
      },
      {
        title: "WordPress Maintenance & Support",
        description:
          "Work doesn't stop at launch. We provide ongoing updates, security monitoring, backups, and performance optimization to keep your site running smoothly.",
      },
      {
        title: "SEO-Friendly Development",
        description:
          "Every website we build follows technical SEO best practices — clean code, fast load times, and mobile-first structure so both Google and your visitors love it.",
      },
    ],
    benefits: [
      {
        title: "Faster Load Times",
        description:
          "Optimized code and clean architecture mean your site loads quickly, reducing bounce rates.",
      },
      {
        title: "Mobile-Responsive Design",
        description:
          "Every website works perfectly across mobile, tablet, and desktop.",
      },
      {
        title: "Scalable Architecture",
        description:
          "As your business grows, your website grows with it — no rebuilds needed.",
      },
      {
        title: "SEO-Ready Foundation",
        description:
          "A search-engine-optimized structure that helps you attract organic traffic.",
      },
      {
        title: "Easy Content Management",
        description:
          "WordPress's intuitive backend lets you update content without needing a developer.",
      },
      {
        title: "Ongoing Reliability",
        description:
          "Regular maintenance and security updates keep your site safe and current.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Us for WordPress Development Services in India",
      points: [
        "Real Expertise, Not Just Templates: Our team understands WordPress at a deep level, allowing us to go beyond pre-built templates and deliver truly custom solutions.",
        "Transparent Pricing & Timelines: No hidden costs, no surprise delays. You get clear expectations before the project even begins.",
        "Dedicated Support: We don't disappear after delivery. You get a dedicated point of contact for any query or update.",
        "Proven Track Record: Eddinet has worked with businesses across industries, solving unique challenges with customized solutions.",
        "Result-Driven Approach: Every design decision and development choice is made with one goal: improving your business results.",
      ],
    },
    process: {
      heading: "Our WordPress Web Solutions Process",
      steps: [
        {
          num: "01",
          title: "Discovery & Requirement Gathering",
          description:
            "We understand your business, target audience, and goals, then map out a clear project roadmap.",
        },
        {
          num: "02",
          title: "Planning & Wireframing",
          description:
            "We plan the site structure and user flow so the final product is logical and easy to navigate.",
        },
        {
          num: "03",
          title: "Design",
          description:
            "Our design team creates visually appealing, brand-aligned mockups for your review.",
        },
        {
          num: "04",
          title: "Development",
          description:
            "Our developers write clean, scalable code with custom features, plugin integrations, and responsive layouts.",
        },
        {
          num: "05",
          title: "Testing & QA",
          description:
            "Every page, form, and feature is tested across devices and browsers before launch.",
        },
        {
          num: "06",
          title: "Launch",
          description:
            "Your website goes live with a smooth transition and zero downtime.",
        },
        {
          num: "07",
          title: "Post-Launch Support",
          description:
            "We stay involved after launch with updates, monitoring, and continuous improvements.",
        },
      ],
    },
    faqs: [
      {
        q: "How much does WordPress development cost?",
        a: "Cost depends on project complexity — a simple business website costs significantly less than an advanced e-commerce store or custom web application. Eddinet provides a clear, transparent quote for every project with no hidden charges.",
      },
      {
        q: "How long does it take to build a website?",
        a: "Simple websites are typically ready in 2–3 weeks, while projects with custom features or e-commerce integrations can take 4–8 weeks. The exact timeline is confirmed after requirement gathering.",
      },
      {
        q: "Can my existing website be migrated to WordPress?",
        a: "Absolutely. We safely migrate existing websites to WordPress without losing your SEO rankings — all content, URLs, and data are transferred properly.",
      },
      {
        q: "Is WordPress good for SEO?",
        a: "Yes. WordPress is naturally SEO-friendly, and we build every site with clean code, fast load speeds, and a mobile-first structure to improve both search rankings and user experience.",
      },
      {
        q: "Do you provide support after the website goes live?",
        a: "Yes. Eddinet provides ongoing maintenance, security updates, backups, and performance monitoring, so your website continues to run smoothly for months and years after launch.",
      },
      {
        q: "Can you build a WooCommerce store?",
        a: "Yes, we build secure, fast-loading WooCommerce stores fully equipped with product management, payment integration, and a smooth checkout experience.",
      },
      {
        q: "What if I only need changes to my existing WordPress site?",
        a: "That's not a problem — we customize or upgrade existing themes, plugins, and functionality without needing to rebuild the entire website from scratch.",
      },
    ],
  },

  "shopify-development": {
    slug: "shopify-development",
    category: "web-development",
    title: "Shopify Development",
    metaTitle: "Shopify & WooCommerce Development Services in India | Eddinet",
    metaDescription:
      "An online store is only as good as the experience it gives your customers. Eddinet builds Shopify & WooCommerce stores that load fast, convert visitors into buyers, and scale smoothly as your business grows.",
    heroHeading: "Shopify & WooCommerce Development Services in Delhi NCR",
    heroSubheading:
      "An online store is only as good as the experience it gives your customers. If checkout feels clunky or the site lags on mobile, shoppers abandon their cart and buy from a competitor instead. That's why growing brands and established retailers alike choose Eddinet for Shopify & WooCommerce Development Services in India. We build stores that load fast, convert visitors into buyers, and scale smoothly as your business grows.",
    about:
      "Eddinet is an India-based development team specializing in Shopify Woo Solutions — from custom Shopify themes to fully tailored WooCommerce builds.\n\nWe design every store around how your customers actually shop, not a one-size-fits-all template. That focus on real buying behavior is what makes our stores convert better than a standard setup.",
    features: [
      {
        title: "Custom Shopify Store Development",
        description:
          "We design and build Shopify stores from the ground up — clean navigation, fast product pages, and a checkout flow built to convert.",
      },
      {
        title: "WooCommerce Store Development",
        description:
          "For businesses that want full control over their store, we build secure, scalable WooCommerce sites on WordPress, tailored to your exact catalog and workflow.",
      },
      {
        title: "Theme Customization & Store Redesign",
        description:
          "Already have a store that isn't performing? We redesign and customize existing Shopify or WooCommerce themes to improve speed, usability, and conversions.",
      },
      {
        title: "Payment Gateway & Shipping Integration",
        description:
          "We integrate the payment gateways, shipping providers, and tax rules your business needs, so orders move smoothly from cart to delivery.",
      },
      {
        title: "App & Plugin Integration",
        description:
          "From inventory management to marketing automation, we connect the right Shopify apps and WooCommerce plugins to extend your store's functionality.",
      },
      {
        title: "Store Migration",
        description:
          "Moving from Shopify to WooCommerce, WooCommerce to Shopify, or from another platform entirely — we handle migrations without losing your product data, SEO rankings, or order history.",
      },
      {
        title: "Ongoing Store Maintenance & Support",
        description:
          "We provide continuous updates, security monitoring, and performance checks so your store stays fast, safe, and always ready for traffic spikes.",
      },
    ],
    benefits: [
      {
        title: "Faster Page Load Speed",
        description:
          "Optimized themes and clean code reduce load times, which directly improves conversions.",
      },
      {
        title: "Mobile-First Shopping Experience",
        description:
          "Every store is built to perform flawlessly on the devices your customers actually shop on.",
      },
      {
        title: "Higher Checkout Conversions",
        description:
          "Streamlined checkout flows reduce cart abandonment and turn more visitors into buyers.",
      },
      {
        title: "Built to Scale",
        description:
          "Whether you're processing ten orders a day or ten thousand, your store architecture grows with you.",
      },
      {
        title: "SEO-Ready Structure",
        description:
          "Clean site architecture and technical SEO best practices help your products get found on Google.",
      },
      {
        title: "Reliable Ongoing Support",
        description:
          "Regular maintenance keeps your store secure and running smoothly, even during high-traffic sales periods.",
      },
    ],
    whyChooseUs: {
      heading: "Why Choose Us for Shopify & WooCommerce Development Services in India",
      points: [
        "Platform-Agnostic Expertise: We're equally skilled in Shopify and WooCommerce, so you get honest platform advice, not a one-size-fits-all pitch.",
        "Conversion-Focused Design: Every layout and flow decision is made with one goal: turning browsers into buyers.",
        "Transparent Pricing & Timelines: Clear quotes and realistic timelines from the start, with no hidden costs along the way.",
        "Dedicated Support: You get a direct point of contact for updates, questions, or urgent fixes — not a generic support ticket queue.",
        "Proven E-Commerce Experience: We've built and scaled stores across multiple industries, adapting to each business's unique catalog and customer base.",
      ],
    },
    process: {
      heading: "Our Shopify Woo Solutions Process",
      steps: [
        {
          num: "01",
          title: "Discovery & Planning",
          description:
            "We learn your product catalog, target customers, and business goals to map out the right approach.",
        },
        {
          num: "02",
          title: "Platform Strategy",
          description:
            "We help you decide between Shopify and WooCommerce based on your budget, scale, and long-term plans, if you haven't already chosen.",
        },
        {
          num: "03",
          title: "Design",
          description:
            "We create a store layout and visual design aligned with your brand, built to guide shoppers toward checkout.",
        },
        {
          num: "04",
          title: "Development & Integrations",
          description:
            "Our developers build out the store, connect payment gateways, shipping rules, and any required apps or plugins.",
        },
        {
          num: "05",
          title: "Testing & QA",
          description:
            "We test every product page, cart flow, and checkout path across devices to catch issues before launch.",
        },
        {
          num: "06",
          title: "Launch",
          description:
            "Your store goes live with a smooth transition and no disruption to existing orders or customers.",
        },
        {
          num: "07",
          title: "Post-Launch Support",
          description:
            "We continue monitoring performance and providing updates as your store grows.",
        },
      ],
    },
    faqs: [
      {
        q: "Should I choose Shopify or WooCommerce for my store?",
        a: "It depends on your budget, technical needs, and growth plans. Shopify offers a faster, more managed setup, while WooCommerce gives you more control and flexibility on your own WordPress site. We help you choose based on what fits your business, not a fixed agenda.",
      },
      {
        q: "How much does Shopify or WooCommerce development cost?",
        a: "Cost depends on store complexity, number of products, and the integrations you need. Eddinet provides a clear, transparent quote after understanding your requirements — no hidden charges.",
      },
      {
        q: "How long does it take to build an online store?",
        a: "A standard store is typically ready in 3–4 weeks, while stores with custom features, multiple integrations, or large catalogs can take 5–8 weeks.",
      },
      {
        q: "Can you migrate my existing store to Shopify or WooCommerce?",
        a: "Yes. We migrate stores between platforms without losing product data, order history, or existing SEO rankings.",
      },
      {
        q: "Will my store be optimized for mobile shoppers?",
        a: "Absolutely. Every store we build is designed mobile-first, since the majority of online shopping now happens on phones.",
      },
      {
        q: "Do you provide support after the store goes live?",
        a: "Yes. We offer ongoing maintenance, security monitoring, and performance support to keep your store running smoothly long after launch.",
      },
      {
        q: "Can you integrate specific payment gateways or shipping providers?",
        a: "Yes, we integrate the payment gateways, shipping partners, and tax configurations specific to your business and target market.",
      },
    ],
  },
};

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
      "We don't outsource your work to random freelancers. Every project is handled by our in-house team, so quality stays consistent.",
      "We explain our decisions. If we recommend a keyword strategy or a design direction, we'll tell you why — no vague jargon.",
      "We move at a realistic pace. Good SEO and good design both take real work; we won't promise page-one rankings in a week, but we will show you steady, honest progress.",
      "We stay involved after launch. Our work doesn't end when a design is delivered or a campaign goes live — we track, adjust, and keep improving.",
      "We've done this across industries. From healthcare to real estate to e-commerce, we've learned what works and what doesn't, so you're not paying for our learning curve.",
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
      "We say no to work we can't do well, so every project we take on is handled properly.",
      "We communicate in plain language — clear updates, no jargon, no surprises.",
      "We build for the long term with clean, well-documented code that's easy to maintain or hand off.",
      "We stick around after launch, offering ongoing support, fixes, updates, and future features.",
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

export const docxCategoryPages: Record<string, DocxCategoryContent> = {
  seo: docxSeoCategory,
  "design-creative": docxDesignCreativeCategory,
  "web-development": docxWebDevelopmentCategory,
};

// ============================================================================
//  MERGE HELPER
//    Overlays a DocxPageContent entry on top of an existing (legacy) child
//    record. Docx copy wins for all authored fields; empty docx collections
//    (e.g. faqs: [] when the document had no FAQ tab) and structural fields
//    not present in the docx (image, metrics, testimonials, crossLinks, ...)
//    fall back to the legacy record so nothing renders broken or empty.
// ============================================================================

export interface DocxMergeBase {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  detailedDescription: string;
  features: DocxSection[];
  featuresHeading?: string;
  featuresDescription?: string;
  benefits: DocxSection[];
  benefitsHeading?: string;
  benefitsDescription?: string;
  faqs: DocxFaq[];
  whyChooseUs: { heading: string; description?: string; points: string[] };
  process: { heading: string; description?: string; steps: DocxProcessStep[] };
}

export function mergeDocxChildContent<T extends DocxMergeBase>(
  slug: string,
  base: T
): T {
  const dx = docxChildPages[slug];
  if (!dx) return base;
  return {
    ...base,
    title: dx.title,
    metaTitle: dx.metaTitle,
    metaDescription: dx.metaDescription,
    heroHeading: dx.heroHeading,
    heroSubheading: dx.heroSubheading,
    detailedDescription: dx.about,
    features: dx.features.length ? dx.features : base.features,
    featuresHeading: dx.featuresHeading ?? base.featuresHeading,
    featuresDescription: dx.featuresDescription ?? base.featuresDescription,
    benefits: dx.benefits.length ? dx.benefits : base.benefits,
    benefitsHeading: dx.benefitsHeading ?? base.benefitsHeading,
    benefitsDescription: dx.benefitsDescription ?? base.benefitsDescription,
    faqs: dx.faqs.length ? dx.faqs : base.faqs,
    whyChooseUs: {
      ...base.whyChooseUs,
      heading: dx.whyChooseUs.heading,
      description: dx.whyChooseUs.description ?? base.whyChooseUs.description,
      points: dx.whyChooseUs.points.length
        ? dx.whyChooseUs.points
        : base.whyChooseUs.points,
    },
    process: {
      ...base.process,
      heading: dx.process.heading,
      description: dx.process.description ?? base.process.description,
      steps: dx.process.steps.length ? dx.process.steps : base.process.steps,
    },
  };
}