// ============================================================================
//  FILE: data/services/child/ads-ppc/remarketing-retargeting.ts
//  PAGE: /services/ads-ppc/remarketing-retargeting
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/ads-ppc";
export const child = {
  slug: "remarketing-retargeting",
  title: "Remarketing / Retargeting",
  metaTitle: "Remarketing / Retargeting Services in India | Eddinet",
  metaDescription: "By combining automated dynamic product ads, conversion-based audience segmentation, and strict frequency caps across Google, Meta, and LinkedIn, we drive",
  heroHeading: "Remarketing & Retargeting Ads Services in India",
  heroSubheading: "At Eddinet, we fix conversion drop-offs by bringing high-intent website visitors back to complete their purchase. As a performance-focused retargeting agency in India, we eliminate wasted ad spend by re-engaging users who left your site or app without taking action.",
  detailedDescription: "By combining automated dynamic product ads, conversion-based audience segmentation, and strict frequency caps across Google, Meta, and LinkedIn, we drive down your customer acquisition costs and turn lost traffic into direct revenue.\n\nAt Eddinet, we solve lost conversions by bringing warm visitors back into your sales funnel to complete their purchase. As a specialized retargeting agency in India, we eliminate wasted ad spend by re-engaging users who left your website or app without taking action. By deploying custom audience triggers, dynamic product ads, and precise frequency caps across Google, Meta, and LinkedIn, we drive down your customer acquisition costs and turn bounced traffic into direct revenue.",
  features: [
    {
      title: "Automated Dynamic Retargeting",
      description: "We display personalized ads featuring the exact products or services users viewed on your site, encouraging immediate cart recovery and repeat purchases.",
    },
    {
      title: "Conversion-Based Audience Segmentation",
      description: "We group past visitors by their onsite actions-such as abandoned carts, page views, or time spent-to deliver tailored messaging that matches their stage in the buying cycle.",
    },
    {
      title: "Cross-Channel Ad Deployment",
      description: "We track and re-engage your warm prospects across Google Display, Meta (Facebook & Instagram), LinkedIn, and YouTube to maintain consistent brand presence.",
    },
    {
      title: "High-Impact Conversion Copy & Creatives",
      description: "We craft persuasive ad copy, limited-time discount offers, and strong visual assets designed to overcome buyer hesitation and prompt instant action.",
    },
    {
      title: "Precise Tracking & Frequency Management",
      description: "We install advanced tracking pixels, set up custom conversion events, and apply strict frequency caps to prevent ad fatigue and protect your ad budget.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Remarketing Ads",
    points: [
      "Expertise in Retargeting Ads: We specialize in lower-funnel acquisition, focusing exclusively on strategies that turn lost website visitors into paying customers.",
      "Customized Campaigns for Your Business: We build custom retargeting funnels tailored to your exact product catalog, average order value, and buyer consideration phase.",
      "Data-Driven Strategies: Every bid adjustment, creative change, and audience split-test is guided strictly by conversion metrics and profit margins.",
      "Engaging & Persuasive Creatives: Our team designs high-converting visual assets and writes urgency-driven copy that drives immediate return visits to your site.",
      "Continuous Monitoring & Optimization: We audit campaign performance daily-refining audience lists, updating creative assets, and tuning bids to maintain a high ROAS.",
      "Multi-Platform Retargeting: We re-engage your warm audience wherever they spend time online, creating a seamless omni-channel presence.",
      "Transparent Reporting & Insights: You get clear reports detailing exact conversion counts, Cost Per Acquisition (CPA), return on ad spend, and recovered revenue.",
      "End-to-End Campaign Management: We handle the complete process-from pixel installation and audience creation to asset design, bidding, and scale.",
    ],
  },
  process: {
    heading: "Our Remarketing Ads Process",
    steps: [
      {
        num: "01",
        title: "Understanding Your Business Goals",
        description: "We evaluate your drop-off points, sales cycles, and target return on ad spend (ROAS) to build a custom re-engagement roadmap.",
      },
      {
        num: "02",
        title: "Audience Research & Segmentation",
        description: "We map out user behavior data to isolate high-intent traffic segments, cart abandoners, and repeat customer pools.",
      },
      {
        num: "03",
        title: "Competitor & Market Analysis",
        description: "We study competitor retargeting offers and messaging to build unique ad angles that convince lost visitors to choose your brand.",
      },
      {
        num: "04",
        title: "Campaign Strategy & Planning",
        description: "We select the right mix of ad formats, tracking pixels, and bid strategies to maximize retargeting efficiency across channels.",
      },
      {
        num: "05",
        title: "Creative Development",
        description: "We design eye-catching ad banners, write offer-driven copy, and configure dynamic product feed integrations.",
      },
      {
        num: "06",
        title: "Campaign Setup & Launch",
        description: "We configure pixel tracking, establish audience exclusion rules, launch campaigns with controlled budgets, and monitor real-time conversions.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What is the difference between remarketing and retargeting?",
      a: "Retargeting primarily uses tracking pixels and cookies to show display ads to past site visitors across search and social channels. Remarketing typically relies on collected customer contact data (like email lists) to re-engage past buyers or leads through targeted ad matches and direct messaging.",
    },
    {
      q: "How do you prevent retargeting ads from annoying potential customers?",
      a: "We implement strict frequency caps to limit how many times a user sees your ad per day. We also set up exclusion rules that immediately remove users from retargeting lists once they complete a purchase or target conversion.",
    },
    {
      q: "Will retargeting work if my website traffic is currently low?",
      a: "Retargeting relies on having a pool of past visitors. If your site traffic is low, we recommend pairing retargeting campaigns with top-of-funnel acquisition ads (such as Google Search or Meta Ads) to continuously feed fresh traffic into your retargeting pixel.",
    },
    {
      q: "How quickly can retargeting ads start generating sales?",
      a: "Because retargeting targets warm prospects who already know your brand, campaigns often produce conversions within the first 24 to 48 hours of launch once audience pools are established.",
    },
  ],
  crossLinks: crossLinksFor("ads-ppc"),
  featuresHeading: "Our Retargeting Ads Services in India",
  docxHeadings: {
    about: "About Remarketing & Retargeting Agency",
    process: "Our Remarketing Ads Process",
    faqs: "FREQUENTLY ASKED QUESTIONS",
  },
};
