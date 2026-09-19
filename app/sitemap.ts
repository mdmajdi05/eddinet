import type { MetadataRoute } from "next";
import { servicePages } from "@/data/services";
import { seoChildServices } from "@/data/seo-child-services";
import { generatedChildServices } from "@/data/generated-child-services";
import { industries } from "@/data/industries";
import { insights } from "@/data/blog";
import { caseStudies } from "@/data/case-studies";
import { projectCategories } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://eddinet.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/industries`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const seoChildRoutes: MetadataRoute.Sitemap = seoChildServices.map((c) => ({
    url: `${base}/services/seo/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const generatedChildRoutes: MetadataRoute.Sitemap = generatedChildServices.map((c) => ({
    url: `${base}/services/${c.categorySlug}/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = insights.map((i) => ({
    url: `${base}/blog/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const portfolioCategoryRoutes: MetadataRoute.Sitemap = projectCategories.map((category) => ({
    url: `${base}/portfolio/${category.key}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...seoChildRoutes,
    ...generatedChildRoutes,
    ...industryRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
    ...portfolioCategoryRoutes,
  ];
}