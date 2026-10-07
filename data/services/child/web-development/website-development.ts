// ============================================================================
//  FILE: data/services/child/web-development/website-development.ts
//  PAGE: /services/web-development/website-development-services-in-delhi
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================
// ── HERO FIELDS (top of the page) ─────────────────────────────────────
//   heroEyebrow    = badge chip shown ABOVE the <h1>
//   heroHeading    = the <h1> heading itself
//   heroSubheading = paragraph shown BELOW the <h1>

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
export const child = {
  slug: "website-development-services-in-delhi",
  title: "Website Development",
  metaTitle: "Development Services in Delhi | Eddinet",
  metaDescription: "Looking for reliable development services in Delhi? Eddinet builds websites, web apps and custom software on time, tested properly, and built to keep working long after you've paid the invoice.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Full-Stack Custom Web Development | Enterprise B2B Systems | High-Performance Platforms",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Website Development Services in Delhi",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET provides high-performance website development services in Delhi. We engineer robust, scalable, and secure web applications built to support heavy traffic, integrate complex backend workflows, and drive measurable business growth.",
  detailedDescription: "At EDDINET, we turn complex business logic into reliable, fast, and scalable web solutions. Legacy software bottlenecks, poor database architecture, and unoptimized server setups directly slow down business operations and degrade user experience. Therefore, our web development team engineers custom, future-proof web platforms built for high concurrency and speed.\n\nOur engineering team manages your web platform end-to-end. We deliver custom website development in India across modern technology stacks, offer professional web development services in Delhi for growing enterprises, and build specialized B2B website development in India solutions designed to automate client portals, lead funnels, and enterprise workflows.",
  features: [
    {
      title: "Custom Website Development in India",
      description: "We build tailored, modular web applications using modern stacks (React, Node.js, Python, PHP, Next.js) engineered specifically around your unique business workflows.",
    },
    {
      title: "B2B Website Development in India",
      description: "We develop high-security B2B corporate portals, client dashboards, wholesale order systems, and multi-tier user access platforms built to streamline complex enterprise deals.",
    },
    {
      title: "Full-Stack Web Application Development",
      description: "We engineer secure front-end interfaces and scalable back-end server architectures with custom database schemas (MySQL, PostgreSQL, MongoDB) optimized for high transaction speed.",
    },
    {
      title: "E-Commerce Platform Development",
      description: "We build custom online stores and headless e-commerce platforms featuring custom checkout flows, inventory management synchronization, and secure payment gateway integrations.",
    },
    {
      title: "CMS & Headless Web Development",
      description: "We deploy scalable, flexible Content Management Systems (WordPress, Webflow, Strapi, Sanity) that give your content marketing teams complete publishing control without developer dependency.",
    },
    {
      title: "API Development & System Integration",
      description: "We build robust RESTful and GraphQL APIs to connect your web platform seamlessly with third-party CRMs, ERPs, payment providers, and marketing automation tools.",
    },
  ],
  featuresHeading: "Our Website Development Services in Delhi",
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
    heading: "Why Choose EDDINET as Your Website Development Company in Delhi?",
    points: [
      "100% Bespoke Code Architecture: Zero reliance on pre-made bloated templates or vulnerable NULLED plugins; every module is coded custom for performance.",
      "Enterprise Security Standards: Built-in safeguards including data encryption, SQL injection protection, XSS prevention, and strict role-based access controls.",
      "Core Web Vitals & Speed Optimization: Sub-second page rendering through server-side caching, database query optimization, and CDN delivery setup.",
      "Scalable Cloud Backends: Architected to handle exponential traffic surges and database expansion without service interruptions or speed lag.",
      "Full Source Code Ownership: Complete transfer of full intellectual property, repository access (GitHub/GitLab), and technical documentation upon deployment.",
    ],
  },
  process: {
    heading: "Our Website Development Process",
    steps: [
      {
        num: "01",
        title: "Technical Discovery & System Architecture",
        description: "We evaluate your operational workflows, technical dependencies, database requirements, and integration needs to design a bulletproof development blueprint.",
      },
      {
        num: "02",
        title: "Database Schema & API Specs",
        description: "Our back-end architects design clean, normalized database structures and map API endpoints to ensure ultra-fast data retrieval and absolute data integrity.",
      },
      {
        num: "03",
        title: "Front-End & Back-End Sprint Development",
        description: "Our full-stack engineers write clean, modular, and maintainable code—building responsive user interfaces alongside scalable server-side business logic.",
      },
      {
        num: "04",
        title: "API Integration & Third-Party Connectors",
        description: "We establish secure connections with external APIs, payment gateways, authentication servers, and enterprise tools like Salesforce, HubSpot, or SAP.",
      },
      {
        num: "05",
        title: "Rigorous QA, Security & Load Testing",
        description: "We conduct extensive automated and manual testing—including vulnerability scanning, cross-browser compatibility checks, and server load testing before launch.",
      },
      {
        num: "06",
        title: "Deployment, Server Setup & Continuous Maintenance",
        description: "We provision secure cloud environments (AWS, Cloudflare, DigitalOcean), configure SSL/TLS certificates, execute DNS cutovers, and provide continuous SLA-backed maintenance.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What is included in your website development services in Delhi?",
      a: "Our full-stack services cover requirement discovery, database architecture design, front-end and back-end coding, API integration, CMS configuration, QA testing, cloud deployment, and post-launch maintenance.",
    },
    {
      q: "What technology stacks do you use for custom website development in India?",
      a: "We build across modern stacks depending on project needs, including React, Next.js, Vue.js, Node.js, Python/Django, PHP/Laravel, and WordPress/WooCommerce.",
    },
    {
      q: "How do you handle B2B website development in India with custom integrations?",
      a: "We map out your business processes and develop custom REST/GraphQL APIs to connect your web portal with internal ERPs, CRMs (Salesforce/HubSpot), warehouse management systems, and payment gateways.",
    },
    {
      q: "Will my custom website be secure against cyber threats?",
      a: "Yes. We follow strict OWASP security guidelines, implement SSL/TLS encryption, parameterize database queries to prevent SQL injections, enforce HTTPS, and configure secure API authentication protocols.",
    },
    {
      q: "How long does a website development company in Delhi take to build a custom platform?",
      a: "Timeline depends on scope: standard business websites take 3 to 5 weeks, while complex custom web applications, B2B portals, or enterprise SaaS systems take 6 to 12 weeks across structured development sprints.",
    },
    {
      q: "Do I get full ownership of the source code?",
      a: "Yes. Upon final project settlement, 100% source code ownership, repository access, licenses, and technical documentation are fully transferred to your company.",
    },
  ],
  cta: {
    heading: "Scale Your Business With Custom Engineering",
    sub: "Discuss Your Web Development Requirements",
    description: "Ready to build a secure, fast, and scalable web platform that propels your business forward? Partner with EDDINET for expert website development services in Delhi. Contact our web engineering team today to schedule your technical consultation!",
  },
  crossLinks: crossLinksFor("web-development"),
  docxHeadings: {
    about: "About EDDINET: Web Engineering & Full-Stack Experts",
    process: "Our Website Development Process",
    faqs: "Frequently Asked Questions",
  },
};
