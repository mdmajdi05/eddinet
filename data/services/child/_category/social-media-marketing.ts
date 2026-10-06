// ============================================================================
//  FILE: data/services/child/_category/social-media-marketing.ts
//  CATEGORY: /services/social-media-marketing
//
//  Ye category ke US blocks ka single source hai jo sabhi child pages par
//  bilkul same hain.  Page files ise import karti hain, copy nahi karti —
//  isliye yahan ek change poori category me lagu ho jaata hai aur duplicate
//  text ka scope nahi bachta.
//
//  Sirf >= 2 pages par shared values yahan aati hain; jo block kisi ek page
//  ka unique hai wo usi page file me rehta hai.
// ============================================================================

import type { GeneratedChildService } from "../generated-child-services";

type Block<K extends "features" | "benefits" | "whyChooseUs" | "process" | "faqs"> =
  GeneratedChildService[K];

export const features: Block<"features"> = [
  {
    title: "Platform Strategy & Positioning",
    description: "We identify where your buyers are, what they respond to and how your brand should sound on each channel — then map the full mix to your business goals before a single post goes live. No scattered posting, no copy-pasted captions from one platform to another.",
  },
  {
    title: "Content Calendar & Production",
    description: "Planned, on-brand content built for each platform's format, algorithm and audience behaviour — reels, carousels, short videos, LinkedIn thought leadership and X threads produced on a dependable monthly cadence your team can plan around.",
  },
  {
    title: "Community Management",
    description: "Comments, DMs and mentions handled daily to build real relationships with your audience. Fast, on-brand responses turn followers into enquiries — instead of letting questions, complaints and sales conversations sit unanswered in your inbox.",
  },
  {
    title: "Growth & Audience Research",
    description: "Data-backed targeting, trending formats and content angles that attract the right followers — researched from your competitors, search trends and what your best customers already respond to.",
  },
  {
    title: "Reporting & Optimisation",
    description: "Clear dashboards tying reach and engagement to enquires, clicks and conversions. Every report ends with what we learnt and what we'll do differently next month — not just a wall of numbers.",
  },
  {
    title: "Paid Amplification Support",
    description: "Native ad integration across Meta, LinkedIn and YouTube that puts budget behind your best organic content — so strong posts reach beyond your existing followers and into a much larger lookalike audience.",
  },
  {
    title: "Influencer & Creator Collaboration",
    description: "Identification, outreach and management of creators whose audiences match your buyer persona, giving your brand the third-party credibility that earned content can't always deliver alone.",
  },
  {
    title: "Social Listening & Sentiment Tracking",
    description: "Monitoring what's being said about your brand, your competitors and your industry — so you catch trends early, respond to complaints fast and keep your reputation ahead of problems.",
  },
];

/** benefits — 3 pages: facebook-and-instagram-management, social-media-management, youtube-management */
export const benefits1: Block<"benefits"> = [];

/** benefits — 2 pages: linkedin-management, social-media-strategy */
export const benefits2: Block<"benefits"> = [
  {
    title: "Consistent, On-Brand Presence",
    description: "A recognisable voice and look across every channel you're active on, so your audience always knows it's you — and increasingly trusts that what you post is worth their time.",
  },
  {
    title: "Engagement From Buyers, Not Just Followers",
    description: "We optimise for meaningful interaction from the people who can actually buy — enquiries, shares and conversations — rather than inflating follower counts that never convert.",
  },
  {
    title: "Content That Supports Sales & SEO",
    description: "Every asset feeds your ecosystem: strong content powers retargeting pools for paid ads, reinforces brand searches in SEO and gives your team credible material to share in sales conversations.",
  },
  {
    title: "Clear Reporting Tied to Outcomes",
    description: "Reports connect social activity to business results — traffic, leads and brand mentions — so you always know what your social media spend is returning, not just how many people saw it.",
  },
  {
    title: "Time Back in Your Week",
    description: "Our team handles the planning, writing, design, posting and community management, so your founders and staff stop being unpaid social media managers and get back to running the business.",
  },
  {
    title: "A Reputation That Compounds",
    description: "Months of consistent, quality content and fast, helpful responses build a brand people remember and recommend — a moat that competitors can't buy with ads.",
  },
];

