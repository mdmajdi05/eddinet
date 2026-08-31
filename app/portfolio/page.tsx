import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PortfolioGrid from "@/components/PortfolioGrid";
import { caseStudies } from "@/data/caseStudies";
import { projectCategories } from "@/data/projects";

const marqueeItems = [
  ...projectCategories.map((c) => c.label),
  "Custom Websites",
  "Shopify & WooCommerce",
  "SaaS Builds",
  "AI Chatbots & LLM",
  "Cloud & DevOps",
  "Local SEO",
  "Google & Meta Ads",
];

export const metadata: Metadata = {
  title: "Portfolio - 50+ Live Websites, Software & SaaS Projects | Eddinet",
  description:
    "Explore Eddinet's portfolio - 50+ live, running projects across websites, eCommerce, software, SaaS, AI, mobile apps, SEO, paid media, cloud and DevOps, with measurable outcomes.",
  alternates: { canonical: "https://eddinet.com/portfolio" },
};

const stats = caseStudies.map((c) => ({
  value: c.metric,
  label: c.metricLabel,
  client: c.client,
}));

const [featured, ...rest] = caseStudies;

export default function PortfolioPage() {
  return (
    <>
      <section className="relative pt-[150px] pb-[60px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-25%] left-[-8%] w-[500px] h-[500px] rounded-full bg-[var(--main-accent)]/8 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--purple-accent)]/8 blur-3xl" />
        </div>
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-5">
            Portfolio & Case Studies
          </div>
          <h1 className="text-[3rem] font-extrabold leading-[1.13] mb-5 text-[var(--text-main)] max-[768px]:text-[2.15rem]">
            50+ Live Projects, <span className="gradient-text">Real Business Outcomes</span>
          </h1>
          <p className="text-[var(--text-muted)] text-[1.12rem] leading-relaxed max-w-[700px] mx-auto">
            Websites, eCommerce stores, software, SaaS, AI tools, apps, SEO and ad campaigns - designed,
            built, launched and maintained by the Eddinet team. Every project below is{" "}
            <strong className="text-[var(--text-main)]">live and running today</strong>.
          </p>
        </div>
      </section>

      <section className="pb-[70px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="grid grid-cols-3 gap-6 max-[768px]:grid-cols-1">
            {stats.map((st, i) => (
              <div
                key={i}
                className="text-center bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-md)] py-8 px-5 transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1"
              >
                <div className="text-[2.2rem] font-extrabold gradient-text mb-1">{st.value}</div>
                <div className="text-[0.85rem] text-[var(--text-muted)] font-semibold mb-1 capitalize">
                  {st.label}
                </div>
                <div className="text-[0.78rem] text-[var(--text-dim)]">{st.client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="live-projects" className="pb-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="max-w-[var(--container-max)] mx-auto px-5 pt-[60px]">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
              Live & Running
            </div>
            <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[2rem]">
              Projects We&apos;ve <span className="gradient-text">Shipped for Clients</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[680px] mx-auto">
              Browse by category - filter anything from websites and SaaS to SEO and cloud. Each project
              carries a measurable outcome, not a template claim.
            </p>
          </div>
          <div className="relative mb-14 h-12 overflow-hidden border-y border-[var(--border-color)] flex items-center [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] select-none">
            <div className="animate-marquee flex items-center gap-10 whitespace-nowrap pr-10 w-max">
              {[...marqueeItems, ...marqueeItems].map((m, i) => (
                <span key={i} className="flex items-center gap-10">
                  <span className="text-[0.95rem] font-bold text-[var(--text-muted)]">{m}</span>
                  <span className="text-[var(--main-accent)] text-[1.1rem]">✦</span>
                </span>
              ))}
            </div>
          </div>
          <PortfolioGrid />
        </div>
      </section>

      <section className="pb-[90px]">
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
              Featured Case Studies
            </div>
            <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[2rem]">
              Deep Dives Into <span className="gradient-text">the Work</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[650px] mx-auto">
              Full breakdowns of strategy, execution and outcome for three representative projects.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <Link
              href={`/case-studies/${featured.slug}`}
              className="group grid grid-cols-[1.05fr_0.95fr] max-[1024px]:grid-cols-1 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.35)] no-underline"
            >
              <div className="relative h-full min-h-[340px] max-h-[420px] overflow-hidden max-[1024px]:h-[260px] max-[1024px]:min-h-0">
                <Image
                  src={featured.image}
                  alt={featured.client}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,25,0.85)] via-[rgba(11,15,25,0.15)] to-transparent" />
                <span className="absolute top-5 left-5 py-1.5 px-3.5 rounded-full bg-[rgba(11,15,25,0.6)] backdrop-blur-md border border-[rgba(255,255,255,0.12)] text-[0.7rem] font-bold uppercase tracking-wider text-white">
                  Featured Project
                </span>
              </div>
              <div className="p-9 flex flex-col max-[600px]:p-6">
                <div className="text-[0.78rem] uppercase tracking-wider text-[var(--main-accent)] font-bold mb-2">
                  {featured.tag}
                </div>
                <h3 className="text-[2rem] font-extrabold text-[var(--text-main)] mb-1 max-[600px]:text-[1.5rem]">
                  {featured.client}
                </h3>
                <div className="text-[var(--text-dim)] text-[0.85rem] font-semibold mb-4">{featured.industry}</div>
                <p className="text-[var(--text-muted)] text-[0.98rem] leading-relaxed mb-6">{featured.summary}</p>
                <div className="flex items-center gap-2 flex-wrap mb-6">
                  {featured.services.map((s, j) => (
                    <span
                      key={j}
                      className="py-1.5 px-3 rounded-lg bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[0.75rem] font-semibold text-[var(--main-accent)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-end justify-between gap-4 pt-5 border-t border-[var(--border-color)]">
                  <div>
                    <div className="text-[2rem] font-extrabold gradient-text">{featured.metric}</div>
                    <div className="text-[0.85rem] text-[var(--text-muted)] capitalize">{featured.metricLabel}</div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[var(--main-accent)] font-bold text-[0.9rem] transition-all duration-300 group-hover:gap-3">
                    Read Full Case Study <span>→</span>
                  </span>
                </div>
              </div>
            </Link>

            <div className="grid grid-cols-2 gap-6 max-[768px]:grid-cols-1">
              {rest.map((r, i) => (
                <Link
                  key={i}
                  href={`/case-studies/${r.slug}`}
                  className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(var(--accent-rgb),0.35)] hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.12)] no-underline flex flex-col"
                >
                  <div className="relative">
                    <div className="h-[220px] relative overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.client}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,25,1)] via-[rgba(11,15,25,0.35)] to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <div className="text-[var(--main-accent)] text-[0.75rem] uppercase tracking-wider font-bold mb-1">
                          {r.tag}
                        </div>
                        <div className="text-[1.3rem] font-bold text-white leading-tight">{r.client}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-[var(--text-muted)] text-[0.88rem] leading-relaxed mb-5 line-clamp-3">{r.summary}</p>
                    <div className="mt-auto pt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[1.5rem] font-extrabold gradient-text">{r.metric}</div>
                        <div className="text-[0.75rem] text-[var(--text-muted)] capitalize">{r.metricLabel}</div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-[var(--main-accent)] font-bold text-[0.85rem] transition-all duration-300 group-hover:gap-3 shrink-0">
                        Read Case Study <span>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 border border-[var(--chip-border)] bg-[var(--btn2-bg)] text-[var(--text-main)] hover:bg-[var(--btn2-bg-hover)] hover:border-[var(--hover-line)] hover:-translate-y-[3px]"
            >
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-[100px]">
        <div className="max-w-[var(--container-max)] mx-auto px-5">
          <div className="rounded-3xl border border-[rgba(var(--accent-rgb),0.3)] py-[56px] px-8 text-center relative overflow-hidden" style={{ background: "var(--cta-bg)" }}>
            <h2 className="text-[2.2rem] font-extrabold mb-3 text-[var(--text-main)] max-[768px]:text-[1.7rem]">
              Want Results Like These for Your Business?
            </h2>
            <p className="text-[1.05rem] text-[var(--text-muted)] max-w-[560px] mx-auto mb-7">
              Every project starts with the same thing - a free 30-minute consultation to find the growth
              constraint and design around it.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px]"
                style={{ background: "var(--primary-gradient)" }}
              >
                Start Your Project
              </Link>
              <a
                href="https://wa.me/917042840441"
                target="_blank"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-[3px]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}