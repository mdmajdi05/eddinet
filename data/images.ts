// ============================================================================
//  EDDINET — IMAGE REGISTRY (har page ki image kahan hai, yahan se dekho)
// ============================================================================
//
//  ⚠️  CODE ME KABHI BHI DIRECT PATH USE MAT KARO:
//      ❌  src="/SEO-SERVICES-CHILD-IMAGES/AI SEO (Generative SEO).webp"
//      ✅  src={IMG.servicesSeoChild.aiSeo.src}
//
//  Images hamesha is registry me se lao. Folder cleanup ho ya path change,
//  sirf ek jagah edit karna padega: yahan (data/images.ts) + image ka file.
//
//  ────────────────────────────────────────────────────────────────────────────
//  📁 FOLDER STRUCTURE (public/images/…) — page-wise, kebab-case:
//
//      /images/brand/…                    brand/logos (header, footer, favicons)
//      /images/home/…                     homepage (hero, hero-bg aur baaki)
//      /images/about/…                    About page
//      /images/services/…                 services (13 core service categories)
//      /images/services/seo/seo/…         SEO ke child pages (12)
//      /images/services/seo/ai-seo/…      AI SEO page sections
//      /images/services/seo/lead-generation/… Lead Generation page sections
//      /images/services/seo/local-seo/…   Local SEO page sections
//      /images/services/seo-page/…        Main SEO page sections
//      /images/blog/…                     blog thumbnails (0 hai abhi —
//                                         blog.ts unsplash URL use karta hai)
//      /images/portfolio/…                portfolio thumbnails (0 hai abhi —
//                                         portfolio.ts unsplash URL use karta hai)
//
//  ────────────────────────────────────────────────────────────────────────────
//  🏷️  FILE + KEY NAMING RULE  (kebab-case, hamesha):
//
//      <page>-<section>-<descriptor>.<ext>
//
//      ✔  seo-ai-seo.webp, ai-seo.webp, technical-seo.webp
//      ✔  authority-trust-building.webp, google-my-business-seo.webp
//      ✖  "AI SEO (Generative SEO).webp"   <- spaces/caps na rakho
//      ✖  seo_service_image.webp.webp     <- double extension na rakho
//
//      KEY = src file ka naam bina extension ke.
//      E.g. folder="/images/brand/eddinet-logo.png" → KEY = "eddinet-logo"
//
//  Har page ka alag section hai is file me. NAYA IMAGE ADD KARNA HO TO:
//    1. Public me /images/<page>/ artam ki clean kebab-case file rakho
//    2. Neeche apne page ke section me entry ADD karo (key/src/alt)
//    3. Code me IMG.<page>.<key>.src use karo
// ============================================================================

// ============================================================================
//  TYPE — har image entry ka shape
// ============================================================================
export interface AppImage {
  /** Unique machine key (kebab-case, = file name bina extension) */
  key: string;
  /** Public URL path — "/images/…" se shuru hota hai */
  src: string;
  /** Alt text — accessibility + SEO ke liye */
  alt: string;
  /** Register karte waqt batao: kis page ki image hai */
  page: string;
  /** (Optional) Page ke andar konsa section use karta hai */
  section?: string;
  /** (Optional) Kaunsi file/component ise use karta hai — kuch naya do to update */
  usedIn?: string;
  /** (Optional) Extra note: size ideal hoga, dual-purpose ho to batao */
  note?: string;
}

// ============================================================================
//  HELPER — bas kisi image ka src chahiye ho to IMG.<page>.<key>.src
//  kisi se milkar check karne ho to niche helpers use karo
// ============================================================================

/** Kisi bhi image ka URL plain string me lene ke liye — "imgSrc('seo-ai-seo')" */
export const imgSrc = (key: string): string =>
  ALL_IMAGES.find((i) => i.key === key)?.src ?? "";

/** Kisi page ki saari images ek array me chahiye ho to */
export const imagesByPage = (page: string): AppImage[] =>
  ALL_IMAGES.filter((i) => i.page === page);

/** Kisi ek image ki full entry (object) chahiye ho to */
export const imageByKey = (key: string): AppImage | undefined =>
  ALL_IMAGES.find((i) => i.key === key);

