// ============================================================================
//  FILE: data/services/child/hosting-migration/cloud-hosting.ts
//  PAGE: /services/hosting-migration/cloud-hosting
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/hosting-migration";
export const child = {
  slug: "cloud-hosting",
  title: "Cloud Hosting",
  metaTitle: "Cloud Hosting Services in India | Eddinet",
  metaDescription: "Many businesses move to the cloud after a painful outage or a surprise bill. That is usually where Eddinet steps in.",
  heroHeading: "Cloud Hosting Services in India",
  heroSubheading: "Product launches, festive sales, and viral campaigns should never put your website at risk. Eddinet delivers cloud hosting services in India that stretch when demand rises and keep running when a server fails. Our engineers design and operate the environment, so your team can stay focused on the business.",
  detailedDescription: "Many businesses move to the cloud after a painful outage or a surprise bill. That is usually where Eddinet steps in. As a cloud hosting provider in India, we combine cloud engineering, DevOps, and server security under one team.\n\nWe start by understanding how your website or application actually behaves. Then we build an environment around those patterns instead of forcing a ready-made package. You receive plain-language reports and full documentation, so nothing about your infrastructure stays a mystery.",
  features: [
    {
      title: "Scalable Cloud Hosting in India",
      description: "Traffic is rarely steady, and your hosting should not be either. We set up auto-scaling rules that add capacity during peaks and release it afterward. As a result, you handle sudden crowds without paying for idle servers all month.",
    },
    {
      title: "AWS Cloud Hosting Services in India",
      description: "We build and run your workloads on Amazon Web Services, including EC2, RDS, S3, and networking. Each service is chosen for a reason, not for its popularity. This gives you the strength of AWS without the confusion of its hundreds of options.",
    },
    {
      title: "High Availability Cloud Hosting in India",
      description: "Your site should not depend on a single machine. We distribute workloads across multiple availability zones and add automatic failover. If one component stops working, traffic moves to a healthy one within moments.",
    },
    {
      title: "Fully Managed Support from a Cloud Hosting Provider in India",
      description: "Running the cloud is a daily job. We monitor performance, apply security patches, verify backups, and watch your spending. You also receive clear reports that show what changed and why.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Cloud Hosting Services in India",
    points: [
      "No surprise cloud bills: We set budgets, alerts, and right-sized resources from day one. Monthly reviews show exactly where your money goes. You stay in control of spending.",
      "Designed around your workload: A store, a SaaS product, and a news site all behave differently. We plan each environment around its own traffic pattern. This avoids the trial and error that causes downtime.",
      "Failover that has been tested: We do not just draw a failover plan. We trigger controlled failures to confirm it works. Your team knows what happens before a real incident does.",
      "Security in every layer: Access rules, encryption, and patching are built into the setup. Unusual activity is flagged early. Protection grows along with your infrastructure.",
      "Easy exit, no lock-in: Your accounts remain in your name, with documentation we hand over. You can review or change providers at any point. This keeps the relationship honest.",
      "Support during Indian business hours: Our engineers are online when your working day begins. Urgent issues reach people who already know your setup. Therefore, you spend less time explaining and more time fixing.",
    ],
    description: "We measure success by faster page loads, steadier uptime, and predictable cloud costs.",
  },
  process: {
    heading: "Our Process for Cloud Hosting Setup in India",
    steps: [
      {
        num: "01",
        title: "Traffic and workload study",
        description: "We examine your traffic history, applications, and peak periods. This tells us how much capacity you truly need. It also prevents overspending on resources that sit unused.",
      },
      {
        num: "02",
        title: "Architecture blueprint",
        description: "We map out servers, storage, networking, and scaling rules on paper first. As a result, you see the design and the estimated cost before anything is built. Every choice comes with a plain explanation.",
      },
      {
        num: "03",
        title: "Secure environment build",
        description: "Next, we create the cloud setup with firewalls, encryption, and access controls. Automated backups are switched on from the start. We review each setting before moving forward.",
      },
      {
        num: "04",
        title: "Migration and stress testing",
        description: "Then we transfer your data and applications. We simulate heavy traffic to see where the system bends. Weak points are fixed before real visitors arrive.",
      },
      {
        num: "05",
        title: "Controlled cutover",
        description: "We switch traffic during quiet hours and watch live metrics closely. If something looks wrong, we can respond immediately. Most visitors will not notice the change.",
      },
      {
        num: "06",
        title: "Tuning and cost review",
        description: "Finally, we review usage every month and adjust resources. Unused capacity is trimmed, and scaling rules are refined. Your setup stays efficient as the business grows.",
      },
    ],
    description: "Here is how we take you from your current server to a stable cloud environment.",
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "How do cloud hosting services in India actually work?",
      a: "Instead of one physical server, your site runs on a pool of connected servers. Resources are shared out as needed, so a busy hour gets more power. If one server fails, the others continue serving visitors.",
    },
    {
      q: "How do I choose the right cloud hosting provider in India?",
      a: "Check whether the provider designs for your workload or sells a fixed package. Ask about failover testing, backup verification, and cost reporting. Also confirm that you keep ownership of your cloud accounts.",
    },
    {
      q: "Why choose AWS cloud hosting services in India over traditional hosting?",
      a: "AWS lets you add or remove capacity in minutes and offers strong built-in security tools. It also provides infrastructure across multiple zones, which supports better uptime. Traditional hosting can be simpler and cheaper for small, steady sites.",
    },
    {
      q: "What does high availability cloud hosting mean for my website?",
      a: "It means your site does not depend on a single server or location. Workloads run in several places, and traffic reroutes automatically if one fails. No system is immune to every problem, but this design greatly reduces downtime.",
    },
    {
      q: "How much does scalable cloud hosting cost in India?",
      a: "Cost depends on compute, storage, traffic, backups, and how much management you need. Because you pay for what you use, a well-planned setup can stay economical. After a short discovery call, we share a clear estimate.",
    },
  ],
  crossLinks: crossLinksFor("hosting-migration"),
  featuresHeading: "Our Cloud Hosting Services in India",
  featuresDescription: "We concentrate on four areas where cloud hosting makes the biggest difference.",
  docxHeadings: {
    about: "About Us: Your Cloud Hosting Provider in India",
    process: "Our Process for Cloud Hosting Setup in India",
    faqs: "FAQs",
  },
};
