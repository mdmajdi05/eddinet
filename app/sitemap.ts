import type { MetadataRoute } from "next";
import { servicePages } from "@/data/services/services";
import { seoChildServices } from "@/data/services/child/seo-child-services";
import { generatedChildServices } from "@/data/services/child/generated-child-services";
import { insights } from "@/data/blog/blog";
import { caseStudies } from "@/data/portfolio/case-studies";
import { projectCategories } from "@/data/portfolio/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://eddinet.com";

  /** Sitemap image entries ko absolute URL chahiye. */
  const absolute = (path: string) =>
    path.startsWith("http") ? path : `${base}${path}`;

  //  lastModified sirf wahan lagata hai jahan REAL date available hai
  //  (blog posts). Static/collection pages par `new Date()` nahi lagate —
  //  har build pe badalta timestamp google ke liye unreliable signal hai.
  //  /sitemap-html HTML-only helper page hai, usko sitemap me nahi rakhte
  //  (wo noindex hai). Case studies index sirf tab include hota hai jab
  //  actual verified case studies maujood hon — empty section index nahi karna.

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "daily", priority: 1 },
    { url: `${base}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/portfolio`, changeFrequency: "weekly", priority: 0.7 },
    ...(caseStudies.length > 0
      ? [
          {
            url: `${base}/case-studies`,
            changeFrequency: "monthly" as const,
            priority: 0.7,
          },
        ]
      : []),
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((s) => ({
    url: `${base}/services/${s.slug}`,
    changeFrequency: "weekly",
    priority: 0.9,
    images: [absolute(s.image)],
  }));

  const seoChildRoutes: MetadataRoute.Sitemap = seoChildServices.map((c) => ({
    url: `${base}/services/seo/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [absolute(c.image)],
  }));

  const generatedChildRoutes: MetadataRoute.Sitemap = generatedChildServices.map((c) => ({
    url: `${base}/services/${c.categorySlug}/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [absolute(c.image)],
  }));

  const blogRoutes: MetadataRoute.Sitemap = insights.map((i) => ({
    url: `${base}/blog/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [absolute(i.image)],
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    images: [absolute(c.image)],
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
