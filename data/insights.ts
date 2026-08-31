export interface InsightSection {
  heading?: string;
  paragraphs: string[];
}

export interface Insight {
  slug: string;
  title: string;
  category: string;
  categoryColor: string;
  label: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  sections: InsightSection[];
}

export const insights: Insight[] = [
  {
    slug: "how-generative-ai-is-reshaping-seo",
    title: "How Generative AI Is Reshaping SEO in 2026",
    category: "Search Engine Optimization",
    categoryColor: "text-[var(--main-accent)]",
    label: "SEO & AI Strategy",
    excerpt:
      "Practical strategies to optimise content for AI Overviews and stay visible as search behaviour shifts toward conversational answers.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
    date: "August 20, 2026",
    readTime: "7 min read",
    sections: [
      {
        heading: "Search is no longer a single destination",
        paragraphs: [
          "For two decades, SEO meant one thing: ranking in a list of ten blue links. In 2026 that model has quietly fractured. A meaningful share of product discovery now starts inside AI assistants, chat interfaces and AI Overviews that summarise answers directly - often with no traditional results in view at all.",
          "This does not mean SEO is dead. It means SEO now has two surfaces to win on: classic rankings and AI-generated answers. The businesses that win are the ones whose content is structured so clearly and credibly that both systems choose to surface it.",
        ],
      },
      {
        heading: "What AI search actually rewards",
        paragraphs: [
          "AI answer engines reward content that is unambiguous, well-sourced and tightly matched to a defined question. Vague, meandering pages that rank by authority alone lose ground to pages that state a clear answer early, support it with credible detail and keep the information easy to extract.",
          "In practice this means: answer-first headings, concise definitions, structured data around entities and facts, and content depth that genuinely covers the question - not keyword variants stuffed into invisible meta fields.",
        ],
      },
      {
        heading: "A practical optimisation checklist",
        paragraphs: [
          "Start by auditing what AI answers already say about your category. If the answer that appears is inaccurate or comes from a competitor, that is the content gap to close. Build pages that directly answer the question better than the current source.",
          "Add explicit question-and-answer blocks, cite specific numbers and sources where relevant, keep entity references consistent across the site, and maintain schema that helps systems understand what your page is about.",
          "Finally, track performance beyond rankings. Measure how often your brand is mentioned or cited in AI answer experiences, and treat that as a distinct KPI from traditional position tracking.",
        ],
      },
      {
        heading: "The durable advantage stays the same",
        paragraphs: [
          "None of this changes the fundamentals that have always worked: genuinely useful content, clean technical foundations and consistent credibility signals. AI search is not a shortcut around quality - it is a faster filter for it. Businesses that build for both surfaces, consistently and honestly, compound an advantage that neither algorithm shift can remove.",
        ],
      },
    ],
  },
  {
    slug: "lowering-google-ads-cpa-a-practical-framework",
    title: "Lowering Your Google Ads CPA: A Practical Framework",
    category: "Paid Ads & CRO",
    categoryColor: "text-[var(--purple-accent)]",
    label: "Performance Marketing",
    excerpt:
      "A repeatable approach to reducing cost per acquisition - through account structure, signal quality and testing - without cutting profitable spend.",
    image: "https://images.unsplash.com/photo-1553729459-uj0gfqcewkfd?w=600&q=80",
    date: "August 5, 2026",
    readTime: "6 min read",
    sections: [
      {
        heading: "Most CPA problems are signal problems, not bid problems",
        paragraphs: [
          "When cost per acquisition climbs, the first instinct is to lower bids. That is usually the wrong lever. In most accounts the real issue is that the platform is being fed weak conversion signals or broad intent, so it optimises toward volume instead of value.",
          "Before touching bids, fix what the platform can actually see: conversion tracking that measures revenue events rather than button clicks, and audience and keyword definitions tight enough that the algorithm learns from the right people.",
        ],
      },
      {
        heading: "Structure the account around intent",
        paragraphs: [
          "The fastest, most durable CPA improvements come from separating intent inside the account. Branded search, high-intent non-brand and category-level or discovery queries behave differently and should not share the same ad group, budget logic or optimisation objective.",
          "A disciplined structure lets each part of the account be optimised for what it does best, and prevents broad-confusion spending from masking the performance of genuinely profitable pockets.",
        ],
      },
      {
        heading: "Make search-term hygiene a daily habit",
        paragraphs: [
          "Negative-keyword management is unglamorous and disproportionately effective. In the early weeks of an account, the ratio of irrelevant to relevant impressions is at its highest - and every wasted click is a CPA penalty. Reviewing search terms daily, adding negatives and tightening match intent compounds quickly.",
          "As the account matures, the same discipline keeps it from drifting as new query patterns emerge. CPA falls not because spending stops, but because spend stops leaking.",
        ],
      },
      {
        heading: "Let creative and landing pages earn their place",
        paragraphs: [
          "When both the creative and the landing page match the searcher's intent exactly, quality scores and conversion rates move together - and CPA follows. Test offers, positioning and page structure systematically, keep the highest-intent variations, and retire winners only when their data genuinely expires.",
          "There is no single '40% hack'. What works is a compounding system of tracking, structure, hygiene and testing that reduces waste week after week.",
        ],
      },
    ],
  },
  {
    slug: "building-fast-websites-that-convert",
    title: "Building Fast Websites That Actually Convert",
    category: "Tech & Development",
    categoryColor: "text-[var(--green-accent)]",
    label: "Web Development",
    excerpt:
      "Core Web Vitals, UX structure and conversion design - the engineering decisions that turn visitors into customers without slowing your marketing down.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    date: "July 18, 2026",
    readTime: "6 min read",
    sections: [
      {
        heading: "Speed is a conversion asset, not a technical checkbox",
        paragraphs: [
          "Every additional second of load time quietly removes a share of your visitors before they ever see your offer. For a business buying traffic through paid ads, that makes page speed a direct cost inside acquisition - a slow page inflates CPA just as surely as a leaky keyword.",
          "The best marketing technology decision is often the simplest one: build on a platform that is fast by default, and treat performance budgets like part of the product requirements on day one.",
        ],
      },
      {
        heading: "Core Web Vitals are the floor, not the goal",
        paragraphs: [
          "Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift matter because they measure what real visitors feel. Modern rendering, optimised images and disciplined JavaScript budgets usually get you there.",
          "Above that floor, the goal is a page that communicates its value within seconds: a single clear headline, one obvious action and no competing demands on attention. Structure and message clarity are conversion engineering.",
        ],
      },
      {
        heading: "Design marketing and development as one system",
        paragraphs: [
          "The recurring failure in web projects is sequencing: marketing is briefed on a site that was already built, or development is handed a design with no understanding of how traffic will reach it. When the site's structure is built around the campaigns that will send traffic to it - matching landing intent, page purpose and conversion path - both disciplines perform better.",
          "This is the difference between a website as a project and a website as infrastructure for growth.",
        ],
      },
      {
        heading: "Maintain what you build",
        paragraphs: [
          "A site degrades quietly: plugins fall out of date, features bloat, performance drifts. Building is one project; keeping a site fast, secure and conversion-ready is an operating discipline. Ongoing maintenance and monitoring aren't an afterthought - they're what keep the asset paying for itself.",
        ],
      },
    ],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}