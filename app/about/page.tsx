import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GrowthSystem from "@/components/about/GrowthSystem";
import Reveal from "@/components/about/Reveal";
import { site, processSteps } from "@/data/site";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "About Eddinet | Digital Marketing, Software, AI & Cloud Agency in Delhi NCR",
  description:
    "Eddinet is a digital marketing & software agency in Delhi NCR - one connected growth system spanning SEO, AI SEO, paid media, creative, web, software, AI automation and Cloud & DevOps. Learn how we work.",
  alternates: { canonical: "https://eddinet.com/about" },
  openGraph: {
    title: "About Eddinet | Digital Marketing, Software, AI & Cloud Agency in Delhi NCR",
    description:
      "Eddinet is a digital marketing & software agency in Delhi NCR - one connected growth system spanning SEO, AI SEO, paid media, creative, web, software, AI automation and Cloud & DevOps.",
    url: "https://eddinet.com/about",
    siteName: "Eddinet",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Eddinet | Digital Marketing, Software, AI & Cloud Agency in Delhi NCR",
    description:
      "Eddinet is a digital marketing & software agency in Delhi NCR - one connected growth system spanning SEO, AI SEO, paid media, creative, web, software, AI automation and Cloud & DevOps.",
  },
};

const companyStats = [
  { value: "13", label: "Core Capability Areas" },
  { value: "18", label: "Industries Served" },
  { value: "6", label: "Outcome-Led Process Steps" },
  { value: "1", label: "Connected Growth System" },
];

const capabilities = [
  {
    icon: "📣",
    title: "Marketing & Visibility",
    desc: "SEO, AI SEO, social media, paid acquisition and content built for both organic and paid demand — so your business stays visible wherever buyers search, including AI-generated answers.",
    links: [
      { label: "SEO & AI SEO", href: "/services/seo" },
      { label: "Social Media", href: "/services/social-media-marketing" },
      { label: "Ads / PPC", href: "/services/ads-ppc" },
      { label: "Content", href: "/services/content" },
      { label: "Reputation", href: "/services/reputation-management" },
    ],
  },
  {
    icon: "🎨",
    title: "Creative & Conversion",
    desc: "Brand identity, campaign creative, UI/visual systems, web and eCommerce — designed to look premium and engineered to convert.",
    links: [
      { label: "Design & Creative", href: "/services/design-creative" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "eCommerce", href: "/services/ecommerce" },
    ],
  },
  {
    icon: "💻",
    title: "Web & Software Engineering",
    desc: "Fast, structured, SEO-ready websites, web applications, SaaS platforms and mobile apps built on maintainable technical foundations.",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "Software & AI", href: "/services/software-ai" },
    ],
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    desc: "AI chatbots, AI agents, generative AI solutions, LLM integration and workflow automation that remove repetitive work and operate real business processes.",
    links: [
      { label: "Software & AI", href: "/services/software-ai" },
    ],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "Cloud infrastructure, deployment pipelines, hosting, security and ongoing operations that keep platforms fast, stable and secure as they scale.",
    links: [
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "Hosting & Migration", href: "/services/hosting-migration" },
      { label: "Maintenance & Support", href: "/services/maintenance-support" },
    ],
  },
];

const techStack = {
  web: {
    icon: "🌐",
    title: "Web & eCommerce",
    items: ["React", "Next.js", "WordPress", "Shopify", "WooCommerce", "Tailwind CSS"],
  },
  apps: {
    icon: "📲",
    title: "Apps & Software",
    items: ["Flutter", "React Native", "Custom APIs", "SaaS Platforms", "CRM & ERP", "Cloud Applications"],
  },
  ai: {
    icon: "🧠",
    title: "AI & Automation",
    items: ["AI Chatbots", "AI Agents", "LLM Integration", "RAG Applications", "Generative AI", "Business Automation"],
  },
  cloud: {
    icon: "☁️",
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Linux Servers", "Monitoring & Security"],
  },
};

