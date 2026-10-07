// ============================================================================
//  FILE: data/services/child/content/content-refresh.ts
//  PAGE: /services/content/content-refresh-services-in-delhi-ncr
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { features, benefits, whyChooseUs, process, faqs } from "../_category/content";
export const child = {
  slug: "content-refresh-services-in-delhi-ncr",
  title: "Content Refresh",
  metaTitle: "Content Refresh Services in Delhi NCR | Eddinet",
  metaDescription: "Updating and strengthening existing content to extend its life and rankings. Old pages revived instead of abandoned. Eddinet delivers dependable content refresh services in Delhi NCR for India and global clients. Get a free proposal today.",
  heroHeading: "Content Refresh Services in Delhi NCR",
  heroSubheading: "Updating and strengthening existing content to extend its life and rankings. Old pages revived instead of abandoned.",
  detailedDescription: "Updating and strengthening existing content to extend its life and rankings. Old pages revived instead of abandoned.\n\nAnyone can write words; the hard part is writing words that work. At Eddinet, we create content with a job to do — educate, build authority and convert at every stage of the funnel. Every piece is planned around the audience and the outcome, produced to a clear editorial calendar, and refined against how it performs. Content that isn't earning attention, rankings or enquiries is reworked or retired, not left to quietly waste your budget.\n\nContent strategy comes first, always. We map what to create, for whom and what it must achieve — then research, write and refine every piece with search intent and conversion in mind. A blog post earns organic visibility and authority; a landing page turns ads and organic visitors into enquiries; an email nurtures a lead toward a decision; a social asset feeds the whole demand system. The same discipline applies to refresh work: many businesses already sit on strong pages that have decayed, and we revive them rather than always starting from scratch.\n\nWhether you need content marketing services in India, SEO content for rankings, website copywriting, blog writing or a full editorial calendar, the deliverable is content that ranks, engages and converts — delivered on a dependable cadence your team can plan around, coordinated with your SEO and paid media as one system.\n\nFrom scoping and strategy through delivery, reporting and ongoing support, the entire engagement is run as one connected system — with clear milestones, a named team and a focus on outcomes, not deliverables alone.",
  features,
  benefits,
  metrics: sharedMetrics,
  whyChooseUs,
  process,
  testimonials: sharedTestimonials,
  faqs,
  crossLinks: crossLinksFor("content"),
};
