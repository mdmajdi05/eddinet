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

export const caseStudies: CaseStudy[] = [
  {
    slug: "tgc-institute-seo",
    tag: "Organic SEO & AI SEO",
    client: "TGC Institute",
    industry: "Education & EdTech",
    industrySlug: "education-and-edtech",
    summary:
      "Taking a competitive education brand from low organic visibility to 7.96 million monthly impressions and first-page dominance on the keywords that drive admissions.",
    metric: "7.96M",
    metricLabel: "Monthly organic impressions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    challenge:
      "TGC Institute competes in one of the most saturated education niches in Delhi NCR. Despite strong offline brand presence, the website was invisible for the high-intent keywords prospective students actually search - course-level queries, admission terms and 'best institute' comparisons. Traffic was low, rankings were scattered across pages 3 to 5, and the sales team relied almost entirely on paid leads and walk-ins.",
    strategy:
      "We treated education search as a full-funnel content problem rather than a keyword-stuffing exercise. The strategy combined deep technical SEO repair with a content architecture built around search intent: informational content for course explorers, comparison and course-detail pages for active comparers, and optimisation for AI-driven search visibility so the brand stayed present as students moved to conversational search.",
    execution:
      "The Eddinet team rebuilt the technical foundation - crawlability, indexation, internal linking and structured data - then executed a systematic content programme across every flagship course and location page. Keyword intent was mapped to page purpose, thin pages were consolidated, authority content was developed around syllabus, placement and admission queries, and every asset was optimised for both classic results and AI-generated answers.",
    outcome:
      "Organic visibility grew to 7.96 million monthly impressions and 47,900+ clicks from high-intent search. TGC Institute now holds page-one rankings for its primary competitive educational keywords, and organic search became a measurable, compounding admissions channel rather than a support activity. The same assets continue to produce qualified enquiries long after the initial launch.",
    services: ["SEO & AI SEO", "Content Marketing", "Technical SEO"],
    serviceSlugs: ["seo", "content", "web-development"],
  },
  {
    slug: "bliss-and-burn-google-ads",
    tag: "Google Ads & PPC",
    client: "Bliss & Burn Brand",
    industry: "eCommerce & D2C",
    industrySlug: "ecommerce-and-d2c",
    summary:
      "Launching a new brand to 250 conversions in five weeks while keeping cost per acquisition 38% below category average.",
    metric: "250",
    metricLabel: "Conversions in first 5 weeks",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    challenge:
      "Bliss & Burn launched with a strong product but no search history, no campaign data and a crowded direct-to-consumer category. The risk was spending the early budget to learn what the market already pays for - then discovering the winners too late. The brand needed controlled, measurable demand, not vanity impressions.",
    strategy:
      "We built the account around budget efficiency from day one: tight ad-group structures split by intent, search-term-level negatives from the first week, and creative and landing-page variations staged for rapid testing. Conversion tracking was wired to actual revenue events, not button clicks, so every optimisation decision was tied to business outcome.",
    execution:
      "Campaigns were launched in disciplined waves - branded, high-intent non-brand, then category and competitor conquest. Daily search-term optimisation cut wasted spend, landing pages were iterated against the best-performing offers, and budgets were shifted daily toward proven winners. The pace of change, not campaign volume, was what protected efficiency.",
    outcome:
      "250 conversions were generated in the first five weeks of launch, with cost per acquisition held 38% below the category average. Scale was then safely increased because the account had already established which keywords, audiences and creative combinations produced revenue - not just clicks.",
    services: ["Google Ads", "PPC Management", "Landing Page Conversion"],
    serviceSlugs: ["ads-ppc", "content", "web-development"],
  },
  {
    slug: "ok-tire-calgary-local-seo",
    tag: "Local SEO & Lead Gen",
    client: "OK Tire Calgary",
    industry: "Automotive",
    industrySlug: "automotive",
    summary:
      "Moving a local service business from page 3 to domination of Google Maps - delivering 650+ monthly leads in under four months.",
    metric: "650+",
    metricLabel: "Monthly leads",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80",
    challenge:
      "OK Tire Calgary is a high-trust local service business where the customer journey begins on search and ends in a call. The store was buried on page 3, losing repair and service enquiries to competitors with stronger local presence and review profiles. Every day of poor visibility was a day of lost calls.",
    strategy:
      "We built a local dominance play combining three connected levers: Google Business Profile optimisation as the foundation, a review-generation system to compound trust, and local landing pages engineered for the exact service queries customers search before booking.",
    execution:
      "The profile was rebuilt around accuracy, categories and geo-relevant content, and local citations were aligned for consistency. A structured review cadence turned customer interactions into measurable social proof, while landing pages covered high-intent service and repair queries with clear, phone-first conversion paths.",
    outcome:
      "Within four months OK Tire Calgary moved from page 3 to dominating local results and Google Maps for automotive repair services - reaching 650+ monthly leads. The store now owns the entire local customer journey from search to phone call, with visible performance across the service category.",
    services: ["Local SEO", "Google Business Profile", "Review Management"],
    serviceSlugs: ["seo", "reputation-management", "content"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}