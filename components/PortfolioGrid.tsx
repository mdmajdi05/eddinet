"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects, projectCategories, type PortfolioProject } from "@/data/projects";

function ProjectCard({ p }: { p: PortfolioProject }) {
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
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,25,0.94)] via-[rgba(11,15,25,0.35)] to-transparent" />
        <div className="absolute inset-0 bg-[rgba(var(--accent-rgb),0.16)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-[rgba(11,15,25,0.65)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] text-[0.68rem] font-bold text-white">
        ⚡ Built by Eddinet
      </span>
      {p.status && (
        <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-[rgba(16,185,129,0.9)] text-[0.68rem] font-bold text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          {p.status}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 z-10">
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <span className="py-1 px-2.5 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 text-[0.68rem] font-bold text-white">
            {p.service}
          </span>
          <span className="text-[0.7rem] font-semibold text-white/60">{p.industry}</span>
        </div>

        <h4 className="font-extrabold text-white leading-snug text-[1.05rem] mb-1">{p.title}</h4>
        <p className="text-white/65 text-[0.82rem] leading-relaxed mb-4">{p.client}</p>

        <div className="flex items-center gap-4 border-t border-white/15 pt-3.5">
          <span className="ml-auto inline-flex items-center gap-2 text-[0.82rem] font-bold text-white">
            {p.url ? "View Live" : "Explore"}
            <span className={`transition-transform duration-300 ${p.url ? "translate-x-0 group-hover:translate-x-1" : ""}`}>→</span>
          </span>
        </div>
      </div>
    </>
  );

  const classes = `group relative h-[380px] w-[300px] md:w-[340px] shrink-0 snap-start overflow-hidden rounded-[var(--radius-lg)] border border-white/10 transition-all duration-500 hover:border-[rgba(var(--accent-rgb),0.55)] hover:shadow-[0_25px_60px_rgba(var(--accent-rgb),0.18)]`;

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
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setActive("all")}
          className="py-2.5 px-5 rounded-full font-bold text-[0.88rem] cursor-pointer transition-all duration-300 border"
          style={{
            background: active === "all" ? "var(--primary-gradient)" : "var(--chip-bg)",
            borderColor: active === "all" ? "transparent" : "var(--border-color)",
            color: active === "all" ? "var(--on-primary)" : "var(--text-main)",
          }}
        >
          All Projects
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

      <div className="flex flex-col gap-14">
        {grouped.map((g) => (
          <div key={g.cat.key}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[1.6rem] leading-none select-none">{g.cat.label === "Websites & Portals" ? "🌐" : g.cat.label === "eCommerce & D2C" ? "🛒" : g.cat.label === "Software & SaaS" ? "⚙️" : g.cat.label === "AI & Automation" ? "🤖" : g.cat.label === "Mobile Apps" ? "📱" : g.cat.label === "SEO & AI SEO" ? "🔍" : g.cat.label === "Paid Media & Social" ? "📣" : g.cat.label === "Content & Design" ? "🎨" : g.cat.label === "Cloud, Hosting & DevOps" ? "☁️" : "🛡️"}</span>
              <h3 className="text-[1.6rem] font-extrabold text-[var(--text-main)] max-[768px]:text-[1.3rem]">
                {g.cat.label}
              </h3>
              <span className="py-1 px-3 rounded-full bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[0.75rem] font-bold text-[var(--main-accent)]">
                {g.items.length} {g.items.length === 1 ? "project" : "projects"}
              </span>
              <span className="h-px flex-1 bg-[var(--border-color)]" />
            </div>

            <div className="overflow-x-auto pb-4 [scrollbar-width:thin]">
              <div className="flex gap-5 md:gap-6 w-max px-1 snap-x snap-mandatory">
                {g.items.map((p, i) => (
                  <ProjectCard key={p.id} p={p} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] no-underline transition-all duration-300 text-[var(--on-primary)] hover:-translate-y-[3px]"
          style={{ background: "var(--primary-gradient)" }}
        >
          Want A Project Like These? Start Yours →
        </Link>
      </div>
    </div>
  );
}