// ============================================================================
//  BRAND (logos — header, footer, favicons, schema)
// ============================================================================
export const IMG = {
  brand: {
    eddinetLogo: {
      key: "eddinet-logo",
      src: "/images/brand/eddinet-logo.png",
      alt: "Eddinet logo",
      page: "brand",
      section: "header / footer",
      // usedIn: Footer.tsx + Header.tsx (aur JSON-LD schema logo)
    },
  },

  // ==========================================================================
  //  HOME (homepage)
  // ==========================================================================
  home: {
    hero: {
      key: "hero",
      src: "/images/home/hero.png",
      alt: "Eddinet digital growth hero background",
      page: "home",
      section: "hero",
      // usedIn: components/Hero.tsx (backgroundImage)
    },
    heroBg1: {
      key: "hero-bg-1",
      src: "/images/home/hero-bg-1.jpg",
      alt: "Hero background variation 1",
      page: "home",
      section: "hero",
      note: "Abhi code me use nahi ho raha — reserve hai",
    },
    heroBg2: {
      key: "hero-bg-2",
      src: "/images/home/hero-bg-2.jpg",
      alt: "Hero background variation 2",
      page: "home",
      section: "hero",
      note: "Abhi code me use nahi ho raha — reserve hai",
    },
    heroBg3: {
      key: "hero-bg-3",
      src: "/images/home/hero-bg-3.jpg",
      alt: "Hero background variation 3",
      page: "home",
      section: "hero",
      note: "Abhi code me use nahi ho raha — reserve hai",
    },
  },

  // ==========================================================================
  //  ABOUT
  // ==========================================================================
  about: {
    aboutSection: {
      key: "about-section",
      src: "/images/about/about-section.webp",
      alt: "About Eddinet section visual",
      page: "about",
      section: "about intro",
      // usedIn: components/About.tsx + app/about/page.tsx
    },
  },

  // ==========================================================================
  //  SERVICES — 13 CORE SERVICE CATEGORY images
  // ==========================================================================
  services: {
    seoAiSeo: {
      key: "seo-ai-seo",
      src: "/images/services/seo-ai-seo.webp",
      alt: "SEO & AI SEO service illustration",
      page: "services",
      section: "Services tab cards",
      // usedIn: data/services.ts (service slug "seo")
    },
    socialMedia: {
      key: "social-media",
      src: "/images/services/social-media.webp",
      alt: "Social media marketing service illustration",
      page: "services",
      section: "Services tab cards",
      // usedIn: data/services.ts (slug "social-media-marketing")
    },
    performanceMarketing: {
      key: "performance-marketing",
      src: "/images/services/performance-marketing.webp",
      alt: "Ads / PPC & Content service illustration",
      page: "services",
      section: "Services tab cards",
      // usedIn: data/services.ts (slug "ads-ppc")
    },
    designCreative: {
      key: "design-creative",
      src: "/images/services/design-creative.webp",
      alt: "Design & Creative service illustration",
      page: "services",
      section: "Services tab cards",
      // usedIn: data/services.ts (slug "design-creative")
    },
    webDevelopment: {
      key: "web-development",
      src: "/images/services/web-development.webp",
      alt: "Web development service illustration",
      page: "services",
      section: "Services tab cards",
      // usedIn: data/services.ts (slug "web-development")
    },
    ecommerceSolutions: {
      key: "ecommerce-solutions",
      src: "/images/services/ecommerce-solutions.webp",
      alt: "eCommerce solutions service illustration",
      page: "services",
      section: "Services tab cards",
      // usedIn: data/services.ts (slug "ecommerce")
    },
    softwareAi: {
      key: "software-ai-solutions",
      src: "/images/services/software-ai-solutions.webp",
      alt: "Software & AI solutions service illustration",
      page: "services",
      section: "Services tab cards",
      // usedIn: data/services.ts (slug "software-ai")
    },
    cloudDevops: {
      key: "cloud-devops",
      src: "/images/services/cloud-devops.webp",
      alt: "Cloud & DevOps service illustration",
      page: "services",
      section: "Services tab cards",
      // usedIn: data/services.ts (slug "cloud-devops")
    },
    hostingMigration: {
      key: "hosting-migration",
      src: "/images/services/hosting-migration.webp",
      alt: "Hosting & migration service illustration",
      page: "services",
      section: "Services tab cards",
      // usedIn: data/services.ts (slug "hosting-migration")
    },
    reputationManagement: {
      key: "reputation-management",
      src: "/images/services/reputation-management.webp",
      alt: "Reputation management service illustration",
      page: "services",
      section: "Services tab cards",
      // usedIn: data/services.ts (slug "reputation-management")
    },
    mobileAppDevelopment: {
      key: "mobile_app_development_banner",
      src: "/images/services/mobile_app_development_banner.webp",
      alt: "Mobile app development service illustration",
      page: "services",
      section: "Services tab cards",
      // usedIn: data/services.ts (slug "mobile-app-development")
    },
    maintenanceSupport: {
      key: "maintenance_support_plans",
      src: "/images/services/maintenance_support_plans.webp",
      alt: "Maintenance & support service illustration",
      page: "services",
      section: "Services tab cards",
      // usedIn: data/services.ts (slug "maintenance-support")
    },
    content: {
      key: "content_marketing_services",
      src: "/images/services/content_marketing_services.webp",
      alt: "Content marketing service illustration",
      page: "services",
      section: "Services tab cards",
      // usedIn: data/services.ts (slug "content")
    },
  },

  // ==========================================================================
  //  SERVICES → SEO CHILD PAGES (data/services.ts childServiceImages)
  // ==========================================================================
  servicesSeoChild: {
    seoService: {
      key: "seo-service",
      src: "/images/services/seo/seo/seo-service.webp",
      alt: "SEO services overview illustration",
      page: "services-seo-child",
      usedIn: 'childServiceImages["SEO"]',
    },
    amazonSeo: {
      key: "amazon-seo",
      src: "/images/services/seo/seo/amazon-seo.webp",
      alt: "Amazon SEO illustration",
      page: "services-seo-child",
      usedIn: 'childServiceImages["Amazon SEO"]',
    },
    aiSeo: {
      key: "ai-seo",
      src: "/images/services/seo/seo/ai-seo.webp",
      alt: "AI SEO (Generative SEO) illustration",
      page: "services-seo-child",
      usedIn: 'childServiceImages["AI SEO (Generative SEO)"]',
    },
    leadGenerationSeo: {
      key: "lead-generation-seo",
      src: "/images/services/seo/seo/lead-generation-seo.webp",
      alt: "Lead generation SEO illustration",
      page: "services-seo-child",
      usedIn: 'childServiceImages["Lead Generation SEO"]',
    },
    localSeo: {
      key: "local-seo",
      src: "/images/services/seo/seo/local-seo.webp",
      alt: "Local SEO illustration",
      page: "services-seo-child",
      usedIn: 'childServiceImages["Local SEO"]',
    },
    enterpriseSeo: {
      key: "enterprise-seo",
      src: "/images/services/seo/seo/enterprise-seo.webp",
      alt: "Enterprise SEO illustration",
      page: "services-seo-child",
      usedIn: 'childServiceImages["Enterprise SEO"]',
    },
    b2bSeo: {
      key: "b2b-seo",
      src: "/images/services/seo/seo/b2b-seo.webp",
      alt: "B2B SEO illustration",
      page: "services-seo-child",
      usedIn: 'childServiceImages["B2B SEO"]',
    },
    technicalSeo: {
      key: "technical-seo",
      src: "/images/services/seo/seo/technical-seo.webp",
      alt: "Technical SEO illustration",
      page: "services-seo-child",
      usedIn: 'childServiceImages["Technical SEO"]',
    },
    internationalSeo: {
      key: "international-seo",
      src: "/images/services/seo/seo/international-seo.webp",
      alt: "International SEO illustration",
      page: "services-seo-child",
      usedIn: 'childServiceImages["International SEO"]',
    },
    programmaticSeo: {
      key: "programmatic-seo",
      src: "/images/services/seo/seo/programmatic-seo.webp",
      alt: "Programmatic SEO illustration",
      page: "services-seo-child",
      usedIn: 'childServiceImages["Programmatic SEO"]',
    },
    ecommerceSeo: {
      key: "ecommerce-seo",
      src: "/images/services/seo/seo/ecommerce-seo.webp",
      alt: "eCommerce SEO illustration",
      page: "services-seo-child",
      usedIn: 'childServiceImages["eCommerce SEO"]',
    },
    shopifySeo: {
      key: "shopify-seo",
      src: "/images/services/seo/seo/shopify-seo.webp",
      alt: "Shopify SEO illustration",
      page: "services-seo-child",
      usedIn: 'childServiceImages["Shopify SEO"]',
    },
  },

  // ==========================================================================
  //  AI SEO PAGE SECTION images (reserve — generated page use kar sakta hai)
  // ==========================================================================
  servicesAiSeo: {
    authorityTrustBuilding: {
      key: "authority-trust-building",
      src: "/images/services/seo/ai-seo/authority-trust-building.webp",
      alt: "Authority & trust building for AI search",
      page: "services-ai-seo",
    },
    contentOptimizationAi: {
      key: "content-optimization-ai-search-engines",
      src: "/images/services/seo/ai-seo/content-optimization-ai-search-engines.webp",
      alt: "Content optimization for AI & search engines",
      page: "services-ai-seo",
    },
    geo: {
      key: "geo",
      src: "/images/services/seo/ai-seo/geo.webp",
      alt: "Generative engine optimization (GEO) visual",
      page: "services-ai-seo",
    },
    intentKeywordResearch: {
      key: "intent-based-keyword-research",
      src: "/images/services/seo/ai-seo/intent-based-keyword-research.webp",
      alt: "Intent based keyword research visual",
      page: "services-ai-seo",
    },
    structuredDataTechnicalSeo: {
      key: "structured-data-technical-seo",
      src: "/images/services/seo/ai-seo/structured-data-technical-seo.webp",
      alt: "Structured data & technical SEO visual",
      page: "services-ai-seo",
    },
  },

  // ==========================================================================
  //  LEAD GENERATION SECTION images (reserve)
  // ==========================================================================
  servicesLeadGeneration: {
    buyerIntentKeywordTargeting: {
      key: "buyer-intent-keyword-targeting",
      src: "/images/services/seo/lead-generation/buyer-intent-keyword-targeting.webp",
      alt: "Buyer intent keyword targeting visual",
      page: "services-lead-generation",
    },
    conversionRateOptimization: {
      key: "conversion-rate-optimization",
      src: "/images/services/seo/lead-generation/conversion-rate-optimization.webp",
      alt: "Conversion rate optimization (CRO) visual",
      page: "services-lead-generation",
    },
    fullWebsiteOptimization: {
      key: "full-website-optimization",
      src: "/images/services/seo/lead-generation/full-website-optimization.webp",
      alt: "Full website optimization visual",
      page: "services-lead-generation",
    },
    landingPageOptimization: {
      key: "landing-page-optimization",
      src: "/images/services/seo/lead-generation/landing-page-optimization.webp",
      alt: "Landing page optimization visual",
      page: "services-lead-generation",
    },
    leadCaptureContentMarketing: {
      key: "lead-capture-content-marketing",
      src: "/images/services/seo/lead-generation/lead-capture-content-marketing.webp",
      alt: "Lead capture content marketing visual",
      page: "services-lead-generation",
    },
    localLeadGeneration: {
      key: "local-lead-generation-seo",
      src: "/images/services/seo/lead-generation/local-lead-generation-seo.webp",
      alt: "Local lead generation SEO visual",
      page: "services-lead-generation",
    },
  },

  // ==========================================================================
  //  LOCAL SEO SECTION images (reserve)
  // ==========================================================================
  servicesLocalSeo: {
    googleMyBusiness: {
      key: "google-my-business-seo",
      src: "/images/services/seo/local-seo/google-my-business-seo.webp",
      alt: "Google My Business SEO visual",
      page: "services-local-seo",
    },
    citationNap: {
      key: "local-citation-nap-building",
      src: "/images/services/seo/local-seo/local-citation-nap-building.webp",
      alt: "Local citation & NAP building visual",
      page: "services-local-seo",
    },
    keywordResearchContent: {
      key: "local-keyword-research-content",
      src: "/images/services/seo/local-seo/local-keyword-research-content.webp",
      alt: "Local keyword research & content visual",
      page: "services-local-seo",
    },
    linkBuilding: {
      key: "local-link-building",
      src: "/images/services/seo/local-seo/local-link-building.webp",
      alt: "Local link building visual",
      page: "services-local-seo",
    },
    onPageTechnical: {
      key: "on-page-technical-local-seo",
      src: "/images/services/seo/local-seo/on-page-technical-local-seo.webp",
      alt: "On-page & technical local SEO visual",
      page: "services-local-seo",
    },
    reviewReputation: {
      key: "review-reputation-management",
      src: "/images/services/seo/local-seo/review-reputation-management.webp",
      alt: "Review & reputation management visual",
      page: "services-local-seo",
    },
  },

  // ==========================================================================
  //  MAIN SEO PAGE SECTION images (reserve)
  // ==========================================================================
  servicesSeoPage: {
    ecommerceSeo: {
      key: "ecommerce-seo-page",
      src: "/images/services/seo-page/ecommerce-seo.png",
      alt: "eCommerce SEO visual",
      page: "services-seo-page",
    },
    localSeo: {
      key: "local-seo-page",
      src: "/images/services/seo-page/local-seo.png",
      alt: "Local SEO visual",
      page: "services-seo-page",
    },
    mobileSeo: {
      key: "mobile-seo",
      src: "/images/services/seo-page/mobile-seo.png",
      alt: "Mobile SEO visual",
      page: "services-seo-page",
    },
    nationalSeo: {
      key: "national-seo",
      src: "/images/services/seo-page/national-seo.png",
      alt: "National SEO visual",
      page: "services-seo-page",
    },
    seoForStartups: {
      key: "seo-for-startups",
      src: "/images/services/seo-page/seo-for-startups.png",
      alt: "SEO for startups visual",
      page: "services-seo-page",
    },
  },
} as const;

