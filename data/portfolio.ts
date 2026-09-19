// ============================================================================
//  FILE: data/portfolio.ts  (PORTFOLIO PAGE)
// WHAT'S IN THIS FILE:  (PORTFOLIO)
//   portfolioProjects[] - all 62 client sites. NAYA CLIENT ADD KARNA HOTO
//                         YAHIN SE karo. Har entry: title, slug, url,
//                         image, category, gradient, client, year, tags.
//   projectCategories    - filter categories for portfolio grids
// ============================================================================


// ============================================================
// EDDINET PROJECT PORTFOLIO — TEMPLATE
// ------------------------------------------------------------
// This file lists the portfolio projects shown on /portfolio.
//
// HOW TO FILL YOUR REAL PROJECTS:
//   1. Duplicate any entry below and edit it.
//   2. Replace `title` with the real project/site name.
//   3. Replace `client` with the real client/about line.
//   4. Put the live URL in `url` (e.g. "https://yourclient.com").
//      Keep it empty string "" if the site should not be linked yet.
//   5. Update `summary`, `highlight` (metric/value) and `tags`.
// Keep `status: "Live & Running"` for anything that is live today.
// ============================================================

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  url: string;
  category: string;
  service: string;
  industry: string;
  image: string;
  summary: string;
  highlight: string;
  highlightLabel: string;
  status: string;
  tags: string[];
}

export const projectCategories = [
  { key: "websites", label: "Websites & Portals" },
  { key: "ecommerce", label: "eCommerce & D2C" },
  { key: "software-saas", label: "Software & SaaS" },
  { key: "ai-automation", label: "AI & Automation" },
  { key: "mobile-apps", label: "Mobile Apps" },
  { key: "seo", label: "SEO" },
  { key: "paid-media", label: "Paid Media & Social" },
  { key: "content-design", label: "Content & Design" },
  { key: "cloud-devops", label: "Cloud, Hosting & DevOps" },
  { key: "support-reputation", label: "Maintenance & Reputation" },
];

