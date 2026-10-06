// ============================================================================
//  FILE: data/services/child/design-creative/brochure-design.ts
//  PAGE: /services/design-creative/brochure-design
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/design-creative";
export const child = {
  slug: "brochure-design",
  title: "Brochure Design",
  metaTitle: "Brochure Design Services in India | Eddinet",
  metaDescription: "EDDINET provides brochure design services in Delhi that give your business a printed and digital voice worth keeping.",
  heroHeading: "Brochure Design Services in Delhi",
  heroSubheading: "Custom Corporate & Tri-Fold Brochures | Company Profiles | Print & Digital Sales Collateral",
  detailedDescription: "EDDINET provides brochure design services in Delhi that give your business a printed and digital voice worth keeping. We shape clear layouts and tight, persuasive copy into brochures that win attention at meetings, exhibitions, and online. Every page is custom-built around your brand, so prospects see a business they can trust.\n\nAt EDDINET, we transform static company details into compelling print and digital brand assets. Unorganized information, weak visual hierarchy, and low-resolution graphics directly harm brand credibility and cost you high-value B2B opportunities. As a top-rated brochure design company in Delhi, we engineer precision-crafted brochures designed to leave a lasting professional mark.\n\nOur creative design team manages your entire collateral ecosystem end-to-end. We develop elegant corporate brochure design solutions and structured company brochure design assets including classic tri-fold brochure design layouts and multi-page business brochure design catalogs optimized for crisp physical printing and instant digital sharing.",
  features: [
    {
      title: "Custom Corporate Brochure Design",
      description: "We craft high-level corporate brochures that communicate your brand narrative, core values, leadership vision, and business achievements with sophisticated visual elegance.",
    },
    {
      title: "Company Brochure Design",
      description: "We structure comprehensive multi-page company profiles that present your services, technical capabilities, project case studies, and client proof points cleanly.",
    },
    {
      title: "Tri-Fold Brochure Design",
      description: "We engineer compact, high-converting bi-fold, Z-fold, and tri-fold brochures built with logical reading paths and bold call-to-action sections for rapid lead capture.",
    },
    {
      title: "Business & Sales Brochure Design",
      description: "We build product and service sales decks designed specifically for corporate pitches, vendor onboarding, sales presentations, and client proposals.",
    },
    {
      title: "Product Catalog & Menu Design",
      description: "We design structured, easy-to-navigate product catalogs featuring clear typography, custom iconography, and high-resolution product showcase layouts.",
    },
    {
      title: "Interactive E-Brochures & PDF Collateral",
      description: "We convert traditional print layouts into interactive digital PDF brochures complete with clickable links, embedded media tags, and compressed file sizes for swift email delivery.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Brochure Design Company in Delhi?",
    points: [
      "100% Original Custom Layouts: Every brochure is built custom from scratch to align with your corporate brand identity and messaging goals.",
      "Conversion & Clarity Focused: Engineered using proven visual hierarchy principles that guide decision-makers directly to key business takeaways.",
      "Print & Digital Dual Formatting: We deliver high-resolution CMYK press files alongside compressed, hyperlink-ready digital PDFs.",
      "End-to-End Execution: Comprehensive design support covering content structuring, layout design, icon creation, image treatment, and print preparation.",
      "Full File Ownership: You receive 100% commercial ownership rights and editable source files (InDesign, Illustrator, PDF) upon project completion.",
    ],
  },
  process: {
    heading: "Our Brochure Design Process",
    steps: [
      {
        num: "01",
        title: "Content Structuring & Brand Discovery",
        description: "We review your brand guidelines, core value props, target audience profiles, and content assets to define a logical layout hierarchy before design begins.",
      },
      {
        num: "02",
        title: "Wireframing & Grid Alignment",
        description: "Our graphic designers map out page structures, section breaks, typography scales, and visual focal points to ensure seamless readability across all pages.",
      },
      {
        num: "03",
        title: "Visual Styling & High-Fidelity Design",
        description: "We craft custom layouts in Adobe InDesign and Illustrator using high-resolution images, clean vector iconography, custom color palettes, and balanced whitespace.",
      },
      {
        num: "04",
        title: "Client Review & Content Refinement",
        description: "We present initial layout drafts, making rapid adjustments to content density, image placements, typography alignment, and callout sections based on your feedback.",
      },
      {
        num: "05",
        title: "Pre-Press Optimization & File Delivery",
        description: "We deliver 300 DPI print-ready CMYK files complete with bleed and crop marks alongside web-optimized RGB PDFs for digital distribution.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are brochure design services?",
      a: "Brochure design services cover the creation of custom print and digital marketing collateral-such as corporate company profiles, tri-fold brochures, product catalogs, and sales booklets-engineered to showcase products or services to prospective clients.",
    },
    {
      q: "What fold formats do you provide for brochure design in Delhi?",
      a: "We design all standard and custom fold configurations, including bi-fold, tri-fold, Z-fold, gate-fold, multi-page stitched booklets, and custom die-cut corporate profiles.",
    },
    {
      q: "Will I receive a print-ready file for my brochure?",
      a: "Yes. We deliver pre-press high-resolution PDF files with 300 DPI resolution, CMYK color profiles, and precise bleed/margin settings ready for commercial offset or digital printing.",
    },
    {
      q: "Can you design a digital brochure for email and website downloads?",
      a: "Yes. We create lightweight, interactive e-brochures in RGB color space featuring hyperlinked URLs, clickable table-of-contents navigation, and optimized file sizes for fast email attachments.",
    },
    {
      q: "How long does it take a brochure designing agency in Delhi to complete a project?",
      a: "Standard tri-fold brochures or bi-fold designs take 2 to 4 business days, while multi-page corporate company profiles or complex product catalogs typically take 5 to 10 business days depending on page count.",
    },
    {
      q: "Do I get editable source files for my brochure?",
      a: "Yes. Upon full project settlement, we deliver complete editable open source files (Adobe InDesign / Illustrator) along with all fonts and linked image assets.",
    },
  ],
  crossLinks: crossLinksFor("design-creative"),
  featuresHeading: "Our Brochure Design Services in Delhi",
  docxHeadings: {
    about: "About EDDINET: Brochure Designing Agency",
    process: "Our Brochure Design Process",
    faqs: "Frequently Asked Questions",
  },
};
