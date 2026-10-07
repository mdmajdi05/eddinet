import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  // www → apex canonicalisation.
  // Nginx sirf HTTP → HTTPS karta hai (`$host` ki wajah se www reh jaata hai),
  // isliye https://www.eddinet.com/* pe page 200 OK serve hota tha — ek hi
  // content do URL pe live. Ye redirect (middleware/proxy se bhi pehle chalta
  // hai) ek hi baar me sab variants ko apex pe consolidate karta hai.
  async redirects() {
    return [
      // ── MIGRATION-REDIRECTS-START (auto: slug ← heroHeading) ──────────
      {
        source: "/services/ads-ppc/amazon-ads",
        destination: "/services/ads-ppc/amazon-ads-agency-in-india",
        permanent: true,
      },
      {
        source: "/services/ads-ppc/google-ads",
        destination: "/services/ads-ppc/best-google-ads-services-in-india",
        permanent: true,
      },
      {
        source: "/services/ads-ppc/lead-generation-ads",
        destination: "/services/ads-ppc/lead-generation-services-in-india",
        permanent: true,
      },
      {
        source: "/services/ads-ppc/linkedin-ads",
        destination: "/services/ads-ppc/linkedin-ads-agency-in-india",
        permanent: true,
      },
      {
        source: "/services/ads-ppc/meta-ads",
        destination: "/services/ads-ppc/meta-ads-services-in-india",
        permanent: true,
      },
      {
        source: "/services/ads-ppc/remarketing-retargeting",
        destination: "/services/ads-ppc/remarketing-and-retargeting-ads-services-in-india",
        permanent: true,
      },
      {
        source: "/services/ads-ppc/youtube-ads",
        destination: "/services/ads-ppc/youtube-ads-agency-in-india",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/aws-cloud-services",
        destination: "/services/cloud-devops/aws-cloud-services-company-in-india",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/ci-cd-pipeline",
        destination: "/services/cloud-devops/ci-cd-pipeline-services-company-in-india",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/cloud-infrastructure",
        destination: "/services/cloud-devops/cloud-infrastructure-services-company-in-india",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/cloud-migration",
        destination: "/services/cloud-devops/cloud-migration-services-company-in-india",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/docker-deployment",
        destination: "/services/cloud-devops/docker-deployment-services-company-in-india",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/kubernetes",
        destination: "/services/cloud-devops/kubernetes-services-company-in-india",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/linux-server-management",
        destination: "/services/cloud-devops/linux-server-management-services-in-india",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/load-balancing",
        destination: "/services/cloud-devops/load-balancing-services-company-in-india",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/monitoring-and-logging",
        destination: "/services/cloud-devops/monitoring-and-logging-services-in-india",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/server-security",
        destination: "/services/cloud-devops/server-security-services-in-india",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/server-setup",
        destination: "/services/cloud-devops/server-setup-services-company-in-india",
        permanent: true,
      },
      {
        source: "/services/cloud-devops/vps-setup",
        destination: "/services/cloud-devops/vps-setup-services-company-in-india",
        permanent: true,
      },
      {
        source: "/services/content/blog-content",
        destination: "/services/content/blog-content-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/content/campaign-content",
        destination: "/services/content/campaign-content-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/content/case-study-writing",
        destination: "/services/content/case-study-writing-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/content/content-audit",
        destination: "/services/content/content-audit-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/content/content-marketing",
        destination: "/services/content/content-marketing-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/content/content-refresh",
        destination: "/services/content/content-refresh-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/content/content-strategy",
        destination: "/services/content/content-strategy-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/content/email-content",
        destination: "/services/content/email-content-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/content/landing-page-copy",
        destination: "/services/content/landing-page-copy-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/content/seo-content",
        destination: "/services/content/seo-content-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/content/social-content",
        destination: "/services/content/social-content-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/content/website-content",
        destination: "/services/content/website-content-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/design-creative/banner-design",
        destination: "/services/design-creative/banner-design-services-in-delhi",
        permanent: true,
      },
      {
        source: "/services/design-creative/brand-identity-design",
        destination: "/services/design-creative/brand-identity-design-in-delhi",
        permanent: true,
      },
      {
        source: "/services/design-creative/brochure-design",
        destination: "/services/design-creative/brochure-design-services-in-delhi",
        permanent: true,
      },
      {
        source: "/services/design-creative/catalogue-design",
        destination: "/services/design-creative/catalogue-design-services-in-delhi",
        permanent: true,
      },
      {
        source: "/services/design-creative/graphic-designing",
        destination: "/services/design-creative/graphic-design-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/design-creative/logo-designing",
        destination: "/services/design-creative/logo-design-services-in-delhi-by-eddinet",
        permanent: true,
      },
      {
        source: "/services/design-creative/motion-graphics",
        destination: "/services/design-creative/motion-graphics-services-in-delhi",
        permanent: true,
      },
      {
        source: "/services/design-creative/presentation-design",
        destination: "/services/design-creative/presentation-design-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/design-creative/product-design",
        destination: "/services/design-creative/product-design-services-in-delhi",
        permanent: true,
      },
      {
        source: "/services/design-creative/social-media-creatives",
        destination: "/services/design-creative/social-media-creatives-and-design-services-company-in-delhi",
        permanent: true,
      },
      {
        source: "/services/design-creative/ui-ux-design",
        destination: "/services/design-creative/ui-ux-design-services-in-delhi",
        permanent: true,
      },
      {
        source: "/services/design-creative/video-editing",
        destination: "/services/design-creative/video-editing-services-in-delhi",
        permanent: true,
      },
      {
        source: "/services/ecommerce/amazon-store-development",
        destination: "/services/ecommerce/amazon-store-development-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/ecommerce/ecommerce-migration",
        destination: "/services/ecommerce/ecommerce-migration-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/ecommerce/ecommerce-optimization",
        destination: "/services/ecommerce/ecommerce-optimization-services-in-india",
        permanent: true,
      },
      {
        source: "/services/ecommerce/ecommerce-ppc",
        destination: "/services/ecommerce/ecommerce-ppc-services-in-india",
        permanent: true,
      },
      {
        source: "/services/ecommerce/ecommerce-website",
        destination: "/services/ecommerce/ecommerce-website-development-in-india",
        permanent: true,
      },
      {
        source: "/services/ecommerce/inventory-integration",
        destination: "/services/ecommerce/ecommerce-inventory-integration-in-india",
        permanent: true,
      },
      {
        source: "/services/ecommerce/marketplace-integration",
        destination: "/services/ecommerce/marketplace-integration-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/ecommerce/payment-gateway-integration",
        destination: "/services/ecommerce/payment-gateway-integration-services-in-india",
        permanent: true,
      },
      {
        source: "/services/ecommerce/shipping-integration",
        destination: "/services/ecommerce/ecommerce-shipping-integration-in-india",
        permanent: true,
      },
      {
        source: "/services/ecommerce/shopify-web-design",
        destination: "/services/ecommerce/shopify-development-services-in-delhi",
        permanent: true,
      },
      {
        source: "/services/ecommerce/woocommerce-development",
        destination: "/services/ecommerce/woocommerce-development-services-in-delhi",
        permanent: true,
      },
      {
        source: "/services/hosting-migration/application-hosting",
        destination: "/services/hosting-migration/application-hosting-services-company-in-india",
        permanent: true,
      },
      {
        source: "/services/hosting-migration/cloud-hosting",
        destination: "/services/hosting-migration/cloud-hosting-services-in-india",
        permanent: true,
      },
      {
        source: "/services/hosting-migration/database-hosting",
        destination: "/services/hosting-migration/database-hosting-services-in-india",
        permanent: true,
      },
      {
        source: "/services/hosting-migration/database-migration",
        destination: "/services/hosting-migration/database-migration-services-in-india",
        permanent: true,
      },
      {
        source: "/services/hosting-migration/domain-and-dns-management",
        destination: "/services/hosting-migration/domain-and-dns-management-services-in-india",
        permanent: true,
      },
      {
        source: "/services/hosting-migration/hosting-migration",
        destination: "/services/hosting-migration/hosting-migration-services-in-india",
        permanent: true,
      },
      {
        source: "/services/hosting-migration/managed-hosting",
        destination: "/services/hosting-migration/managed-hosting-services-in-india",
        permanent: true,
      },
      {
        source: "/services/hosting-migration/shopify-migration",
        destination: "/services/hosting-migration/shopify-migration-services-in-india",
        permanent: true,
      },
      {
        source: "/services/hosting-migration/vps-hosting",
        destination: "/services/hosting-migration/vps-hosting-in-india",
        permanent: true,
      },
      {
        source: "/services/hosting-migration/website-hosting",
        destination: "/services/hosting-migration/website-hosting-services-in-india",
        permanent: true,
      },
      {
        source: "/services/hosting-migration/website-migration",
        destination: "/services/hosting-migration/website-migration-services-in-india",
        permanent: true,
      },
      {
        source: "/services/hosting-migration/wordpress-migration",
        destination: "/services/hosting-migration/wordpress-migration-services-in-india",
        permanent: true,
      },
      {
        source: "/services/maintenance-support/application-maintenance",
        destination: "/services/maintenance-support/application-maintenance-services-in-india",
        permanent: true,
      },
      {
        source: "/services/maintenance-support/bug-fixing",
        destination: "/services/maintenance-support/website-bug-fixing-services-in-india",
        permanent: true,
      },
      {
        source: "/services/maintenance-support/disaster-recovery",
        destination: "/services/maintenance-support/website-disaster-recovery-services-in-india",
        permanent: true,
      },
      {
        source: "/services/maintenance-support/emergency-support",
        destination: "/services/maintenance-support/emergency-website-support-services-in-india",
        permanent: true,
      },
      {
        source: "/services/maintenance-support/performance-optimization",
        destination: "/services/maintenance-support/website-performance-monitoring-and-optimization-in-india",
        permanent: true,
      },
      {
        source: "/services/maintenance-support/security-monitoring",
        destination: "/services/maintenance-support/website-security-monitoring-services-in-india",
        permanent: true,
      },
      {
        source: "/services/maintenance-support/security-updates",
        destination: "/services/maintenance-support/website-security-update-services-in-india",
        permanent: true,
      },
      {
        source: "/services/maintenance-support/server-maintenance",
        destination: "/services/maintenance-support/server-maintenance-services-in-india",
        permanent: true,
      },
      {
        source: "/services/maintenance-support/technical-support",
        destination: "/services/maintenance-support/website-technical-support-services-in-india",
        permanent: true,
      },
      {
        source: "/services/maintenance-support/uptime-monitoring",
        destination: "/services/maintenance-support/website-uptime-monitoring-services-in-india",
        permanent: true,
      },
      {
        source: "/services/maintenance-support/website-backup",
        destination: "/services/maintenance-support/website-backup-services-company-in-delhi",
        permanent: true,
      },
      {
        source: "/services/maintenance-support/website-maintenance",
        destination: "/services/maintenance-support/website-maintenance-services-in-india",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development/android-app-development",
        destination: "/services/mobile-app-development/android-app-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development/api-integration",
        destination: "/services/mobile-app-development/mobile-app-api-integration-services-in-india",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development/app-backend-development",
        destination: "/services/mobile-app-development/mobile-app-backend-development-services-in-india",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development/app-deployment",
        destination: "/services/mobile-app-development/mobile-app-deployment-services-in-india",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development/app-maintenance",
        destination: "/services/mobile-app-development/mobile-app-maintenance-and-support-services-in-india",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development/app-migration",
        destination: "/services/mobile-app-development/mobile-app-migration-services-in-india",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development/app-ui-ux-design",
        destination: "/services/mobile-app-development/mobile-app-ui-ux-design-services-in-india",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development/cross-platform-apps",
        destination: "/services/mobile-app-development/cross-platform-app-development-services-in-india",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development/custom-mobile-apps",
        destination: "/services/mobile-app-development/custom-mobile-app-development-services-in-india",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development/flutter-app-development",
        destination: "/services/mobile-app-development/flutter-app-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development/ios-app-development",
        destination: "/services/mobile-app-development/ios-app-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development/react-native-development",
        destination: "/services/mobile-app-development/react-native-app-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/reputation-management/brand-reputation-management",
        destination: "/services/reputation-management/brand-reputation-management-services-in-india",
        permanent: true,
      },
      {
        source: "/services/reputation-management/business-listing-management",
        destination: "/services/reputation-management/business-listing-management-services-in-india",
        permanent: true,
      },
      {
        source: "/services/reputation-management/customer-feedback-management",
        destination: "/services/reputation-management/customer-feedback-management-services-in-india",
        permanent: true,
      },
      {
        source: "/services/reputation-management/digital-presence-management",
        destination: "/services/reputation-management/digital-presence-management-services-in-india",
        permanent: true,
      },
      {
        source: "/services/reputation-management/google-business-profile",
        destination: "/services/reputation-management/google-business-profile-management-services-in-india",
        permanent: true,
      },
      {
        source: "/services/reputation-management/google-review-management",
        destination: "/services/reputation-management/google-review-management-services-in-india",
        permanent: true,
      },
      {
        source: "/services/reputation-management/online-reputation-management",
        destination: "/services/reputation-management/online-reputation-management-services-in-india",
        permanent: true,
      },
      {
        source: "/services/reputation-management/review-generation",
        destination: "/services/reputation-management/review-generation-services-in-india",
        permanent: true,
      },
      {
        source: "/services/reputation-management/review-monitoring",
        destination: "/services/reputation-management/online-review-monitoring-services-in-india",
        permanent: true,
      },
      {
        source: "/services/seo/ai-seo",
        destination: "/services/seo/ai-seo-generative-seo-service-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/seo/amazon-seo",
        destination: "/services/seo/amazon-seo-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/seo/b2b-seo",
        destination: "/services/seo/b2b-seo-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/seo/ecommerce-seo",
        destination: "/services/seo/ecommerce-seo-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/seo/enterprise-seo",
        destination: "/services/seo/enterprise-seo-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/seo/international-seo",
        destination: "/services/seo/international-seo-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/seo/lead-generation-seo",
        destination: "/services/seo/lead-generation-seo-services-in-india",
        permanent: true,
      },
      {
        source: "/services/seo/local-seo",
        destination: "/services/seo/local-seo-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/seo/programmatic-seo",
        destination: "/services/seo/programmatic-seo-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/seo/shopify-seo",
        destination: "/services/seo/shopify-seo-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/seo/technical-seo",
        destination: "/services/seo/technical-seo-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/social-media-marketing/facebook-and-instagram-management",
        destination: "/services/social-media-marketing/facebook-and-instagram-management-services-in-india",
        permanent: true,
      },
      {
        source: "/services/social-media-marketing/linkedin-management",
        destination: "/services/social-media-marketing/linkedin-management-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/social-media-marketing/social-media-management",
        destination: "/services/social-media-marketing/social-media-management-agency-in-india",
        permanent: true,
      },
      {
        source: "/services/social-media-marketing/social-media-strategy",
        destination: "/services/social-media-marketing/social-media-strategy-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/services/social-media-marketing/youtube-management",
        destination: "/services/social-media-marketing/youtube-management-services-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/ai-agents",
        destination: "/services/software-ai/ai-agents-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/ai-chatbot-development",
        destination: "/services/software-ai/ai-chatbot-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/ai-integration",
        destination: "/services/software-ai/ai-integration-services-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/api-development",
        destination: "/services/software-ai/api-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/business-automation",
        destination: "/services/software-ai/business-process-automation-services-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/business-management-software",
        destination: "/services/software-ai/business-management-software-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/crm-development",
        destination: "/services/software-ai/custom-crm-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/custom-software-development",
        destination: "/services/software-ai/custom-software-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/erp-development",
        destination: "/services/software-ai/custom-erp-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/generative-ai-solutions",
        destination: "/services/software-ai/generative-ai-solutions-company-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/llm-integration",
        destination: "/services/software-ai/llm-integration-services-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/rag-applications",
        destination: "/services/software-ai/rag-application-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/rest-api-development",
        destination: "/services/software-ai/rest-api-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/software-ai/saas-development",
        destination: "/services/software-ai/saas-product-development-company-in-india",
        permanent: true,
      },
      {
        source: "/services/web-development/custom-web-application",
        destination: "/services/web-development/custom-web-application-development-company-in-delhi",
        permanent: true,
      },
      {
        source: "/services/web-development/custom-website-design",
        destination: "/services/web-development/custom-website-design-services-in-delhi",
        permanent: true,
      },
      {
        source: "/services/web-development/landing-page-design",
        destination: "/services/web-development/landing-page-design-services-in-india",
        permanent: true,
      },
      {
        source: "/services/web-development/shopify-development",
        destination: "/services/web-development/shopify-development-company-in-delhi",
        permanent: true,
      },
      {
        source: "/services/web-development/website-development",
        destination: "/services/web-development/website-development-services-in-delhi",
        permanent: true,
      },
      {
        source: "/services/web-development/website-optimization",
        destination: "/services/web-development/website-optimization-services-company-in-delhi",
        permanent: true,
      },
      {
        source: "/services/web-development/website-redesign",
        destination: "/services/web-development/website-redesign-services-in-india",
        permanent: true,
      },
      {
        source: "/services/web-development/wordpress-development",
        destination: "/services/web-development/wordpress-development-company-in-delhi",
        permanent: true,
      },
      // ── MIGRATION-REDIRECTS-END ─────────────────────────────────────────
      // Duplicate child page consolidate karna.
      // /services/ecommerce/ecommerce-seo aur /services/seo/ecommerce-seo dono
      // ka metaTitle + H1 ek tha ("eCommerce SEO Services in Delhi NCR") aur
      // body bhi lagbhag same. SEO wala page original aur topical hai, isliye
      // eCommerce wala usi par permanent redirect hai. Destination seedha
      // FINAL slug par hai (beech ka purana /services/seo/ecommerce-seo hop
      // hata diya) taaki client ko sirf EK redirect hop lage.
      {
        source: "/services/ecommerce/ecommerce-seo",
        destination: "/services/seo/ecommerce-seo-services-in-delhi-ncr",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.eddinet.com" }],
        destination: "https://eddinet.com/:path*",
        permanent: true, // 308 Permanent — search engines ko permanent consolidation signal
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value:
              "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