export const whyChooseUs: Block<"whyChooseUs"> = {
  heading: "Why Businesses Pick Eddinet for Social Media in India",
  points: [
    "Growth System, Not a Vanity Channel: We treat social as part of your growth system, not a separate vanity channel reporting likes and impressions.",
    "Platform-Smart Content: Content is built for the platform and the buyer with a consistent monthly cadence your team can plan around.",
    "Human Community Management: Community is managed daily by real humans — not scheduled bots — so enquiries never sit unanswered.",
    "Paid + Organic Together: Paid and organic are planned together, so budget amplifies content that has already proved itself.",
    "Impact-Focused Reporting: Reporting shows engagement quality and business impact, with clear recommendations every single month.",
    "One System Across Platforms: We run Meta, Instagram, LinkedIn, YouTube and X as one system — not five separate agencies.",
  ],
};

export const process: Block<"process"> = {
  heading: "How Eddinet Works, Step by Step",
  steps: [
    {
      num: "01",
      title: "Discovery & Full Audit",
      description: "We review your current presence, competitors and audience — including which posts worked, which flopped and where your competitors are winning attention — to identify the fastest opportunities.",
    },
    {
      num: "02",
      title: "Strategy & Roadmap",
      description: "Channel plan, content pillars, tone of voice and a 30/60/90-day roadmap are agreed before we start creating, so everyone knows exactly what's being done and why.",
    },
    {
      num: "03",
      title: "Content & Campaign Build",
      description: "Assets, captions and schedules are produced per platform and aligned to your monthly editorial calendar, with a mix of brand, educational, social proof and promotional content.",
    },
    {
      num: "04",
      title: "Publishing & Daily Community",
      description: "Posts go live on schedule with active community management — comments answered, DMs responded to and engagement seeded — so the brand is present every single day, not just on posting days.",
    },
    {
      num: "05",
      title: "Measure & Iterate",
      description: "Performance is reviewed monthly, winning formats are doubled down on, weak content is replaced and the strategy is refined from real response data rather than opinions.",
    },
    {
      num: "06",
      title: "Scale What Works",
      description: "Once a format, angle or campaign proves itself organically, we scale it with paid amplification and creator collaboration to compound the results month over month.",
    },
  ],
};

export const faqs: Block<"faqs"> = [
  {
    q: "How often will you post on our channels?",
    a: "We build a cadence based on your audience and resources — typically 12 to 20 posts per channel per month, with daily stories or status updates where they add value — and adjust constantly based on what the data shows is working. Consistency beats volume: we'd rather post four great pieces than ten rushed ones.",
  },
  {
    q: "Do you manage paid social ads too?",
    a: "Yes. We run Meta, LinkedIn and YouTube ad campaigns as part of the same content system, amplifying your best organic content into lookalike audiences. Because the ads are built on content that's already proven, we protect spend efficiency and scale only what works.",
  },
  {
    q: "How long before we see results from social media?",
    a: "Consistency compounds. Most brands see clear movement in engagement and audience quality within 4 to 8 weeks, and measurable enquiries or traffic within a quarter — provided the strategy, content and community system is given time to build momentum. We set honest milestones at the start so expectations are realistic.",
  },
  {
    q: "Can you handle our content creation too?",
    a: "Yes — copywriting, design, short-video editing and captions are all included. We handle the full production pipeline and deliver final, ready-to-post assets. If you have your own in-house creative, we can also work as a strategy-plus-management layer around your team.",
  },
  {
    q: "Which platforms will Eddinet manage for us?",
    a: "Platform choice is driven by your audience and buying journey. We most commonly manage Facebook, Instagram, LinkedIn and YouTube, and build strategy for emerging platforms where your market is active.",
  },
  {
    q: "Do you handle community management and content too?",
    a: "Yes. Strategy, content, community management and advertising are planned together so organic and paid social support one another instead of operating in silos.",
  },
  {
    q: "How quickly can we expect results from social media?",
    a: "Consistent engagement and follower growth usually appear within 4 to 8 weeks. Lead and revenue impact builds over 3 to 6 months as your content, community and paid reach mature together.",
  },
  {
    q: "What kind of content do you create for our channels?",
    a: "Platform-native content - posts, reels, stories, carousels and video - built around your brand voice, audience interests and campaign goals, with a monthly calendar you can review and approve.",
  },
  {
    q: "Do we approve content before it goes live?",
    a: "Yes. You get a monthly content calendar and can review posts in advance. Once workflows are comfortable, many clients approve batches to keep the pipeline moving.",
  },
];
