// ============================================================================
//  FILE: data/services/child/cloud-devops/load-balancing.ts
//  PAGE: /services/cloud-devops/load-balancing
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

export const child = {
  slug: "load-balancing",
  categorySlug: "cloud-devops",
  categoryTitle: "Cloud & DevOps",
  categoryIcon: "☁️",
  item: "Load Balancing",
  title: "Load Balancing",
  metaTitle: "Load Balancing Services in India | Eddinet",
  metaDescription: "Eddinet provides premier load balancing services in India. We design, deploy, and manage traffic distribution setups that remove server overloads, maximize",
  heroHeading: "Load Balancing Services Company in India",
  heroSubheading: "Cloud Traffic Engineering | AWS ALB & NLB Setup | High Availability & Auto-Scaling",
  image: "/images/services/cloud-devops.webp",
  detailedDescription: "Eddinet provides premier load balancing services in India. We design, deploy, and manage traffic distribution setups that remove server overloads, maximize uptime, and speed up your web applications.\n\nSlow pages and single-point-of-failure outages cost you revenue. Our solutions spread incoming traffic across healthy servers in real time. As a result, you get low latency, smooth auto-scaling, and minimal downtime, even during traffic spikes.\n\nEddinet helps businesses turn single-point server setups into fault-tolerant, high-availability clusters. We engineer intelligent traffic routing that bypasses failed server nodes instantly. This prevents downtime and keeps performance strong during heavy traffic.\n\nOur certified sysadmins manage your traffic infrastructure end to end. We listen first, design carefully, and hand over clear documentation. Good infrastructure should be invisible, and that is the standard we follow on every project.",
  features: [
    {
      title: "Cloud Load Balancing Setup India",
      description: "We deploy and optimize cloud load balancers across AWS, Azure, Google Cloud, DigitalOcean, and hybrid setups-routing traffic dynamically to prevent server bottlenecks.",
    },
    {
      title: "AWS ALB NLB Setup India",
      description: "We configure AWS Application Load Balancers (ALB) for smart HTTP/HTTPS path routing and Network Load Balancers (NLB) for high-throughput, low-latency TCP/UDP traffic.",
    },
    {
      title: "High Availability Load Balancing India",
      description: "We build redundant, multi-zone traffic routing setups across multiple availability zones with automated health checks and instant failover execution.",
    },
    {
      title: "Application Load Balancing Services India",
      description: "We implement Layer 7 traffic rules, HTTP/2 & HTTP/3 optimization, sticky session persistence, and auto-scaling group integration for web apps and microservices.",
    },
    {
      title: "SSL/TLS Termination & Web Security",
      description: "We offload CPU-heavy SSL decryption to the load balancer level while integrating Web Application Firewalls (WAF) and DDoS protection to shield origin servers.",
    },
    {
      title: "Continuous Traffic Monitoring & Failover Drills",
      description: "We track real-time response latency, request volumes, and backend server health metrics to resolve traffic surges before they affect end users.",
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
    heading: "Why Choose Eddinet for Load Balancing Services?",
    points: [
      "Certified Cloud & DevOps Sysadmins: Deep expertise in Linux server administration, AWS infrastructure, HAProxy, and cloud-native networking.",
      "Zero Single Points of Failure: Multi-zone and multi-region routing ensures your digital platform stays online even if an entire data center node fails.",
      "Maximum Cost Efficiency: Efficient traffic distribution paired with server auto-scaling prevents over-provisioning and lowers monthly compute bills.",
      "Multi-Cloud & Bare-Metal Support: Deploy high-availability traffic managers across AWS, GCP, Azure, DigitalOcean, or private bare-metal servers.",
      "24/7 SLA-Backed Operations: Continuous monitoring, rapid emergency incident response, and proactive infrastructure tuning for guaranteed uptime.",
    ],
  },
  process: {
    heading: "Our Load Balancing Implementation Process in India",
    steps: [
      {
        num: "01",
        title: "Traffic & Infrastructure Discovery",
        description: "We audit your current server architecture, traffic concurrency, and protocol requirements to design an optimal traffic distribution blueprint.",
      },
      {
        num: "02",
        title: "Load Balancer Configuration & SSL Offloading",
        description: "We deploy managed cloud load balancers or dedicated HAProxy/NGINX clusters, implementing secure SSL/TLS certificate termination.",
      },
      {
        num: "03",
        title: "Health Checks & Routing Policy Setup",
        description: "We establish automated health-check endpoints, path-based routing rules, and failover triggers to isolate crashed server nodes automatically.",
      },
      {
        num: "04",
        title: "Security Hardening & WAF Integration",
        description: "We apply rate-limiting rules, IP filtering, and Web Application Firewall protection to defend backend servers against malicious traffic and DDoS attacks.",
      },
      {
        num: "05",
        title: "High-Concurrency Stress Testing",
        description: "We execute simulated traffic spikes and node failure checks to confirm instant failover execution and balanced resource utilization under heavy load.",
      },
      {
        num: "06",
        title: "Real-Time Traffic Monitoring & SLAs",
        description: "We implement continuous metric tracking for response latency, request rates, and backend server health under guaranteed SLA standards.",
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
      q: "What do your load balancing services in India include?",
      a: "We provide architecture design, cloud load balancing setup (AWS, Azure, GCP), HAProxy/NGINX deployment, SSL termination, health check setup, WAF integration, and 24/7 traffic monitoring.",
    },
    {
      q: "How does high availability load balancing India prevent website downtime?",
      a: "Load balancers continuously monitor backend server health. If a server crashes or experiences high latency, incoming traffic is instantly rerouted to healthy servers without dropping active user sessions.",
    },
    {
      q: "What is the difference between AWS ALB and NLB setup India?",
      a: "AWS ALB operates at Layer 7 (Application) and is ideal for HTTP/HTTPS path-based routing and microservices. AWS NLB operates at Layer 4 (Transport) and handles extreme TCP/UDP traffic spikes with ultra-low latency.",
    },
    {
      q: "Can you configure cloud load balancing setup India for hybrid or bare-metal servers?",
      a: "Yes, we deploy self-managed HAProxy or NGINX load balancing clusters that route traffic smoothly across bare-metal environments, private data centers, and multi-cloud setups.",
    },
    {
      q: "How does SSL termination on a load balancer improve application performance?",
      a: "SSL termination offloads the heavy cryptographic processing of encrypting and decrypting HTTPS traffic from backend application servers, freeing up CPU power for faster application execution.",
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
  featuresHeading: "Our Load Balancing Services in India",
  docxHeadings: {
    about: "About Us: High Availability Load Balancing Experts in India",
    process: "Our Load Balancing Implementation Process in India",
    faqs: "Frequently Asked Questions About Load Balancing Services",
  },
};
