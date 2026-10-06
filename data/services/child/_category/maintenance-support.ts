// ============================================================================
//  FILE: data/services/child/_category/maintenance-support.ts
//  CATEGORY: /services/maintenance-support
//
//  Ye category ke US blocks ka single source hai jo sabhi child pages par
//  bilkul same hain.  Page files ise import karti hain, copy nahi karti —
//  isliye yahan ek change poori category me lagu ho jaata hai aur duplicate
//  text ka scope nahi bachta.
//
//  Sirf >= 2 pages par shared values yahan aati hain; jo block kisi ek page
//  ka unique hai wo usi page file me rehta hai.
// ============================================================================

import type { GeneratedChildService } from "../generated-child-services";

type Block<K extends "features" | "benefits" | "whyChooseUs" | "process" | "faqs"> =
  GeneratedChildService[K];

export const features: Block<"features"> = [
  {
    title: "Scheduled Updates & Patching",
    description: "Security and critical updates applied as released, on a clear schedule and tested before going live — so patrons never break you.",
  },
  {
    title: "24/7 Monitoring & Alerts",
    description: "Uptime and performance monitoring that flags issues before your customers do, with alerts that actually reach an engineer, not a spam folder.",
  },
  {
    title: "Automated, Verified Backups",
    description: "Backups run automatically and restore tests happen regularly — a backup you can't restore isn't a backup.",
  },
  {
    title: "Security & Performance Care",
    description: "Hardening, malware scanning, cache tuning and database optimisation that keep systems fast and safe as traffic grows.",
  },
  {
    title: "Responsive Technical Support",
    description: "A direct channel to real engineers with clear ownership and updates until the issue is resolved — no ticket black holes.",
  },
  {
    title: "Emergency & Critical Fixes",
    description: "Priority response for critical issues like downtime, hacks or broken checkouts — with defined response times in the plan.",
  },
  {
    title: "Renewals & Housekeeping",
    description: "SSL certificate renewals, domain expiries, DNS checks and small admin tasks tracked so nothing quietly lapses.",
  },
  {
    title: "Quarterly Health & Improvement Reports",
    description: "Every quarter you get a plain-English report on system health, what we fixed, what's improving and what we recommend next.",
  },
];

export const benefits: Block<"benefits"> = [
  {
    title: "Fewer Surprises & Outages",
    description: "Proactive monitoring and patching stop small issues becoming expensive ones — you're not finding out about problems from customers.",
  },
  {
    title: "Secure & Up to Date",
    description: "Security updates applied promptly and threats addressed early, protecting your data, customers and reputation.",
  },
  {
    title: "Fast, Accountable Support",
    description: "Direct access to engineers with clear status updates and defined response times — no waiting on anonymous tickets.",
  },
  {
    title: "Protected Data",
    description: "Automated backups verified regularly, so recovery from any failure is fast and possible.",
  },
  {
    title: "Stable Performance",
    description: "Ongoing tuning keeps your platform fast as content, users and traffic grow — performance decay is prevented, not fixed later.",
  },
  {
    title: "One Team Who Knows Your Stack",
    description: "The engineers who maintain your system know its history and quirks — support isn't met from zero context every call.",
  },
];

export const whyChooseUs: Block<"whyChooseUs"> = {
  heading: "Why Businesses Pick Eddinet for Maintenance & Support",
  points: [
    "Proactive Care, Not Firefighting: We run maintenance as proactive care, not reactive firefighting.",
    "Alerts Before Outages: Monitoring and alerts are configured before they are needed, not after the outage.",
    "Verified Backups: Backups are verified regularly — we know they restore when it matters.",
    "Named Engineers, No Black Holes: You get a direct support channel with named engineers, not a ticket black hole.",
    "24/7 Emergency Response: Emergency response plans cover critical issues outside business hours.",
    "Plain-English Reporting: Reports are in plain English — you understand what's being done and why.",
  ],
};

export const process: Block<"process"> = {
  heading: "How Eddinet Works, Step by Step",
  steps: [
    {
      num: "01",
      title: "Health Assessment",
      description: "We review your current setup, risks and what needs immediate attention — a baseline audit before we promise anything.",
    },
    {
      num: "02",
      title: "Plan & Schedule",
      description: "Update cycles, monitoring scope, backup frequency and support levels are agreed upfront in a plan you understand.",
    },
    {
      num: "03",
      title: "Proactive Care Cycle",
      description: "Updates, monitoring, backups and health checks run on a reliable schedule — the maintenance happens whether or not you're watching.",
    },
    {
      num: "04",
      title: "Issue Response & Fixes",
      description: "Problems are diagnosed, fixed and reported with prevention notes — you always know what happened and what changed.",
    },
    {
      num: "05",
      title: "Quarterly Reviews",
      description: "Regular health reports and improvement recommendations keep the plan aligned with your growth, not frozen at launch.",
    },
    {
      num: "06",
      title: "Continuous Improvement",
      description: "Performance tuning, architecture tweaks and new optimisations are added as your traffic and needs evolve.",
    },
  ],
};

export const faqs: Block<"faqs"> = [
  {
    q: "What does an ongoing maintenance plan include?",
    a: "It includes monitoring, updates, security patching, backups, performance improvements and responsive technical support so your digital assets stay stable, secure and fast after launch. The exact scope is agreed in a plan with defined schedules and response times — not a vague retainer.",
  },
  {
    q: "What happens if our website goes down?",
    a: "Our monitoring alerts us immediately, and we respond and fix the issue as part of your plan — recovering your site and reporting what happened and how we prevented recurrence. Critical issues outside business hours follow the emergency response path agreed in your plan.",
  },
  {
    q: "Can you fix issues on a website you didn't build?",
    a: "Yes — most of our maintenance clients come to us after another agency built the site. We start with a health assessment, take ownership of the codebase and infrastructure, and then care for it as if we built it ourselves.",
  },
  {
    q: "How is the support communicated?",
    a: "You'll have a named account contact for day-to-day requests, a dedicated channel for urgent issues, and a written summary after every incident and quarterly review. You're never left wondering what happened or what's next.",
  },
  {
    q: "What does an ongoing maintenance plan include?",
    a: "It includes monitoring, updates, security patching, backups, performance improvements and responsive technical support so your digital assets stay stable, secure and fast after launch.",
  },
  {
    q: "How often do you perform maintenance updates?",
    a: "Security and critical updates are handled as soon as they are released, and regular maintenance runs on a scheduled cycle - usually weekly or monthly depending on your plan.",
  },
  {
    q: "What happens if our website goes down?",
    a: "Our monitoring alerts us immediately, and we respond and fix the issue as part of your plan - recovering your site and reporting what happened and how we prevented recurrence.",
  },
  {
    q: "Can you handle emergency fixes outside business hours?",
    a: "Emergency support plans cover priority fixes outside working hours for critical issues, so a broken checkout or a down site never waits till morning.",
  },
  {
    q: "Do we get a dedicated support contact?",
    a: "Yes. You get a direct channel to our technical team instead of a ticketing black hole, with responses within working hours and clear updates until resolution.",
  },
];
