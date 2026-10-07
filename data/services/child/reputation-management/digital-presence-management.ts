// ============================================================================
//  FILE: data/services/child/reputation-management/digital-presence-management.ts
//  PAGE: /services/reputation-management/digital-presence-management-services-in-india
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
  slug: "digital-presence-management-services-in-india",
  title: "Digital Presence Management",
  metaTitle: "Digital Presence Management Services in Delhi NCR | Eddinet",
  metaDescription: "Consistent brand presence across search, social and listings. One brand, one voice, showing up right everywhere customers look. Eddinet delivers dependable digital presence management services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Digital Presence Audit | Search Visibility | Social & Profile Management | Brand Consistency",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Digital Presence Management Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET offers digital presence management services in India to help businesses show up, stand out, and stay consistent everywhere customers look. We connect your website, search results, social profiles, and listings into one clear identity, so every touchpoint builds trust.",
  detailedDescription: "Imagine a customer searching for you at 9 p.m. Your website looks modern, but your Instagram went quiet months ago. Your phone number differs on two listings, and your last review is from 2022. That customer moves on.\n\nAt EDDINET, an online presence management company in Delhi, we fix these gaps before they cost you business. We map every place your brand appears, then make each one accurate, active, and aligned.\n\nOur digital footprint management services in India clean up scattered and outdated profiles. Our online visibility management services in India help the right audience find you faster. With our business digital presence optimization in Delhi NCR, local brands, clinics, and growing companies get one team steering their entire online identity.",
  features: [
    {
      title: "Presence Audit",
      description: "Our digital presence management services in India begin with a full review of your website, profiles, listings, and search results. You see exactly where you stand.",
    },
    {
      title: "Footprint Cleanup",
      description: "Our digital footprint management services in India remove outdated pages, duplicate profiles, and mismatched details. Your brand appears accurate everywhere.",
    },
    {
      title: "Search Visibility",
      description: "Our online visibility management services in India improve how your brand ranks and appears on Google. The right customers find you at the right moment.",
    },
    {
      title: "Social & Profile Management",
      description: "We keep your social and business profiles active, branded, and consistent. Followers see a business that is alive and trustworthy.",
    },
    {
      title: "Local Presence Optimisation",
      description: "Our business digital presence optimization in Delhi NCR strengthens your visibility across your service area. Nearby customers find you easily.",
    },
    {
      title: "Content & Brand Consistency",
      description: "We align your messaging, visuals, and tone across every channel. Your brand feels like one voice, not many.",
    },
  ],
  featuresHeading: "Our Digital Presence Management Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Online Presence Management Company in Delhi?",
    points: [
      "One Team, One Strategy: Website, search, social, and listings work together. You avoid juggling several vendors who never talk to each other.",
      "Audit-Led Decisions: We fix what the data shows, not what looks trendy. Every action ties back to a clear goal.",
      "Consistency That Builds Trust: Matching details and messaging across platforms make your brand look reliable. Customers feel safer choosing you.",
      "Local Market Understanding: Our Delhi NCR experience helps us reach Indian customers where and how they search.",
      "Honest Expectations: We never promise overnight rankings or fake followers. We build visibility through steady, ethical work.",
      "Plain-Language Reporting: You see what changed and why, without jargon.",
    ],
  },
  process: {
    heading: "Our Digital Presence Management Process",
    steps: [
      {
        num: "01",
        title: "Presence Discovery",
        description: "We list every platform where your brand appears, including old profiles you may have forgotten. This map shows what helps you, what hurts you, and what is missing.",
      },
      {
        num: "02",
        title: "Gap & Priority Analysis",
        description: "We compare your presence against nearby competitors and rank the fixes by impact. The biggest wins come first, so progress shows early.",
      },
      {
        num: "03",
        title: "Unified Brand Setup",
        description: "We standardise your name, details, descriptions, and visuals across every profile. Customers see the same trusted identity wherever they land.",
      },
      {
        num: "04",
        title: "Visibility Building",
        description: "We publish fresh content, strengthen search signals, and keep profiles active on a steady calendar. Your presence grows week by week.",
      },
      {
        num: "05",
        title: "Monitoring & Monthly Report",
        description: "We track visibility, traffic, and engagement trends. Each month you receive a clear report with practical next steps.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are digital presence management services?",
      a: "They manage how your business appears across websites, search, social media, and listings. The goal is a consistent, visible, and trustworthy online identity.",
    },
    {
      q: "How much do digital presence management services in India cost?",
      a: "Pricing depends on your platforms, locations, and scope of work. Share your requirements, and we will send a clear quote.",
    },
    {
      q: "What is a digital footprint?",
      a: "It is the trail of pages, profiles, listings, and mentions that exist about your business online. Some are created by you, and others by third parties.",
    },
    {
      q: "What is the difference between digital presence and online reputation management?",
      a: "Digital presence covers your overall visibility and brand consistency. Reputation management focuses on reviews, search results, and harmful content.",
    },
    {
      q: "Does an online presence management company in Delhi work with small businesses?",
      a: "Yes. We offer scalable plans for local shops, clinics, and startups as well as larger companies.",
    },
    {
      q: "How long does it take to see improvement?",
      a: "Cleanup and consistency fixes show quickly. Stronger visibility usually builds over several months.",
    },
    {
      q: "Do you manage social media accounts too?",
      a: "Yes. We keep your profiles active and aligned with your brand as part of the plan. Be Found. Be Trusted. Be Chosen.",
    },
  ],
  cta: {
    heading: "Discuss Your Digital Presence Needs",
    description: "Ready to build an online identity customers trust? Partner with EDDINET, a trusted online presence management company in Delhi. Contact our team today for a complimentary presence audit and a clear quote within 24 hours.",
  },
  crossLinks: crossLinksFor("reputation-management"),
  docxHeadings: {
    about: "About EDDINET: Online Presence Management Company in Delhi",
    process: "Our Digital Presence Management Process",
    faqs: "Frequently Asked Questions",
  },
};
