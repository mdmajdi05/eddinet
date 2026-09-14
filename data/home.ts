// ============================================================================
//  FILE: data/home.ts  (HOME PAGE)
// WHAT'S IN THIS FILE:
//   processSteps - Home "How we work" timeline steps
//   whyFeatures  - Home "why choose us" cards
//   homeFaqs     - Home page FAQ accordions
//   testimonials - client reviews (currently empty)
// ============================================================================

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface WhyFeature {
  num: string;
  image: string;
  title: string;
  desc: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Understand the Business",
    desc: "We start with your business model, audience, competitive landscape and buying journey - not a list of services.",
  },
  {
    num: "02",
    title: "Identify the Growth Constraint",
    desc: "We locate the single thing most limiting your growth - visibility, conversion, technology or operations.",
  },
  {
    num: "03",
    title: "Select the Right Services",
    desc: "Only the capabilities that solve the constraint are recommended, chosen for outcome rather than breadth.",
  },
  {
    num: "04",
    title: "Build the Required Systems",
    desc: "Marketing, creative, web, apps and infrastructure are built as connected parts of one growth system.",
  },
  {
    num: "05",
    title: "Measure Performance",
    desc: "Everything is tied to business outcomes - leads, transactions, retention and efficiency - with transparent reporting.",
  },
  {
    num: "06",
    title: "Continuously Improve",
    desc: "Data, search behaviour and business signals guide ongoing optimisation, so the system compounds over time.",
  },
];

export const whyFeatures: WhyFeature[] = [
  {
    num: "01",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
    title: "Marketing + Technology Together",
    desc: "Campaigns, websites, applications and infrastructure are planned as connected parts of one system - not separate vendor hand-offs.",
  },
  {
    num: "02",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    title: "ROI as the Starting Point",
    desc: "Services are selected according to the business outcome they need to support: leads, transactions, retention, efficiency or brand growth.",
  },
  {
    num: "03",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    title: "Full-Funnel Thinking",
    desc: "Organic, paid, content, creative, web and technology capabilities work together instead of operating as isolated activities.",
  },
  {
    num: "04",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&q=80",
    title: "Data-Backed Decisions",
    desc: "Performance, search behaviour, user behaviour and business signals guide optimisation - not assumptions carried over from other clients.",
  },
  {
    num: "05",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    title: "Custom Strategy",
    desc: "The approach is shaped around your business model, audience, competitive landscape and buying journey rather than a templated playbook.",
  },
  {
    num: "06",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80",
    title: "Built for Long-Term Growth",
    desc: "The objective is sustainable visibility, reliable technology and measurable business value - not vanity metrics.",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const homeFaqs: Faq[] = [
  {
    q: "What does Eddinet provide beyond traditional digital marketing?",
    a: "Eddinet is an integrated digital growth, marketing and technology partner. Beyond SEO, social media and paid advertising, we build the websites, eCommerce platforms, mobile apps, software and AI solutions that turn that visibility into revenue - and then run the cloud, DevOps, hosting, maintenance and reputation work that keeps everything stable and trustworthy.",
  },
  {
    q: "Can Eddinet manage marketing and technology together?",
    a: "Yes - that is the core of how we work. Campaigns, websites, applications and infrastructure are planned as connected parts of one system, so search visibility joins with content and paid media, campaigns land on high-converting platforms, and every digital asset remains supported after launch.",
  },
  {
    q: "How do SEO, AI SEO, paid ads and content work together?",
    a: "SEO and AI SEO build durable, compounding organic visibility. Paid ads create controlled, immediate demand. Content gives both something credible to send people to and gives AI search engines clear answers to surface. When these are planned together rather than run by separate vendors, the business reduces dependence on any single channel.",
  },
  {
    q: "When should a business invest in web development or eCommerce?",
    a: "The right time is when a stronger digital foundation would materially raise conversion. If a great campaign is sending traffic to a slow, poorly structured site - or a store that doesn't work on mobile - the marketing budget is leaking. We typically recommend development when the website has become the bottleneck between traffic and revenue.",
  },
  {
    q: "Can Eddinet build software, AI solutions or mobile apps?",
    a: "Yes. We build custom software, SaaS-style systems, automation, AI-driven tools and native or cross-platform mobile apps - designed around product goals, user experience and scalable technical foundations, and connected to the same marketing and data strategy as the rest of your digital presence.",
  },
  {
    q: "Can Eddinet handle cloud, DevOps, hosting and migration?",
    a: "Yes. We cover cloud infrastructure, CI/CD and deployment, hosting architecture, migrations and ongoing maintenance - planned for reliability, security and minimal disruption, so platforms stay stable and fast as traffic and workloads grow.",
  },
  {
    q: "How is success measured - rankings and clicks or business outcomes?",
    a: "Rankings, impressions and follower counts are indicators, not outcomes. We report on what those numbers are supposed to produce: qualified traffic, leads, transactions, retention and measurable business value - decided for each engagement before any campaign begins.",
  },
  {
    q: "Does Eddinet work with businesses outside Delhi / Delhi NCR?",
    a: "Yes. Our headquarters are in Okhla, New Delhi, and our deep market expertise is in Delhi NCR - but we work with clients across India and internationally. A business outside the region gets the same strategy, technology and execution, shaped to its own market rather than a generic playbook.",
  },
];

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  company: string;
  service: string;
  outcome: string;
  initials: string;
}

// We only publish testimonials with direct, permission-based client consent.
// No entries are included until we have verifiable, approved feedback - per our
// quality and trust rules, we do not publish placeholder or fabricated reviews.
export const testimonials: Testimonial[] = [];
