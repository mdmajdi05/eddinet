// ============================================================================
//  FILE: data/services/child/maintenance-support/application-maintenance.ts
//  PAGE: /services/maintenance-support/application-maintenance-services-in-india
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================
// ── HERO FIELDS (top of the page) ─────────────────────────────────────
//   heroEyebrow    = badge chip shown ABOVE the <h1>
//   heroHeading    = the <h1> heading itself
//   heroSubheading = paragraph shown BELOW the <h1>

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/maintenance-support";
export const child = {
  slug: "application-maintenance-services-in-india",
  title: "Application Maintenance",
  metaTitle: "Application Maintenance Services in Delhi NCR | Eddinet",
  metaDescription: "Continuous app care covering features, dependencies, bugs and performance. Your app stays modern, stable and fast after launch. Eddinet delivers dependable application maintenance services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Application Support | Defect Resolution | Version Upgrades | AMC for Web Applications",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Application Maintenance Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET delivers application maintenance services in India for organisations whose operations depend on flawless software. Through disciplined monitoring, rapid defect resolution, and continuous refinement, we keep your applications stable, secure, and aligned with your evolving business.",
  detailedDescription: "Software is never truly finished. Dependencies lapse, integrations falter, and user expectations keep rising. Left unattended, even a well-built application grows sluggish, fragile, and exposed.\n\nThis is why EDDINET, a web application maintenance company in Delhi, safeguards your software long after deployment. We scrutinise your codebase, resolve defects before they disrupt users, and refine functionality as your needs mature. Consequently, your application remains a dependable engine of productivity.\n\nWe provide application support and maintenance in India for SaaS platforms, enterprise portals, and custom business systems. Our software maintenance services in India span corrective fixes, performance tuning, and strategic upgrades. Moreover, our AMC for web applications in India offers predictable costs and guaranteed expert assistance throughout the year.",
  features: [
    {
      title: "Corrective Maintenance & Defect Resolution",
      description: "We diagnose and eliminate bugs, crashes, and logic errors with surgical precision. Your users regain an uninterrupted experience.",
    },
    {
      title: "Adaptive Maintenance & Version Upgrades",
      description: "We migrate your application to current frameworks, languages, and server environments. Compatibility gaps close before they become costly failures.",
    },
    {
      title: "Perfective Maintenance & Feature Enhancements",
      description: "We refine workflows, extend modules, and introduce new capabilities. Your software evolves alongside your ambitions.",
    },
    {
      title: "Preventive Maintenance & Code Health Reviews",
      description: "We audit code quality, refactor fragile logic, and retire technical debt. Small weaknesses are corrected before they escalate.",
    },
    {
      title: "Database Maintenance & Optimisation",
      description: "We streamline queries, archive redundant records, and fortify data integrity. Your application stays responsive as information volumes grow.",
    },
    {
      title: "API & Third-Party Integration Support",
      description: "We monitor and repair connections with payment gateways, CRMs, and ERP systems. Data continues to flow without interruption.",
    },
    {
      title: "Security Patching & Vulnerability Management",
      description: "We apply critical patches across frameworks, libraries, and dependencies. Known exposures are sealed before adversaries can exploit them.",
    },
    {
      title: "Application Support & Helpdesk",
      description: "Our dedicated team resolves user queries with courtesy and expertise. Assistance is available by phone, email, or ticket.",
    },
  ],
  featuresHeading: "Our Application Maintenance Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Application Maintenance Partner in Delhi?",
    points: [
      "Engineering-Led Support: Experienced developers handle your tickets, not generic helpdesk staff.",
      "Stack-Agnostic Expertise: We maintain applications built with PHP, Laravel, Node.js, Python, React, and .NET.",
      "Defined Service Levels: Severity-based response times keep critical issues at the front of the queue.",
      "Safe Release Practices: Every change is tested on a staging environment before deployment.",
      "Predictable AMC Pricing: Fixed fees and a clear scope eliminate unwelcome surprises.",
      "Lucid Reporting: Each month, you see precisely what we achieved, in plain language.",
    ],
  },
  process: {
    heading: "Our Application Maintenance Process",
    steps: [
      {
        num: "01",
        title: "Application Audit & Knowledge Transfer",
        description: "We examine your architecture, code, database, and hosting environment. We then document dependencies and recurring risks.",
      },
      {
        num: "02",
        title: "SLA Definition & Support Planning",
        description: "We calibrate a support model to your operational priorities. Response times, severity levels, and reporting standards are defined in writing.",
      },
      {
        num: "03",
        title: "Monitoring & Preventive Care",
        description: "Our engineers track errors, performance, and security alerts continuously. Routine fixes and updates follow a fixed schedule.",
      },
      {
        num: "04",
        title: "Incident Management & Resolution",
        description: "Every issue is logged, prioritised, and resolved with full transparency. Critical incidents receive immediate attention.",
      },
      {
        num: "05",
        title: "Enhancement Planning & Monthly Review",
        description: "You receive a concise report on tickets, uptime, and improvements. We also recommend upgrades for the period ahead.",
      },
    ],
  },
  industries: {
    heading: "Application Maintenance for Multi-Industry Needs",
    items: [
      {
        title: "SaaS & Technology Companies",
        description: "Stable platforms, seamless releases, and swift incident response that protect customer retention.",
      },
      {
        title: "Banking, Finance & Insurance",
        description: "Secure, compliant applications with disciplined patching and audit-ready documentation.",
      },
      {
        title: "Healthcare & Education",
        description: "Dependable portals that keep records accessible and sensitive data protected.",
      },
      {
        title: "Logistics, Manufacturing & Retail",
        description: "Resilient systems that support inventory, orders, and supply chain workflows without interruption.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are application maintenance services?",
      a: "They are ongoing activities that keep software functional, secure, and relevant after launch. These typically include defect resolution, upgrades, performance tuning, security patching, and user support.",
    },
    {
      q: "How much do application maintenance services in India cost?",
      a: "Pricing depends on application complexity, technology stack, and the level of support required. A compact internal tool costs considerably less than a large enterprise platform. Share your requirements, and we will provide a transparent quote.",
    },
    {
      q: "What is an AMC for web applications in India?",
      a: "An annual maintenance contract (AMC) is a yearly agreement at a fixed price. It covers defect fixes, updates, monitoring, and support under defined service levels.",
    },
    {
      q: "What is the difference between application support and application maintenance?",
      a: "Support resolves user queries and incidents as they arise. Maintenance goes further, covering code upgrades, optimisation, and enhancements that prevent future incidents.",
    },
    {
      q: "Can you maintain an application that another vendor built?",
      a: "Certainly. We first audit the codebase and document its structure. We then rectify existing issues and assume ongoing maintenance.",
    },
    {
      q: "How quickly do you respond to critical application failures?",
      a: "Response times depend on the agreed SLA and severity level. Critical outages receive the highest priority and immediate engineering attention.",
    },
    {
      q: "Do you provide software maintenance services in India for legacy systems?",
      a: "Yes. We stabilise older applications, resolve compatibility issues, and plan phased modernisation when the time is right.",
    },
  ],
  cta: {
    heading: "Keep Your Applications Stable, Secure, and Future-Ready",
    sub: "Discuss Your Application Maintenance Needs",
    description: "Ready to secure the reliability of your software? Partner with EDDINET, a trusted web application maintenance company in Delhi. Contact our team today for a complimentary application audit and a clear AMC quote within 24 hours.",
  },
  crossLinks: crossLinksFor("maintenance-support"),
  docxHeadings: {
    about: "About EDDINET: Web Application Maintenance Company in Delhi",
    process: "Our Application Maintenance Process",
    faqs: "Frequently Asked Questions",
  },
};
