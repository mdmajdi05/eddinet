"use client";

import Image from "next/image";
import { useState } from "react";

const capabilities = [
  {
    role: "Marketing & Visibility",
    desc: "SEO, AI SEO, social media, paid acquisition and content built for organic and paid demand.",
  },
  {
    role: "Creative & Conversion",
    desc: "Brand identity, campaign creative, UI/visual systems, web and eCommerce built to convert.",
  },
  {
    role: "Software & AI",
    desc: "Custom software, SaaS, automation and AI solutions that solve real operational problems.",
  },
  {
    role: "Technology & Operations",
    desc: "Cloud, DevOps, hosting, migration, maintenance and reputation managed end-to-end.",
  },
];

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="py-[100px]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-[50px] items-center max-[1024px]:grid-cols-1 max-[1024px]:text-center">

          {/* =========================================================
              PREMIUM VISUAL / IMAGE SECTION
          ========================================================= */}
          <div className="relative min-h-[560px] flex items-center justify-center max-[1024px]:min-h-[520px] max-[640px]:min-h-[470px]">

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
            <div className="relative z-10 w-[88%] max-w-[520px]">

              {/* Back rotated layer */}
              <div className="absolute inset-0 translate-x-[-16px] translate-y-[-14px] rounded-[32px] bg-[var(--main-accent)]/12 rotate-[-4deg]" />

              {/* Back white/glass layer */}
              <div className="absolute inset-0 translate-x-[12px] translate-y-[14px] rounded-[32px] bg-[var(--bg-card)] border border-[var(--border-color)] rotate-[4deg] shadow-[var(--shadow-lg)]" />

              {/* Main image */}
              <div className="relative overflow-hidden rounded-[30px] border-[6px] border-[var(--bg-card)] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">

                <Image
                  src="/about-section.webp"
                  alt="Eddinet team collaborating in office"
                  width={1000}
                  height={200}
                  className="
  w-full
  h-[450px]
  object-cover
  max-[1024px]:h-[590px]
  max-[768px]:h-[540px]
  max-[640px]:h-[470px]
  max-[480px]:h-[410px]
"
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
            <div className="absolute z-30 top-[62px] left-[-5px] bg-[var(--bg-card)]/95 backdrop-blur-xl border border-[var(--border-color)] rounded-2xl px-5 py-4 shadow-[var(--shadow-lg)] max-[640px]:top-[25px] max-[640px]:left-0">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-[var(--tag-bg)] flex items-center justify-center text-[var(--main-accent)] text-lg font-bold">
                  ✦
                </div>

                <div>
                  <div className="text-[1.35rem] font-extrabold text-[var(--text-main)] leading-none">
                    360°
                  </div>

                  <div className="text-[0.72rem] text-[var(--text-muted)] mt-1">
                    Digital Growth
                  </div>
                </div>

              </div>
            </div>

            {/* =====================================================
                RIGHT FLOATING GROWTH CARD
            ===================================================== */}
            <div className="absolute z-30 right-[-8px] bottom-[70px] w-[195px] bg-[var(--bg-card)]/95 backdrop-blur-xl border border-[var(--border-color)] rounded-[22px] p-5 shadow-[var(--shadow-lg)] max-[1024px]:right-0 max-[640px]:bottom-[40px] max-[480px]:w-[175px]">

              <div className="flex items-center justify-between mb-4">

                <div className="w-10 h-10 rounded-xl bg-[var(--tag-bg)] flex items-center justify-center text-[var(--main-accent)] text-lg font-bold">
                  ↗
                </div>

                <span className="text-[0.62rem] font-bold tracking-[0.15em] text-[var(--main-accent)]">
                  GROWTH
                </span>

              </div>

              <div className="text-[1rem] font-extrabold text-[var(--text-main)] leading-tight">
                Integrated
                <br />
                Growth System
              </div>

              {/* Progress line */}
              <div className="relative mt-4 h-[3px] w-full bg-[var(--border-color)] rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[72%] bg-[var(--main-accent)] rounded-full" />
              </div>

              <div className="mt-2 text-[0.68rem] text-[var(--text-muted)]">
                Marketing + Technology
              </div>

            </div>

            {/* =====================================================
                BOTTOM LEFT TEAM CARD
            ===================================================== */}
            <div className="absolute z-30 bottom-[8px] left-[15px] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl px-4 py-3 shadow-[var(--shadow-lg)] max-[640px]:left-0 max-[480px]:hidden">

              <div className="flex items-center gap-3">

                {/* Avatar stack */}
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
            <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
              About Eddinet
            </div>

            {/* HEADING */}
            <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-5 text-[var(--text-main)] max-[768px]:text-[2rem]">
              Marketing Built Like a{" "}
              <span className="gradient-text">System</span>, Not a List
            </h2>

            {/* PARAGRAPH 1 */}
            <p className="text-[var(--text-muted)] text-[1.1rem] leading-relaxed mb-5">
              Eddinet is a{" "}
                <strong className="font-bold text-[#ed2344]">
                Digital Marketing & Software Agency in Delhi NCR
              </strong>{" "}
              helping businesses gain visibility, generate leads, and scale
              with the right digital technology.
            </p>

            {/* PARAGRAPH 2 */}
            <p className="text-[var(--text-muted)] text-[1.05rem] leading-relaxed mb-5">
              We bring{" "}
              <strong className="text-[var(--text-main)]">
                marketing, web, software, automation, and Cloud & DevOps
              </strong>{" "}
              together as one connected growth system, aligned around a
              single business objective.
            </p>

            {/* SHOW MORE CONTENT */}
            {showMore && (
              <>
                {/* PARAGRAPH 3 */}
                <p className="text-[var(--text-muted)] text-[1.05rem] leading-relaxed mb-8">
                  Our approach is{" "}
                  <strong className="text-[var(--text-main)]">
                    outcome-led and data-driven
                  </strong>{" "}
                  — identifying opportunities, building the right solutions,
                  and improving as your business grows.
                </p>

                {/* HIGHLIGHT */}
                <div className="border-l-4 border-[var(--main-accent)] pl-5 mb-8 text-left">
                  <p className="text-[var(--text-main)] text-[1.05rem] font-semibold leading-relaxed">
                    The goal is simple: connect marketing and technology to turn
                    digital activity into measurable business growth.
                  </p>
                </div>
              </>
            )}

            {/* SHOW MORE / SHOW LESS */}
            <div className="mb-6 max-[1024px]:text-center">
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                className="text-[0.8rem] font-semibold text-[var(--main-accent)] hover:opacity-70 transition-opacity duration-300 cursor-pointer"
              >
                {showMore ? "Show Less ↑" : "Show More ↓"}
              </button>
            </div>

            {/* CAPABILITIES */}
            <div className="grid grid-cols-2 gap-4 mb-2 max-[640px]:grid-cols-1">

              {capabilities.map((t, i) => (
                <div
                  key={i}
                  className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-md)] p-4 text-left transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                >
                  <div className="text-[0.9rem] font-bold text-[var(--text-main)] mb-1">
                    {t.role}
                  </div>

                  <div className="text-[0.8rem] text-[var(--text-muted)] leading-relaxed">
                    {t.desc}
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}