"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects, projectCategories, type PortfolioProject } from "@/data/projects";

function BentoCard({ p, size }: { p: PortfolioProject; size: "hero" | "tall" | "small" }) {
  const inner = (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,25,0.92)] via-[rgba(11,15,25,0.25)] to-transparent" />
        <div className="absolute inset-0 bg-[rgba(var(--accent-rgb),0.16)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-[rgba(11,15,25,0.65)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] text-[0.68rem] font-bold text-white">
        ⚡ Built by Eddinet
      </span>
      <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-[rgba(16,185,129,0.9)] text-[0.68rem] font-bold text-white">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        {p.status}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 z-10">
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <span className="py-1 px-2.5 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 text-[0.68rem] font-bold text-white">
            {p.service}
          </span>
          <span className="text-[0.7rem] font-semibold text-white/60">{p.industry}</span>
        </div>

        <h4 className={`font-extrabold text-white leading-snug ${size === "hero" ? "text-[1.35rem] md:text-[1.6rem] mb-2" : "text-[1.02rem] mb-1"}`}>
          {p.title}
        </h4>
        <p className="text-white/65 text-[0.82rem] leading-relaxed mb-4">{p.client}</p>

        {size === "hero" && (
          <p className="hidden md:block text-white/75 text-[0.9rem] leading-relaxed mb-4 line-clamp-2">{p.summary}</p>
        )}

        <div className="flex items-center gap-4 border-t border-white/15 pt-3.5">
          <div className="min-w-0">
            <span className="block text-[1.25rem] font-extrabold text-white leading-none mb-1">{p.highlight}</span>
            <span className="block text-[0.68rem] text-white/55 max-[420px]:hidden">{p.highlightLabel}</span>
          </div>
          <span className="ml-auto inline-flex items-center gap-2 text-[0.82rem] font-bold text-white">
            {p.url ? "View Live" : "Live Today"}
            <span className={`transition-transform duration-300 ${p.url ? "translate-x-0 group-hover:translate-x-1" : ""}`}>→</span>
          </span>
        </div>
      </div>
    </>
  );

  const classes = `group relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 transition-all duration-500 hover:border-[rgba(var(--accent-rgb),0.55)] hover:shadow-[0_25px_60px_rgba(var(--accent-rgb),0.18)] ${
    size === "hero" ? "h-[420px] md:col-span-4 md:row-span-2 md:h-auto" : ""
  } ${size === "tall" ? "h-[420px] md:col-span-2 md:row-span-2 md:h-auto" : ""} ${
    size === "small" ? "h-[260px] md:col-span-2 md:row-span-1 md:h-auto" : ""
  }`;

  return p.url ? (
    <Link href={p.url} target="_blank" rel="noopener noreferrer" className={`no-underline ${classes}`}>
      {inner}
    </Link>
  ) : (
    <div className={classes}>{inner}</div>
  );
}

export default function PortfolioGrid() {
  const [active, setActive] = useState("all");

  const activeCategory = projectCategories.find((c) => c.key === active);
  const filtered = active === "all" ? portfolioProjects : portfolioProjects.filter((p) => p.category === active);
  const grouped = projectCategories
    .map((cat) => ({
      cat,
      items: portfolioProjects.filter((p) => p.category === cat.key),
    }))
    .filter((g) => (active === "all" ? g.items.length > 0 : g.cat.key === active && g.items.length > 0));

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setActive("all")}
          className="py-2.5 px-5 rounded-full font-bold text-[0.88rem] cursor-pointer transition-all duration-300 border"
          style={{
            background: active === "all" ? "var(--primary-gradient)" : "var(--chip-bg)",
            borderColor: active === "all" ? "transparent" : "var(--border-color)",
            color: active === "all" ? "var(--on-primary)" : "var(--text-main)",
          }}
        >
          All {portfolioProjects.length}+ Projects
        </button>
        {projectCategories.map((c) => {
          const isActive = active === c.key;
          return (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className="py-2.5 px-5 rounded-full font-bold text-[0.88rem] cursor-pointer transition-all duration-300 border"
              style={{
                background: isActive ? "var(--primary-gradient)" : "var(--chip-bg)",
                borderColor: isActive ? "transparent" : "var(--border-color)",
                color: isActive ? "var(--on-primary)" : "var(--text-main)",
              }}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <p className="text-center text-[var(--text-muted)] text-[0.95rem] mb-12">
        {activeCategory ? (
          <>
            <strong className="text-[var(--text-main)]">{filtered.length}</strong> {activeCategory.label.toLowerCase()}{" "}
            {filtered.length === 1 ? "project" : "projects"} - engineered and run by the Eddinet team
          </>
        ) : (
          <>
            Every project below is <strong className="text-[var(--main-accent)]">designed, built and maintained by Eddinet</strong> - live, running and producing outcomes today.
          </>
        )}
      </p>

      <div className="flex flex-col gap-16">
        {grouped.map((g) => (
          <div key={g.cat.key}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[1.6rem] leading-none select-none">{g.cat.label === "Websites & Portals" ? "🌐" : g.cat.label === "eCommerce & D2C" ? "🛒" : g.cat.label === "Software & SaaS" ? "⚙️" : g.cat.label === "AI & Automation" ? "🤖" : g.cat.label === "Mobile Apps" ? "📱" : g.cat.label === "SEO & AI SEO" ? "🔍" : g.cat.label === "Paid Media & Social" ? "📣" : g.cat.label === "Content & Design" ? "🎨" : g.cat.label === "Cloud, Hosting & DevOps" ? "☁️" : "🛡️"}</span>
              <h3 className="text-[1.7rem] font-extrabold text-[var(--text-main)] max-[768px]:text-[1.35rem]">
                {g.cat.label}
              </h3>
              <span className="py-1 px-3 rounded-full bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[0.75rem] font-bold text-[var(--main-accent)]">
                {g.items.length} {g.items.length === 1 ? "project" : "projects"}
              </span>
              <span className="h-px flex-1 bg-[var(--border-color)]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[220px] gap-5 md:gap-6">
              {g.items.map((p, i) => (
                <BentoCard key={p.id} p={p} size={i === 0 ? "hero" : i === 1 ? "tall" : "small"} />
              ))}

              {g.items.length === 6 && (
                <Link
                  href="/contact"
                  className="h-[260px] md:h-auto md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-[var(--radius-lg)] border border-[rgba(var(--accent-rgb),0.3)] no-underline transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(var(--accent-rgb),0.55)]"
                  style={{ background: "var(--cta-bg)" }}
                >
                  <div className="absolute inset-0 bg-[rgba(var(--accent-rgb),0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full flex flex-col justify-center p-6 md:p-7 z-10">
                    <div className="text-[0.72rem] uppercase tracking-widest text-[var(--main-accent)] font-bold mb-2">
                      Your Project Here
                    </div>
                    <div className="text-[1.4rem] font-extrabold text-[var(--text-main)] leading-snug mb-2">
                      Want one like this?
                    </div>
                    <p className="text-[var(--text-muted)] text-[0.88rem] leading-relaxed mb-4">
                      We design, build and run digital products end-to-end - websites, software, apps and growth.
                    </p>
                    <span className="inline-flex items-center gap-2 text-[var(--main-accent)] font-bold text-[0.9rem]">
                      Start a Project
                      <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}