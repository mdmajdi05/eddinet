// ============================================================================
//  FILE: lib/service-fallback.ts
//
//  "Galat slug" recovery: agar koi /services/... URL kisi asli page se match
//  nahi karta, to sabse milte-julte VALID slug dhoondh kar uska URL return
//  karta hai (taaki 404 ke bajaye 308 redirect ho sake). Kuch confident match
//  na mile to `null` return hota hai => caller 404 deta hai.
//
//  NOTE: yeh functions sirf tab chalte hain jab route already "not found" ho —
//  normal valid pages par inka koi asar nahi hota.
// ============================================================================

import { servicePages } from "@/data/services/services";
import { generatedChildServices } from "@/data/services/child/generated-child-services";
import { seoChildServices } from "@/data/services/child/seo-child-services";
import { findClosestSlug } from "@/lib/slug-match";

const CATEGORY_SLUGS: string[] = servicePages.map((s) => s.slug);
const CHILD_SLUGS: string[] = generatedChildServices.map((c) => c.slug);
const SEO_CHILD_SLUGS: string[] = seoChildServices.map((c) => c.slug);

/** `/services/<galat-category>` -> `/services/<closest-category>` */
export function resolveServiceCategoryRedirect(slug: string): string | null {
  const match = findClosestSlug(slug, CATEGORY_SLUGS);
  return match ? `/services/${match}` : null;
}

/**
 * `/services/<category>/<galat-child>` -> closest valid child URL.
 * Order: same-category match -> global child match -> closest category page.
 */
export function resolveServiceChildRedirect(
  categorySlug: string,
  childSlug: string,
): string | null {
  const categoryValid = CATEGORY_SLUGS.includes(categorySlug);

  // 1. Same category me closest sibling (sirf jab category sahi ho).
  if (categoryValid) {
    const siblings = generatedChildServices
      .filter((c) => c.categorySlug === categorySlug)
      .map((c) => c.slug);
    const siblingMatch = findClosestSlug(childSlug, siblings);
    if (siblingMatch) return `/services/${categorySlug}/${siblingMatch}`;
  }

  // 2. Kisi bhi category ka closest child (category bhi galat ho sakti hai).
  const globalMatch = findClosestSlug(childSlug, CHILD_SLUGS);
  if (globalMatch) {
    const target = generatedChildServices.find((c) => c.slug === globalMatch);
    if (target) return `/services/${target.categorySlug}/${target.slug}`;
  }

  // 3. Sirf jab CATEGORY hi galat ho -> us closest category page par.
  //    (Valid category + random child => yahan nahi aayega => 404.)
  if (!categoryValid) {
    const categoryMatch = findClosestSlug(categorySlug, CATEGORY_SLUGS);
    if (categoryMatch) return `/services/${categoryMatch}`;
  }

  return null;
}

/** `/services/seo/<galat-child>` -> `/services/seo/<closest-child>` */
export function resolveSeoChildRedirect(childSlug: string): string | null {
  const match = findClosestSlug(childSlug, SEO_CHILD_SLUGS);
  return match ? `/services/seo/${match}` : null;
}
