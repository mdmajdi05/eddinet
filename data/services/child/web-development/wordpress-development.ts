// ============================================================================
//  FILE: data/services/child/web-development/wordpress-development.ts
//  PAGE: /services/web-development/wordpress-development
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
export const child = {
  slug: "wordpress-development",




  title: "WordPress Development",
  metaTitle: "WordPress Development Services in India | Eddinet",
  metaDescription: "Your website is your business's first impression — and if it's slow, outdated, or breaks on mobile, customers leave in a single click. Eddinet builds WordPress websites that load fast, rank on Google and convert.",
  heroHeading: "WordPress Development Services in Delhi NCR",
  heroSubheading: "Your website is your business's first impression — and if it's slow, outdated, or breaks on mobile, potential customers leave in a single click. That's why businesses of every size trust Eddinet for WordPress Development Services in India. We build websites that load fast, rank on Google, and turn visitors into paying customers — whether it's a simple business site or a high-traffic online store.",

  detailedDescription: "Eddinet is an India-based team specializing in WordPress Web Solutions — from custom theme design and plugin development to core-level PHP customization.\n\nWe build every website around your actual business goals, not a generic template. That's what makes us a long-term partner for businesses that want real results, not just \"a website that's live.\"",
  features: [
    {
      title: "Custom WordPress Website Development",
      description: "We design websites from scratch that reflect your brand identity — no cookie-cutter templates, just a site built specifically for your business.",
    },
    {
      title: "WordPress Theme & Plugin Customization",
      description: "If your current WordPress site isn't meeting your needs, we customize existing themes and plugins or build entirely new, purpose-fit solutions.",
    },
    {
      title: "WooCommerce & E-Commerce Development",
      description: "Whether you're launching an online store or scaling an existing one, we build secure, fast-loading WooCommerce stores with smooth, conversion-friendly checkouts.",
    },
    {
      title: "Website Migration & Redesign",
      description: "We migrate outdated or slow websites onto a modern WordPress setup without losing your existing SEO rankings.",
    },
    {
      title: "WordPress Maintenance & Support",
      description: "Work doesn't stop at launch. We provide ongoing updates, security monitoring, backups, and performance optimization to keep your site running smoothly.",
    },
    {
      title: "SEO-Friendly Development",
      description: "Every website we build follows technical SEO best practices — clean code, fast load times, and mobile-first structure so both Google and your visitors love it.",
    },
  ],
  benefits: [
    {
      title: "Faster Load Times",
      description: "Optimized code and clean architecture mean your site loads quickly, reducing bounce rates.",
    },
    {
      title: "Mobile-Responsive Design",
      description: "Every website works perfectly across mobile, tablet, and desktop.",
    },
    {
      title: "Scalable Architecture",
      description: "As your business grows, your website grows with it — no rebuilds needed.",
    },
    {
      title: "SEO-Ready Foundation",
      description: "A search-engine-optimized structure that helps you attract organic traffic.",
    },
    {
      title: "Easy Content Management",
      description: "WordPress's intuitive backend lets you update content without needing a developer.",
    },
    {
      title: "Ongoing Reliability",
      description: "Regular maintenance and security updates keep your site safe and current.",
    },
  ],
  metrics: sharedMetrics,
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
        description: "We understand your business, target audience, and goals, then map out a clear project roadmap.",
      },
      {
        num: "02",
        title: "Planning & Wireframing",
        description: "We plan the site structure and user flow so the final product is logical and easy to navigate.",
      },
      {
        num: "03",
        title: "Design",
        description: "Our design team creates visually appealing, brand-aligned mockups for your review.",
      },
      {
        num: "04",
        title: "Development",
        description: "Our developers write clean, scalable code with custom features, plugin integrations, and responsive layouts.",
      },
      {
        num: "05",
        title: "Testing & QA",
        description: "Every page, form, and feature is tested across devices and browsers before launch.",
      },
      {
        num: "06",
        title: "Launch",
        description: "Your website goes live with a smooth transition and zero downtime.",
      },
      {
        num: "07",
        title: "Post-Launch Support",
        description: "We stay involved after launch with updates, monitoring, and continuous improvements.",
      },
    ],
  },
  testimonials: sharedTestimonials,
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
  crossLinks: crossLinksFor("web-development"),
};
