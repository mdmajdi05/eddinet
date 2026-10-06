// ============================================================================
//  FILE: data/services/child/hosting-migration/website-migration.ts
//  PAGE: /services/hosting-migration/website-migration
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
export const child = {
  slug: "website-migration",




  title: "Website Migration",
  metaTitle: "Website Migration Services in India | Eddinet",
  metaDescription: "Eddinet provides website migration services in India where our engineers move your files, databases, and emails to a new server with care.",
  heroHeading: "Website Migration Services in India",
  heroSubheading: "Website Migration Without Downtime | Safe Website Transfer | cPanel to cPanel Moves",

  detailedDescription: "Eddinet provides website migration services in India where our engineers move your files, databases, and emails to a new server with care. Every move is planned, backed up, and tested first. As a result, your site keeps its speed, its data, and its search rankings.\n\nHas a past website move broken your pages or lost your emails? Are you afraid that switching hosts will wipe out your Google rankings? If yes, Eddinet is the solution to your problem.\n\nAs a website migration company in India, we give you an experienced sysadmin team that has handled moves of every size. We study how your site, domain, and email fit together, then plan the transfer around them. You also receive plain-language updates, so you always know where your migration stands.",
  features: [
    {
      title: "Website Migration Without Downtime in India",
      description: "Our aim is a move your visitors never notice. We build and test your site on the new server first, then switch traffic at a quiet hour. Because of this, downtime stays minimal and lost orders stay rare.",
    },
    {
      title: "Website Transfer Services in India",
      description: "Our website transfer services cover files, databases, email accounts, SSL certificates, and scheduled tasks. Nothing is left behind on the old server. We also check permissions and settings, so your site behaves exactly as before.",
    },
    {
      title: "cPanel to cPanel Migration in India",
      description: "Moving between cPanel accounts is our routine work. We transfer full account backups, restore them on the new server, and match PHP versions and settings. In addition, we test each site before the DNS is changed.",
    },
    {
      title: "Website Migration Support After the Move in India",
      description: "Problems often appear days after a move, not on the day itself. We keep watching your site, fix broken links, and confirm that emails and forms work. You also get a clear checklist showing what was moved and verified.",
    },
  ],
  benefits: [],
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Website Migration Services in India",
    points: [
      "Rollback ready at every step: The old server stays intact until you confirm success. If something looks wrong, we switch back. This removes the fear of a one-way move.",
      "Search rankings protected: We keep URLs, redirects, and metadata consistent during the transfer. Google finds your pages exactly where they were. Ranking drops from careless moves are avoided.",
      "Email moves with the website: Mailboxes, forwarders, and authentication records are included in the plan. Your team keeps sending and receiving without a gap. Customers never see bounced messages.",
      "Tested before you go live: We review the site on the new server using a private link. You can check it yourself before any switch. Surprises on launch day become rare.",
      "Fixed scope, clear timeline: You receive a written list of what will move and when. Extra work is discussed before it starts. Billing stays free of surprises.",
      "Support in Indian business hours: Our team is online when your working day begins. Urgent problems reach people who already know your migration. Therefore, you spend less time explaining and more time fixing.",
    ],
  },
  process: {
    heading: "Our Process for Website Migration in India",
    steps: [
      {
        num: "01",
        title: "Site and server inventory",
        description: "We list your files, databases, email accounts, and software versions. This shows exactly what must move. It also reveals risky items, such as outdated plugins.",
      },
      {
        num: "02",
        title: "Full backup and rollback plan",
        description: "We take a complete backup and keep the old server untouched. As a result, you can return to the old setup at once if needed. Nothing is deleted until you approve.",
      },
      {
        num: "03",
        title: "New server preparation",
        description: "Next, we set up the destination with matching software, security, and SSL. Your domain records stay unchanged for now. Everything is ready before the first file moves.",
      },
      {
        num: "04",
        title: "Transfer and private testing",
        description: "Then we copy your data and open the site on a private test link. We check pages, forms, logins, images, and email. Any fault is fixed before visitors see it.",
      },
      {
        num: "05",
        title: "DNS switch and live checks",
        description: "We lower DNS TTL in advance and switch records at a low-traffic hour. Live checks confirm that pages, checkout, and email work. The old server keeps running during the changeover.",
      },
      {
        num: "06",
        title: "Post-move monitoring",
        description: "Finally, we watch errors, speed, and search visibility for several days. Redirects and broken links are corrected. Once you are satisfied, we help you retire the old server.",
      },
    ],
    description: "Here is how we move your site from the old host to the new one.",
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "How long does a website migration take?",
      a: "A simple website usually moves in one to three days. Larger sites with several databases, email accounts, or custom software take longer. After a quick review, we share a realistic timeline before any work begins.",
    },
    {
      q: "What happens to my emails during a website transfer?",
      a: "Mailboxes, forwarders, and email authentication records can move along with your site. We plan the switch so messages keep arriving during the change. After the move, we send test emails to confirm everything works.",
    },
    {
      q: "Do I need to keep paying my old host during the move?",
      a: "Yes, keep the old plan active until the migration is complete and you have approved the new site. The old server also acts as your safety net if we need to roll back. Cancel it only after everything is verified.",
    },
    {
      q: "What can go wrong during website migration, and how do you prevent it?",
      a: "Common problems include missing files, broken links, database errors, and lost emails. We prevent them with full backups, private testing, and post-move checks. If something fails, the untouched old server lets us restore your site quickly.",
    },
    {
      q: "Do I have to be available while you migrate my website?",
      a: "Only briefly. We need access details at the start and your approval before the DNS switch. After that, we handle the technical work and keep you updated in plain language.",
    },
  ],
  crossLinks: crossLinksFor("hosting-migration"),
  featuresHeading: "Our Website Migration Services in India",
  featuresDescription: "We focus on four areas that decide whether a move goes smoothly.",
  docxHeadings: {
    about: "About Us: Website Migration Company in India",
    process: "Our Process for Website Migration in India",
    faqs: "FAQs",
  },
};
