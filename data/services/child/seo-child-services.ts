import { seoChildPages } from "./pages";

export interface SeoChildFeature {
  title: string;
  description: string;
}

export interface SeoChildProcessStep {
  num: string;
  title: string;
  description: string;
}

export interface SeoChildTestimonial {
  name: string;
  designation: string;
  review: string;
}

export interface SeoChildFaq {
  q: string;
  a: string;
}

export interface SeoChildCrossLink {
  title: string;
  slug: string;
  description: string;
}

export interface SeoChildBenefit {
  title: string;
  description: string;
}

export interface SeoChildIndustry {
  name: string;
  description: string;
}

export interface SeoChildMetric {
  value: string;
  label: string;
}

export interface SeoChildService {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  image: string;
  detailedDescription: string;
  problemStatement: string;
  whoNeedsThis: {
    heading: string;
    description: string;
    points: string[];
  };
  features: SeoChildFeature[];
  featuresHeading?: string;
  featuresDescription?: string;
  benefits: SeoChildBenefit[];
  benefitsHeading?: string;
  benefitsDescription?: string;
  industries: SeoChildIndustry[];
  metrics: SeoChildMetric[];
  whyChooseUs: {
    heading: string;
    description?: string;
    points: string[];
  };
  process: {
    heading: string;
    description?: string;
    steps: SeoChildProcessStep[];
  };
  caseStudy: {
    title: string;
    metric: string;
    description: string;
  };
  testimonials: SeoChildTestimonial[];
  faqs: SeoChildFaq[];
  crossLinks: SeoChildCrossLink[];
}

// Content ab per-page files se aata hai:
//   data/services/child/seo/<childSlug>.ts
export const seoChildServices: SeoChildService[] =
  Object.values(seoChildPages);

export function getSeoChildBySlug(slug: string): SeoChildService | undefined {
  return seoChildPages[slug];
}

export const seoItemToSlug: Record<string, string> = {
  "AI SEO (Generative SEO)": "ai-seo-generative-seo-service-in-delhi-ncr",
  "Lead Generation SEO": "lead-generation-seo-services-in-india",
  "Local SEO": "local-seo-services-in-delhi-ncr",
  "Enterprise SEO": "enterprise-seo-services-in-delhi-ncr",
  "B2B SEO": "b2b-seo-services-in-delhi-ncr",
  "Technical SEO": "technical-seo-services-in-delhi-ncr",
  "International SEO": "international-seo-services-in-delhi-ncr",
  "Programmatic SEO": "programmatic-seo-services-in-delhi-ncr",
  "Amazon SEO": "amazon-seo-services-in-delhi-ncr",
  "eCommerce SEO": "ecommerce-seo-services-in-delhi-ncr",
  "Shopify SEO": "shopify-seo-services-in-delhi-ncr",
};
