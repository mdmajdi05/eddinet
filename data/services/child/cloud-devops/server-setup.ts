// ============================================================================
//  FILE: data/services/child/cloud-devops/server-setup.ts
//  PAGE: /services/cloud-devops/server-setup
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

export const child = {
  slug: "server-setup",
  categorySlug: "cloud-devops",
  categoryTitle: "Cloud & DevOps",
  categoryIcon: "☁️",
  item: "Server Setup",
  title: "Server Setup",
  metaTitle: "Server Setup in India | Eddinet",
  metaDescription: "Tired of slow speeds and server crashes? Eddinet provides premier server setup services in India. We build, deploy, and manage high-speed, secure server",
  heroHeading: "Server Setup Services Company in India",
  heroSubheading: "Production Server Setup | Managed Server Setup | Linux & Cloud Server Configurations",
  image: "/images/services/cloud-devops.webp",
  detailedDescription: "Tired of slow speeds and server crashes? Eddinet provides premier server setup services in India. We build, deploy, and manage high-speed, secure server setups tailored to your traffic needs eliminating downtime, cutting costs, and driving your digital growth.\n\nAt Eddinet, we turn complex server environments into secure, high-speed digital engines. Slow loading times and unoptimized server stacks lead directly to dropped traffic and lost revenue. Therefore, we deliver custom server configurations engineered for low-latency performance, maximum uptime, and seamless scalability.\n\nOur experienced system administrators build tailored web server stacks using Nginx, Apache, or LiteSpeed based on your exact application software demands. We handle full OS installation, domain routing, and firewall setup without disrupting your active business operations. Furthermore, we continuously tune database queries, object caching, SSH rules, and automated off-site backups to keep your server fast and bulletproof under heavy user traffic.",
  features: [
    {
      title: "Production Server Setup India",
      description: "We deploy production-ready server environments built specifically for high-traffic web applications, SaaS platforms, and enterprise databases. Our setups strictly adhere to performance benchmarks and zero-downtime deployment guidelines.",
    },
    {
      title: "Linux Server Setup Services in India",
      description: "We configure secure, lightweight Linux environments using Ubuntu, Debian, AlmaLinux, or RedHat. Our engineers fine-tune kernel parameters and package dependencies to maximize application response times.",
    },
    {
      title: "Cloud Server Setup India",
      description: "We build scalable cloud server infrastructure across AWS, Azure, DigitalOcean, and Google Cloud Platform. We set up auto-scaling rules, load balancers, and failover mechanisms to handle traffic spikes effortlessly.",
    },
    {
      title: "Managed Server Setup Services in India",
      description: "We take complete ownership of your initial server provisioning, operating system patching, kernel updates, and 24/7 technical monitoring. Our proactive approach resolves server bottlenecks before they impact your business.",
    },
    {
      title: "Web Server & Database Optimization",
      description: "We install and optimize Nginx, Apache, MySQL, PostgreSQL, and Redis caching engines. This configuration balances CPU utilization and memory consumption to accelerate database queries and page loading.",
    },
    {
      title: "Server Security Hardening & Firewall Rules",
      description: "We enforce strict SSH access controls, Fail2ban brute-force protection, UFW/IPTables firewalls, and active SSL certificates. These security protocols shield your private server against unauthorized access and cyber threats.",
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
    heading: "Why Choose Eddinet for Server Setup Services?",
    points: [
      "Certified SysAdmin Team: Our team consists of certified Linux system administrators with years of hands-on experience in building enterprise-grade server infrastructure.",
      "Zero-Downtime Migration Strategy: We schedule server provisioning, cutovers, and system upgrades during off-peak hours to protect your daily operations from service interruptions.",
      "Fast & Secure Environment Hardening: We implement industry-standard security hardening policies and advanced caching engines to keep your server fast, secure, and reliable.",
      "Cost-Effective Cloud Allocation: We optimize server resource allocation and remove redundant services to lower your monthly infrastructure expenditure.",
      "Proactive Health Monitoring: We track RAM, CPU, and disk space usage around the clock to detect and fix potential bottlenecks before they affect your application.",
      "Round-the-Clock Support: We deliver SLA-backed technical assistance, emergency troubleshooting, routine kernel updates, and ongoing server maintenance.",
    ],
  },
  process: {
    heading: "Our Server Setup Process in India",
    steps: [
      {
        num: "01",
        title: "Infrastructure & Workload Assessment",
        description: "We evaluate your target web traffic, application code dependencies, and database storage requirements to select the exact server capacity.",
      },
      {
        num: "02",
        title: "OS Deployment & Security Setup",
        description: "We deploy a clean operating system, secure root privileges, and configure isolated user environments using SSH key authentication.",
      },
      {
        num: "03",
        title: "Web Stack & Database Configuration",
        description: "We install Nginx or Apache web servers alongside optimized MySQL or PostgreSQL databases, adjusting memory buffers for peak response speed.",
      },
      {
        num: "04",
        title: "Security Rules & SSL Integration",
        description: "We apply strict firewall policies, brute-force protection scripts, and SSL certificates to encrypt all incoming and outgoing server traffic.",
      },
      {
        num: "05",
        title: "Application Deployment & DNS Cutover",
        description: "We transfer your application files and databases securely before executing a seamless domain DNS cutover with zero operational downtime.",
      },
      {
        num: "06",
        title: "Testing & Automated Off-Site Backups",
        description: "We run stress and load tests to verify system stability under peak traffic, configuring automated off-site backups to safeguard your critical data.",
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
      q: "What do your server setup services in India include?",
      a: "We provide OS installation, web server configuration (Nginx/Apache), database optimization, firewall security setup, SSL integration, and automated backup configuration.",
    },
    {
      q: "How long does a complete production server setup India take?",
      a: "Standard Linux or cloud server setups take 24 to 48 hours, while complex multi-server or high-availability architectures take 3 to 5 business days.",
    },
    {
      q: "Do you offer managed server setup services in India for unmanaged servers?",
      a: "Yes, we transform unmanaged server instances from any hosting or cloud provider into fully managed, secure, and performance-optimized environments.",
    },
    {
      q: "Can you assist with Linux server setup services in India for custom web apps?",
      a: "Yes, we build custom Linux server stacks tailored specifically for Node.js, Python, Django, PHP, Laravel, Docker, or enterprise applications.",
    },
    {
      q: "Do you provide ongoing server support and security patching?",
      a: "Yes, we offer ongoing managed service contracts covering 24/7 server monitoring, routine OS patching, continuous security updates, and automated off-site backups.",
    },
  ],
  crossLinks: [
    {
      title: "Back to Cloud & DevOps Services",
      slug: "/services/cloud-devops",
      description: "Explore every cloud & devops capability under one roof.",
    },
    {
      title: "Hosting & Migration Services",
      slug: "/services/hosting-migration",
      description: "Hosting architecture, website/application migration, environment setup and infrastructure transition planned for reliability, security and minimal disruption to your live business.",
    },
    {
      title: "Software & AI Solutions Services",
      slug: "/services/software-ai",
      description: "Custom software, SaaS-style systems, automation and AI-driven solutions that solve operational problems, improve customer experience or extend existing platforms beyond what off-the-shelf tools can do.",
    },
    {
      title: "All Services",
      slug: "/services",
      description: "Browse the complete Eddinet service ecosystem.",
    },
  ],
  featuresHeading: "Our Server Setup Services in India",
  docxHeadings: {
    about: "About Us: Server Setup Company in India",
    process: "Our Server Setup Process in India",
    faqs: "Frequently Asked Questions About Server Setup Services",
  },
};
