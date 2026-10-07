// ============================================================================
//  FILE: data/services/child/web-development/website-redesign.ts
//  PAGE: /services/web-development/website-redesign-services-in-india
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================
// ── HERO FIELDS (top of the page) ─────────────────────────────────────
//   heroEyebrow    = badge chip shown ABOVE the <h1>
//   heroHeading    = the <h1> heading itself
//   heroSubheading = paragraph shown BELOW the <h1>

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/web-development";
export const child = {
  slug: "website-redesign-services-in-india",
  title: "Website Redesign",
  metaTitle: "Website Redesign Services in Delhi NCR | Eddinet",
  metaDescription: "Full redesigns that refresh brand, structure, UX and performance without losing SEO value. A new look and new results — with rankings, URLs and data intact. Eddinet delivers dependable website redesign services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Website Revamping | UI/UX Redesign | Ecommerce Redesign | Speed & SEO Optimisation",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Website Redesign Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET provides website redesign services in India for brands with outdated, slow, or low-performing websites. We combine modern UI/UX design, clean development, and SEO-safe migration to turn your old site into a fast, lead-generating asset.",
  detailedDescription: "An old website quietly costs you business. Pages load slowly, the design looks dated, and mobile users struggle to find anything. As a result, visitors leave, rankings drop, and competitors win the enquiry.\n\nThat is why our website redesign company in Delhi starts with data, not guesswork. We audit your current site, study how visitors behave, and find what blocks conversions. Then we rebuild the design and structure to fix those problems.\n\nOur team manages the project from start to finish. We deliver website revamping services in India for businesses of every size. We also provide UI UX website redesign in India for brands that need a better user journey. In addition, we handle ecommerce website redesign in Delhi for online stores that want higher sales and fewer cart drop-offs.",
  features: [
    {
      title: "Website Redesign Services",
      description: "We rebuild your website with a fresh look, faster speed, and a clear path to enquiry. We keep your best content and rankings, and improve everything else.",
    },
    {
      title: "UI UX Website Redesign",
      description: "We study how users move through your site and fix the friction points. Better navigation, clearer pages, and stronger calls to action help visitors take the next step.",
    },
    {
      title: "Mobile-Responsive Redesign",
      description: "We rebuild your site so it works smoothly on phones, tablets, and desktops. Most visitors browse on mobile, so this step matters.",
    },
    {
      title: "SEO & Performance Optimization",
      description: "We fix the technical issues that hold your site back. Faster load times, clean code, proper redirects, and optimised metadata help you rank higher and keep visitors on the page.",
    },
    {
      title: "Content & Structure Enhancement",
      description: "We reorganise your pages so people find answers quickly. Clear headings, sharper copy, and a logical site structure make your message easy to read and easy to trust.",
    },
    {
      title: "Conversion-Focused Design",
      description: "We place every button, form, and headline with a purpose. As a result, visitors move smoothly from browsing to calling, signing up, or buying.",
    },
  ],
  featuresHeading: "Our Website Redesign Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Website Redesign Company in Delhi?",
    points: [
      "Data-Driven Redesign Strategy: We base every UI/UX and architectural change on comprehensive audit findings, heatmaps, and user data rather than personal preference.",
      "SEO & Ranking Protection: We carefully map 1:1 301 redirects, preserve URL structures, and carry over metadata so your organic search rankings and traffic stay safe.",
      "Mobile-First Responsive Design: We engineer page layouts for mobile devices first, ensuring flawless touch-screen interaction before scaling up to larger desktop displays.",
      "Faster, Clean-Coded Performance: We purge legacy code bloat and optimize database queries to deliver sub-second page loads that convert visitors better.",
      "Zero Downtime Launch: We build and refine your new platform in an isolated staging environment switching live only after complete end-to-end testing.",
      "Transparent Milestone Delivery: We operate on structured Agile timelines, keeping your redesign project moving smoothly toward an on-time deployment.",
    ],
  },
  process: {
    heading: "Our Website Redesign Process",
    steps: [
      {
        num: "01",
        title: "Website Audit & Goal Setting",
        description: "We review your design, speed, SEO, and analytics. After that, we agree on goals, scope, and priorities.",
      },
      {
        num: "02",
        title: "UX Research & Sitemap Planning",
        description: "Our team studies user behaviour and competitor sites. Then we plan a cleaner structure and simpler navigation.",
      },
      {
        num: "03",
        title: "UI Design & Visual Style",
        description: "Our designers create new layouts for desktop and mobile. We refresh colours, fonts, and visuals to match your brand. You review the designs and share feedback.",
      },
      {
        num: "04",
        title: "Development & Content Migration",
        description: "Once the design is approved, our developers build the new site with clean code. We move your content, set up redirects, and connect forms and tools.",
      },
      {
        num: "05",
        title: "Testing, Launch & Support",
        description: "Before launch, we test speed, devices, links, and forms. Then we publish the site and monitor rankings and performance.",
      },
    ],
  },
  industries: {
    heading: "Website Redesign for Multi-Industry Needs",
    items: [
      {
        title: "Corporate & B2B Companies",
        description: "Professional layouts, service pages, and enquiry forms that build trust with buyers.",
      },
      {
        title: "E-Commerce & D2C Brands",
        description: "Cleaner product pages, faster checkout, and mobile-friendly stores that raise sales.",
      },
      {
        title: "Healthcare & Education",
        description: "Simple navigation, clear information, and easy appointment or admission forms.",
      },
      {
        title: "Real Estate & Manufacturing",
        description: "Project showcases, catalogues, and lead forms that turn visitors into enquiries.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are website redesign services?",
      a: "Website redesign services improve the look, structure, speed, and performance of an existing website. The goal is to give visitors a better experience and bring in more leads or sales.",
    },
    {
      q: "How much do website redesign services in India cost?",
      a: "The cost depends on the number of pages, design complexity, and features. A small business site costs less than a large corporate or ecommerce site. Share your requirements, and we will send a clear quote.",
    },
    {
      q: "How long does a website redesign company in Delhi take to finish a project?",
      a: "Most redesigns take 4 to 8 weeks. This covers audit, design, development, and testing. Larger sites may take longer, and we confirm the timeline before we start.",
    },
    {
      q: "Will a redesign affect my SEO rankings?",
      a: "Not if it is done correctly. We use 301 redirects, keep your best-performing content, and preserve metadata. As a result, your rankings stay safe or improve.",
    },
    {
      q: "What is the difference between website redesign and revamping?",
      a: "A redesign usually changes the layout, structure, and user experience in a major way. A revamp refreshes the look and fixes key issues without a full rebuild.",
    },
    {
      q: "Can you redesign my ecommerce store?",
      a: "Yes. We improve product pages, navigation, speed, and checkout. We also work on platforms such as Shopify, WooCommerce, and custom builds.",
    },
    {
      q: "Do I get full ownership of the new website?",
      a: "Yes. After final payment, you receive full ownership of the website, design files, and source code.",
    },
  ],
  cta: {
    heading: "Give Your Website a Fresh, High-Performing Look",
    sub: "Discuss Your Redesign Requirements",
    description: "Ready to turn your old website into a growth tool? Partner with EDDINET, a trusted website redesign company in Delhi. Contact our team today to schedule a free consultation and get a clear quote within 24 hours. [Get a Free Quote] | [Call Us: +91-XXXXXXXXXX]",
  },
  crossLinks: crossLinksFor("web-development"),
  docxHeadings: {
    about: "About EDDINET: Website Redesign Company in Delhi",
    process: "Our Website Redesign Process",
    faqs: "Frequently Asked Questions",
  },
};
