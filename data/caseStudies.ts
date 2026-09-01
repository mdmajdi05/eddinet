export interface CaseStudy {
  slug: string;
  tag: string;
  client: string;
  industry: string;
  industrySlug: string;
  summary: string;
  metric: string;
  metricLabel: string;
  image: string;
  challenge: string;
  strategy: string;
  execution: string;
  outcome: string;
  services: string[];
  serviceSlugs: string[];
}

// We only publish genuine, permission-based case studies. Per our quality and
// trust rules we do not publish placeholder statistics, fabricated client
// results or invented testimonials. Every case study here is verified before it
// is published - until then this list intentionally remains empty.
export const caseStudies: CaseStudy[] = [];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
