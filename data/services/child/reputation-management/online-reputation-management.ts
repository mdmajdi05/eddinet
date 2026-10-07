// ============================================================================
//  FILE: data/services/child/reputation-management/online-reputation-management.ts
//  PAGE: /services/reputation-management/online-reputation-management-services-in-india
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
  slug: "online-reputation-management-services-in-india",
  title: "Online Reputation Management",
  metaTitle: "Online Reputation Management Services in Delhi NCR | Eddinet",
  metaDescription: "Protecting and strengthening how your brand is perceived across the web. Monitoring, response and growth handled as one continuous system. Eddinet delivers dependable online reputation management services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Search Result Management | Reputation Repair | Negative Content Removal | Personal ORM | Corporate ORM",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Online Reputation Management Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET offers online reputation management services in India to help individuals and businesses control what the world finds when it searches their name. Our specialists combine ethical content strategy, careful monitoring, and policy-based action, so your first impression online is accurate and credible.",
  detailedDescription: "Your name is a search query before it is a handshake. One damaging article, a stale complaint, or a misleading forum thread can dominate page one for years. Buyers, investors, and recruiters rarely look past it.\n\nAt EDDINET, an ORM company in Delhi, we take back that narrative. We study what appears, understand why it ranks, and build a stronger, truthful presence around it. Gradually, credible content replaces the clutter.\n\nOur online reputation repair services in India restore standing after a public setback. Our negative content removal services in India pursue legitimate takedowns where platform policies or the law allow. In addition, our personal and corporate ORM services in Delhi NCR protect founders, professionals, and companies alike.",
  features: [
    {
      title: "Search Result Management",
      description: "Our online reputation management services in India reshape the first page of results for your name. Authentic, authoritative content rises to the top.",
    },
    {
      title: "Reputation Repair",
      description: "Our online reputation repair services in India rebuild trust after complaints, controversies, or outdated coverage. Recovery is steady and sustainable.",
    },
    {
      title: "Negative Content Removal",
      description: "Our negative content removal services in India target material that breaches platform rules or legal standards. Each request is documented, though final decisions rest with the platform.",
    },
    {
      title: "Content Suppression",
      description: "When removal is not possible, we publish credible assets that outrank harmful pages. Damaging links slide beyond the reach of casual searchers.",
    },
    {
      title: "Personal & Corporate ORM",
      description: "Our personal and corporate ORM services in Delhi NCR cover executives, doctors, founders, and organisations. Each profile receives a tailored strategy.",
    },
    {
      title: "Crisis Response",
      description: "We act swiftly when a damaging story breaks. Measured statements and corrective content limit the spread.",
    },
  ],
  featuresHeading: "Our Online Reputation Management Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your ORM Company in Delhi?",
    points: [
      "Ethical Methods Only: We never use fake reviews, hacked accounts, or manipulative tactics. Your reputation stays safe for the long term.",
      "Honest About Removal: We explain upfront what can and cannot be removed. You receive a realistic plan, not an empty promise.",
      "Search-Led Expertise: Our SEO background helps us push credible content upward and harmful pages down.",
      "Discreet Handling: Sensitive personal and corporate matters stay strictly confidential.",
      "Legal Coordination: We work alongside your lawyers when a takedown requires formal action.",
      "Transparent Reporting: Every month you see what changed, in plain language.",
    ],
  },
  process: {
    heading: "Our Online Reputation Management Process",
    steps: [
      {
        num: "01",
        title: "Reputation Audit",
        description: "We map every search result, review, news piece, and social mention linked to your name. This reveals what is helping you, what is hurting you, and what is missing.",
      },
      {
        num: "02",
        title: "Risk & Removal Assessment",
        description: "We sort each harmful item by severity and removal potential. Some qualify for policy requests or legal notices, while others need a suppression strategy.",
      },
      {
        num: "03",
        title: "Strategy & Content Plan",
        description: "We design a roadmap of profiles, articles, interviews, and press features. Every asset is truthful, optimised, and built to rank.",
      },
      {
        num: "04",
        title: "Execution & Outreach",
        description: "We publish content, submit well-documented takedown requests, and coordinate with your legal counsel where needed. Progress is tracked at each stage.",
      },
      {
        num: "05",
        title: "Monitoring & Monthly Report",
        description: "We watch rankings and new mentions continuously. You receive a clear report on movement, risks, and next steps.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are online reputation management services?",
      a: "They shape how a person or business appears online. They cover search results, reviews, news, and social mentions.",
    },
    {
      q: "How much do online reputation management services in India cost?",
      a: "Pricing depends on the scope, the volume of negative content, and the competition for your name. Share your requirements, and we will send a clear quote.",
    },
    {
      q: "Can you remove negative content from Google?",
      a: "We can pursue removal when content violates platform policies or legal standards. Otherwise, we suppress it with credible content. No agency can guarantee deletion.",
    },
    {
      q: "How long does online reputation repair take?",
      a: "Early movement often appears within weeks. Lasting results typically need several months.",
    },
    {
      q: "What is the difference between ORM and review management?",
      a: "ORM covers your whole search presence. Review management focuses on replying to reviews on platforms like Google.",
    },
    {
      q: "Do you offer personal ORM services in Delhi NCR?",
      a: "Yes. We support professionals, founders, and public figures as well as companies.",
    },
    {
      q: "Will my case remain confidential?",
      a: "Yes. We handle every engagement discreetly and share details only with your approval.",
    },
  ],
  cta: {
    heading: "Take Charge of What the World Finds",
    sub: "Discuss Your Reputation Management Needs",
    description: "Ready to reshape your search results? Partner with EDDINET, a trusted ORM company in Delhi. Contact our team today for a complimentary reputation audit and a clear quote within 24 hours.",
  },
  crossLinks: crossLinksFor("reputation-management"),
  docxHeadings: {
    about: "About EDDINET: ORM Company in Delhi",
    process: "Our Online Reputation Management Process",
    faqs: "Frequently Asked Questions",
  },
};
