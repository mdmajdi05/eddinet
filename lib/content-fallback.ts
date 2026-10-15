// ============================================================================
//  FILE: lib/content-fallback.ts
//
//  "Galat slug" recovery for content sections (blog, portfolio, case-studies).
//  Agar koi URL kisi asli page se match nahi karta, to sabse milte-julte VALID
//  slug dhoondh kar uska URL return karta hai (taaki 404 ke bajaye 308 redirect
//  ho sake). Kuch confident match na mile to `null` return hota hai => caller
//  404 deta hai.
//
//  NOTE: yeh functions sirf tab chalte hain jab route already "not found" ho —
//  normal valid pages par inka koi asar nahi hota.
// ============================================================================

import { insights } from "@/data/blog/blog";
import { caseStudies } from "@/data/portfolio/case-studies";
import { projectCategories } from "@/data/portfolio/portfolio";
import { findClosestSlug } from "@/lib/slug-match";

const BLOG_SLUGS: string[] = insights.map((i) => i.slug);
const CASE_STUDY_SLUGS: string[] = caseStudies.map((c) => c.slug);
const PORTFOLIO_CATEGORY_KEYS: string[] = projectCategories.map((c) => c.key);

/** `/blog/<galat-slug>` -> `/blog/<closest-slug>` */
export function resolveBlogRedirect(slug: string): string | null {
  const match = findClosestSlug(slug, BLOG_SLUGS);
  return match ? `/blog/${match}` : null;
}

/** `/portfolio/<galat-category>` -> `/portfolio/<closest-category>` */
export function resolvePortfolioRedirect(slug: string): string | null {
  const match = findClosestSlug(slug, PORTFOLIO_CATEGORY_KEYS);
  return match ? `/portfolio/${match}` : null;
}

/** `/case-studies/<galat-slug>` -> `/case-studies/<closest-slug>` */
export function resolveCaseStudyRedirect(slug: string): string | null {
  const match = findClosestSlug(slug, CASE_STUDY_SLUGS);
  return match ? `/case-studies/${match}` : null;
}
