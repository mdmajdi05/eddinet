// ============================================================================
//  FILE: data/site/html-sitemap.ts  (HTML SITEMAP PAGE — /sitemap-html)
// WHAT'S IN THIS FILE:
//   htmlSitemapLinks - website ke SAARE public/active pages ki ek flat list
//                      { label, href, group } — label + link + chhota group tag
//
//  Ye list wahi sources se banti hai jo app/sitemap.ts (XML sitemap) use karta
//  hai — isliye dono kabhi out-of-sync nahi honge. Naya page add karo to
//  sirf uske data file me entry karo, yahan apne aap aa jayega.
//
//  Page khud isko 200-200 links per page paginate karke grid me dikhata hai:
//      app/sitemap-html/page.tsx
// ============================================================================

import { servicePages } from "@/data/services/services";
import { seoChildServices } from "@/data/services/child/seo-child-services";
import { generatedChildServices } from "@/data/services/child/generated-child-services";
import { insights } from "@/data/blog/blog";
import { caseStudies } from "@/data/portfolio/case-studies";
import { projectCategories } from "@/data/portfolio/portfolio";

export interface HtmlSitemapLink {
  /** User ko dikhne wala readable naam. */
  label: string;
  /** Site ke andar ka path (e.g. "/services/seo"). */
  href: string;
  /** Chhota group tag — grid card par badge ke roop me dikhta hai. */
  group: string;
}

/** Main / company pages. */
const mainPages: HtmlSitemapLink[] = [
  { label: "Home", href: "/", group: "Main" },
  { label: "Services", href: "/services", group: "Main" },
  { label: "Blog & Insights", href: "/blog", group: "Main" },
  { label: "Portfolio", href: "/portfolio", group: "Main" },
  { label: "Case Studies", href: "/case-studies", group: "Main" },
  { label: "About Us", href: "/about", group: "Main" },
  { label: "Contact", href: "/contact", group: "Main" },
  { label: "Privacy Policy", href: "/privacy-policy", group: "Main" },
  { label: "Terms & Conditions", href: "/terms", group: "Main" },
  { label: "HTML Sitemap", href: "/sitemap-html", group: "Main" },
];

/** Core service pages: /services/[slug] */
const coreServicePages: HtmlSitemapLink[] = servicePages.map((s) => ({
  label: s.footerLabel || s.title,
  href: `/services/${s.slug}`,
  group: "Services",
}));

/** SEO child pages: /services/seo/[slug] */
const seoServicePages: HtmlSitemapLink[] = seoChildServices.map((c) => ({
  label: c.title,
  href: `/services/seo/${c.slug}`,
  group: "SEO",
}));

/** Generated child pages: /services/[categorySlug]/[slug] */
const childServicePages: HtmlSitemapLink[] = generatedChildServices.map((c) => ({
  label: c.title,
  href: `/services/${c.categorySlug}/${c.slug}`,
  group: c.categoryTitle || "Services",
}));

/** Blog posts: /blog/[slug] */
const blogPages: HtmlSitemapLink[] = insights.map((i) => ({
  label: i.title,
  href: `/blog/${i.slug}`,
  group: "Blog",
}));

/** Case studies: /case-studies/[slug] */
const caseStudyPages: HtmlSitemapLink[] = caseStudies.map((c) => ({
  label: c.client || c.slug,
  href: `/case-studies/${c.slug}`,
  group: "Case Studies",
}));

/** Portfolio categories: /portfolio/[key] */
const portfolioPages: HtmlSitemapLink[] = projectCategories.map((c) => ({
  label: c.label,
  href: `/portfolio/${c.key}`,
  group: "Portfolio",
}));

/**
 * Saare active pages ki flat list. Duplicate href hata diye jaate hain
 * (safety ke liye, agar kabhi koi page do jagah se aaye).
 */
export const htmlSitemapLinks: HtmlSitemapLink[] = (() => {
  const all = [
    ...mainPages,
    ...coreServicePages,
    ...seoServicePages,
    ...childServicePages,
    ...blogPages,
    ...caseStudyPages,
    ...portfolioPages,
  ];

  const seen = new Set<string>();
  return all.filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });
})();

/** Total active pages — page header + pagination summary ke liye. */
export const htmlSitemapTotal = htmlSitemapLinks.length;
