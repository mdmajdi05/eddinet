export interface ServiceGroup {
  label: string;
  items: string[];
}

export interface ServiceExtraHeading {
  icon: string;
  title: string;
  items: string[];
}

export interface Service {
  cat: string;
  slug: string;
  icon: string;
  title: string;
  desc: string;
  image: string;
  link: string;
  tabLabel: string;
  footerLabel: string;
  allItems: string[];
  groups?: ServiceGroup[];
  extraHeading?: ServiceExtraHeading;
}

export const services: Service[] = [
  {
    cat: "seo",
    slug: "seo",
    icon: "🔍",
    title: "SEO & AI SEO",
    desc: "Search visibility built for how people actually search now - traditional Google results and AI-generated answers alike. Technical SEO, content relevance, search intent and AI-search readiness work together to build qualified, compounding organic traffic.",
    image: "SEO_AI_SEO.webp",
    link: "SEO & AI SEO services",
    tabLabel: "SEO",
    footerLabel: "Search Engine Optimization",
    allItems: ["SEO", "AI SEO (Generative SEO)", "Lead Generation SEO", "Local SEO", "Enterprise SEO", "B2B SEO", "Technical SEO", "Link Building", "International SEO", "Programmatic SEO", "Amazon SEO", "eCommerce SEO", "Shopify SEO"],
  },
  {
    cat: "social",
    slug: "social-media-marketing",
    icon: "📱",
    title: "Social Media Marketing",
    desc: "Platform-specific strategy, content, community and brand demand designed to support organic growth, paid campaigns and the broader customer journey rather than existing as a separate metric to report on.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80",
    link: "social media marketing services",
    tabLabel: "Social Media",
    footerLabel: "Social Media Growth",
    allItems: ["Social Media Management", "YouTube Management", "Facebook & Instagram Management", "LinkedIn Management", "Social Media Strategy", "Meta Ads", "LinkedIn Ads", "YouTube Ads"],
    groups: [
      {
        label: "Social Media Management",
        items: ["Social Media Management", "YouTube Management", "Facebook & Instagram Management", "LinkedIn Management", "Social Media Strategy"],
      },
      {
        label: "Social Media Advertising",
        items: ["Meta Ads", "LinkedIn Ads", "YouTube Ads"],
      },
    ],
  },
  {
    cat: "ads",
    slug: "ads-ppc",
    icon: "📊",
    title: "Ads / PPC & Content",
    desc: "Google Ads, Meta Ads and performance-focused paid acquisition supported by content and conversion strategy - planned around targeting, budget efficiency and measurable outcomes, not impressions and clicks.",
    image: "https://images.unsplash.com/photo-1553729459-uj0gfqcewkfd?w=500&q=80",
    link: "performance marketing services",
    tabLabel: "Ads / PPC",
    footerLabel: "Google & Meta PPC Ads",
    allItems: ["Google Ads", "Meta Ads", "YouTube Ads", "Amazon Ads", "LinkedIn Ads", "Lead Generation Ads", "Remarketing / Retargeting", "PPC Management"],
  },
  {
    cat: "design",
    slug: "design-creative",
    icon: "🎨",
    title: "Design & Creative",
    desc: "Brand identity, campaign creative, UI/visual systems and marketing assets designed to perform across web, social, advertising and digital products - not just look good in a portfolio.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
    link: "design and creative services",
    tabLabel: "Design",
    footerLabel: "Creative Design",
    allItems: ["Graphic Designing", "Logo Designing", "Brand Identity Design", "UI/UX Design", "Social Media Creatives", "Banner Design", "Brochure Design", "Catalogue Design", "Presentation Design", "Video Editing", "Motion Graphics", "Product Design"],
  },
  {
    cat: "web",
    slug: "web-development",
    icon: "💻",
    title: "Web Development",
    desc: "Fast, structured and SEO-ready websites engineered around usability, performance, conversion and long-term maintainability - so marketing never has to work around a site that wasn't built for it.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
    link: "website development services",
    tabLabel: "Web Dev",
    footerLabel: "Web Design & Tech",
    allItems: ["Custom Website Design", "Website Development", "Business Website", "Corporate Website", "Landing Page Design", "WordPress Development", "Shopify Development", "WooCommerce Development", "Custom Web Application", "Website Redesign", "Website Rebuild", "Website Upgrade", "Website Optimization"],
  },
  {
    cat: "ecommerce",
    slug: "ecommerce",
    icon: "🛒",
    title: "eCommerce Solutions",
    desc: "eCommerce platforms and storefront experiences designed around discovery, product visibility, UX, checkout conversion and repeat purchase - where SEO, paid media and UX have to work in sync.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80",
    link: "eCommerce solutions",
    tabLabel: "eCommerce",
    footerLabel: "eCommerce Solutions",
    allItems: ["eCommerce Website", "eCommerce SEO", "eCommerce PPC", "eCommerce Optimization", "Shopify Web Design", "WooCommerce Development", "Payment Gateway Integration", "Shipping Integration", "Inventory Integration", "Marketplace Integration", "Amazon Store Development", "eCommerce Migration"],
  },
  {
    cat: "mobile",
    slug: "mobile-app-development",
    icon: "📲",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications built around product goals, user experience, retention and scalable technical foundations - connected to the same marketing and data strategy as the rest of your digital presence.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80",
    link: "mobile app development",
    tabLabel: "Mobile Apps",
    footerLabel: "Mobile App Development",
    allItems: ["Android App Development", "iOS App Development", "Flutter App Development", "React Native Development", "Cross-Platform Apps", "Custom Mobile Apps", "App UI/UX Design", "App Backend Development", "API Integration", "App Migration", "App Deployment", "App Maintenance"],
  },
  {
    cat: "software",
    slug: "software-ai",
    icon: "🤖",
    title: "Software & AI Solutions",
    desc: "Custom software, SaaS-style systems, automation and AI-driven solutions that solve operational problems, improve customer experience or extend existing platforms beyond what off-the-shelf tools can do.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80",
    link: "software and AI solutions",
    tabLabel: "Software & AI",
    footerLabel: "AI Automation",
    allItems: ["Custom Software Development", "SaaS Development", "CRM Development", "ERP Development", "Business Management Software", "API Development", "REST API Development", "AI Integration", "AI Chatbot Development", "AI Agents", "Generative AI Solutions", "RAG Applications", "LLM Integration", "Business Automation"],
  },
  {
    cat: "cloud",
    slug: "cloud-devops",
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "Cloud infrastructure, deployment, CI/CD, scalability, reliability, security and operational practices that keep digital platforms stable as traffic and workloads grow.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
    link: "cloud and DevOps services",
    tabLabel: "Cloud & DevOps",
    footerLabel: "Cloud Infrastructure",
    allItems: ["AWS Cloud Services", "Cloud Infrastructure", "Cloud Migration", "VPS Setup", "Server Setup", "Linux Server Management", "Docker Deployment", "Kubernetes", "CI/CD Pipeline", "GitHub Actions", "Jenkins", "Nginx Configuration", "Load Balancing", "Monitoring & Logging", "Server Security"],
  },
  {
    cat: "hosting",
    slug: "hosting-migration",
    icon: "🌐",
    title: "Hosting & Migration",
    desc: "Hosting architecture, website/application migration, environment setup and infrastructure transition planned for reliability, security and minimal disruption to your live business.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80",
    link: "hosting and migration services",
    tabLabel: "Hosting",
    footerLabel: "Website Hosting",
    allItems: ["Website Hosting", "VPS Hosting", "Cloud Hosting", "Managed Hosting", "Application Hosting", "Database Hosting", "Domain & DNS Management", "SSL / HTTPS Setup", "Website Migration", "Hosting Migration", "Server Migration", "Cloud Migration", "Database Migration", "WordPress Migration", "Shopify Migration"],
  },
  {
    cat: "maintenance",
    slug: "maintenance-support",
    icon: "🛠️",
    title: "Maintenance & Support",
    desc: "Ongoing technical maintenance, monitoring, updates, performance improvements and support for websites, applications, software and infrastructure - so performance and security don't quietly decay after launch.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80",
    link: "maintenance and support plans",
    tabLabel: "Maintenance",
    footerLabel: "Technical Support",
    allItems: ["Website Maintenance", "Application Maintenance", "Server Maintenance", "Bug Fixing", "Security Updates", "Performance Optimization", "Website Backup", "Disaster Recovery", "Uptime Monitoring", "Security Monitoring", "Technical Support", "Emergency Support"],
  },
  {
    cat: "reputation",
    slug: "reputation-management",
    icon: "⭐",
    title: "Reputation Management",
    desc: "Monitoring and strategy for online reputation across reviews, search visibility, social presence and business listings - protecting and strengthening how your business is perceived online.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80",
    link: "reputation management services",
    tabLabel: "Reputation",
    footerLabel: "Online Reputation",
    allItems: ["Google Business Profile", "Google Review Management", "Review Generation", "Review Monitoring", "Online Reputation Management", "Brand Reputation Management", "Customer Feedback Management", "Business Listing Management", "Digital Presence Management"],
  },
  {
    cat: "content",
    slug: "content",
    icon: "✍️",
    title: "Content",
    desc: "Strategic content created for search, social, campaigns, landing pages and customer journeys - designed to educate, build authority and support conversion at every stage of the funnel.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&q=80",
    link: "content marketing services",
    tabLabel: "Content",
    footerLabel: "Content Marketing",
    allItems: ["Content Marketing", "SEO Content", "Website Content", "Landing Page Copy", "Blog Content", "Campaign Content", "Social Content", "Email Content", "Case Study Writing", "Content Strategy", "Content Audit", "Content Refresh"],
  },
];