const reasons = [
  {
    icon: "🧩",
    title: "One Team, One System",
    desc: "Marketing, creative, engineering and infrastructure sit under one roof — planned as connected parts instead of vendor hand-offs.",
  },
  {
    icon: "🎯",
    title: "Outcome-Led, Not Vanity-Led",
    desc: "Every engagement starts from the business constraint being solved: leads, sales, retention or operational efficiency.",
  },
  {
    icon: "📊",
    title: "Data-Backed & Transparent",
    desc: "Decisions follow performance, search and user data. Reporting is honest, verifiable and explained in business terms.",
  },
  {
    icon: "🔧",
    title: "Brand-Level Execution",
    desc: "High-end design, clean code and production-grade infrastructure — the same quality bar across every deliverable.",
  },
  {
    icon: "🛠️",
    title: "Built to Keep Running",
    desc: "Sites, stores, apps and platforms ship with hosting, monitoring, security and support so growth never outgrows the system.",
  },
  {
    icon: "📈",
    title: "Compounding Over Time",
    desc: "The objective is durable visibility, reliable technology and measurable business value that builds quarter over quarter.",
  },
];

const team = [
  {
    role: "SEO & AI Search Strategists",
    desc: "Build visibility across classic Google results and AI-generated search answers.",
  },
  {
    role: "Performance Marketers",
    desc: "Plan paid acquisition around real conversion and budget efficiency.",
  },
  {
    role: "Full-Stack Developers",
    desc: "Engineer sites, apps and software that are fast, structured and maintainable.",
  },
  {
    role: "AI & Automation Engineers",
    desc: "Ship chatbots, agents, LLM integrations and workflow automation that operate.",
  },
  {
    role: "Cloud & DevOps Engineers",
    desc: "Run infrastructure that stays stable, secure and fast at scale.",
  },
  {
    role: "Creative Designers",
    desc: "Craft brand identity and creative that performs across web, social and ads.",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Outcome-Led",
    desc: "Work is planned and measured around the business outcome it must produce.",
  },
  {
    icon: "🔗",
    title: "One System",
    desc: "Marketing, creative, web, software, AI and cloud are built as a single system.",
  },
  {
    icon: "📊",
    title: "Transparent",
    desc: "Every decision and report is explained in business terms you can act on.",
  },
  {
    icon: "🛡️",
    title: "Honest Reporting",
    desc: "Only verifiable outcomes are published. Trust is built on evidence, not promises.",
  },
];

const experiences = [
  {
    icon: "🔍",
    title: "Organic & AI Search",
    items: ["Technical SEO", "AI SEO / Generative SEO", "Local SEO", "Content Authority", "Link Building"],
  },
  {
    icon: "💸",
    title: "Performance Media",
    items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "YouTube Ads", "Lead Generation Campaigns"],
  },
  {
    icon: "🛒",
    title: "Commerce & Conversion",
    items: ["eCommerce Builds", "Conversion Optimisation", "Landing Pages", "Funnel Copywriting", "A/B Testing"],
  },
  {
    icon: "⚙️",
    title: "Engineering & AI",
    items: ["Custom Software", "SaaS & CRM", "Mobile Apps", "AI Agents & Chatbots", "API Integration"],
  },
  {
    icon: "☁️",
    title: "Cloud & Ops",
    items: ["AWS Infrastructure", "CI/CD & Kubernetes", "Server Management", "Migrations", "24×7 Monitoring"],
  },
];

const faqs = [
  {
    q: "What makes Eddinet different from a typical digital marketing agency?",
    a: "Eddinet is a digital marketing & software agency in Delhi NCR. Instead of selling isolated services, we plan marketing, creative, web, software, AI and cloud as one connected growth system — so every activity supports the same business objective rather than operating in silos.",
  },
  {
    q: "Which services does Eddinet provide?",
    a: "Eddinet covers SEO & AI SEO, social media marketing, Ads/PPC, content, design & creative, web development, eCommerce solutions, mobile app development, custom software & AI solutions, Cloud & DevOps, hosting, migration, maintenance & support and online reputation management — 13 capability areas in total.",
  },
  {
    q: "Does Eddinet work with clients outside Delhi NCR or India?",
    a: "While headquartered in Okhla Phase I, New Delhi, we work with businesses across India and internationally. Our delivery is structured around clear communication, transparent reporting and outcome-led processes, so geography does not change how your growth system is run.",
  },
  {
    q: "How does Eddinet combine marketing and technology?",
    a: "We treat visibility, conversion and technology as one pipeline: SEO, AI SEO and paid media acquire demand; web, eCommerce and creative convert it; software and AI automate operations; and Cloud & DevOps, hosting and support keep the whole system fast, secure and scalable.",
  },
  {
    q: "Where is Eddinet located and how can we contact you?",
    a: "We are based in Okhla Industrial Estate, Phase I, New Delhi - 110020. You can reach us at " + site.email + " or " + site.phones[0] + ". We usually respond within two business hours to new enquiries.",
  },
  {
    q: "How do we get started with Eddinet?",
    a: "It starts with a free consultation where we understand your business model, audience, buying journey and current growth constraints. From there we recommend only the services that solve the constraint and run an outcome-led process with transparent reporting.",
  },
];

