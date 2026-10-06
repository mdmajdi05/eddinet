// ============================================================================
//  FILE: data/services/child/web-development/website-redesign.ts
//  PAGE: /services/web-development/website-redesign
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { features, benefits, whyChooseUs, process, faqs } from "../_category/web-development";
export const child = {
  slug: "website-redesign",
  title: "Website Redesign",
  metaTitle: "Website Redesign Services in Delhi NCR | Eddinet",
  metaDescription: "Full redesigns that refresh brand, structure, UX and performance without losing SEO value. A new look and new results — with rankings, URLs and data intact. Eddinet delivers dependable website redesign services in Delhi NCR for India and global clients. Get a free proposal today.",
  heroHeading: "Website Redesign Services in Delhi NCR",
  heroSubheading: "Full redesigns that refresh brand, structure, UX and performance without losing SEO value. A new look and new results — with rankings, URLs and data intact.",
  detailedDescription: "Full redesigns that refresh brand, structure, UX and performance without losing SEO value. A new look and new results — with rankings, URLs and data intact.\n\nA website is judged in seconds — if it's slow, it loses trust before it loses the ranking. At Eddinet, we build websites that are fast, secure and engineered to rank. Development isn't an afterthought bolted onto marketing; it's built around Core Web Vitals, semantic structure, mobile-first UX and maintainability, so your SEO, content and campaigns never have to fight a site that wasn't built for performance.\n\nEvery project starts with discovery — what the site must sell, who it serves and where it will compete. We design the architecture for conversion and search, build in sprints you can review along the way, and test across real devices and speeds before anything goes live. The result is a site your team can actually run: a content management workflow that doesn't require a developer for every small change, code that isn't a mystery to maintain, and hosting and monitoring that keep it fast after launch.\n\nWhether you need a corporate website, a high-converting business website, a WordPress site, a custom Next.js or React build, or a full website rebuild that preserves your rankings, we deliver a digital foundation that converts visitors, ranks in search and scales with your business — not a brochure that goes stale on day one.\n\nFrom scoping and strategy through delivery, reporting and ongoing support, the entire engagement is run as one connected system — with clear milestones, a named team and a focus on outcomes, not deliverables alone.",
  features,
  benefits,
  metrics: sharedMetrics,
  whyChooseUs,
  process,
  testimonials: sharedTestimonials,
  faqs,
  crossLinks: crossLinksFor("web-development"),
};
