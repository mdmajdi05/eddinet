// ============================================================================
//  FILE: data/services/child/hosting-migration/website-hosting.ts
//  PAGE: /services/hosting-migration/website-hosting
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/hosting-migration";
export const child = {
  slug: "website-hosting",
  title: "Website Hosting",
  metaTitle: "Website Hosting Services in India | Eddinet",
  metaDescription: "Eddinet provides website hosting services in India that keep your website fast, secure, and always available. We manage the server, backups, and security, so",
  heroHeading: "Website Hosting Services in India",
  heroSubheading: "Business Website Hosting | Secure Servers & Backups | 24/7 Monitoring",
  detailedDescription: "Eddinet provides website hosting services in India that keep your website fast, secure, and always available. We manage the server, backups, and security, so you never have to. As a result, your visitors get quick pages and you get a website that simply works.\n\nEddinet is a web hosting company in India built around certified sysadmins and DevOps engineers. We help businesses replace unreliable hosting with one well-managed, dependable setup.\n\nWe listen first, then review your website, traffic, and goals before recommending a plan. Our reports use plain language, so everyone on your team can understand them. At the end of each project, we hand over clear documentation.\n\nGood hosting should feel invisible. It works quietly and never surprises you. That is the standard we follow on every project.",
  features: [
    {
      title: "Business Website Hosting in India",
      description: "Our business website hosting suits company sites, online stores, and lead-generation pages. First, we size your server to match your traffic. Then we tune it for speed, so pages load quickly even during busy periods.",
    },
    {
      title: "Secure Website Hosting in India",
      description: "Our secure website hosting protects your site from common online threats. We install SSL certificates, configure firewalls, and apply regular security patches. In addition, we scan for malware and suspicious activity.",
    },
    {
      title: "Reliable Web Hosting Provider Support in India",
      description: "As a reliable web hosting provider, we monitor your server around the clock. Automated alerts flag problems early. Because of this, our engineers often fix issues before your visitors notice.",
    },
    {
      title: "Website Hosting Setup and Migration in India",
      description: "We set up your new hosting and move your existing website with care. Every migration is planned, backed up, and tested first. Your files, databases, and emails arrive complete and ready to use.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Website Hosting Services in India",
    points: [
      "Engineers, not ticket bots: You speak to real sysadmins who know your setup. Questions get clear answers, not scripted replies. This saves you time when something needs attention.",
      "Backups you can trust: We run regular backups and verify that they restore properly. As a result, a mistake or attack does not become a disaster. Recovery is quick and well documented.",
      "Security from day one: Every server is hardened, patched, and monitored from launch. Suspicious activity is flagged early. Your visitors also see the trusted padlock of a valid SSL certificate.",
      "Speed-focused setup: We tune caching, server settings, and resources for fast page loads. Faster sites keep visitors longer. They also support better search performance.",
      "Room to grow: Your plan scales when traffic increases. You never face a forced rebuild. We simply upgrade what you already use.",
      "Indian business hours support: Our team understands local time zones and responds when your day starts. Therefore, urgent issues get attention when you need it most. You always know who is handling your site.",
    ],
    description: "We measure success by faster load times, stronger uptime, and fewer support headaches.",
  },
  process: {
    heading: "Our Process for Website Hosting Setup in India",
    steps: [
      {
        num: "01",
        title: "Website review",
        description: "We study your current site, traffic, and software. This shows what your hosting really needs. It also helps us avoid plans that are too small or too costly.",
      },
      {
        num: "02",
        title: "Plan selection",
        description: "We recommend the right hosting type and server size for your goals. As a result, you pay only for what you need. Your plan can grow later without a rebuild.",
      },
      {
        num: "03",
        title: "Server setup",
        description: "Next, we configure the server, security, SSL, and backups. We also connect your domain and email. Everything is checked before your site goes live.",
      },
      {
        num: "04",
        title: "Migration and testing",
        description: "Then we move your website and test speed, forms, links, and checkout pages. Any issue is fixed before the switch. This protects both your visitors and your search rankings.",
      },
      {
        num: "05",
        title: "Go-live and monitoring",
        description: "We switch traffic during low-traffic hours to reduce the impact. Monitoring tools then track uptime and speed. Problems are caught and resolved quickly.",
      },
      {
        num: "06",
        title: "Handover and support",
        description: "Finally, we share documentation and answer your team's questions. You also get regular health checks. As your traffic grows, we adjust your hosting to match.",
      },
    ],
    description: "Every Eddinet project follows a clear path, from the first review to ongoing support.",
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are website hosting services in India?",
      a: "Website hosting services store your website files on a secure server that stays connected to the internet. When someone visits your domain, the server delivers your pages quickly. A good provider also handles security, backups, and monitoring.",
    },
    {
      q: "How do I choose the best web hosting company in India?",
      a: "Look at support quality, backup policy, security features, and server speed. Check whether real engineers answer your questions. Also make sure the provider can scale your plan as your traffic grows.",
    },
    {
      q: "How much do website hosting services cost in India?",
      a: "The price depends on your traffic, storage, security needs, and level of support. A small business site needs far less than a busy online store. After a short discovery call, we share a clear quote with no hidden charges.",
    },
    {
      q: "What is the difference between shared, VPS, and cloud hosting?",
      a: "Shared hosting splits one server among many websites and suits small sites. VPS hosting gives you dedicated resources and more control. Cloud hosting spreads your site across several servers, which handles traffic spikes better.",
    },
    {
      q: "Is business website hosting in India different from regular hosting?",
      a: "Yes. Business hosting focuses on uptime, speed, security, and quick support, because downtime costs you sales. It usually includes SSL, regular backups, and monitoring. Personal sites rarely need this level of protection.",
    },
    {
      q: "How does secure website hosting protect my site?",
      a: "It combines SSL encryption, firewalls, regular patching, malware scanning, and verified backups. Together, these layers block common attacks and limit damage if something goes wrong. No provider can promise total immunity, but strong security greatly reduces your risk.",
    },
    {
      q: "Will my website go down when I switch hosting providers?",
      a: "We aim for minimal downtime. We build and test your site on the new server first. Then we switch traffic during low-traffic hours, so visitors barely notice.",
    },
    {
      q: "Do you provide support after the hosting setup?",
      a: "Yes. We provide monitoring, regular health checks, and ongoing support plans. You can also upgrade your hosting anytime as your business grows.",
    },
  ],
  crossLinks: crossLinksFor("hosting-migration"),
  featuresHeading: "Our Website Hosting Services in India",
  featuresDescription: "We focus on four core service areas. Each one is built around your traffic, budget, and growth plans.",
  docxHeadings: {
    about: "About Us: Web Hosting Company in India",
    process: "Our Process for Website Hosting Setup in India",
    faqs: "FAQs About Website Hosting Services in India",
  },
};
