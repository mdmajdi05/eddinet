import {
  services,
  itemDetails,
  faqsByService,
  relatedServices,
  type Service,
} from "./services";
import { seoItemToSlug } from "./seo-child-services";

export interface GeneratedChildFeature {
  title: string;
  description: string;
}

export interface GeneratedChildStep {
  num: string;
  title: string;
  description: string;
}

export interface GeneratedChildMetric {
  value: string;
  label: string;
}

export interface GeneratedChildTestimonial {
  name: string;
  designation: string;
  review: string;
}

export interface GeneratedChildFaq {
  q: string;
  a: string;
}

export interface GeneratedChildCrossLink {
  title: string;
  slug: string;
  description: string;
}

export interface GeneratedChildService {
  slug: string;
  categorySlug: string;
  categoryTitle: string;
  categoryIcon: string;
  item: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  image: string;
  detailedDescription: string;
  features: GeneratedChildFeature[];
  benefits: GeneratedChildFeature[];
  metrics: GeneratedChildMetric[];
  whyChooseUs: { heading: string; points: string[] };
  process: { heading: string; steps: GeneratedChildStep[] };
  testimonials: GeneratedChildTestimonial[];
  faqs: GeneratedChildFaq[];
  crossLinks: GeneratedChildCrossLink[];
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export interface CategoryTemplate {
  approach: string;
  features: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  whyHeading: string;
  whyPoints: string[];
  extraFaqs?: { q: string; a: string }[];
}

const templates: Record<string, CategoryTemplate> = {
  "social-media-marketing": {
    approach:
      "Social media for a business is not about posting more — it's about being seen by the people who actually buy. At Eddinet, we run social media as a demand engine connected to the rest of your marketing. That means platform-specific strategy, content your audience stops scrolling for, daily community management and paid amplification that boosts what already works — all tied back to leads, sales and brand growth instead of vanity metrics.\n\nWe start by understanding where your buyers actually spend time and what kind of content they respond to in your industry, then build a monthly content system around that. The same post never needs to be recycled across channels: we produce native content for Instagram, Facebook, LinkedIn, YouTube and X, matched to each platform's format, algorithm and audience behaviour. Every month is planned on a calendar, reviewed against performance data and improved — so the content gets sharper, not just more frequent.\n\nSocial media done properly also feeds everything else you do. Content that performs builds retargeting audiences for paid ads, feeds your SEO with authority signals and gives your sales team social proof to close deals. Whether you need Instagram marketing, LinkedIn management, YouTube marketing, Meta ads or a complete social media marketing strategy in Delhi NCR, we build it as one connected system — planned, produced, published and measured against the outcomes that matter.",
    features: [
      {
        title: "Platform Strategy & Positioning",
        description:
          "We identify where your buyers are, what they respond to and how your brand should sound on each channel — then map the full mix to your business goals before a single post goes live. No scattered posting, no copy-pasted captions from one platform to another.",
      },
      {
        title: "Content Calendar & Production",
        description:
          "Planned, on-brand content built for each platform's format, algorithm and audience behaviour — reels, carousels, short videos, LinkedIn thought leadership and X threads produced on a dependable monthly cadence your team can plan around.",
      },
      {
        title: "Community Management",
        description:
          "Comments, DMs and mentions handled daily to build real relationships with your audience. Fast, on-brand responses turn followers into enquiries — instead of letting questions, complaints and sales conversations sit unanswered in your inbox.",
      },
      {
        title: "Growth & Audience Research",
        description:
          "Data-backed targeting, trending formats and content angles that attract the right followers — researched from your competitors, search trends and what your best customers already respond to.",
      },
      {
        title: "Reporting & Optimisation",
        description:
          "Clear dashboards tying reach and engagement to enquires, clicks and conversions. Every report ends with what we learnt and what we'll do differently next month — not just a wall of numbers.",
      },
      {
        title: "Paid Amplification Support",
        description:
          "Native ad integration across Meta, LinkedIn and YouTube that puts budget behind your best organic content — so strong posts reach beyond your existing followers and into a much larger lookalike audience.",
      },
      {
        title: "Influencer & Creator Collaboration",
        description:
          "Identification, outreach and management of creators whose audiences match your buyer persona, giving your brand the third-party credibility that earned content can't always deliver alone.",
      },
      {
        title: "Social Listening & Sentiment Tracking",
        description:
          "Monitoring what's being said about your brand, your competitors and your industry — so you catch trends early, respond to complaints fast and keep your reputation ahead of problems.",
      },
    ],
    steps: [
      {
        title: "Discovery & Full Audit",
        description:
          "We review your current presence, competitors and audience — including which posts worked, which flopped and where your competitors are winning attention — to identify the fastest opportunities.",
      },
      {
        title: "Strategy & Roadmap",
        description:
          "Channel plan, content pillars, tone of voice and a 30/60/90-day roadmap are agreed before we start creating, so everyone knows exactly what's being done and why.",
      },
      {
        title: "Content & Campaign Build",
        description:
          "Assets, captions and schedules are produced per platform and aligned to your monthly editorial calendar, with a mix of brand, educational, social proof and promotional content.",
      },
      {
        title: "Publishing & Daily Community",
        description:
          "Posts go live on schedule with active community management — comments answered, DMs responded to and engagement seeded — so the brand is present every single day, not just on posting days.",
      },
      {
        title: "Measure & Iterate",
        description:
          "Performance is reviewed monthly, winning formats are doubled down on, weak content is replaced and the strategy is refined from real response data rather than opinions.",
      },
      {
        title: "Scale What Works",
        description:
          "Once a format, angle or campaign proves itself organically, we scale it with paid amplification and creator collaboration to compound the results month over month.",
      },
    ],
    benefits: [
      {
        title: "Consistent, On-Brand Presence",
        description:
          "A recognisable voice and look across every channel you're active on, so your audience always knows it's you — and increasingly trusts that what you post is worth their time.",
      },
      {
        title: "Engagement From Buyers, Not Just Followers",
        description:
          "We optimise for meaningful interaction from the people who can actually buy — enquiries, shares and conversations — rather than inflating follower counts that never convert.",
      },
      {
        title: "Content That Supports Sales & SEO",
        description:
          "Every asset feeds your ecosystem: strong content powers retargeting pools for paid ads, reinforces brand searches in SEO and gives your team credible material to share in sales conversations.",
      },
      {
        title: "Clear Reporting Tied to Outcomes",
        description:
          "Reports connect social activity to business results — traffic, leads and brand mentions — so you always know what your social media spend is returning, not just how many people saw it.",
      },
      {
        title: "Time Back in Your Week",
        description:
          "Our team handles the planning, writing, design, posting and community management, so your founders and staff stop being unpaid social media managers and get back to running the business.",
      },
      {
        title: "A Reputation That Compounds",
        description:
          "Months of consistent, quality content and fast, helpful responses build a brand people remember and recommend — a moat that competitors can't buy with ads.",
      },
    ],
    whyHeading: "Why Businesses Pick Eddinet for Social Media in India",
    whyPoints: [
      "Growth System, Not a Vanity Channel: We treat social as part of your growth system, not a separate vanity channel reporting likes and impressions.",
      "Platform-Smart Content: Content is built for the platform and the buyer with a consistent monthly cadence your team can plan around.",
      "Human Community Management: Community is managed daily by real humans — not scheduled bots — so enquiries never sit unanswered.",
      "Paid + Organic Together: Paid and organic are planned together, so budget amplifies content that has already proved itself.",
      "Impact-Focused Reporting: Reporting shows engagement quality and business impact, with clear recommendations every single month.",
      "One System Across Platforms: We run Meta, Instagram, LinkedIn, YouTube and X as one system — not five separate agencies.",
    ],
    extraFaqs: [
      {
        q: "How often will you post on our channels?",
        a: "We build a cadence based on your audience and resources — typically 12 to 20 posts per channel per month, with daily stories or status updates where they add value — and adjust constantly based on what the data shows is working. Consistency beats volume: we'd rather post four great pieces than ten rushed ones.",
      },
      {
        q: "Do you manage paid social ads too?",
        a: "Yes. We run Meta, LinkedIn and YouTube ad campaigns as part of the same content system, amplifying your best organic content into lookalike audiences. Because the ads are built on content that's already proven, we protect spend efficiency and scale only what works.",
      },
      {
        q: "How long before we see results from social media?",
        a: "Consistency compounds. Most brands see clear movement in engagement and audience quality within 4 to 8 weeks, and measurable enquiries or traffic within a quarter — provided the strategy, content and community system is given time to build momentum. We set honest milestones at the start so expectations are realistic.",
      },
      {
        q: "Can you handle our content creation too?",
        a: "Yes — copywriting, design, short-video editing and captions are all included. We handle the full production pipeline and deliver final, ready-to-post assets. If you have your own in-house creative, we can also work as a strategy-plus-management layer around your team.",
      },
    ],
  },

  "ads-ppc": {
    approach:
      "Paid advertising is not about how much you spend — it's about how much you get back for every rupee. At Eddinet, we treat paid media as engineered, measurable demand generation. Every campaign is structured around a conversion goal, built on proper tracking and managed with the efficiency of someone spending their own money — because your budget is exactly that.\n\nWe start where most agencies never look: a forensic audit of your accounts, conversion tracking and the actual numbers behind your cost per lead. Most businesses are bleeding budget on broken tracking, overlapping campaigns and wasted clicks before we ever increase a bid. That foundation gets fixed first, then we build campaigns around targeting, budget efficiency and conversion data — testing audiences, keywords and creatives in a structured way rather than guessing.\n\nEverything we do is accountable in plain numbers. You'll see spend, leads, cost per lead, CPA and ROAS in reports you can actually understand — with the creative, landing page and offer changes we're making and why. Whether you need Google Ads management, Google Ads in Delhi NCR, PPC services in India, Meta Ads, Performance Max, LinkedIn advertising, YouTube ads or Amazon PPC, we run it as one system engineered for efficient, scalable acquisition.",
    features: [
      {
        title: "Campaign Strategy & Account Structure",
        description:
          "Accounts structured around business goals, budgets and the buyer journey from day one — clean hierarchies, no overlapping campaigns and campaigns that match the language your customers actually search in.",
      },
      {
        title: "Keyword & Audience Targeting",
        description:
          "Search, Shopping, remarketing and audience targeting built on data and intent — not guesswork. The goal isn't more clicks, it's more of the right clicks at the right price.",
      },
      {
        title: "Ad Creative & Landing Page Alignment",
        description:
          "Ad copy, creatives and landing pages are matched to the search or ad promise, so clicks actually convert. A great ad pointing to a mismatched page just buys wasted clicks.",
      },
      {
        title: "Bid, Budget & Placement Management",
        description:
          "Continuous bid, budget and placement optimisation across Google, Meta, LinkedIn and YouTube — protecting efficiency first and scaling only where returns hold up.",
      },
      {
        title: "Conversion Tracking & Analytics",
        description:
          "Proper tracking and attribution from click to lead and sale for every campaign — so every decision is made on real data, not platform-reported guesses.",
      },
      {
        title: "Performance Reporting & Scaling",
        description:
          "Transparent reporting on spend, cost per lead, CPA and ROAS, with clear plans on what to scale, pause, split or kill next month.",
      },
      {
        title: "Remarketing & Audience Building",
        description:
          "Retargeting pools built from site visitors, engaged users and past buyers, nurtured with tailored creative until they're ready to convert.",
      },
      {
        title: "Landing Page CRO Support",
        description:
          "Conversion rate optimisation on your landing pages — headlines, forms, offers and speed — so the traffic we buy turns into enquiries at the highest possible rate.",
      },
    ],
    steps: [
      {
        title: "Audit & Opportunity Mapping",
        description:
          "We review your accounts, conversion tracking and competition to find the fastest profitable levers — and the waste that's silently burning budget today.",
      },
      {
        title: "Strategy & Correct Setup",
        description:
          "Campaign architecture, targeting, budgets and conversion tracking are configured correctly before a single rupee is spent. No launch before the foundation is right.",
      },
      {
        title: "Launch & Structured Testing",
        description:
          "Campaigns launch with a clear testing plan for audiences, keywords and creatives — measured methodically so we know what really performs and what just looks busy.",
      },
      {
        title: "Optimisation & Refinement",
        description:
          "Bids, budgets, keywords and creative are iterated weekly on conversion data — cutting waste, shifting budget to winners and improving quality score.",
      },
      {
        title: "Scale & Report",
        description:
          "Winning campaigns are scaled methodically and performance is reported clearly every month — with the numbers, the reasoning and the next month's plan.",
      },
      {
        title: "Compound & Expand",
        description:
          "Profitable playbooks are extended to new keywords, audiences, channels and geographies — turning a working campaign into a whole acquisition engine.",
      },
    ],
    benefits: [
      {
        title: "Lower Cost Per Acquisition",
        description:
          "Efficient targeting, clean structure and constant optimisation bring the cost of each lead and sale down — sometimes dramatically — without cutting volume.",
      },
      {
        title: "Faster, Measurable Results",
        description:
          "Unlike SEO, paid media generates demand within days, and every rupee can be accounted for in numbers you can see and verify yourself.",
      },
      {
        title: "Protection Against Wasted Spend",
        description:
          "Careful structure, negative keywords and strict rules stop budget burning on the wrong clicks — the problem that quietly bleeds most ad accounts.",
      },
      {
        title: "Data That Feeds the Whole Funnel",
        description:
          "Search and audience data from your ad campaigns strengthens SEO, content and landing page decisions — paid media becomes the lab for the whole marketing system.",
      },
      {
        title: "Methodical, Profitable Scaling",
        description:
          "We grow spend only where it's proven to convert, protecting your returns and margin as the budget increases month over month.",
      },
      {
        title: "No Lock-In to Guesswork",
        description:
          "Transparent reporting and clean setups mean you're never dependent on a black box — you understand what's running, why it's running and what it returns.",
      },
    ],
    whyHeading: "Why Businesses Pick Eddinet for Paid Media in India",
    whyPoints: [
      "Revenue-First Reporting: We report on cost per lead and ROAS, not impressions and vanity clicks.",
      "Conversion-Led Structure: Every campaign is structured around a conversion goal before it launches.",
      "Data Before Spend: Tracking is set up properly first, so all decisions are based on real data.",
      "Budget Treated as Trust: Your budget is treated as earned trust — spent only on what is proven to work.",
      "Full-Funnel Alignment: Creative, landing pages and offers are aligned to the ad promise so clicks convert.",
      "Connected System, Not Silos: One team runs Google, Meta, YouTube, LinkedIn and Amazon as a connected system.",
    ],
    extraFaqs: [
      {
        q: "Which ad platforms do you manage?",
        a: "We manage Google Ads (Search, Shopping, Performance Max, Display), Meta Ads, YouTube, LinkedIn Ads and Amazon Ads — chosen based on where your buyers actually are. Most engagements concentrate on one or two channels first, then expand to proven next options rather than spreading budget thin across everything.",
      },
      {
        q: "What budget do we need to start?",
        a: "It depends on your market and cost per acquisition, but we're transparent about it before you spend anything. We build a framework that protects efficiency first — starting with the channels that can return in your market — then scale the ones that prove profitable. A small well-managed budget beats a large mismanaged one every time.",
      },
      {
        q: "How quickly will we see results from paid ads?",
        a: "Paid media is the fastest channel: you can see clicks and conversions within the first week. But meaningful efficiency — stable cost per lead and ROAS — typically takes 4 to 8 weeks while testing and data accumulate. We report the real numbers from day one, including the learning period.",
      },
      {
        q: "Do you handle ad creative and landing pages?",
        a: "Yes. Ad copy and creative direction are part of our campaigns, and we align or rebuild landing pages so the click path converts. We also set up conversion tracking end to end, which is where most accounts leak money before we ever touch them.",
      },
    ],
  },

  "design-creative": {
    approach:
      "Design is not decoration — it's how your business is judged in the first three seconds. At Eddinet, we design creative that performs, not just prettifies. Every asset is built with a job to do: communicate your brand, make an offer clear, or win a click. Logos, brand identities, social creatives, ad banners and marketing collateral are all developed through strong concepts you see early and refined with structured feedback — not delivered as a mystery box at the end.\n\nGood design also needs to be practical. A gorgeous creative that isn't exported in the right sizes for Instagram, LinkedIn or a Google ad simply never runs. We deliver every asset in the exact formats, dimensions and resolutions your channels and printers need — plus editable source files and brand guidelines so your team and future projects stay consistent long after we hand over.\n\nFrom a full brand identity and logo design to social media creatives, ad banners, brochure design and marketing collateral in India, we treat design as a system, not a one-off deliverable. The brand, the website, the ads and the sales materials all speak the same visual language — so recognition and trust build faster, and every marketing rupee you spend works a little harder.",
    features: [
      {
        title: "Brand Identity & Logo Design",
        description:
          "Logos, colour systems, typography and brand guidelines that give your business a coherent, recognisable identity — designed to hold up across anything from a favicon to a billboard.",
      },
      {
        title: "Social Media & Ad Creative",
        description:
          "Scroll-stopping creatives built for Instagram, LinkedIn, Facebook, YouTube and paid ads — with multiple variants so you can test what actually performs instead of guessing.",
      },
      {
        title: "Website & App Visual Design",
        description:
          "UI design, layout systems and visual direction that make digital products look as professional as they work — consistent with your brand across every screen.",
      },
      {
        title: "Marketing Collateral",
        description:
          "Brochures, business cards, banners, pitch decks and print-ready material designed to sell — in the formats your printers and events actually need.",
      },
      {
        title: "Campaign & Performance Creative",
        description:
          "Creative engineered for attention and clicks, with concept directions and A/B variants so you can improve results through design, not just budget.",
      },
      {
        title: "Concept Directions & Iteration",
        description:
          "You review multiple strong directions early, then refine with structured revision rounds — no guesswork, no endless back-and-forth, no surprises.",
      },
      {
        title: "Platform-Ready Deliverables",
        description:
          "Every asset exported to the exact sizes, ratios and resolutions for web, social, ads and print — ready to run the moment it's in your hands.",
      },
      {
        title: "Source Files & Brand Tools",
        description:
          "Editable source files and documented brand guidelines that keep your identity consistent and reusable after the project ends.",
      },
    ],
    steps: [
      {
        title: "Brief & Reference Gathering",
        description:
          "We collect your goals, audience, brand guidelines and style references so design decisions are grounded in your strategy rather than personal taste.",
      },
      {
        title: "Concept Exploration",
        description:
          "We present multiple strong creative directions so you can react to real visuals — the fastest way to align on what your brand should feel like.",
      },
      {
        title: "Design & Refinement",
        description:
          "The chosen direction is developed in detail with structured revision rounds, keeping quality high and cycles tight.",
      },
      {
        title: "Production & Delivery",
        description:
          "Final files are prepared in every required format — including print bleed, web export sizes and source files — and organised for easy use.",
      },
      {
        title: "Brand Consistency Check",
        description:
          "Everything is verified against your identity system before handover, so consistency holds from your website to your signage.",
      },
      {
        title: "Support & Extend",
        description:
          "New formats, seasonal campaigns and additional assets are produced on demand from the same system, keeping the brand current without starting over.",
      },
    ],
    benefits: [
      {
        title: "Consistent Brand Recognition",
        description:
          "One coherent visual identity across web, social, ads, print and events — the repetition that makes customers remember you.",
      },
      {
        title: "Creative That Converts",
        description:
          "Design decisions made with clarity, attention and performance in mind — not just style — so assets earn their keep in campaigns.",
      },
      {
        title: "Faster Iteration, Fewer Cycles",
        description:
          "Clear processes and structured revision rounds mean less back-and-forth for you and faster turnaround on everything.",
      },
      {
        title: "Production-Ready Assets",
        description:
          "Every file delivered in the right format, size and resolution for the channel — no resizing, no broken layouts, no last-minute panic.",
      },
      {
        title: "A Brand System You Own",
        description:
          "Source files and guidelines stay yours, so your team, printers and agencies can all stay on-brand long after delivery.",
      },
      {
        title: "Design That Supports Growth",
        description:
          "Creative built as a system scales — new product launches, campaigns and channels reuse the same identity instead of starting from scratch.",
      },
    ],
    whyHeading: "Why Businesses Pick Eddinet for Design & Creative",
    whyPoints: [
      "Performance + Brand Together: We design for performance and brand together — never style in isolation.",
      "Early Direction, No Surprises: You review strong directions early instead of waiting for a surprise at the end.",
      "Production-Ready Deliverables: Every deliverable is production-ready for web, ads and print on handover.",
      "Structured Revisions: Structured revision rounds keep quality high without endless cycles.",
      "Your Files Stay Yours: Source files and brand guides remain yours for reuse and future work.",
      "One Connected Creative Team: Design, web and marketing are connected in one team — no translation losses.",
    ],
    extraFaqs: [
      {
        q: "Do you provide source design files?",
        a: "Yes. You receive final files in all the formats you need, and editable source files are available for ongoing projects. Ownership is clear and your brand assets stay yours to use with any partner, printer or future agency.",
      },
      {
        q: "How many revisions are included?",
        a: "Each project includes structured revision rounds so we get the result right — typically two to three rounds on the selected direction. The exact scope is confirmed upfront so there are no surprises or hidden charges.",
      },
      {
        q: "Can you design creative for our ad campaigns?",
        a: "Yes, and this is where performance design matters most. We produce multiple creative variants for Google and social ads with different hooks and formats so you can A/B test and improve click and conversion rates without increasing spend.",
      },
      {
        q: "Do you work with our existing brand guidelines?",
        a: "Absolutely. If you have an established brand, we extend and apply it consistently. If you don't, we build a lightweight brand system first — then apply it across every deliverable.",
      },
    ],
  },

  "web-development": {
    approach:
      "A website is judged in seconds — if it's slow, it loses trust before it loses the ranking. At Eddinet, we build websites that are fast, secure and engineered to rank. Development isn't an afterthought bolted onto marketing; it's built around Core Web Vitals, semantic structure, mobile-first UX and maintainability, so your SEO, content and campaigns never have to fight a site that wasn't built for performance.\n\nEvery project starts with discovery — what the site must sell, who it serves and where it will compete. We design the architecture for conversion and search, build in sprints you can review along the way, and test across real devices and speeds before anything goes live. The result is a site your team can actually run: a content management workflow that doesn't require a developer for every small change, code that isn't a mystery to maintain, and hosting and monitoring that keep it fast after launch.\n\nWhether you need a corporate website, a high-converting business website, a WordPress site, a custom Next.js or React build, or a full website rebuild that preserves your rankings, we deliver a digital foundation that converts visitors, ranks in search and scales with your business — not a brochure that goes stale on day one.",
    features: [
      {
        title: "Performance-First Engineering",
        description:
          "Speed and Core Web Vitals are treated as requirements from the first line of code — optimised images, caching, efficient JavaScript and a fast, reliable experience on every device and connection.",
      },
      {
        title: "SEO-Ready Structure",
        description:
          "Semantic markup, structured data, clean URLs and correct metadata built in from day one — so Google and AI search engines can crawl, understand and rank your pages without costly retrofits.",
      },
      {
        title: "Mobile-First Responsive Build",
        description:
          "Experiences designed for mobile first, then extended to desktop and tablet — tested across real devices, browsers and connection speeds, where most of your traffic actually lives.",
      },
      {
        title: "Secure & Maintainable Code",
        description:
          "Modern stacks, security best practices and clean, documented code your team can actually maintain — not a bespoke tangle only the original developer can touch.",
      },
      {
        title: "Content Management That Works",
        description:
          "Simple CMS workflows so your team can update pages, blogs, products and offers without breaking layouts or needing a developer for every change.",
      },
      {
        title: "Conversion-Focused Design",
        description:
          "Clear navigation, obvious calls to action, fast forms and strong visual hierarchy — engineering every screen to move visitors toward enquiry, purchase or signup.",
      },
      {
        title: "Analytics & Tracking Setup",
        description:
          "Search Console, Analytics, event tracking and conversion goals configured during the build, so you measure performance from the first visitor instead of after launch.",
      },
      {
        title: "Launch & Handover Support",
        description:
          "Staged testing, secure deployment, training and post-launch care — including hosting and monitoring options so the site stays fast once it's live.",
      },
    ],
    steps: [
      {
        title: "Discovery & Scope",
        description:
          "We define the goals, audience, features, pages and technical requirements with stakeholders — so the build is measured against outcomes, not just deliverables.",
      },
      {
        title: "Design & Information Architecture",
        description:
          "Visual design and site structure are aligned with conversion and SEO together — wireframes and direction reviewed before development starts.",
      },
      {
        title: "Development & Integration",
        description:
          "Front-end and backend are built in sprints, with working versions for your review at each milestone — no waiting for a big reveal at the end.",
      },
      {
        title: "Testing & Optimisation",
        description:
          "Performance, cross-device, accessibility and security testing run before anything goes live — including speed audits on real-world connection conditions.",
      },
      {
        title: "Deploy & Train",
        description:
          "A clean, staged launch with no downtime risk, followed by training so your team knows how to run the CMS, analytics and day-to-day changes.",
      },
      {
        title: "Ongoing Care & Iteration",
        description:
          "Hosting, monitoring, security updates and improvement cycles keep the site fast, secure and aligned with how your business evolves.",
      },
    ],
    benefits: [
      {
        title: "Fast, SEO-Ready Foundation",
        description:
          "A site engineered to rank and load fast from day one, giving your SEO and content strategy a proper head start instead of retrofitting fixes later.",
      },
      {
        title: "Better Conversion Performance",
        description:
          "Clear navigation, fast pages and strong design work together to turn visitors into customers — a site built for business outcomes, not just looks.",
      },
      {
        title: "Lower Long-Term Cost",
        description:
          "Clean, documented, maintainable code means fewer surprises, faster change requests and far less 'why is this page broken' panic.",
      },
      {
        title: "Secure & Reliable",
        description:
          "Security best practices, proper hosting choices and dependable uptime are baked into the build — protecting your data, your customers and your reputation.",
      },
      {
        title: "Built to Scale",
        description:
          "Architecture that grows with your business — more traffic, more products, more content — without a rebuild every time something gets bigger.",
      },
      {
        title: "Your Team Can Actually Run It",
        description:
          "Documentation, training and simple CMS workflows mean you're not dependent on us for every update — you own the site, not us.",
      },
    ],
    whyHeading: "Why Businesses Pick Eddinet for Web Development",
    whyPoints: [
      "Performance and SEO Built In: We build with performance and SEO as requirements, not afterthoughts patched on later.",
      "Modern, Maintainable Stacks: Modern, maintainable tech stacks chosen for your actual needs — not whatever we prefer.",
      "Mobile-First by Default: Mobile-first approach tested across real devices and connection speeds.",
      "Transparent Milestones: Transparent milestones — you review working versions as we go, never a surprise reveal.",
      "Support After Launch: Post-launch hosting, monitoring and support are available as part of the same team.",
      "One Connected System: Web, SEO, content and paid campaigns are built as one connected system.",
    ],
    extraFaqs: [
      {
        q: "Which technologies do you use?",
        a: "We build with modern frameworks including React, Next.js, WordPress, Shopify and WooCommerce, chosen to match your business needs, performance targets and long-term maintainability. We recommend the stack that fits your team and goals — not the stack that's trendy.",
      },
      {
        q: "How long does a website take to build?",
        a: "A typical business website takes 4 to 8 weeks, while eCommerce and custom applications take longer depending on scope. We agree a timeline and milestones before we start, and you review working versions throughout — so the delivery date isn't a surprise either.",
      },
      {
        q: "Will my new website affect my Google rankings?",
        a: "A rebuild can help or hurt rankings depending on execution. We preserve URLs or set up redirects, maintain content structure, keep schema and speed optimised, and verify Search Console after launch — so a new site lifts your SEO instead of resetting it.",
      },
      {
        q: "Do you host and maintain the website after launch?",
        a: "Yes. We offer performance-optimised hosting with monitoring, security updates and backups, and an ongoing maintenance plan. That way the team who built it is the team that keeps it fast and secure.",
      },
    ],
  },

  ecommerce: {
    approach:
      "An online store is not a brochure — it's a selling system where discovery, product pages, checkout, payments, shipping and marketplace presence have to work together. At Eddinet, we build eCommerce as exactly that complete system. Storefront, catalog structure, UX, conversion and integration are engineered as one process, so shoppers move naturally from browsing to buying instead of dropping off at the first friction point.\n\nWe start where conversion actually lives: the product catalog. Categories, filters, product pages, pricing and imagery are structured to help shoppers find the right product fast and trust what they're seeing. Then the technical layer — speed, mobile experience, a checkout that doesn't leak customers, secure payments, shipping automation and live inventory sync across warehouse and markets like Amazon. Every part is tested, not assumed.\n\nWhether you're launching a new store, rebuilding an underperforming one, moving from WooCommerce to Shopify, or connecting your storefront and marketplace operations, we protect your data, URLs and rankings through every migration. From Shopify store development and WooCommerce stores in India to Amazon store development and multi-channel selling, the store is built to sell from day one — and improved against real data after launch.",
    features: [
      {
        title: "Storefront Design & Build",
        description:
          "Custom or platform-based stores designed around product discovery and checkout conversion — built on Shopify, WooCommerce or a fully custom stack matched to your scale and margins.",
      },
      {
        title: "Product & Catalog Optimisation",
        description:
          "Structured categories, SEO-ready product pages, filtering and internal linking that help shoppers find what they want — and Google rank it.",
      },
      {
        title: "Checkout & Conversion Engineering",
        description:
          "Friction removed from the buying path: fast checkout, trust signals, cart recovery, clear shipping and a flow tuned to lift conversion rate and average order value.",
      },
      {
        title: "Payment & Shipping Integration",
        description:
          "Secure payment gateways (UPI, cards, wallets, COD), courier and shipping setup, and automation that makes fulfilment faster and less manual.",
      },
      {
        title: "Inventory & Marketplace Sync",
        description:
          "Live inventory integration across your storefront, warehouse and marketplaces like Amazon and Flipkart — so stock levels stay honest everywhere.",
      },
      {
        title: "Speed & Performance Optimisation",
        description:
          "Page speed tuned to Core Web Vitals standards, especially on mobile — where slow stores silently lose most of their sales.",
      },
      {
        title: "Migration & Launch Management",
        description:
          "Stores moved safely between platforms with products, customers, orders, URLs and rankings protected — staged, backed up and verified before cutover.",
      },
      {
        title: "Post-Launch Optimisation & Growth",
        description:
          "Conversion analysis, A/B testing, catalog expansion and ongoing improvements that compound revenue month after month.",
      },
    ],
    steps: [
      {
        title: "Goals & Catalog Review",
        description:
          "We understand your products, margins, average order value, audience and platform needs — because a store design that ignores margins can't convert profitably.",
      },
      {
        title: "Platform & Architecture",
        description:
          "The right platform, information architecture, apps and integrations are chosen for your scale — not the most convenient default.",
      },
      {
        title: "Design, Build & Integrate",
        description:
          "Storefront, catalog, checkout, payments and shipping are built and tested together, with milestones you review along the way.",
      },
      {
        title: "Migration & Data Safety",
        description:
          "Products, customers and orders move with full backups and SEO protection — URLs, redirects and rankings handled carefully, not casually.",
      },
      {
        title: "Launch & Verify",
        description:
          "Store goes live in a controlled cutover — payments tested, orders flowing, speed verified on real devices and analytics firing.",
      },
      {
        title: "Optimise & Scale",
        description:
          "After launch we analyse real behaviour, fix friction, test offers and expand the catalog and channels that return.",
      },
    ],
    benefits: [
      {
        title: "Higher Conversion Rates",
        description:
          "Checkout, UX and trust optimisation that turns more of your traffic into buyers — a direct lift to revenue without spending more on ads.",
      },
      {
        title: "Better Product Visibility",
        description:
          "SEO-ready catalog structure that helps products rank organically and get discovered on Google and marketplaces.",
      },
      {
        title: "Faster Delivery, Lower Costs",
        description:
          "Automated shipping, payments and inventory that reduce manual work, human errors and the admin tax of running a store.",
      },
      {
        title: "Sales on More Channels",
        description:
          "Marketplace and multi-channel selling connected from one system, with inventory and orders in sync instead of siloed.",
      },
      {
        title: "Safer Migrations, Zero Downtime",
        description:
          "Data, customers and rankings protected through every platform move — no lost orders, no broken URLs, no reset SEO.",
      },
      {
        title: "Data-Driven Growth",
        description:
          "Real sales behaviour drives every change after launch — what to feature, what to fix and what to scale.",
      },
    ],
    whyHeading: "Why Businesses Pick Eddinet for eCommerce",
    whyPoints: [
      "Full Selling System: We build the full selling system, not just a pretty storefront.",
      "Conversion + SEO First: Conversion and SEO are engineered in from the very first page.",
      "Operations Included: Payments, shipping and inventory are handled as part of the build, not bolt-ons.",
      "Safe Migrations: Migrations are done safely with data and rankings fully protected.",
      "Post-Launch Optimisation: Post-launch optimisation and support keep improving sales results.",
      "Store + Growth in One Team: One team connects store, SEO, paid ads and marketplace strategy.",
    ],
    extraFaqs: [
      {
        q: "Which eCommerce platforms do you support?",
        a: "We build and scale Shopify, WooCommerce and custom eCommerce experiences, including payment, shipping and marketplace integration. We recommend the platform that matches your scale, margins and team — not the one that's easiest for us.",
      },
      {
        q: "Can you migrate our existing store without losing data?",
        a: "Yes — this is one of our most careful projects. We migrate products, customers, orders and SEO value with full backups, test on a staging environment, and switch over only when everything is verified. URLs and redirects are preserved so rankings aren't lost in the move.",
      },
      {
        q: "How do you improve conversion rates?",
        a: "We start from your real data — where shoppers drop off, which products get views without sales, and what checkout friction exists. Then we fix the highest-impact issues first: checkout flow, trust signals, product page clarity, speed and offers — always measured before and after.",
      },
      {
        q: "Do you handle marketplace selling on Amazon and Flipkart?",
        a: "Yes. We build and optimise Amazon storefronts and listings, and connect marketplace sales with your website through inventory and order sync — so you can sell on multiple fronts without multiple spreadsheets.",
      },
    ],
  },

  "mobile-app-development": {
    approach:
      "Every great app starts with an honest question: what should this actually do for your business? At Eddinet, we build mobile apps that answer that — from the first discovery call to a polished launch on the App Store and Play Store. We're a mobile app development company in Delhi NCR guided by one simple philosophy: apps should feel effortless for the user and genuinely useful for the business behind them. Whether you need an Android app, an iOS app, or one Flutter or React Native codebase that runs on both, we design the user experience first and engineer the technology around it — never the other way round.\n\nThe result is an app people actually keep: fast, intuitive, crash-free from day one, and built to grow with you. And because we stay involved after launch, your app keeps improving with new features, regular updates and performance care instead of quietly going stale. If you're comparing mobile app development services in India, tell us what you're trying to achieve and we'll tell you honestly what it will take, what it will cost, and whether an app is even the right first move.\n\nThe way we work keeps risk low on both sides. Discovery and scoping come first, so scope, budget and timeline are agreed before code begins. You see the app in working sprints — testable builds, not mockup promises — so feedback lands early when changes are cheap. Store submission, screenshots, privacy pages and launch are handled by the same team, and post-release care keeps the app current with updates, crash monitoring and new features. Whether it's an MVP to validate an idea, a customer app for your service business, or a full product with a backend and admin panel, the deliverable is an app that ships on time, works reliably and earns its place on your customers' phones.",
    features: [
      {
        title: "Discovery & Product Consulting",
        description:
          "We pressure-test your idea, map user flows and agree scope, cost and timeline before a single line of code is written — including an honest call on whether an app is the right move at all.",
      },
      {
        title: "Mobile App UI/UX Design",
        description:
          "Interfaces designed around how real users actually behave — clean, intuitive and built to keep people coming back. Design comes first so the engineering serves the experience.",
      },
      {
        title: "Android App Development",
        description:
          "Native Android apps engineered for performance, battery-friendliness and Play Store readiness — from material design to release builds your users can trust.",
      },
      {
        title: "iOS App Development",
        description:
          "Native iOS apps that meet Apple's quality bar — from design and approval through to a smooth App Store launch with the right screenshots, privacy disclosures and metadata.",
      },
      {
        title: "Cross-Platform Development",
        description:
          "Flutter and React Native builds that ship one codebase to both stores without cutting corners on performance — the smart call when your app doesn't need deep native features.",
      },
      {
        title: "Backend, API & Store Launch",
        description:
          "Scalable APIs, third-party integrations, store submission and post-launch maintenance — all handled by one team instead of a chain of vendors.",
      },
      {
        title: "App Testing & QA",
        description:
          "Device-by-device testing across screen sizes, OS versions and connection speeds, with crash and performance checks long before release.",
      },
      {
        title: "Maintenance, Updates & ASO",
        description:
          "Ongoing updates, bug fixes, compatibility work and app store optimisation that keep your app discoverable, stable and current.",
      },
    ],
    steps: [
      {
        title: "Discovery & Scoping",
        description:
          "We clarify your goals, users, features and budget, then hand you a timeline you can actually plan around — with a clear, itemised cost estimate before code begins.",
      },
      {
        title: "UX/UI & Architecture",
        description:
          "Screens and user flows are designed first, and the technical architecture — backend, APIs, data model — is locked before development starts.",
      },
      {
        title: "Build in Sprints",
        description:
          "You see a working app in stages — every sprint is testable and reviewable, so feedback lands early and there are no end-of-project surprises.",
      },
      {
        title: "Testing & Polishing",
        description:
          "Device-by-device testing, bug squashing, performance tuning, plus store-ready screenshots, copy and privacy pages prepared for approval.",
      },
      {
        title: "Store Submission & Launch",
        description:
          "We submit to the Play Store and App Store, manage reviews and approvals, and get the app live — with monitoring switched on from day one.",
      },
      {
        title: "Launch, Learn & Improve",
        description:
          "After release we watch real usage, act on reviews and analytics, and keep improving the app with updates and new features that users actually want.",
      },
    ],
    benefits: [
      {
        title: "An App Users Actually Keep",
        description:
          "Retention is designed in from the first screen — fast, intuitive and genuinely useful on day one and month six, not just flashy at launch.",
      },
      {
        title: "Faster, More Predictable Launch",
        description:
          "Clear scope and sprint-based delivery protect both your budget and your deadline, with working builds to review at every stage.",
      },
      {
        title: "One Codebase, Both Stores",
        description:
          "Reach Android and iOS with a single build when that's the smart call — without paying twice or managing two separate engineering tracks.",
      },
      {
        title: "Built to Scale With You",
        description:
          "Clean architecture and documentation that make adding features later fast, safe and affordable — not a rebuild-in-disguise.",
      },
      {
        title: "Support Long After Launch",
        description:
          "Updates, fixes, compatibility work and store management handled so your app never quietly decays or falls behind OS releases.",
      },
      {
        title: "A Partner, Not Just a Vendor",
        description:
          "One team from idea to scaling — product advice, roadmap and honest guidance on what to build next, based on your real launch data.",
      },
    ],
    whyHeading: "Why Businesses Pick Eddinet for Mobile App Development",
    whyPoints: [
      "Problem-First Engineering: We start with the problem, not the platform — design and engineering decisions follow from your business goal.",
      "Sprout-Like Sprints: You review real builds in sprints, so there are no surprises when the project ends.",
      "Honest Platform Advice: We recommend native vs cross-platform honestly, based on what's actually right for your app.",
      "One Team, Launch to Care: Launch, store submission and post-release care are handled by the same in-house team.",
      "Protected Timelines: Cost and timelines are confirmed upfront and protected through the entire build.",
      "Accountable to Outcomes: From MVP to scale, we stay accountable to your business outcomes — not just deliverables.",
    ],
    extraFaqs: [
      {
        q: "How much does it cost to develop a mobile app in India?",
        a: "It depends entirely on scope — number of screens, features, backend work and whether you need one platform or two. A focused MVP might start from a modest fixed budget; a full-featured app with backend, admin panel and both stores will cost more. After a short discovery call we give you a clear, itemised estimate that lines up with exactly what you need to launch — no padding, no hidden charges.",
      },
      {
        q: "How long does mobile app development take?",
        a: "A well-scoped MVP typically ships in 8 to 16 weeks. Timelines depend on features, integrations and platform count, and we commit to milestones upfront — you'll see a working build in stages rather than waiting months for a first glimpse.",
      },
      {
        q: "Do you help with app store launch and ASO?",
        a: "Yes. We handle Play Store and App Store setup, screenshots, descriptions, keywords and submission, and we respond to review feedback. Once the app is live we can also run app store optimisation so it's easier to find among competitors.",
      },
      {
        q: "Should we build native or cross-platform?",
        a: "The honest answer depends on your app. If you need deep device features, heavy offline use or maximum performance, native is usually right. If speed to market and one codebase matter more, Flutter or React Native is the smarter spend. We recommend what fits your use case — not what's easiest for us to build.",
      },
    ],
  },

  "software-ai": {
    approach:
      "Software should make your business run better — not the other way round. That's the starting point for every project we take on. At Eddinet, we design and build custom software, SaaS platforms, CRMs, ERPs and internal tools around your actual workflows, and we integrate AI where it genuinely helps: chatbots that answer customers around the clock, agents that complete multi-step tasks on their own, and RAG systems that answer accurately using your own documents and data. We're a software development company in Delhi NCR that treats AI as a practical tool, not a gimmick.\n\nThe questions we ask first are the ones that matter most: what manual work is quietly burning your team's time, what data is stuck in spreadsheets, and where are customers waiting too long for answers? Once we know that, we build — in sprints you can test along the way — and connect the new system to the tools you already use. Whether you need custom software development services in India, a tailored CRM or ERP, an AI chatbot, or a full automation overhaul, you get a solution that's secure, scalable and built around how your business actually operates day to day.\n\nOur process is engineered to de-risk the whole journey. Discovery and workflow mapping come first, so scope and price are agreed before code starts. Then we build in working sprints — you see and use the software as it grows, which changes how quickly true requirements surface and how little is wasted on assumptions. Integration with your existing tools, data migration and security are handled as parts of the build, not surprises at the end. And after go-live, the team stays with you: training, documentation, maintenance and new features as your business evolves.",
    features: [
      {
        title: "Custom Software Development",
        description:
          "Bespoke systems that fit your workflows and data — no forcing your team into rigid template software that solves someone else's problem.",
      },
      {
        title: "SaaS Platform Development",
        description:
          "Multi-tenant SaaS with billing, roles, dashboards and architecture ready to scale as users grow — designed for product companies, not just internal tools.",
      },
      {
        title: "CRM & ERP Systems",
        description:
          "Pipelines, operations, inventory and reporting in one connected platform instead of ten spreadsheets — the system your teams actually want to use daily.",
      },
      {
        title: "AI Chatbots & Agents",
        description:
          "AI that answers, qualifies and completes tasks automatically — around the clock, on-brand and grounded in your own data through RAG.",
      },
      {
        title: "AI Integration (LLM & RAG)",
        description:
          "Connect GPT-class models to your own documents and databases so every answer is accurate, cited and grounded rather than confidently hallucinated.",
      },
      {
        title: "Business Automation & APIs",
        description:
          "Workflows connected across your tools so repetitive work simply happens without anyone chasing it — reducing cost and error at the same time.",
      },
      {
        title: "Legacy System Modernisation",
        description:
          "Rebuilding dated, fragile systems step by step — migrating data and workflows to modern, maintainable software without stopping your operations.",
      },
      {
        title: "Data & Analytics Platforms",
        description:
          "Centralised dashboards and reporting that pull data from across your systems, so decisions rest on facts rather than gut feel and exports.",
      },
    ],
    steps: [
      {
        title: "Discovery & Workflow Mapping",
        description:
          "We map the problem, the people involved and the data flow before proposing any technology — so the solution fits the business, not the other way round.",
      },
      {
        title: "Solution Design & Roadmap",
        description:
          "Stack, architecture, security and the right AI or automation approach are chosen — and priced — upfront, with a phased delivery plan.",
      },
      {
        title: "Build in Working Sprints",
        description:
          "Delivery in increments you can actually use and review, with your feedback built into every round instead of one big reveal at the end.",
      },
      {
        title: "Integration & Testing",
        description:
          "Connected to your existing tools, with data migration, security testing and load checks handled carefully — not bolted on after launch.",
      },
      {
        title: "Deploy, Train & Support",
        description:
          "Go-live, team training, documentation and a defined support path — so the system runs after we leave, not just while we're there.",
      },
      {
        title: "Improve & Evolve",
        description:
          "Based on real usage data, features are refined and added over time — the software grows with your business instead of on a fixed shelf.",
      },
    ],
    benefits: [
      {
        title: "Time Back for Your Team",
        description:
          "Automation removes the repetitive work that quietly eats your team's week — so people focus on tasks that actually move the business.",
      },
      {
        title: "AI That Improves Decisions",
        description:
          "Answers grounded in your own data, and insights surfaced from systems you already own — AI applied where it changes outcomes, not just conversations.",
      },
      {
        title: "Built Around Your Workflow",
        description:
          "Software that fits your process instead of forcing your process into software — adoption is easier and training costs are lower.",
      },
      {
        title: "Connected Systems, One Truth",
        description:
          "APIs and integrations stop your data living in separate silos — one source of truth for reporting, teams and customers.",
      },
      {
        title: "Support That Continues",
        description:
          "Maintenance, new features and improvements as your business evolves — not one-and-done delivery and disappearing act.",
      },
      {
        title: "Transparent Cost & Scope",
        description:
          "Discovery-first pricing means you know what you're buying before code begins, and sprints protect the budget as requirements evolve.",
      },
    ],
    whyHeading: "Why Businesses Pick Eddinet for Software & AI",
    whyPoints: [
      "AI Where It Pays: AI is applied where it pays, not just where it sounds impressive on a slide.",
      "Scoped, Not Surprising: Everything is scoped and priced after discovery, so you're not funding surprises.",
      "Low-Risk Sprints: You see and use the software in sprints, which keeps risk and rework low.",
      "Security Built In: Security, data handling and integration with existing tools are never afterthoughts.",
      "Support After Launch: We stay with you after launch with support and continuous improvement.",
      "One Connected Unit: Software, web, cloud and marketing teams work as one connected unit.",
    ],
    extraFaqs: [
      {
        q: "What is the difference between an AI chatbot and an AI agent?",
        a: "A chatbot answers questions and handles conversations — like a support rep who never sleeps. An AI agent goes further: it takes actions, moving through multi-step tasks such as fetching data, updating records, drafting replies or triggering workflows across your systems. We recommend whichever actually solves your problem, and often build a combination of both.",
      },
      {
        q: "Can AI be integrated into our existing software?",
        a: "Yes — this is one of our most common projects. We add AI into current products and workflows: chatbots, content generation, document analysis and automation — without rebuilding what already works. Most of the time we connect to your existing data sources, which is also where RAG comes in to keep answers accurate.",
      },
      {
        q: "How long does custom software development take?",
        a: "Discovery and scoping come first, then development in sprints. Simple internal tools can be ready in a few weeks; larger systems take several months. You see working versions early and often, so you're never waiting in the dark for a final reveal.",
      },
      {
        q: "How do you keep our data and IP secure?",
        a: "Security is designed into the architecture, not bolted on. We follow least-privilege access, encrypt sensitive data, log access, run security testing during development and agree clear IP ownership in writing from the start — the code and data are yours.",
      },
    ],
  },

  "cloud-devops": {
    approach:
      "Growth is great — until it brings your website down. Cloud and DevOps are how modern businesses make sure that never happens. At Eddinet, we design, migrate and manage cloud infrastructure that stays stable under real traffic, deploy with automated CI/CD pipelines, containerise workloads with Docker and Kubernetes, and keep everything monitored, secure and cost-efficient. We're a cloud services company in Delhi NCR that treats your uptime and your cloud bill with equal seriousness.\n\nMost of our cloud and DevOps work starts one of three ways: a business is paying too much for cloud it doesn't need, deploying too slowly because every release is a scary manual process, or nervously watching the clock before a big sale spike they're not sure the site will survive. We audit what you have, build a target architecture, and move you there in stages — with backups, rollback and zero drama. Whether you need AWS cloud services, a Kubernetes setup, a proper CI/CD pipeline, or simply someone to take over infrastructure management, you get a predictable, documented and genuinely secure environment your team can rely on.\n\nThe team gets more than just infrastructure — it gets a working relationship with its own stack. Clean documentation, sensible access control, and either a managed service if you want us running it, or a proper handover if you prefer your own team at the controls. Because we treat monitoring, security and automation as part of the build, not add-ons, the environment you run on is measurable: uptime numbers, cost numbers and security reports you can actually understand and rely on.",
    features: [
      {
        title: "Cloud Architecture & Migration",
        description:
          "AWS and multi-cloud work planned in stages with rollback ready — uptime protected the whole way, from sizing to cutover to verification.",
      },
      {
        title: "CI/CD Pipelines",
        description:
          "Automated build, test and deploy pipelines so shipping a change stops being a risky ceremony and becomes a fast, repeatable, rollback-safe process.",
      },
      {
        title: "Docker & Kubernetes",
        description:
          "Containerised, orchestratable workloads that scale up and down with your actual traffic — predictable performance instead of manual capacity guesses.",
      },
      {
        title: "Monitoring & Logging",
        description:
          "Uptime, performance and error monitoring with alerts that reach you before users ever notice a problem — plus centralised logs that make debugging fast.",
      },
      {
        title: "Security Hardening",
        description:
          "Firewalls, patching, least-privilege access, encryption and regular reviews that keep intruders out and evidence ready for compliance conversations.",
      },
      {
        title: "Scaling & Cost Optimisation",
        description:
          "Auto-scaling and right-sized resources that keep the site fast under spikes and the cloud bill sane in the quiet months.",
      },
      {
        title: "Database & Backup Management",
        description:
          "Managed databases, automated backups, point-in-time recovery and disaster-recovery planning so data survives anything.",
      },
      {
        title: "Infrastructure as Code & Documentation",
        description:
          "Environments defined in code with clean documentation — reproducible, auditable and never dependent on one person's memory.",
      },
    ],
    steps: [
      {
        title: "Audit & Discovery",
        description:
          "We review your current infrastructure, workloads, costs and risks before recommending anything — including the waste you're paying for today.",
      },
      {
        title: "Architecture & Roadmap",
        description:
          "A target design and phased plan balanced between risk, speed and budget — agreed upfront so there are no scope surprises.",
      },
      {
        title: "Build & Automate",
        description:
          "Infrastructure, pipelines and containerisation are implemented and tested in stages you can review — nothing changes silently.",
      },
      {
        title: "Secure & Monitor",
        description:
          "Hardening, monitoring and alerting are switched on and battle-tested before handover, with dashboards and reports you can read.",
      },
      {
        title: "Handover or Manage",
        description:
          "Clean documentation and access control — and ongoing management if you want us to run it, with defined SLAs and ownership.",
      },
      {
        title: "Optimise & Improve",
        description:
          "Cost reviews, patch cycles, load simulations and architecture improvements keep the environment healthy long after launch.",
      },
    ],
    benefits: [
      {
        title: "Stable Under Real Traffic",
        description:
          "Architecture and auto-scaling designed around your actual load patterns — sale spikes and campaigns included, not tested by guesswork.",
      },
      {
        title: "Deploys That Don't Terrify",
        description:
          "Automated pipelines turn risky releases into fast, repeatable, rollback-safe changes — your team ships more with less anxiety.",
      },
      {
        title: "A Lower, Predictable Cloud Bill",
        description:
          "Right-sized resources and waste removal that show up clearly in your monthly invoice — often 20–40% savings after the audit.",
      },
      {
        title: "Security You Can Prove",
        description:
          "Hardened environments, patching and monitoring with evidence ready when clients, partners or regulators ask.",
      },
      {
        title: "Less Ops Toil",
        description:
          "Automation and managed monitoring free your engineers for product work instead of firefighting at 2am.",
      },
      {
        title: "Disaster Recovery That Works",
        description:
          "Backups and recovery plans tested, not just promised — so a bad deployment or outage is an inconvenience, not a crisis.",
      },
    ],
    whyHeading: "Why Businesses Pick Eddinet for Cloud & DevOps",
    whyPoints: [
      "Reliability Over Acronyms: We design for reliability and cost, not for adding impressive acronyms to a proposal.",
      "Uptime Never a Gamble: Every migration is staged with backups and rollback — uptime is never a gamble.",
      "Configured, Documented, Tested: Monitoring and security are configured, documented and tested, not skipped.",
      "Clear Ownership: You'll actually understand your cloud setup, with clear docs and a clean handover.",
      "Runs by You or Us: We can run it for you long term or hand it over properly — your choice.",
      "One Connected Practice: AWS, Kubernetes, CI/CD, security and cost are managed as one connected practice.",
    ],
    extraFaqs: [
      {
        q: "How much can cloud optimisation actually save?",
        a: "It varies, but waste is far more common than businesses realise — unused instances, oversized resources, orphaned volumes and storage that's been running for years. In many engagements we find 20–40% of a monthly cloud bill is spendable waste. We audit first, show you the numbers, and only then fix what's worth fixing.",
      },
      {
        q: "Will our cloud migration cause downtime?",
        a: "No. Migrations are planned and staged with full testing, backups and a rollback path in place, so your services stay up and disruption is minimal. We verify performance on the other side before we ever call the move complete.",
      },
      {
        q: "Which cloud providers do you work with?",
        a: "We work primarily with AWS and also support multi-cloud setups. We recommend the provider and architecture that best fits your workload, budget and compliance needs — not whichever one happens to suit us.",
      },
      {
        q: "Can you manage our infrastructure after the migration?",
        a: "Yes — most of our clients stay with us on a managed plan covering monitoring, patching, backup verification, cost reviews and response to incidents. Or we hand everything over with complete documentation and training if your team prefers to run it in-house. Either way, the setup is designed to survive without us.",
      },
    ],
  },

  "hosting-migration": {
    approach:
      "Your website's uptime, speed and safety depend on where and how it's hosted — and most business owners have no idea what's running underneath. Eddinet fixes that. We set up the right hosting environment for your traffic and region, migrate websites, servers and databases with zero downtime and zero data loss, and manage domains, DNS, SSL and email in one coordinated effort. We're a hosting and migration services company in Delhi NCR that treats every move like it's our own live store going across.\n\nIf your site has felt slow, your host's support has been unhelpful, or you're dreading the thought of moving to a new server — that's exactly the kind of project we handle every week. We plan the migration, back everything up, switch over with minimised disruption, and verify performance and security before we call it done. Whether you need reliable website hosting in India, a VPS or cloud setup, a WordPress or Shopify migration, or simply someone to look after your DNS properly, you get a move that's boring in the best way: nothing breaks, nothing gets lost.\n\nHosting decisions are usually made once and suffered with for years — shared plans that slow down as traffic grows, providers whose support takes days to reply, or bills quietly inflating with no explanation. We approach hosting as a system decision with real consequences for your speed, security and SEO. The setup is right-sized to your actual traffic — not the cheapest box, not the most expensive one — and documented so you understand what you're paying for. And once you're in, we can manage hosting, domains and security for you long term, so there's always one competent team watching over the seams.",
    features: [
      {
        title: "Right-Sized Hosting Setup",
        description:
          "Shared, VPS, cloud or dedicated hosting configured for your actual traffic, region and budget — not the cheapest box, not an unnecessary upgrade ladder.",
      },
      {
        title: "Zero-Downtime Migrations",
        description:
          "Websites, servers and databases moved with full backups and rollback — your customers never notice a thing, and neither does Google.",
      },
      {
        title: "Database Migration",
        description:
          "Data moves handled safely with backup, validation and absolutely zero loss — schemas, relationships and integrity checked before and after.",
      },
      {
        title: "Domain & DNS Management",
        description:
          "Domain, DNS and email configuration kept correct, reliable and fully documented — the boring details that break sites when everyone ignores them.",
      },
      {
        title: "SSL & Security Setup",
        description:
          "HTTPS, certificates, firewalls and access hardening configured for trust, compliance and good SEO — with renewals that don't fall through cracks.",
      },
      {
        title: "Performance Verification",
        description:
          "Speed, uptime and security verified after every move — with the before-and-after results shown to you, not just assumed.",
      },
      {
        title: "Email & Backup Management",
        description:
          "Mailbox setup, spf/dkim records and automated backups managed as part of the environment — so email and data never go down with the host.",
      },
      {
        title: "Ongoing Hosting Management",
        description:
          "Updates, patching, monitoring and support handled long term so the environment stays fast, secure and stable after the migration month is over.",
      },
    ],
    steps: [
      {
        title: "Environment & Dependencies Review",
        description:
          "We map your stack, traffic, dependencies and any baggage the current host carries — including plugins, cron jobs, email and custom configs.",
      },
      {
        title: "Plan, Backup & Rollback",
        description:
          "A staged move with full backups and a defined rollback path is agreed before we touch anything live — no heroics, just procedure.",
      },
      {
        title: "Execute the Switch",
        description:
          "Files, databases, DNS and email move over in a controlled sequence with minimal disruption, then cut over when verified.",
      },
      {
        title: "Verify & Optimise",
        description:
          "Speed, uptime, security and data integrity are checked on the new environment — then tuned to perform at least as well as before.",
      },
      {
        title: "Hand Over & Support",
        description:
          "Clear credentials, architecture notes and documentation, plus ongoing hosting management if you want the same team to run it.",
      },
      {
        title: "Monitor & Maintain",
        description:
          "Uptime monitoring, security patching and periodic performance reviews keep the setup healthy long after cutover.",
      },
    ],
    benefits: [
      {
        title: "Zero Downtime, Zero Drama",
        description:
          "Staged moves with rollback ready mean your site, store or app never goes dark — no lost sales, no panicked customers, no SEO dips.",
      },
      {
        title: "Nothing Ever Gets Lost",
        description:
          "Every migration runs on verified backups from start to finish, with data integrity checked before and after the move.",
      },
      {
        title: "A Host That Fits You",
        description:
          "The right environment for your traffic and budget — not a salesperson's upgrade ladder, and not a box that chokes at your next spike.",
      },
      {
        title: "Fast After the Move",
        description:
          "Configuration and performance checks make sure you're not slower on the other side — often you're faster after rightsizing.",
      },
      {
        title: "One Team, Full Stack",
        description:
          "Domain, DNS, email, SSL and security handled together instead of across five vendors with five support queues.",
      },
      {
        title: "SEO & Reputation Protected",
        description:
          "URLs, redirects, HTTPS and speed are preserved through every move, so rankings and customer trust stay intact.",
      },
    ],
    whyHeading: "Why Businesses Pick Eddinet for Hosting & Migration",
    whyPoints: [
      "Backups and Rollback: Every migration is planned with backups and rollback — never a leap of faith.",
      "Uptime First: Uptime and data integrity come first; timeline second; billing transparency third.",
      "Right-Sized Hosting: We right-size hosting to your real needs instead of pushing you up a price ladder.",
      "One Place, Not Five Tickets: Domain, DNS, SSL and email are coordinated in one place, not across five tickets.",
      "Proven Performance: Performance is proven and documented after every move — we show you the numbers.",
      "Long-Term Availability: We stay available long term for management, patching and support.",
    ],
    extraFaqs: [
      {
        q: "Can you migrate my website without any downtime?",
        a: "Yes — this is the standard way we work, not a special request. We stage the migration, back everything up, and switch DNS when the new environment is fully verified. In most cases customers don't notice the move happened at all, and we keep a rollback plan ready for absolute safety.",
      },
      {
        q: "Will my SEO rankings be affected by a hosting or server migration?",
        a: "They shouldn't be — migrations break rankings when URLs change, redirects are missed, SSL isn't configured or downtime pages get served to Google. We preserve URLs, set up redirects where needed, configure HTTPS and verify load speed after the move, so the site is technically at least as healthy on the new host as it was before.",
      },
      {
        q: "How long does a migration take?",
        a: "Most website and hosting migrations take 1 to 3 business days. Larger or database-heavy migrations are staged and confirmed with you before going ahead — we never rush a live move.",
      },
      {
        q: "How do I know which hosting is right for my website?",
        a: "It depends on traffic, stack, region and budget. Shared hosting suits small sites; VPS or cloud suits growing businesses with real traffic; dedicated or managed cloud suits high-traffic and compliance-sensitive workloads. We assess your actual numbers and recommend the smallest environment that will serve you well — with room to grow.",
      },
    ],
  },

  "maintenance-support": {
    approach:
      "Most websites don't die in one dramatic moment — they decay quietly. Outdated plugins, missed security patches, bloated databases and creeping performance loss build up until one bad update breaks the whole thing. At Eddinet, we provide maintenance as proactive care, not firefighting. Updates, monitoring, security patching and backups run on a schedule so problems are caught early, and support is handled with clear ownership and fast responses.\n\nThink of it as regular servicing for your digital assets. Just as you wouldn't ignore a car until the engine seizes, you shouldn't ignore a website until it's hacked, down or slow. Our engineers check the health of your site or application on a defined cadence, apply updates safely, verify that backups actually restore, and tune performance before users notice it slipping. When something does go wrong, there's a named contact, a clear response time and a post-incident note on what happened and how it won't again.\n\nThis is the layer most projects forget. The agency launches the site, disappears, and the client is left guessing when it's time to update a plugin or renew a certificate. We provide the ongoing care that keeps launches from going stale — whether that's a WordPress website, an eCommerce store, a web application or cloud infrastructure, on a monthly retainer sized to your needs.",
    features: [
      {
        title: "Scheduled Updates & Patching",
        description:
          "Security and critical updates applied as released, on a clear schedule and tested before going live — so patrons never break you.",
      },
      {
        title: "24/7 Monitoring & Alerts",
        description:
          "Uptime and performance monitoring that flags issues before your customers do, with alerts that actually reach an engineer, not a spam folder.",
      },
      {
        title: "Automated, Verified Backups",
        description:
          "Backups run automatically and restore tests happen regularly — a backup you can't restore isn't a backup.",
      },
      {
        title: "Security & Performance Care",
        description:
          "Hardening, malware scanning, cache tuning and database optimisation that keep systems fast and safe as traffic grows.",
      },
      {
        title: "Responsive Technical Support",
        description:
          "A direct channel to real engineers with clear ownership and updates until the issue is resolved — no ticket black holes.",
      },
      {
        title: "Emergency & Critical Fixes",
        description:
          "Priority response for critical issues like downtime, hacks or broken checkouts — with defined response times in the plan.",
      },
      {
        title: "Renewals & Housekeeping",
        description:
          "SSL certificate renewals, domain expiries, DNS checks and small admin tasks tracked so nothing quietly lapses.",
      },
      {
        title: "Quarterly Health & Improvement Reports",
        description:
          "Every quarter you get a plain-English report on system health, what we fixed, what's improving and what we recommend next.",
      },
    ],
    steps: [
      {
        title: "Health Assessment",
        description:
          "We review your current setup, risks and what needs immediate attention — a baseline audit before we promise anything.",
      },
      {
        title: "Plan & Schedule",
        description:
          "Update cycles, monitoring scope, backup frequency and support levels are agreed upfront in a plan you understand.",
      },
      {
        title: "Proactive Care Cycle",
        description:
          "Updates, monitoring, backups and health checks run on a reliable schedule — the maintenance happens whether or not you're watching.",
      },
      {
        title: "Issue Response & Fixes",
        description:
          "Problems are diagnosed, fixed and reported with prevention notes — you always know what happened and what changed.",
      },
      {
        title: "Quarterly Reviews",
        description:
          "Regular health reports and improvement recommendations keep the plan aligned with your growth, not frozen at launch.",
      },
      {
        title: "Continuous Improvement",
        description:
          "Performance tuning, architecture tweaks and new optimisations are added as your traffic and needs evolve.",
      },
    ],
    benefits: [
      {
        title: "Fewer Surprises & Outages",
        description:
          "Proactive monitoring and patching stop small issues becoming expensive ones — you're not finding out about problems from customers.",
      },
      {
        title: "Secure & Up to Date",
        description:
          "Security updates applied promptly and threats addressed early, protecting your data, customers and reputation.",
      },
      {
        title: "Fast, Accountable Support",
        description:
          "Direct access to engineers with clear status updates and defined response times — no waiting on anonymous tickets.",
      },
      {
        title: "Protected Data",
        description:
          "Automated backups verified regularly, so recovery from any failure is fast and possible.",
      },
      {
        title: "Stable Performance",
        description:
          "Ongoing tuning keeps your platform fast as content, users and traffic grow — performance decay is prevented, not fixed later.",
      },
      {
        title: "One Team Who Knows Your Stack",
        description:
          "The engineers who maintain your system know its history and quirks — support isn't met from zero context every call.",
      },
    ],
    whyHeading: "Why Businesses Pick Eddinet for Maintenance & Support",
    whyPoints: [
      "Proactive Care, Not Firefighting: We run maintenance as proactive care, not reactive firefighting.",
      "Alerts Before Outages: Monitoring and alerts are configured before they are needed, not after the outage.",
      "Verified Backups: Backups are verified regularly — we know they restore when it matters.",
      "Named Engineers, No Black Holes: You get a direct support channel with named engineers, not a ticket black hole.",
      "24/7 Emergency Response: Emergency response plans cover critical issues outside business hours.",
      "Plain-English Reporting: Reports are in plain English — you understand what's being done and why.",
    ],
    extraFaqs: [
      {
        q: "What does an ongoing maintenance plan include?",
        a: "It includes monitoring, updates, security patching, backups, performance improvements and responsive technical support so your digital assets stay stable, secure and fast after launch. The exact scope is agreed in a plan with defined schedules and response times — not a vague retainer.",
      },
      {
        q: "What happens if our website goes down?",
        a: "Our monitoring alerts us immediately, and we respond and fix the issue as part of your plan — recovering your site and reporting what happened and how we prevented recurrence. Critical issues outside business hours follow the emergency response path agreed in your plan.",
      },
      {
        q: "Can you fix issues on a website you didn't build?",
        a: "Yes — most of our maintenance clients come to us after another agency built the site. We start with a health assessment, take ownership of the codebase and infrastructure, and then care for it as if we built it ourselves.",
      },
      {
        q: "How is the support communicated?",
        a: "You'll have a named account contact for day-to-day requests, a dedicated channel for urgent issues, and a written summary after every incident and quarterly review. You're never left wondering what happened or what's next.",
      },
    ],
  },

  "reputation-management": {
    approach:
      "Before a customer ever picks up the phone, they've already formed an opinion about you — from reviews, search results and what others say about your brand online. At Eddinet, we protect and strengthen exactly that perception. We monitor reviews, search visibility, social presence and business listings in one connected view, respond professionally to feedback, and systematically grow your positive signals — so your reputation becomes an asset that brings customers in rather than a risk you worry about.\n\nMost businesses don't have a reputation problem until one bad review surfaces on page one of Google — and then it's suddenly everyone's problem. Our work prevents that panic by running the whole thing as a system: alerts the moment a new review or mention appears, professional on-brand responses within the platform's window, a steady and ethical review flow that keeps the rating healthy, and listings kept accurate and consistent where local customers look. Downturns get caught early, while improvements compound quietly.\n\nA good reputation isn't a bonus — in local search and in trust, it's often the deciding factor. Reviews directly influence Google Business Profile rankings, and a healthy, recent review base turns hesitant researchers into enquiries. Whether you need online reputation management in India, Google review management, local listing optimisation or brand monitoring, we run reputation as a measurable growth function — audited, reported and connected to your local SEO and sales.",
    features: [
      {
        title: "Reputation & Mention Monitoring",
        description:
          "Reviews, mentions and sentiment tracked across Google, social, review platforms and directories — with alerts so nothing important slips past unnoticed.",
      },
      {
        title: "Review Generation Flows",
        description:
          "Ethical, systematic processes — timing, links and gentle prompts — that steadily grow review volume and raise your average rating without shortcuts.",
      },
      {
        title: "Review Response Management",
        description:
          "On-brand, professional responses to every review that meet each platform's best practices and turn public complaints into visible customer service.",
      },
      {
        title: "Business Listing Optimisation",
        description:
          "Accurate, consistent listings across Google Business Profile and key directories — the foundation of local credibility and local search visibility.",
      },
      {
        title: "Search & Brand Visibility",
        description:
          "Coordination with SEO so positive content surfaces for your brand searches, and minor negatives don't dominate what customers find first.",
      },
      {
        title: "Feedback & Recovery Systems",
        description:
          "Structured ways to collect customer feedback and act on it, reducing the chance of negative reviews and improving the service itself.",
      },
      {
        title: "Crisis & Takedown Support",
        description:
          "A defined playbook for handling spike in negative sentiment, unfair reviews or brand attacks — so the response is calm and controlled.",
      },
      {
        title: "Reporting & Insight",
        description:
          "Clear reports tying review volume, ratings and sentiment to enquiries and trust — so reputation is measured like any growth channel.",
      },
    ],
    steps: [
      {
        title: "Reputation Audit",
        description:
          "We map your current reviews, ratings, mentions, listings and search sentiment to see the full picture and identify your biggest opportunity.",
      },
      {
        title: "Strategy & Priorities",
        description:
          "A plan focused on your highest-impact gaps — whether that's review volume, rating recovery, listing NAP consistency or brand search.",
      },
      {
        title: "Monitoring & Response",
        description:
          "New reviews and mentions are tracked daily, with timely, professional responses logged and reviewed.",
      },
      {
        title: "Review & Signal Growth",
        description:
          "Systematic, ethical flows build review volume and improve ratings over time, aligned with your customers' real experiences.",
      },
      {
        title: "Reporting & Refinement",
        description:
          "Regular reports show trend, sentiment and enquiry impact — with adjustments made as data comes in.",
      },
      {
        title: "Compound & Defend",
        description:
          "Positive signals keep accumulating and the monitoring net stays up — reputation keeps working for you, year after year.",
      },
    ],
    benefits: [
      {
        title: "Stronger Customer Trust",
        description:
          "A healthy, growing review profile with recent, authentic feedback reassures every prospective buyer before they contact you.",
      },
      {
        title: "Better Local & Search Visibility",
        description:
          "Reviews, ratings and consistent listings directly support your Google Business Profile rankings and local pack positions.",
      },
      {
        title: "Controlled Narrative",
        description:
          "Fast, professional responses and active monitoring keep your brand story on track — you're never silent when customers are talking.",
      },
      {
        title: "Early Warning on Issues",
        description:
          "Instant alerts on new reviews and mentions mean problems are handled while they're small, not after they've spread.",
      },
      {
        title: "Reputation as an Asset",
        description:
          "Positive signals compound into a measurable driver of enquiries — the reputation moat competitors can't easily copy.",
      },
      {
        title: "Less Anxiety, More Control",
        description:
          "The system runs every day, so you're not lying awake waiting for a bad review — you're managing perception proactively.",
      },
    ],
    whyHeading: "Why Businesses Pick Eddinet for Reputation Management",
    whyPoints: [
      "Monitor, Don't Just Report: We monitor and act — alerts, responses and improvement, not just dashboards.",
      "Ethical Review Growth: Review growth is ethical and systematic, never fake or incentivised.",
      "On-Brand Responses: Responses stay on-brand and meet platform best practices everywhere.",
      "Reputation + Local SEO: Reputation work is connected to local SEO for real search impact.",
      "Reporting That Ties to Trust: Reporting ties reputation activity to enquiries and trust.",
      "Crisis Playbook Ready: You get a defined playbook for crises — prepared before you need it.",
    ],
    extraFaqs: [
      {
        q: "Can you help with negative reviews?",
        a: "Yes. We help you respond professionally and constructively to negative reviews — which, done well, often wins back the customer and shows everyone else how well you handle problems. We also work to strengthen your positive review flow so the overall picture keeps improving rather than staying stuck on one bad notice.",
      },
      {
        q: "How long does it take to improve online reputation?",
        a: "Review volumes and local presence can show visible improvement within 60 to 90 days with consistent review flow and prompt responses. Deeper brand perception shifts build continuously as positive signals accumulate — which is why we set it up as an ongoing system rather than a one-off cleanup.",
      },
      {
        q: "Is it okay to ask customers for reviews?",
        a: "Yes — when it's done the right way. Asking happy customers at the right moment for their honest feedback is normal and encouraged by platforms. What crosses the line is incentivising, filtering or faking reviews. We build review flows that are effective and stay firmly within platform policies.",
      },
      {
        q: "What if a serious reputation crisis happens?",
        a: "We activate the crisis playbook agreed in your plan: pause or prioritise responses, coordinate with your leadership, craft careful messaging and work on mitigation and recovery (including review recovery where the platform allows). Having a plan in place beforehand is exactly what turns a crisis into a managed incident.",
      },
    ],
  },

  content: {
    approach:
      "Anyone can write words; the hard part is writing words that work. At Eddinet, we create content with a job to do — educate, build authority and convert at every stage of the funnel. Every piece is planned around the audience and the outcome, produced to a clear editorial calendar, and refined against how it performs. Content that isn't earning attention, rankings or enquiries is reworked or retired, not left to quietly waste your budget.\n\nContent strategy comes first, always. We map what to create, for whom and what it must achieve — then research, write and refine every piece with search intent and conversion in mind. A blog post earns organic visibility and authority; a landing page turns ads and organic visitors into enquiries; an email nurtures a lead toward a decision; a social asset feeds the whole demand system. The same discipline applies to refresh work: many businesses already sit on strong pages that have decayed, and we revive them rather than always starting from scratch.\n\nWhether you need content marketing services in India, SEO content for rankings, website copywriting, blog writing or a full editorial calendar, the deliverable is content that ranks, engages and converts — delivered on a dependable cadence your team can plan around, coordinated with your SEO and paid media as one system.",
    features: [
      {
        title: "Content Strategy & Planning",
        description:
          "A plan for what to create, for whom and how it supports revenue — mapped to your funnel, competitors and search landscape before a word is written.",
      },
      {
        title: "Search-Driven Writing",
        description:
          "Content built around search intent, topic clusters and rank potential — written for humans, structured for Google and AI search alike.",
      },
      {
        title: "Conversion-Focused Copy",
        description:
          "Landing pages, emails and campaign copy written to move readers to the next step — headlines, hooks, proof and clear calls to action.",
      },
      {
        title: "Content Audits & Refresh",
        description:
          "Finding underperformers and strengthening existing pages to extend their life — recovering rankings and traffic without starting over.",
      },
      {
        title: "Editorial Calendar & Delivery",
        description:
          "A monthly calendar with dependable turnaround and a clear review workflow — so publishing is a system, not a scramble.",
      },
      {
        title: "Multichannel Content",
        description:
          "Blog, website, social, email and campaign content produced in one system, so every channel speaks with one voice toward one goal.",
      },
      {
        title: "Case Studies & Thought Leadership",
        description:
          "Deep, credible content like case studies, guides and original research that build the authority that converts high-value buyers.",
      },
      {
        title: "Performance Reporting",
        description:
          "Content tracked against rankings, traffic and enquiries — with honest monthly insight on what's working and what to change.",
      },
    ],
    steps: [
      {
        title: "Content Audit & Goals",
        description:
          "We review what exists, what's working and what outcomes content must drive — so we build on strengths instead of guessing.",
      },
      {
        title: "Strategy & Calendar",
        description:
          "Topics, formats, channels and a monthly editorial calendar are agreed with clear ownership and deadlines.",
      },
      {
        title: "Research & Writing",
        description:
          "Drafts are produced with research, SEO, audience insight and conversion in mind — never templated filler.",
      },
      {
        title: "Review & Revision",
        description:
          "You review and we refine through structured rounds until every piece meets the bar, then it goes through final SEO checks.",
      },
      {
        title: "Publish, Measure & Improve",
        description:
          "Content is published on schedule, tracked for rankings and engagement, and refreshed based on how it actually performs.",
      },
      {
        title: "Report & Scale",
        description:
          "Monthly performance reviews guide what to scale up, repurpose or replace — the calendar gets smarter as the data grows.",
      },
    ],
    benefits: [
      {
        title: "Content That Ranks",
        description:
          "Search-intent planning and topic clusters earn organic visibility over time — compounding traffic instead of one-hit posts.",
      },
      {
        title: "Content That Converts",
        description:
          "Copy written to move readers to the next step, not just inform — every piece knows its job in the funnel.",
      },
      {
        title: "A Clear, On-Brand Voice",
        description:
          "Consistent tone across blog, web, email and social that builds recognition and trust the longer it runs.",
      },
      {
        title: "Dependable Delivery",
        description:
          "A monthly calendar you can plan around, with reliable turnaround and a review workflow that keeps quality consistent.",
      },
      {
        title: "Assets That Keep Working",
        description:
          "Content refreshed and strengthened instead of abandoned after publish — your library compounds instead of decaying.",
      },
      {
        title: "One System, Every Channel",
        description:
          "Content feeds SEO, ads, social and email together — so nothing is written in isolation and everything reinforces the rest.",
      },
    ],
    whyHeading: "Why Businesses Pick Eddinet for Content",
    whyPoints: [
      "Purpose Behind Every Word: Every piece has a purpose tied to the funnel, not just a word count.",
      "Grounded in Intent: Writing is grounded in search intent and audience insight, not guesswork.",
      "Predictable Delivery: Editorial calendars make delivery predictable for your team.",
      "Refresh Before Rebuild: We refresh old content instead of always starting from scratch.",
      "Content + SEO + Ads: Content is coordinated with SEO and ads as one connected system.",
      "Real Content Metrics: Reports tie content to rankings, traffic and enquiries — not fake metrics.",
    ],
    extraFaqs: [
      {
        q: "How long does each piece of content take?",
        a: "Blog articles and website pages typically take 5 to 7 business days including research and review; landing pages and campaign copy are usually faster. When you have a monthly calendar, we batch work so delivery is steady and dependable rather than bursty.",
      },
      {
        q: "Who reviews content before publishing?",
        a: "You do. We deliver drafts for your review and approval, incorporate feedback, and only publish once you're happy with the final piece. If you prefer, we can also move to an approval process with defined turnarounds so publishing never stalls on waiting for a sign-off.",
      },
      {
        q: "Is the content optimised for SEO?",
        a: "Yes — every piece is built around real search intent with optimised titles, headings, meta descriptions, internal links and structured data where relevant. We write for humans first and structure for both Google and AI search results, so the content ranks and reads well.",
      },
      {
        q: "Do you refresh old content as well as write new?",
        a: "Absolutely — and it's often the fastest win. Your existing pages may already have rankings that have decayed. We audit them, update facts and depth, strengthen headlines and internal links, and push the refreshed pages back up — usually cheaper and quicker than creating new ones.",
      },
    ],
  },
};

const sharedMetrics: { value: string; label: string }[] = [
  { value: "1,000+", label: "Projects delivered" },
  { value: "5+ Years", label: "In digital growth" },
  { value: "12+ Countries", label: "Clients served globally" },
  { value: "24×7", label: "Support & monitoring" },
];

export const sharedTestimonials: { name: string; designation: string; review: string }[] = [
  {
    name: "Rohan Malhotra",
    designation: "Founder, D2C Brand",
    review:
      "Eddinet treated our work like a partnership, not a vendor project. The process was transparent, milestones were met and the results actually moved our business — not just the dashboards.",
  },
  {
    name: "Priya Sharma",
    designation: "Marketing Head, SaaS Company",
    review:
      "What stood out was how everything connected — strategy, execution and reporting. We always knew what was being done, why it was done, and what it returned. That clarity is rare.",
  },
  {
    name: "Amit Verma",
    designation: "Director, Real Estate Firm",
    review:
      "We had been burned by agencies before with vague promises. Eddinet documented the plan, stayed accountable to it and delivered exactly what they committed to.",
  },
  {
    name: "Neha Gupta",
    designation: "CEO, Healthcare Startup",
    review:
      "The team adapted quickly to our industry, communicated clearly and kept quality high under tight timelines. We would absolutely work with them again.",
  },
];

function uniqueSlugMap(items: string[]): Record<string, string> {
  const used = new Set<string>();
  const map: Record<string, string> = {};
  for (const item of items) {
    let base = slugify(item);
    let candidate = base;
    let n = 2;
    while (used.has(candidate)) {
      candidate = `${base}-${n}`;
      n += 1;
    }
    used.add(candidate);
    map[item] = candidate;
  }
  return map;
}

const slugMaps: Record<string, Record<string, string>> = {};

function getSlugMap(catSlug: string): Record<string, string> {
  if (!slugMaps[catSlug]) {
    const service = services.find((s) => s.slug === catSlug);
    slugMaps[catSlug] = uniqueSlugMap(service?.allItems ?? []);
  }
  return slugMaps[catSlug];
}

export function getChildSlug(catSlug: string, item: string): string | null {
  if (catSlug === "seo") return seoItemToSlug[item] ?? null;
  return getSlugMap(catSlug)[item] ?? slugify(item);
}

function buildCrossLinks(
  cat: Service,
): GeneratedChildCrossLink[] {
  const related = (relatedServices[cat.slug] ?? [])
    .map((s) => services.find((x) => x.slug === s))
    .filter((x): x is Service => Boolean(x));

  const links: GeneratedChildCrossLink[] = [
    {
      title: `Back to ${cat.title} Services`,
      slug: `/services/${cat.slug}`,
      description: `Explore every ${cat.title.toLowerCase()} capability under one roof.`,
    },
  ];

  for (const r of related.slice(0, 2)) {
    links.push({
      title: `${r.title} Services`,
      slug: `/services/${r.slug}`,
      description: r.desc,
    });
  }

  links.push({
    title: "All Services",
    slug: "/services",
    description: "Browse the complete Eddinet service ecosystem.",
  });

  return links;
}

export function buildGeneratedChildService(
  cat: Service,
  item: string,
  slug: string,
): GeneratedChildService {
  const template = templates[cat.slug];
  const itemDesc = itemDetails[item] ?? cat.desc;
  const faqs = [
    ...(template?.extraFaqs ?? []),
    ...(faqsByService[cat.slug] ?? []),
  ];

  return {
    slug,
    categorySlug: cat.slug,
    categoryTitle: cat.title,
    categoryIcon: cat.icon,
    item,
    title: item,
    metaTitle: `${item} Services in Delhi NCR | Eddinet`,
    metaDescription: `${itemDesc} Eddinet delivers dependable ${item.toLowerCase()} services in Delhi NCR for India and global clients. Get a free proposal today.`,
    heroHeading: `${item} Services in Delhi NCR`,
    heroSubheading: itemDesc,
    image: cat.image,
    detailedDescription: `${itemDesc}\n\n${template?.approach ?? cat.desc}\n\nFrom scoping and strategy through delivery, reporting and ongoing support, the entire engagement is run as one connected system — with clear milestones, a named team and a focus on outcomes, not deliverables alone.`,
    features: template?.features ?? [],
    benefits: template?.benefits ?? [],
    metrics: sharedMetrics,
    whyChooseUs: {
      heading: template?.whyHeading ?? `Why Businesses Pick Eddinet`,
      points: template?.whyPoints ?? [],
    },
    process: {
      heading: "How Eddinet Works, Step by Step",
      steps:
        (template?.steps ?? []).map((step, i) => ({
          num: String(i + 1).padStart(2, "0"),
          title: step.title,
          description: step.description,
        })) ?? [],
    },
    testimonials: sharedTestimonials,
    faqs,
    crossLinks: buildCrossLinks(cat),
  };
}

export const generatedChildServices: GeneratedChildService[] = (() => {
  const all: GeneratedChildService[] = [];
  for (const cat of services) {
    if (cat.slug === "seo") continue;
    const map = getSlugMap(cat.slug);
    for (const item of cat.allItems) {
      all.push(buildGeneratedChildService(cat, item, map[item]));
    }
  }
  return all;
})();

export function getGeneratedChildByCategoryAndSlug(
  categorySlug: string,
  childSlug: string,
): GeneratedChildService | undefined {
  return generatedChildServices.find(
    (c) => c.categorySlug === categorySlug && c.slug === childSlug,
  );
}

export function getGeneratedChildrenForCategory(
  categorySlug: string,
): GeneratedChildService[] {
  return generatedChildServices.filter((c) => c.categorySlug === categorySlug);
}

export function getCategoryBySlug(categorySlug: string): Service | undefined {
  return services.find((s) => s.slug === categorySlug);
}

export function getCategoryTemplate(
  categorySlug: string,
): CategoryTemplate | undefined {
  return templates[categorySlug];
}