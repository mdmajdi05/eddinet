import type { MetadataRoute } from "next";
import { servicePages } from "@/data/services/services";
import { seoChildServices } from "@/data/services/child/seo-child-services";
import { generatedChildServices } from "@/data/services/child/generated-child-services";
import { insights } from "@/data/blog/blog";
import { caseStudies } from "@/data/portfolio/case-studies";
import { projectCategories } from "@/data/portfolio/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://eddinet.com";

  //  lastModified deliberately ABSENT.
  //  Pehle yahan `new Date()` tha — har build pe 194/194 URLs ka <lastmod>
  //  ek hi timestamp ban jaata tha aur har deploy pe badal jaata tha.
  //  Google us signal ko unreliable maankar ignore kar deta hai (aur
  //  "sab pages har roz change hue" wala pattern spammy bhi lagta hai).
  //  Jab tak real per-page last-updated date maintain na ho, behtar hai
  //  <lastmod> hi na ho — official sitemap schema me ye OPTIONAL field hai.

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "daily", priority: 1 },
    { url: `${base}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/portfolio`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/case-studies`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((s) => ({
    url: `${base}/services/${s.slug}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const seoChildRoutes: MetadataRoute.Sitemap = seoChildServices.map((c) => ({
    url: `${base}/services/seo/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const generatedChildRoutes: MetadataRoute.Sitemap = generatedChildServices.map((c) => ({
    url: `${base}/services/${c.categorySlug}/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = insights.map((i) => ({
    url: `${base}/blog/${i.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const portfolioCategoryRoutes: MetadataRoute.Sitemap = projectCategories.map((category) => ({
    url: `${base}/portfolio/${category.key}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...seoChildRoutes,
    ...generatedChildRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
    ...portfolioCategoryRoutes,
  ];
}