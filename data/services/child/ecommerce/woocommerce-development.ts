// ============================================================================
//  FILE: data/services/child/ecommerce/woocommerce-development.ts
//  PAGE: /services/ecommerce/woocommerce-development-services-in-delhi
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
  slug: "woocommerce-development-services-in-delhi",
  title: "WooCommerce Development",
  metaTitle: "WooCommerce Development Services in India | Eddinet",
  metaDescription: "As a dedicated WooCommerce Development Agency in Delhi, Eddinet combines technical expertise with a deep understanding of eCommerce strategy.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "WooCommerce Website Development | Multi-Vendor Marketplace | Payment & Shipping Integration",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "WooCommerce Development Services in Delhi",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "Eddinet is a trusted WooCommerce Development Company in Delhi, helping businesses build powerful, scalable, and fully customized online stores on WordPress. Whether you're starting fresh or upgrading an existing store, our team delivers WooCommerce solutions built around your goals, your customers, and your growth plans.",
  detailedDescription: "As a dedicated WooCommerce Development Agency in Delhi, Eddinet combines technical expertise with a deep understanding of eCommerce strategy. WooCommerce's flexibility and open-source foundation make it one of the most powerful platforms for building an online store — and our team knows how to unlock its full potential for your business.\n\nAt Eddinet, every project starts with your specific needs, not a generic template. From store architecture to plugin selection and custom functionality, we focus on building a WooCommerce store that reflects your brand and supports long-term growth. With a strong focus on Custom WooCommerce Development in Delhi, we make sure every solution is aligned with how you actually run your business.",
  features: [
    {
      title: "WooCommerce Website Development",
      description: "From setting up WordPress to configuring your product catalog, we handle every layer of building your online store, giving you a fully functional WooCommerce website ready to sell from day one.",
    },
    {
      title: "Multi-Vendor Marketplace",
      description: "Looking to run a marketplace with multiple sellers? We build WooCommerce-powered multi-vendor platforms with vendor dashboards, commission management, and order routing built in.",
    },
    {
      title: "Payment & Shipping Integration",
      description: "We configure and customize payment gateways and shipping methods suited to your market  including regional gateways, COD, and multi-carrier shipping rules so checkout works exactly the way your business needs it to.",
    },
    {
      title: "Custom Plugin Development",
      description: "When off-the-shelf plugins fall short, our developers build custom WooCommerce plugins and extensions from scratch, tailored to your unique pricing models, product types, or business logic.",
    },
    {
      title: "Speed & Performance Optimization",
      description: "A slow store loses customers. We audit and optimize your database, caching, images, and hosting configuration to keep your WooCommerce store fast under real-world traffic.",
    },
    {
      title: "WooCommerce Migration",
      description: "Switching from Shopify, Magento, or another platform? We migrate your products, orders, and customer records into WooCommerce with careful data mapping and minimal downtime.",
    },
    {
      title: "Talk to Our Experts",
      description: "Not sure where to start? Book a free consultation with our team and we'll help you map out the right approach for your WooCommerce project.",
    },
  ],
  featuresHeading: "WHAT WE OFFER",
  benefitsHeading: "Why Choose WooCommerce for Your Online Store?",
  benefitsDescription: "WooCommerce powers millions of online stores worldwide - and for good reason.",
  benefits: [
    {
      title: "Open-Source Flexibility",
      description: "Built on WordPress, WooCommerce gives you complete control over your store's design, functionality, and data, without platform lock-in.",
    },
    {
      title: "Cost-Effective Scaling",
      description: "WooCommerce lets you start small and scale up, adding plugins and features as your business grows, without unnecessary upfront costs.",
    },
    {
      title: "SEO-Friendly by Nature",
      description: "Powered by WordPress, WooCommerce stores benefit from strong SEO fundamentals, helping your products get discovered through organic search.",
    },
    {
      title: "Extensive Plugin Ecosystem",
      description: "With thousands of plugins and extensions available, WooCommerce can be customized to support virtually any business model or workflow.",
    },
    {
      title: "Full Ownership & Control",
      description: "Unlike hosted platforms, WooCommerce gives you full ownership of your store's code, data, and hosting environment.",
    },
    {
      title: "Seamless WordPress Integration",
      description: "If you already use WordPress for your website or blog, WooCommerce integrates directly, making content and commerce management simple.",
    },
  ],
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose WooCommerce for Your Online Store?",
    description: "WooCommerce powers millions of online stores worldwide — and for good reason.",
    points: [
      "Open-Source Flexibility: Built on WordPress, WooCommerce gives you complete control over your store's design, functionality, and data, without platform lock-in.",
      "Cost-Effective Scaling: WooCommerce lets you start small and scale up, adding plugins and features as your business grows, without unnecessary upfront costs.",
      "SEO-Friendly by Nature: Powered by WordPress, WooCommerce stores benefit from strong SEO fundamentals, helping your products get discovered through organic search.",
      "Extensive Plugin Ecosystem: With thousands of plugins and extensions available, WooCommerce can be customized to support virtually any business model or workflow.",
      "Full Ownership & Control: Unlike hosted platforms, WooCommerce gives you full ownership of your store's code, data, and hosting environment.",
      "Seamless WordPress Integration: If you already use WordPress for your website or blog, WooCommerce integrates directly, making content and commerce management simple.",
      "Our Satisfied Clients: We're proud to have helped businesses across industries build and grow successful WooCommerce stores. Our clients trust us not just for our technical expertise, but for our commitment to delivering measurable results.",
      "Why Choose Eddinet for Your WooCommerce Store: ",
      "Years of Experience: Our team brings years of hands-on experience building and scaling WooCommerce stores across diverse industries and business sizes.",
      "100% Customized Development: We don't believe in one-size-fits-all. Every WooCommerce store we build is tailored to your specific business needs, goals, and brand identity.",
      "SEO-Friendly Development: Our development practices are built with SEO best practices in mind from day one, helping your store gain visibility right from launch.",
      "2X Fast Delivery of Projects: Our streamlined process and experienced team allow us to deliver projects twice as fast, without cutting corners on quality.",
      "100% Client Satisfaction: We prioritize clear communication and quality delivery, resulting in consistently high satisfaction across our client base.",
      "Pay Only What's Agreed: No hidden charges, no surprise costs. You pay exactly what was agreed upon at the start of the project — full transparency, always.",
    ],
  },
  process: {
    heading: "HOW WE DELIVER YOUR WOOCOMMERCE PROJECT",
    description: "As an experienced WooCommerce Development Company in Delhi, we follow a practical, milestone-driven workflow rather than a rigid template — adapted to the scope of your project at every stage.",
    steps: [
      {
        num: "01",
        title: "Requirement Mapping",
        description: "Before writing a single line of code, we document your product catalog, business rules, expected traffic, and must-have integrations so nothing gets missed later in the build.",
      },
      {
        num: "02",
        title: "WordPress & Hosting Setup",
        description: "We provision a WooCommerce-ready hosting environment, install WordPress, and configure the core settings — security, backups, and caching — that your store will run on.",
      },
      {
        num: "03",
        title: "Theme Build & Storefront Design",
        description: "We build or customize a WooCommerce theme around your product types and brand, focusing on clear navigation, fast-loading pages, and a checkout flow that doesn't lose customers.",
      },
      {
        num: "04",
        title: "Plugin Configuration & Custom Coding",
        description: "We install and configure the plugins your store genuinely needs, and write custom code where standard plugins can't do what your business requires.",
      },
      {
        num: "05",
        title: "Payments, Shipping & Tax Setup",
        description: "We configure your payment gateways, shipping zones, and tax rules to match how you actually sell — by region, product type, or customer group.",
      },
      {
        num: "06",
        title: "Cross-Device Quality Checks",
        description: "We test checkout, cart behavior, plugin compatibility, and page speed across browsers and devices, catching issues before your customers ever see them.",
      },
      {
        num: "07",
        title: "Go-Live & Handover",
        description: "We deploy your store to production, verify everything works under real conditions, and walk you through how to manage it going forward.",
      },
      {
        num: "08",
        title: "Maintenance, Updates & Security Monitoring",
        description: "After launch, we keep your WordPress core, theme, and plugins updated, monitor for security issues, and stay available for fixes and improvements as your store grows. Let's Build Your WooCommerce Store! Ready to turn your idea into a thriving online business? Partner with our WooCommerce experts in Delhi and get a store that's built to perform, scale, and convert. Get in touch today for a free consultation.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "Why should I choose WooCommerce for my online store?",
      a: "WooCommerce offers unmatched flexibility, full ownership of your data, strong SEO fundamentals, and a vast plugin ecosystem  making it ideal for businesses that want control over how their store grows.",
    },
    {
      q: "How long does it take to build a WooCommerce store?",
      a: "Most standard WooCommerce stores take 2 to 5 weeks to build, while highly customized projects with advanced plugin development may take longer depending on complexity.",
    },
    {
      q: "Can you migrate my existing store to WooCommerce?",
      a: "Yes. Eddinet handles complete WooCommerce migration services, transferring your products, customer data, and order history from platforms like Shopify or Magento with minimal disruption.",
    },
    {
      q: "Do you build custom WooCommerce plugins?",
      a: "Absolutely. If existing plugins don't cover your specific business requirements, our developers build custom WooCommerce plugins tailored to your exact workflow.",
    },
    {
      q: "Do you provide support after the store is launched?",
      a: "Yes. We offer ongoing support and maintenance after launch, including plugin updates, security patches, and performance monitoring.",
    },
    {
      q: "How much does WooCommerce development cost in Delhi?",
      a: "Costs vary based on design complexity, required plugins, and custom features. We provide transparent, upfront pricing after understanding your project requirements.",
    },
  ],
  crossLinks: crossLinksFor("ecommerce"),
  docxHeadings: {
    about: "Eddinet – A Leading WooCommerce Development Agency in Delhi",
    process: "HOW WE DELIVER YOUR WOOCOMMERCE PROJECT",
    faqs: "Frequently Asked Questions",
  },
};
