// ============================================================================
//  FILE: data/services/child/mobile-app-development/app-maintenance.ts
//  PAGE: /services/mobile-app-development/mobile-app-maintenance-and-support-services-in-india
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================
// ── HERO FIELDS (top of the page) ─────────────────────────────────────
//   heroEyebrow    = badge chip shown ABOVE the <h1>
//   heroHeading    = the <h1> heading itself
//   heroSubheading = paragraph shown BELOW the <h1>

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/mobile-app-development";
export const child = {
  slug: "mobile-app-maintenance-and-support-services-in-india",
  title: "App Maintenance",
  metaTitle: "App Maintenance Services in India | Eddinet",
  metaDescription: "Launching an app is only the first step. The real challenge is keeping it fast, secure, and bug-free over time.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Post-Launch Support | Bug Fixing | Performance Optimization | SLA-Backed Maintenance",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Mobile App Maintenance & Support Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "Launching an app is only the first step. The real challenge is keeping it fast, secure, and bug-free over time. Eddinet provides comprehensive mobile app maintenance & support services in India. Our goal is simple: fewer crashes, better app store ratings, and a reduced support workload for your team.",
  detailedDescription: "Eddinet is a dedicated mobile app maintenance agency in India serving startups, SMEs, and established businesses with live applications. We ensure your mobile apps remain stable, secure, and high-performing long after launch.\n\nCross-Platform Expertise: Hands-on experience with native iOS, Android, Flutter, and React Native applications.\n\nSLA-Backed Model: Structured maintenance built around clear response and resolution timelines.\n\nProactive Monitoring: Active deployment of crash monitoring tools and real-device testing protocols.\n\nPredictable Outcomes: Fewer urgent issues, smoother release cycles, and reliable app stability.",
  features: [
    {
      title: "Post-Launch App Support Services in India",
      description: "App challenges do not end after deployment. Operating system updates, server changes, and unexpected bugs can impact daily usage. Eddinet provides reliable post-launch app support in India to keep your application operational and up to date. 24/7 Monitoring: Continuous oversight of crashes, server errors, and API slowdowns. Bug Resolution: Fast fixes for user-reported bugs and backend integration failures. Dependency Updates: Regular updates for third-party SDKs, frameworks, and system libraries. OS Compatibility: Timely alignment with new iOS and Android operating system releases. Feature Enhancements: Minor feature adjustments, UI tweaks, and content updates. Store Compliance: Ongoing adherence to Apple App Store and Google Play Store policies. Health Reports: Regular system status updates and performance health reports.",
    },
    {
      title: "App Bug Fixing Services in India",
      description: "Functional errors, broken workflows, and unexpected app behavior damage user trust. As a dedicated app bug fixing agency in India, Eddinet isolates root causes and ships stable, verified code fixes. Crash & Error Resolution: In-depth debugging and tested fixes for application crashes. Functional Fixes: Resolving broken buttons, navigation errors, and failed checkout steps. UI & Layout Corrections: Fixing visual overlaps, font rendering issues, and element alignment across devices. Backend & API Debugging: Resolving integration issues between your mobile app and web servers. Third-Party Link Repair: Restoring broken payment gateways, messaging tools, or CRM integrations.",
    },
    {
      title: "App Performance Optimization Services in India",
      description: "Slow load times, unresponsive screens, and heavy battery consumption push users away. Our app performance optimization services focus on fine-tuning your app's codebase and architecture for maximum speed. Speed & Load-Time Tuning: Accelerating screen rendering times and user interaction responses. Resource Optimization: Reducing battery drain and excessive mobile data usage. Memory & Stability Management: Fixing memory leaks, screen freezes, and janky scrolling. Query & Network Streamlining: Optimizing backend database queries, network requests, and image caching. ANR & Lag Fixes: Eliminating \"Application Not Responding\" errors and frame rate drops.",
    },
    {
      title: "SLA-Based Mobile App Maintenance Services in India",
      description: "Software maintenance requires guaranteed response times rather than vague commitments. Eddinet delivers SLA-based mobile app maintenance in India, enforcing strict timelines based on issue severity. Guaranteed Response: Clear SLA response targets for critical, high, and medium severity issues. Targeted Resolutions: Defined resolution timeframes tailored to the urgency of the problem. Scheduled Windows: Planned maintenance periods to prevent operational disruptions for users. Monthly Audit Reports: Detailed reports covering crashes, performance stats, and resolved bugs. Priority Escalation: Dedicated communication pipelines for emergency production breakdowns. Flexible Coverage: Options for standard business-hours support or 24/7 emergency coverage.",
    },
  ],
  featuresHeading: "Our Mobile App Maintenance Services",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet",
    points: [
      "Years of Experience: Proven track record maintaining apps across multiple tech stacks and industries.",
      "100% Customized Plans: Maintenance scopes and SLAs tailored directly to your app's requirements.",
      "Reliable & Tested Deployments: Every fix is rigorously verified on real physical devices before going live.",
      "2X Faster Fix Delivery: Streamlined processes to ensure rapid resolution of critical issues.",
      "100% Client Satisfaction Focus: Clear communication, regular status reports, and transparent updates.",
      "Pay Only What’s Agreed: Transparent pricing models with zero hidden fees.",
    ],
  },
  process: {
    heading: "Our Process",
    steps: [
      {
        num: "01",
        title: "Understand Your App & Users",
        description: "Study tech stack, user flows, and current operational issues.",
      },
      {
        num: "02",
        title: "Audit Performance & Stability",
        description: "Test across real devices and networks to identify top crashes and slow screens.",
      },
      {
        num: "03",
        title: "Define SLA & Scope",
        description: "Finalize severity levels, response times, and included maintenance tasks.",
      },
      {
        num: "04",
        title: "Set Up Monitoring & Reporting",
        description: "Configure real-time crash tracking tools and automated reporting.",
      },
      {
        num: "05",
        title: "Fix Critical Issues First",
        description: "Stabilize the app with rapid hotfixes and address high-impact bugs.",
      },
      {
        num: "06",
        title: "Ongoing Optimization & Updates",
        description: "Execute routine code tuning, SDK upgrades, and OS compatibility updates.",
      },
      {
        num: "07",
        title: "Scale Support as You Grow",
        description: "Adjust SLA capacity and monitoring resources as active user traffic expands.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What is mobile app maintenance?",
      a: "At Eddinet, we define mobile app maintenance as the continuous engineering process of updating, fixing, and optimizing your live application to ensure it remains fast, secure, and reliable as your business grows.",
    },
    {
      q: "Why do I need post-launch app support?",
      a: "Launching an app is only the first step. New operating system updates can break existing features, external APIs can fail, and unexpected bugs emerge over time. Our post-launch support keeps your app stable, secure, and running without user disruption.",
    },
    {
      q: "What issues do you resolve under bug fixing services?",
      a: "Our engineering team resolves a full range of technical issues, including application crashes, slow screen loading, login failures, broken checkouts, payment gateway errors, and API integration breakdowns.",
    },
    {
      q: "How do you optimize app performance?",
      a: "We perform comprehensive technical audits to identify slow screens, heavy network requests, memory leaks, and unoptimized database queries. From there, we refine code and database architecture to ensure rapid loading and smooth performance.",
    },
    {
      q: "Do you offer SLA-based maintenance plans?",
      a: "Yes, we provide SLA-backed maintenance contracts that offer guaranteed response and resolution timeframes based on the exact severity of the issue.",
    },
    {
      q: "Do you support both iOS and Android apps?",
      a: "Yes, we provide full maintenance support across native iOS (Swift), native Android (Kotlin/Java), and cross-platform applications built on Flutter and React Native.",
    },
  ],
  crossLinks: crossLinksFor("mobile-app-development"),
  docxHeadings: {
    about: "About Eddinet – App Maintenance Agency",
    process: "Our Process",
    faqs: "FAQs",
  },
};
