// ============================================================================
//  FILE: data/services/child/hosting-migration/hosting-migration.ts
//  PAGE: /services/hosting-migration/hosting-migration-services-in-india
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================
// ── HERO FIELDS (top of the page) ─────────────────────────────────────
//   heroEyebrow    = badge chip shown ABOVE the <h1>
//   heroHeading    = the <h1> heading itself
//   heroSubheading = paragraph shown BELOW the <h1>

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/hosting-migration";
export const child = {
  slug: "hosting-migration-services-in-india",
  title: "Hosting Migration",
  metaTitle: "Hosting Migration Services in India | Eddinet",
  metaDescription: "Eddinet delivers hosting and migration services in India that keep your website and applications fast, secure, and online.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Web Hosting Migration | Server Migration Services | Shared Hosting to VPS Moves",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Hosting Migration Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "Eddinet provides hosting migration services in India that move your website and server to a faster, safer home without breaking anything. We audit your current setup, plan the move, and go live only after testing.",
  detailedDescription: "Is your host slow, overpriced, or unresponsive when you need help? Are you afraid that switching providers will break your site or your email? If yes, Eddinet is the solution to your problem.\n\nAs web hosting migration specialists in India, we give you sysadmins who have handled moves across cPanel servers, VPS platforms, and cloud environments. We read your server the way a doctor reads a report: what runs on it, what depends on it, and what could fail. Then we plan the move around those findings and keep you informed in plain language.",
  features: [
    {
      title: "Web Hosting Migration in India",
      description: "Our web hosting migration moves your site between hosts while keeping your setup consistent. We match PHP versions, server software, cron jobs, and SSL certificates. Because of this, your site behaves the same on the new host as it did on the old one.",
    },
    {
      title: "Server Migration Services in India",
      description: "Our server migration services handle full server moves, including multiple sites, databases, mail, and custom configurations. We document the old server before touching it. As a result, no hidden setting or scheduled task gets forgotten.",
    },
    {
      title: "Shared Hosting to VPS Migration in India",
      description: "Outgrown shared hosting? We move you to a VPS with dedicated resources and a setup tuned for your traffic. In addition, we configure security and backups on the new server, so you gain speed and control without extra risk.",
    },
    {
      title: "Migrate to a New Hosting Provider in India",
      description: "Leaving a provider can be tricky, especially if they are slow to cooperate. We plan around that by collecting what we need early and keeping your old service active until the move is verified. Your domain, email, and data stay under your control.",
    },
  ],
  featuresHeading: "Our Hosting Migration Services in India",
  featuresDescription: "We cover four kinds of moves, each with its own risks and checks.",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Hosting Migration Services in India",
    points: [
      "Hidden dependencies found early: Old servers often hide cron jobs, custom modules, and forgotten settings. We uncover them during the audit. This prevents the surprise failures that follow careless moves.",
      "Rollback at every stage: The old host stays intact until you confirm success. If something looks wrong, we switch back quickly. You never face a one-way move.",
      "Rankings and email protected: We keep URLs, redirects, and mail records consistent through the switch. Your search visibility and inbox stay steady. Customers notice nothing except better speed.",
      "Honest advice on where to move: We recommend the platform your traffic actually needs, whether shared, VPS, or cloud. You avoid paying for power you will not use. If your current host is fine, we say so.",
      "Written plan, fixed scope: You get a clear list of what will move and when. Extra work is discussed before it starts. Billing stays free of surprises.",
      "Support in Indian business hours: Our team is online when your working day begins. Urgent issues reach people who already know your migration. Therefore, you spend less time explaining and more time fixing.",
    ],
  },
  process: {
    heading: "Our Process for Hosting Migration in India",
    description: "Here is how we move you from your current host to the new one.",
    steps: [
      {
        num: "01",
        title: "Environment audit",
        description: "We record server software, versions, sites, databases, mail, and scheduled tasks. This exposes hidden dependencies before they cause trouble. It also shows whether your new host is a true match.",
      },
      {
        num: "02",
        title: "Compatibility check",
        description: "We compare the old and new environments and flag differences, such as PHP versions or missing modules. As a result, conflicts are solved on paper, not on launch day. You see the findings in plain language.",
      },
      {
        num: "03",
        title: "Backup and rollback plan",
        description: "Next, we take verified backups and keep the old host running. If anything fails, you can return to the old setup at once. Nothing is cancelled until you approve.",
      },
      {
        num: "04",
        title: "Staged transfer and testing",
        description: "Then we copy data to the new server and test it on a private link. We check pages, logins, forms, email, and performance. Faults are fixed before any visitor sees them.",
      },
      {
        num: "05",
        title: "DNS cutover",
        description: "We lower TTL values ahead of time and switch records at a low-traffic hour. Live checks follow immediately. The old host stays online while the change spreads.",
      },
      {
        num: "06",
        title: "Post-migration monitoring",
        description: "Finally, we watch errors, speed, and email delivery for several days. Once everything is stable, we help you close the old account safely. You receive a checklist showing what was moved and verified.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "How do I know it is time to migrate to a new hosting provider?",
      a: "Warning signs include frequent slowdowns, repeated downtime, weak support, and hitting plan limits. Rising renewal prices without better performance is another clue. If two or more apply, a move is worth planning.",
    },
    {
      q: "What is the difference between hosting migration and website migration?",
      a: "Hosting migration moves your whole hosting environment, including server settings, multiple sites, and mail. Website migration focuses on moving one site's files and data. Many projects involve both, and we scope them together.",
    },
    {
      q: "Is shared hosting to VPS migration difficult?",
      a: "It needs care because a VPS is managed differently, with its own software, security, and resource settings. We build and tune the VPS first, then move your site and test it. This avoids performance surprises after the switch.",
    },
    {
      q: "Will my old host block or delay the migration?",
      a: "Most hosts cooperate, but some are slow to release backups or access. We plan for this by requesting what we need early and keeping your old plan active. If delays occur, we tell you and adjust the timeline.",
    },
    {
      q: "What should I prepare before a server migration?",
      a: "Share your hosting login details, domain access, and a list of sites and email accounts. Note any custom software or scheduled tasks you know about. We handle the rest and share a checklist at the start.",
    },
  ],
  crossLinks: crossLinksFor("hosting-migration"),
  docxHeadings: {
    about: "About Us: Web Hosting Migration Experts in India",
    process: "Our Process for Hosting Migration in India",
    faqs: "FAQs",
  },
};
