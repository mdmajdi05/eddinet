// ============================================================================
//  FILE: data/services/child/reputation-management/brand-reputation-management.ts
//  PAGE: /services/reputation-management/brand-reputation-management-services-in-india
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
  slug: "brand-reputation-management-services-in-india",
  title: "Brand Reputation Management",
  metaTitle: "Brand Reputation Management Services in Delhi NCR | Eddinet",
  metaDescription: "Managing brand sentiment, mentions and media in one connected view. Your brand's story told on your terms. Eddinet delivers dependable brand reputation management services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Brand Perception | Image Management | Crisis Communication",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Brand Reputation Management Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET offers brand reputation management services in India to help businesses shape how customers, investors, and the public perceive them. Our strategists blend consistent messaging, proactive communication, and calm crisis leadership, so your brand earns lasting trust.",
  detailedDescription: "A brand is not what you say it is. It is what people believe about you. Every post, press mention, and customer interaction adds to that belief. When the story drifts, trust erodes quietly.\n\nAt EDDINET, a corporate brand reputation management company in Delhi, we help you steer that story. We study how your audience sees you, close the gap between perception and intention, and keep your voice consistent everywhere. Over time, credibility becomes your strongest advantage.\n\nOur brand image management services in India refine how your business looks and sounds across every channel. Our brand crisis management services in India prepare you for the moments that test your reputation. In addition, our brand trust and perception management in Delhi NCR gives corporates, startups, and institutions a steady, strategic partner.",
  features: [
    {
      title: "Perception Audit",
      description: "Our brand reputation management services in India begin by measuring how audiences truly see you. Surveys, sentiment, and media coverage reveal the gaps.",
    },
    {
      title: "Brand Image Management",
      description: "Our brand image management services in India align your tone, visuals, and messaging. Your brand feels coherent on every platform.",
    },
    {
      title: "Crisis Management",
      description: "Our brand crisis management services in India deliver readiness plans and rapid response. Measured statements protect trust when a storm breaks.",
    },
    {
      title: "Trust & Perception Building",
      description: "Our brand trust and perception management in Delhi NCR strengthens credibility through proof, transparency, and consistent behaviour. Confidence grows with every touchpoint.",
    },
    {
      title: "PR & Media Relations",
      description: "We craft press notes, thought-leadership pieces, and media outreach. Credible coverage reinforces your authority.",
    },
    {
      title: "Leadership & Employer Branding",
      description: "We position founders and leaders as trusted voices and polish your employer image. Talent, partners, and investors take notice.",
    },
  ],
  featuresHeading: "Our Brand Reputation Management Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Corporate Brand Reputation Management Company in Delhi?",
    points: [
      "Strategy Before Noise: We start with research, not guesswork. Every campaign follows a defined plan.",
      "Calm Under Pressure: Our crisis protocols keep responses measured, timely, and consistent. Panic never writes your statement.",
      "Honest Communication: We never use fake reviews, paid-for praise, or misleading claims. Authenticity protects your credibility.",
      "Integrated Expertise: PR, content, SEO, and reputation specialists work as one team. You avoid juggling multiple agencies.",
      "Local Market Insight: Our Delhi NCR experience helps us understand Indian audiences, media, and cultural nuance.",
      "Clear Measurement: Reports show sentiment, coverage, and progress in plain language. You see what changed and why.",
    ],
  },
  process: {
    heading: "Our Brand Reputation Management Process",
    steps: [
      {
        num: "01",
        title: "Brand Perception Audit",
        description: "We analyse customer sentiment, media coverage, social conversations, and competitor positioning. This reveals where your brand stands and where it is misunderstood.",
      },
      {
        num: "02",
        title: "Narrative & Messaging Framework",
        description: "We define your core story, values, and tone of voice. Every team member then speaks with one clear, consistent identity.",
      },
      {
        num: "03",
        title: "Reputation Roadmap",
        description: "We plan the content, PR activity, and engagement needed to close perception gaps. Each action ties back to a measurable goal.",
      },
      {
        num: "04",
        title: "Crisis Readiness Planning",
        description: "We map likely risks, assign roles, and prepare approved response templates. When trouble arrives, your team already knows what to do.",
      },
      {
        num: "05",
        title: "Execution & Stakeholder Engagement",
        description: "We roll out campaigns, media outreach, and community communication. Customers, employees, and investors hear a unified message.",
      },
      {
        num: "06",
        title: "Tracking & Monthly Review",
        description: "We track sentiment, coverage, and trust indicators over time. You receive a clear report with practical next steps.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are brand reputation management services?",
      a: "They shape and protect how the public perceives a brand. They cover messaging, PR, trust building, and crisis response.",
    },
    {
      q: "How much do brand reputation management services in India cost?",
      a: "Pricing depends on brand size, scope, and PR needs. Share your requirements, and we will send a clear quote.",
    },
    {
      q: "What does a corporate brand reputation management company in Delhi do?",
      a: "It audits your brand perception, aligns your messaging, and manages media and stakeholder communication. It also prepares you for crises.",
    },
    {
      q: "What is brand crisis management?",
      a: "It is the planned response to events that threaten your brand's credibility. It includes preparation, rapid communication, and recovery.",
    },
    {
      q: "How is brand reputation management different from ORM?",
      a: "Brand reputation management focuses on perception, messaging, and PR. ORM focuses on search results and negative online content.",
    },
    {
      q: "How long does it take to improve brand perception?",
      a: "Early shifts often appear within weeks. Lasting trust usually takes several months of consistent effort.",
    },
    {
      q: "Can small businesses and startups benefit?",
      a: "Yes. We offer scalable plans that suit local brands, startups, and large organisations alike.",
    },
  ],
  cta: {
    heading: "Build a Brand People Believe In",
    sub: "Discuss Your Brand Reputation Needs",
    description: "Ready to strengthen trust in your brand? Partner with EDDINET, a trusted corporate brand reputation management company in Delhi. Contact our team today for a complimentary brand audit and a clear quote within 24 hours.",
  },
  crossLinks: crossLinksFor("reputation-management"),
  docxHeadings: {
    about: "About EDDINET: Corporate Brand Reputation Management Company in Delhi",
    process: "Our Brand Reputation Management Process",
    faqs: "Frequently Asked Questions",
  },
};
