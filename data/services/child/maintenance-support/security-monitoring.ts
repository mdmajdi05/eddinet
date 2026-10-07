// ============================================================================
//  FILE: data/services/child/maintenance-support/security-monitoring.ts
//  PAGE: /services/maintenance-support/website-security-monitoring-services-in-india
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
  slug: "website-security-monitoring-services-in-india",
  title: "Security Monitoring",
  metaTitle: "Security Monitoring Services in Delhi NCR | Eddinet",
  metaDescription: "Continuous threat monitoring and alerts to keep your systems safe. Attacks caught early, responses coordinated, breaches prevented or contained. Eddinet delivers dependable security monitoring services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "24/7 Threat Detection | Malware Scanning & Removal | Managed Website Security",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Website Security Monitoring Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET offers website security monitoring services in India to help businesses detect threats early, contain attacks swiftly, and protect customer data. Our specialists focus on continuous scanning, precise threat analysis, and decisive cleanup, so your website remains trusted and secure.",
  detailedDescription: "Most attacks do not announce themselves. Hidden malware, stolen credentials, and injected spam links can lurk on a website for weeks. Meanwhile, search engines flag your pages, and customers lose confidence.\n\nThis is why EDDINET provides 24/7 website security monitoring in Delhi for businesses that cannot afford silent breaches. We watch your files, logins, and traffic around the clock, isolate suspicious activity, and respond before damage spreads. Consequently, a threat becomes a contained incident rather than a public crisis.\n\nOur malware scanning and removal services in India cleanse infected files and close the entry points. Our website threat detection services in India identify attacks in their earliest stages. Moreover, our managed website security services in Delhi NCR give you a dedicated team without the cost of an in-house security department.",
  features: [
    {
      title: "Continuous Security Monitoring",
      description: "We observe your website's files, logins, and traffic around the clock. Anomalies are flagged the moment they appear.",
    },
    {
      title: "Malware Scanning & Removal",
      description: "Our malware scanning and removal services in India detect infected files, hidden backdoors, and malicious scripts. We eradicate them and restore clean code.",
    },
    {
      title: "Threat Detection & Alerts",
      description: "Our website threat detection services in India identify brute-force attempts, suspicious logins, and injection attacks. You receive prompt, actionable alerts.",
    },
    {
      title: "Firewall & Bot Protection",
      description: "We configure web application firewalls and filter hostile traffic. Scrapers, spam bots, and automated attacks are repelled.",
    },
    {
      title: "Vulnerability Scanning",
      description: "We scan for outdated software, weak configurations, and exposed endpoints. Risks are documented and prioritised for remediation.",
    },
    {
      title: "Managed Website Security",
      description: "Our managed website security services in Delhi NCR combine monitoring, response, and reporting under one plan. A dedicated team safeguards your platform month after month.",
    },
  ],
  featuresHeading: "Our Website Security Monitoring Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET for 24/7 Website Security Monitoring in Delhi?",
    points: [
      "Round-the-Clock Vigilance: Attackers do not keep office hours, and neither does our monitoring.",
      "Early Detection: We identify threats in their infancy, which limits damage and cost.",
      "Cleanup Included: Detection and removal come from one team, so nothing is lost in handover.",
      "Safe Response Practices: Backups and staging checks protect your live website during remediation.",
      "Multi-Platform Expertise: We secure WordPress, WooCommerce, Shopify, Laravel, and bespoke platforms.",
      "Lucid Reporting: Each month, you see precisely what we detected and resolved, in plain language.",
    ],
  },
  process: {
    heading: "Our Security Monitoring Process",
    steps: [
      {
        num: "01",
        title: "Security Audit & Baseline Scan",
        description: "We examine your files, plugins, user accounts, and server settings. We then record a clean baseline for future comparison.",
      },
      {
        num: "02",
        title: "Monitoring Setup & Alert Rules",
        description: "We configure continuous scanning with defined alert thresholds. Suspicious events reach the right people promptly.",
      },
      {
        num: "03",
        title: "Threat Analysis & Containment",
        description: "Every alert is investigated and classified by severity. Confirmed threats are isolated before they spread.",
      },
      {
        num: "04",
        title: "Cleanup & Hardening",
        description: "We remove malicious code, close vulnerabilities, and tighten access controls. Your website emerges stronger than before.",
      },
      {
        num: "05",
        title: "Monthly Reporting & Review",
        description: "You receive a concise report on scans, threats, and actions taken. We also recommend improvements for the period ahead.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are website security monitoring services?",
      a: "They are continuous services that scan a website for malware, suspicious activity, and vulnerabilities. They typically include alerts, threat analysis, cleanup, and regular reporting.",
    },
    {
      q: "How much do website security monitoring services in India cost?",
      a: "Pricing depends on your platform, website size, and the depth of monitoring required. A compact business site costs considerably less than a large ecommerce store. Share your requirements, and we will provide a transparent quote.",
    },
    {
      q: "How do I know if my website has malware?",
      a: "Warning signs include unexpected redirects, search engine warnings, sudden traffic drops, and unfamiliar files. A professional scan confirms the infection and its source.",
    },
    {
      q: "Do your malware scanning and removal services in India include cleanup?",
      a: "Yes. We remove malicious code, eliminate backdoors, and close the vulnerability that allowed entry. We also advise on preventing reinfection.",
    },
    {
      q: "What is the difference between security monitoring and security updates?",
      a: "Security updates patch known weaknesses in your software. Security monitoring watches for active threats and suspicious behaviour. Together, they provide layered protection.",
    },
    {
      q: "Can you protect a website that another agency built?",
      a: "Certainly. We audit the website, resolve existing risks, and then assume ongoing monitoring.",
    },
    {
      q: "Do managed website security services in Delhi NCR cover remote clients?",
      a: "Yes. Our service is delivered remotely, so location never limits the protection we provide. Detecting Threats Early. Protect What You Have Built.",
    },
  ],
  cta: {
    heading: "Discuss Your Security Monitoring Needs",
    description: "Ready to secure your website around the clock? Partner with EDDINET for 24/7 website security monitoring in Delhi. Contact our team today for a complimentary security scan and a clear quote within 24 hours.",
  },
  crossLinks: crossLinksFor("maintenance-support"),
  docxHeadings: {
    about: "About EDDINET: 24/7 Website Security Monitoring in Delhi",
    process: "Our Security Monitoring Process",
    faqs: "Frequently Asked Questions",
  },
};
