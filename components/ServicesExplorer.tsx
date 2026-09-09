"use client";
import { useState } from "react";
import Link from "next/link";
import { servicePages } from "@/data/services";

const pillars = [
  { key: "all", label: "All Services", cats: null as string[] | null, icon: "✦" },
  { key: "marketing", label: "Marketing & Visibility", cats: ["seo", "social", "ads", "content"], icon: "📈" },
  { key: "conversion", label: "Design & Conversion", cats: ["design", "web", "ecommerce"], icon: "🎨" },
  { key: "technology", label: "Technology & Infrastructure", cats: ["mobile", "software", "cloud", "hosting"], icon: "🤖" },
  { key: "support", label: "Support & Reputation", cats: ["maintenance", "reputation"], icon: "🛡️" },
];

export default function ServicesExplorer() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? servicePages
      : servicePages.filter((s) => pillars.find((p) => p.key === active)?.cats?.includes(s.cat));

  return (
    <div>
      <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)]/70 p-2.5 flex flex-wrap justify-center gap-2.5 mb-8 shadow-[var(--shadow-sm)] backdrop-blur-sm">
        {pillars.map((p) => {
          const isActive = active === p.key;
          const count = p.cats
            ? servicePages.filter((s) => p.cats?.includes(s.cat)).length
            : servicePages.length;
          return (
            <button
              key={p.key}
              onClick={() => setActive(p.key)}
              className={`inline-flex items-center gap-2 py-2.5 px-4 rounded-xl font-bold text-[0.87rem] cursor-pointer transition-all duration-300 border ${
                isActive
                  ? "text-[var(--on-primary)] shadow-[0_8px_20px_-6px_rgba(var(--accent-rgb),0.5)] -translate-y-px"
                  : "text-[var(--text-main)] border-[var(--border-color)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--hover-line)] hover:-translate-y-px"
              }`}
              style={{
                background: isActive ? "var(--primary-gradient)" : "transparent",
                borderColor: isActive ? "transparent" : "var(--border-color)",
              }}
            >
              <span className={`text-[1rem] ${isActive ? "" : "opacity-80"}`}>{p.icon}</span>
              <span className="whitespace-nowrap">{p.label}</span>
              <span
                className={`inline-flex items-center justify-center min-w-[1.6rem] h-6 px-1.5 rounded-lg text-[0.72rem] font-extrabold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[var(--chip-bg)] border border-[var(--border-color)] text-[var(--text-dim)]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex items-baseline gap-3 mb-8">
        <h2 className="text-[1.6rem] font-extrabold text-[var(--text-main)] max-[768px]:text-[1.3rem]">
          {pillars.find((p) => p.key === active)?.label}
        </h2>
        <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[rgba(var(--accent-rgb),0.1)] border border-[rgba(var(--accent-rgb),0.15)] text-[0.78rem] font-bold text-[var(--main-accent)]">
          {visible.length} {visible.length === 1 ? "capability area" : "capability areas"}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
        {visible.map((s, i) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group relative flex flex-col bg-[var(--bg-main)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(var(--accent-rgb),0.35)] hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.12)] no-underline"
          >
            <div
              className="absolute inset-0 rounded-[var(--radius-lg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "var(--card-edge-gradient)",
                padding: "1px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <div className="flex items-start justify-between mb-5">
              <div
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--main-accent)] to-[rgba(var(--accent-rgb),0.6)] flex items-center justify-center text-[1.5rem] shadow-[0_8px_25px_rgba(var(--accent-rgb),0.3)] transition-transform duration-500 group-hover:scale-110"
              >
                {s.icon}
              </div>
              <span className="text-[0.85rem] font-extrabold text-[var(--text-dim)]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <h3 className="text-[1.15rem] font-bold text-[var(--text-main)]">{s.title}</h3>
              <span className="py-0.5 px-2 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] text-[0.68rem] font-bold text-[var(--main-accent)]">
                {s.allItems.length} sub-services
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-[0.88rem] leading-relaxed mb-5 line-clamp-3">{s.desc}</p>

            <div className="flex items-center gap-2 flex-wrap mb-6">
              {s.allItems.slice(0, 4).map((item, j) => (
                <span
                  key={j}
                  className="py-1 px-2.5 rounded-lg bg-[var(--tag-bg)] border border-[var(--tag-border)] text-[0.7rem] font-semibold text-[var(--main-accent)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <span className="mt-auto inline-flex items-center gap-2 pt-5 border-t border-[var(--border-color)] text-[var(--main-accent)] font-bold text-[0.88rem] transition-all duration-300 group-hover:gap-3">
              Explore {s.title} <span>→</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}