function SectionHeader({
  kicker,
  title,
  sub,
  center = true,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center mb-12" : "mb-10"}>
      <div
        className={`inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300`}
      >
        {kicker}
      </div>
      <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
        {title}
      </h2>
      {sub && (
        <p className={`text-[var(--text-muted)] text-[1.05rem] leading-relaxed ${center ? "max-w-[680px] mx-auto" : "max-w-[680px]"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

const marqueeItems = [
  "SEO",
  "AI SEO",
  "Paid Media",
  "Social Media",
  "Content",
  "Web Development",
  "eCommerce",
  "Mobile Apps",
  "Custom Software",
  "AI Automation",
  "Cloud & DevOps",
  "Hosting & Support",
];

function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y border-[var(--border-color)] bg-[var(--strip-bg)] py-5 select-none w-full">
      <div className="eddinet-marquee-track flex items-center gap-10 w-max will-change-transform">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <span className="text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] whitespace-nowrap">
              {item}
            </span>
            <span className="text-[var(--main-accent)] text-[0.7rem]">✦</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes eddinet-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .eddinet-marquee-track {
          animation: eddinet-marquee 32s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .eddinet-marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Eddinet",
  url: site.url,
  logo: "https://eddinet.com/eddinet-logo.png",
  description: site.tagline,
  email: site.email,
  telephone: "+91-70428-40441",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Okhla Industrial Estate, Phase I",
    addressLocality: "New Delhi",
    postalCode: "110020",
    addressCountry: "IN",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function AboutPage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative pt-[140px] pb-[80px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-25%] left-[-10%] w-[520px] h-[520px] rounded-full bg-[var(--main-accent)]/8 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-12%] w-[520px] h-[520px] rounded-full bg-[var(--purple-accent)]/8 blur-3xl" />
        </div>
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
          <div className="grid grid-cols-[1.05fr_0.95fr] gap-[50px] items-center max-[1024px]:grid-cols-1">
            <div>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-5">
                About Eddinet
              </div>
              <h1 className="text-[3rem] font-extrabold leading-[1.13] mb-5 text-[var(--text-main)] max-[768px]:text-[2.15rem]">
                Digital Marketing, Software &amp; AI — Built Like{" "}
                <span className="gradient-text">One Growth System</span>
              </h1>
              <p className="text-[var(--text-muted)] text-[1.12rem] leading-relaxed mb-8 max-w-[640px]">
                Eddinet is a{" "}
                <strong className="font-bold text-[var(--main-accent)]">
                  digital marketing &amp; software agency in Delhi NCR
                </strong>{" "}
                bringing SEO, AI SEO, paid media, creative, web, software, AI automation and Cloud &amp;
                DevOps together under one roof — planned around outcomes, not a menu of services.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                  style={{ background: "var(--primary-gradient)" }}
                >
                  Work With Us
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]"
                >
                  See Case Studies
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative w-full max-w-[520px] mx-auto">
              <div className="relative">
                <div className="absolute inset-0 translate-x-[-14px] translate-y-[-12px] rounded-[32px] bg-[var(--main-accent)]/12 rotate-[-3deg]" />
                <div className="absolute inset-0 translate-x-[12px] translate-y-[12px] rounded-[32px] bg-[var(--bg-card)] border border-[var(--border-color)] rotate-[3deg] shadow-[var(--shadow-lg)]" />
                <div className="relative overflow-hidden rounded-[30px] border-[5px] border-[var(--bg-card)] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/about-section.webp"
                    alt="Eddinet team collaborating in the office in Delhi NCR"
                    width={1000}
                    height={667}
                    className="w-full h-[430px] object-cover max-[640px]:h-[360px]"
                    unoptimized
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                    <div>
                      <div className="text-[0.65rem] uppercase tracking-[0.25em] text-white/70">Eddinet</div>
                      <div className="text-white text-[1.15rem] font-extrabold mt-1">
                        Connect. Build. Grow.
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white">
                      ↗
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute z-30 top-[30px] -left-3 bg-[var(--bg-card)]/95 backdrop-blur-xl border border-[var(--border-color)] rounded-2xl px-4 py-3 shadow-[var(--shadow-lg)] animate-float-slow max-[640px]:top-[12px]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[var(--tag-bg)] flex items-center justify-center text-[var(--main-accent)] text-base font-bold">
                    ✦
                  </div>
                  <div>
                    <div className="text-[1.15rem] font-extrabold text-[var(--text-main)] leading-none">360°</div>
                    <div className="text-[0.68rem] text-[var(--text-muted)] mt-1">Integrated Growth</div>
                  </div>
                </div>
              </div>

              <div className="absolute z-30 -right-3 bottom-[70px] w-[175px] bg-[var(--bg-card)]/95 backdrop-blur-xl border border-[var(--border-color)] rounded-[20px] p-4 shadow-[var(--shadow-lg)] animate-float-medium max-[480px]:w-[160px]">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[var(--tag-bg)] flex items-center justify-center text-[var(--main-accent)] text-base font-bold">↗</div>
                  <span className="text-[0.58rem] font-bold tracking-[0.15em] text-[var(--main-accent)]">GROWTH</span>
                </div>
                <div className="text-[0.9rem] font-extrabold text-[var(--text-main)] leading-tight">
                  One Connected System
                </div>
                <div className="relative mt-3 h-[3px] w-full bg-[var(--border-color)] rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-[72%] bg-[var(--main-accent)] rounded-full" />
                </div>
                <div className="mt-2 text-[0.62rem] text-[var(--text-muted)]">Marketing + Technology</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ===================== STATS ===================== */}
      <section className="pt-[90px] pb-[70px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="grid grid-cols-4 gap-6 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
            {companyStats.map((s, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="text-center bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-md)] py-8 px-5 transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1">
                  <div className="text-[2.2rem] font-extrabold gradient-text mb-1">{s.value}</div>
                  <div className="text-[0.85rem] text-[var(--text-muted)] font-semibold">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INTRODUCTION ===================== */}
      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-[50px] items-start max-[1024px]:grid-cols-1">
            <Reveal>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
                The Company
              </div>
              <h2 className="text-[2.4rem] font-extrabold leading-[1.2] mb-5 text-[var(--text-main)] max-[768px]:text-[1.9rem]">
                An Agency and a Technology Company — <span className="gradient-text">Under One Roof</span>
              </h2>
              <p className="text-[var(--text-muted)] text-[1.05rem] leading-[1.85] mb-4">
                Most businesses hire a marketer for visibility, a designer for the brand, an agency for ads, a
                developer for the website and a separate vendor for hosting. When those pieces don&apos;t share
                the same objective, growth fragments: campaigns talk over a website that wasn&apos;t built to
                convert, and a great product loses visibility to a checklist SEO plan.
              </p>
              <p className="text-[var(--text-muted)] text-[1.05rem] leading-[1.85]">
                Eddinet exists to remove that fragmentation. We position ourselves as a growth partner where{" "}
                <strong className="text-[var(--text-main)]">marketing, creative, engineering, AI and cloud</strong>{" "}
                are designed, built and operated as connected parts of one system — each part supporting the
                same business outcome.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-4">
                <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-7 relative overflow-hidden">
                  <div className="absolute -top-4 -right-2 text-[3.5rem] opacity-[0.05] select-none">🎯</div>
                  <div className="text-[0.75rem] uppercase tracking-wider text-[var(--main-accent)] font-bold mb-2">
                    Our Mission
                  </div>
                  <p className="text-[var(--text-main)] text-[0.98rem] leading-relaxed font-medium">
                    Turn digital activity into measurable business growth by connecting marketing,
                    technology, automation and operations around one objective.
                  </p>
                </div>
                <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-7 relative overflow-hidden">
                  <div className="absolute -top-4 -right-2 text-[3.5rem] opacity-[0.05] select-none">🔭</div>
                  <div className="text-[0.75rem] uppercase tracking-wider text-[var(--main-accent)] font-bold mb-2">
                    Our Vision
                  </div>
                  <p className="text-[var(--text-main)] text-[0.98rem] leading-relaxed font-medium">
                    Be the partner every growing business trusts to build, run and scale its entire digital
                    growth system — end to end.
                  </p>
                </div>
                <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-7 relative overflow-hidden">
                  <div className="absolute -top-4 -right-2 text-[3.5rem] opacity-[0.05] select-none">📍</div>
                  <div className="text-[0.75rem] uppercase tracking-wider text-[var(--main-accent)] font-bold mb-2">
                    Where We Work
                  </div>
                  <p className="text-[var(--text-muted)] text-[0.9rem] leading-relaxed">
                    Headquartered in Okhla Phase I, New Delhi. Serving clients across Delhi NCR, India and
                    internationally.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== GROWTH SYSTEM ===================== */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            kicker="How It Fits Together"
            title={
              <>
                The Eddinet <span className="gradient-text">Growth System</span>
              </>
            }
            sub="Demand, conversion, automation and infrastructure planned as a single pipeline — so each stage feeds the next instead of competing with it."
          />
          <GrowthSystem />
        </div>
      </section>

      {/* ===================== CAPABILITIES ===================== */}
      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            kicker="Capabilities"
            title={
              <>
                Five Layers, <span className="gradient-text">One Growth System</span>
              </>
            }
            sub="Every service Eddinet offers maps to one of five connected layers — from awareness all the way to production-grade infrastructure."
          />
          <div className="grid grid-cols-2 gap-6 max-[1024px]:grid-cols-1">
            {capabilities.map((c, i) => (
              <Reveal key={i} delay={(i % 2) * 100} className={i === 4 ? "lg:col-span-2" : ""}>
                <div
                  className={`h-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-7 transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--tag-bg)] border border-[var(--tag-border)] flex items-center justify-center text-[1.3rem] mb-5">
                    {c.icon}
                  </div>
                  <h3 className="text-[1.15rem] font-bold text-[var(--text-main)] mb-2.5">{c.title}</h3>
                  <p className="text-[var(--text-muted)] text-[0.92rem] leading-relaxed mb-5">{c.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.links.map((l, j) => (
                      <Link
                        key={j}
                        href={l.href}
                        className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full border border-[var(--border-color)] text-[0.75rem] font-semibold text-[var(--main-accent)] transition-all duration-300 hover:border-[var(--border-hover)] no-underline"
                      >
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ENGINEERING + MARKETING ADVANTAGE ===================== */}
      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            kicker="The Edge"
            title={
              <>
                Engineering Inside <span className="gradient-text">a Marketing Agency</span>
              </>
            }
            sub="Most agencies stop at the campaign. Eddinet also builds and runs the software and infrastructure behind it — which changes what a marketing plan can promise."
          />
          <div className="grid grid-cols-2 gap-6 max-[1024px]:grid-cols-1">
            {[
              {
                title: "The Traditional Way — Fragmented",
                tone: "danger",
                points: [
                  "Marketer runs ads to a site the developer never fixed for speed or CRO",
                  "SEO and content optimise pages, developer and marketing never talk",
                  "Software team builds a tool the marketing team can't measure or distribute",
                  "Hosting, security and support are afterthoughts once the project ends",
                ],
              },
              {
                title: "The Eddinet Way — One System",
                tone: "success",
                points: [
                  "Websites and stores are engineered for SEO, speed and conversion from day one",
                  "Creative and content map to one objective across organic, paid and social",
                  "Software and AI automation are built around the funnel that must grow",
                  "Cloud, DevOps, hosting and support keep everything running after launch",
                ],
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 120}>
                <div
                  className={`h-full p-8 rounded-[var(--radius-lg)] border transition-all duration-300 hover:-translate-y-1 ${
                    card.tone === "danger"
                      ? "bg-[var(--bg-card)] border-[var(--border-color)]"
                      : "border-[rgba(var(--accent-rgb),0.35)]"
                  }`}
                  style={card.tone === "success" ? { background: "var(--cta-bg)" } : undefined}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center text-[1.2rem] ${
                        card.tone === "danger" ? "bg-[var(--btn2-bg)]" : "bg-[var(--tag-bg)]"
                      }`}
                    >
                      {card.tone === "danger" ? "✕" : "✓"}
                    </div>
                    <h3 className="text-[1.2rem] font-extrabold text-[var(--text-main)]">{card.title}</h3>
                  </div>
                  <ul className="space-y-3.5">
                    {card.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-3 text-[0.95rem] text-[var(--text-muted)] leading-relaxed">
                        <span className={`font-bold shrink-0 mt-0.5 ${card.tone === "danger" ? "text-[var(--text-dim)]" : "text-[var(--main-accent)]"}`}>
                          {card.tone === "danger" ? "–" : "✓"}
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW WE WORK ===================== */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            kicker="How We Work"
            title={
              <>
                The Process Behind <span className="gradient-text">Every Engagement</span>
              </>
            }
            sub="Whether we run your SEO, build your website or automate your operations, the same outcome-led method applies."
          />
          <div className="relative">
            <div className="hidden lg:block absolute top-[46px] left-[6%] right-[6%] h-[2px] bg-[var(--border-color)]" />
            <div className="grid grid-cols-3 gap-[30px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
              {processSteps.map((s, i) => (
                <Reveal key={i} delay={(i % 3) * 100}>
                  <div className="relative p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1 overflow-hidden">
                    <div className="absolute -top-3 -right-2 text-[4.5rem] font-extrabold leading-none opacity-[0.06] select-none">
                      {s.num}
                    </div>
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center text-[1.05rem] font-extrabold mb-4 text-[var(--on-primary)] shadow-[0_8px_25px_rgba(var(--accent-rgb),0.25)]"
                      style={{ background: "var(--primary-gradient)" }}
                    >
                      {s.num}
                    </div>
                    <h3 className="text-[1.15rem] font-bold text-[var(--text-main)] mb-2.5">{s.title}</h3>
                    <p className="text-[var(--text-muted)] text-[0.92rem] leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TECHNOLOGY ===================== */}
      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            kicker="Technology"
            title={
              <>
                Built on <span className="gradient-text">Modern, Maintainable Stacks</span>
              </>
            }
            sub="The same engineering standards you'd expect from a product company — applied to every website, store, app and platform we run."
          />
          <div className="grid grid-cols-4 gap-6 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
            {Object.values(techStack).map((group, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="h-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-6 transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-[var(--tag-bg)] flex items-center justify-center text-[1.2rem] mb-4">
                    {group.icon}
                  </div>
                  <div className="text-[0.95rem] font-bold text-[var(--text-main)] mb-3">{group.title}</div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, j) => (
                      <span
                        key={j}
                        className="py-1 px-2.5 rounded-lg bg-[var(--inset-bg)] border border-[var(--border-color)] text-[0.72rem] font-semibold text-[var(--text-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY EDDINET ===================== */}
      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            kicker="Why Eddinet"
            title={
              <>
                Why Businesses Choose <span className="gradient-text">Eddinet</span>
              </>
            }
            sub="Not because we do everything — but because everything we do works toward the same outcome."
          />
          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
            {reasons.map((r, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <div className="relative h-full p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[var(--tag-bg)] border border-[var(--tag-border)] flex items-center justify-center text-[1.3rem] mb-4">
                    {r.icon}
                  </div>
                  <h3 className="text-[1.08rem] font-bold text-[var(--text-main)] mb-2">{r.title}</h3>
                  <p className="text-[var(--text-muted)] text-[0.9rem] leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== EXPERIENCE / WORK ===================== */}
      <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            kicker="Experience"
            title={
              <>
                Capabilities Shipped <span className="gradient-text">in Production</span>
              </>
            }
            sub="We publish only verifiable outcomes. Here are the disciplines we have built, launched, measured and operated — explored in our case studies and portfolio."
          />
          <div className="grid grid-cols-5 gap-5 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
            {experiences.map((e, i) => (
              <Reveal key={i} delay={(i % 5) * 70} className={i === 4 ? "max-[1024px]:col-span-2 max-[600px]:col-span-1" : ""}>
                <div className="h-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-6 transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-[var(--tag-bg)] flex items-center justify-center text-[1.2rem] mb-4">
                    {e.icon}
                  </div>
                  <h3 className="text-[1rem] font-bold text-[var(--text-main)] mb-3">{e.title}</h3>
                  <ul className="space-y-2">
                    {e.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-[0.78rem] text-[var(--text-muted)]">
                        <span className="text-[var(--main-accent)] font-bold shrink-0 text-[0.65rem]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex justify-center gap-4 flex-wrap mt-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-full font-bold text-[0.9rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
              style={{ background: "var(--primary-gradient)" }}
            >
              Browse Case Studies
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-full font-bold text-[0.9rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== TEAM ===================== */}
      <section className="py-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            kicker="The Team"
            title={
              <>
                Specialists Across <span className="gradient-text">Every Layer</span>
              </>
            }
            sub="Strategists and engineers who plan as one team — because the system only works when the people behind it share the same objective."
          />
          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
            {team.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <div className="h-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-md)] p-6 transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div
                      className="rounded-2xl flex items-center justify-center font-extrabold text-[0.95rem] text-[var(--on-primary)]"
                      style={{ background: "var(--primary-gradient)", width: 52, height: 52 }}
                    >
                      {t.role.split(" ")[0][0]}
                      {t.role.split(" ")[1]?.[0] ?? t.role.split(" ")[0][1] ?? ""}
                    </div>
                    <div>
                      <div className="text-[1rem] font-bold text-[var(--text-main)] mb-1">{t.role}</div>
                      <div className="text-[0.82rem] text-[var(--text-muted)] leading-relaxed">{t.desc}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES ===================== */}
      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            kicker="Industries We Serve"
            title={
              <>
                Approaches Built Around <span className="gradient-text">How Each Industry Buys</span>
              </>
            }
            sub="The growth system stays the same; the strategy adapts to the industry's buying journey, regulations and competition."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <Reveal key={i} delay={(i % 6) * 60}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center gap-2 py-2.5 px-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] text-[0.9rem] font-semibold transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-0.5 no-underline"
                >
                  <span className="text-[1rem]">{ind.icon}</span>
                  {ind.name}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <SectionHeader
            kicker="Values"
            title={
              <>
                Every Partnership Held to the <span className="gradient-text">Same Standards</span>
              </>
            }
          />
          <div className="grid grid-cols-2 gap-6 max-[768px]:grid-cols-1">
            {values.map((v, i) => (
              <Reveal key={i} delay={(i % 2) * 100}>
                <div className="testimonial-quotes h-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-8 relative transition-all duration-300 hover:border-[var(--hover-line)] hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[var(--tag-bg)] border border-[var(--tag-border)] flex items-center justify-center text-[1.4rem] mb-5">
                    {v.icon}
                  </div>
                  <h4 className="text-[1.1rem] font-bold text-[var(--text-main)] mb-3">{v.title}</h4>
                  <p className="text-[var(--text-muted)] text-[0.95rem] leading-[1.7]">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="pb-[100px]">
        <div className="w-full max-w-[820px] mx-auto px-5">
          <SectionHeader
            kicker="FAQ"
            title={
              <>
                About Eddinet — <span className="gradient-text">Questions &amp; Answers</span>
              </>
            }
            sub="Everything businesses usually ask before starting a conversation with us."
          />
          <div className="flex flex-col gap-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-md)] overflow-hidden"
                open={i === 0}
              >
                <summary className="py-[22px] px-7 font-bold text-[1.02rem] cursor-pointer select-none list-none flex items-center justify-between gap-4 text-[var(--text-main)] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-[1.3rem] text-[var(--main-accent)] transition-transform duration-300 group-open:rotate-45 shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-7 pb-[22px] text-[var(--text-muted)] text-[0.95rem] leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="pb-[100px]">
        <div className="max-w-[var(--container-max)] mx-auto px-5">
          <Reveal>
            <div
              className="rounded-3xl border border-[rgba(var(--accent-rgb),0.3)] py-[56px] px-8 text-center relative overflow-hidden"
              style={{ background: "var(--cta-bg)" }}
            >
              <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-[var(--main-accent)]/10 blur-[100px]" />
              <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full bg-[var(--purple-accent)]/10 blur-[100px]" />
              <h2 className="text-[2.2rem] font-extrabold mb-3 text-[var(--text-main)] max-[768px]:text-[1.7rem]">
                Let&apos;s Build Your Digital Growth System
              </h2>
              <p className="text-[1.05rem] text-[var(--text-muted)] max-w-[560px] mx-auto mb-7">
                Book a free 30-minute consultation to understand what&apos;s constraining your growth — and
                how we&apos;d approach it as one connected system.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                  style={{ background: "var(--primary-gradient)" }}
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}