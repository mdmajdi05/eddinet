// ============================================================================
//  FILE: data/services/child/reputation-management/customer-feedback-management.ts
//  PAGE: /services/reputation-management/customer-feedback-management-services-in-india
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
  slug: "customer-feedback-management-services-in-india",
  title: "Customer Feedback Management",
  metaTitle: "Customer Feedback Management Services in Delhi NCR | Eddinet",
  metaDescription: "Collecting and actioning customer feedback to improve service and perception. Fewer negative reviews, because issues get fixed inside the business. Eddinet delivers dependable customer feedback management services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Feedback Collection | NPS & CSAT Surveys | Insight Analysis",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Customer Feedback Management Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET offers customer feedback management services in India to help businesses hear what customers really think, before it shows up as a bad review or a lost sale. We turn scattered opinions into clear insights, so every decision you make is backed by your customers' own words.",
  detailedDescription: "Unhappy customers rarely complain. They just leave.\n\nEDDINET is a customer feedback management company in Delhi that gets you the truth before you lose the sale. We find out what customers love, what annoys them, and what to fix first.\n\nYou get customer feedback collection and analysis in India across calls, WhatsApp, forms, and QR codes. Our NPS and customer satisfaction survey services in India turn opinions into scores you can track. We also set up feedback management software for businesses in Delhi NCR, so insights arrive without manual effort.",
  features: [
    {
      title: "Feedback Collection",
      description: "Our customer feedback collection and analysis in India gathers input through forms, WhatsApp, SMS, email, and in-store QR codes. Responses arrive in one place.",
    },
    {
      title: "NPS & CSAT Surveys",
      description: "Our NPS and customer satisfaction survey services in India measure loyalty and satisfaction. You get a clear score you can track every quarter.",
    },
    {
      title: "Insight Analysis",
      description: "We group comments by theme, such as pricing, staff, delivery, or product quality. Patterns become obvious, and priorities become simple.",
    },
    {
      title: "Feedback Tool Setup",
      description: "We select, configure, and manage feedback management software for businesses in Delhi NCR. Surveys, triggers, and dashboards work from day one.",
    },
    {
      title: "Closed-Loop Follow-Up",
      description: "Unhappy customers receive a quick, personal response from your team. Many problems get solved privately, before they turn public.",
    },
    {
      title: "Action Reports",
      description: "You receive a short, practical report with the top issues and suggested fixes. Insight turns into improvement.",
    },
  ],
  featuresHeading: "Our Customer Feedback Management Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Customer Feedback Management Company in Delhi?",
    points: [
      "Questions That Get Answered: Our surveys are short and simple. People respond because it takes seconds.",
      "Insights You Can Use: We do not hand you a pile of data. We show you what to fix first and why.",
      "Private Problems Stay Private: Closed-loop follow-up lets you resolve complaints before they reach public platforms.",
      "Built Around Your Systems: We connect feedback tools to the software you already use, so there is no extra workload for your team.",
      "Honest Data Only: We never filter out criticism. Real feedback, good or bad, is how a business improves.",
      "Local Understanding: Our Delhi NCR experience helps us design surveys in the language and tone your customers use.",
    ],
  },
  process: {
    heading: "Our Customer Feedback Management Process",
    steps: [
      {
        num: "01",
        title: "Goal & Touchpoint Mapping",
        description: "We start by asking what you want to learn and where customers interact with you. This shows us exactly where a question will earn an honest answer.",
      },
      {
        num: "02",
        title: "Survey Design",
        description: "We write short, neutral questions that people actually finish. Fewer questions mean higher response rates and cleaner data.",
      },
      {
        num: "03",
        title: "Tool & Trigger Setup",
        description: "We connect surveys to your billing, CRM, or booking system. A request goes out automatically after a purchase, visit, or support call.",
      },
      {
        num: "04",
        title: "Collection & Analysis",
        description: "Responses are tagged by theme, sentiment, and location. We separate one-off complaints from patterns that need real attention.",
      },
      {
        num: "05",
        title: "Follow-Up & Reporting",
        description: "Urgent cases go to your team with full context. Every month, you receive a summary with scores, trends, and clear next steps.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are customer feedback management services?",
      a: "They cover collecting, analysing, and acting on customer opinions. The goal is better service and stronger loyalty.",
    },
    {
      q: "How much do customer feedback management services in India cost?",
      a: "Pricing depends on survey volume, channels, and tools needed. Share your requirements, and we will send a clear quote.",
    },
    {
      q: "What is NPS?",
      a: "Net Promoter Score measures how likely customers are to recommend you. It is a simple way to track loyalty over time.",
    },
    {
      q: "What is the difference between customer feedback and online reviews?",
      a: "Feedback is usually private and collected directly by you. Reviews are public and appear on platforms like Google.",
    },
    {
      q: "Do you provide feedback management software for businesses in Delhi NCR?",
      a: "We set up and manage the right feedback tools for your business. We choose them based on your size, channels, and budget.",
    },
    {
      q: "How often should we collect feedback?",
      a: "Collect it after key moments, such as a purchase or service visit. Review the results monthly and the NPS score quarterly.",
    },
    {
      q: "Can feedback really reduce negative reviews?",
      a: "It can help. When unhappy customers get a quick response, many issues are solved before they go public. No method removes criticism entirely. Listen Better. Grow Faster.",
    },
  ],
  cta: {
    heading: "Discuss Your Feedback Management Needs",
    description: "Ready to learn what your customers really think? Partner with EDDINET, a trusted customer feedback management company in Delhi. Contact our team today for a complimentary feedback audit and a clear quote within 24 hours.",
  },
  crossLinks: crossLinksFor("reputation-management"),
  docxHeadings: {
    about: "About EDDINET: Customer Feedback Management Company in Delhi",
    process: "Our Customer Feedback Management Process",
    faqs: "Frequently Asked Questions",
  },
};
