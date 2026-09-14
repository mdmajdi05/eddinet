"use client";

import { useState } from "react";
import Image from "next/image";

interface AboutStat {
  value: string;
  label: string;
}

interface AboutSectionProps {
  paragraphs: string[];
  image: string;
  title?: string;
  gradientWord?: string;
  subheading?: string;
  stats?: AboutStat[];
  imageAlt?: string;
}

const defaultStats: AboutStat[] = [
  { value: "5+", label: "Years Experience" },
  { value: "1,000+", label: "Projects Delivered" },
  { value: "12+", label: "Countries Served" },
  { value: "98%", label: "Client Retention" },
];

export default function AboutSection({
  paragraphs,
  image,
  title = "About",
  gradientWord = "Eddinet",
  subheading,
  stats = defaultStats,
  imageAlt = "Eddinet Digital Agency",
}: AboutSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const firstPara = paragraphs[0];
  const secondPara = paragraphs[1];
  const restParas = paragraphs.slice(2);
  const hasMore = restParas.length > 0;

  return (
    <section className="py-[90px] bg-[var(--strip-bg)] border-y border-[var(--border-color)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-30%] right-[-15%] w-[500px] h-[500px] rounded-full bg-[var(--main-accent)]/8 blur-3xl" />
        <div className="absolute bottom-[-35%] left-[-10%] w-[420px] h-[420px] rounded-full bg-purple-500/8 blur-3xl" />
      </div>

      <div className="w-full max-w-[var(--container-max)] mx-auto px-5 relative z-10">
        <div className="grid grid-cols-[0.95fr_1.05fr] gap-[40px] items-center max-[1024px]:grid-cols-1">

          {/* =========================================================
              PREMIUM VISUAL — layered composition + floating cards
          ========================================================= */}
          <div className="relative min-h-[560px] flex items-center justify-center -ml-2 max-[1024px]:min-h-[520px] max-[640px]:min-h-[460px] max-[1024px]:-ml-0">

            {/* Soft background glow */}
            <div className="absolute left-[20%] top-[15%] w-[280px] h-[280px] rounded-full bg-[var(--main-accent)]/10 blur-[100px]" />

            {/* Decorative dot grid - top */}
            <div
              className="absolute top-[15px] right-[20px] w-[110px] h-[100px] opacity-30 max-[640px]:hidden"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--main-accent) 1.3px, transparent 1.3px)",
                backgroundSize: "13px 13px",
              }}
            />

            {/* Decorative dot grid - bottom */}
            <div
              className="absolute bottom-[10px] left-[0px] w-[100px] h-[90px] opacity-25 max-[640px]:hidden"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--main-accent) 1.3px, transparent 1.3px)",
                backgroundSize: "13px 13px",
              }}
            />

            {/* Decorative circles */}
            <div className="absolute left-[-35px] top-[115px] w-[135px] h-[135px] rounded-full border border-[var(--main-accent)]/15 max-[640px]:hidden" />
            <div className="absolute left-[-60px] top-[90px] w-[185px] h-[185px] rounded-full border border-[var(--main-accent)]/10 max-[640px]:hidden" />

            {/* =====================================================
                MAIN IMAGE COMPOSITION
            ===================================================== */}
            <div className="relative z-10 w-[95%] max-w-[560px]">

              {/* Back rotated layer */}
              <div className="absolute inset-0 translate-x-[-16px] translate-y-[-14px] rounded-[32px] bg-[var(--main-accent)]/12 rotate-[-4deg]" />

              {/* Back white/glass layer */}
              <div className="absolute inset-0 translate-x-[12px] translate-y-[14px] rounded-[32px] bg-[var(--bg-card)] border border-[var(--border-color)] rotate-[4deg] shadow-[var(--shadow-lg)]" />

              {/* Main image */}
              <div className="relative overflow-hidden rounded-[30px] border-[6px] border-[var(--bg-card)] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">

                <Image
                  src={image}
                  alt={imageAlt}
                  width={1000}
                  height={667}
                  className="w-full h-auto object-contain"
                  unoptimized
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                {/* Image content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <div className="text-[0.65rem] uppercase tracking-[0.25em] text-white/70">
                    EDDINET
                  </div>
                  <div className="text-white text-[1.25rem] font-extrabold mt-1">
                    Connect. Build. Grow.
                  </div>
                </div>

                {/* Image corner indicator */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white text-lg">
                  ↗
                </div>
              </div>
            </div>

            {/* =====================================================
                TOP LEFT FLOATING STAT
            ===================================================== */}
            <div className="absolute z-30 top-[55px] left-[-5px] bg-[var(--bg-card)]/95 backdrop-blur-xl border border-[var(--border-color)] rounded-2xl px-4 py-3 shadow-[var(--shadow-lg)] max-[640px]:top-[25px] max-[640px]:left-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--tag-bg)] flex items-center justify-center text-[var(--main-accent)] text-base font-bold">
                  ✦
                </div>
                <div>
                  <div className="text-[1.2rem] font-extrabold text-[var(--text-main)] leading-none">
                    360°
                  </div>
                  <div className="text-[0.68rem] text-[var(--text-muted)] mt-1">
                    Digital Growth
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT FLOATING GROWTH CARD
            ===================================================== */}
            <div className="absolute z-30 right-[-24px] bottom-[60px] w-[175px] bg-[var(--bg-card)]/95 backdrop-blur-xl border border-[var(--border-color)] rounded-[20px] p-4 shadow-[var(--shadow-lg)] max-[1024px]:right-0 max-[640px]:bottom-[40px] max-[480px]:w-[160px]">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--tag-bg)] flex items-center justify-center text-[var(--main-accent)] text-base font-bold">
                  ↗
                </div>
                <span className="text-[0.58rem] font-bold tracking-[0.15em] text-[var(--main-accent)]">
                  GROWTH
                </span>
              </div>
              <div className="text-[0.9rem] font-extrabold text-[var(--text-main)] leading-tight">
                Integrated
                <br />
                Growth System
              </div>
              <div className="relative mt-3 h-[3px] w-full bg-[var(--border-color)] rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[72%] bg-[var(--main-accent)] rounded-full" />
              </div>
              <div className="mt-2 text-[0.62rem] text-[var(--text-muted)]">
                Marketing + Technology
              </div>
            </div>

            {/* =====================================================
                BOTTOM LEFT TEAM CARD
            ===================================================== */}
            <div className="absolute z-30 bottom-[8px] left-[15px] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl px-3.5 py-2.5 shadow-[var(--shadow-lg)] max-[640px]:left-0 max-[480px]:hidden">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[var(--main-accent)] border-2 border-[var(--bg-card)] flex items-center justify-center text-white text-[10px] font-bold">
                    M
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[var(--text-main)] border-2 border-[var(--bg-card)] flex items-center justify-center text-white text-[10px] font-bold">
                    T
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[var(--main-accent)]/70 border-2 border-[var(--bg-card)] flex items-center justify-center text-white text-[10px] font-bold">
                    A
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[var(--bg-card)] border-2 border-[var(--main-accent)] flex items-center justify-center text-[var(--main-accent)] text-[11px] font-bold">
                    +
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-[0.73rem] font-bold text-[var(--text-main)]">
                    One Connected Team
                  </div>
                  <div className="text-[0.63rem] text-[var(--text-muted)] mt-0.5">
                    Marketing × Technology
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* =========================================================
              CONTENT
          ========================================================= */}
          <div>
            {/* LABEL */}
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.8rem] font-semibold uppercase tracking-wider mb-3 transition-all duration-300">
              {title}
            </div>

            {/* HEADING */}
            <h2 className="text-[2rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[1.7rem]">
              About <span className="gradient-text">{gradientWord}</span>
            </h2>

            {subheading && (
              <p className="text-[var(--text-muted)] text-[1.02rem] leading-relaxed mb-5">
                {subheading}
              </p>
            )}

            {/* PARAGRAPH 1 */}
            {firstPara && (
              <p className="text-[var(--text-muted)] text-[1rem] leading-[1.9] mb-5">
                {firstPara}
              </p>
            )}

            {/* PARAGRAPH 2 + inline Show More at text end */}
            {secondPara && (
              <p className="text-[var(--text-muted)] text-[1rem] leading-[1.9] mb-5">
                {secondPara}
                {hasMore && !expanded && (
                  <button
                    onClick={() => setExpanded(true)}
                    className="inline-flex items-center gap-1.5 ml-2 font-bold no-underline text-[var(--main-accent)] hover:underline transition-colors duration-300 cursor-pointer bg-transparent border-0 p-0"
                  >
                    Show More
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </p>
            )}

            {/* COLLAPSED REST */}
            {hasMore && (
              <div className={`grid transition-all duration-500 ease-out ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-5">
                    {restParas.map((para, i) => (
                      <p key={i} className="text-[var(--text-muted)] text-[1rem] leading-[1.9]">
                        {para}
                        {i === restParas.length - 1 && (
                          <button
                            onClick={() => setExpanded(false)}
                            className="inline-flex items-center gap-1.5 ml-2 font-bold no-underline text-[var(--main-accent)] hover:underline transition-colors duration-300 cursor-pointer bg-transparent border-0 p-0"
                          >
                            Show Less
                            <svg className="w-3.5 h-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* HIGHLIGHT QUOTE */}
            {firstPara && (
              <div className="border-l-4 border-[var(--main-accent)] pl-4 mb-7 mt-5 text-left">
                <p className="text-[var(--text-main)] text-[0.98rem] font-semibold leading-relaxed">
                  The goal is simple: connect {gradientWord.toLowerCase() === "eddinet" ? "marketing and technology" : "strategy and execution"} to turn digital activity into measurable business growth.
                </p>
              </div>
            )}

            {/* TRUST BAR STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[var(--border-color)] pt-6 max-[480px]:grid-cols-2">
              {stats.map((stat, i) => (
                <div key={i} className={i > 0 ? "sm:border-l sm:border-[var(--border-color)] sm:pl-6" : ""}>
                  <div className="text-[1.4rem] font-extrabold gradient-text leading-none mb-1.5">{stat.value}</div>
                  <div className="text-[0.75rem] text-[var(--text-dim)] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}