// `services` is the single source of truth for all menus (Mega, mobile, homepage
// cards and the /services index). It holds all 13 capability areas, including
// the standalone Content category.
export const servicePages: Service[] = [...services];

export const footerServices: string[] = services.map((s) => s.footerLabel);

export const faqsByService: Record<string, { q: string; a: string }[]> = {
  seo: [
    { q: "How long does SEO take to show meaningful results?", a: "SEO is a compounding strategy. Visible ranking growth typically begins within 3 to 4 months, with meaningful business impact building over 6 to 12 months as authority, content depth and technical health compound." },
    { q: "What is AI SEO and why does it matter now?", a: "AI SEO optimises your content and structured data so you win visibility not just in classic Google results but also in AI-generated answers and search experiences. We build for both, so you don't lose exposure as search behaviour shifts." },
    { q: "How is SEO success measured - rankings or revenue?", a: "Rankings are an indicator, not the outcome. We report on qualified organic traffic, lead and transaction volume, conversion rates and the business value that visibility produces." },
  ],
  "social-media-marketing": [
    { q: "Which platforms will Eddinet manage for us?", a: "Platform choice is driven by your audience and buying journey. We most commonly manage Facebook, Instagram, LinkedIn and YouTube, and build strategy for emerging platforms where your market is active." },
    { q: "Do you handle community management and content too?", a: "Yes. Strategy, content, community management and advertising are planned together so organic and paid social support one another instead of operating in silos." },
  ],
  "ads-ppc": [
    { q: "How does performance marketing differ from SEO?", a: "Performance marketing (Google/Meta ads) creates controlled, immediate demand; SEO builds durable, compounding visibility. Most clients benefit from both used as complements, and we plan them as one system." },
    { q: "What budget do we need to start with ads?", a: "Budget depends on your market and cost per acquisition. We start with a targeting and conversion framework that protects budget efficiency, then scale the channels that prove profitable." },
  ],
  content: [
    { q: "What kind of content does Eddinet produce?", a: "We produce strategic content for search, social, campaigns, landing pages and customer journeys - designed to educate, build authority and support conversion rather than just fill pages." },
    { q: "Does content work with our SEO and ads?", a: "Always. SEO content is built around search intent and topical authority, while campaign content is built for ad relevance and conversion. We plan content, SEO and paid media as one system so every piece earns its place in the funnel." },
    { q: "Do you refresh existing content or start fresh?", a: "We do both. We start with a content audit to identify what is underperforming, outdated or duplicating itself, then refresh what can be salvaged and build new content only where it adds real value and rank potential." },
  ],
  "design-creative": [
    { q: "Do you design for both brand and performance?", a: "Yes. Creative is built to convert as much as it is built to look good - ensuring brand identity, campaign creative and UI systems perform across web, social and advertising." },
  ],
  "web-development": [
    { q: "What technology do you build websites with?", a: "We build with modern frameworks including React, Next.js, WordPress, Shopify and WooCommerce - chosen to match your business needs, performance targets and long-term maintainability." },
    { q: "Are the websites optimised for SEO and speed?", a: "Yes. Sites are engineered around Core Web Vitals, semantic structure, crawlability and conversion from day one, so marketing does not have to work around the site." },
  ],
  ecommerce: [
    { q: "Which eCommerce platforms do you support?", a: "We build and scale Shopify, WooCommerce and custom eCommerce experiences, including payment, shipping and marketplace integration." },
  ],
  "mobile-app-development": [
    { q: "Native or cross-platform - which is right for us?", a: "It depends on your product goals, budget and timeline. We build native and cross-platform (Flutter, React Native) apps and recommend the approach that best fits your users and roadmap." },
  ],
  "software-ai": [
    { q: "Can you build custom software and AI solutions?", a: "Yes. We build custom software, SaaS systems, automation and AI-driven solutions - including chatbots, AI agents and LLM integrations - that solve operational problems or extend existing platforms." },
  ],
  "cloud-devops": [
    { q: "Which cloud and DevOps capabilities do you cover?", a: "We cover cloud infrastructure (AWS and multi-cloud), CI/CD pipelines, containerisation with Docker and Kubernetes, monitoring, security and load balancing to keep platforms stable as they scale." },
  ],
  "hosting-migration": [
    { q: "Can you migrate our website without downtime?", a: "Yes. Migrations are planned and staged around reliability, security and minimal disruption, with rollback prepared and performance verified before cutover." },
  ],
  "maintenance-support": [
    { q: "What does an ongoing maintenance plan include?", a: "It includes monitoring, updates, security patching, backups, performance improvements and responsive technical support so your digital assets stay stable, secure and fast after launch." },
  ],
  "reputation-management": [
    { q: "How do you manage online reputation?", a: "We monitor and strategically manage reviews, search visibility, social presence and business listings, protecting and strengthening how your brand is perceived online." },
  ],
};