export const portfolioProjects: PortfolioProject[] = [
  // ---------------- Websites & Portals ----------------
  {
    id: "web-07",
    title: "StudyBracket Learning Platform",
    client: "StudyBracket",
    url: "https://studybracket.com",
    category: "websites",
    service: "Web Development",
    industry: "Education",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    summary: "Education platform website built for course discovery, program pages and student enquiries.",
    highlight: "Live",
    highlightLabel: "scrolling preview on hover",
    status: "Live & Running",
    tags: ["Custom Website", "SEO-Ready", "Enquiry Flow"],
  },
  {
    id: "web-08",
    title: "GainRealEstate Property Portal",
    client: "Gain Real Estate",
    url: "https://gainrealestate.in",
    category: "websites",
    service: "Web Development",
    industry: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    summary: "Real-estate website with project listings, lead-capture forms and location-focused property pages.",
    highlight: "Live",
    highlightLabel: "scrolling preview on hover",
    status: "Live & Running",
    tags: ["Custom Website", "Lead Generation", "Property Listings"],
  },
  {
    id: "web-09",
    title: "ZENTRYO Industrial Components Website",
    client: "ZENTRYO",
    url: "https://zentryo.in",
    category: "websites",
    service: "Web Development",
    industry: "Industrial Automation",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
    summary: "Industrial engineering & automation supplier site with product catalogues, RFQ flow and multi-industry pages.",
    highlight: "50,000+",
    highlightLabel: "products in catalogue",
    status: "Live & Running",
    tags: ["Custom Website", "Catalogue", "RFQ Flow"],
  },
  
  
  {
    id: "web-01",
    title: "Multi-Location Restaurant Group Website",
    client: "Hospitality brand, Delhi NCR",
    url: "https://studybracket.com",
    category: "websites",
    service: "Web Development",
    industry: "Hospitality",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80",
    summary: "Brand website with menu, table reservations, branch pages and online ordering built for speed and conversions.",
    highlight: "2.4x",
    highlightLabel: "faster load time after rebuild",
    status: "Live & Running",
    tags: ["Custom Website", "UI/UX", "Performance"],
  },
  {
    id: "web-02",
    title: "Hospital & Multispeciality Clinic Website",
    client: "Healthcare group, New Delhi",
    url: "https://gainrealestate.in",
    category: "websites",
    service: "Web Development",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=80",
    summary: "Doctor profiles, department pages, appointment forms and SEO-ready structure for a multispeciality healthcare brand.",
    highlight: "3x",
    highlightLabel: "more appointment enquiries",
    status: "Live & Running",
    tags: ["Custom Website", "Appointment Booking", "SEO-Ready"],
  },
  {
    id: "web-03",
    title: "Real-Estate Developer Project Site",
    client: "Property developer, Noida",
    url: "https://zentryo.in",
    category: "websites",
    service: "Web Development",
    industry: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    summary: "Project microsite with floor plans, location highlights, EMI calculators and lead-capture landing flows.",
    highlight: "1,200+",
    highlightLabel: "qualified leads per quarter",
    status: "Live & Running",
    tags: ["Project Microsite", "Lead Generation", "CRM Integration"],
  },
  
  
  // ---------------- eCommerce & D2C ----------------
  
  {
    id: "ecom-02",
    title: "Home & Decor eCommerce Store",
    client: "Home decor brand, Delhi",
    url: "https://studybracket.com",
    category: "ecommerce",
    service: "eCommerce Solutions",
    industry: "Home & Living",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    summary: "Full-store setup with product feeds, payment gateways, shipping logic and performance-based category pages.",
    highlight: "2.1x",
    highlightLabel: "revenue growth in 6 months",
    status: "Live & Running",
    tags: ["Store Setup", "Payment Gateway", "Product Feeds"],
  },
  {
    id: "ecom-03",
    title: "Organic Skincare D2C Store",
    client: "Wellness brand, NCR",
    url: "https://gainrealestate.in",
    category: "ecommerce",
    service: "eCommerce Solutions",
    industry: "Wellness",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
    summary: "Skincare storefront with subscription bundles, reviews integration and loyalty rewards to drive repeat orders.",
    highlight: "3x",
    highlightLabel: "repeat purchase rate",
    status: "Live & Running",
    tags: ["Subscriptions", "Loyalty", "Reviews"],
  },
  {
    id: "ecom-04",
    title: "Health Supplements eCommerce Store",
    client: "Nutrition brand, Delhi NCR",
    url: "https://zentryo.in",
    category: "ecommerce",
    service: "eCommerce Solutions",
    industry: "Health & Fitness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    summary: "WooCommerce store with dosage guides, ingredient transparency pages and cart optimisation for higher AOV.",
    highlight: "27%",
    highlightLabel: "growth in average order value",
    status: "Live & Running",
    tags: ["WooCommerce", "AOV Optimisation", "Content Pages"],
  },
  
  

  // ---------------- Software & SaaS ----------------
  
  
  {
    id: "saas-03",
    title: "Inventory & Billing ERP",
    client: "Retail group, Delhi NCR",
    url: "https://studybracket.com",
    category: "software-saas",
    service: "Software & AI",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
    summary: "ERP covering multi-branch inventory, purchase-sales workflows, GST billing and real-time stock visibility.",
    highlight: "6",
    highlightLabel: "branches on one system",
    status: "Live & Running",
    tags: ["ERP", "Inventory", "GST Billing"],
  },
  {
    id: "saas-04",
    title: "EdTech LMS & Assessment Platform",
    client: "Education company, Delhi",
    url: "https://gainrealestate.in",
    category: "software-saas",
    service: "Software & AI",
    industry: "Education",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80",
    summary: "Learning management system with course delivery, mock tests, results analytics and student progress tracking.",
    highlight: "12,000+",
    highlightLabel: "active students on platform",
    status: "Live & Running",
    tags: ["LMS", "Assessments", "Analytics"],
  },
  {
    id: "saas-05",
    title: "Hospital Patient Management System",
    client: "Multi-clinic healthcare provider",
    url: "https://zentryo.in",
    category: "software-saas",
    service: "Software & AI",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    summary: "Patient records, appointment scheduling, billing and doctor rosters unified for a multi-clinic network.",
    highlight: "2.5x",
    highlightLabel: "faster patient turnaround",
    status: "Live & Running",
    tags: ["Custom Software", "Scheduling", "Billing"],
  },
  

  // ---------------- AI & Automation ----------------
  
  

  {
    id: "ai-04",
    title: "Generative AI Brand Content Engine",
    client: "Content marketing agency",
    url: "https://studybracket.com",
    category: "ai-automation",
    service: "Software & AI",
    industry: "Marketing",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    summary: "Internal tool producing on-brand SEO articles, campaign copy and social calendars with human review flow.",
    highlight: "5x",
    highlightLabel: "faster content production",
    status: "Live & Running",
    tags: ["Generative AI", "SEO Content", "Workflow"],
  },
  {
    id: "ai-05",
    title: "AI Search & FAQ Assistant",
    client: "Insurance company, Delhi",
    url: "https://gainrealestate.in",
    category: "ai-automation",
    service: "Software & AI",
    industry: "Insurance",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    summary: "RAG-based assistant answering policy, claims and document questions from the company's own knowledge base.",
    highlight: "47%",
    highlightLabel: "fewer repeat call enquiries",
    status: "Live & Running",
    tags: ["RAG", "Knowledge Base", "AI Assistant"],
  },

  // ---------------- Mobile Apps ----------------
  {
    id: "app-01",
    title: "Food Delivery & Ordering App",
    client: "Restaurant chain, NCR",
    url: "https://zentryo.in",
    category: "mobile-apps",
    service: "Mobile App Development",
    industry: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    summary: "Cross-platform ordering app with menu, cart, live order status, payments and loyalty points.",
    highlight: "25,000+",
    highlightLabel: "app downloads",
    status: "Live & Running",
    tags: ["Flutter", "Payments", "Loyalty"],
  },
  
  
  
  

  // ---------------- SEO & AI SEO ----------------
  {
    id: "seo-01",
    title: "Multi-City Local SEO Expansion",
    client: "Service business, North India",
    url: "https://studybracket.com",
    category: "seo",
    service: "SEO & AI SEO",
    industry: "Services",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    summary: "Local landing pages, GBP profiles and reviews engine driving rankings across 15+ service cities.",
    highlight: "15+",
    highlightLabel: "cities ranking on page 1",
    status: "Live & Running",
    tags: ["Local SEO", "Google Business Profile", "Reviews"],
  },
  {
    id: "seo-02",
    title: "Enterprise SEO for Education Group",
    client: "Education group, Delhi NCR",
    url: "https://gainrealestate.in",
    category: "seo",
    service: "SEO & AI SEO",
    industry: "Education",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    summary: "Technical + content programme across course pages moving high-value admission keywords to page 1.",
    highlight: "7.9M+",
    highlightLabel: "monthly organic impressions",
    status: "Live & Running",
    tags: ["Technical SEO", "Content", "AI SEO"],
  },
  {
    id: "seo-03",
    title: "eCommerce SEO & Product Visibility",
    client: "Fashion D2C brand",
    url: "https://zentryo.in",
    category: "seo",
    service: "SEO & AI SEO",
    industry: "Fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    summary: "Category architecture, product descriptions and schema driving non-brand organic revenue.",
    highlight: "3.4x",
    highlightLabel: "non-brand organic revenue",
    status: "Live & Running",
    tags: ["eCommerce SEO", "Schema", "Content"],
  },
 
  


  // ---------------- Paid Media & Social ----------------

  {
    id: "paid-02",
    title: "Meta Ads for D2C Product Launch",
    client: "Beauty brand, Delhi",
    url: "https://studybracket.com",
    category: "paid-media",
    service: "Ads / PPC",
    industry: "Beauty",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
    summary: "Creative testing and audience scaling for a new product drop with ROAS-focused management.",
    highlight: "4.6x",
    highlightLabel: "ROAS at scale",
    status: "Live & Running",
    tags: ["Meta Ads", "Creative Testing", "ROAS"],
  },
  {
    id: "paid-03",
    title: "YouTube & Performance Campaigns",
    client: "EdTech platform, Delhi",
    url: "https://gainrealestate.in",
    category: "paid-media",
    service: "Paid Media",
    industry: "Education",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80",
    summary: "YouTube lead campaigns and remarketing funnels delivering course enrolments at target CAC.",
    highlight: "1,800+",
    highlightLabel: "enrolments generated",
    status: "Live & Running",
    tags: ["YouTube Ads", "Remarketing", "CAC"],
  },
  {
    id: "paid-04",
    title: "LinkedIn Ads for B2B Outreach",
    client: "Software services company",
    url: "https://zentryo.in",
    category: "paid-media",
    service: "Ads / PPC",
    industry: "B2B Tech",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    summary: "Account-based LinkedIn campaigns targeting decision-makers with demo-request conversion flow.",
    highlight: "3.1x",
    highlightLabel: "demo requests vs previous",
    status: "Live & Running",
    tags: ["LinkedIn Ads", "ABM", "Demo Flow"],
  },
  
  

  // ---------------- Content & Design ----------------
 
  {
    id: "content-03",
    title: "SEO Content Programme for Blog",
    client: "Finance advisory, India",
    url: "https://studybracket.com",
    category: "content-design",
    service: "Content",
    industry: "Finance",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    summary: "Topic-cluster articles and refresh strategy moving advisory content into featured positions.",
    highlight: "183%",
    highlightLabel: "organic content traffic growth",
    status: "Live & Running",
    tags: ["Content Marketing", "Topic Clusters", "Refresh"],
  },
  {
    id: "content-04",
    title: "Ad Creatives & Landing Pages",
    client: "Performance brand, NCR",
    url: "https://gainrealestate.in",
    category: "content-design",
    service: "Design & Creative",
    industry: "eCommerce",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    summary: "Campaign creatives and matching landing pages designed, built and A/B tested as one system.",
    highlight: "3.8x",
    highlightLabel: "higher CTR on new creative",
    status: "Live & Running",
    tags: ["Campaign Creative", "Landing Pages", "A/B Testing"],
  },
  {
    id: "content-05",
    title: "eCommerce Packaging & Brand Design",
    client: "Skincare D2C brand",
    url: "https://zentryo.in",
    category: "content-design",
    service: "Design & Creative",
    industry: "Beauty",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
    summary: "Packaging labels, social creatives and unboxing collateral unifying a premium brand feel.",
    highlight: "92%",
    highlightLabel: "review score uplift after refresh",
    status: "Live & Running",
    tags: ["Packaging", "Social Creatives", "Brand"],
  },

  // ---------------- Cloud, Hosting & DevOps ----------------
  
  
  
  {
    id: "cloud-05",
    title: "Managed Hosting & Server Security",
    client: "Financial services firm, Delhi",
    url: "https://studybracket.com",
    category: "cloud-devops",
    service: "Hosting & Migration",
    industry: "Finance",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
    summary: "Hardened server configuration, backups, DDoS protection and 24/7 monitoring for compliance-heavy workloads.",
    highlight: "0",
    highlightLabel: "security incidents since onboarding",
    status: "Live & Running",
    tags: ["Managed Hosting", "Security", "Backups"],
  },

  // ---------------- Maintenance & Reputation ----------------
  {
    id: "support-01",
    title: "Ongoing Website Maintenance Plan",
    client: "Corporate client, NCR",
    url: "https://gainrealestate.in",
    category: "support-reputation",
    service: "Maintenance & Support",
    industry: "Corporate",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
    summary: "Monthly updates, backups, security patching and performance tuning across the client's website estate.",
    highlight: "100%",
    highlightLabel: "scheduled uptime maintained",
    status: "Live & Running",
    tags: ["Updates", "Backups", "Security"],
  },
  {
    id: "support-02",
    title: "App & Software Support Retainer",
    client: "Logistics SaaS, Delhi",
    url: "https://zentryo.in",
    category: "support-reputation",
    service: "Maintenance & Support",
    industry: "Logistics",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    summary: "SLA-based support covering bug fixes, releases, monitoring and quarterly improvements.",
    highlight: "2h",
    highlightLabel: "average critical issue response",
    status: "Live & Running",
    tags: ["SLA Support", "Bug Fixes", "Monitoring"],
  },
  
  
  
];

export function getProjectCategoryLabel(key: string): string {
  return projectCategories.find((c) => c.key === key)?.label ?? key;
}
