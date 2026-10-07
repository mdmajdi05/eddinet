// ============================================================================
//  FILE: data/services/child/design-creative/catalogue-design.ts
//  PAGE: /services/design-creative/catalogue-design-services-in-delhi
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
  slug: "catalogue-design-services-in-delhi",
  title: "Catalogue Design",
  metaTitle: "Catalogue Design Services in India | Eddinet",
  metaDescription: "EDDINET delivers creative catalogue design services in Delhi that turn product information into clear, engaging, and sales-focused visuals.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Custom Product Catalogues | Digital & E-Catalogues | Print-Ready B2B Sales Collateral",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Catalogue Design Services in Delhi",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET delivers creative catalogue design services in Delhi that turn product information into clear, engaging, and sales-focused visuals. We combine smart layouts, structured product presentation, and strong visual hierarchy to make every catalogue easy to explore and built to convert.",
  detailedDescription: "At EDDINET, we turn dense product data into visually compelling sales channels. Poorly structured SKU lists, inconsistent image formatting, and weak typography slow down procurement decisions and hurt B2B sales conversions. Therefore, our product catalogue design agency crafts precision-engineered print and digital showcase assets built for clarity and impact.\n\nOur design team manages your entire catalog architecture end-to-end. We build structured company catalogue design layouts, offer high-resolution catalog design services, and deliver interactive digital catalogue design and e-catalogue design assets optimized for instant global distribution, mobile viewing, and web-based buying.",
  features: [
    {
      title: "Custom Product Catalogue Design",
      description: "We design bespoke product catalogues featuring structured grid layouts, custom category indexes, clear SKU coding, and high-impact visual showcases tailored to your brand identity.",
    },
    {
      title: "Company Catalogue Design",
      description: "We engineer comprehensive corporate product portfolios that combine your company story, technical specifications, certifications, and complete product lines into an authoritative sales asset.",
    },
    {
      title: "Digital Catalogue Design & E-Catalogues",
      description: "We transform static product pages into interactive e-catalogue design files complete with clickable navigation links, embedded video tags, searchability, and compressed file sizes for instant email sharing.",
    },
    {
      title: "B2B & Wholesale Order Catalogues",
      description: "We structure functional, data-dense wholesale catalogues featuring clear pricing matrices, variant tables, bulk ordering guidelines, and technical specification sheets for fast B2B buyer decision-making.",
    },
    {
      title: "Print-Ready Pre-Press Catalogue Formatting",
      description: "We prepare flawless, high-resolution CMYK print files with precise bleed margins, color profiles, and binding setups (saddle-stitch, perfect bound) for commercial printing press production.",
    },
    {
      title: "E-Commerce & Interactive Shoppable Catalogues",
      description: "We build interactive web-based e-catalogues featuring clickable buy-now links that connect directly to your online store or WhatsApp business ordering funnel.",
    },
  ],
  featuresHeading: "Our Catalogue Design Services in Delhi",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Product Catalogue Design Agency?",
    points: [
      "100% Custom Layout Architecture: Zero pre-made generic templates; every page spread is custom-engineered around your specific product shapes, data fields, and brand aesthetic.",
      "Conversion & SKU Clarity Focused: Built using visual hierarchy principles that guide buyers effortlessly from category browsing to order placement.",
      "Dual Print & Digital Mastery: We deliver both high-end print-ready files and fast-loading interactive e-catalogues optimized for mobile and desktop screens.",
      "End-to-End Asset Handling: Complete management covering data structuring, image retouching, vector icon creation, layout execution, and pre-press prep.",
      "Full File Ownership: You retain 100% commercial ownership and editable source files (Adobe InDesign, Illustrator, vector packages) upon project completion.",
    ],
  },
  process: {
    heading: "Our Catalogue Design Process",
    steps: [
      {
        num: "01",
        title: "Product Data & Category Structuring",
        description: "We analyze your product inventory, SKU variants, technical attributes, and media assets to build a logical navigation structure and visual taxonomy before design begins.",
      },
      {
        num: "02",
        title: "Grid System & Layout Wireframing",
        description: "Our designers establish custom page grids, typography rules, color-coded section dividers, and visual balance points to ensure dense product information remains effortlessly readable.",
      },
      {
        num: "03",
        title: "Visual Styling & High-Fidelity Execution",
        description: "We execute page layouts in Adobe InDesign, using custom vector icons, professional image color-correction, and clean spatial formatting to highlight key product features.",
      },
      {
        num: "04",
        title: "Client Review & SKU Data Audit",
        description: "We share draft spreads with your team, making rapid adjustments to pricing tables, product details, image placements, and callout elements to ensure 100% accuracy.",
      },
      {
        num: "05",
        title: "Dual-Format Output & Final Delivery",
        description: "We deliver 300 DPI press-ready CMYK PDFs alongside lightweight, hyperlinked RGB digital files and complete editable open-source files.",
      },
    ],
  },
  industries: {
    heading: "Catalogue Solutions for Multi-Industry Inventories",
    items: [
      {
        title: "Industrial, Manufacturing & Spare Parts",
        description: "Data-dense technical catalogues, part schematic diagrams, cross-reference tables, and heavy-equipment specification guides.",
      },
      {
        title: "Fashion, Apparel & Lifestyle",
        description: "Sleek lookbooks, seasonal collection catalogues, fabric swatch showcases, and lifestyle product look-sheets.",
      },
      {
        title: "Home Decor, Furniture & Architecture",
        description: "High-resolution interior showcases, material specification sheets, modular furniture catalogs, and finish guides.",
      },
      {
        title: "FMCG, Cosmetics & Retail",
        description: "Product lineup brochures, promotional trade catalogues, packaging showcases, and distributor order books.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are catalogue design services?",
      a: "Catalogue design services involve the creation of structured, visually rich print and digital booklets (such as product catalogues, lookbooks, e-catalogues, and B2B sales books) designed to showcase product lines and drive purchase orders.",
    },
    {
      q: "What is the difference between a print catalogue and a digital e-catalogue design?",
      a: "A print catalogue is formatted in high-resolution CMYK with bleed marks for commercial printing. A digital e-catalogue design is built in RGB with hyperlinked table-of-contents navigation, clickable external links, and compressed file sizes for fast email sharing and web viewing.",
    },
    {
      q: "Do you handle catalog design services for US and international clients?",
      a: "Yes. Our catalog design services accommodate both Indian and international sizing standards (A4, Letter format, square catalogs) and follow global B2B inventory formatting practices.",
    },
    {
      q: "How many products can you fit in a product catalogue design?",
      a: "We can structure catalogues for inventories ranging from a concise 8-page product highlight showcase to complex 200+ page industrial component catalogues with thousands of individual SKUs.",
    },
    {
      q: "Will I receive editable source files for my company catalogue design?",
      a: "Yes. Upon project settlement, we deliver complete editable open source files (Adobe InDesign) along with all packaged fonts, vector icons, and linked high-resolution images.",
    },
    {
      q: "How long does a catalogue designing company in Delhi take to deliver a project?",
      a: "Standard 12-to-24 page product catalogues are typically completed within 5 to 8 business days, while multi-hundred-page technical catalogues are scheduled across structured sprint milestones.",
    },
  ],
  cta: {
    heading: "Showcase Your Products With Impact",
    sub: "Discuss Your Catalogue Design Requirements",
    description: "Ready to turn your product line into a high-converting sales engine? Partner with EDDINET for custom, high-precision catalogue design services in Delhi. Contact our creative design team today to schedule your consultation!",
  },
  crossLinks: crossLinksFor("design-creative"),
  docxHeadings: {
    about: "About EDDINET: Product Catalogue Design Experts",
    process: "Our Catalogue Design Process",
    faqs: "Frequently Asked Questions About Catalogue Design Services",
  },
};
