// ============================================================================
//  FILE: data/services/child/ads-ppc/lead-generation-ads.ts
//  PAGE: /services/ads-ppc/lead-generation-ads
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/ads-ppc";
export const child = {
  slug: "lead-generation-ads",
  title: "Lead Generation Ads",
  metaTitle: "Lead Generation Ads Services in India | Eddinet",
  metaDescription: "At Eddinet, we build performance-driven lead generation campaigns that deliver predictable sales pipelines for businesses across India.",
  heroHeading: "Lead Generation Services in India",
  heroSubheading: "At Eddinet, we solve unpredictable sales pipelines by generating high-intent, verified leads that turn into revenue. As a performance-driven lead generation agency in India, we eliminate wasted ad spend by combining precision targeting, persuasive ad creatives, and high-converting landing pages across Google, Meta, and LinkedIn to consistently lower your Cost Per Lead (CPL).",
  detailedDescription: "At Eddinet, we build performance-driven lead generation campaigns that deliver predictable sales pipelines for businesses across India. As a dedicated lead generation agency, we combine precision audience targeting, conversion-focused landing pages, and multi-channel ad management (Google, Meta, LinkedIn) to acquire qualified B2B and B2C leads, reduce acquisition costs, and maximize your revenue growth.",
  features: [
    {
      title: "Lead Magnet & Offer Strategy",
      description: "We design high-converting lead offers, downloadable guides, and direct response hooks that give target buyers a clear reason to share their contact information immediately.",
    },
    {
      title: "Multi-Channel Buyer Targeting",
      description: "We segment target audiences by intent, job role, demographic data, and online behavior across search and social channels to capture active buyers and eliminate unqualified traffic.",
    },
    {
      title: "Direct-Response Copy & Creatives",
      description: "We write persuasive ad copy and design high-converting visual assets engineered to trigger immediate action, boost click-through rates, and qualify prospects right inside the feed.",
    },
    {
      title: "High-Converting Landing Page Design",
      description: "We build fast-loading, mobile-optimized landing pages and native lead forms structured specifically to turn ad clicks into verified sales inquiries and phone calls.",
    },
    {
      title: "Real-Time Pipeline & Lead Optimization",
      description: "We monitor incoming lead quality, Cost Per Lead (CPL), and campaign conversion rates daily-tuning bids and targeting parameters to continuously improve lead-to-sale ratios.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Lead Generation",
    points: [
      "Expertise in Lead Generation Ads: We specialize exclusively in performance marketing and lead acquisition strategies that drive direct revenue, not empty brand impressions.",
      "Customized Campaigns for Your Business: We build bespoke lead funnels tailored strictly to your specific industry, deal size, and target buyer profile.",
      "Data-Driven Performance Strategies: Every bid adjustment, creative iteration, and budget reallocation is guided strictly by real-time conversion and cost-per-lead analytics.",
      "Engaging Ad Creatives: Our in-house team produces clear, benefit-driven copy and striking graphic assets that capture buyer attention and drive response rates.",
      "Continuous Monitoring & Optimization: We audit campaign performance daily, adjusting targeting and negative keyword lists to protect your budget and maintain lead quality.",
      "Precise Audience Targeting: We reach decision-makers and high-intent buyers directly using advanced demographic, firmographic, and behavioral targeting filters.",
      "Transparent Reporting & Insights: You get straightforward weekly and monthly reports detailing exact lead counts, Cost Per Lead (CPL), ad spend, and conversion metrics.",
      "End-to-End Campaign Management: We handle the entire funnel setup from ad strategy and landing page design to form tracking, CRM integration, and ongoing optimization.",
    ],
  },
  process: {
    heading: "Our Lead Generation Process",
    steps: [
      {
        num: "01",
        title: "Understanding Your Business Goals",
        description: "We evaluate your business model, customer lifetime value, target cost-per-lead limits, and sales process to establish accurate performance benchmarks.",
      },
      {
        num: "02",
        title: "Market & Competitor Analysis",
        description: "We analyze your industry landscape, competitor positioning, and existing offer structures to uncover market gaps and positioning advantages.",
      },
      {
        num: "03",
        title: "Audience Research & Segmentation",
        description: "We identify your ideal customer profile (ICP), map out primary pain points, and define precise targeting parameters across Google, Meta, and LinkedIn.",
      },
      {
        num: "04",
        title: "Campaign Strategy & Planning",
        description: "We select the right mix of channels, ad formats, native lead forms, and landing page funnels to match your specific sales cycle.",
      },
      {
        num: "05",
        title: "Creative Development",
        description: "We craft compelling ad copy, build eye-catching visual creatives, and set up conversion tracking tags across all web assets.",
      },
      {
        num: "06",
        title: "Campaign Launch & Monitoring",
        description: "We launch campaigns with controlled testing budgets, auditing lead flow and lead quality in real time to scale high-performing ad sets quickly.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What is the difference between brand awareness ads and lead generation ads?",
      a: "Brand awareness ads focus on maximizing total impressions and reach, whereas lead generation ads are structured directly to collect user contact details (such as name, email, and phone number) from high-intent prospects ready to purchase.",
    },
    {
      q: "Which ad channels work best for lead generation in India?",
      a: "Channel selection depends on your audience. B2B businesses typically see highest lead quality on LinkedIn Ads and Google Search, while consumer-facing businesses (B2C, Real Estate, Education) scale cost-effectively on Meta (Facebook & Instagram) and Google Ads.",
    },
    {
      q: "How do you ensure incoming leads are qualified and genuine?",
      a: "We filter out low-quality submissions by using custom qualifying questions on lead forms, adding OTP verification where needed, implementing negative audience exclusions, and regularly syncing with your sales team to optimize for closed sales rather than just form fills.",
    },
    {
      q: "How quickly can we start receiving leads after campaign launch?",
      a: "Once campaigns, creatives, and landing pages are live, lead acquisition begins within 24 to 48 hours. The initial 2 to 4 weeks are used to gather data, isolate top-performing targeting criteria, and lower your overall Cost Per Lead (CPL).",
    },
  ],
  crossLinks: crossLinksFor("ads-ppc"),
  featuresHeading: "Our Lead Generation Services in India",
  docxHeadings: {
    about: "About Lead Generation Agency",
    process: "Our Lead Generation Process",
    faqs: "FREQUENTLY ASKED QUESTIONS",
  },
};
