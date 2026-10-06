// ============================================================================
//  FILE: data/services/child/hosting-migration/database-hosting.ts
//  PAGE: /services/hosting-migration/database-hosting
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

export const child = {
  slug: "database-hosting",
  categorySlug: "hosting-migration",
  categoryTitle: "Hosting & Migration",
  categoryIcon: "🌐",
  item: "Database Hosting",
  title: "Database Hosting",
  metaTitle: "Database Hosting Services in India | Eddinet",
  metaDescription: "Eddinet provides database hosting services in India where our engineers set up, secure, and tune your database servers.",
  heroHeading: "Database Hosting Services in India",
  heroSubheading: "Managed Database Hosting | MySQL & PostgreSQL | Secure Cloud Database Servers",
  image: "/images/services/hosting-migration.webp",
  detailedDescription: "Eddinet provides database hosting services in India where our engineers set up, secure, and tune your database servers. Your data stays fast to query, safe from loss, and ready to grow. As a result, your application no longer waits on a slow or unstable database.\n\nIs your database slowing down your application? Are you worried that one failed disk could wipe out your data? If yes, Eddinet is the solution to your problem.\n\nAs a managed database hosting provider in India, we give you an experienced database and sysadmin team without the cost of hiring one. We study how your application reads and writes data, then build a hosting setup around those patterns. You also receive plain-language reports, so you always know the health of your data.",
  features: [
    {
      title: "Managed Database Hosting in India",
      description: "With managed database hosting, we take over installation, updates, monitoring, and daily upkeep. Your developers stop spending time on server chores. When you need a change, our team handles it.",
    },
    {
      title: "MySQL Database Hosting in India",
      description: "Our MySQL database hosting focuses on query speed and stability. We tune memory buffers, indexes, and connection limits for your workload. In addition, we enable slow query logging, so weak queries are found early.",
    },
    {
      title: "PostgreSQL Database Hosting in India",
      description: "Our PostgreSQL database hosting suits applications that need complex queries and strict data integrity. We configure connection pooling, vacuum settings, and replication. Because of this, your database stays responsive as your data grows.",
    },
    {
      title: "Cloud Database Hosting in India",
      description: "Our cloud database hosting places your data on secure, scalable cloud servers. Storage and compute can grow when your needs increase. We also add private networking and encryption, so your data stays away from public access.",
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
    heading: "Why Choose Eddinet for Database Hosting Services in India",
    points: [
      "Backups proven by restoring: A backup is only useful if it restores. We test recovery on a schedule and record the results. You know your data is safe before trouble starts.",
      "Tuning based on real queries: We do not apply generic settings and walk away. We study your actual slow queries and fix them. Your pages and reports load faster as a result.",
      "Locked-down access by default: Databases are exposed to only the servers that need them. Strong passwords, encryption, and access logs are standard. This closes the doors attackers look for first.",
      "Room to grow without downtime drama: We plan storage and memory increases before limits are reached. Upgrades are scheduled for quiet hours. Your application keeps running while the database grows.",
      "Clear alerts, fewer false alarms: We set alert thresholds around your real usage. Your team hears about disk space, replication lag, and slow queries early. Noise is kept low, so real warnings stand out.",
      "Support in Indian business hours: Our team is online when your working day begins. Urgent issues reach people who already know your setup. Therefore, you spend less time explaining and more time fixing.",
    ],
    description: "We measure success by faster queries, reliable backups, and steady uptime.",
  },
  process: {
    heading: "Our Process for Database Hosting Setup in India",
    steps: [
      {
        num: "01",
        title: "Data and workload audit",
        description: "We review your database size, query patterns, and peak usage. This shows where your current setup struggles. It also tells us how much capacity you really need.",
      },
      {
        num: "02",
        title: "Engine and capacity planning",
        description: "We choose between MySQL and PostgreSQL and size memory, storage, and CPU. As a result, the server fits your workload from day one. Growth plans are agreed before anything is built.",
      },
      {
        num: "03",
        title: "Secure server build",
        description: "Next, we install the database and restrict access to trusted addresses only. Encryption and strong authentication are switched on. Each setting is reviewed before we continue.",
      },
      {
        num: "04",
        title: "Performance tuning",
        description: "Then we tune indexes, caching, and connection limits using your real queries. We measure results before and after. Only changes that help are kept.",
      },
      {
        num: "05",
        title: "Backup and recovery drill",
        description: "We schedule automatic backups and run a full test restore. This proves your data can be recovered when needed. Any gap is fixed before go-live.",
      },
      {
        num: "06",
        title: "Monitoring and monthly review",
        description: "Finally, we track load, storage, and slow queries around the clock. Each month, we share a short report and suggest improvements. Your database stays healthy as your business grows.",
      },
    ],
    description: "Here is how we move you from a fragile database to a stable, well-protected one.",
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
      q: "What are database hosting services in India?",
      a: "Database hosting means your database runs on a dedicated, professionally managed server instead of sharing space with your website. The provider handles setup, security, backups, and performance. Your application connects to it safely and quickly.",
    },
    {
      q: "What is managed database hosting in India, and do I need it?",
      a: "Managed database hosting means the provider handles updates, backups, tuning, and monitoring for you. You need it if you lack a database administrator or your team is busy building features. It also lowers the risk of data loss and slow queries.",
    },
    {
      q: "Should I choose MySQL or PostgreSQL hosting?",
      a: "MySQL suits many websites, online stores, and content platforms because it is fast and widely supported. PostgreSQL suits applications with complex queries, reporting needs, or strict data rules. We review your application and recommend the better fit.",
    },
    {
      q: "Is cloud database hosting in India safe for business data?",
      a: "Yes, when it is set up correctly. Private networking, encryption, restricted access, and tested backups protect your data. No system is immune to every risk, but a well-built setup greatly reduces it.",
    },
    {
      q: "How much do database hosting services cost in India?",
      a: "The price depends on database size, traffic, storage, backup needs, and the level of management. A small site needs far less than a busy online store. After a short discovery call, we share a clear quote.",
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
  featuresHeading: "Our Database Hosting Services in India",
  featuresDescription: "We concentrate on four areas that decide whether a database stays fast and safe.",
  docxHeadings: {
    about: "About Us: Managed Database Hosting Provider in India",
    process: "Our Process for Database Hosting Setup in India",
    faqs: "FAQs About Database Hosting Services in India",
  },
};
