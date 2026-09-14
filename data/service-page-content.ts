// ============================================================================
//  FILE: data/service-page-content.ts
//  WHAT'S IN THIS FILE:
//    Single source of truth for every /services/<category> page. Each category
//    is normalised into one CategoryPageContent object with a fixed section
//    shape (hero → about → services → process → benefits → why-choose-us →
//    testimonials → faqs), so every category page renders the SAME structure.
//
//    Content priority:
//      1. docxCategoryPages   — authored copy from "EDDITNET CONTENT (2).docx"
//      2. CategoryTemplate    — authored per-category template (benefits, why)
//      3. Auto defaults        — generated from the category's own service data
//    This guarantees no category page is ever missing a section.
// ============================================================================

import {
  getServiceBySlug,
  itemDetails,
  faqsByService,
  relatedServices,
  childServiceImages,
  type Service,
} from "./services";
import {
  getChildSlug,
  getCategoryTemplate,
  sharedTestimonials,
} from "./generated-child-services";
import { processSteps } from "./home";
import { docxCategoryPages } from "./docx-content";

export interface CategoryServicesItem {
  title: string;
  description: string;
  href: string | null;
  image: string;
}

export interface CategoryPageContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroLead: string;
  heroGradient: string | null;
  heroSubheading: string;
  about: string[];
  services: CategoryServicesItem[];
  process: {
    heading: string;
    steps: { num: string; title: string; desc: string }[];
  };
  benefits: { title: string; description: string }[];
  whyChooseUs: { heading: string; points: string[] };
  testimonials: { name: string; designation: string; review: string }[];
  faqs: { q: string; a: string }[];
  related: Service[];
  allItemsCount: number;
}

const genericBenefits: { title: string; description: string }[] = [
  {
    title: "Outcome-First Delivery",
    description:
      "Every engagement is scoped around a measurable business goal — not a fixed list of deliverables.",
  },
  {
    title: "One Connected Team",
    description:
      "Strategy, execution, design and reporting run under one roof, so nothing gets lost between vendors.",
  },
  {
    title: "SEO-Ready From Day One",
    description:
      "Clean structure, fast pages and search-friendly foundations built into everything we deliver.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Clear milestones and honest dashboards — you always know what's done, why and what it returned.",
  },
  {
    title: "Long-Term Support",
    description:
      "We stay involved after launch with monitoring, iterations and ongoing optimisation.",
  },
];

const genericWhyChooseUs: { heading: string; points: string[] } = {
  heading: "Why Businesses Pick Eddinet",
  points: [
    "Partnership, Not Vendor Work: We treat your project like a partnership, not a vendor task — a named team, clear owners and direct access.",
    "Outcome-Driven Timelines: We plan around outcomes, with realistic timelines we actually commit to.",
    "No Black Boxes: Clean, documented work and transparent reporting at every milestone.",
    "Ongoing Optimisation: We stay involved after delivery, refining and improving based on real performance data.",
  ],
};

function listItems(items: string[], n: number): string {
  const head = items.slice(0, n);
  if (items.length <= n) return head.join(", ");
  return `${head.join(", ")} and more`;
}

export function getCategoryPageContent(
  slug: string,
): CategoryPageContent | null {
  const s = getServiceBySlug(slug);
  if (!s) return null;

  const dx = docxCategoryPages[slug] ?? null;
  const tpl = getCategoryTemplate(slug);

  const heroText = dx?.heroHeading ?? `${s.title} Services in Delhi NCR`;
  const gradMatch = heroText.match(/\s+in [A-Za-z ]+$/i);
  const heroLead = gradMatch
    ? heroText.replace(gradMatch[0], "").trim()
    : heroText;
  const heroGradient = gradMatch ? gradMatch[0].trim() : null;

  const authoredAbout = dx?.about ? dx.about.split("\n\n") : [];
  const aboutIntro = `${s.desc} Since launching our ${s.title.toLowerCase()} practice, Eddinet has helped businesses across Delhi NCR and beyond turn visibility into measurable revenue — pairing senior strategy with hands-on execution under one roof.`;
  const aboutParagraphs = [
    `We built Eddinet around one belief: growth work fails most often because it is fragmented. Strategy, execution, design and reporting get split across different vendors and nothing ends up accountable. So we run ${s.title.toLowerCase()} engagements as a single connected system — a named team, shared goals, and transparent milestones from the first audit to ongoing optimisation.`,
    `Every ${s.title.toLowerCase()} project starts with a deep audit of what you have today: existing assets, competitors, market position and the business outcome you actually need. From that we define a clear roadmap, ship the highest-impact work first, and measure everything against the goal — not against vanity metrics that look good in reports but do nothing for the bottom line.`,
    `We work with startups, SMBs and established companies across India and globally. Whether you need ${listItems(s.allItems, 4)} or a complete ${s.title.toLowerCase()} program, every engagement is scoped around your business goal and delivered with full transparency — clear timelines, honest dashboards, and a support mindset that keeps improving after launch.`,
    `One connected team handles strategy, delivery and reporting for every ${s.title.toLowerCase()} engagement, so nothing gets lost between departments. You get direct access to the specialists doing the work, clear owners at every stage, and reporting that explains what moved, why it moved, and what to do next — built for people who care about outcomes, not activity.`,
    `We stay invested beyond delivery. Every ${s.title.toLowerCase()} partner gets ongoing monitoring, iteration and proactive recommendations, because the fastest-growing businesses are the ones that keep optimising. Whether you are auditing us, our work, or weighing us against another agency, we are happy to benchmark — a free 30-minute strategy call, no commitment attached.`,
  ];
  const about =
    authoredAbout.length >= 5
      ? authoredAbout
      : authoredAbout.length > 0
        ? [...authoredAbout, ...aboutParagraphs]
        : [aboutIntro, ...aboutParagraphs];

  const services = s.allItems.map((item) => {
    const childSlug = getChildSlug(s.slug, item);
    return {
      title: item,
      description:
        itemDetails[item] ??
        `End-to-end ${item.toLowerCase()} service delivered as part of a connected growth system.`,
      href: childSlug ? `/services/${s.slug}/${childSlug}` : null,
      image: childServiceImages[s.slug]?.[item] ?? s.image,
    };
  });

  const process = dx?.process
    ? {
        heading: dx.process.heading,
        steps: dx.process.steps.map((step) => ({
          num: step.num,
          title: step.title,
          desc: step.description,
        })),
      }
    : { heading: `How We Run ${s.title} Projects`, steps: processSteps };

  const benefits =
    dx?.benefits.length > 0
      ? dx.benefits
      : tpl?.benefits.length
        ? tpl.benefits
        : genericBenefits;

  const whyChooseUs =
    dx?.whyChooseUs.points.length
      ? dx.whyChooseUs
      : tpl && tpl.whyPoints.length
        ? { heading: tpl.whyHeading, points: tpl.whyPoints }
        : genericWhyChooseUs;

  return {
    title: s.title,
    metaTitle: dx?.metaTitle ?? `${s.title} Services in Delhi NCR`,
    metaDescription: dx?.metaDescription ?? s.desc,
    heroHeading: heroText,
    heroLead,
    heroGradient,
    heroSubheading: dx?.heroSubheading ?? s.desc,
    about,
    services,
    process,
    benefits,
    whyChooseUs,
    testimonials: sharedTestimonials,
    faqs: faqsByService[s.slug] ?? [],
    related: (relatedServices[s.slug] ?? [])
      .map(getServiceBySlug)
      .filter((x): x is Service => Boolean(x)),
    allItemsCount: s.allItems.length,
  };
}