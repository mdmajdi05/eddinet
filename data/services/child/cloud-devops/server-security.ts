// ============================================================================
//  FILE: data/services/child/cloud-devops/server-security.ts
//  PAGE: /services/cloud-devops/server-security
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/cloud-devops";
export const child = {
  slug: "server-security",
  title: "Server Security",
  metaTitle: "Server Security Services in India | Eddinet",
  metaDescription: "Eddinet delivers server security services in India that protect your data, applications, and uptime. We find weak points, close them, and watch for threats",
  heroHeading: "Server Security Services in India",
  heroSubheading: "Cloud Server Security | Linux Hardening | Managed Threat Protection",
  detailedDescription: "Eddinet delivers server security services in India that protect your data, applications, and uptime. We find weak points, close them, and watch for threats around the clock. As a result, attackers meet a hardened system instead of an easy target.\n\nOne breach can cost you customers, money, and trust. Our security setups block common attacks and alert you the moment something looks wrong. Therefore, you stay in control of your infrastructure.\n\nEddinet is a cloud server security company in India built around certified sysadmins and DevOps engineers. We help businesses replace scattered, reactive fixes with one clear security plan.\n\nWe listen first, then assess your risks before changing anything. Our reports use plain language, so technical and non-technical teams can act on them. At the end of each project, we hand over full documentation.\n\nGood security works quietly in the background. It stops threats without slowing your business. That is the standard we follow on every project.",
  features: [
    {
      title: "Linux Server Security Services in India",
      description: "Our Linux server security services protect Ubuntu, CentOS, Debian, and other distributions. First, we lock down SSH access and user permissions. Next, we configure firewalls and remove unused services. Finally, we set up intrusion detection to catch suspicious activity early.",
    },
    {
      title: "Server Hardening and Security in India",
      description: "Our server hardening and security work follows proven industry benchmarks. We patch vulnerabilities, tighten configurations, and disable risky defaults. In addition, we document every change, so your team knows exactly what was done.",
    },
    {
      title: "Cloud Server Security in India",
      description: "We secure servers on AWS, Azure, and Google Cloud. This includes network rules, access controls, and encryption for data at rest and in transit. Because of this, your cloud environment stays protected as it grows.",
    },
    {
      title: "Managed Server Security in India",
      description: "Our managed server security service gives you an expert team without the cost of hiring one. We monitor threats, apply patches, and respond to incidents. You also get regular reports that show what we found and fixed.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Server Security Services in India",
    points: [
      "Fixes, not just reports: We repair the weaknesses we find. You receive a safer server, not only a list of problems. Every fix is verified, so you know the gap is truly closed.",
      "Zero disruption approach: We test every change first. As a result, your live services keep running during security work. Risky tasks are scheduled for low-traffic hours.",
      "Stack-friendly protection: We work with your existing servers and cloud accounts. You never face a forced migration. We simply strengthen what you already use.",
      "Plain-language reports: Managers get clear risk summaries. Meanwhile, engineers get the technical details they need. Everyone understands what was found and fixed.",
      "Compliance-ready setup: We align your configuration with common security standards, which helps during audits. Clear documentation makes reviews faster and easier.",
      "Indian business hours support: Our team understands local time zones and responds when your day starts. Therefore, urgent security issues get attention when you need it most.",
    ],
  },
  process: {
    heading: "Our Process for Server Security Setup in India",
    steps: [
      {
        num: "01",
        title: "Security audit",
        description: "We scan your servers and configurations to find open ports, weak passwords, and outdated software. This shows exactly where your risks are. It also gives us a clear baseline to measure progress against.",
      },
      {
        num: "02",
        title: "Risk prioritization",
        description: "We rank issues by impact, so the most dangerous gaps get fixed first. As a result, you spend effort where it matters. Minor issues are scheduled for later, so nothing gets ignored.",
      },
      {
        num: "03",
        title: "Hardening and patching",
        description: "Next, we apply fixes, update software, and lock down access. Every change is tested to avoid breaking your live services. We also keep a record of each change for future audits.",
      },
      {
        num: "04",
        title: "Monitoring and alerts",
        description: "Then we set up log tracking and alerts for suspicious logins and unusual traffic. The right people are notified immediately. Alert rules are tuned to reduce false alarms.",
      },
      {
        num: "05",
        title: "Attack simulation",
        description: "Before handover, we test your defenses with controlled checks to confirm the fixes hold. Any gaps found are closed right away. This proves your protection works before a real threat tests it.",
      },
      {
        num: "06",
        title: "Handover and review",
        description: "Finally, we train your team and schedule regular security reviews to keep protection current. You also receive full documentation of the setup. As threats change, we update your defenses to match.",
      },
    ],
    description: "Every Eddinet project follows a clear path, from the first audit to ongoing protection.",
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are server security services in India?",
      a: "These services protect your servers from hacking, malware, and data theft. They include hardening, patching, monitoring, and incident response.",
    },
    {
      q: "Why do I need a cloud server security company in India?",
      a: "Cloud servers face constant automated attacks. An expert partner closes gaps quickly and watches for threats you might miss.",
    },
    {
      q: "Do you offer Linux server security services in India?",
      a: "Yes. We secure major Linux distributions, including SSH protection, firewall setup, and access control.",
    },
    {
      q: "What is server hardening and security?",
      a: "Hardening means reducing a server's attack surface. We remove unneeded services, tighten settings, and apply patches.",
    },
    {
      q: "What does managed server security in India include?",
      a: "It includes continuous monitoring, regular patching, alerting, incident response, and scheduled reports.",
    },
    {
      q: "Will security work affect my live website?",
      a: "No. We test every change first and schedule risky tasks for low-traffic hours.",
    },
    {
      q: "Do you offer support after the setup?",
      a: "Yes. We provide regular reviews, patch management, and ongoing support plans.",
    },
  ],
  crossLinks: crossLinksFor("cloud-devops"),
  featuresHeading: "Our Server Security Services in India",
  featuresDescription: "We focus on four core service areas. Each one is built around your servers, budget, and risk level.",
  docxHeadings: {
    about: "About Us: Cloud Server Security Company in India",
    process: "Our Process for Server Security Setup in India",
    faqs: "FAQs About Server Security Services in India",
  },
};
