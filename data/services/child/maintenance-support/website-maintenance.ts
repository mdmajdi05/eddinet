// ============================================================================
//  FILE: data/services/child/maintenance-support/website-maintenance.ts
//  PAGE: /services/maintenance-support/website-maintenance-services-in-india
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
  slug: "website-maintenance-services-in-india",
  title: "Website Maintenance",
  metaTitle: "Website Maintenance Services in Delhi NCR | Eddinet",
  metaDescription: "Ongoing updates, fixes and care that keep websites secure, fast and current. The service that stops your site from quietly rotting. Eddinet delivers dependable website maintenance services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Monthly Maintenance Plans | CMS & Plugin Updates | Backups | WordPress Care",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Website Maintenance Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET delivers website maintenance services in India for brands that expect their websites to perform flawlessly every day. Through scheduled updates, vigilant checks, and prompt fixes, we keep your site secure, swift, and ready to convert.",
  detailedDescription: "A neglected website deteriorates quietly. Plugins go out of date, links break, pages slow down, and vulnerabilities accumulate. Eventually, visitors notice the decline, and so does Google.\n\nThis is why EDDINET, a website maintenance company in Delhi, treats upkeep as a discipline. We inspect your site on a fixed schedule and resolve small faults before they escalate. Consequently, your website remains an asset instead of a liability.\n\nWe offer flexible website maintenance plans in India for startups, growing businesses, and established enterprises. Our monthly website maintenance services in India cover updates, backups, security checks, and content support. Moreover, our WordPress website maintenance services in Delhi give you expert care without the cost of an in-house developer.",
  features: [
    {
      title: "CMS, Plugin & Theme Updates",
      description: "We apply every core, plugin, and theme update after testing it on a staging copy. Your site stays current without the risk of unexpected breakage.",
    },
    {
      title: "WordPress Maintenance",
      description: "Our WordPress website maintenance services in Delhi cover version upgrades, plugin audits, database cleanup, and compatibility checks. Your WordPress site stays lean, stable, and secure.",
    },
    {
      title: "Content & Media Updates",
      description: "We publish new pages, refresh outdated copy, and replace images on request. Your message stays accurate and your brand stays relevant.",
    },
    {
      title: "Backup & Restore Management",
      description: "We schedule automated backups and store them securely off-site. Should anything go wrong, restoration takes minutes rather than days.",
    },
    {
      title: "Security Checks & Malware Scans",
      description: "We review your site for suspicious files, weak credentials, and known vulnerabilities. Threats are neutralised before they cause lasting harm.",
    },
    {
      title: "Speed & Uptime Checks",
      description: "We track load times and availability throughout the month. Any slowdown is diagnosed and corrected promptly.",
    },
    {
      title: "Broken Link & Error Fixes",
      description: "We detect dead links, 404 errors, and display faults, then repair them swiftly. Visitors enjoy a smooth journey, and search engines see a healthy site.",
    },
    {
      title: "Monthly Website Maintenance Plans",
      description: "Our website maintenance plans in India bundle all of the above into a single predictable fee. You choose the level of care, and we handle the rest.",
    },
  ],
  featuresHeading: "Our Website Maintenance Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET for Website Maintenance in Delhi?",
    points: [
      "Preventive Approach: We address minor issues early, so major failures never occur.",
      "Test Before Deploy: Every update is vetted on a staging site, which protects your live pages.",
      "Predictable Monthly Pricing: Fixed fees and a defined scope remove unwelcome surprises.",
      "WordPress Specialists: Our engineers understand the quirks of plugins, themes, and page builders.",
      "Multi-Platform Expertise: We also maintain Shopify, WooCommerce, Laravel, and bespoke websites.",
      "Transparent Reporting: You see precisely what we accomplished, in plain language.",
    ],
  },
  process: {
    heading: "Our Website Maintenance Process",
    steps: [
      {
        num: "01",
        title: "Website Audit & Health Check",
        description: "We examine your CMS, plugins, security posture, speed, and backups. We then record the findings as a baseline.",
      },
      {
        num: "02",
        title: "Plan Selection & Scope Setting",
        description: "We recommend a maintenance plan that suits your site and budget. Response times and deliverables are confirmed in writing.",
      },
      {
        num: "03",
        title: "Scheduled Updates & Monitoring",
        description: "Our team applies updates on a fixed calendar and monitors your site continuously. Every change is tested before it goes live.",
      },
      {
        num: "04",
        title: "Issue Resolution & Support",
        description: "When a fault appears, we log it, prioritise it, and resolve it promptly. You stay informed at each step.",
      },
      {
        num: "05",
        title: "Monthly Report & Review",
        description: "You receive a clear summary of updates, backups, uptime, and fixes. We also suggest improvements for the month ahead.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are website maintenance services?",
      a: "They are recurring tasks that keep a website secure, updated, and functional. These typically include software updates, backups, security checks, bug fixes, and performance monitoring.",
    },
    {
      q: "How much do website maintenance services in India cost?",
      a: "Pricing depends on your platform, website size, and the level of support required. A small business site costs considerably less than a large ecommerce store. Share your requirements, and we will provide a transparent quote.",
    },
    {
      q: "What do website maintenance plans in India include?",
      a: "Most plans include updates, backups, security scans, uptime checks, minor fixes, and a monthly report. We tailor each plan to your needs.",
    },
    {
      q: "Why choose monthly website maintenance services in India?",
      a: "Monthly care prevents small problems from becoming costly failures. It also spreads the cost evenly across the year.",
    },
    {
      q: "Do you offer WordPress website maintenance services in Delhi?",
      a: "Yes. We handle WordPress core updates, plugin and theme management, database optimisation, and security hardening. We also support WooCommerce stores.",
    },
    {
      q: "How often should a website be maintained?",
      a: "Ideally, a website needs attention every week for updates and security, with a full review each month. Busy ecommerce sites often benefit from daily monitoring.",
    },
    {
      q: "Can you maintain a website that another agency built?",
      a: "Certainly. We first audit your site, fix existing issues, and then assume regular maintenance.",
    },
  ],
  cta: {
    heading: "Keep Your Website Healthy, Secure, and Fast",
    sub: "Discuss Your Website Maintenance Needs",
    description: "Ready to stop worrying about updates and downtime? Partner with EDDINET, a trusted website maintenance company in Delhi. Contact our team today for a complimentary website health check and a clear quote within 24 hours.",
  },
  crossLinks: crossLinksFor("maintenance-support"),
  docxHeadings: {
    about: "About EDDINET: Website Maintenance Company in Delhi",
    process: "Our Website Maintenance Process",
    faqs: "Frequently Asked Questions",
  },
};
