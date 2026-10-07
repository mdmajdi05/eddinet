// ============================================================================
//  FILE: data/services/child/maintenance-support/emergency-support.ts
//  PAGE: /services/maintenance-support/emergency-website-support-services-in-india
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
  slug: "emergency-website-support-services-in-india",
  title: "Emergency Support",
  metaTitle: "Emergency Support Services in Delhi NCR | Eddinet",
  metaDescription: "Priority assistance that gets critical issues fixed fast when something breaks. Because a down checkout doesn't wait till Monday. Eddinet delivers dependable emergency support services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Rapid Incident Containment | Immediate Technical Remediation | 24/7 Zero-Downtime Incident Response",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Emergency Website Support Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET delivers rapid-response emergency website support services in India. Server crash, hack, or broken checkout? Our engineers respond fast to find the cause, repair the damage, and bring your website back online. Every hour of downtime costs you revenue and customer trust. As a trusted 24/7 emergency IT support partner in Delhi, we are ready day or night. Call us now for urgent help.",
  detailedDescription: "At EDDINET, we know that a crisis never waits for office hours. A fatal PHP error, a hijacked DNS, or a failed payment gateway can stop your sales in seconds. You need an engineer on the problem, not a ticket in a queue. That is why our emergency desk stays staffed around the clock.\n\nWhen trouble strikes, our team takes charge from the first call to the final fix. We provide urgent website fix services in India, hacked website emergency repair in India, and a dependable 24/7 website support company in Delhi NCR. We find the cause, contain the damage, and get you back online.",
  features: [
    {
      title: "Emergency Website Support",
      description: "Our emergency website support services in India fix crashes, 500/502/504 errors, white screens, and code conflicts fast.",
    },
    {
      title: "24/7 Emergency IT Support",
      description: "Our Delhi-based engineers stay on standby around the clock for server outages, DNS failures, SSL emergencies, and network issues.",
    },
    {
      title: "Hacked Website Repair",
      description: "Our hacked website emergency repair in India isolates infected files, removes backdoors and spam scripts, and revokes unauthorised admin access.",
    },
    {
      title: "Urgent Website Fixes",
      description: "Our urgent website fix services in India repair broken checkouts, lead forms, API webhooks, layout collapses, and failed updates.",
    },
    {
      title: "Database Recovery",
      description: "We repair corrupted databases and restore backup snapshots, so your data comes back safely.",
    },
    {
      title: "Blacklist Removal",
      description: "We clean compromised assets, request reviews from Google Safe Browsing, and remove warning banners to win back your traffic.",
    },
  ],
  featuresHeading: "Our Emergency Website Support Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your 24/7 Website Support Company in Delhi NCR?",
    points: [
      "Sub-15 Minute Emergency Response: Immediate escalation to senior systems and security engineers no automated bots or delayed ticketing queues.",
      "Rapid Malware & Hack Containment: Immediate isolation and removal of malicious code injections, backdoors, defacements, and unauthorized admin accounts.",
      "100% Safe Recovery Protocols: Emergency repairs are executed with strict snapshot backups in place to protect your live data and business records.",
      "Platform-Agnostic Expertise: Specialized emergency resolution across WordPress, WooCommerce, Shopify, Laravel, Node.js, React, and custom cloud setups.",
      "Transparent Incident Reporting: Clear, jargon-free technical post-mortems explaining what failed, how it was fixed, and how to prevent recurrence.",
    ],
  },
  process: {
    heading: "Our Emergency Response & Remediation Process",
    steps: [
      {
        num: "01",
        title: "Incident Triage & Containment",
        description: "Our emergency desk logs the incident, isolates the affected endpoints, and secures a backup snapshot to prevent further damage.",
      },
      {
        num: "02",
        title: "Root-Cause Diagnosis",
        description: "Our engineers review code, server logs, and databases to pinpoint the exact point of failure.",
      },
      {
        num: "03",
        title: "Targeted Repair & Cleanup",
        description: "We apply fixes in an isolated environment. Broken logic is repaired, vulnerable dependencies are patched, and malicious backdoors are removed.",
      },
      {
        num: "04",
        title: "Testing & Verification",
        description: "We run functional, database, and security checks to confirm the issue is resolved and nothing hidden remains.",
      },
      {
        num: "05",
        title: "Live Restoration",
        description: "We deploy the verified fix to your live server and check workflows, SSL, and server responses.",
      },
      {
        num: "06",
        title: "Post-Incident Report",
        description: "You receive a clear report on the root cause, the fixes applied, and steps to prevent a repeat.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What qualifies as an emergency website support service in India?",
      a: "It covers urgent failures such as site crashes, malware infections, broken checkouts, server errors, and Google blacklist warnings.",
    },
    {
      q: "How fast does your 24/7 emergency IT support in Delhi respond?",
      a: "Our emergency desk starts triage as soon as your request arrives. A senior engineer is assigned right away.",
    },
    {
      q: "What is included in hacked website emergency repair in India?",
      a: "We contain the malware, remove backdoors and spam scripts, and clean infected databases. We also secure your login credentials and request Google blacklist removal.",
    },
    {
      q: "Can you fix my website if an update crashes it?",
      a: "Yes. We roll back or patch the conflicting code, restore a stable database, and fix the underlying errors to bring your site back online.",
    },
    {
      q: "Do I need to share admin or server access?",
      a: "Yes. We need secure, temporary access to your CMS, hosting panel (cPanel or Plesk), or server (SSH or FTP). You can revoke it once the work is done.",
    },
    {
      q: "Will I lose my data during an emergency repair?",
      a: "We take a full database and file backup before making any change. This keeps your data and transaction history protected throughout the repair.",
    },
  ],
  cta: {
    heading: "Restore Your Website Uptime Immediately",
    sub: "Request Immediate Emergency Support",
    description: "Is your website currently crashed, hacked, or failing to process critical business transactions? Partner with EDDINET for specialized emergency website support services in India. Contact our emergency technical desk right now to deploy immediate incident response!",
  },
  crossLinks: crossLinksFor("maintenance-support"),
  docxHeadings: {
    about: "About EDDINET: 24/7 Emergency IT Support in Delhi",
    process: "Our Emergency Response & Remediation Process",
    faqs: "Frequently Asked Questions",
  },
};
