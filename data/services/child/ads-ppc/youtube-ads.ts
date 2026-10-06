// ============================================================================
//  FILE: data/services/child/ads-ppc/youtube-ads.ts
//  PAGE: /services/ads-ppc/youtube-ads
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/ads-ppc";
export const child = {
  slug: "youtube-ads",
  title: "YouTube Ads",
  metaTitle: "YouTube Ads Services in India | Eddinet",
  metaDescription: "YouTube Ads Agency At Eddinet, we help businesses across India transform YouTube ad spend into high-intent leads, measurable conversions, and direct pipeline",
  heroHeading: "YouTube Ads Agency in India",
  heroSubheading: "Eddinet is a leading YouTube Ads agency in India, turning video views into high-intent leads and direct revenue. We build, manage, and optimize high-converting video campaigns using targeted placement strategies, conversion-focused scripts, and continuous bid management to maximize your ROI.",
  detailedDescription: "YouTube Ads Agency\n\nAt Eddinet, we help businesses across India transform YouTube ad spend into high-intent leads, measurable conversions, and direct pipeline growth. Rather than chasing empty view counts or vanity impressions, we focus on placing your brand directly in front of ready-to-buy audiences at the exact moment they are consuming video content.\n\nAs a performance-focused YouTube Ads agency in India, we handle the heavy lifting from intent-driven targeting and video script planning to continuous bid management and conversion tracking. Whether you want to scale lead generation, launch new products, or dominate your market, we build tailored video ad campaigns engineered to maximize your return on ad spend (ROAS).",
  features: [
    {
      title: "Audience Targeting",
      description: "We reach your exact buyers using granular targeting options-including custom intent keywords, in-market segments, demographic parameters, channel placements, and retargeting lists-so your ads only play for relevant viewers.",
    },
    {
      title: "Video Ad Creation Support",
      description: "From scripting hook-driven storyboards to production guidance and editing, we help you build high-converting skippable in-stream ads, non-skippable video assets, and YouTube Shorts ads designed to stop the skip button.",
    },
    {
      title: "Ad Setup and Structure",
      description: "We organize your Google Ads account with dedicated video campaign hierarchies, configuring conversion tracking, custom parameters, and landing page paths for seamless lead capture.",
    },
    {
      title: "Daily Management and Monitoring",
      description: "We actively track daily ad performance, monitoring view rates, cost-per-view (CPV), click-through rates (CTR), and conversion events to eliminate wasted spend and maximize ROI.",
    },
    {
      title: "Testing and Optimization",
      description: "We run ongoing tests on video hooks, calls-to-action, thumbnail designs, and audience segments, continuously scaling the top-performing creative angles.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for YouTube Ads",
    points: [
      "Goal-Focused Approach: We align your campaigns directly with core revenue metrics-focusing on conversions, lead quality, and customer acquisition costs rather than empty view counts.",
      "Focus on Quality Leads: We design video funnels built to filtering out casual browsers, ensuring your sales team receives inquiries from serious, high-intent prospects.",
      "Dedicated Team: You partner with experienced video strategists, copywriters, and media buyers who know how to capture attention and drive action through video content.",
      "Creative Support for Ads: We take the stress out of video creation by providing complete scriptwriting, storyboarding, and creative editing guidance tailored to high-converting ad frameworks.",
      "Advanced Techniques: We deploy sophisticated strategies including placement exclusions, sequential video storytelling, site retargeting, and custom search-intent targeting to capture ready-to-buy users.",
      "Regular Monitoring and Updates: You stay fully informed with clear performance updates, real-time campaign adjustments, and ongoing optimizations to keep campaign results growing.",
      "Custom Strategy for Every Business: Every business is different, so we create a strategy based on your industry, audience, and goals. This helps in achieving better and more relevant results.",
      "Performance-Driven Work: Our focus remains on results that matter, such as leads, conversions, and return on ad spend. All decisions are based on actual performance data.",
    ],
    description: "Here is why scaling businesses and B2B brands trust Eddinet with their YouTube advertising campaigns:",
  },
  process: {
    heading: "Our YouTube Ads Process",
    steps: [
      {
        num: "01",
        title: "Understanding Your Requirement",
        description: "We begin by analyzing your business, price points, buyer personas, and sales cycle to define key performance metrics and campaign targets.",
      },
      {
        num: "02",
        title: "Strategy Planning",
        description: "We map out an end-to-end video ad strategy-defining offer positioning, budget allocation across ad formats (In-Stream, Bumper, Shorts), and landing page funnels.",
      },
      {
        num: "03",
        title: "Campaign Setup",
        description: "We link your YouTube channel to Google Ads, configure conversion tracking parameters, build custom audience segments, and establish precise bidding rules.",
      },
      {
        num: "04",
        title: "Ad Creation",
        description: "We write compelling, conversion-focused video scripts, guide asset creation, and design high-CTR visual overlays that prompt immediate action.",
      },
      {
        num: "05",
        title: "Testing Phase",
        description: "We launch campaigns with controlled test budgets to evaluate viewer retention, test different hook variations, and identify high-converting audience pockets.",
      },
      {
        num: "06",
        title: "Analytics and Reporting",
        description: "We track campaign performance using transparent data dashboards, delivering actionable insights into total spend, conversion volume, and overall acquisition costs.",
      },
    ],
    description: "Our streamlined execution model ensures your campaigns move smoothly from concept to full-scale deployment.",
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "How do YouTube Ads help grow my business?",
      a: "YouTube Ads allow you to capture viewer attention with engaging video storytelling while targeting users based on their active search habits, interest patterns, and demographic profiles driving both high brand awareness and qualified leads.",
    },
    {
      q: "What YouTube ad formats deliver the best results?",
      a: "Skippable In-Stream Ads are best for driving direct leads and website sales, Bumper Ads (6 seconds) excel at rapid brand recall, and YouTube Shorts Ads are ideal for capturing mobile-first impulse conversions.",
    },
    {
      q: "Do I need expensive video production to run YouTube Ads?",
      a: "No. High-converting YouTube ads depend far more on clear scripting, strong initial hooks, and strong calls-to-action than on cinematic film production. Authentic, direct-to-camera videos and clean product walkthroughs frequently outperform overly polished corporate videos.",
    },
    {
      q: "How do you ensure our ads reach the right target audience?",
      a: "We utilize custom intent targeting (reaching users based on keywords they search on Google), in-market audience segments, channel-specific placements, and custom retargeting lists to place your videos exclusively in front of qualified buyers.",
    },
    {
      q: "How do you measure success on YouTube Ads campaigns?",
      a: "We evaluate success based on actual conversions such as leads generated, sales completed, cost-per-acquisition (CPA), and overall Return on Ad Spend (ROAS)-rather than just passive views or impressions.",
    },
  ],
  crossLinks: crossLinksFor("ads-ppc"),
  featuresHeading: "Our YouTube Ads Services in India",
  featuresDescription: "We manage every element of your video advertising pipeline to make sure your budget attracts qualified, ready-to-buy prospects.",
  docxHeadings: {
    process: "Our YouTube Ads Process",
    faqs: "FREQUENTLY ASKED QUESTIONS",
  },
};
