// ============================================================================
//  FILE: data/services/child/ads-ppc/linkedin-ads.ts
//  PAGE: /services/ads-ppc/linkedin-ads
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
export const child = {
  slug: "linkedin-ads",




  title: "LinkedIn Ads",
  metaTitle: "LinkedIn Ads Services in India | Eddinet",
  metaDescription: "At Eddinet, we build and manage B2B LinkedIn Advertising campaigns that directly connect your offer with high-value decision-makers.",
  heroHeading: "LinkedIn Ads Agency in India",
  heroSubheading: "At Eddinet, we manage performance-driven LinkedIn Advertising campaigns that connect your B2B offer directly with key decision-makers. As a specialized LinkedIn Ads agency in India, we handle job-title targeting, account-based marketing (ABM) setups, ad copywriting, and daily bid optimizations to generate high-quality B2B leads, drive pipeline growth, and deliver a clear return on ad spend (ROAS).",

  detailedDescription: "At Eddinet, we build and manage B2B LinkedIn Advertising campaigns that directly connect your offer with high-value decision-makers. As a performance-driven LinkedIn Ads agency in India, we eliminate wasted spend by targeting verified job titles, executive seniorities, and specific account lists.\n\nFrom writing high-converting B2B ad copy and designing native lead gen forms to daily bid management and pipeline tracking, we focus directly on lowering your Cost Per Lead (CPL) and increasing your qualified B2B deal volume.",
  features: [
    {
      title: "Audience Targeting",
      description: "We reach exact decision-makers by filtering through job titles, company size, seniority levels, specific industries, and matched account lists to eliminate wasted ad spend on unqualified clicks.",
    },
    {
      title: "Ad Creative and Copy",
      description: "We craft compelling B2B ad copy, visual carousel banners, Thought Leader ads, and native lead gen forms designed to capture attention, build trust, and prompt immediate conversions in busy professional feeds.",
    },
    {
      title: "Funnel-Based Account Architecture",
      description: "We organize your LinkedIn Campaign Manager account with clean objective-based structures separating cold prospecting, account-based retargeting, and lead-gen forms for granular budget control.",
    },
    {
      title: "Daily Lead Cost & Metric Audits",
      description: "Our team continuously audits daily metrics, monitoring Click-Through Rates (CTR), Cost Per Lead (CPL), and conversion rates to make swift, real-time optimizations and protect your ad budget.",
    },
    {
      title: "Testing and Optimization",
      description: "We run systematic A/B tests on creative hooks, call-to-action buttons, lead form fields, and audience parameters to continuously lower acquisition costs and maximize pipeline value.",
    },
  ],
  benefits: [],
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for LinkedIn Ads",
    points: [
      "Goal-Focused Approach: We align campaign performance directly with your pipeline value and qualified lead volume-not superficial impressions or empty clicks.",
      "Focus on Decision-Makers: We ensure your ads land in front of verified CXOs, VPs, Directors, and key purchasing authorities who have the actual budget to buy your solutions.",
      "Dedicated Team: You work with specialized B2B marketers and media buyers who understand complex sales cycles, account-based marketing, and high-ticket lead generation.",
      "Creative and Listing Support: From high-converting landing pages to native LinkedIn lead forms and downloadable lead magnets, we optimize every touchpoint to convert traffic into meetings.",
      "Advanced Techniques: We leverage advanced LinkedIn strategies including Account-Based Marketing (ABM), retargeting website visitors, lookalike audience modeling, and Thought Leader ad amplification.",
      "Regular Monitoring and Updates: Stay fully informed with clear performance reporting tracking cost per lead, lead quality feedback, overall ad spend, and pipeline metrics.",
      "Custom Strategy for Every Business: Every B2B company has a unique buyer persona. We build tailored campaign structures suited specifically to your industry, target deal size, and sales cycle duration.",
      "Performance-Driven Work: Our decisions are backed entirely by live campaign data. We continuously iterate messaging and targeting parameters to drive down acquisition costs and improve CPL.",
    ],
  },
  process: {
    heading: "Our LinkedIn Ads Process",
    steps: [
      {
        num: "01",
        title: "Understanding Your Requirement",
        description: "We analyze your B2B sales cycle, deal size, target buyer personas, and revenue goals to determine the most profitable LinkedIn campaign strategy.",
      },
      {
        num: "02",
        title: "Strategy Planning",
        description: "We map out an end-to-end B2B funnel selecting optimal ad formats (Single Image, Document Ads, Lead Gen Forms, or Thought Leader Ads) based on your campaign objectives.",
      },
      {
        num: "03",
        title: "Campaign Setup",
        description: "We configure the LinkedIn Insight Tag, set up custom conversion events, build matched audiences, and structure campaign groups aligned with your budget.",
      },
      {
        num: "04",
        title: "Ad Creation",
        description: "We write high-converting, benefit-driven ad copy and design professional visual assets that communicate your value proposition directly to senior executives.",
      },
      {
        num: "05",
        title: "Testing Phase",
        description: "We launch campaigns with controlled test budgets to evaluate audience response, measure lead quality, and isolate winning creative variations.",
      },
      {
        num: "06",
        title: "Optimization and Improvement",
        description: "We double down on high-performing segments, refine targeting parameters to exclude low-quality titles, and adjust bidding options to scale lead volume cost-effectively.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "Why are LinkedIn Ads more expensive than Facebook or Google Ads?",
      a: "LinkedIn offers unmatched professional demographic data allowing you to target users by exact job title, company name, industry, and seniority. While Cost Per Click (CPC) is higher, the lead quality is significantly superior for high-ticket B2B offers.",
    },
    {
      q: "What is the minimum budget recommended for LinkedIn Ads?",
      a: "Because LinkedIn's auction operates at higher baseline costs, we recommend a minimum monthly ad spend that allows for sufficient daily click volume to test audience segments, gather conversion data, and optimize campaign performance effectively.",
    },
    {
      q: "Are LinkedIn Lead Gen Forms better than sending traffic to a landing page?",
      a: "LinkedIn Native Lead Gen Forms generally deliver higher conversion rates and lower Cost Per Lead (CPL) because they auto-fill user data directly within the app. However, landing pages work better when your offer requires detailed explanation or complex user qualification.",
    },
    {
      q: "How do you track conversion quality from LinkedIn campaigns?",
      a: "We implement the LinkedIn Insight Tag on your site to track conversion actions, and we work closely with your sales team to review incoming lead quality and closed-won deals-ensuring we optimize for revenue, not just form fills.",
    },
    {
      q: "How quickly can we expect qualified leads from LinkedIn Ads?",
      a: "Campaigns start delivering impressions and clicks as soon as they are approved. Initial leads often arrive within the first week, while the first 2 to 4 weeks focus on refining job-title targeting and creative messaging to consistently drop your Cost Per Lead (CPL).",
    },
  ],
  crossLinks: crossLinksFor("ads-ppc"),
  featuresHeading: "Our LinkedIn Ads Services in India",
  docxHeadings: {
    about: "About LinkedIn Ads Agency",
    process: "Our LinkedIn Ads Process",
    faqs: "FREQUENTLY ASKED QUESTIONS",
  },
};
