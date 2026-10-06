// ============================================================================
//  FILE: data/services/child/maintenance-support/server-maintenance.ts
//  PAGE: /services/maintenance-support/server-maintenance
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { features, benefits, whyChooseUs, process, faqs } from "../_category/maintenance-support";
export const child = {
  slug: "server-maintenance",
  title: "Server Maintenance",
  metaTitle: "Server Maintenance Services in Delhi NCR | Eddinet",
  metaDescription: "Server patching, health checks and optimisation for stable uptime. Infrastructure that's serviced on a schedule, not on an incident. Eddinet delivers dependable server maintenance services in Delhi NCR for India and global clients. Get a free proposal today.",
  heroHeading: "Server Maintenance Services in Delhi NCR",
  heroSubheading: "Server patching, health checks and optimisation for stable uptime. Infrastructure that's serviced on a schedule, not on an incident.",
  detailedDescription: "Server patching, health checks and optimisation for stable uptime. Infrastructure that's serviced on a schedule, not on an incident.\n\nMost websites don't die in one dramatic moment — they decay quietly. Outdated plugins, missed security patches, bloated databases and creeping performance loss build up until one bad update breaks the whole thing. At Eddinet, we provide maintenance as proactive care, not firefighting. Updates, monitoring, security patching and backups run on a schedule so problems are caught early, and support is handled with clear ownership and fast responses.\n\nThink of it as regular servicing for your digital assets. Just as you wouldn't ignore a car until the engine seizes, you shouldn't ignore a website until it's hacked, down or slow. Our engineers check the health of your site or application on a defined cadence, apply updates safely, verify that backups actually restore, and tune performance before users notice it slipping. When something does go wrong, there's a named contact, a clear response time and a post-incident note on what happened and how it won't again.\n\nThis is the layer most projects forget. The agency launches the site, disappears, and the client is left guessing when it's time to update a plugin or renew a certificate. We provide the ongoing care that keeps launches from going stale — whether that's a WordPress website, an eCommerce store, a web application or cloud infrastructure, on a monthly retainer sized to your needs.\n\nFrom scoping and strategy through delivery, reporting and ongoing support, the entire engagement is run as one connected system — with clear milestones, a named team and a focus on outcomes, not deliverables alone.",
  features,
  benefits,
  metrics: sharedMetrics,
  whyChooseUs,
  process,
  testimonials: sharedTestimonials,
  faqs,
  crossLinks: crossLinksFor("maintenance-support"),
};
