// ============================================================================
//  FILE: data/services/child/_shared.ts
//  Yahan SIRF woh blocks hain jo HAR child page par same hain.
//  Page files ise import karti hain, copy nahi karti — isliye ek change
//  sabhi pages par lagu hota hai aur duplicate text ka koi scope nahi bachta.
// ============================================================================

import { services, relatedServices, type Service } from "@/data/services/services";

/** Site-wide metrics — har child page par yehi chaar proof points. */
export const sharedMetrics: { value: string; label: string }[] = [
  {
      value: "1,000+",
      label: "Projects delivered",
  },
  {
      value: "5+ Years",
      label: "In digital growth",
  },
  {
      value: "12+ Countries",
      label: "Clients served globally",
  },
  {
      value: "24×7",
      label: "Support & monitoring",
  },
];

/** Site-wide client reviews — har child page par yehi chaar. */
export const sharedTestimonials: { name: string; designation: string; review: string }[] = [
  {
      name: "Rohan Malhotra",
      designation: "Founder, D2C Brand",
      review: "Eddinet treated our work like a partnership, not a vendor project. The process was transparent, milestones were met and the results actually moved our business — not just the dashboards.",
  },
  {
      name: "Priya Sharma",
      designation: "Marketing Head, SaaS Company",
      review: "What stood out was how everything connected — strategy, execution and reporting. We always knew what was being done, why it was done, and what it returned. That clarity is rare.",
  },
  {
      name: "Amit Verma",
      designation: "Director, Real Estate Firm",
      review: "We had been burned by agencies before with vague promises. Eddinet documented the plan, stayed accountable to it and delivered exactly what they committed to.",
  },
  {
      name: "Neha Gupta",
      designation: "CEO, Healthcare Startup",
      review: "The team adapted quickly to our industry, communicated clearly and kept quality high under tight timelines. We would absolutely work with them again.",
  },
];

/**
 * Category ke cross-links. Pehle ye block har child page file me copy tha —
 * ab services.ts ke `relatedServices` se derive hota hai, to ek hi jagah
 * relationship badalne se sab child pages update ho jaate hain.
 */
export interface SharedCrossLink {
  title: string;
  slug: string;
  description: string;
}

export function crossLinksFor(categorySlug: string): SharedCrossLink[] {
  const cat = services.find((s) => s.slug === categorySlug);
  if (!cat) return [];

  const related: Service[] = (relatedServices[cat.slug] ?? [])
    .map((s) => services.find((x) => x.slug === s))
    .filter((x): x is Service => Boolean(x));

  const links: SharedCrossLink[] = [
    {
      title: `Back to ${cat.title} Services`,
      slug: `/services/${cat.slug}`,
      description: `Explore every ${cat.title.toLowerCase()} capability under one roof.`,
    },
  ];

  for (const r of related.slice(0, 2)) {
    links.push({
      title: `${r.title} Services`,
      slug: `/services/${r.slug}`,
      description: r.desc,
    });
  }

  links.push({
    title: "All Services",
    slug: "/services",
    description: "Browse the complete Eddinet service ecosystem.",
  });

  return links;
}
