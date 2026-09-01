import type { Metadata } from "next";
import Link from "next/link";
import PortfolioGrid from "@/components/PortfolioGrid";
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
  title: "Portfolio - Websites, Software & Growth Projects | Eddinet",
  description:
    "Explore Eddinet's portfolio across websites, eCommerce, software, SaaS, AI, mobile apps, SEO, paid media, cloud and DevOps - designed, built, launched and maintained by the Eddinet team.",
  alternates: { canonical: "https://eddinet.com/portfolio" },
};

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
            Portfolio
          </div>
          <h1 className="text-[3rem] font-extrabold leading-[1.13] mb-5 text-[var(--text-main)] max-[768px]:text-[2.15rem]">
            Work Designed, Built &amp; Run <span className="gradient-text">by Eddinet</span>
          </h1>
          <p className="text-[var(--text-muted)] text-[1.12rem] leading-relaxed max-w-[700px] mx-auto">
            Websites, eCommerce stores, software, SaaS, AI tools, apps, SEO and ad campaigns. Browse the
            project cards and scroll through what our team builds across every capability area.
          </p>
        </div>
      </section>

      <section id="live-projects" className="pb-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)]">
        <div className="max-w-[var(--container-max)] mx-auto px-5 pt-[60px]">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4">
              Browse by Category
            </div>
            <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-3 text-[var(--text-main)] max-[768px]:text-[2rem]">
              Projects We Build Across <span className="gradient-text">the Growth Stack</span>
            </h2>
            <p className="text-[var(--text-muted)] text-[1.05rem] max-w-[680px] mx-auto">
              Filter by category - websites, eCommerce, SaaS, AI, apps, SEO, paid media, content, cloud and
              support. Each project card links to a live product where one is available.
            </p>
          </div>
          <div className="relative mb-12 h-12 overflow-hidden border-y border-[var(--border-color)] flex items-center [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] select-none">
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

      <section className="pb-[100px]">
        <div className="max-w-[var(--container-max)] mx-auto px-5">
          <div className="rounded-3xl border border-[rgba(var(--accent-rgb),0.3)] py-[56px] px-8 text-center relative overflow-hidden" style={{ background: "var(--cta-bg)" }}>
            <h2 className="text-[2.2rem] font-extrabold mb-3 text-[var(--text-main)] max-[768px]:text-[1.7rem]">
              Want A Digital Product Built for Your Business?
            </h2>
            <p className="text-[1.05rem] text-[var(--text-muted)] max-w-[560px] mx-auto mb-7">
              Every project starts the same way - a free 30-minute consultation to find the growth
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
                rel="noopener noreferrer"
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