// ============================================================================
//  ALL IMAGES — flat list (helpers ke liye). Idhar NAYI ENTRY add karo,
//  IMG object ke <page> section me bhi har image add honi chahiye.
// ============================================================================
export const ALL_IMAGES: AppImage[] = [
  // brand
  IMG.brand.eddinetLogo,

  // home
  IMG.home.hero,
  IMG.home.heroBg1,
  IMG.home.heroBg2,
  IMG.home.heroBg3,

  // about
  IMG.about.aboutSection,

  // services — 13 core
  IMG.services.seoAiSeo,
  IMG.services.socialMedia,
  IMG.services.performanceMarketing,
  IMG.services.designCreative,
  IMG.services.webDevelopment,
  IMG.services.ecommerceSolutions,
  IMG.services.softwareAi,
  IMG.services.cloudDevops,
  IMG.services.hostingMigration,
  IMG.services.reputationManagement,
  IMG.services.mobileAppDevelopment,
  IMG.services.maintenanceSupport,
  IMG.services.content,

  // services → seo child (12)
  IMG.servicesSeoChild.seoService,
  IMG.servicesSeoChild.amazonSeo,
  IMG.servicesSeoChild.aiSeo,
  IMG.servicesSeoChild.leadGenerationSeo,
  IMG.servicesSeoChild.localSeo,
  IMG.servicesSeoChild.enterpriseSeo,
  IMG.servicesSeoChild.b2bSeo,
  IMG.servicesSeoChild.technicalSeo,
  IMG.servicesSeoChild.internationalSeo,
  IMG.servicesSeoChild.programmaticSeo,
  IMG.servicesSeoChild.ecommerceSeo,
  IMG.servicesSeoChild.shopifySeo,

  // services → ai-seo (5)
  IMG.servicesAiSeo.authorityTrustBuilding,
  IMG.servicesAiSeo.contentOptimizationAi,
  IMG.servicesAiSeo.geo,
  IMG.servicesAiSeo.intentKeywordResearch,
  IMG.servicesAiSeo.structuredDataTechnicalSeo,

  // services → lead generation (6)
  IMG.servicesLeadGeneration.buyerIntentKeywordTargeting,
  IMG.servicesLeadGeneration.conversionRateOptimization,
  IMG.servicesLeadGeneration.fullWebsiteOptimization,
  IMG.servicesLeadGeneration.landingPageOptimization,
  IMG.servicesLeadGeneration.leadCaptureContentMarketing,
  IMG.servicesLeadGeneration.localLeadGeneration,

  // services → local seo (6)
  IMG.servicesLocalSeo.googleMyBusiness,
  IMG.servicesLocalSeo.citationNap,
  IMG.servicesLocalSeo.keywordResearchContent,
  IMG.servicesLocalSeo.linkBuilding,
  IMG.servicesLocalSeo.onPageTechnical,
  IMG.servicesLocalSeo.reviewReputation,

  // services → seo page (5)
  IMG.servicesSeoPage.ecommerceSeo,
  IMG.servicesSeoPage.localSeo,
  IMG.servicesSeoPage.mobileSeo,
  IMG.servicesSeoPage.nationalSeo,
  IMG.servicesSeoPage.seoForStartups,
];

// ============================================================================
//  REMOTE (UNSPLASH) images — data files inhe use karte hain, isliye yahan
//  register kara di hai taaki pata rahe kaunsa image kaunsa section use karta
//  hai. Inhe bundle me download karna ho to bas src yahan se le lo.
// ============================================================================

/** Blog thumbnails — blog.ts ke Insight.image me unsplash URL hota hai */
export const REMOTE_IMAGES = {
  blogSlowStartupKeyword: {
    key: "blog-slow-startup-keyword",
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    alt: "Website metrics on a laptop",
    page: "blog",
  },
  blogSolidRoof: {
    key: "blog-solid-roof",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    alt: "Analytics charts and graphs",
    page: "blog",
  },
  blogNewWebsiteAwareness: {
    key: "blog-new-website-awareness",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    alt: "Product and branding imagery",
    page: "blog",
  },
} as const;

// data/index.ts me bhi `export * from "./images";` aa chuka hoga ya add karna
// hoga — check karna (re-exports wahi se hote hain).