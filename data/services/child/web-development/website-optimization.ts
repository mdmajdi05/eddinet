// ============================================================================
//  FILE: data/services/child/web-development/website-optimization.ts
//  PAGE: /services/web-development/website-optimization-services-company-in-delhi
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================
// ── HERO FIELDS (top of the page) ─────────────────────────────────────
//   heroEyebrow    = badge chip shown ABOVE the <h1>
//   heroHeading    = the <h1> heading itself
//   heroSubheading = paragraph shown BELOW the <h1>

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/web-development";
export const child = {
  slug: "website-optimization-services-company-in-delhi",
  title: "Website Optimization",
  metaTitle: "Website Optimization Services in Delhi NCR | Eddinet",
  metaDescription: "Speed, conversion and UX optimisation that improves rankings, engagement and results. Small changes across the site that add up to real business lift. Eddinet delivers dependable website optimization services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Page Speed Acceleration | Core Web Vitals Optimization | Technical SEO & Conversion",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Website Optimization Services Company in Delhi",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET provides website optimization services in India. We fix technical bottlenecks, cut page load times, and improve front-end rendering, so your site ranks higher on Google and turns more visitors into clients. Slow pages, laggy interactions, and failed Google benchmarks cost you traffic and buyers. Our team makes code-level fixes that keep your website fast on both mobile and desktop.",
  detailedDescription: "At EDDINET, we turn slow, bloated websites into high-speed digital sales platforms. Slow load speeds, unoptimized scripts, and poor user experience metrics hurt your Google rankings, raise bounce rates, and waste your ad budget. Therefore, our engineering team delivers precise optimizations that improve your site's technical health and performance.\n\nOur performance specialists manage your website acceleration from start to finish. We offer complete website performance optimization in India, data-driven technical SEO and optimization in India, and specialized Core Web Vitals optimization in Delhi. As a result, your site passes Google's official speed and usability checks.",
  features: [
    {
      title: "Website Speed Optimization",
      description: "As a website speed optimization company in Delhi, we clean up heavy code, CSS, and JavaScript. With smart caching and database tuning, your pages load in under a second.",
    },
    {
      title: "Core Web Vitals Optimization",
      description: "Our Core Web Vitals optimization in Delhi fixes slow LCP, layout shifts (CLS), and laggy INP. Your site gets green scores on Google PageSpeed.",
    },
    {
      title: "Technical SEO Optimization",
      description: "Our technical SEO and optimization in India fixes indexing errors, sitemaps, canonical tags, and redirect chains. We also add schema markup, so search engines crawl your site easily.",
    },
    {
      title: "Server & Performance Tuning",
      description: "Our website performance optimization in India improves server response time (TTFB) and sets up a CDN. We also load scripts asynchronously, so your site runs smoothly in every browser.",
    },
    {
      title: "Image & Media Optimization",
      description: "We convert heavy images to WebP or AVIF and add lazy loading. Your pages get lighter, and the quality stays sharp.",
    },
    {
      title: "Mobile Speed Optimization",
      description: "We remove render-blocking files and improve touch response. Mobile visitors get a fast, app-like experience.",
    },
  ],
  featuresHeading: "Our Website Optimization Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Website Speed Optimization Company Delhi?",
    points: [
      "Guaranteed Green-Zone Scores: We target and achieve green-zone passes on Google PageSpeed Insights and Core Web Vitals benchmarks across mobile and desktop.",
      "100% Safe Code Execution: All optimizations are built and rigorously tested in an isolated staging site, guaranteeing zero downtime or functionality breakage on your live site.",
      "Combined Speed & Technical SEO Approach: We don't just compress images; we resolve deep technical SEO issues, canonical tags, and crawling bugs in tandem to boost organic visibility.",
      "No Loss of Visual Quality: Advanced loss-less media compression ensures your site stays visually sharp while loading dramatically faster.",
      "Platform-Agnostic Expertise: Tailored speed acceleration frameworks for WordPress, WooCommerce, Shopify, Magento, Laravel, React, and custom PHP builds.",
    ],
  },
  process: {
    heading: "Our Website Optimization Process",
    steps: [
      {
        num: "01",
        title: "Deep Technical Speed & SEO Audit",
        description: "We run comprehensive diagnostic tests using Google PageSpeed Insights, Lighthouse, GTmetrix, and Screaming Frog to identify underlying speed bottlenecks and technical SEO errors.",
      },
      {
        num: "02",
        title: "Staging Environment Cloning",
        description: "We create a private duplicate of your live site to execute all code modifications, database cleanups, and plugin overhauls without risk to your live operations.",
      },
      {
        num: "03",
        title: "Code, Asset & Database Refactoring",
        description: "Our engineers minified CSS/JS, remove redundant third-party scripts, optimize SQL queries, compress media, and defer non-critical assets to accelerate the critical rendering path.",
      },
      {
        num: "04",
        title: "Server Caching & CDN Configuration",
        description: "We set up server-level caching layers (Redis, Varnish, Nginx), configure HTTP/2 or HTTP/3 protocols, and deploy enterprise CDN routing for global speed delivery.",
      },
      {
        num: "05",
        title: "Real-Device Testing & Core Web Vitals Verification",
        description: "We validate page speed scores, visual layout stability, and user responsiveness across multiple mobile and desktop browsers to verify green-zone performance across all key metrics.",
      },
      {
        num: "06",
        title: "Live Deployment & Post-Launch Monitoring",
        description: "We deploy optimized configurations to your live server, resubmit updated sitemaps to Google Search Console, and set up continuous performance monitoring to maintain peak speed.",
      },
    ],
  },
  industries: {
    heading: "Website Optimization Across Core Frameworks",
    items: [
      {
        title: "Custom WordPress & WooCommerce",
        description: "Purging database bloat, deactivating slow plugins, replacing heavy page builder assets, configuring object caching, and optimizing checkout funnels.",
      },
      {
        title: "Shopify & E-Commerce Stores",
        description: "Minifying app scripts, optimizing product image galleries, deferring third-party tracking pixels, and speeding up cart response times.",
      },
      {
        title: "Corporate & Enterprise Web Portals",
        description: "Streamlining multi-tiered backend database queries, caching complex dynamic assets, and establishing edge CDN delivery for enterprise portals.",
      },
      {
        title: "SaaS & High-Traffic Web Apps",
        description: "Optimizing API payload sizes, refactoring front-end JavaScript bundles, and fine-tuning server architecture for high-concurrency user traffic.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are website optimization services?",
      a: "Website optimization services involve technical code refactoring, image compression, database cleaning, server caching setup, and technical SEO fixes to make a website load faster, rank higher on search engines, and convert more visitors.",
    },
    {
      q: "Why are Core Web Vitals important for my website?",
      a: "Core Web Vitals (LCP, CLS, INP) are official Google ranking factors. Passing these benchmarks ensures a fast, visually stable, and responsive user experience, directly leading to better organic search rankings and higher conversion rates.",
    },
    {
      q: "How fast should my website load after speed optimization?",
      a: "We aim for sub-second to 2-second page load times and 90+ performance scores on Google PageSpeed Insights, depending on your platform and third-party script requirements.",
    },
    {
      q: "Will website speed optimization break my site’s layout or features?",
      a: "No. We perform all code changes, script deferrals, and asset compression on a private staging clone first. We deploy to your live server only after full functional, mobile, and visual QA testing.",
    },
    {
      q: "How long does technical SEO and optimization in India take to complete?",
      a: "Standard corporate site speed and technical SEO optimizations take 3 to 7 business days, while complex WooCommerce, Shopify, or enterprise portals take 7 to 14 business days across structured testing sprints.",
    },
    {
      q: "Does a faster website increase organic traffic and sales?",
      a: "Yes. Google explicitly favors fast-loading websites in search rankings. Furthermore, faster load speeds reduce bounce rates and eliminate user friction, leading directly to higher lead generation and sales conversions.",
    },
  ],
  cta: {
    heading: "Accelerate Your Digital Platform Today",
    sub: "Discuss Your Website Optimization Requirements",
    description: "Ready to turn your slow website into a lightning-fast, high-ranking, and high-converting asset? Partner with EDDINET for expert website optimization services in India. Contact our technical performance team today to schedule your consultation!",
  },
  crossLinks: crossLinksFor("web-development"),
  docxHeadings: {
    about: "About EDDINET: Website Speed Optimization Company Delhi",
    process: "Our Website Optimization Process",
    faqs: "Frequently Asked Questions About Website Optimization Services",
  },
};
