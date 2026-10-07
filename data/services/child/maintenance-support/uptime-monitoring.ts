// ============================================================================
//  FILE: data/services/child/maintenance-support/uptime-monitoring.ts
//  PAGE: /services/maintenance-support/website-uptime-monitoring-services-in-india
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
  slug: "website-uptime-monitoring-services-in-india",
  title: "Uptime Monitoring",
  metaTitle: "Uptime Monitoring Services in Delhi NCR | Eddinet",
  metaDescription: "24/7 monitoring that catches downtime and performance dips before users do. Alerts that reach a human, not a spam folder. Eddinet delivers dependable uptime monitoring services in Delhi NCR for India and global clients. Get a free proposal today.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Real-Time Availability Tracking | Server Telemetry | Instant Multi-Channel Alerts",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Website Uptime Monitoring Services in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "EDDINET provides website uptime monitoring services in India that check your site from multiple locations, around the clock, so no outage goes unnoticed. Downtime costs you revenue, customer trust, and search rankings. As a 24/7 website monitoring company in Delhi, we alert your team the moment something fails. Get a free uptime audit today.",
  detailedDescription: "At EDDINET, we protect businesses from the hidden cost of silent downtime. Network outages, DNS errors, database faults, and exhausted server resources can crash your website at any moment, often unnoticed for hours. Therefore, our engineers run automated checks from multiple locations in India and abroad, so every failure is caught early.\n\nOur monitoring specialists oversee your infrastructure health from start to finish. We deliver reliable server uptime monitoring services in India, fast website downtime alert services in India, and precise website availability monitoring in Delhi NCR. As a result, your team learns about problems before your customers do.",
  features: [
    {
      title: "Website Uptime Monitoring",
      description: "Our website uptime monitoring services in India check your site every 60 seconds from multiple locations. Visitors across India and abroad always reach a working website.",
    },
    {
      title: "24/7 Website Monitoring",
      description: "As a 24/7 website monitoring company in Delhi, we track full transaction flows, SSL validity, and domain renewals. Unexpected outages are prevented, not just reported.",
    },
    {
      title: "Server Health Monitoring",
      description: "Our server uptime monitoring services in India watch CPU load, RAM, disk I/O, and database connections. Bottlenecks are caught before they turn into downtime.",
    },
    {
      title: "Instant Downtime Alerts",
      description: "Our website downtime alert services in India notify you by SMS, email, Slack, WhatsApp, or webhook the moment a failure occurs. Your team can act without delay.",
    },
    {
      title: "Delhi NCR Availability Monitoring",
      description: "Our website availability monitoring in Delhi NCR covers regional hosting, CDN edge locations, and cloud environments. Local businesses stay online for local customers.",
    },
    {
      title: "Transaction & API Monitoring",
      description: "We simulate real journeys such as logins, checkouts, and REST or GraphQL API calls. Your key workflows keep working, not just your homepage.",
    },
  ],
  featuresHeading: "Our Website Uptime Monitoring Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET as Your 24/7 Website Monitoring Company in Delhi?",
    points: [
      "High-Frequency 60-Second Polling: Frequent automated checks ensure outages are detected within seconds, reducing undetected downtime to near zero.",
      "Smart False-Positive Prevention: Multi-region consensus verification confirms outages across independent network nodes before triggering emergency notifications.",
      "Instant Multi-Channel Alerts: Real-time dispatch via SMS, phone call, email, Slack, Teams, and webhooks guarantees your engineers receive notifications immediately.",
      "Full-Stack Monitoring Coverage: We don't just ping your homepage; we monitor database health, SSL certificates, cron jobs, DNS records, and API endpoints.",
      "Guaranteed SLA Integrity: Transparent uptime audit logs and historical uptime reports help you prove compliance with business SLAs and hosting standards.",
    ],
  },
  process: {
    heading: "Our Uptime Monitoring & Incident Response Process",
    steps: [
      {
        num: "01",
        title: "Infrastructure Mapping & Threshold Setup",
        description: "We audit your web architecture, DNS configurations, database dependencies, and critical user funnels to establish baseline performance metrics and alert thresholds.",
      },
      {
        num: "02",
        title: "Multi-Node Telemetry Deployment",
        description: "We configure automated polling engines across geographically distributed cloud nodes (AWS, GCP, Azure) to verify accessibility from multiple network vantage points simultaneously.",
      },
      {
        num: "03",
        title: "Real-Time Diagnostics & False-Positive Verification",
        description: "When an endpoint fails, our systems automatically perform multi-location rechecks, traceroutes, and response code analysis to confirm true downtime before triggering alerts.",
      },
      {
        num: "04",
        title: "Multi-Channel Alert Dispatch",
        description: "In the event of a verified outage, technical personnel receive instant alerts containing root-cause diagnostic data, HTTP status codes, and server log snippets for rapid troubleshooting.",
      },
      {
        num: "05",
        title: "Remediation & Incident SLA Support",
        description: "Our technical team assists in isolating the underlying cause—whether DNS failure, origin server crash, or database timeout—to restore live operations as quickly as possible.",
      },
      {
        num: "06",
        title: "SLA Reporting & Trend Analysis",
        description: "We deliver comprehensive monthly availability reports detailing total uptime percentages, Mean Time to Detect (MTTD), Mean Time to Recover (MTTR), and infrastructure performance trends.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are website uptime monitoring services in India?",
      a: "Website uptime monitoring services continuously track whether a website or server is accessible to users. They perform automated checks at set intervals (e.g., every 60 seconds) and send instant alerts if the site becomes slow, returns server errors, or goes offline completely.",
    },
    {
      q: "Why should I hire a 24/7 website monitoring company in Delhi instead of using a free ping tool?",
      a: "Free ping tools often check at long intervals (e.g., every 5 to 15 minutes), lack multi-region consensus, produce false alarms, and fail to track complex user actions like logins or checkouts. Our services provide high-frequency polling, false-positive protection, and full-stack API and server telemetry.",
    },
    {
      q: "What is the difference between website availability monitoring and server uptime monitoring?",
      a: "Website availability monitoring tracks front-end accessibility and HTTP response codes from a user perspective, whereas server uptime monitoring tracks backend server health—such as CPU usage, RAM utilization, database connections, and hardware resources.",
    },
    {
      q: "How do website downtime alert services in India notify my team during an outage?",
      a: "Our system sends instant alerts through multiple communication channels—including SMS, phone alerts, email, Slack, WhatsApp, Microsoft Teams, and custom webhooks—to ensure immediate action by your technical staff.",
    },
    {
      q: "How does website uptime affect Google search rankings (SEO)?",
      a: "Frequent or prolonged website downtime prevents search engine crawlers (Googlebot) from indexing your pages. If crawlers repeatedly encounter 5xx server errors, Google will downgrade your organic search rankings and drop your pages from search results.",
    },
    {
      q: "Can you monitor custom API endpoints and database health?",
      a: "Yes. We monitor REST, SOAP, and GraphQL API endpoints, as well as database query response times, custom webhooks, and SSL certificate expiration dates alongside standard web pages.",
    },
  ],
  cta: {
    heading: "Protect Your Digital Platform From Unplanned Outages",
    sub: "Configure Your Uptime Telemetry Today",
    description: "Ready to guarantee 99.99% availability and eliminate undetected server downtime? Partner with EDDINET for expert website uptime monitoring services in India. Contact our engineering team today to establish your real-time infrastructure monitoring pipeline!",
  },
  crossLinks: crossLinksFor("maintenance-support"),
  docxHeadings: {
    about: "About EDDINET: 24/7 Website Monitoring Company in Delhi",
    process: "Our Uptime Monitoring & Incident Response Process",
    faqs: "Frequently Asked Questions",
  },
};
