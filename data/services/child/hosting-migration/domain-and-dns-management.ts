// ============================================================================
//  FILE: data/services/child/hosting-migration/domain-and-dns-management.ts
//  PAGE: /services/hosting-migration/domain-and-dns-management
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
export const child = {
  slug: "domain-and-dns-management",




  title: "Domain & DNS Management",
  metaTitle: "Domain & DNS Management in India | Eddinet",
  metaDescription: "One wrong DNS record or expired domain can take your business offline in seconds. Eddinet provides end-to-end domain and DNS management services in India",
  heroHeading: "Domain and DNS Management Services in India",
  heroSubheading: "Managed DNS Services | DNS Setup & Configuration | High Uptime DNS Hosting",

  detailedDescription: "One wrong DNS record or expired domain can take your business offline in seconds. Eddinet provides end-to-end domain and DNS management services in India configuring, securing, and monitoring your records 24/7. We handle complex backend settings so your websites, custom emails, and web apps stay 100% online, fast, and completely reachable.\n\nHas your website vanished because of a DNS mistake? Are your emails landing in spam or not arriving at all? If yes, Eddinet is the solution to your problem.\n\nAs a provider of managed DNS services in India, we give you an experienced sysadmin team to look after your domains and records. We review how your domain, website, and email connect, then fix what is broken and protect what works. You also receive plain-language updates, so you always know what changed and why.",
  features: [
    {
      title: "Managed DNS Services in India",
      description: "With managed DNS services, we take over record changes, monitoring, and troubleshooting. Your team no longer has to guess which record affects which service. When you need an update, we make it carefully and confirm it works.",
    },
    {
      title: "DNS Configuration and Setup in India",
      description: "Our DNS configuration and setup covers A, CNAME, MX, TXT, and other records for your website and email. We also add SPF, DKIM, and DMARC records to improve email delivery. Because of this, your messages reach inboxes and your domain looks trustworthy.",
    },
    {
      title: "Domain Management Services in India",
      description: "Our domain management services keep your registrations organized and protected. We track renewal dates, manage transfers, and enable registrar locks. In addition, we keep ownership details in your name, so you stay in control.",
    },
    {
      title: "DNS Hosting with High Uptime in India",
      description: "Our DNS hosting with high uptime places your records on fast, resilient name servers. Multiple servers answer queries, so one failure does not break your site. We also monitor responses, so problems are caught early.",
    },
  ],
  benefits: [],
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Domain and DNS Management Services in India",
    points: [
      "Expiry alerts before it is too late: We track every renewal date and warn you in advance. A forgotten domain can cost you your website and email. This simple habit prevents a very expensive mistake.",
      "Email delivery fixed at the source: We set up SPF, DKIM, and DMARC correctly. Your invoices and enquiries stop landing in spam. Customers receive what you send.",
      "Careful changes, easy rollback: We record every DNS change and keep a copy of the old setup. If something goes wrong, we can restore it quickly. Your site stays reachable throughout.",
      "Domains stay in your name: You remain the registered owner of every domain. We work through access you control. This keeps your business safe if you ever change providers.",
      "Protection against hijacking: Registrar locks, two-factor access, and clean permissions are standard. Attackers find fewer ways in. Your domain stays under your control.",
      "Support in Indian business hours: Our team is online when your working day begins. Urgent DNS problems reach people who already know your setup. Therefore, you spend less time explaining and more time fixing.",
    ],
    description: "We measure success by steady uptime, correct email delivery, and zero missed renewals.",
  },
  process: {
    heading: "Our Process for Domain and DNS Setup in India",
    steps: [
      {
        num: "01",
        title: "Domain and record audit",
        description: "We list your domains, registrars, expiry dates, and every DNS record. This shows what is missing, outdated, or risky. It also gives us a clean starting point.",
      },
      {
        num: "02",
        title: "Change planning",
        description: "We plan record updates and lower TTL values before any switch. As a result, changes spread quickly and mistakes are easy to reverse. Every planned change is written down.",
      },
      {
        num: "03",
        title: "Record setup and cleanup",
        description: "Next, we configure the correct records and remove old, unused ones. Email authentication records are added at the same time. Each entry is checked before we continue.",
      },
      {
        num: "04",
        title: "Security hardening",
        description: "Then we enable registrar locks, two-factor access, and DNSSEC where your setup supports it. This reduces the risk of hijacking and spoofing. Access is limited to people who need it.",
      },
      {
        num: "05",
        title: "Propagation testing",
        description: "We check that your website, email, and subdomains resolve correctly from different locations. Any error is fixed right away. This confirms everything works before we call the job done.",
      },
      {
        num: "06",
        title: "Monitoring and renewal alerts",
        description: "Finally, we watch DNS responses and track expiry dates. You get alerts well before a domain or certificate runs out. Your setup stays healthy without regular manual checks.",
      },
    ],
    description: "Here is how we bring your domain and DNS under safe, clear management.",
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are domain and DNS management services in India?",
      a: "These services look after your domain registration and the DNS records that connect your domain to your website and email. Providers handle setup, changes, security, and renewals. This keeps your online presence reachable and free from costly mistakes.",
    },
    {
      q: "What are managed DNS services, and do I need them?",
      a: "Managed DNS means an expert team handles your records, monitoring, and troubleshooting. You need it if you run several domains, depend on email, or cannot afford downtime. It also helps if no one on your team understands DNS.",
    },
    {
      q: "Why does DNS configuration and setup affect my email?",
      a: "Email relies on MX records and authentication records such as SPF, DKIM, and DMARC. If these are missing or wrong, messages may land in spam or get rejected. Correct setup improves delivery and protects your domain from spoofing.",
    },
    {
      q: "How does DNS hosting with high uptime help my website?",
      a: "Every visit starts with a DNS lookup. If your name servers are slow or offline, visitors cannot reach your site, even when your server is fine. Reliable DNS hosting answers quickly from several servers, so your site stays reachable.",
    },
    {
      q: "How much do domain management services in India cost?",
      a: "The price depends on the number of domains, records, and the level of monitoring you need. A single business site costs far less than a large multi-domain setup. After a short discovery call, we share a clear quote.",
    },
  ],
  crossLinks: crossLinksFor("hosting-migration"),
  featuresHeading: "Our Domain and DNS Management Services in India",
  featuresDescription: "We focus on four areas that decide whether your domain works reliably.",
  docxHeadings: {
    about: "About Us: Managed DNS Services Provider in India",
    process: "Our Process for Domain and DNS Setup in India",
    faqs: "FAQs About Domain and DNS Management Services in India",
  },
};
