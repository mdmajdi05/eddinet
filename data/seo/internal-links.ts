// AUTO-GENERATED from data/seo/internal-linking-plan.xlsx
// Do not edit by hand. Regenerate with scripts/generate-internal-links.py
//
// The SEO plan maps every indexed page (source) to the non-indexed pages
// (target) it should link to. Rendering these as real <a> elements gives
// Google a crawl path to pages that are currently only discoverable via
// the sitemap, which is the main cause of "Discovered - currently not indexed".

export type InternalLinkKind = "Article" | "Portfolio" | "Service" | "Services" | "Page";

export interface InternalLink {
  href: string;
  label: string;
  kind: InternalLinkKind;
  priority: "P1" | "P2" | "P3";
}

export const internalLinkPlan: Record<string, InternalLink[]> = {
  "/": [
    {
      href: "/blog",
      label: "latest insights",
      kind: "Page",
      priority: "P1",
    },
    {
      href: "/portfolio",
      label: "our work",
      kind: "Portfolio",
      priority: "P1",
    },
    {
      href: "/services",
      label: "our services",
      kind: "Services",
      priority: "P1",
    },
  ],
  "/about": [
    {
      href: "/portfolio",
      label: "see our work",
      kind: "Portfolio",
      priority: "P1",
    },
    {
      href: "/services",
      label: "explore all our services",
      kind: "Services",
      priority: "P1",
    },
  ],
  "/blog/building-fast-websites-that-convert": [
    {
      href: "/services",
      label: "web development and optimization services",
      kind: "Services",
      priority: "P1",
    },
    {
      href: "/services/content",
      label: "content services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/web-development",
      label: "web development services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/seo/technical-seo-services-in-delhi-ncr",
      label: "technical SEO services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/blog/digital-marketing-agency-in-delhi-ncr": [
    {
      href: "/services",
      label: "our full range of digital services",
      kind: "Services",
      priority: "P1",
    },
    {
      href: "/blog/7-critical-questions-to-ask-an-seo-agency",
      label: "questions to ask an SEO agency",
      kind: "Article",
      priority: "P2",
    },
    {
      href: "/services/seo/enterprise-seo-services-in-delhi-ncr",
      label: "enterprise SEO services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/lead-generation-seo-services-in-india",
      label: "lead generation SEO",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/blog/google-ads-cost-in-india-cpc-benchmarks-by-industry": [
    {
      href: "/services/ads-ppc",
      label: "our PPC services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/ads-ppc/best-google-ads-services-in-india",
      label: "Google Ads services in India",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/blog/how-generative-ai-is-reshaping-seo": [
    {
      href: "/services/seo",
      label: "SEO services in Delhi NCR",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/software-ai",
      label: "AI development services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/ads-ppc/chatgpt-ads-services-in-india",
      label: "advertising inside ChatGPT",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/ai-seo-generative-seo-service-in-delhi-ncr",
      label: "generative SEO services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/programmatic-seo-services-in-delhi-ncr",
      label: "programmatic SEO services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/ai-agents-development-company-in-india",
      label: "AI agents development company",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/ai-chatbot-development-company-in-india",
      label: "AI chatbot development company",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/generative-ai-solutions-company-in-india",
      label: "generative AI solutions",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/blog/is-seo-worth-it-for-small-businesses-in-india": [
    {
      href: "/services/seo",
      label: "our SEO services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/blog/7-critical-questions-to-ask-an-seo-agency",
      label: "how to choose an SEO agency",
      kind: "Article",
      priority: "P2",
    },
    {
      href: "/services/seo/b2b-seo-services-in-delhi-ncr",
      label: "B2B SEO services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/international-seo-services-in-delhi-ncr",
      label: "international SEO services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/local-seo-services-in-delhi-ncr",
      label: "local SEO services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/blog/lowering-google-ads-cpa-a-practical-framework": [
    {
      href: "/services/ads-ppc",
      label: "PPC management services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/ads-ppc/best-google-ads-services-in-india",
      label: "professional Google Ads management",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/ads-ppc/lead-generation-services-in-india",
      label: "lead generation services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/portfolio/seo": [
    {
      href: "/portfolio",
      label: "view all portfolio",
      kind: "Portfolio",
      priority: "P1",
    },
    {
      href: "/services/seo/shopify-seo-services-in-delhi-ncr",
      label: "Shopify SEO",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/portfolio/ecommerce",
      label: "ecommerce case studies",
      kind: "Portfolio",
      priority: "P3",
    },
    {
      href: "/portfolio/paid-media",
      label: "paid media case studies",
      kind: "Portfolio",
      priority: "P3",
    },
  ],
  "/portfolio/websites": [
    {
      href: "/portfolio",
      label: "view all portfolio",
      kind: "Portfolio",
      priority: "P1",
    },
    {
      href: "/portfolio/ai-automation",
      label: "AI & automation case studies",
      kind: "Portfolio",
      priority: "P3",
    },
    {
      href: "/portfolio/cloud-devops",
      label: "cloud & DevOps case studies",
      kind: "Portfolio",
      priority: "P3",
    },
    {
      href: "/portfolio/content-design",
      label: "content & design case studies",
      kind: "Portfolio",
      priority: "P3",
    },
    {
      href: "/portfolio/mobile-apps",
      label: "mobile app case studies",
      kind: "Portfolio",
      priority: "P3",
    },
    {
      href: "/portfolio/software-saas",
      label: "software & SaaS case studies",
      kind: "Portfolio",
      priority: "P3",
    },
  ],
  "/services/ads-ppc/meta-ads-services-in-india": [
    {
      href: "/services/ads-ppc",
      label: "paid media services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/ads-ppc/amazon-ads-agency-in-india",
      label: "Amazon Ads agency",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/ads-ppc/chatgpt-ads-services-in-india",
      label: "ChatGPT ads services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/portfolio/paid-media",
      label: "paid media results",
      kind: "Portfolio",
      priority: "P3",
    },
  ],
  "/services/ads-ppc/remarketing-and-retargeting-ads-services-in-india": [
    {
      href: "/services/ads-ppc/lead-generation-services-in-india",
      label: "paid lead generation campaigns",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/design-creative/banner-design-services-in-delhi",
      label: "banner design services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/ecommerce/ecommerce-ppc-services-in-india",
      label: "ecommerce PPC services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/ecommerce/ecommerce-shipping-integration-in-india",
      label: "ecommerce shipping integration",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/ads-ppc/youtube-ads-agency-in-india": [
    {
      href: "/services/ads-ppc",
      label: "Ads & PPC services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/ads-ppc/linkedin-ads-agency-in-india",
      label: "LinkedIn advertising",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/design-creative/video-editing-services-in-delhi",
      label: "video editing for YouTube ads",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/social-media-marketing/youtube-management-services-in-india",
      label: "YouTube management services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/cloud-devops/ci-cd-pipeline-services-company-in-india": [
    {
      href: "/services/software-ai/business-process-automation-services-in-india",
      label: "process automation",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/custom-crm-development-company-in-india",
      label: "custom CRM development",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/generative-ai-solutions-company-in-india",
      label: "generative AI development",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/llm-integration-services-in-india",
      label: "integrating LLMs into your stack",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/saas-product-development-company-in-india",
      label: "building a SaaS product",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/cloud-devops/cloud-infrastructure-services-company-in-india": [
    {
      href: "/services/cloud-devops",
      label: "Cloud & DevOps services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/cloud-devops/aws-cloud-services-company-in-india",
      label: "AWS cloud services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/cloud-devops/cloud-migration-services-company-in-india",
      label: "cloud migration services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/cloud-hosting-services-in-india",
      label: "managed cloud hosting",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/portfolio/cloud-devops",
      label: "our cloud and DevOps projects",
      kind: "Portfolio",
      priority: "P3",
    },
  ],
  "/services/cloud-devops/docker-deployment-services-company-in-india": [
    {
      href: "/services/cloud-devops/linux-server-management-services-in-india",
      label: "managed Linux servers",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/cloud-devops/server-setup-services-company-in-india",
      label: "server setup services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/vps-hosting-in-india",
      label: "VPS hosting plans",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/cloud-devops/kubernetes-services-company-in-india": [
    {
      href: "/services/cloud-devops/aws-cloud-services-company-in-india",
      label: "AWS cloud services company in India",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/cloud-devops/load-balancing-services-company-in-india",
      label: "load balancing services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/cloud-devops/monitoring-and-logging-services-in-india": [
    {
      href: "/services/cloud-devops/linux-server-management-services-in-india",
      label: "Linux server management",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/cloud-devops/server-security-services-in-india",
      label: "hardening your servers",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/maintenance-support/server-maintenance-services-in-india",
      label: "proactive server maintenance",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/content/blog-content-services-in-delhi-ncr": [
    {
      href: "/services/ecommerce/marketplace-integration-services-in-delhi-ncr",
      label: "marketplace integration services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/amazon-seo-services-in-delhi-ncr",
      label: "Amazon listing SEO",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/programmatic-seo-services-in-delhi-ncr",
      label: "programmatic SEO",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/content/campaign-content-services-in-delhi-ncr": [
    {
      href: "/services/design-creative/brochure-design-services-in-delhi",
      label: "print brochure design",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/content/case-study-writing-services-in-delhi-ncr": [
    {
      href: "/services/design-creative/presentation-design-services-in-delhi-ncr",
      label: "presentation design services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/social-media-marketing/linkedin-management-services-in-delhi-ncr",
      label: "LinkedIn page management",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/ai-integration-services-in-india",
      label: "AI integration services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/custom-erp-development-company-in-india",
      label: "custom ERP development",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/portfolio/content-design",
      label: "content and design work",
      kind: "Portfolio",
      priority: "P3",
    },
  ],
  "/services/content/content-marketing-services-in-delhi-ncr": [
    {
      href: "/services/content",
      label: "content services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/seo/lead-generation-seo-services-in-india",
      label: "SEO that generates leads",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/shopify-seo-services-in-delhi-ncr",
      label: "Shopify SEO services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/content/content-refresh-services-in-delhi-ncr": [
    {
      href: "/services/content/content-audit-services-in-delhi-ncr",
      label: "content audit services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/content/content-strategy-services-in-delhi-ncr": [
    {
      href: "/services/content",
      label: "all content services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/content/content-audit-services-in-delhi-ncr",
      label: "a full content audit",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/design-creative/presentation-design-services-in-delhi-ncr",
      label: "designed sales and pitch decks",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/enterprise-seo-services-in-delhi-ncr",
      label: "enterprise SEO",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/content/seo-content-services-in-delhi-ncr": [
    {
      href: "/services/seo",
      label: "SEO services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/seo/amazon-seo-services-in-delhi-ncr",
      label: "Amazon SEO services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/b2b-seo-services-in-delhi-ncr",
      label: "B2B SEO",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/content/social-content-services-in-delhi-ncr": [
    {
      href: "/services/design-creative",
      label: "creative design services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/social-media-marketing",
      label: "social media marketing",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/design-creative/social-media-creatives-and-design-services-company-in-delhi",
      label: "social media design services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/social-media-marketing/social-media-strategy-services-in-delhi-ncr",
      label: "social media strategy",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/content/website-content-services-in-delhi-ncr": [
    {
      href: "/services/content/landing-page-copy-services-in-delhi-ncr",
      label: "conversion-focused landing page copy",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/international-seo-services-in-delhi-ncr",
      label: "international SEO and hreflang",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/design-creative/logo-design-services-in-delhi-by-eddinet": [
    {
      href: "/services/design-creative",
      label: "design and creative services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/design-creative/banner-design-services-in-delhi",
      label: "banner and ad creatives",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/design-creative/brand-identity-design-in-delhi",
      label: "brand identity design",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/design-creative/brochure-design-services-in-delhi",
      label: "brochure design services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/design-creative/graphic-design-services-in-delhi-ncr",
      label: "graphic design services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/design-creative/motion-graphics-services-in-delhi": [
    {
      href: "/services/design-creative/catalogue-design-services-in-delhi",
      label: "product catalogue design",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/design-creative/graphic-design-services-in-delhi-ncr",
      label: "our graphic design team",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/design-creative/product-design-services-in-delhi",
      label: "digital product design",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/design-creative/video-editing-services-in-delhi",
      label: "video editing services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/social-media-marketing/youtube-management-services-in-india",
      label: "YouTube channel management",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/ecommerce/amazon-store-development-services-in-delhi-ncr": [
    {
      href: "/services/ecommerce",
      label: "ecommerce services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/ads-ppc/amazon-ads-agency-in-india",
      label: "Amazon advertising for your store",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/design-creative/catalogue-design-services-in-delhi",
      label: "catalogue design services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/ecommerce/ecommerce-inventory-integration-in-india",
      label: "ecommerce inventory integration",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/ecommerce/ecommerce-migration-services-in-delhi-ncr",
      label: "ecommerce migration services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/portfolio/ecommerce",
      label: "our ecommerce projects",
      kind: "Portfolio",
      priority: "P3",
    },
  ],
  "/services/hosting-migration/application-hosting-services-company-in-india": [
    {
      href: "/services/cloud-devops",
      label: "cloud and DevOps services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/hosting-migration",
      label: "hosting and migration services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/cloud-devops/server-setup-services-company-in-india",
      label: "production server setup",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/cloud-hosting-services-in-india",
      label: "cloud hosting services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/database-hosting-services-in-india",
      label: "hosted databases",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/domain-and-dns-management-services-in-india",
      label: "domain and DNS management",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/hosting-migration/database-migration-services-in-india": [
    {
      href: "/services/cloud-devops/cloud-migration-services-company-in-india",
      label: "migrating workloads to the cloud",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/ecommerce/ecommerce-migration-services-in-delhi-ncr",
      label: "ecommerce store migration",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/database-hosting-services-in-india",
      label: "database hosting services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/hosting-migration-services-in-india",
      label: "hosting migration services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/shopify-migration-services-in-india",
      label: "Shopify migration services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/website-migration-services-in-india",
      label: "website migration services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/maintenance-support": [
    {
      href: "/services/hosting-migration",
      label: "hosting & migration services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/hosting-migration/managed-hosting-services-in-india",
      label: "fully managed hosting",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/maintenance-support/application-maintenance-services-in-india",
      label: "application maintenance services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/maintenance-support/website-backup-services-company-in-delhi",
      label: "automated website backups",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/maintenance-support/website-maintenance-services-in-india",
      label: "website maintenance services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/portfolio/support-reputation",
      label: "support and maintenance case studies",
      kind: "Portfolio",
      priority: "P3",
    },
  ],
  "/services/maintenance-support/website-disaster-recovery-services-in-india": [
    {
      href: "/services/hosting-migration/wordpress-migration-services-in-india",
      label: "migrating your WordPress site",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/maintenance-support/emergency-website-support-services-in-india",
      label: "emergency website support",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/maintenance-support/website-backup-services-company-in-delhi",
      label: "website backup services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/maintenance-support/website-performance-monitoring-and-optimization-in-india": [
    {
      href: "/services/maintenance-support/website-bug-fixing-services-in-india",
      label: "fast bug fixing",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/maintenance-support/website-security-update-services-in-india",
      label: "regular security patching",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/maintenance-support/website-security-monitoring-services-in-india": [
    {
      href: "/services/cloud-devops/server-security-services-in-india",
      label: "server security services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/maintenance-support/website-security-update-services-in-india",
      label: "website security updates",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/maintenance-support/website-technical-support-services-in-india": [
    {
      href: "/services/maintenance-support/emergency-website-support-services-in-india",
      label: "24/7 emergency support",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/maintenance-support/website-bug-fixing-services-in-india",
      label: "website bug fixing services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/maintenance-support/website-uptime-monitoring-services-in-india": [
    {
      href: "/services/cloud-devops/load-balancing-services-company-in-india",
      label: "load balancing for high availability",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/domain-and-dns-management-services-in-india",
      label: "DNS management and failover",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/maintenance-support/server-maintenance-services-in-india",
      label: "server maintenance services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/mobile-app-development/custom-mobile-app-development-services-in-india": [
    {
      href: "/services/mobile-app-development",
      label: "mobile app development services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/design-creative/product-design-services-in-delhi",
      label: "product design services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/mobile-app-development/android-app-development-company-in-india",
      label: "Android app development company",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/mobile-app-development/mobile-app-api-integration-services-in-india",
      label: "mobile app API integration",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/mobile-app-development/mobile-app-ui-ux-design-services-in-india",
      label: "mobile app UI/UX design",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/portfolio/mobile-apps",
      label: "apps we have built",
      kind: "Portfolio",
      priority: "P3",
    },
  ],
  "/services/mobile-app-development/flutter-app-development-company-in-india": [
    {
      href: "/services/mobile-app-development/android-app-development-company-in-india",
      label: "native Android development",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/mobile-app-development/cross-platform-app-development-services-in-india",
      label: "cross-platform app development",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/mobile-app-development/ios-app-development-company-in-india": [
    {
      href: "/services/mobile-app-development/mobile-app-maintenance-and-support-services-in-india",
      label: "post-launch app support",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/mobile-app-development/mobile-app-migration-services-in-india",
      label: "mobile app migration services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/mobile-app-development/mobile-app-ui-ux-design-services-in-india",
      label: "app UI/UX design",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/mobile-app-development/mobile-app-deployment-services-in-india": [
    {
      href: "/services/maintenance-support/application-maintenance-services-in-india",
      label: "ongoing application maintenance",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/mobile-app-development/mobile-app-maintenance-and-support-services-in-india",
      label: "mobile app maintenance and support",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/mobile-app-development/mobile-app-migration-services-in-india",
      label: "migrating an existing app",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/mobile-app-development/react-native-app-development-company-in-india": [
    {
      href: "/services/mobile-app-development/cross-platform-app-development-services-in-india",
      label: "cross-platform mobile apps",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/mobile-app-development/mobile-app-backend-development-services-in-india",
      label: "mobile app backend development",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/business-process-automation-services-in-india",
      label: "business process automation services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/custom-software-development-company-in-india",
      label: "bespoke software development",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/rag-application-development-company-in-india",
      label: "RAG application development",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/reputation-management/brand-reputation-management-services-in-india": [
    {
      href: "/services/reputation-management",
      label: "reputation management services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/design-creative/brand-identity-design-in-delhi",
      label: "building a consistent brand identity",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/reputation-management/google-review-management-services-in-india",
      label: "managing Google reviews",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/reputation-management/online-reputation-management-services-in-india",
      label: "online reputation management",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/portfolio/support-reputation",
      label: "reputation management results",
      kind: "Portfolio",
      priority: "P3",
    },
  ],
  "/services/reputation-management/business-listing-management-services-in-india": [
    {
      href: "/services/reputation-management/google-business-profile-management-services-in-india",
      label: "Google Business Profile management",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/reputation-management/online-review-monitoring-services-in-india",
      label: "review monitoring across platforms",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/local-seo-services-in-delhi-ncr",
      label: "local SEO",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/reputation-management/customer-feedback-management-services-in-india": [
    {
      href: "/services/reputation-management/google-review-management-services-in-india",
      label: "Google review management",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/reputation-management/online-review-monitoring-services-in-india",
      label: "online review monitoring",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/reputation-management/review-generation-services-in-india",
      label: "review generation services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/reputation-management/digital-presence-management-services-in-india": [
    {
      href: "/services/reputation-management/google-business-profile-management-services-in-india",
      label: "optimising your Google Business Profile",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/reputation-management/online-reputation-management-services-in-india",
      label: "online reputation management services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/seo/ecommerce-seo-services-in-delhi-ncr": [
    {
      href: "/services/ecommerce",
      label: "ecommerce services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/seo",
      label: "SEO services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/ecommerce/ecommerce-optimization-services-in-india",
      label: "ecommerce optimization services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/ecommerce/ecommerce-ppc-services-in-india",
      label: "paid campaigns for online stores",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/ecommerce/woocommerce-development-services-in-delhi",
      label: "WooCommerce store development",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/ai-seo-generative-seo-service-in-delhi-ncr",
      label: "AI SEO services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/social-media-marketing/facebook-and-instagram-management-services-in-india": [
    {
      href: "/services/design-creative/social-media-creatives-and-design-services-company-in-delhi",
      label: "social media creatives",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/reputation-management/review-generation-services-in-india",
      label: "getting more customer reviews",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/social-media-marketing/social-media-management-agency-in-india": [
    {
      href: "/services/reputation-management",
      label: "online reputation management",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/social-media-marketing",
      label: "social media marketing services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/ads-ppc/linkedin-ads-agency-in-india",
      label: "LinkedIn Ads agency",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/social-media-marketing/linkedin-management-services-in-delhi-ncr",
      label: "LinkedIn management services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/social-media-marketing/social-media-strategy-services-in-delhi-ncr",
      label: "social media strategy services",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/software-ai/api-development-company-in-india": [
    {
      href: "/services/software-ai",
      label: "software and AI development",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/ecommerce/ecommerce-inventory-integration-in-india",
      label: "inventory sync via API",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/ecommerce/ecommerce-shipping-integration-in-india",
      label: "shipping carrier integrations",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/ecommerce/marketplace-integration-services-in-delhi-ncr",
      label: "multi-marketplace integrations",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/ecommerce/payment-gateway-integration-services-in-india",
      label: "secure payment integrations",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/mobile-app-development/mobile-app-api-integration-services-in-india",
      label: "connecting your app via APIs",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/web-development/custom-website-design-services-in-delhi": [
    {
      href: "/services/ecommerce/payment-gateway-integration-services-in-india",
      label: "payment gateway integration",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/ai-integration-services-in-india",
      label: "integrating AI into your product",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/business-management-software-development-company-in-india",
      label: "custom business management software",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/custom-crm-development-company-in-india",
      label: "a custom CRM",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/custom-erp-development-company-in-india",
      label: "custom ERP software",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/software-ai/custom-software-development-company-in-india",
      label: "custom software development company",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/web-development/landing-page-design-services-in-india": [
    {
      href: "/services/content/landing-page-copy-services-in-delhi-ncr",
      label: "landing page copywriting",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/design-creative/ui-ux-design-services-in-delhi",
      label: "UI/UX design",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/ecommerce/ecommerce-website-development-in-india",
      label: "building your online store",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/web-development/website-development-services-in-delhi": [
    {
      href: "/services/mobile-app-development",
      label: "mobile app development",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/web-development",
      label: "web development services",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/ecommerce/ecommerce-website-development-in-india",
      label: "ecommerce website development",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/web-development/custom-web-application-development-company-in-delhi",
      label: "custom web applications",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/web-development/shopify-development-company-in-delhi",
      label: "Shopify website development",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/web-development/website-optimization-services-company-in-delhi": [
    {
      href: "/services/web-development",
      label: "web development",
      kind: "Service",
      priority: "P1",
    },
    {
      href: "/services/ecommerce/ecommerce-optimization-services-in-india",
      label: "ecommerce conversion optimization",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/seo/technical-seo-services-in-delhi-ncr",
      label: "technical SEO audit",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/web-development/website-redesign-services-in-india": [
    {
      href: "/services/design-creative/ui-ux-design-services-in-delhi",
      label: "UI/UX design services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/shopify-migration-services-in-india",
      label: "migrating your store to Shopify",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/website-migration-services-in-india",
      label: "a safe website migration",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/maintenance-support/website-maintenance-services-in-india",
      label: "ongoing website maintenance",
      kind: "Service",
      priority: "P2",
    },
  ],
  "/services/web-development/wordpress-development-company-in-delhi": [
    {
      href: "/services/ecommerce/woocommerce-development-services-in-delhi",
      label: "WooCommerce development services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/website-hosting-services-in-india",
      label: "reliable website hosting",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/hosting-migration/wordpress-migration-services-in-india",
      label: "WordPress migration services",
      kind: "Service",
      priority: "P2",
    },
    {
      href: "/services/web-development/shopify-development-company-in-delhi",
      label: "Shopify development company",
      kind: "Service",
      priority: "P2",
    },
  ],
};
