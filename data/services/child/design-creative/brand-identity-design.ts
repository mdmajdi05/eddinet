// ============================================================================
//  FILE: data/services/child/design-creative/brand-identity-design.ts
//  PAGE: /services/design-creative/brand-identity-design-in-delhi
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
  slug: "brand-identity-design-in-delhi",
  title: "Brand Identity Design",
  metaTitle: "Brand Identity Design Services in India | Eddinet",
  metaDescription: "Eddinet provides brand identity design in Delhi that gives your business a distinct face, voice, and personality.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Brand Identity Design | Visual Identity & Guidelines | Complete Branding Packages",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Brand Identity Design in Delhi",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "Eddinet provides brand identity design in Delhi that gives your business a distinct face, voice, and personality. We shape how customers see you, remember you, and choose you.",
  detailedDescription: "Do customers mistake your business for a competitor? Does your brand look polished on one platform and patchy on another? If yes, Eddinet is the solution to your problem.\n\nAs a brand identity agency in Delhi, we blend strategy with craft. We study your market, your story, and your audience before choosing a single colour. You then receive a brand that feels deliberate, consistent, and unmistakably yours.",
  features: [
    {
      title: "Visual Identity Design",
      description: "Your visual identity is the full wardrobe of your brand. It covers the logo, colour palette, typography, patterns, and imagery style. Together, these elements make every touchpoint look related, from a website banner to a delivery box.",
    },
    {
      title: "Brand Guidelines Design",
      description: "A brand is only as strong as its consistency. Our brand guidelines document explains how to use your logo, colours, fonts, and tone of voice. As a result, any designer, printer, or marketer can follow it without guessing.",
    },
    {
      title: "Branding Services for Small Business",
      description: "Small businesses need a brand that earns trust quickly. We create focused identities that look established without an inflated budget. In addition, we help you prioritise, so you invest first where customers notice most.",
    },
    {
      title: "Complete Branding Package",
      description: "Our complete branding package bundles strategy, identity, and everyday materials in one project. You receive a logo, brand kit, social media templates, stationery, and a guidelines book. Consequently, your launch looks cohesive from day one.",
    },
  ],
  featuresHeading: "Our Brand Identity Design Services in Delhi",
  featuresDescription: "We focus on four services that turn a business into a recognisable brand.",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Brand Identity Design in Delhi",
    points: [
      "Strategy before aesthetics: We decide what your brand stands for before we decide how it looks. Every colour and shape has a reason. This keeps your identity meaningful, not merely decorative.",
      "A brand that survives growth: We design systems, not isolated graphics. New products, campaigns, and team members slot in easily. Your look stays coherent as you expand.",
      "Rules your team can actually use: Our guidelines are visual, short, and practical. Examples show what to do and what to avoid. Nobody needs a design degree to follow them.",
      "Distinct from your competitors: Research guides every creative decision. Your brand avoids the clichés of your industry. Customers notice the difference.",
      "Transparent scope and pricing: Deliverables are listed before we begin. Extras are discussed first, never added quietly. Budgeting becomes simple.",
      "Direct access to the designers: You talk with the people shaping your brand. Feedback reaches them without delay. Projects move faster and stay on course..",
    ],
  },
  process: {
    heading: "Our Process for Brand Identity Design in Delhi",
    description: "Here is how a rough idea becomes a finished brand.",
    steps: [
      {
        num: "01",
        title: "Brand immersion",
        description: "We interview you about your vision, values, and customers. This uncovers what truly sets you apart. It also shapes every decision that follows.",
      },
      {
        num: "02",
        title: "Market and competitor scan",
        description: "We examine how rivals look and speak. As a result, we find visual space that only you can occupy. Imitation is avoided from the start.",
      },
      {
        num: "03",
        title: "Strategy and positioning",
        description: "Next, we define your brand personality, promise, and tone. Each is written in plain language. You approve the foundation before design begins.",
      },
      {
        num: "04",
        title: "Identity design",
        description: "Then we craft your logo, palette, typography, and supporting graphics. Each choice is tied back to the strategy. You see how the pieces work together.",
      },
      {
        num: "05",
        title: "Real-world application",
        description: "We test the identity on signage, packaging, social media, and stationery. Weak points show up early. They are corrected before anything is finalised.",
      },
      {
        num: "06",
        title: "Guidelines and handover",
        description: "Finally, we deliver the brand book and all working files. A short walkthrough helps your team apply it correctly. Your identity is ready to scale.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What is brand identity design?",
      a: "Brand identity design creates the visual and verbal elements that represent your business. These include the logo, colours, typography, imagery, and tone of voice. Together, they make your brand recognisable and trustworthy.",
    },
    {
      q: "How much do brand identity design services in Delhi cost?",
      a: "The cost depends on the scope, the number of deliverables, and the depth of research. A basic identity costs less than a complete branding package with guidelines and stationery. After a short call, we shared a clear quote.",
    },
    {
      q: "What is the difference between a logo and a brand identity?",
      a: "A logo is one symbol. A brand identity is the entire system around it, including colours, fonts, imagery, and rules for using them. The system keeps your business consistent everywhere.",
    },
    {
      q: "Why do brand guidelines matter for a small business?",
      a: "Guidelines keep your look uniform when different people create your content. They save time, prevent costly reprints, and protect your reputation. Even a small team benefits from clear rules.",
    },
    {
      q: "How long does a complete branding package take?",
      a: "Most projects take three to six weeks, depending on research and feedback speed. Smaller identity projects can finish sooner. We share a realistic timeline before work begins.",
    },
  ],
  crossLinks: crossLinksFor("design-creative"),
  docxHeadings: {
    about: "About Us: Brand Identity Agency in Delhi",
    process: "Our Process for Brand Identity Design in Delhi",
    faqs: "FAQs",
  },
};
