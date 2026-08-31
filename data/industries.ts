export interface Industry {
  icon: string;
  name: string;
  short: string;
  slug: string;
  blurb: string;
  focuses: string[];
}

export const industries: Industry[] = [
  {
    icon: "💳",
    name: "Finance & Fintech",
    short: "Finance & Fintech",
    slug: "finance-and-fintech",
    blurb: "Lead generation, compliance-aware campaigns and trust-building content for banks, NBFCs, lending platforms, wealth and payment businesses.",
    focuses: ["Lead Generation SEO", "Google & Meta Ads", "Trust & Compliance Content", "Web & App Development"],
  },
  {
    icon: "🏥",
    name: "Healthcare & Wellness",
    short: "Healthcare & Wellness",
    slug: "healthcare-and-wellness",
    blurb: "Local visibility, patient acquisition and credible content for hospitals, clinics, doctors, pharma and wellness brands.",
    focuses: ["Local SEO", "Patient Acquisition Ads", "Medical Content", "Reputation Management"],
  },
  {
    icon: "🛍️",
    name: "eCommerce & D2C Brands",
    short: "eCommerce & D2C",
    slug: "ecommerce-and-d2c",
    blurb: "Discovery, checkout conversion and repeat purchase for online stores and direct-to-consumer brands across marketplaces and own stores.",
    focuses: ["eCommerce SEO", "Performance Shopping Ads", "CRO & UX", "Shopify & Custom Stores"],
  },
  {
    icon: "🏗️",
    name: "Real Estate & Property",
    short: "Real Estate",
    slug: "real-estate-and-property",
    blurb: "Project-level lead generation, branded demand and channel sales support for developers, brokers and proptech platforms.",
    focuses: ["Project Landing Pages", "Meta & Google Ads", "CRM-Driven Lead Gen", "Virtual Tours & Creative"],
  },
  {
    icon: "🎓",
    name: "Education & EdTech",
    short: "Education & EdTech",
    slug: "education-and-edtech",
    blurb: "Admission-funnel campaigns, course visibility and authority content for institutes, universities and edtech platforms.",
    focuses: ["Admission Lead Gen", "SEO & Content", "YouTube & Meta Ads", "LMS & Web Platforms"],
  },
  {
    icon: "🚚",
    name: "Logistics & Supply Chain",
    short: "Logistics",
    slug: "logistics-and-supply-chain",
    blurb: "B2B visibility and qualified enquiries for logistics, freight, warehousing and supply-chain technology companies.",
    focuses: ["B2B SEO", "LinkedIn Ads", "Software Implementation", "Website Development"],
  },
  {
    icon: "💻",
    name: "Technology & SaaS",
    short: "Technology & SaaS",
    slug: "technology-and-saas",
    blurb: "Product-led growth, demo-driven demand and developer-friendly content for software and SaaS businesses.",
    focuses: ["SaaS SEO & Content", "Demo-Driven PPC", "Product Websites", "Cloud & DevOps"],
  },
  {
    icon: "🏨",
    name: "Hospitality & Travel",
    short: "Hospitality & Travel",
    slug: "hospitality-and-travel",
    blurb: "Direct booking growth, destination visibility and guest-experience marketing for hotels, travel and tourism brands.",
    focuses: ["Direct Booking Campaigns", "Destination SEO", "Content & Social", "Booking Platform Support"],
  },
  {
    icon: "🚗",
    name: "Automotive",
    short: "Automotive",
    slug: "automotive",
    blurb: "Dealer, service and parts lead generation, local dominance and showroom traffic for automotive businesses.",
    focuses: ["Local SEO & Maps", "Service Ads", "Showroom Content", "Reputation Management"],
  },
  {
    icon: "⚖️",
    name: "Legal & Professional Services",
    short: "Legal & B2B Services",
    slug: "legal-and-professional-services",
    blurb: "Authority-first visibility and qualified enquiries for law firms, consultants, agencies and professional practices.",
    focuses: ["Authority SEO", "LinkedIn & Search Ads", "Reputation Management", "Case-Study Content"],
  },
  {
    icon: "🏭",
    name: "Manufacturing & B2B Trade",
    short: "Manufacturing",
    slug: "manufacturing-and-b2b-trade",
    blurb: "Buyer-led visibility and enquiry generation for manufacturers, exporters and B2B trade businesses.",
    focuses: ["B2B SEO", "Google Ads for Trade", "Catalogue & Creative", "Website Development"],
  },
  {
    icon: "💪",
    name: "Fitness & Wellness",
    short: "Fitness & Wellness",
    slug: "fitness-and-wellness",
    blurb: "Membership and class bookings through local visibility, social demand and performance campaigns for gyms and wellness brands.",
    focuses: ["Local SEO", "Social & Reels", "Membership Ads", "Scheduling Platforms"],
  },
  {
    icon: "🛒",
    name: "Retail & Local Businesses",
    short: "Retail & Local",
    slug: "retail-and-local-businesses",
    blurb: "Footfall, calls and store traffic through listings optimisation, local search and geo-targeted campaigns.",
    focuses: ["Google Business Profile", "Local SEO", "Geo-Targeted Ads", "Review Generation"],
  },
  {
    icon: "🎬",
    name: "Media & Entertainment",
    short: "Media & Entertainment",
    slug: "media-and-entertainment",
    blurb: "Audience growth, launch buzz and platform monetisation for creators, studios, OTT and entertainment brands.",
    focuses: ["Social & Community", "YouTube Strategy", "Launch Campaigns", "Website & Apps"],
  },
  {
    icon: "📡",
    name: "Telecommunications",
    short: "Telecom",
    slug: "telecommunications",
    blurb: "Broadband, enterprise connectivity and handset campaigns built around high-volume local and B2B search demand.",
    focuses: ["Local Search Campaigns", "B2B Connectivity Ads", "Service SEO", "Website Support"],
  },
  {
    icon: "🛡️",
    name: "Insurance",
    short: "Insurance",
    slug: "insurance",
    blurb: "Comparison-led visibility and qualified policy enquiries for insurers, brokers and agents.",
    focuses: ["Comparison-Led SEO", "Lead Gen Ads", "Trust Content", "Compliance-Aware Creative"],
  },
  {
    icon: "🌾",
    name: "Agriculture & Food",
    short: "Agriculture & Food",
    slug: "agriculture-and-food",
    blurb: "Market access, brand visibility and B2B enquiry growth for agritech, FMCG food and agricultural businesses.",
    focuses: ["B2B & FMCG SEO", "Distributor Lead Gen", "Packaging & Creative", "eCommerce"],
  },
  {
    icon: "💼",
    name: "Professional & B2B Services",
    short: "Professional Services",
    slug: "professional-and-b2b-services",
    blurb: "Consultancies, agencies and business services scaled through authority content, LinkedIn campaigns and conversion-focused websites.",
    focuses: ["Authority Content", "LinkedIn Ads", "CRO Websites", "Case-Study Marketing"],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}