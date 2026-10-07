// ============================================================================
//  FILE: data/services/child/cloud-devops/cloud-migration.ts
//  PAGE: /services/cloud-devops/cloud-migration-services-company-in-india
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================
// ── HERO FIELDS (top of the page) ─────────────────────────────────────
//   heroEyebrow    = badge chip shown ABOVE the <h1>
//   heroHeading    = the <h1> heading itself
//   heroSubheading = paragraph shown BELOW the <h1>

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/cloud-devops";
export const child = {
  slug: "cloud-migration-services-company-in-india",
  title: "Cloud Migration",
  metaTitle: "Cloud Migration Services in India | Eddinet",
  metaDescription: "Modern organizations require fast, secure cloud environments to maintain operational agility. Eddinet provides premier cloud migration services in India.",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "AWS Migration | Azure Migration | Enterprise Migration Solutions",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Cloud Migration Services Company in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "Modern organizations require fast, secure cloud environments to maintain operational agility. Eddinet provides premier cloud migration services in India. As a trusted cloud migration company in India, we build, deploy, and manage scalable cloud setups to reduce capital costs, prevent system downtime, and accelerate digital growth.",
  detailedDescription: "At Eddinet, we transition businesses from complex local setups to agile cloud environments. As a trusted provider of enterprise cloud migration in India, we eliminate technical debt, safeguard data, and optimize workloads for continuous long-term growth.\n\nCustomised Roadmaps: Our certified engineers build custom migration plans designed to match your specific business goals and operational needs.\n\nZero-Downtime Transfers: We use secure data pipelines and continuous database replication to move your systems without data loss or service disruption.\n\nCost & Speed Tuning: Post-migration, we constantly fine-tune your setup to cut unnecessary server costs and keep your applications fast.",
  features: [
    {
      title: "AWS Cloud Migration Services in India",
      description: "We migrate legacy servers, applications, and corporate databases to Amazon Web Services with zero business disruption. Our certified architects configure secure virtual private clouds and automated failover systems to protect critical operations.",
    },
    {
      title: "Azure Cloud Migration Services in India",
      description: "We transition your workloads to Microsoft Azure using automated pipeline orchestration and clear security controls. This process improves system availability, streamlines Active Directory management, and lowers overall server maintenance costs.",
    },
    {
      title: "Enterprise Cloud Migration in India",
      description: "We execute end-to-end cloud migrations for complex corporate applications, ERP systems, and high-volume databases. Our engineers isolate risk, enforce strict data compliance standards, and maintain complete continuity throughout execution.",
    },
    {
      title: "Cloud Application Refactoring & Modernization",
      description: "We re-architect outdated legacy applications into cloud-native microservices before live deployment. This transformation eliminates technical slowness, improves resource efficiency, and accelerates time-to-market for future product releases.",
    },
    {
      title: "Serverless & Database Migration",
      description: "We move monolithic database systems to high-speed cloud-managed databases and serverless architectures. Our process eliminates manual server administration, prevents resource bottlenecks, and enables continuous automated scaling.",
    },
    {
      title: "Post-Migration Security & Cost Optimization",
      description: "We conduct continuous security audits, vulnerability testing, and resource usage assessments post-launch. By configuring auto-scaling policies and reserved pricing models, we keep your cloud ecosystem safe and cost-effective.",
    },
  ],
  featuresHeading: "Our Cloud Migration Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Cloud Migration Services?",
    points: [
      "Certified Cloud Architecture Team: Our engineers hold certifications across AWS, Microsoft Azure, and GCP to handle complex cloud migration projects efficiently.",
      "Business-Focused Migration Strategy: We design cutover schedules around your peak operational hours to protect active business operations from service downtime.",
      "Zero-Downtime Data Transfer: We utilize automated data replication channels to move sensitive corporate records without data loss or operational interruptions.",
      "Enterprise Security & Compliance: We enforce end-to-end encryption, identity management, and regulatory compliance standards across every stage of migration.",
      "Proactive Cost Optimization: We eliminate idle computing charges and implement auto-scaling to lower your monthly infrastructure spending immediately post-launch.",
      "Dedicated Post-Launch Support: We deliver round-the-clock SLA-backed maintenance, automated backups, and instant troubleshooting to maintain optimal application health.",
    ],
  },
  process: {
    heading: "Our Cloud Migration Process in India",
    steps: [
      {
        num: "01",
        title: "IT Assessment & Cloud Strategy Planning",
        description: "We evaluate your existing server environment, system dependencies, and security compliance rules to construct an optimal cloud transition strategy.",
      },
      {
        num: "02",
        title: "Target Cloud Architecture & Environment Setup",
        description: "We design virtual private clouds, network subnets, firewalls, and encryption protocols on your chosen cloud platform prior to data transfer.",
      },
      {
        num: "03",
        title: "Pilot Migration & Validation Testing",
        description: "We execute a test migration using non-critical application workloads to measure transfer speeds, network latency, and database integrity.",
      },
      {
        num: "04",
        title: "Workload & Database Cutover Execution",
        description: "Our engineers transfer live production databases, media assets, and application code bases using secure, real-time data replication channels.",
      },
      {
        num: "05",
        title: "Rigorous Security & Performance Validation",
        description: "We run comprehensive load testing, penetration scans, and user acceptance tests to ensure your applications run at peak performance.",
      },
      {
        num: "06",
        title: "Post-Migration Optimization & Managed Support",
        description: "We deliver 24/7 server monitoring, routine OS patching, continuous cost auditing, and automated system backups to keep operations smooth.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What do your cloud migration services in India include?",
      a: "We provide strategy discovery, infrastructure design, zero-downtime data migration, legacy application modernization, security setup, and post-launch managed support.",
    },
    {
      q: "How do you ensure zero downtime during cloud migration?",
      a: "We build target cloud environments, replicate live databases continuously, and perform thorough test runs before executing seamless DNS cutovers during off-peak hours.",
    },
    {
      q: "Do you provide AWS cloud migration services in India?",
      a: "Yes, we provide end-to-end AWS migration including workload assessment, architecture design, database transfer, auto-scaling configuration, and 24/7 server support.",
    },
    {
      q: "Can you migrate enterprise software to Microsoft Azure?",
      a: "Yes, we deliver Azure migration services that transition enterprise apps, databases, and Active Directory frameworks securely with minimal downtime.",
    },
    {
      q: "How long does enterprise cloud migration in India take?",
      a: "Standard application migrations take 2 to 4 weeks, whereas complex enterprise platform transfers require 6 to 12 weeks based on data size.",
    },
  ],
  cta: {
    heading: "Scale Your Business With Cloud Migration",
    sub: "Discuss Your Cloud Migration Requirements",
    description: "Ready to optimize your operations with secure, scalable cloud infrastructure? Partner with Eddinet to plan, convert, and launch your cloud transition. Contact our technical team today to schedule your cloud consultation!",
  },
  crossLinks: crossLinksFor("cloud-devops"),
  docxHeadings: {
    about: "About Us: Cloud Migration Services Company in India",
    process: "Our Cloud Migration Process in India",
    faqs: "Frequently Asked Questions About Cloud Migration",
  },
};