export const relatedServices: Record<string, string[]> = {
  seo: ["content", "ads-ppc", "web-development"],
  "social-media-marketing": ["ads-ppc", "design-creative", "content"],
  "ads-ppc": ["content", "seo", "web-development"],
  content: ["seo", "ads-ppc", "social-media-marketing"],
  "design-creative": ["web-development", "ads-ppc", "mobile-app-development"],
  "web-development": ["seo", "ecommerce", "maintenance-support"],
  ecommerce: ["web-development", "ads-ppc", "seo"],
  "mobile-app-development": ["software-ai", "cloud-devops", "design-creative"],
  "software-ai": ["cloud-devops", "mobile-app-development", "web-development"],
  "cloud-devops": ["hosting-migration", "software-ai", "maintenance-support"],
  "hosting-migration": ["cloud-devops", "web-development", "maintenance-support"],
  "maintenance-support": ["hosting-migration", "web-development", "cloud-devops"],
  "reputation-management": ["seo", "content", "ads-ppc"],
};

export function getServiceBySlug(slug: string): Service | undefined {
  return servicePages.find((s) => s.slug === slug);
}

export const serviceTabs = [
  { key: "all", label: "All Services" },
  { key: "seo", label: "SEO" },
  { key: "social", label: "Social Media" },
  { key: "ads", label: "Ads / PPC" },
  { key: "design", label: "Design" },
  { key: "web", label: "Web Dev" },
  { key: "ecommerce", label: "eCommerce" },
  { key: "mobile", label: "Mobile Apps" },
  { key: "software", label: "Software & AI" },
  { key: "cloud", label: "Cloud & DevOps" },
  { key: "hosting", label: "Hosting" },
  { key: "maintenance", label: "Maintenance" },
  { key: "reputation", label: "Reputation" },
  { key: "content", label: "Content" },
];