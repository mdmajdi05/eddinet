// ============================================================================
//  FILE: data/services/child/reputation-management/google-business-profile.ts
//  PAGE: /services/reputation-management/google-business-profile-management-services-in-india
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
  slug: "google-business-profile-management-services-in-india",
  title: "Google Business Profile",
  metaTitle: "Google Business Profile Services in Delhi NCR | Eddinet",
  metaDescription: "Profile setup, optimisation and updates that power local search visibility. Your business found, accurate and appealing in the local pack. Eddinet delivers dependable google business profile services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Profile Setup & Verification | GBP Optimisation | Google Maps Visibility | Monthly Insights",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Google Business Profile Management Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET offers Google Business Profile management services in India to help local businesses appear prominently on Google Search and Maps. Our specialists focus on accurate details, compelling content, and consistent upkeep, so nearby customers find you and choose you.",
  detailedDescription: "When customers need a service nearby, they search on Google first. An incomplete profile, outdated hours, or sparse photos can send them straight to a competitor. Meanwhile, you may never know how many enquiries slipped away.\n\nThis is why EDDINET, a Google My Business optimization company in Delhi, treats your profile as a living storefront. We refine every detail, publish fresh content, and track how customers find you. Consequently, your business earns stronger visibility where it matters most.\n\nOur GBP optimization services in India serve clinics, retailers, restaurants, and service providers. We also handle Google Business Profile setup and verification in India for new and multi-location businesses. Moreover, our local SEO and Google Maps ranking services in Delhi NCR strengthen your presence across your service area.",
  features: [
    {
      title: "Profile Setup & Verification",
      description: "Our Google Business Profile setup and verification in India covers creation, ownership claims, and approval. Your listing goes live accurately and securely.",
    },
    {
      title: "Profile Optimisation",
      description: "Our GBP optimization services in India refine categories, services, descriptions, and attributes. Your profile matches what customers search for.",
    },
    {
      title: "Local SEO & Maps Ranking",
      description: "Our local SEO and Google Maps ranking services in Delhi NCR strengthen your relevance and local signals. Your business becomes easier to find nearby.",
    },
    {
      title: "Photos, Posts & Offers",
      description: "We publish fresh photos, updates, and offers on a regular schedule. Your profile stays active and engaging.",
    },
    {
      title: "Q&A & Messaging Care",
      description: "We answer customer questions and manage profile messages. Every enquiry receives a prompt, polished response.",
    },
    {
      title: "Insights & Reporting",
      description: "We track searches, calls, direction requests, and website clicks. Decisions rest on evidence, not conjecture.",
    },
  ],
  featuresHeading: "Our Google Business Profile Management Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Google My Business Optimization Company in Delhi?",
    points: [
      "Policy-Compliant Methods: We follow Google's guidelines. We never use fake addresses, keyword-stuffed names, or purchased reviews.",
      "Local Market Insight: Our Delhi NCR experience helps us target how Indian customers search.",
      "Detail-Driven Optimisation: Every category, service, and attribute is chosen with purpose.",
      "Multi-Location Expertise: We manage profiles for single outlets and large branch networks.",
      "Search-Led Approach: Profile care and local SEO work together for stronger visibility.",
      "Transparent Reporting: Each month, you see what changed, in plain language.",
    ],
  },
  process: {
    heading: "Our Google Business Profile Process",
    steps: [
      {
        num: "01",
        title: "Profile Audit",
        description: "We review your listing, categories, accuracy, and local competitors. We then record a clear baseline.",
      },
      {
        num: "02",
        title: "Local Strategy",
        description: "We define target keywords, service areas, and priorities. Your plan reflects genuine business goals.",
      },
      {
        num: "03",
        title: "Setup & Optimisation",
        description: "We claim, verify, and refine your profile in full. Every field is completed with precision.",
      },
      {
        num: "04",
        title: "Content & Engagement",
        description: "We publish posts and photos and answer questions regularly. Your profile stays fresh.",
      },
      {
        num: "05",
        title: "Monthly Reporting",
        description: "You receive a concise report on visibility and customer actions. We also recommend improvements for the month ahead.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are Google Business Profile management services?",
      a: "They are services that set up, optimise, and maintain your Google listing. They cover details, photos, posts, questions, and performance tracking.",
    },
    {
      q: "How much do Google Business Profile management services in India cost?",
      a: "Pricing depends on your industry, number of locations, and scope of work. A single-location plan costs less than a multi-branch programme. Share your requirements, and we will send a clear quote.",
    },
    {
      q: "Is Google My Business the same as Google Business Profile?",
      a: "Yes. Google renamed Google My Business to Google Business Profile. The platform and its purpose remain the same.",
    },
    {
      q: "How long does Google Business Profile verification take?",
      a: "It varies by method and business type. Some profiles verify within days, while others need additional review.",
    },
    {
      q: "Can you improve my Google Maps ranking?",
      a: "Yes, we can improve your relevance and local signals. However, no agency can guarantee a specific position on Google Maps.",
    },
    {
      q: "Can you recover a suspended Google Business Profile?",
      a: "We can review the issue and prepare a policy-compliant reinstatement request. Approval rests with Google.",
    },
    {
      q: "Do you manage multiple business locations?",
      a: "Yes. We manage single-location and multi-location profiles under one plan.",
    },
  ],
  cta: {
    heading: "Get Found Where Customers Are Searching",
    sub: "Discuss Your Google Business Profile Needs",
    description: "Ready to stand out on Google Search and Maps? Partner with EDDINET, a trusted Google My Business optimization company in Delhi. Contact our team today for a complimentary profile audit and a clear quote within 24 hours.",
  },
  crossLinks: crossLinksFor("reputation-management"),
  docxHeadings: {
    about: "About EDDINET: Google My Business Optimization Company in Delhi",
    process: "Our Google Business Profile Process",
    faqs: "Frequently Asked Questions",
  },
};
