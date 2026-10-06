// ============================================================================
//  FILE: data/services/child/cloud-devops/monitoring-and-logging.ts
//  PAGE: /services/cloud-devops/monitoring-and-logging
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/cloud-devops";
export const child = {
  slug: "monitoring-and-logging",
  title: "Monitoring & Logging",
  metaTitle: "Monitoring & Logging Services in India | Eddinet",
  metaDescription: "Eddinet delivers monitoring and logging services in India that give you full visibility into your infrastructure.",
  heroHeading: "Monitoring and Logging Services in India",
  heroSubheading: "Server Monitoring | Application Logging | DevOps Monitoring Solutions",
  detailedDescription: "Eddinet delivers monitoring and logging services in India that give you full visibility into your infrastructure. We track your servers, applications, and cloud resources around the clock. As a result, your team spots issues early and fixes them before customers notice.\n\nHidden errors and downtime quietly drain revenue. Our setups bring metrics, logs, and alerts into one place. Therefore, you always know what is happening across your systems.\n\nEddinet is a team of certified cloud and DevOps engineers. We help Indian businesses replace guesswork with clear, reliable data. Scattered logs and unmonitored servers become one organized view of system health.\n\nWe listen first, then design with care. Our reports use plain language, so technical and non-technical teams can act on them. At the end of each project, we hand over complete documentation.\n\nGood monitoring works quietly in the background. It speaks up only when action is needed. That is the standard we follow on every project.",
  features: [
    {
      title: "Cloud Monitoring and Logging in India",
      description: "Our cloud monitoring and logging service covers AWS, Azure, and Google Cloud. First, we collect key metrics such as CPU, memory, and network use. Next, we centralize your logs for fast search and analysis. Finally, we build dashboards and alerts that show your cloud health at a glance.",
    },
    {
      title: "Server Monitoring Services in India",
      description: "Our server monitoring services track uptime, disk space, load, and resource use on every server. Smart alerts warn you before a small issue turns into an outage. In addition, trend reports help you plan capacity and avoid surprise costs.",
    },
    {
      title: "Application Monitoring and Logging in India",
      description: "Our application monitoring and logging service shows how your software performs for real users. We track response times, error rates, and slow database queries. Detailed logs then help your developers find the root cause quickly.",
    },
    {
      title: "DevOps Monitoring Solutions in India",
      description: "Our DevOps monitoring solutions connect with your CI/CD pipelines, containers, and deployment tools. Because of this, your team sees the impact of every release right away. Faster feedback leads to safer and more frequent updates.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Monitoring and Logging Services in India",
    points: [
      "Alerts that matter: We tune every rule to cut alert fatigue. Your team responds only to real problems, not endless false alarms.",
      "One view of everything: Servers, applications, and cloud logs sit in a single dashboard. As a result, your engineers find root causes much faster.",
      "Stack-friendly setup: We work with your existing tools and cloud accounts. You never face a forced migration or a costly platform change.",
      "Plain-language reports: Managers get clear summaries of uptime and incidents. Meanwhile, engineers get the deep technical detail they need.",
      "Cost-aware logging: We set retention and filtering rules that keep storage bills under control. You get full visibility without an overgrown cloud bill.",
      "Indian business hours support: Our team understands local time zones and responds when your day starts. Therefore, urgent issues get attention when you need it most.",
    ],
  },
  process: {
    heading: "Our Process for Monitoring and Logging Setup in India",
    steps: [
      {
        num: "01",
        title: "Infrastructure audit",
        description: "We map your servers, applications, and cloud accounts to find blind spots and unmonitored risks. This shows us exactly what needs tracking.",
      },
      {
        num: "02",
        title: "Metrics and log planning",
        description: "We decide which signals matter most, such as error rates, response times, and resource usage. As a result, you avoid noisy, useless data.",
      },
      {
        num: "03",
        title: "Agent and pipeline setup",
        description: "Next, we deploy monitoring agents and connect every log source to one central platform. Because of this, your data stays organized and searchable.",
      },
      {
        num: "04",
        title: "Dashboards and alert rules",
        description: "Then we build role-based dashboards and set alert thresholds that match your business hours. Alerts reach the right person by email, SMS, or chat tools.",
      },
      {
        num: "05",
        title: "Incident drill",
        description: "Before launch, we trigger safe test failures to confirm alerts fire on time. This catches gaps long before a real outage does.",
      },
      {
        num: "06",
        title: "Handover and review",
        description: "Finally, we train your team and share full documentation. We also schedule monthly health reviews to keep your coverage sharp.",
      },
    ],
    description: "Every Eddinet project follows a clear path, from the first audit to the final handover.",
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What are monitoring and logging services in India?",
      a: "These services track the health and performance of your servers, applications, and cloud resources. They also collect logs, so you can find and fix problems quickly.",
    },
    {
      q: "Why do I need cloud monitoring and logging in India?",
      a: "Cloud monitoring and logging shows you issues before they affect users. It also helps you control costs and meet security and compliance needs.",
    },
    {
      q: "What is the difference between monitoring and logging?",
      a: "Monitoring tracks live metrics and sends alerts. Logging records detailed events, so you can investigate what went wrong afterward.",
    },
    {
      q: "Do you offer server monitoring services in India for small businesses?",
      a: "Yes. We offer flexible plans for startups, growing companies, and large enterprises.",
    },
    {
      q: "Can you add application monitoring and logging to my existing app?",
      a: "Yes. We add monitoring to your current app without disrupting live users.",
    },
    {
      q: "Which tools do you use for DevOps monitoring solutions in India?",
      a: "We choose tools that fit your stack and budget. This includes open-source and cloud-native options.",
    },
    {
      q: "Do you offer support after the setup?",
      a: "Yes. We provide regular reviews, alert tuning, and ongoing support plans.",
    },
  ],
  crossLinks: crossLinksFor("cloud-devops"),
  featuresHeading: "Our Monitoring and Logging Services in India",
  featuresDescription: "We focus on four core service areas. Each one is built around your infrastructure, budget, and growth plans.",
  docxHeadings: {
    about: "About Us: Cloud Monitoring and Logging Experts in India",
    process: "Our Process for Monitoring and Logging Setup in India",
    faqs: "FAQs About Monitoring and Logging Services in India",
  },
};
