// ============================================================================
//  FILE: data/services/child/hosting-migration/wordpress-migration.ts
//  PAGE: /services/hosting-migration/wordpress-migration
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
export const child = {
  slug: "wordpress-migration",




  title: "WordPress Migration",
  metaTitle: "WordPress Migration Services in India | Eddinet",
  metaDescription: "Eddinet delivers premier WordPress migration services in India. We engineer seamless, zero-downtime server transfers preserving custom database",
  heroHeading: "WordPress Migration Services in India",
  heroSubheading: "WordPress Website Migration | Zero-Downtime Host Transfer | Database & Asset Optimization",

  detailedDescription: "Eddinet delivers premier WordPress migration services in India. We engineer seamless, zero-downtime server transfers preserving custom database serializations, retaining permalinks, and safeguarding search rankings.\n\nStop risking lost WooCommerce orders, corrupted database tables, and site outages. Our high-fidelity migration workflows move your WordPress sites to new cloud hosts with absolute precision and zero data loss.\n\nEddinet provides specialist WordPress website migration India solutions to convert risky host transfers into smooth, zero-downtime server deployments. We bypass fragile migration plugins by using direct SSH transfers and WP-CLI commands-guaranteeing 100% data fidelity and performance optimization.\n\nOur certified engineers manage your entire migration lifecycle:\n\nMigrate WordPress Site to New Host India: Full-stack migration of core files, custom themes, active plugins, and MySQL databases across any cloud provider.\n\nWordPress Hosting Migration Without Downtime India: Staging deployment, live delta database synchronization, and TTL-managed DNS switchovers.\n\nWordPress Site Transfer Service India: Specialized transfers for WooCommerce stores, custom ACF configurations, and complex WordPress Multisite networks.",
  features: [
    {
      title: "WordPress Migration Services in India",
      description: "We execute deep, manual-assisted migrations for high-traffic WordPress sites-verifying file permissions, PHP version compatibility, and server environment requirements before going live.",
    },
    {
      title: "WordPress Website Migration India",
      description: "We handle full migrations across cPanel, Plesk, Cloudways, AWS EC2, DigitalOcean Droplets, Kinsta, EngineWP, and private VPS servers with full configuration tuning.",
    },
    {
      title: "Migrate WordPress Site to New Host India",
      description: "We migrate complex database structures, maintaining strict UTF-8/UTF-8MB4 character encoding and updating internal domain paths without corrupting serialized plugin settings.",
    },
    {
      title: "WordPress Hosting Migration Without Downtime India",
      description: "We keep your current site 100% active while staging the target server. We execute a final delta sync for new orders or blog comments right before updating your DNS records.",
    },
    {
      title: "WooCommerce & E-Commerce Migration",
      description: "We protect active customer carts, payment gateway webhooks, transaction logs, and order histories through isolated database export techniques during cutover.",
    },
    {
      title: "SEO Integrity & URL Structure Preservation",
      description: "We map 301 redirects (if domain names change), maintain canonical tags, preserve permalinks, and re-verify SSL configuration to keep your Google search rankings completely intact.",
    },
  ],
  benefits: [],
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for WordPress Migration Services?",
    points: [
      "Certified Linux & WordPress Engineers: Deep hands-on experience with WP-CLI, NGINX/Apache web servers, MySQL database tuning, and cloud infrastructure.",
      "Zero Plugin Dependability: We do not rely on basic migration plugins that timeout on large sites; we utilize secure command-line tools and direct SSH transfers.",
      "100% Data & SEO Safety: Complete protection for serialized plugin options, custom post types, WooCommerce tables, and search engine index positions.",
      "Cross-Host Flexibility: Seamless transfers from shared hosts (GoDaddy, Bluehost, Hostinger) to high-performance cloud platforms (AWS, GCP, DigitalOcean).",
      "24/7 SLA-Backed Support: Direct access to DevOps sysadmins for post-migration troubleshooting, security auditing, and performance tuning.",
    ],
  },
  process: {
    heading: "Our WordPress Migration Process in India",
    steps: [
      {
        num: "01",
        title: "Pre-Migration Audit & Compatibility Check",
        description: "We inspect active plugins, database size, custom code dependencies, and target server PHP/MySQL specs to prevent execution timeouts and memory allocation errors.",
      },
      {
        num: "02",
        title: "Full Asset Backup & Staging Setup",
        description: "We create an isolated offline backup of your wp-content directory and database, deploying the duplicate instance on the new host using a temporary staging URL.",
      },
      {
        num: "03",
        title: "Serialized Data Search-and-Replace",
        description: "We run specialized WP-CLI search-and-replace commands to update database URLs, file paths, and SSL references without corrupting serialized PHP arrays.",
      },
      {
        num: "04",
        title: "Staging QA & Speed Optimization",
        description: "We thoroughly test form entries, payment gateways, admin access, page speeds, and image loading, while configuring Redis/Object Caching and NGINX rewrite rules on the new host.",
      },
      {
        num: "05",
        title: "Real-Time Delta Database Sync",
        description: "We execute a final database differential import immediately prior to DNS cutover to capture all recent user interactions, transactions, and content changes.",
      },
      {
        num: "06",
        title: "Zero-Downtime DNS Cutover & Health Check",
        description: "We update domain A records and SSL certificates, actively monitoring server traffic logs and error reports to ensure a seamless post-migration launch.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What do your WordPress migration services in India cover?",
      a: "We handle complete file and database transfers, serialized search-and-replace execution, SSL installation, staging testing, WooCommerce data protection, DNS repointing, and post-launch speed optimization.",
    },
    {
      q: "How do you ensure WordPress hosting migration without downtime in India?",
      a: "We build and thoroughly test your entire WordPress site on a temporary URL on the target server. Once verified, we perform a final delta database sync and switch your domain DNS, keeping the site online continuously for your visitors.",
    },
    {
      q: "Will migrating my WordPress site break custom plugins or WooCommerce data?",
      a: "No. Using WP-CLI and manual database handling, we ensure serialized data strings (which store plugin settings, widget options, and page builder elements) remain completely uncorrupted.",
    },
    {
      q: "How do you handle WordPress site transfer service India for large sites or high-volume databases?",
      a: "For large media libraries or multi-gigabyte databases, we utilize direct server-to-server SSH transfers (rsync/SCP) and MySQL command-line utilities to bypass web server execution limits.",
    },
    {
      q: "How long does a typical WordPress website migration take?",
      a: "Most standard WordPress migrations are completed within 2 to 6 hours. Larger WooCommerce stores or multisite networks are scheduled with detailed maintenance windows and completed within 12 to 24 hours.",
    },
  ],
  crossLinks: crossLinksFor("hosting-migration"),
  featuresHeading: "Our WordPress Migration Services in India",
  docxHeadings: {
    about: "About Us: WordPress Migration Experts",
    process: "Our WordPress Migration Process in India",
    faqs: "Frequently Asked Questions About WordPress Migration Services",
  },
};
