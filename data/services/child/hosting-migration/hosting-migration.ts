// ============================================================================
//  FILE: data/services/child/hosting-migration/hosting-migration.ts
//  PAGE: /services/hosting-migration/hosting-migration
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/hosting-migration";
export const child = {
  slug: "hosting-migration",
  title: "Hosting Migration",
  metaTitle: "Hosting Migration Services in India | Eddinet",
  metaDescription: "Eddinet delivers hosting and migration services in India that keep your website and applications fast, secure, and online.",
  heroHeading: "Hosting Migration Services in India",
  heroSubheading: "Cloud & VPS Hosting | Managed Hosting Support | Safe Website & Server Migration",
  detailedDescription: "Eddinet delivers hosting and migration services in India that keep your website and applications fast, secure, and online. We set up your hosting, move your data safely, and manage the servers behind it. As a result, you focus on your business while we handle the technical work.\n\nSlow servers and risky migrations cost you traffic and sales. Our team plans every move carefully, so your site stays available. Therefore, you grow without worrying about your infrastructure.\n\nEddinet is a web hosting and server migration company in India built around certified sysadmins and DevOps engineers. We help businesses replace unreliable hosting and messy server setups with one clear, well-managed plan.\n\nWe listen first, then review your current setup before making any change. Our reports use plain language, so technical and non-technical teams can act on them. At the end of each project, we hand over complete documentation.\n\nGood hosting should feel invisible. It works quietly, stays fast, and never surprises you. That is the standard we follow on every project.",
  features: [
    {
      title: "Website, VPS, and Cloud Hosting Services in India",
      description: "We host websites of every size on shared, VPS, and cloud platforms. Small sites get reliable, affordable plans. Growing businesses get scalable cloud hosting with room for traffic spikes. We help you pick the right plan, so you never overpay or outgrow your server.",
    },
    {
      title: "Managed Hosting and Server Support in India",
      description: "Our managed hosting service gives you an expert team without the cost of hiring one. We handle monitoring, security patches, backups, and performance tuning. In addition, our engineers respond quickly when something needs attention.",
    },
    {
      title: "Application, Database, and DNS Hosting in India",
      description: "We host web applications, databases, and domains on stable, secure infrastructure. This includes MySQL and PostgreSQL databases, plus managed DNS with high uptime. Because of this, your app, data, and domain all work together smoothly.",
    },
    {
      title: "Website, Hosting, and Database Migration Services in India",
      description: "Our hosting and migration specialists move your website, server, or database to a new home with minimal downtime. We also handle WordPress and Shopify store migrations. Every move is tested before the switch, so your data arrives complete and intact.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Hosting and Migration Services in India",
    points: [
      "Migration without the panic: We plan every move with backups and testing. As a result, your site stays online with minimal downtime. Your search rankings stay protected during the switch.",
      "One partner for hosting and migration: You do not need separate vendors for servers, domains, and data moves. Everything is managed by one accountable team. This saves time and avoids finger-pointing.",
      "Stack-friendly setup: We work with WordPress, Laravel, Node.js, Shopify, and custom applications. You never face a forced rebuild. We simply give your existing stack a better home.",
      "Security built in: Every server is hardened, patched, and backed up from day one. Suspicious activity is flagged early. Your data stays protected as you grow.",
      "Plain-language reports: Managers get clear summaries of uptime and performance. Meanwhile, engineers get the technical detail they need. Everyone knows exactly what was done.",
      "Indian business hours support: Our team understands local time zones and responds when your day starts. Therefore, urgent issues get attention when you need it most. You speak to real engineers who know your setup.",
    ],
    description: "We measure success by faster load times, stronger uptime, and smooth, low-risk migrations.",
  },
  process: {
    heading: "Our Process for Hosting and Migration Setup in India",
    steps: [
      {
        num: "01",
        title: "Infrastructure review",
        description: "We study your current hosting, traffic, and applications. This shows what works and what needs to change. It also helps us choose the right plan and migration method.",
      },
      {
        num: "02",
        title: "Planning and backup",
        description: "We build a clear plan with timelines and a full backup of your data. As a result, nothing is lost if something goes wrong. Backups are verified before we touch your live site.",
      },
      {
        num: "03",
        title: "Setup and configuration",
        description: "Next, we prepare the new server with the right software, security, and settings. We also connect your domain and DNS records. Everything is configured before your site goes live.",
      },
      {
        num: "04",
        title: "Migration and testing",
        description: "Then we move your files, databases, and emails to the new environment. We test speed, links, forms, and checkout flows on the new server. Any issue is fixed before the switch.",
      },
      {
        num: "05",
        title: "Go-live and monitoring",
        description: "We switch traffic during low-traffic hours to reduce the impact on visitors. Monitoring tools then watch performance and uptime closely. Problems are caught and fixed right away.",
      },
      {
        num: "06",
        title: "Handover and support",
        description: "Finally, we train your team and share full documentation. You also get ongoing support and regular health checks. As your business grows, we adjust your hosting to match.",
      },
    ],
    description: "Every Eddinet project follows a clear path, from the first review to ongoing support.",
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are hosting and migration services in India?",
      a: "Hosting services keep your website or application running on a secure, fast server. Migration services move your site, data, or server to a new host safely.",
    },
    {
      q: "Why do I need a web hosting and server migration company in India?",
      a: "Migrations can cause downtime, data loss, and broken pages when done alone. An expert team plans, tests, and completes the move properly.",
    },
    {
      q: "Which hosting types do you offer?",
      a: "We offer website hosting, VPS hosting, cloud hosting, managed hosting, application hosting, and database hosting.",
    },
    {
      q: "Will my website go down during migration?",
      a: "We aim for minimal downtime. We test everything on the new server first and switch traffic during low-traffic hours.",
    },
    {
      q: "Can you migrate WordPress and Shopify stores?",
      a: "Yes. We handle WordPress site moves and Shopify store data migration, including products, pages, and customer records.",
    },
    {
      q: "How long does a migration take?",
      a: "Simple website moves take a few days. Large databases or multi-server setups may take longer, and we share a timeline after the review.",
    },
    {
      q: "Do you offer support after migration?",
      a: "Yes. We provide monitoring, regular health checks, and ongoing support plans.",
    },
  ],
  crossLinks: crossLinksFor("hosting-migration"),
  featuresHeading: "Our Hosting and Migration Services in India",
  featuresDescription: "We focus on four core service areas. Each one is built around your traffic, budget, and growth plans.",
  docxHeadings: {
    about: "About Us: Web Hosting and Server Migration Company in India",
    process: "Our Process for Hosting and Migration Setup in India",
    faqs: "FAQs",
  },
};
