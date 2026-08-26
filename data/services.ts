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
    icon: "🔍",
    title: "SEO & AI SEO",
    desc: "Dominate Google Page #1 with advanced SEO services including AI-powered Generative SEO, Technical SEO audits, Local GMB optimization, high-authority link building, and data-driven keyword strategies. Our SEO experts combine cutting-edge AI tools with proven white-hat techniques to drive organic traffic, generate qualified leads, and maximize your search visibility across competitive markets.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=500&q=80",
    link: "Get SEO Audit →",
    tabLabel: "SEO",
    footerLabel: "Search Engine Optimization",
    allItems: ["SEO", "AI SEO (Generative SEO)", "Lead Generation SEO", "Local SEO", "Enterprise SEO", "B2B SEO", "Technical SEO", "Link Building", "International SEO", "Programmatic SEO", "Amazon SEO", "eCommerce SEO", "Shopify SEO"],
  },
  {
    cat: "social",
    icon: "📱",
    title: "Social Media Marketing",
    desc: "Build a powerful social media presence with end-to-end social media management, content strategy, and performance advertising across Facebook, Instagram, LinkedIn, and YouTube. From viral reel creation and community engagement to Meta Ads and YouTube advertising, we craft data-backed social campaigns that boost brand awareness, drive engagement, and convert followers into loyal customers.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80",
    link: "Boost Social Reach →",
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
    icon: "📊",
    title: "Ads / PPC & Content",
    desc: "Maximize your advertising ROI with performance marketing campaigns on Google Ads, Meta Ads, YouTube Ads, Amazon Ads, and LinkedIn Ads. Our PPC specialists implement data-driven bidding strategies, precision audience targeting, A/B tested ad creatives, and conversion-optimized landing pages to lower your cost-per-acquisition while scaling profitable ad spend across all paid channels.",
    image: "https://images.unsplash.com/photo-1553729459-uj0gfqcewkfd?w=500&q=80",
    link: "Launch Ads Campaign →",
    tabLabel: "Ads / PPC",
    footerLabel: "Google & Meta PPC Ads",
    allItems: ["Google Ads", "Meta Ads", "YouTube Ads", "Amazon Ads", "LinkedIn Ads", "Lead Generation Ads", "Remarketing / Retargeting", "PPC Management", "Content Writing", "Website Content", "SEO Content"],
    extraHeading: { icon: "✍️", title: "CONTENT", items: ["Content Writing", "Website Content", "SEO Content"] },
  },
  {
    cat: "design",
    icon: "🎨",
    title: "Design & Creative",
    desc: "Create stunning visual identities and digital experiences with our expert design team specializing in graphic designing, logo design, brand identity, UI/UX design, and social media creatives. From motion graphics and video editing to brochure and catalogue design, we deliver creative assets that captivate audiences, strengthen brand recall, and drive higher conversion rates.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
    link: "See Our Work →",
    tabLabel: "Design",
    footerLabel: "Creative Design",
    allItems: ["Graphic Designing", "Logo Designing", "Brand Identity Design", "UI/UX Design", "Social Media Creatives", "Banner Design", "Brochure Design", "Catalogue Design", "Presentation Design", "Video Editing", "Motion Graphics", "Product Design"],
  },
  {
    cat: "web",
    icon: "💻",
    title: "Web Development",
    desc: "Build lightning-fast, mobile-responsive, conversion-focused websites with modern frameworks like React, Next.js, WordPress, Shopify, and WooCommerce. Our web development team creates custom business websites, corporate portals, landing pages, and web applications optimized for Core Web Vitals, SEO performance, and maximum lead generation.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
    link: "Build Your Website →",
    tabLabel: "Web Dev",
    footerLabel: "Web Design & Tech",
    allItems: ["Custom Website Design", "Website Development", "Business Website", "Corporate Website", "Landing Page Design", "WordPress Development", "Shopify Development", "WooCommerce Development", "Custom Web Application", "Website Redesign", "Website Rebuild", "Website Upgrade", "Website Optimization"],
  },
  {
    cat: "ecommerce",
    icon: "🛒",
    title: "eCommerce Solutions",
    desc: "Launch and scale your online store with complete eCommerce solutions including Shopify web design, WooCommerce development, payment gateway integration, shipping setup, and Amazon store development. Our eCommerce experts handle marketplace integration, inventory management, and optimization to maximize your online revenue and create seamless shopping experiences.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80",
    link: "Start Selling Online →",
    tabLabel: "eCommerce",
    footerLabel: "eCommerce Solutions",
    allItems: ["eCommerce Website", "eCommerce SEO", "eCommerce PPC", "eCommerce Optimization", "Shopify Web Design", "WooCommerce Development", "Payment Gateway Integration", "Shipping Integration", "Inventory Integration", "Marketplace Integration", "Amazon Store Development", "eCommerce Migration"],
  },
  {
    cat: "mobile",
    icon: "📲",
    title: "Mobile App Development",
    desc: "Develop high-performance native and cross-platform mobile applications for Android and iOS using Flutter, React Native, and Swift. Our mobile app development team handles everything from app UI/UX design and backend development to API integration, app store deployment, and ongoing maintenance to ensure flawless performance and user engagement.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80",
    link: "Build Your App →",
    tabLabel: "Mobile Apps",
    footerLabel: "Mobile App Development",
    allItems: ["Android App Development", "iOS App Development", "Flutter App Development", "React Native Development", "Cross-Platform Apps", "Custom Mobile Apps", "App UI/UX Design", "App Backend Development", "API Integration", "App Migration", "App Deployment", "App Maintenance"],
  },
  {
    cat: "software",
    icon: "🤖",
    title: "Software & AI Solutions",
    desc: "Transform your business with custom software development, SaaS platforms, CRM systems, ERP solutions, and AI-powered automation. Our software engineers build scalable applications with AI chatbot development, AI agents, generative AI solutions, LLM integration, and RAG applications to streamline operations, reduce costs, and accelerate digital transformation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80",
    link: "Automate Workflows →",
    tabLabel: "Software & AI",
    footerLabel: "AI Automation",
    allItems: ["Custom Software Development", "SaaS Development", "CRM Development", "ERP Development", "Business Management Software", "API Development", "REST API Development", "AI Integration", "AI Chatbot Development", "AI Agents", "Generative AI Solutions", "RAG Applications", "LLM Integration", "Business Automation"],
  },
  {
    cat: "cloud",
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "Build scalable, secure, and high-availability cloud infrastructure with AWS, Docker, Kubernetes, and CI/CD pipeline automation. Our DevOps engineers handle cloud migration, server setup, load balancing, monitoring, logging, and server security to ensure 99.9% uptime, faster deployments, and optimized infrastructure costs for your business.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
    link: "Migrate to Cloud →",
    tabLabel: "Cloud & DevOps",
    footerLabel: "Cloud Infrastructure",
    allItems: ["AWS Cloud Services", "Cloud Infrastructure", "Cloud Migration", "VPS Setup", "Server Setup", "Linux Server Management", "Docker Deployment", "Kubernetes", "CI/CD Pipeline", "GitHub Actions", "Jenkins", "Nginx Configuration", "Load Balancing", "Monitoring & Logging", "Server Security"],
  },
  {
    cat: "hosting",
    icon: "🌐",
    title: "Hosting & Migration",
    desc: "Get reliable, high-performance website hosting with VPS hosting, cloud hosting, managed hosting, and dedicated server solutions. Our hosting experts handle domain and DNS management, SSL/HTTPS setup, website migration, hosting migration, and database migration with zero downtime to ensure your site stays fast, secure, and always online.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80",
    link: "Host Your Site →",
    tabLabel: "Hosting",
    footerLabel: "Website Hosting",
    allItems: ["Website Hosting", "VPS Hosting", "Cloud Hosting", "Managed Hosting", "Application Hosting", "Database Hosting", "Domain & DNS Management", "SSL / HTTPS Setup", "Website Migration", "Hosting Migration", "Server Migration", "Cloud Migration", "Database Migration", "WordPress Migration", "Shopify Migration"],
  },
  {
    cat: "maintenance",
    icon: "🛠️",
    title: "Maintenance & Support",
    desc: "Keep your website and applications running smoothly with 24/7 maintenance, bug fixing, security updates, performance optimization, and emergency support. Our technical team provides uptime monitoring, security monitoring, disaster recovery, website backups, and server maintenance to protect your digital assets and ensure maximum availability.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80",
    link: "Get Support →",
    tabLabel: "Maintenance",
    footerLabel: "Technical Support",
    allItems: ["Website Maintenance", "Application Maintenance", "Server Maintenance", "Bug Fixing", "Security Updates", "Performance Optimization", "Website Backup", "Disaster Recovery", "Uptime Monitoring", "Security Monitoring", "Technical Support", "Emergency Support"],
  },
  {
    cat: "reputation",
    icon: "⭐",
    title: "Reputation Management",
    desc: "Protect and enhance your brand's online reputation with Google Business Profile optimization, review management, review generation, and online reputation management. Our reputation experts handle brand reputation management, customer feedback systems, business listing management, and digital presence management to build trust and attract more customers.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80",
    link: "Manage Reputation →",
    tabLabel: "Reputation",
    footerLabel: "Online Reputation",
    allItems: ["Google Business Profile", "Google Review Management", "Review Generation", "Review Monitoring", "Online Reputation Management", "Brand Reputation Management", "Customer Feedback Management", "Business Listing Management", "Digital Presence Management"],
  },
];

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
];

export const footerServices = ["Search Engine Optimization", "Google & Meta PPC Ads", "Social Media Growth", "Web Design & Tech", "AI Automation"];
