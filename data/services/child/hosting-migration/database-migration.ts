// ============================================================================
//  FILE: data/services/child/hosting-migration/database-migration.ts
//  PAGE: /services/hosting-migration/database-migration-services-in-india
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/hosting-migration";
export const child = {
  slug: "database-migration-services-in-india",
  title: "Database Migration",
  metaTitle: "Database Migration Services in India | Eddinet",
  metaDescription: "Eddinet provides database migration services in India that move your data to a new server or cloud platform with full verification.",
  heroHeading: "Database Migration Services in India",
  heroSubheading: "Database Migration Without Data Loss | MySQL Migration | Cloud Database Moves",
  detailedDescription: "Eddinet provides database migration services in India that move your data to a new server or cloud platform with full verification. We back up, validate every table, and go live only after you approve. Get your free migration plan today.\n\nAre you afraid that a single failed import could corrupt your data? Do you need to switch databases without freezing your application for hours? If yes, Eddinet is the solution to your problem.\n\nAs a database migration company in India, we bring hands-on experience from moving production databases of many sizes. We study your schema, query load, and application dependencies before touching any data. You also receive plain-language updates, so you always know where your migration stands.",
  features: [
    {
      title: "MySQL Database Migration in India",
      description: "Our MySQL database migration covers version upgrades, server moves, and engine changes. We check character sets, collations, SQL modes, and stored routines, because these silently break applications after a move. We also test your real queries on the new server before the switch.",
    },
    {
      title: "Cloud Database Migration Services in India",
      description: "Our cloud database migration services move on-premise or hosted databases to platforms such as Amazon RDS. We choose the right method, such as native replication or AWS Database Migration Service, based on your database size and downtime limits. Because of this, your data reaches the cloud safely and stays secure in transit.",
    },
    {
      title: "Database Migration Without Data Loss in India",
      description: "Our goal is a migration where every record arrives intact. We compare row counts and checksums between the old and new databases. In addition, we keep the source database untouched until you approve, so a rollback is always possible.",
    },
    {
      title: "Database Migration Planning and Support in India",
      description: "A good migration starts long before the first byte moves. We map dependencies, estimate cutover time, and prepare a written runbook. After the move, we monitor performance and fix slow queries that appear under real traffic.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Database Migration Services in India",
    points: [
      "Rehearsed before the real move: We run a full trial migration first. Errors surface on a test server, not in production. Your live cutover becomes predictable.",
      "Proof, not promises: We compare row counts and checksums after transfer. You receive the results in a short report. This shows your data arrived complete.",
      "Rollback ready at every step: The source database stays untouched until you confirm success. If something looks wrong, we switch back. This removes the fear of a one-way move.",
      "Minimal downtime by design: For large databases, we use replication to keep old and new servers in sync. The final switch takes minutes, not hours. Your application stays available for most of the process.",
      "Security during transfer: Data moves over encrypted connections with restricted access. Credentials are handled carefully and rotated after the move. Your data is protected while it travels.",
      "Support in Indian business hours: Our team is online when your working day begins. Urgent issues reach people who already know your migration. Therefore, you spend less time explaining and more time fixing.",
    ],
    description: "We measure success by complete data transfer, minimal downtime, and stable performance after the move.",
  },
  process: {
    heading: "Our Process for Database Migration in India",
    steps: [
      {
        num: "01",
        title: "Schema and dependency audit",
        description: "We review tables, indexes, triggers, users, and the applications that connect to them. This reveals hidden risks, such as unsupported features. It also shows exactly what must move.",
      },
      {
        num: "02",
        title: "Migration method selection",
        description: "We choose between a dump and restore, replication-based sync, or a managed migration tool. As a result, the method matches your database size and downtime limit. The choice is explained in plain language.",
      },
      {
        num: "03",
        title: "Backup and rollback runbook",
        description: "Next, we take a verified backup and write a step-by-step rollback plan. The source database stays unchanged throughout. Nothing is deleted without your approval.",
      },
      {
        num: "04",
        title: "Rehearsal migration",
        description: "Then we run a full trial on a test server. We measure transfer time and fix any errors, such as encoding conflicts. This removes surprises from the real cutover.",
      },
      {
        num: "05",
        title: "Validation and cutover",
        description: "We keep the new database in sync until the switch, then compare row counts and checksums. Traffic moves at a low-traffic hour. Live checks confirm that your application reads and writes correctly.",
      },
      {
        num: "06",
        title: "Post-migration tuning",
        description: "Finally, we watch query speed, replication lag, and errors for several days. Indexes and settings are adjusted for real usage. Once you are satisfied, we help you retire the old server.",
      },
    ],
    description: "Here is how we move your database from the old environment to the new one.",
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "How long does a database migration take?",
      a: "Small databases can move in a few hours, while large ones may take days of preparation. Size, network speed, and downtime limits all affect the timeline. After a review, we share a realistic schedule before any work begins.",
    },
    {
      q: "Will my application go down during database migration?",
      a: "Some downtime is usually needed for the final switch, but we keep it as short as possible. Replication-based methods can reduce it to minutes for large databases. We plan the cutover for a low-traffic hour.",
    },
    {
      q: "How do you make sure no data is lost during migration?",
      a: "We take a verified backup first and compare row counts and checksums after the transfer. The old database stays untouched until you approve. No process can promise perfection, but these checks catch problems early.",
    },
    {
      q: "Can you upgrade my MySQL version during the migration?",
      a: "Yes. Moving to a newer version is common, such as from MySQL 5.7 to 8.0. We test your queries, SQL modes, and stored routines first, because version changes can affect compatibility.",
    },
    {
      q: "Which is better for my business, migrating to the cloud or staying on a dedicated server?",
      a: "The cloud offers easier scaling, managed backups, and lower maintenance. A dedicated server can be cheaper for steady, predictable workloads. We review your traffic and budget, then recommend the better fit.",
    },
  ],
  crossLinks: crossLinksFor("hosting-migration"),
  featuresHeading: "Our Database Migration Services in India",
  featuresDescription: "We focus on four areas where migrations most often succeed or fail.",
  docxHeadings: {
    about: "About Us: Database Migration Company in India",
    process: "Our Process for Database Migration in India",
    faqs: "FAQs About Database Migration Services in India",
  },
};
