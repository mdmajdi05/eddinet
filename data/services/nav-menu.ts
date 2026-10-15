// ============================================================================
//  FILE: data/services/nav-menu.ts   ⚠️ SERVER-ONLY
//
//  Header ke mega-menus ka data yahan (server par) banate hain. Sirf chhote
//  {label, href} link objects return hote hain — isse poora child-page content
//  (generated-child-services + 139 content files) aur portfolio data CLIENT
//  bundle me nahi jaata (pehle ~1 MB ka layout chunk ban raha tha).
//
//  ⚠️ Is file ko kisi bhi client component ("use client") me import MAT karo.
//     Sirf app/layout.tsx (server component) se import hota hai, aur props
//     ke roop me <Header /> ko pass hota hai.
// ============================================================================

import { services } from "@/data/services/services";
import { getChildSlug } from "@/data/services/child/generated-child-services";
import { projectCategories } from "@/data/portfolio/portfolio";
import type {
  MegaMenuCategory,
  MobileServiceLink,
  PortfolioMenuCategory,
} from "@/data/services/nav-menu-types";

/** Nav item (label) -> uska sahi child URL. Ek hi jagah resolve hota hai. */
function childHref(catSlug: string, item: string): string {
  const childSlug = getChildSlug(catSlug, item);
  return childSlug
    ? `/services/${catSlug}/${childSlug}`
    : `/services/${catSlug}`;
}

/** Items ki list ko {label, href} links me badlo. */
function toLinks(
  catSlug: string,
  items: readonly string[],
): { label: string; href: string }[] {
  return items.map((item) => ({ label: item, href: childHref(catSlug, item) }));
}

export const megaMenuCategories: MegaMenuCategory[] = services.map((s) => ({
  slug: s.slug,
  icon: s.icon,
  title: s.title.toUpperCase(),
  groups: s.groups
    ? s.groups.map((g) => ({ label: g.label, items: toLinks(s.slug, g.items) }))
    : null,
  items: s.groups ? null : toLinks(s.slug, s.allItems ?? []),
  extraHeading: s.extraHeading
    ? {
        icon: s.extraHeading.icon,
        title: s.extraHeading.title,
        items: toLinks(s.slug, s.extraHeading.items),
      }
    : undefined,
}));

export const mobileServiceLinks: MobileServiceLink[] = services
  .slice(0, 6)
  .map((s) => ({ title: s.title, slug: s.slug }));

export const portfolioMenuCategories: PortfolioMenuCategory[] =
  projectCategories.map((c) => ({ key: c.key, label: c.label }));
