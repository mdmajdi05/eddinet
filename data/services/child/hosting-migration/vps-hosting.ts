// ============================================================================
//  FILE: data/services/child/hosting-migration/vps-hosting.ts
//  PAGE: /services/hosting-migration/vps-hosting
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/hosting-migration";
export const child = {
  slug: "vps-hosting",
  title: "VPS Hosting",
  metaTitle: "VPS Hosting Services in India | Eddinet",
  metaDescription: "Eddinet provides VPS hosting in India for websites and applications that have outgrown shared hosting. You get dedicated resources, full control, and a",
  heroHeading: "VPS Hosting in India",
  heroSubheading: "Managed VPS Hosting | Linux VPS with Root Access | Affordable & Scalable",
  detailedDescription: "Eddinet provides VPS hosting in India for websites and applications that have outgrown shared hosting. You get dedicated resources, full control, and a server that stays fast under load. Best of all, our engineers manage the technical work, so you can focus on your business.\n\nEddinet is a team of certified sysadmins and DevOps engineers. We help businesses move from crowded shared servers to stable, well-managed VPS setups.\n\nWe listen first, then review your traffic, software, and goals before recommending a plan. Our reports use plain language, so technical and non-technical teams can both act on them. At the end of each project, we hand over complete documentation.\n\nGood hosting should feel invisible. It works quietly and never surprises you. That is the standard we follow on every project.",
  features: [
    {
      title: "Managed VPS Hosting in India",
      description: "Our managed VPS hosting gives you an expert team without the cost of hiring one. We handle setup, security patches, backups, and monitoring. In addition, our engineers respond quickly when something needs attention.",
    },
    {
      title: "Linux VPS Hosting in India",
      description: "Our Linux VPS hosting supports Ubuntu, Debian, AlmaLinux, and other popular distributions. First, we install and configure the stack you need, such as Nginx, Apache, PHP, or Node.js. Then we tune it for speed and stability.",
    },
    {
      title: "Affordable VPS Hosting in India",
      description: "Our affordable VPS hosting starts with the right-sized plan, not the biggest one. We match CPU, RAM, and storage to your real traffic. Because of this, you pay only for what you use and upgrade when you need more.",
    },
    {
      title: "VPS Hosting with Root Access in India",
      description: "Need full control? Our VPS hosting with root access lets you install custom software and change server settings freely. Meanwhile, we keep the server secure with firewalls, SSH protection, and regular updates. You get freedom without the risk.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for VPS Hosting in India",
    points: [
      "Isolated resources, steady speed: Your CPU and RAM are reserved for you. Other websites cannot slow your pages down. Performance stays steady, even during busy hours.",
      "Managed server care: Many VPS providers hand you a blank server and leave. We stay involved with patches, backups, and monitoring. This saves you from late-night server emergencies.",
      "Root access with guardrails: You keep full control of your server. Meanwhile, we monitor for risky changes and security gaps. If something breaks, we help you fix it fast.",
      "Right-sized, scalable plans: We recommend the plan your traffic actually needs. You never pay for power you will not use. Upgrades take minutes, not days.",
      "Verified backups and quick recovery: We run regular backups and confirm that they restore correctly. As a result, a mistake or attack does not become a disaster. Recovery is fast and well documented.",
      "Engineers in your time zone: Our team responds when your Indian business day starts. Therefore, urgent issues get attention when you need it most. You speak to real engineers who know your setup.",
    ],
  },
  process: {
    heading: "Our Process for VPS Hosting Setup in India",
    steps: [
      {
        num: "01",
        title: "Workload assessment",
        description: "We study your website, traffic, and software needs. This shows how much power you really need. It also helps us avoid plans that are too small or too costly.",
      },
      {
        num: "02",
        title: "Resource and OS planning",
        description: "We recommend the right CPU, RAM, storage, and Linux distribution. As a result, your VPS fits your workload from day one. You can scale up later without a rebuild.",
      },
      {
        num: "03",
        title: "Server build and hardening",
        description: "Next, we install your software stack and lock down access. We configure firewalls, SSH keys, and automatic updates. Everything is checked before your site goes live.",
      },
      {
        num: "04",
        title: "Data migration and testing",
        description: "Then we move your files and databases to the new VPS. We test speed, forms, links, and checkout pages on the new server. Any issue is fixed before the switch.",
      },
      {
        num: "05",
        title: "Go-live and resource monitoring",
        description: "We switch traffic during low-traffic hours to reduce the impact on visitors. Monitoring tools then track uptime, CPU, and memory. Problems are caught and resolved quickly.",
      },
      {
        num: "06",
        title: "Handover and scaling support",
        description: "Finally, we share documentation and answer your team's questions. You also get regular health checks. As your traffic grows, we adjust your resources to match.",
      },
    ],
    description: "Every Eddinet project follows a clear path, from the first review to ongoing support.",
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What is VPS hosting in India?",
      a: "VPS stands for Virtual Private Server. It divides one physical server into separate virtual servers, each with its own dedicated CPU, RAM, and storage. You get more speed, privacy, and control than shared hosting at a lower cost than a dedicated server.",
    },
    {
      q: "When should I upgrade from shared hosting to a VPS?",
      a: "Upgrade when your site slows down during traffic spikes, hits resource limits, or needs custom software. A VPS is also wise if you handle customer data or online payments. It gives you isolation and stronger security.",
    },
    {
      q: "What is managed VPS hosting in India, and do I need it?",
      a: "Managed VPS hosting means the provider handles updates, security, backups, and monitoring for you. You need it if you lack a server admin or prefer to focus on your business. Unmanaged plans suit teams with in-house Linux experts.",
    },
    {
      q: "How much does VPS hosting cost in India?",
      a: "Price depends on CPU, RAM, storage, bandwidth, and the level of management. A small business site needs far less than a busy online store. After a short discovery call, we share a clear quote with no hidden charges.",
    },
    {
      q: "Do I get root access on your VPS hosting?",
      a: "Yes, root access is available on our plans, so you can install software and change settings. If you prefer, we manage the server for you and keep root access limited. Either way, we advise you on safe practices.",
    },
  ],
  crossLinks: crossLinksFor("hosting-migration"),
  featuresHeading: "Our VPS Hosting Services in India",
  featuresDescription: "We focus on four core service areas. Each one is built around your traffic, budget, and growth plans.",
  docxHeadings: {
    about: "About Us: Managed VPS Hosting Provider in India",
    process: "Our Process for VPS Hosting Setup in India",
    faqs: "FAQs",
  },
};
