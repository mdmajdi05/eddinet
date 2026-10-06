// ============================================================================
//  FILE: data/services/child/cloud-devops/cloud-infrastructure.ts
//  PAGE: /services/cloud-devops/cloud-infrastructure
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/cloud-devops";
export const child = {
  slug: "cloud-infrastructure",
  title: "Cloud Infrastructure",
  metaTitle: "Cloud Infrastructure Services in India | Eddinet",
  metaDescription: "Eddinet provides premier cloud infrastructure services in India. We build, deploy, and manage scalable cloud setups to reduce capital costs, prevent system",
  heroHeading: "Cloud Infrastructure Services Company in India",
  heroSubheading: "Enterprise Cloud Infrastructure | Managed Infrastructure | Multi-Cloud Solutions",
  detailedDescription: "Eddinet provides premier cloud infrastructure services in India. We build, deploy, and manage scalable cloud setups to reduce capital costs, prevent system downtime, and accelerate digital growth.\n\nEDDINET builds high-performance digital environments that stabilize enterprise operations and support long-term growth. We design and deploy resilient cloud systems that handle heavy computational loads without speed loss.\n\nBy combining modular infrastructure design with proactive security protocols, we help organizations eliminate server bottlenecks, safeguard critical data, and lower overall operational expenses.",
  features: [
    {
      title: "Enterprise Cloud Infrastructure in India",
      description: "We design high-capacity cloud platforms that support mission-critical enterprise workloads smoothly. Our team builds private and hybrid setups to ensure total data control and compliance.",
    },
    {
      title: "Managed Cloud Infrastructure Services in India",
      description: "We take complete responsibility for your daily cloud updates, patch management, and system monitoring. Our engineers work around the clock to resolve server issues and maximize uptime.",
    },
    {
      title: "Multi-Cloud Infrastructure Solutions India",
      description: "We construct flexible multi-cloud architectures using AWS, Azure, and Google Cloud Platform. This balanced approach lowers hosting expenses and protects your business from vendor lock-in.",
    },
    {
      title: "Cloud Server Provisioning & Configuration",
      description: "We automate virtual machine and database deployments using infrastructure as code frameworks. This automated setup eliminates configuration errors and speeds up launch timelines.",
    },
    {
      title: "Cloud Infrastructure Security & Governance",
      description: "We enforce strict access controls, continuous vulnerability scans, and data encryption standards. Our security protocols protect your corporate assets against cyber threats and data leaks.",
    },
    {
      title: "Infrastructure Performance & Cost Optimization",
      description: "We audit compute and storage usage constantly to remove idle server capacity. By setting up auto-scaling policies, we reduce monthly cloud spending while maintaining peak speed.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose EDDINET for Cloud Infrastructure Services?",
    points: [
      "Certified Cloud Architecture Expertise: Our team brings years of hands-on experience in managing complex multi-cloud enterprise setups.",
      "Business-Focused Infrastructure Strategy: We align every deployment step directly with your operational goals and budget limits.",
      "Scalable & High-Availability Design: We build server environments that scale automatically alongside user traffic without structural rewrites.",
      "Enterprise-Grade Security Controls: We enforce end-to-end encryption protocols and identity access tools to guard your data.",
      "Proactive Cost & Resource Optimization: We review resource usage constantly to eliminate idle computing charges and lower monthly bills.",
      "Smooth Migration & Modernization: We convert outdated local setups into agile, cloud-native digital environments without downtime.",
      "Proactive Real-Time Monitoring: We identify server bottlenecks and hardware constraints before they impact user experience.",
      "Dedicated Post-Launch Support: We provide continuous post-launch maintenance plans to keep your systems running smoothly.",
    ],
  },
  process: {
    heading: "Our Cloud Infrastructure Process",
    steps: [
      {
        num: "01",
        title: "Enterprise IT Assessment & Requirements Scoping",
        description: "We evaluate your current software stack and network usage to map a clear cloud strategy.",
      },
      {
        num: "02",
        title: "Cloud Architecture & Capacity Planning",
        description: "We design a high-availability blueprint specifying server compute, storage tiers, and backup channels.",
      },
      {
        num: "03",
        title: "Environment Provisioning & Network Setup",
        description: "We set up isolated virtual private clouds, firewall boundaries, and secure VPN connections.",
      },
      {
        num: "04",
        title: "Data & Workload Migration Execution",
        description: "Our engineers transfer databases and applications securely using encrypted data pipelines.",
      },
      {
        num: "05",
        title: "Rigorous Load & Security Validation",
        description: "We perform stress testing and vulnerability scans to ensure stability under heavy user traffic.",
      },
      {
        num: "06",
        title: "Continuous Management & Performance Tuning",
        description: "We monitor system health metrics daily, execute server patches, and fine-tune resources.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What do your cloud infrastructure services in India include?",
      a: "We provide architecture design, cloud server provisioning, multi-cloud setups, security management, auto-scaling, and 24/7 technical monitoring.",
    },
    {
      q: "How long does enterprise cloud infrastructure deployment take?",
      a: "Standard server deployments take 1 to 3 weeks, whereas complex multi-cloud migrations require 6 to 12 weeks based on database size.",
    },
    {
      q: "Can EDDINET help lower our existing monthly cloud hosting costs?",
      a: "Yes, we audit resource usage, shut down idle instances, configure auto-scaling, and apply reserved instance pricing to lower costs.",
    },
    {
      q: "Do you support multi-cloud strategies using AWS, Azure, and Google Cloud?",
      a: "Yes, we integrate AWS, Microsoft Azure, and GCP to maximize system uptime and eliminate vendor lock-in.",
    },
    {
      q: "Do you provide ongoing maintenance and security support after setup?",
      a: "Yes, we deliver 24/7 server monitoring, routine operating system patching, automated backups, and emergency troubleshooting.",
    },
  ],
  crossLinks: crossLinksFor("cloud-devops"),
  featuresHeading: "Our Cloud Infrastructure Services in India",
  docxHeadings: {
    about: "About EDDINET - Leading Cloud Infrastructure Company in India",
    process: "Our Cloud Infrastructure Process",
    faqs: "FAQs About Cloud Infrastructure Services",
  },
};
