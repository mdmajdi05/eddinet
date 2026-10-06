// ============================================================================
//  FILE: data/services/child/_category/web-development.ts
//  CATEGORY: /services/web-development
//
//  Ye category ke US blocks ka single source hai jo sabhi child pages par
//  bilkul same hain.  Page files ise import karti hain, copy nahi karti —
//  isliye yahan ek change poori category me lagu ho jaata hai aur duplicate
//  text ka scope nahi bachta.
//
//  Sirf >= 2 pages par shared values yahan aati hain; jo block kisi ek page
//  ka unique hai wo usi page file me rehta hai.
// ============================================================================

import type { GeneratedChildService } from "../generated-child-services";

type Block<K extends "features" | "benefits" | "whyChooseUs" | "process" | "faqs"> =
  GeneratedChildService[K];

export const features: Block<"features"> = [
  {
    title: "Performance-First Engineering",
    description: "Speed and Core Web Vitals are treated as requirements from the first line of code — optimised images, caching, efficient JavaScript and a fast, reliable experience on every device and connection.",
  },
  {
    title: "SEO-Ready Structure",
    description: "Semantic markup, structured data, clean URLs and correct metadata built in from day one — so Google and AI search engines can crawl, understand and rank your pages without costly retrofits.",
  },
  {
    title: "Mobile-First Responsive Build",
    description: "Experiences designed for mobile first, then extended to desktop and tablet — tested across real devices, browsers and connection speeds, where most of your traffic actually lives.",
  },
  {
    title: "Secure & Maintainable Code",
    description: "Modern stacks, security best practices and clean, documented code your team can actually maintain — not a bespoke tangle only the original developer can touch.",
  },
  {
    title: "Content Management That Works",
    description: "Simple CMS workflows so your team can update pages, blogs, products and offers without breaking layouts or needing a developer for every change.",
  },
  {
    title: "Conversion-Focused Design",
    description: "Clear navigation, obvious calls to action, fast forms and strong visual hierarchy — engineering every screen to move visitors toward enquiry, purchase or signup.",
  },
  {
    title: "Analytics & Tracking Setup",
    description: "Search Console, Analytics, event tracking and conversion goals configured during the build, so you measure performance from the first visitor instead of after launch.",
  },
  {
    title: "Launch & Handover Support",
    description: "Staged testing, secure deployment, training and post-launch care — including hosting and monitoring options so the site stays fast once it's live.",
  },
];

export const benefits: Block<"benefits"> = [
  {
    title: "Fast, SEO-Ready Foundation",
    description: "A site engineered to rank and load fast from day one, giving your SEO and content strategy a proper head start instead of retrofitting fixes later.",
  },
  {
    title: "Better Conversion Performance",
    description: "Clear navigation, fast pages and strong design work together to turn visitors into customers — a site built for business outcomes, not just looks.",
  },
  {
    title: "Lower Long-Term Cost",
    description: "Clean, documented, maintainable code means fewer surprises, faster change requests and far less 'why is this page broken' panic.",
  },
  {
    title: "Secure & Reliable",
    description: "Security best practices, proper hosting choices and dependable uptime are baked into the build — protecting your data, your customers and your reputation.",
  },
  {
    title: "Built to Scale",
    description: "Architecture that grows with your business — more traffic, more products, more content — without a rebuild every time something gets bigger.",
  },
  {
    title: "Your Team Can Actually Run It",
    description: "Documentation, training and simple CMS workflows mean you're not dependent on us for every update — you own the site, not us.",
  },
];

export const whyChooseUs: Block<"whyChooseUs"> = {
  heading: "Why Businesses Pick Eddinet for Web Development",
  points: [
    "Performance and SEO Built In: We build with performance and SEO as requirements, not afterthoughts patched on later.",
    "Modern, Maintainable Stacks: Modern, maintainable tech stacks chosen for your actual needs — not whatever we prefer.",
    "Mobile-First by Default: Mobile-first approach tested across real devices and connection speeds.",
    "Transparent Milestones: Transparent milestones — you review working versions as we go, never a surprise reveal.",
    "Support After Launch: Post-launch hosting, monitoring and support are available as part of the same team.",
    "One Connected System: Web, SEO, content and paid campaigns are built as one connected system.",
  ],
};

export const process: Block<"process"> = {
  heading: "How Eddinet Works, Step by Step",
  steps: [
    {
      num: "01",
      title: "Discovery & Scope",
      description: "We define the goals, audience, features, pages and technical requirements with stakeholders — so the build is measured against outcomes, not just deliverables.",
    },
    {
      num: "02",
      title: "Design & Information Architecture",
      description: "Visual design and site structure are aligned with conversion and SEO together — wireframes and direction reviewed before development starts.",
    },
    {
      num: "03",
      title: "Development & Integration",
      description: "Front-end and backend are built in sprints, with working versions for your review at each milestone — no waiting for a big reveal at the end.",
    },
    {
      num: "04",
      title: "Testing & Optimisation",
      description: "Performance, cross-device, accessibility and security testing run before anything goes live — including speed audits on real-world connection conditions.",
    },
    {
      num: "05",
      title: "Deploy & Train",
      description: "A clean, staged launch with no downtime risk, followed by training so your team knows how to run the CMS, analytics and day-to-day changes.",
    },
    {
      num: "06",
      title: "Ongoing Care & Iteration",
      description: "Hosting, monitoring, security updates and improvement cycles keep the site fast, secure and aligned with how your business evolves.",
    },
  ],
};

export const faqs: Block<"faqs"> = [
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
  {
    q: "What technology do you build websites with?",
    a: "We build with modern frameworks including React, Next.js, WordPress, Shopify and WooCommerce - chosen to match your business needs, performance targets and long-term maintainability.",
  },
  {
    q: "Are the websites optimised for SEO and speed?",
    a: "Yes. Sites are engineered around Core Web Vitals, semantic structure, crawlability and conversion from day one, so marketing does not have to work around the site.",
  },
  {
    q: "How long does a website take to build?",
    a: "A typical business website takes 4 to 8 weeks, and eCommerce or custom web applications take longer depending on scope. We agree a timeline and milestones before we start.",
  },
  {
    q: "Will our website work well on mobile?",
    a: "Yes. Every site we build is mobile-first, tested across devices and speeds, and designed so contact and purchase actions are easy on any screen size.",
  },
  {
    q: "Do you provide hosting and maintenance after launch?",
    a: "Yes. We can host, monitor, update and maintain your website after launch through our hosting and maintenance plans, so performance and security stay strong.",
  },
];
