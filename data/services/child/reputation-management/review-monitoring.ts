// ============================================================================
//  FILE: data/services/child/reputation-management/review-monitoring.ts
//  PAGE: /services/reputation-management/online-review-monitoring-services-in-india
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================
// ── HERO FIELDS (top of the page) ─────────────────────────────────────
//   heroEyebrow    = badge chip shown ABOVE the <h1>
//   heroHeading    = the <h1> heading itself
//   heroSubheading = paragraph shown BELOW the <h1>

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/reputation-management";
export const child = {
  slug: "online-review-monitoring-services-in-india",
  title: "Review Monitoring",
  metaTitle: "Review Monitoring Services in Delhi NCR | Eddinet",
  metaDescription: "Tracking and alerting on reviews across Google and other platforms. You'll know the moment anything new is said about you. Eddinet delivers dependable review monitoring services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Multi-Platform Tracking | Instant Review Alerts | Brand Mention Monitoring",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Online Review Monitoring Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET provides professional online review monitoring services in India, helping businesses track customer feedback and brand mentions with accuracy, consistency, and timely alerts. Our team keeps a watchful eye on every platform, so no praise goes unthanked and no complaint goes unnoticed.",
  detailedDescription: "Feedback about your business surfaces everywhere, from Google and Justdial to social media and industry portals. Most owners check a few of these sporadically. A critical review can sit unanswered for days and quietly shape what buyers believe.\n\nAt EDDINET, a review monitoring company in Delhi, we gather this scattered conversation into one clear view. We watch, flag, and report, so you act while the moment still matters.\n\nOur multi-platform review tracking in India covers every major site where customers speak. Our brand mention monitoring services in India catch conversations beyond formal reviews. With our real-time review alert services in Delhi NCR, the right person on your team hears about it first.",
  features: [
    {
      title: "Multi-Platform Tracking",
      description: "Our multi-platform review tracking in India follows Google, social channels, and industry directories. Every rating lands in one dashboard.",
    },
    {
      title: "Instant Review Alerts",
      description: "Our real-time review alert services in Delhi NCR notify your team by email, WhatsApp, or SMS. Urgent feedback never waits in the shadows.",
    },
    {
      title: "Brand Mention Monitoring",
      description: "Our brand mention monitoring services in India track posts, articles, and comments that name your business. You spot praise and trouble early.",
    },
    {
      title: "Sentiment Analysis",
      description: "We classify feedback as positive, neutral, or negative and surface recurring themes. These patterns reveal what customers truly value.",
    },
    {
      title: "Competitor Benchmarking",
      description: "We compare your ratings and sentiment against nearby rivals. You see where you lead and where you lag.",
    },
    {
      title: "Reports & Dashboards",
      description: "You receive clear visual summaries of ratings, volumes, and trends. Decisions rest on evidence, not instinct.",
    },
  ],
  featuresHeading: "Our Online Review Monitoring Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Review Monitoring Company in Delhi?",
    points: [
      "Complete Visibility: We track reviews and mentions across many platforms, so nothing hides in a forgotten corner.",
      "Timely Alerts: Notifications reach you quickly, which gives you the chance to respond while the review is still fresh.",
      "Clutter-Free Reporting: We filter noise and highlight what matters. You read insights, not endless spreadsheets.",
      "Context, Not Just Counts: Sentiment themes explain why ratings move, so improvements target real causes.",
      "Seamless Handover: Monitoring connects naturally to reply and reputation support, which means issues move from detection to resolution smoothly.",
      "Local Market Awareness: Our Delhi NCR experience helps us read how Indian customers express praise and frustration.",
    ],
  },
  process: {
    heading: "Our Review Monitoring Process",
    steps: [
      {
        num: "01",
        title: "Platform & Brand Mapping",
        description: "We identify every site where your business is rated or discussed, including old listings and name variations. This map ensures no corner of the internet stays unwatched.",
      },
      {
        num: "02",
        title: "Dashboard & Alert Setup",
        description: "We configure tracking for each location and brand term. Alert rules, recipients, and urgency levels are tailored to your team so the right person gets the right message.",
      },
      {
        num: "03",
        title: "Continuous Tracking",
        description: "New reviews and mentions are collected on a steady cycle. Every item is tagged by platform, rating, and sentiment for quick review.",
      },
      {
        num: "04",
        title: "Escalation & Handover",
        description: "Serious complaints are flagged immediately with context and a suggested next step. Your team, or our review management specialists, can then respond without delay.",
      },
      {
        num: "05",
        title: "Monthly Insight Report",
        description: "You receive a concise report on volumes, ratings, sentiment shifts, and competitor movement. We close each report with practical recommendations for the month ahead.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are online review monitoring services?",
      a: "They track reviews and brand mentions across platforms and alert you to new feedback. They also report on ratings and sentiment trends.",
    },
    {
      q: "How much do online review monitoring services in India cost?",
      a: "Pricing depends on platforms, locations, and alert needs. Share your requirements, and we will send a clear quote.",
    },
    {
      q: "Which platforms do you monitor?",
      a: "We cover Google, major social channels, and industry directories relevant to your business. We confirm the exact list during the audit.",
    },
    {
      q: "How quickly will I receive alerts?",
      a: "Alerts are sent shortly after a new review or mention is detected. Timing can vary slightly by platform.",
    },
    {
      q: "What is the difference between review monitoring and review management?",
      a: "Monitoring detects and reports feedback. Management covers replying to reviews and handling disputes.",
    },
    {
      q: "Can you monitor my competitors?",
      a: "Yes. We benchmark public ratings and sentiment for nearby competitors, using publicly available data only.",
    },
    {
      q: "Do you monitor multiple business locations?",
      a: "Yes. We track single-location and multi-location businesses on one dashboard.",
    },
  ],
  cta: {
    heading: "Never Miss What Customers Are Saying",
    sub: "Discuss Your Review Monitoring Needs",
    description: "Ready to hear every customer's voice? Partner with EDDINET, a trusted review monitoring company in Delhi. Contact our team today for a complimentary monitoring audit and a clear quote within 24 hours.",
  },
  crossLinks: crossLinksFor("reputation-management"),
  docxHeadings: {
    about: "About EDDINET: Review Monitoring Company in Delhi",
    process: "Our Review Monitoring Process",
    faqs: "Frequently Asked Questions",
  },
};
