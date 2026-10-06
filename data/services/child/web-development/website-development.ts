// ============================================================================
//  FILE: data/services/child/web-development/website-development.ts
//  PAGE: /services/web-development/website-development
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
export const child = {
  slug: "website-development",




  title: "Website Development",
  metaTitle: "Development Services in Delhi | Eddinet",
  metaDescription: "Looking for reliable development services in Delhi? Eddinet builds websites, web apps and custom software on time, tested properly, and built to keep working long after you've paid the invoice.",
  heroHeading: "Website Development Services in Delhi NCR",
  heroSubheading: "Searching for development services in Delhi? You've probably noticed the same pattern — big promises, missed deadlines, and websites that still have bugs at launch. Eddinet builds things differently: on time, tested properly, and built to keep working long after you've paid the invoice. We're a Delhi-based team building websites, web apps, and custom software for businesses that want results, not excuses.",

  detailedDescription: "Eddinet started with a simple frustration — watching clients get burned by agencies that oversold and underdelivered. So we built something different: a team where the person coding your project is someone you can actually talk to.\n\nToday, we're one of the more trusted names offering development services in Delhi, and we still work by the same rule — fewer clients, better work. We take on projects we know we can genuinely deliver on, not everything that walks through the door.",
  features: [
    {
      title: "Website Development",
      description: "Fast, clean, SEO-friendly sites that look sharp on every device.",
    },
    {
      title: "Web Application Development",
      description: "Custom dashboards, booking systems, and portals built with React, Next.js, and Node.js.",
    },
    {
      title: "E-Commerce Development",
      description: "Shopify, WooCommerce, or fully custom stores, from product setup to payment integration.",
    },
    {
      title: "WordPress Development",
      description: "Clean, custom builds without the plugin clutter.",
    },
    {
      title: "Custom Software Development",
      description: "Internal tools and automation built around how your business actually runs.",
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing updates, security, and fixes so your site stays fast and stable.",
    },
  ],
  benefits: [
    {
      title: "One Team, Not a Freelancer Chain",
      description: "Design, dev, testing, and support under one roof.",
    },
    {
      title: "Realistic Timelines",
      description: "We commit to what we can actually deliver.",
    },
    {
      title: "Full Code Ownership",
      description: "No lock-in, no black boxes.",
    },
    {
      title: "SEO-Conscious Builds",
      description: "Clean code and fast load times from day one.",
    },
    {
      title: "Local Availability, Global Standards",
      description: "Easy to reach, built to a high bar.",
    },
  ],
  metrics: sharedMetrics,
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
        description: "We understand your business goals before we plan anything.",
      },
      {
        num: "02",
        title: "Planning & Strategy",
        description: "Right tech stack, clear timeline, no surprises later.",
      },
      {
        num: "03",
        title: "Design & Development",
        description: "Built in visible stages, not one big reveal at the end.",
      },
      {
        num: "04",
        title: "Testing & QA",
        description: "Checked across devices and edge cases before anything goes live.",
      },
      {
        num: "05",
        title: "Launch",
        description: "Careful deployment with a rollback plan just in case.",
      },
      {
        num: "06",
        title: "Ongoing Support",
        description: "We stay involved after launch — fixes, updates, and future features.",
      },
    ],
  },
  testimonials: sharedTestimonials,
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
  crossLinks: crossLinksFor("web-development"),
};
