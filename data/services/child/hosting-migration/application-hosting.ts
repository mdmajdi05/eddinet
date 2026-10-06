// ============================================================================
//  FILE: data/services/child/hosting-migration/application-hosting.ts
//  PAGE: /services/hosting-migration/application-hosting
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

export const child = {
  slug: "application-hosting",
  categorySlug: "hosting-migration",
  categoryTitle: "Hosting & Migration",
  categoryIcon: "🌐",
  item: "Application Hosting",
  title: "Application Hosting",
  metaTitle: "Application Hosting Services in India | Eddinet",
  metaDescription: "Eddinet provides application hosting services in India where our engineers build, deploy, and manage server environments around your software stack.",
  heroHeading: "Application Hosting Services Company in India",
  heroSubheading: "Web Application Hosting | Node.js, Laravel & PHP Hosting | SaaS Infrastructure Setup",
  image: "/images/services/hosting-migration.webp",
  detailedDescription: "Eddinet provides application hosting services in India where our engineers build, deploy, and manage server environments around your software stack. As a result, you get faster page loads, fewer bottlenecks, and strong uptime.\n\nOur web application hosting includes low-latency database routing, automated scaling, and 24/7 proactive management. Therefore, your app stays quick and stable as your users grow.\n\nDoes your app crash under load? Do memory leaks and slow servers frustrate your users? Are you unsure whether your hosting setup is built for your code? If yes, Eddinet is the solution to your problem.\n\nAs a web application hosting company in India, we turn standard cloud servers into fast, stable environments for your applications. Our certified sysadmins manage everything from server setup to runtime tuning. As a result, your app stays available and responds quickly, even when traffic grows.",
  features: [
    {
      title: "Web Application Hosting India",
      description: "We build clean, secure server environments optimized for modern web applications, ensuring high throughput, fast database queries, and zero-downtime operations.",
    },
    {
      title: "Node.js Application Hosting India",
      description: "We configure production-ready Node.js environments with PM2 process managers, reverse proxy setups (NGINX), SSL termination, and memory leak tracking.",
    },
    {
      title: "Laravel and PHP Application Hosting India",
      description: "We tune PHP-FPM, OPcache, and MySQL/PostgreSQL databases to deliver blazing-fast execution speeds for Laravel, Symfony, and custom PHP platforms.",
    },
    {
      title: "SaaS Application Hosting India",
      description: "We deploy scalable multi-tenant infrastructure designed for SaaS platforms, complete with auto-scaling compute groups, isolated tenant storage, and global CDN delivery.",
    },
    {
      title: "Database Performance & Query Optimization",
      description: "We tune relational and NoSQL databases (MySQL, PostgreSQL, MongoDB, Redis) to resolve query locks, reduce latency, and ensure maximum data safety.",
    },
    {
      title: "Server Security Hardening & WAF Protection",
      description: "We enforce strict OS security policies, deploy Web Application Firewalls (WAF), configure fail2ban brute-force protection, and issue automated SSL certificates.",
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
    heading: "Why Choose Eddinet for Application Hosting Services?",
    points: [
      "Certified DevOps & SysAdmin Team: Deep expertise in Linux server administration, cloud infrastructure, and application runtime tuning.",
      "Sub-Second Execution Speeds: Optimized caching layers and database connection pooling dramatically reduce server response times (TTFB).",
      "Guaranteed Zero-Downtime Migration: We migrate live web applications and SaaS platforms without interrupting active user traffic.",
      "Multi-Cloud Flexibility: Host your applications on AWS, Google Cloud, Azure, DigitalOcean, or private bare-metal servers.",
      "SLA-Backed 24/7 Technical Support: Round-the-clock server troubleshooting, patch updates, emergency recovery, and infrastructure maintenance.",
    ],
  },
  process: {
    heading: "Our Application Hosting Implementation Process in India",
    steps: [
      {
        num: "01",
        title: "Application Stack & Dependency Audit",
        description: "We analyze your application codebase, runtime requirements, framework dependencies, and expected traffic to design a custom hosting architecture.",
      },
      {
        num: "02",
        title: "Server Provisioning & Runtime Optimization",
        description: "We provision cloud or dedicated servers, configuring optimized web servers (NGINX/LiteSpeed), application runtimes, and database engines.",
      },
      {
        num: "03",
        title: "Database Migration & Security Setup",
        description: "We migrate your application databases securely, set up automated daily off-site backups, and enforce strict firewall rules and SSL encryption.",
      },
      {
        num: "04",
        title: "Performance & Load Testing",
        description: "We execute stress tests and concurrency checks to verify server responsiveness under heavy traffic spikes before going live.",
      },
      {
        num: "05",
        title: "Production Cutover & DNS Routing",
        description: "We execute a seamless, zero-downtime migration, routing live traffic to your new hosting infrastructure smoothly.",
      },
      {
        num: "06",
        title: "24/7 Monitoring & Health Management",
        description: "We track server CPU, RAM, disk I/O, and runtime error logs around the clock to resolve potential issues before they impact your users.",
      },
    ],
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
      q: "What do your application hosting services in India include?",
      a: "We provide full server setup, framework runtime optimization (Node.js, PHP, Python), database tuning, security hardening, automated backups, and 24/7 health monitoring.",
    },
    {
      q: "How does web application hosting India improve website speed?",
      a: "We optimize web server configurations (NGINX), implement OPcache and Redis caching, tune database queries, and integrate CDNs to drastically lower time-to-first-byte (TTFB).",
    },
    {
      q: "Can you host high-traffic Node.js and Laravel applications?",
      a: "Yes. We specialize in tuning Node.js cluster processes and PHP-FPM pools to handle high-concurrency traffic without server crashes or memory exhaustion.",
    },
    {
      q: "How does SaaS application hosting India handle sudden traffic spikes?",
      a: "We configure auto-scaling server groups and cloud load balancers that automatically spin up additional compute nodes as traffic increases, maintaining top performance.",
    },
    {
      q: "Do you provide database backup and data protection services?",
      a: "Yes, we set up automated, encrypted off-site backups with strict retention policies, ensuring your application data can be restored instantly in any emergency.",
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
  featuresHeading: "Our Application Hosting Services in India",
  docxHeadings: {
    about: "About Us: Web Application Hosting Company in India",
    process: "Our Application Hosting Implementation Process in India",
    faqs: "Frequently Asked Questions",
  },
};
