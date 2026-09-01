"use client";

import { useState } from "react";
import Link from "next/link";

const stages = [
  {
    num: "01",
    key: "acquire",
    phase: "Discover & Acquire",
    tagline:
      "Build visibility where your buyers actually search — classic Google results and AI-generated answers included.",
    bullets: [
      "SEO & AI SEO (Generative SEO)",
      "Lead Generation SEO & Local SEO",
      "Google, Meta & LinkedIn Ads",
      "Paid + organic content engine",
    ],
    services: [
      { label: "SEO & AI SEO", href: "/services/seo" },
      { label: "Social Media", href: "/services/social-media-marketing" },
      { label: "Ads / PPC", href: "/services/ads-ppc" },
      { label: "Content", href: "/services/content" },
    ],
  },
  {
    num: "02",
    key: "convert",
    phase: "Convert & Capture",
    tagline:
      "Turn demand into leads and sales with experiences designed around clarity, speed and conversion.",
    bullets: [
      "Conversion-focused web design & development",
      "eCommerce stores built to checkout",
      "Brand identity & campaign creative",
      "Landing pages and CRO",
    ],
    services: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "eCommerce", href: "/services/ecommerce" },
      { label: "Design & Creative", href: "/services/design-creative" },
    ],
  },
  {
    num: "03",
    key: "automate",
    phase: "Automate & Operate",
    tagline:
      "Remove manual work with custom software, applications and AI that run core operations.",
    bullets: [
      "Custom software & SaaS systems",
      "Mobile apps (Flutter / React Native)",
      "AI chatbots, agents & LLM integration",
      "CRM, ERP and API automation",
    ],
    services: [
      { label: "Software & AI", href: "/services/software-ai" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
    ],
  },
  {
    num: "04",
    key: "scale",
    phase: "Scale & Sustain",
    tagline:
      "Keep platforms fast, stable, secure and supported so growth never outgrows the infrastructure.",
    bullets: [
      "Cloud infrastructure (AWS) & DevOps",
      "CI/CD, Docker & Kubernetes",
      "Hosting & zero-drama migration",
      "Monitoring, security & maintenance",
    ],
    services: [
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "Hosting & Migration", href: "/services/hosting-migration" },
      { label: "Maintenance & Support", href: "/services/maintenance-support" },
    ],
  },
];

export default function GrowthSystem() {
  const [active, setActive] = useState(0);
  const current = stages[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[370px_1fr] gap-6 items-stretch">
      {/* Stage navigator */}
      <div className="flex flex-col gap-3" role="tablist" aria-label="Growth system stages">
        {stages.map((s, i) => (
          <button
            key={s.key}
            type="button"
            role="tab"
            aria-selected={active === i}
            id={`gs-tab-${i}`}
            aria-controls={`gs-panel-${i}`}
            onClick={() => setActive(i)}
            className={`text-left px-5 py-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
              active === i
                ? "border-[var(--border-hover)] bg-[var(--tag-bg)]"
                : "border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-hover)]"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`w-9 h-9 rounded-xl flex items-center justify-center text-[0.8rem] font-extrabold shrink-0 transition-all duration-300 ${
                  active === i
                    ? "text-[var(--on-primary)]"
                    : "text-[var(--main-accent)] bg-[var(--tag-bg)]"
                }`}
                style={active === i ? { background: "var(--primary-gradient)" } : undefined}
              >
                {s.num}
              </span>
              <div>
                <div
                  className={`font-bold text-[0.98rem] transition-colors duration-300 ${
                    active === i ? "text-[var(--text-main)]" : "text-[var(--text-muted)]"
                  }`}
                >
                  {s.phase}
                </div>
                <div className="text-[0.75rem] text-[var(--text-dim)] mt-0.5">
                  {s.services.length} capability areas · {s.bullets.length} focus points
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div
        key={current.key}
        role="tabpanel"
        id={`gs-panel-${active}`}
        aria-labelledby={`gs-tab-${active}`}
        className="relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-8 overflow-hidden animate-[aboutPanelIn_0.35s_ease] max-[768px]:p-6"
      >
        <div className="absolute -top-10 -right-6 text-[7rem] font-extrabold leading-none opacity-[0.05] select-none">
          {current.num}
        </div>

        <div className="relative">
          <div className="inline-flex items-center gap-2 py-1.5 px-3.5 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-full text-[var(--main-accent)] text-[0.72rem] font-bold uppercase tracking-wider">
            Growth System · Stage {current.num}
          </div>
          <h3 className="text-[1.7rem] font-extrabold text-[var(--text-main)] mt-4 mb-2 max-[768px]:text-[1.4rem]">
            {current.phase}
          </h3>
          <p className="text-[var(--text-muted)] text-[1rem] leading-relaxed mb-6 max-w-[640px]">
            {current.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-2 mb-7 flex-wrap">
            {current.bullets.map((b, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[var(--inset-bg)] border border-[var(--border-color)] text-[0.82rem] font-medium text-[var(--text-main)]"
              >
                <span className="text-[var(--main-accent)] font-bold text-[0.72rem]">✓</span>
                {b}
              </div>
            ))}
          </div>

          <div className="pt-5 border-t border-[var(--border-color)]">
            <div className="text-[0.75rem] uppercase tracking-wider text-[var(--text-dim)] font-bold mb-3">
              Mapped Eddinet Services
            </div>
            <div className="flex flex-wrap gap-3">
              {current.services.map((svc, i) => (
                <Link
                  key={i}
                  href={svc.href}
                  className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] text-[0.85rem] font-semibold transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-0.5 no-underline"
                >
                  {svc.label}
                  <span className="text-[var(--main-accent)] transition-transform duration-300 group-hover/link:translate-x-0.5">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes aboutPanelIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}