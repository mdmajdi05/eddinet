// ============================================================================
//  FILE: data/services/child/maintenance-support/server-maintenance.ts
//  PAGE: /services/maintenance-support/server-maintenance-services-in-india
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================
// ── HERO FIELDS (top of the page) ─────────────────────────────────────
//   heroEyebrow    = badge chip shown ABOVE the <h1>
//   heroHeading    = the <h1> heading itself
//   heroSubheading = paragraph shown BELOW the <h1>

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/maintenance-support";
export const child = {
  slug: "server-maintenance-services-in-india",
  title: "Server Maintenance",
  metaTitle: "Server Maintenance Services in Delhi NCR | Eddinet",
  metaDescription: "Server patching, health checks and optimisation for stable uptime. Infrastructure that's serviced on a schedule, not on an incident. Eddinet delivers dependable server maintenance services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Server Monitoring & Alerting | OS Patching & Updates | Linux Server Administration",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Server Maintenance Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "Managed Server Support | Linux Administration | Cloud Server Management EDDINET offers professional server maintenance services in India to help businesses keep their servers secure, stable, and consistently available. Our team focuses on proactive monitoring, timely patching, and performance tuning to create a more reliable and efficient infrastructure.",
  detailedDescription: "Servers rarely fail without warning. Disk space dwindles, memory leaks accumulate, and unpatched software invites intruders. Eventually, a minor oversight becomes a major outage.\n\nThis is why EDDINET, a server management company in Delhi, treats infrastructure as a living system that demands constant stewardship. We observe your servers around the clock, correct anomalies before they escalate, and fortify every layer against attack. Consequently, your websites and applications stay online when it matters most.\n\nWe provide managed server support in India for startups, growing enterprises, and established institutions. Our Linux server maintenance services in India cover configuration, patching, tuning, and security hardening. Moreover, our cloud server management services in Delhi NCR keep your AWS, Azure, and DigitalOcean environments efficient and cost-conscious.",
  features: [
    {
      title: "Server Monitoring & Alerting",
      description: "We track CPU, memory, disk, and network health continuously. Anomalies trigger instant alerts, so remediation begins within moments.",
    },
    {
      title: "OS Patching & Updates",
      description: "We apply operating system and kernel updates after careful validation. Known vulnerabilities are sealed without disrupting your services.",
    },
    {
      title: "Linux Server Administration",
      description: "Our Linux server maintenance services in India include user management, service configuration, log analysis, and routine health audits. Your servers remain orderly, stable, and secure.",
    },
    {
      title: "Security Hardening & Firewall Management",
      description: "We harden SSH access, configure firewalls, and enforce strict permissions. Attack surfaces shrink, and intrusion attempts are repelled.",
    },
    {
      title: "Performance Tuning & Load Management",
      description: "We refine web server, database, and caching configurations. Your infrastructure absorbs sudden traffic surges with composure.",
    },
    {
      title: "Cloud Server Management",
      description: "Our cloud server management services in Delhi NCR span provisioning, scaling, cost control, and resource audits. You gain agility without runaway expenses.",
    },
    {
      title: "Backup & Snapshot Management",
      description: "We schedule automated backups and snapshots, then verify their integrity. Restoration remains swift and dependable.",
    },
    {
      title: "Managed Server Support",
      description: "Our managed server support in India provides a dedicated team for incidents and requests. Assistance is available by phone, email, or ticket.",
    },
  ],
  featuresHeading: "Our Server Maintenance Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your Server Management Company in Delhi?",
    points: [
      "Proactive Oversight: We detect weakening resources early, so outages never reach your users.",
      "Seasoned Linux Expertise: Our engineers administer Ubuntu, CentOS, AlmaLinux, and Debian environments with confidence.",
      "Multi-Cloud Proficiency: We manage AWS, Azure, Google Cloud, and DigitalOcean infrastructure.",
      "Security-First Discipline: Hardening, patching, and firewall governance are built into every plan.",
      "Defined Service Levels: Severity-based response times keep critical incidents at the front of the queue.",
      "Lucid Reporting: Each month, you see precisely what we achieved, in plain language.",
    ],
  },
  process: {
    heading: "Our Server Maintenance Process",
    steps: [
      {
        num: "01",
        title: "Server Audit & Risk Assessment",
        description: "We examine your operating systems, configurations, security posture, and resource usage. We then document vulnerabilities and capacity limits.",
      },
      {
        num: "02",
        title: "Support Plan & SLA Definition",
        description: "We tailor a maintenance model to your operational priorities. Response times, severity levels, and reporting standards are confirmed in writing.",
      },
      {
        num: "03",
        title: "Monitoring & Preventive Maintenance",
        description: "Our engineers monitor your servers continuously. Patches, log reviews, and health checks follow a fixed schedule.",
      },
      {
        num: "04",
        title: "Incident Response & Resolution",
        description: "Every alert is triaged, prioritised, and resolved with full transparency. Critical outages receive immediate attention.",
      },
      {
        num: "05",
        title: "Monthly Reporting & Capacity Review",
        description: "You receive a concise report on uptime, patches, incidents, and resource trends. We also recommend upgrades for the period ahead.",
      },
    ],
  },
  industries: {
    heading: "Server Maintenance for Multi-Industry Needs",
    items: [
      {
        title: "E-Commerce & D2C Brands",
        description: "Resilient servers that withstand flash sales, festive surges, and high checkout volumes.",
      },
      {
        title: "SaaS & Technology Companies",
        description: "Scalable infrastructure and swift incident response that protect customer retention.",
      },
      {
        title: "Banking, Finance & Insurance",
        description: "Hardened, audit-ready environments with disciplined patching and access control.",
      },
      {
        title: "Healthcare, Education & Media",
        description: "Dependable hosting that keeps portals, records, and content continuously accessible.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are server maintenance services?",
      a: "They are ongoing activities that keep servers secure, stable, and efficient. These typically include monitoring, patching, security hardening, backups, and performance tuning.",
    },
    {
      q: "How much do server maintenance services in India cost?",
      a: "Pricing depends on the number of servers, their complexity, and the level of support required. A single web server costs considerably less than a multi-server cloud environment. Share your requirements, and we will provide a transparent quote.",
    },
    {
      q: "What is managed server support in India?",
      a: "It is a service in which an expert team administers your servers on your behalf. The team handles monitoring, updates, security, and incident resolution.",
    },
    {
      q: "Do you provide Linux server maintenance services in India?",
      a: "Yes. We maintain Ubuntu, CentOS, AlmaLinux, and Debian servers, including web, database, and mail environments.",
    },
    {
      q: "Can you manage my cloud servers in Delhi NCR?",
      a: "Certainly. We manage servers on AWS, Azure, Google Cloud, and DigitalOcean. Support is delivered remotely, so location never limits the service.",
    },
    {
      q: "How often should a server be maintained?",
      a: "Servers need continuous monitoring and monthly patching at a minimum. Critical security updates should be applied as soon as they are validated.",
    },
    {
      q: "Can you take over a server that another provider managed?",
      a: "Yes. We first audit the environment, remediate existing risks, and then assume ongoing management.",
    },
  ],
  cta: {
    heading: "Keep Your Servers Secure, Stable, and Always Online",
    sub: "Discuss Your Server Maintenance Needs",
    description: "Ready to secure the reliability of your infrastructure? Partner with EDDINET, a trusted server management company in Delhi. Contact our team today for a complimentary server audit and a clear quote within 24 hours.",
  },
  crossLinks: crossLinksFor("maintenance-support"),
  docxHeadings: {
    about: "About EDDINET: Server Management Company in Delhi",
    process: "Our Server Maintenance Process",
    faqs: "Frequently Asked Questions",
  },
};
