// ============================================================================
//  FILE: data/services/child/cloud-devops/kubernetes.ts
//  PAGE: /services/cloud-devops/kubernetes-services-company-in-india
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
  slug: "kubernetes-services-company-in-india",
  title: "Kubernetes",
  metaTitle: "Kubernetes Services in India | Eddinet",
  metaDescription: "Struggling with multi-container orchestration, microservice bottlenecks, or cloud infrastructure complexity? Eddinet provides premier Kubernetes services in",
  // badge ABOVE the <h1> — doc line "Hero eyebrow badge:-"
  heroEyebrow: "Kubernetes Consulting Services | EKS, AKS & GKE Management | Enterprise Solutions",
  // the <h1> itself — doc line "Main hero H1 headline:-"
  heroHeading: "Kubernetes Services Company in India",
  // paragraph BELOW the <h1> — the doc's hero paragraph
  heroSubheading: "Struggling with multi-container orchestration, microservice bottlenecks, or cloud infrastructure complexity? Eddinet provides premier Kubernetes services in India. We build, deploy, and manage production-grade cluster architectures to streamline container management, ensure auto-scaling resilience, and lower cloud compute costs.",
  detailedDescription: "At Eddinet, we deliver enterprise Kubernetes solutions India to turn complex container deployments into high-availability infrastructure. We manage your entire cluster lifecycle across hybrid and multi-cloud environments eliminating manual scaling delays, optimizing configurations, and preventing security outages.\n\nOur certified sysadmins provide complete cluster management:\n\nManaged Cloud Clusters: End-to-end support for Amazon EKS, Azure AKS, and Google Cloud GKE control planes and node pools.\n\nZero-Downtime Releases: Continuous cluster provisioning, ingress routing, and automated upgrades without live service disruption.\n\nHardened Security: Strict RBAC policies, Pod Security Standards, network isolation, and persistent volume protection for 24/7 safety.",
  features: [
    {
      title: "Kubernetes Consulting Services in India",
      description: "We analyze your application architecture and legacy server workloads to build a clear, cost-optimized migration strategy for production-grade Kubernetes adoption.",
    },
    {
      title: "EKS AKS GKE Management Company in India",
      description: "We deliver end-to-end management for cloud Kubernetes engines, including Amazon EKS, Microsoft AKS, and Google Cloud GKE—optimizing control planes and node pools for peak efficiency.",
    },
    {
      title: "Enterprise Kubernetes Solutions India",
      description: "We design secure, multi-tenant cluster architectures tailored to enterprise workloads, complete with automated load balancing, cluster auto-scaling, and failover disaster recovery.",
    },
    {
      title: "Microservices Migration & Container Ingress Setup",
      description: "We break down monolithic stacks into microservices, setting up NGINX or Traefik ingress controllers, TLS certificates, and service mesh routing for secure internal traffic.",
    },
    {
      title: "Cluster Security Hardening & Compliance",
      description: "We enforce Role-Based Access Control (RBAC), Pod Security Standards, container image vulnerability scanning, and secret encryption to guard against unauthorized access.",
    },
    {
      title: "Cluster Monitoring & Persistent Storage Management",
      description: "We deploy Prometheus and Grafana for real-time cluster health metrics, paired with persistent volume drivers (CSI) to ensure 100% database data safety during container restarts.",
    },
  ],
  featuresHeading: "Our Kubernetes Services in India",
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Kubernetes Services?",
    points: [
      "Certified Cloud & Kubernetes Engineers: Our sysadmin team brings deep expertise in Kubernetes cluster architecture, Linux server management, and cloud-native DevOps practices.",
      "Zero-Downtime Rolling Upgrades: We update cluster control planes and worker node pools sequentially using blue-green and canary strategies, ensuring zero operational interruption.",
      "Drastic Cloud Cost Optimization: We configure cluster autoscalers and spot instance node pools so you only pay for the exact CPU and RAM your container workloads actually consume.",
      "Multi-Cloud Flexibility: Deploy seamlessly across AWS EKS, Azure AKS, Google GKE, DigitalOcean Kubernetes, or private on-premise bare-metal clusters.",
      "Proactive Health & Incident Management: We track pod restarts, memory limits, and node capacity around the clock to resolve resource bottlenecks before they impact end-user traffic.",
    ],
  },
  process: {
    heading: "Our Kubernetes Implementation Process in India",
    steps: [
      {
        num: "01",
        title: "Architecture Discovery & Capacity Planning",
        description: "We evaluate your microservices dependencies, compute demands, and database requirements to size node pools and cluster topology accurately.",
      },
      {
        num: "02",
        title: "Cluster Provisioning & Infrastructure as Code",
        description: "We write declarative Infrastructure as Code (Terraform/Helm) to deploy isolated production, staging, and development Kubernetes clusters smoothly.",
      },
      {
        num: "03",
        title: "Ingress, Networking & Security Enforcement",
        description: "We configure secure network overlays, ingress gateways, RBAC controls, and automated SSL/TLS encryption for all microservice endpoints.",
      },
      {
        num: "04",
        title: "Continuous Deployment & CI/CD Integration",
        description: "We connect your cluster to automated deployment pipelines using GitOps tools (ArgoCD/Flux) for zero-downtime rolling updates and instant rollbacks.",
      },
      {
        num: "05",
        title: "Traffic Cutover & Stress Testing",
        description: "We perform load testing to verify horizontal pod autoscaling under high concurrency before executing a seamless, zero-downtime DNS switchover.",
      },
      {
        num: "06",
        title: "24/7 Cluster Health Tracking & Optimization",
        description: "We maintain continuous monitoring of pod resource utilization, executing routine cluster version upgrades and node pool optimizations under guaranteed SLAs.",
      },
    ],
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "What is included in your Kubernetes services in India?",
      a: "We handle cluster design, managed EKS/AKS/GKE deployment, Helm chart creation, GitOps CI/CD integration, security hardening, and 24/7 cluster monitoring.",
    },
    {
      q: "How do Kubernetes consulting services in India benefit my business?",
      a: "Our consulting services prevent costly architectural mistakes, optimize your cloud resource consumption, speed up software release cycles, and ensure high availability for your web apps.",
    },
    {
      q: "Which cloud providers do you support as an EKS AKS GKE management company in India?",
      a: "We manage cloud clusters on Amazon EKS, Microsoft Azure AKS, Google Cloud GKE, DigitalOcean, and private bare-metal Kubernetes setups.",
    },
    {
      q: "How do enterprise Kubernetes solutions India ensure application high availability?",
      a: "Kubernetes monitors container health automatically, restarting crashed pods, replacing unhealthy nodes, and scaling pods horizontally during sudden traffic spikes.",
    },
    {
      q: "How do you secure data and stateful applications in Kubernetes?",
      a: "We use persistent storage volumes bound outside the container lifecycle, combined with encrypted secrets, network policies, and automated off-site backups.",
    },
  ],
  cta: {
    heading: "Scale Your Microservices With Enterprise Kubernetes",
    sub: "Discuss Your Kubernetes Requirements",
    description: "Ready to eliminate container complexity, scale microservices effortlessly, and cut cloud expenses? Partner with Eddinet to build and maintain a secure, lightning-fast Kubernetes infrastructure. Contact our engineering team today to schedule your technical consultation!",
  },
  crossLinks: crossLinksFor("cloud-devops"),
  docxHeadings: {
    about: "About Us: Kubernetes Services Company in India",
    process: "Our Kubernetes Implementation Process in India",
    faqs: "Frequently Asked Questions",
  },
};
