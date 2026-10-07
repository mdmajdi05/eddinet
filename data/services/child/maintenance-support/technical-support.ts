// ============================================================================
//  FILE: data/services/child/maintenance-support/technical-support.ts
//  PAGE: /services/maintenance-support/website-technical-support-services-in-india
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
  slug: "website-technical-support-services-in-india",
  title: "Technical Support",
  metaTitle: "Technical Support Services in Delhi NCR | Eddinet",
  metaDescription: "Responsive, expert support for your website, app and infrastructure issues. A real engineer on the other end, not a ticket queue. Eddinet delivers dependable technical support services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Dedicated Helpdesk | Developer Support | Routine Website Changes",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Website Technical Support Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET offers website technical support services in India to help businesses resolve queries quickly, manage routine changes, and keep their digital platforms running smoothly. Our specialists focus on prompt responses, clear communication, and dependable expertise, so your team never faces a technical hurdle alone.",
  detailedDescription: "At EDDINET, we handle the small technical problems that quietly drain your time. A form stops sending emails, a page needs a quick edit, or a plugin misbehaves. We fix it fast, so your team stays focused on the business.\n\nAs an IT technical support company in Delhi, we give you a responsive team that knows your platform. Our dedicated technical support for websites in India means no repeated explanations. Our web development support services in India cover changes, integrations, and expert guidance. With our outsourced website support services in Delhi NCR, you get skilled help without hiring an in-house developer.",
  features: [
    {
      title: "Helpdesk & Ticket Support",
      description: "Our website technical support services in India offer a structured helpdesk by phone, email, or ticket. Every query is logged, tracked, and resolved with courtesy.",
    },
    {
      title: "Dedicated Support Team",
      description: "We assign a team that understands your website, hosting, and workflows. Our dedicated technical support for websites in India saves you from repeating yourself.",
    },
    {
      title: "Routine Changes & Updates",
      description: "We handle text edits, banner swaps, new pages, and minor layout adjustments. Your website stays fresh without a full development project.",
    },
    {
      title: "Web Development Support",
      description: "Our web development support services in India include feature tweaks, integrations, and code-level guidance. Your platform evolves steadily as your needs change.",
    },
    {
      title: "Email, Domain & Hosting Assistance",
      description: "We resolve DNS issues, SSL renewals, email configuration, and hosting queries. Essential services remain connected and dependable.",
    },
    {
      title: "Outsourced Support Team",
      description: "Our outsourced website support services in Delhi NCR act as your extended technical department. You gain expert capacity exactly when you need it.",
    },
  ],
  featuresHeading: "Our Website Technical Support Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your IT Technical Support Company in Delhi?",
    points: [
      "Responsive Communication: Queries receive prompt acknowledgement and clear updates.",
      "Familiar With Your Platform: A dedicated team learns your website, so resolutions are faster.",
      "Cost-Effective Expertise: You gain skilled engineers without the overhead of full-time hiring.",
      "Flexible Support Plans: Choose monthly hours or an ongoing retainer that suits your workload.",
      "Multi-Platform Proficiency: We support WordPress, WooCommerce, Shopify, Laravel, and bespoke websites.",
      "Lucid Reporting: Each month, you see exactly what we completed, in plain language.",
    ],
  },
  process: {
    heading: "Our Technical Support Process",
    steps: [
      {
        num: "01",
        title: "Onboarding & Platform Review",
        description: "We study your website, hosting, and access requirements. We then document everything for faster future resolution.",
      },
      {
        num: "02",
        title: "Support Plan & SLA Definition",
        description: "We tailor a support model to your needs. Response times, working hours, and escalation paths are confirmed in writing.",
      },
      {
        num: "03",
        title: "Request Logging & Prioritisation",
        description: "Every request is recorded and ranked by urgency. Pressing matters move to the front of the queue.",
      },
      {
        num: "04",
        title: "Resolution & Confirmation",
        description: "Our engineers complete the task and verify it with you. Nothing is closed until you are satisfied.",
      },
      {
        num: "05",
        title: "Monthly Reporting & Review",
        description: "You receive a concise summary of tickets, response times, and recommendations. We also suggest improvements for the month ahead.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are website technical support services?",
      a: "They are ongoing services that help you resolve technical queries, manage routine changes, and keep your website functional. They typically include helpdesk assistance, minor updates, and expert guidance.",
    },
    {
      q: "How much do website technical support services in India cost?",
      a: "Pricing depends on your platform, support hours, and response requirements. A small business plan costs considerably less than a large enterprise retainer. Share your requirements, and we will provide a transparent quote.",
    },
    {
      q: "What is dedicated technical support for websites in India?",
      a: "It is a service in which a consistent team handles your requests. Because they know your platform, resolutions are faster and more accurate.",
    },
    {
      q: "What is the difference between technical support and emergency support?",
      a: "Technical support manages routine queries and planned tasks. Emergency support responds to urgent crises, such as outages or hacks, at any hour.",
    },
    {
      q: "Do you provide outsourced website support services in Delhi NCR?",
      a: "Yes. Our team works as an extension of your business and delivers support remotely, so location never limits the service.",
    },
    {
      q: "Can you support a website that another agency built?",
      a: "Certainly. We review the platform first, document its structure, and then assume ongoing support.",
    },
    {
      q: "How do I raise a support request?",
      a: "You can reach us by phone, email, or support ticket. Every request is logged and prioritised on arrival.",
    },
  ],
  cta: {
    heading: "Expert Support Whenever Your Website Needs It",
    sub: "Discuss Your Technical Support Needs",
    description: "Ready to hand your technical worries to a dependable team? Partner with EDDINET, a trusted IT technical support company in Delhi. Contact us today for a complimentary support consultation and a clear quote within 24 hours.",
  },
  crossLinks: crossLinksFor("maintenance-support"),
  docxHeadings: {
    about: "About EDDINET: IT Technical Support Company in Delhi",
    process: "Our Technical Support Process",
    faqs: "Frequently Asked Questions",
  },
};
