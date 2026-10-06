// ============================================================================
//  FILE: data/services/child/social-media-marketing/linkedin-management.ts
//  PAGE: /services/social-media-marketing/linkedin-management
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { features, benefits2, whyChooseUs, process, faqs } from "../_category/social-media-marketing";
export const child = {
  slug: "linkedin-management",
  title: "LinkedIn Management",
  metaTitle: "LinkedIn Management Services in Delhi NCR | Eddinet",
  metaDescription: "LinkedIn presence, thought-leadership content and lead-focused engagement for a professional audience. The channel where B2B buyers decide — handled with credibility and consistency. Eddinet delivers dependable linkedin management services in Delhi NCR for India and global clients. Get a free proposal today.",
  heroHeading: "LinkedIn Management Services in Delhi NCR",
  heroSubheading: "LinkedIn presence, thought-leadership content and lead-focused engagement for a professional audience. The channel where B2B buyers decide — handled with credibility and consistency.",
  detailedDescription: "LinkedIn presence, thought-leadership content and lead-focused engagement for a professional audience. The channel where B2B buyers decide — handled with credibility and consistency.\n\nSocial media for a business is not about posting more — it's about being seen by the people who actually buy. At Eddinet, we run social media as a demand engine connected to the rest of your marketing. That means platform-specific strategy, content your audience stops scrolling for, daily community management and paid amplification that boosts what already works — all tied back to leads, sales and brand growth instead of vanity metrics.\n\nWe start by understanding where your buyers actually spend time and what kind of content they respond to in your industry, then build a monthly content system around that. The same post never needs to be recycled across channels: we produce native content for Instagram, Facebook, LinkedIn, YouTube and X, matched to each platform's format, algorithm and audience behaviour. Every month is planned on a calendar, reviewed against performance data and improved — so the content gets sharper, not just more frequent.\n\nSocial media done properly also feeds everything else you do. Content that performs builds retargeting audiences for paid ads, feeds your SEO with authority signals and gives your sales team social proof to close deals. Whether you need Instagram marketing, LinkedIn management, YouTube marketing, Meta ads or a complete social media marketing strategy in Delhi NCR, we build it as one connected system — planned, produced, published and measured against the outcomes that matter.\n\nFrom scoping and strategy through delivery, reporting and ongoing support, the entire engagement is run as one connected system — with clear milestones, a named team and a focus on outcomes, not deliverables alone.",
  features,
  benefits: benefits2,
  metrics: sharedMetrics,
  whyChooseUs,
  process,
  testimonials: sharedTestimonials,
  faqs,
  crossLinks: crossLinksFor("social-media-marketing"),
};
