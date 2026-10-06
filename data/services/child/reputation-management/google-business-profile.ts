// ============================================================================
//  FILE: data/services/child/reputation-management/google-business-profile.ts
//  PAGE: /services/reputation-management/google-business-profile
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { features, benefits, whyChooseUs, process, faqs } from "../_category/reputation-management";
export const child = {
  slug: "google-business-profile",
  title: "Google Business Profile",
  metaTitle: "Google Business Profile Services in Delhi NCR | Eddinet",
  metaDescription: "Profile setup, optimisation and updates that power local search visibility. Your business found, accurate and appealing in the local pack. Eddinet delivers dependable google business profile services in Delhi NCR for India and global clients. Get a free proposal today.",
  heroHeading: "Google Business Profile Services in Delhi NCR",
  heroSubheading: "Profile setup, optimisation and updates that power local search visibility. Your business found, accurate and appealing in the local pack.",
  detailedDescription: "Profile setup, optimisation and updates that power local search visibility. Your business found, accurate and appealing in the local pack.\n\nBefore a customer ever picks up the phone, they've already formed an opinion about you — from reviews, search results and what others say about your brand online. At Eddinet, we protect and strengthen exactly that perception. We monitor reviews, search visibility, social presence and business listings in one connected view, respond professionally to feedback, and systematically grow your positive signals — so your reputation becomes an asset that brings customers in rather than a risk you worry about.\n\nMost businesses don't have a reputation problem until one bad review surfaces on page one of Google — and then it's suddenly everyone's problem. Our work prevents that panic by running the whole thing as a system: alerts the moment a new review or mention appears, professional on-brand responses within the platform's window, a steady and ethical review flow that keeps the rating healthy, and listings kept accurate and consistent where local customers look. Downturns get caught early, while improvements compound quietly.\n\nA good reputation isn't a bonus — in local search and in trust, it's often the deciding factor. Reviews directly influence Google Business Profile rankings, and a healthy, recent review base turns hesitant researchers into enquiries. Whether you need online reputation management in India, Google review management, local listing optimisation or brand monitoring, we run reputation as a measurable growth function — audited, reported and connected to your local SEO and sales.\n\nFrom scoping and strategy through delivery, reporting and ongoing support, the entire engagement is run as one connected system — with clear milestones, a named team and a focus on outcomes, not deliverables alone.",
  features,
  benefits,
  metrics: sharedMetrics,
  whyChooseUs,
  process,
  testimonials: sharedTestimonials,
  faqs,
  crossLinks: crossLinksFor("reputation-management"),
};
