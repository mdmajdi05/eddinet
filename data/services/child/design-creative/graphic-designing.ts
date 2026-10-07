// ============================================================================
//  FILE: data/services/child/design-creative/graphic-designing.ts
//  PAGE: /services/design-creative/graphic-design-services-in-delhi-ncr
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================
// ── HERO FIELDS (top of the page) ─────────────────────────────────────
//   heroEyebrow    = badge chip shown ABOVE the <h1>
//   heroHeading    = the <h1> heading itself
//   heroSubheading = paragraph shown BELOW the <h1>

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/design-creative";
export const child = {
  slug: "graphic-design-services-in-delhi-ncr",
  title: "Graphic Designing",
  metaTitle: "Graphic Design Services in Delhi NCR | Eddinet",
  metaDescription: "Eddinet provides graphic design services in Delhi NCR that turn your ideas into clear, memorable visuals. We create logos, social media posts, brochures, and ad creatives that match your brand.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Custom Graphic Design | Logo & Branding | Affordable Design for Small Businesses",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Graphic Design Services in Delhi NCR",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "Hero supporting description:- Eddinet provides graphic design services in Delhi NCR that turn your ideas into clear, memorable visuals. We create logos, social media posts, brochures, and ad creatives that match your brand.",
  detailedDescription: "Does your brand look different on every platform? Are you tired of templates that make you look like everyone else? If yes, Eddinet is the solution to your problem.\n\nAs a graphic design agency in Delhi NCR, we work with startups, shops, and growing companies. We learn about your business and audience before opening any design software. You also receive clear previews at every stage, so you always know where your project stands.",
  features: [
    {
      title: "Custom Graphic Design Services",
      description: "Our custom graphic design services start with a blank canvas, not a template. We create original visuals for your brand, from logos to packaging. Because of this, your business looks unique and is easy to recognize.",
    },
    {
      title: "Professional Graphic Designer for Branding and Marketing",
      description: "Our professional graphic designers build complete brand looks, including logos, colour palettes, and typography. We also design social media posts, flyers, brochures, and ad banners. In addition, every file follows one style guide, so your brand stays consistent.",
    },
    {
      title: "Affordable Graphic Design Services",
      description: "Our affordable graphic design services use clear packages with no hidden charges. You pay for the work you need, not for extras you will never use. As a result, quality design stays within reach of smaller budgets.",
    },
    {
      title: "Graphic Design Company for Small Business",
      description: "Small businesses need design that works hard and costs little. We create a starter kit with a logo, social media templates, and print materials. Your team can then post and print with confidence, without hiring a full-time designer.",
    },
  ],
  featuresHeading: "Our Graphic Design Services in Delhi NCR",
  featuresDescription: "We focus on four areas where good design brings the biggest results.",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Graphic Design Services in Delhi NCR",
    points: [
      "Original work, not recycled templates: Every design is created for your brand. Your logo and visuals stand apart from competitors. This builds trust and recognition.",
      "Clear previews before final delivery: You review designs at each stage. Changes are made early, not after the work is finished. This saves time and avoids surprises.",
      "Print and digital ready: We deliver files in the right formats for social media, websites, and printing. Colours and resolution are checked in advance. Your designs look sharp everywhere.",
      "Pricing that suits small budgets: Packages are written clearly before we start. Extras are discussed first and never added silently. Billing stays predictable.",
      "You own the final design: You receive the final files and the right to use them. No hidden restrictions limit your brand. This keeps your business in control.",
      "Easy communication in your time zone: Our team is available during Indian business hours. Messages get quick, clear replies. Projects stay on schedule. We measure success by designs that look consistent, load fast, and help customers remember your brand. Ready to give your brand a stronger look? Contact Eddinet today for a free consultation and a clear design quote.",
    ],
  },
  process: {
    heading: "Our Process for Graphic Design in Delhi NCR",
    description: "Here is how we take your project from the first idea to the final files.",
    steps: [
      {
        num: "01",
        title: "Brief and brand discovery",
        description: "We ask about your business, audience, competitors, and style preferences. This shows what your design must achieve. It also prevents guesswork later.",
      },
      {
        num: "02",
        title: "Research and concept direction",
        description: "We study your market and prepare mood boards. As a result, you approve a clear direction before full design begins. Nothing is built on assumptions.",
      },
      {
        num: "03",
        title: "First design drafts",
        description: "Next, we create initial concepts based on the approved direction. You see them in the format you will actually use. Feedback is simple to share.",
      },
      {
        num: "04",
        title: "Revisions and refinement",
        description: "Then we polish the chosen design using your feedback. We adjust colours, spacing, and text until it feels right. Each round stays organized and on schedule.",
      },
      {
        num: "05",
        title: "Final files and format checks",
        description: "We prepare print-ready and web-ready files in the formats you need. Colours and sizes are checked for each use. This avoids blurry prints and cropped posts.",
      },
      {
        num: "06",
        title: "Handover and support",
        description: "Finally, you receive all source and export files, plus a simple usage guide. We remain available for future updates. Your brand can grow without starting over.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "How much do graphic design services in Delhi NCR cost?",
      a: "The price depends on the type of design, number of concepts, and revision rounds. A single logo costs far less than a full branding package. After a short discovery call, we share a clear quote with no hidden charges.",
    },
    {
      q: "How long does a graphic design project take?",
      a: "A simple social media post or flyer can take a few days. A complete logo and branding project usually takes one to three weeks. We share a timeline before work begins.",
    },
    {
      q: "What is the difference between a graphic designing company and a freelancer?",
      a: "A company offers a team, a structured process, and backup if one person is unavailable. A freelancer may cost less but can be limited in capacity. The right choice depends on your project size and long-term needs.",
    },
    {
      q: "Do I get the source files after the design is finished?",
      a: "Yes, you receive the final files in the formats you need, and source files can be included on request. This lets you or another designer edit them later. We confirm the details before the project starts.",
    },
    {
      q: "Can you design for a small business with a limited budget?",
      a: "Yes. We offer starter packages for logos, social media designs, and print materials. You can begin with the essentials and add more as your business grows.",
    },
  ],
  crossLinks: crossLinksFor("design-creative"),
  docxHeadings: {
    about: "About Us: Graphic Design Agency in Delhi NCR",
    process: "Our Process for Graphic Design in Delhi NCR",
    faqs: "FAQs About Graphic Design Services in Delhi NCR",
  },
};
