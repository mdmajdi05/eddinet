// ============================================================================
//  FILE: data/services/child/ecommerce/payment-gateway-integration.ts
//  PAGE: /services/ecommerce/payment-gateway-integration-services-in-india
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================
// ── HERO FIELDS (top of the page) ─────────────────────────────────────
//   heroEyebrow    = badge chip shown ABOVE the <h1>
//   heroHeading    = the <h1> heading itself
//   heroSubheading = paragraph shown BELOW the <h1>

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
export const child = {
  slug: "payment-gateway-integration-services-in-india",
  title: "Payment Gateway Integration",
  metaTitle: "Payment Gateway Integration Services in India | Eddinet",
  metaDescription: "Choosing and integrating the right payment gateway isn't just a technical task; it directly affects your conversion rate, customer trust, and compliance",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Online Payment Gateway Integration | Multi-Gateway Setup & Failover | Recurring Billing & Subscription Payments",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Payment Gateway Integration Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "Eddinet helps businesses accept payments online with speed, security, and reliability. As a trusted name in payment gateway integration services in India, we connect your website or app to the right payment gateways, so transactions go through smoothly and your customers never abandon checkout over a broken payment flow.",
  detailedDescription: "Choosing and integrating the right payment gateway isn't just a technical task; it directly affects your conversion rate, customer trust, and compliance requirements. Eddinet specializes in eCommerce Payment Gateway Integration in India, working across platforms and industries to make sure your checkout is fast, secure, and built to handle real transaction volume.\n\nWe don't push a one-size-fits-all gateway. Instead, we assess your business model, target customers, and transaction patterns to recommend and implement the payment solutions that actually fit — whether that's a single gateway or a multi-gateway setup for redundancy and better approval rates.",
  features: [
    {
      title: "Online Payment Gateway Integration in India",
      description: "We connect your website, app, or platform to leading payment gateways, enabling customers to pay via cards, UPI, net banking, and wallets through a secure, seamless checkout.",
    },
    {
      title: "Multi-Gateway Setup & Failover",
      description: "To avoid lost sales from a single point of failure, we configure multiple payment gateways with automatic failover, so transactions route to a backup gateway if the primary one fails.",
    },
    {
      title: "Recurring Billing & Subscription Payments",
      description: "For subscription-based businesses, we set up recurring billing, automated retries for failed payments, and subscription management tied directly to your payment gateway.",
    },
    {
      title: "Custom Checkout Experience",
      description: "We build checkout flows tailored to your platform — whether that's a custom web app, a mobile app, or an existing eCommerce store — keeping the payment step fast and frustration-free.",
    },
    {
      title: "PCI-DSS Compliant Payment Handling",
      description: "We implement payment integrations following PCI-DSS guidelines, minimizing your compliance burden while keeping cardholder data secure.",
    },
    {
      title: "Payment Reconciliation & Reporting",
      description: "We set up automated reconciliation between your orders and gateway settlements, along with reporting dashboards that make tracking payments and disputes straightforward.",
    },
    {
      title: "Talk to Our Payment Integration Experts",
      description: "Not sure which gateway fits your business? Get a free consultation and we'll help you choose and plan the right payment setup for your platform.",
    },
  ],
  featuresHeading: "PAYMENT SOLUTIONS WE BUILD",
  benefitsHeading: "Why a Well-Integrated Payment Gateway Matters",
  benefitsDescription: "The payment step is where sales are won or lost. A poorly integrated gateway costs you customers and revenue.",
  benefits: [
    {
      title: "Higher Checkout Conversion",
      description: "A smooth, fast payment flow reduces cart abandonment and keeps customers from dropping off at the final step.",
    },
    {
      title: "Broader Payment Method Support",
      description: "Supporting cards, UPI, net banking, and wallets means fewer customers are turned away for lack of a payment option they trust.",
    },
    {
      title: "Stronger Transaction Security",
      description: "Proper integration protects both your business and your customers from fraud, data breaches, and compliance penalties.",
    },
    {
      title: "Fewer Failed Transactions",
      description: "Multi-gateway setups and proper error handling reduce failed payments that would otherwise cost you sales.",
    },
    {
      title: "Better Financial Visibility",
      description: "Automated reconciliation and reporting give you a clear, real-time picture of revenue, refunds, and settlement timelines.",
    },
    {
      title: "Scalable Payment Infrastructure",
      description: "A well-built integration handles growing transaction volume without breaking down during high-traffic periods like sales or promotions.",
    },
    {
      title: "Our Satisfied Clients",
      description: "We've helped businesses across industries — from eCommerce to SaaS to on-demand services — integrate payment gateways that hold up under real transaction volume. Our clients trust us for both the technical execution and the ongoing reliability of their payment systems.",
    },
  ],
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Payment Gateway Integration",
    points: [
      "Years of Experience: Our team has hands-on experience integrating a wide range of payment gateways across platforms, industries, and business models.",
      "Platform-Agnostic Expertise: Whether you're on Shopify, WooCommerce, a custom web app, or a mobile app, we integrate payment gateways to fit your existing tech stack.",
      "Security-First Approach: We prioritize secure, compliant payment handling in every integration, reducing risk for both your business and your customers.",
      "Fast, Reliable Delivery: Our experienced team delivers payment integrations efficiently, without compromising on testing or security.",
      "100% Client Satisfaction: We prioritize clear communication and thorough testing, resulting in consistently high satisfaction across our client base.",
      "Transparent, Agreed Pricing: No hidden charges. You pay exactly what was agreed upon at the start of the project — full transparency, always.",
    ],
  },
  process: {
    heading: "HOW WE INTEGRATE YOUR PAYMENT GATEWAY",
    description: "Rather than following a rigid checklist, we adapt our approach based on your platform, transaction volume, and compliance needs — but every project moves through these core stages.",
    steps: [
      {
        num: "01",
        title: "Business & Compliance Review",
        description: "We start by understanding your transaction types, expected volume, target markets, and any regulatory or compliance requirements that affect gateway selection.",
      },
      {
        num: "02",
        title: "Gateway Selection & Planning",
        description: "Based on your needs, we shortlist and recommend the payment gateways best suited to your business — weighing transaction fees, supported payment methods, settlement speed, and reliability.",
      },
      {
        num: "03",
        title: "API Integration & Configuration",
        description: "Our developers integrate the chosen gateway's APIs into your platform, configuring payment methods, currencies, and callback handling to match your checkout flow.",
      },
      {
        num: "04",
        title: "Security & Compliance Implementation",
        description: "We implement encryption, tokenization, and PCI-DSS-aligned practices to keep transaction data secure and reduce your compliance overhead.",
      },
      {
        num: "05",
        title: "Sandbox Testing",
        description: "Before going live, we run extensive tests in the gateway's sandbox environment, covering successful payments, failures, refunds, and edge cases like timeouts and duplicate transactions.",
      },
      {
        num: "06",
        title: "Go-Live & Monitoring",
        description: "Once testing is complete, we switch to live credentials and closely monitor the first transactions to catch any real-world issues early.",
      },
      {
        num: "07",
        title: "Post-Integration Support",
        description: "After launch, we remain available for troubleshooting, gateway updates, and adding new payment methods as your business evolves.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "Which payment gateways can you integrate?",
      a: "We work with a wide range of payment gateways supporting cards, UPI, net banking, and wallets, and can recommend the best fit based on your business and target market.",
    },
    {
      q: "How long does payment gateway integration take?",
      a: "A standard single-gateway integration typically takes 1 to 2 weeks, while multi-gateway setups or custom checkout builds may take longer depending on complexity.",
    },
    {
      q: "Is my customers' payment data secure?",
      a: "Yes. We implement PCI-DSS-aligned practices, encryption, and tokenization so sensitive payment data is handled securely throughout the transaction process.",
    },
    {
      q: "Can you integrate a payment gateway into my existing website or app?",
      a: "Yes. We work with existing platforms, custom-built websites, and mobile apps, integrating payment gateways without disrupting your current setup.",
    },
    {
      q: "What happens if a payment gateway goes down?",
      a: "We can configure multi-gateway failover, automatically routing transactions to a backup gateway so your checkout keeps working even if one gateway has downtime.",
    },
    {
      q: "Do you support recurring or subscription payments?",
      a: "Yes. We set up recurring billing, automated payment retries, and subscription management integrated directly with your payment gateway.",
    },
    {
      q: "Do you provide support after the integration goes live?",
      a: "Yes. We offer post-integration support for troubleshooting, gateway updates, and adding new payment methods as your business needs evolve.",
    },
    {
      q: "How much does payment gateway integration cost?",
      a: "Costs depend on the number of gateways, platform complexity, and custom features required. We provide transparent, upfront pricing after reviewing your requirements.",
    },
  ],
  crossLinks: crossLinksFor("ecommerce"),
  docxHeadings: {
    about: "Eddinet – Reliable Payment Gateway Integration in India",
    process: "HOW WE INTEGRATE YOUR PAYMENT GATEWAY",
    faqs: "Frequently Asked Questions",
  },
};
