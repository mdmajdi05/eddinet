// ============================================================================
//  FILE: data/services/child/web-development/landing-page-design.ts
//  PAGE: /services/web-development/landing-page-design
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { features, benefits, whyChooseUs, process, faqs } from "../_category/web-development";
export const child = {
  slug: "landing-page-design",
  title: "Landing Page Design",
  metaTitle: "Landing Page Design Services in Delhi NCR | Eddinet",
  metaDescription: "Focused, high-converting landing pages designed for specific campaigns and offers. One page, one goal — engineered to turn paid and organic traffic into conversions. Eddinet delivers dependable landing page design services in Delhi NCR for India and global clients. Get a free proposal today.",
  heroHeading: "Landing Page Design Services in Delhi NCR",
  heroSubheading: "Focused, high-converting landing pages designed for specific campaigns and offers. One page, one goal — engineered to turn paid and organic traffic into conversions.",
  detailedDescription: "Focused, high-converting landing pages designed for specific campaigns and offers. One page, one goal — engineered to turn paid and organic traffic into conversions.\n\nA website is judged in seconds — if it's slow, it loses trust before it loses the ranking. At Eddinet, we build websites that are fast, secure and engineered to rank. Development isn't an afterthought bolted onto marketing; it's built around Core Web Vitals, semantic structure, mobile-first UX and maintainability, so your SEO, content and campaigns never have to fight a site that wasn't built for performance.\n\nEvery project starts with discovery — what the site must sell, who it serves and where it will compete. We design the architecture for conversion and search, build in sprints you can review along the way, and test across real devices and speeds before anything goes live. The result is a site your team can actually run: a content management workflow that doesn't require a developer for every small change, code that isn't a mystery to maintain, and hosting and monitoring that keep it fast after launch.\n\nWhether you need a corporate website, a high-converting business website, a WordPress site, a custom Next.js or React build, or a full website rebuild that preserves your rankings, we deliver a digital foundation that converts visitors, ranks in search and scales with your business — not a brochure that goes stale on day one.\n\nFrom scoping and strategy through delivery, reporting and ongoing support, the entire engagement is run as one connected system — with clear milestones, a named team and a focus on outcomes, not deliverables alone.",
  features,
  benefits,
  metrics: sharedMetrics,
  whyChooseUs,
  process,
  testimonials: sharedTestimonials,
  faqs,
  crossLinks: crossLinksFor("web-development"),
};
