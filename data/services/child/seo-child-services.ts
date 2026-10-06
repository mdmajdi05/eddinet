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
  "AI SEO (Generative SEO)": "ai-seo",
  "Lead Generation SEO": "lead-generation-seo",
  "Local SEO": "local-seo",
  "Enterprise SEO": "enterprise-seo",
  "B2B SEO": "b2b-seo",
  "Technical SEO": "technical-seo",
  "International SEO": "international-seo",
  "Programmatic SEO": "programmatic-seo",
  "Amazon SEO": "amazon-seo",
  "eCommerce SEO": "ecommerce-seo",
  "Shopify SEO": "shopify-seo",
};
