// ============================================================================
//  FILE: data/services/child/hosting-migration/managed-hosting.ts
//  PAGE: /services/hosting-migration/managed-hosting
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

export const child = {
  slug: "managed-hosting",
  categorySlug: "hosting-migration",
  categoryTitle: "Hosting & Migration",
  categoryIcon: "🌐",
  item: "Managed Hosting",
  title: "Managed Hosting",
  metaTitle: "Managed Hosting Services in India | Eddinet",
  metaDescription: "Eddinet delivers managed hosting services in India where our engineers run your server, secure it, and fix problems while you run your company.",
  heroHeading: "Managed Hosting Services in India",
  heroSubheading: "Fully Managed Servers | 24/7 Support | Security & Backups Included",
  image: "/images/services/hosting-migration.webp",
  detailedDescription: "Eddinet delivers managed hosting services in India where our engineers run your server, secure it, and fix problems while you run your company. Patching servers at midnight and chasing backup errors should not eat into your working day. As a result, you get a stable website and a team you can call when something looks wrong.\n\nTired of servers that crash without warning? Worried about backups that no one has ever tested? Struggling to find a sysadmin you can trust? If yes, Eddinet is the solution to your problem.\n\nAs a managed hosting provider in India, we give you an experienced sysadmin team without the cost of hiring one. We learn how your website is used, take ownership of the technical routine, and log every action we take. You also receive plain-language updates, so you always know what was done on your server.",
  features: [
    {
      title: "Fully Managed Server Hosting in India",
      description: "With fully managed server hosting, we handle installation, configuration, updates, and performance tuning. You do not need to log in to the server for routine tasks. When you need a change, you send a request and our team completes it.",
    },
    {
      title: "/7 Managed Hosting Support in India",
      description: "Servers do not fail on a schedule. Our 24/7 managed hosting support watches uptime, load, and disk space around the clock. Alerts reach an engineer who can act, so small warnings are handled before they grow.",
    },
    {
      title: "Managed Hosting with Security and Backups in India",
      description: "We harden your server, apply security patches, and monitor for suspicious activity. Backups run on a set schedule, and we test restores rather than assume they work. This way, a hack or human error becomes an inconvenience, not a crisis.",
    },
    {
      title: "Managed Hosting Provider Consulting in India",
      description: "Sometimes you need advice, not just maintenance. We review your setup, suggest improvements, and plan upgrades before limits are reached. You get honest guidance on what to change and what to leave alone.",
    },
  ],
  benefits: [],
  metrics: [
    {
      value: "1,000+",
      label: "Projects delivered",
    },
    {
      value: "5+ Years",
      label: "In digital growth",
    },
    {
      value: "12+ Countries",
      label: "Clients served globally",
    },
    {
      value: "24×7",
      label: "Support & monitoring",
    },
  ],
  whyChooseUs: {
    heading: "Why Choose Eddinet for Managed Hosting Services in India",
    points: [
      "A named team, not a ticket maze: You deal with engineers who know your server. Requests do not bounce between departments. Answers come faster because context is already there.",
      "Backups that are actually tested: Many providers store backups and hope for the best. We restore them on a schedule to prove they work. That confidence matters most on your worst day.",
      "Patching without panic: Updates are planned, tested, and applied at low-traffic hours. Critical security fixes are prioritised. Your site stays protected without unexpected downtime.",
      "Clear boundaries, no hidden extras: Our scope of work is written down before we start. You know what is included and what costs extra. This prevents billing surprises later.",
      "Advice that saves money: We flag oversized plans and unused resources. You upgrade when you need to, not because a plan says so. Honest sizing keeps costs sensible.",
      "Support that matches Indian business hours: Our team is available when your working day starts. Urgent issues reach people who already know your setup. Therefore, you spend less time explaining and more time solving.",
    ],
    description: "We measure success by steady uptime, quick issue resolution, and fewer server surprises.",
  },
  process: {
    heading: "Our Process for Managed Hosting Setup in India",
    steps: [
      {
        num: "01",
        title: "Server health check",
        description: "We inspect your current server, software versions, and open risks. This gives us a clear starting point. It also shows what needs attention first.",
      },
      {
        num: "02",
        title: "Responsibility mapping",
        description: "We agree on what we manage, what you manage, and how requests are made. As a result, nobody is guessing who fixes what. Everything is written down.",
      },
      {
        num: "03",
        title: "Baseline setup",
        description: "Next, we apply security hardening, configure backups, and set monitoring rules. Alert thresholds are tuned to your traffic. We confirm each item before moving on.",
      },
      {
        num: "04",
        title: "Restore and alert testing",
        description: "Then we run a test restore and trigger sample alerts. This proves that recovery and notifications work. Any gap is corrected right away.",
      },
      {
        num: "05",
        title: "Steady-state care",
        description: "After that, we handle patches, updates, and monitoring on a regular cycle. Requests are answered through your agreed channel. You receive summary reports on a fixed schedule.",
      },
      {
        num: "06",
        title: "Quarterly review",
        description: "Finally, we review performance, security, and growth plans with you. We recommend changes only when they add value. Your hosting stays matched to your business.",
      },
    ],
    description: "Here is how we take over your server and keep it running smoothly.",
  },
  testimonials: [
    {
      name: "Rohan Malhotra",
      designation: "Founder, D2C Brand",
      review: "Eddinet treated our work like a partnership, not a vendor project. The process was transparent, milestones were met and the results actually moved our business — not just the dashboards.",
    },
    {
      name: "Priya Sharma",
      designation: "Marketing Head, SaaS Company",
      review: "What stood out was how everything connected — strategy, execution and reporting. We always knew what was being done, why it was done, and what it returned. That clarity is rare.",
    },
    {
      name: "Amit Verma",
      designation: "Director, Real Estate Firm",
      review: "We had been burned by agencies before with vague promises. Eddinet documented the plan, stayed accountable to it and delivered exactly what they committed to.",
    },
    {
      name: "Neha Gupta",
      designation: "CEO, Healthcare Startup",
      review: "The team adapted quickly to our industry, communicated clearly and kept quality high under tight timelines. We would absolutely work with them again.",
    },
  ],
  faqs: [
    {
      q: "What are managed hosting services in India?",
      a: "Managed hosting means the provider looks after your server for you. This includes updates, security, backups, monitoring, and technical support. You use the server while the provider handles the maintenance.",
    },
    {
      q: "How is managed hosting different from unmanaged hosting?",
      a: "With unmanaged hosting, you receive a server and take care of everything yourself. With managed hosting, the provider does the maintenance and fixes problems. Managed plans cost more, but they save time and reduce risk.",
    },
    {
      q: "What does fully managed server hosting in India include?",
      a: "It usually includes setup, software updates, security hardening, backups, monitoring, and support requests. Exact inclusions vary by plan, so ask for a written scope. We share ours before you sign up.",
    },
    {
      q: "Do you provide 24/7 managed hosting support in India?",
      a: "Yes, we monitor servers around the clock and act on serious alerts. Response times depend on the severity of the issue and your plan. We confirm these details during the discovery call.",
    },
    {
      q: "Is managed hosting with security and backups worth it for a small business?",
      a: "Usually yes, because a single hack or data loss can cost more than a year of hosting. Small teams rarely have a dedicated server admin. Managed hosting fills that gap at a predictable cost.",
    },
  ],
  crossLinks: [
    {
      title: "Back to Hosting & Migration Services",
      slug: "/services/hosting-migration",
      description: "Explore every hosting & migration capability under one roof.",
    },
    {
      title: "Cloud & DevOps Services",
      slug: "/services/cloud-devops",
      description: "Cloud infrastructure, deployment, CI/CD, scalability, reliability, security and operational practices that keep digital platforms stable as traffic and workloads grow.",
    },
    {
      title: "Web Development Services",
      slug: "/services/web-development",
      description: "Fast, structured and SEO-ready websites engineered around usability, performance, conversion and long-term maintainability - so marketing never has to work around a site that wasn't built for it.",
    },
    {
      title: "All Services",
      slug: "/services",
      description: "Browse the complete Eddinet service ecosystem.",
    },
  ],
  featuresHeading: "Our Managed Hosting Services in India",
  featuresDescription: "We cover four areas that keep a hosted server healthy day after day.",
  docxHeadings: {
    about: "About Us: Managed Hosting Provider in India",
    process: "Our Process for Managed Hosting Setup in India",
    faqs: "FAQs",
  },
};
