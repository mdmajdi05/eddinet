// ============================================================================
//  FILE: data/services/child/design-creative/social-media-creatives.ts
//  PAGE: /services/design-creative/social-media-creatives
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/design-creative";
export const child = {
  slug: "social-media-creatives",
  title: "Social Media Creatives",
  metaTitle: "Social Media Creatives Services in India | Eddinet",
  metaDescription: "EDDINET provides high-impact social media design services in Delhi. We merge visual aesthetics, direct-response copywriting hierarchy, and brand strategy to",
  heroHeading: "Social Media Creatives & Design Services in Delhi",
  heroSubheading: "High-Converting Social Media Creatives | Instagram Post Design | Custom Brand Graphics",
  detailedDescription: "EDDINET provides high-impact social media design services in Delhi. We merge visual aesthetics, direct-response copywriting hierarchy, and brand strategy to deliver scroll-stopping social media creatives that capture attention and drive conversions.\n\nStop letting generic, low-quality templates dilute your brand image. Our social media creative agency designs custom, platform-optimized visual assets tailored to boost engagement across Instagram, LinkedIn, Facebook, and performance ad channels.\n\nAt EDDINET, we turn static social feeds into high-performing visual brand engines. Inconsistent visuals, weak typography, and unoptimized ad layouts hurt brand credibility and drive up your customer acquisition costs. Therefore, we engineer custom social media graphics designed to stop the scroll and communicate your core value instantly.\n\nOur creative design team manages your social ecosystem end-to-end:\n\nInstagram Post Design Services: Custom single posts, educational carousels, story layouts, and Reel cover graphics.\n\nPerformance Ad Creatives: High-converting banner graphics for Meta Ads, LinkedIn Ads, and Google Display campaigns.\n\nSocial Media Design Packages: Scalable monthly design retainers tailored for growing startups, e-commerce brands, and enterprises.",
  features: [
    {
      title: "Social Media Creatives",
      description: "We craft custom, high-converting visual assets engineered for maximum engagement across all organic and paid social channels.",
    },
    {
      title: "Social Media Design Services",
      description: "We deliver complete visual branding for social channels-including profile banners, highlight covers, post templates, and promotional graphics.",
    },
    {
      title: "Instagram Post Design Services",
      description: "We create eye-catching Instagram feed graphics, seamless multi-slide carousels, and story templates designed to boost saves, shares, and profile visits.",
    },
    {
      title: "Social Media Graphics",
      description: "We build high-resolution vector assets, custom icons, promotional banners, and infographics that align perfectly with your brand identity.",
    },
    {
      title: "Performance Ad Design",
      description: "We engineer direct-response ad creatives for Meta, LinkedIn, and Twitter designed to lower cost-per-click (CPC) and maximize campaign ROI.",
    },
    {
      title: "LinkedIn & Corporate Branding",
      description: "We design professional LinkedIn carousel posts, thought-leadership graphics, and executive banner visuals that build B2B brand authority.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Social Media Creative Agency?",
    points: [
      "100% Custom Visual Design: Zero pre-made generic templates; every creative is built custom for your brand positioning.",
      "Conversion & Engagement Focused: Designed around visual hierarchy principles that guide the user's eyes directly to your call-to-action.",
      "Fast Turnarounds & Reliability: Consistent deliverable schedules so your content calendar and ad campaigns run without delays.",
      "Flexible Social Media Design Packages: Scalable monthly retainer tiers designed to match your specific content volume needs.",
      "Full Source File Ownership: Complete access to organized vector source files and commercial-rights assets upon handover.",
      "Social Media Design for Multi-Platform Campaigns",
      "Instagram & Facebook: Scroll-stopping single feed posts, high-engagement carousels, story series, and performance ad creatives.",
      "LinkedIn: Professional B2B carousel decks, event banners, infographics, and corporate announcement templates.",
      "E-Commerce & D2C Brands: Product highlight graphics, sale campaign banners, customer review callouts, and promotional offer creatives.",
      "B2B & SaaS Companies: Data-driven infographics, feature highlight graphics, customer testimonial cards, and lead-gen ad designs.",
    ],
  },
  process: {
    heading: "Our Social Media Creative Process",
    steps: [
      {
        num: "01",
        title: "Brand & Content Strategy",
        description: "We analyze your brand guidelines, target audience psychology, and content pillars to establish a distinct visual style for your social channels.",
      },
      {
        num: "02",
        title: "Concept & Layout Drafting",
        description: "Our designers develop creative layout concepts, selecting color palettes, typography scales, and imagery styles that stand out in crowded feeds.",
      },
      {
        num: "03",
        title: "High-Fidelity Asset Design",
        description: "We build pixel-perfect graphics using Adobe Illustrator, Photoshop, and Figma-optimizing aspect ratios and export settings for each platform.",
      },
      {
        num: "04",
        title: "Review & Iteration",
        description: "We share initial drafts with your team, incorporating feedback rapidly to refine messaging, visual hierarchy, and brand alignment.",
      },
      {
        num: "05",
        title: "Source File Handover & Publishing",
        description: "We deliver export-ready files (PNG, JPEG, MP4) alongside editable source files, organized systematically for seamless publishing.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are social media creatives?",
      a: "Social media creatives are custom visual assets-such as feed graphics, carousel posts, stories, and ad banners-designed to communicate brand messaging, drive engagement, and generate conversions on social platforms.",
    },
    {
      q: "What is included in your social media design services?",
      a: "Our services cover custom Instagram post design, LinkedIn carousels, Facebook ad banners, story layouts, profile branding, cover graphics, and full monthly design retainers.",
    },
    {
      q: "Do you offer monthly social media design packages?",
      a: "Yes. We offer flexible monthly social media design packages based on post volume and campaign requirements, providing a dedicated team of designers for your brand.",
    },
    {
      q: "What makes EDDINET a leading social media creative agency?",
      a: "We blend high-end visual design with performance marketing strategy. Every graphic we produce is optimized for visual hierarchy, audience psychology, and platform-specific engagement algorithms.",
    },
    {
      q: "Do you provide editable source files for approved graphics?",
      a: "Yes. We deliver all export-ready, high-resolution formats alongside full editable source files (Figma, PSD, AI) for your visual asset library.",
    },
    {
      q: "How long does it take to deliver a set of social media graphics?",
      a: "Standard batch deliveries (such as a 10-to-15 post package) are delivered within 3 to 5 business days, with urgent ad creative turnarounds available upon request.",
    },
  ],
  crossLinks: crossLinksFor("design-creative"),
  featuresHeading: "Our Social Media Design Services in Delhi",
  docxHeadings: {
    about: "About EDDINET: Social Media Creative Experts",
    process: "Our Social Media Creative Process",
    faqs: "Frequently Asked Questions About Social Media Design Services",
  },
};
