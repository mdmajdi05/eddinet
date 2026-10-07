// ============================================================================
//  FILE: data/services/child/web-development/landing-page-design.ts
//  PAGE: /services/web-development/landing-page-design-services-in-india
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================
// ── HERO FIELDS (top of the page) ─────────────────────────────────────
//   heroEyebrow    = badge chip shown ABOVE the <h1>
//   heroHeading    = the <h1> heading itself
//   heroSubheading = paragraph shown BELOW the <h1>

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/web-development";
export const child = {
  slug: "landing-page-design-services-in-india",
  title: "Landing Page Design",
  metaTitle: "Landing Page Design Services in Delhi NCR | Eddinet",
  metaDescription: "Focused, high-converting landing pages designed for specific campaigns and offers. One page, one goal — engineered to turn paid and organic traffic into conversions. Eddinet delivers dependable landing page design services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "PPC Landing Pages | Lead Generation Pages | Landing Page Redesign",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Landing Page Design Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET provides landing page design services in India for brands that want more leads from every click. We combine persuasive copy, clean UI design, and fast development to turn ad traffic into enquiries, sign-ups, and sales.",
  detailedDescription: "You pay for every visitor who clicks your ad. However, a weak landing page wastes that money. Visitors get confused, lose interest, and leave without taking action. As a result, your cost per lead goes up.\n\nThat is why our landing page design company in Delhi builds every page around one goal. We study your offer, your audience, and your ad message first. Then we design a page that guides visitors toward a single action.\n\nOur team manages the full project from start to finish. We deliver high-converting landing page design in India for startups and established brands. We also create PPC landing page design services in India for Google and Meta campaigns. In addition, we build lead generation landing page design in India for businesses that want a steady flow of quality enquiries.",
  features: [
    {
      title: "Landing Page Design Services in India",
      description: "We design focused, mobile-friendly landing pages with a clear headline, strong visuals, and one call to action. Each page is built to load fast and convert well.",
    },
    {
      title: "High-Converting Landing Page Design in India",
      description: "We use proven layouts, trust signals, and persuasive copy to raise your conversion rate. Every element on the page has a job, and nothing distracts visitors from the goal.",
    },
    {
      title: "PPC Landing Page Design Services in India",
      description: "We match your landing page to your ad copy, keywords, and audience intent. This improves your Quality Score, lowers your cost per click, and gets better results from your ad budget.",
    },
    {
      title: "Lead Generation Landing Page Design in India",
      description: "We build pages with smart forms, clear offers, and trust-building sections. Visitors can share their details in seconds, and you receive qualified leads.",
    },
    {
      title: "Product & Event Landing Pages",
      description: "We create pages for product launches, webinars, app downloads, and events. Each page tells your story quickly and pushes visitors to register or buy.",
    },
    {
      title: "Landing Page Redesign & A/B Testing",
      description: "We review your current page, find what blocks conversions, and fix it. Then we test different headlines, layouts, and buttons to find what works best.",
    },
  ],
  featuresHeading: "Our Landing Page Design Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Landing Page Design Company in Delhi?",
    points: [
      "Conversion-First Design: We design for action, not just for looks. Every section pushes visitors toward your goal.",
      "Mobile-First Approach: Most ad clicks come from phones. Therefore, we design for small screens first and then scale up.",
      "Fast Loading Speed: Slow pages lose leads. We use optimised images and clean code, so your page opens quickly.",
      "Ad-Ready Setup: We align your page with your campaign message and set up tracking for Google Ads, Meta Ads, and Analytics.",
      "Clear Timelines: We follow set milestones from copy to launch. As a result, your campaign starts on time.",
      "Full Ownership: You receive complete ownership of your page and design files once the project is complete.",
    ],
  },
  process: {
    heading: "Our Landing Page Design Process",
    steps: [
      {
        num: "01",
        title: "Goal & Audience Research",
        description: "We learn about your offer, target audience, and campaign goals. After that, we review your competitors and your ad strategy.",
      },
      {
        num: "02",
        title: "Copywriting & Page Structure",
        description: "Our team writes a clear headline, benefit-led copy, and a strong call to action. Then we plan the page flow so visitors move smoothly from interest to action.",
      },
      {
        num: "03",
        title: "UI Design & Visual Style",
        description: "Our designers create layouts for desktop and mobile. We choose colours, fonts, and images that match your brand and build trust. You review the design and share feedback.",
      },
      {
        num: "04",
        title: "Development & Integration",
        description: "Once you approve the design, our developers build the page with clean, fast code. We also connect forms, CRM tools, WhatsApp buttons, and analytics.",
      },
      {
        num: "05",
        title: "Testing, Launch & Optimisation",
        description: "Before launch, we test speed, devices, and forms. Then we publish the page and track results. If needed, we suggest improvements based on real data.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are landing page design services?",
      a: "Landing page design services cover the planning, copywriting, design, and development of a standalone page. This page has one goal, such as getting a call, a form fill, or a purchase.",
    },
    {
      q: "How much do landing page design services in India cost?",
      a: "The cost depends on the page length, custom design needs, and integrations. A single-page design costs less than a multi-section page with animations and tracking. Share your requirements, and we will send a clear quote.",
    },
    {
      q: "How long does a landing page design company in Delhi take to build a page?",
      a: "Most landing pages take 5 to 10 working days. This covers copy, design, development, and testing. Pages with advanced features may take longer.",
    },
    {
      q: "What is the difference between a landing page and a website?",
      a: "A website has many pages and several goals. A landing page has one page and one goal. Because of this focus, landing pages usually convert better for ad campaigns.",
    },
    {
      q: "What makes a landing page high-converting?",
      a: "A clear headline, a strong offer, a simple form, trust signals, and fast loading speed all help. In addition, a mobile-friendly layout and a single call to action raise conversions.",
    },
    {
      q: "Do you design PPC landing pages for Google Ads and Meta Ads?",
      a: "Yes. We match the page to your ad copy and keywords. We also set up conversion tracking, so you can measure every lead.",
    },
    {
      q: "Can you redesign my existing landing page?",
      a: "Yes. We find what is hurting your conversions, keep what works, and improve the rest.",
    },
  ],
  cta: {
    heading: "Turn More Clicks Into Customers",
    sub: "Discuss Your Landing Page Requirements",
    description: "Ready to get more from your ad budget? Partner with EDDINET, a trusted landing page design company in Delhi. Contact our team today to schedule a free consultation and get a clear quote within 24 hours. [Get a Free Quote] | [Call Us: +91-XXXXXXXXXX]",
  },
  crossLinks: crossLinksFor("web-development"),
  docxHeadings: {
    about: "About EDDINET: Landing Page Design Company in Delhi",
    process: "Our Landing Page Design Process",
    faqs: "Frequently Asked Questions",
  },
};
