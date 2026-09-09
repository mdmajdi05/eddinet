"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services, serviceTabs } from "@/data/services";

const SHOW_COUNT = 5;

export default function Services() {
  const [tab, setTab] = useState("all");
  const [modal, setModal] = useState<typeof services[number] | null>(null);
  const [showAllFilters, setShowAllFilters] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  const filteredServices = services.filter(
    (s) => tab === "all" || s.cat === tab
  );

  const scrollStrip = (dir: 1 | -1) => {
    const el = stripRef.current;
    if (!el) return;
    const child = el.querySelector("button");
    const step = child ? child.offsetWidth + 8 : 160;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const selectTab = (key: string) => {
    setTab(key);
    if (showAllFilters) return;
    const el = stripRef.current?.querySelector(`[data-key="${key}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section id="services" className="py-[100px]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">

        {/* HEADER */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            13 Core Expertise Areas
          </div>

          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            One Partner,{" "}
            <span className="gradient-text">
              Every Growth Capability
            </span>
          </h2>

          <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[680px] mx-auto mb-10">
            Marketing, technology and infrastructure planned as connected
            parts of one growth system. Each capability below links to its
            dedicated service page.
          </p>
        </div>

        {/* =========================================================
            FILTER SECTION
            INITIAL = ORIGINAL HORIZONTAL SCROLL
            EXPANDED = TWO ROWS
        ========================================================= */}

        <div className="mb-10">

          {/* FILTER WRAPPER */}
          <div
            className={`
              relative mx-auto
              rounded-2xl
              border border-[var(--border-color)]
              bg-[var(--chip-bg)]
              transition-all duration-500
              ${
                showAllFilters
                  ? "p-3"
                  : "px-3 py-2"
              }
            `}
          >

            {/* SUBTLE GLOW */}
            <div
              className="
                absolute inset-0
                rounded-2xl
                pointer-events-none
                opacity-40
              "
              style={{
                background:
                  "radial-gradient(circle at center, rgba(var(--accent-rgb),0.08), transparent 65%)",
              }}
            />

            {/* =====================================================
                INITIAL STATE
                SAME HORIZONTAL SCROLL BEHAVIOR
            ===================================================== */}
            {!showAllFilters && (
              <div className="relative flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="Scroll left"
                  onClick={() => scrollStrip(-1)}
                  className="
                    shrink-0
                    w-9 h-9
                    rounded-full
                    border
                    border-[var(--border-color)]
                    bg-[var(--bg-card)]
                    text-[var(--text-muted)]
                    text-[1rem]
                    cursor-pointer
                    flex items-center justify-center
                    transition-all duration-300
                    hover:text-[var(--main-accent)]
                    hover:border-[rgba(var(--accent-rgb),0.35)]
                    hover:bg-[var(--bg-card-hover)]
                  "
                >
                  ‹
                </button>

                <div
                  ref={stripRef}
                  className="
                    relative
                    flex items-center gap-2
                    overflow-x-auto
                    overflow-y-hidden
                    scrollbar-hide
                    whitespace-nowrap
                    pb-0.5
                  "
                >
                  {serviceTabs.map((t) => (
                    <button
                      key={t.key}
                      data-key={t.key}
                      onClick={() => selectTab(t.key)}
                      className={`
                        relative
                        shrink-0
                        py-2.5
                        px-5
                        rounded-xl
                        font-semibold
                        text-[0.8rem]
                        cursor-pointer
                        transition-all
                        duration-300
                        border
                        ${
                          tab === t.key
                            ? `
                              text-[var(--on-primary)]
                              border-transparent
                              shadow-[0_6px_20px_rgba(var(--accent-rgb),0.25)]
                            `
                            : `
                              bg-transparent
                              border-transparent
                              text-[var(--text-muted)]
                              hover:bg-[var(--bg-card)]
                              hover:border-[var(--border-hover)]
                              hover:text-[var(--text-main)]
                            `
                        }
                      `}
                      style={
                        tab === t.key
                          ? {
                              background:
                                "var(--primary-gradient)",
                            }
                          : undefined
                      }
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  aria-label="Scroll right"
                  onClick={() => scrollStrip(1)}
                  className="
                    shrink-0
                    w-9 h-9
                    rounded-full
                    border
                    border-[var(--border-color)]
                    bg-[var(--bg-card)]
                    text-[var(--text-muted)]
                    text-[1rem]
                    cursor-pointer
                    flex items-center justify-center
                    transition-all duration-300
                    hover:text-[var(--main-accent)]
                    hover:border-[rgba(var(--accent-rgb),0.35)]
                    hover:bg-[var(--bg-card-hover)]
                  "
                >
                  ›
                </button>
              </div>
            )}

            {/* =====================================================
                EXPANDED STATE
                TWO ROW FILTER
            ===================================================== */}
            {showAllFilters && (
              <div className="relative">

                <div
                  className="
                    flex flex-wrap
                    justify-center
                    gap-2
                  "
                >
                  {serviceTabs.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setTab(t.key)}
                      className={`
                        relative
                        py-2.5
                        px-5
                        rounded-xl
                        font-semibold
                        text-[0.8rem]
                        cursor-pointer
                        transition-all
                        duration-300
                        border
                        ${
                          tab === t.key
                            ? `
                              text-[var(--on-primary)]
                              border-transparent
                              shadow-[0_6px_20px_rgba(var(--accent-rgb),0.25)]
                              scale-[1.02]
                            `
                            : `
                              bg-transparent
                              border-[var(--border-color)]
                              text-[var(--text-muted)]
                              hover:border-[var(--border-hover)]
                              hover:bg-[var(--bg-card)]
                              hover:text-[var(--text-main)]
                              hover:-translate-y-0.5
                            `
                        }
                      `}
                      style={
                        tab === t.key
                          ? {
                              background:
                                "var(--primary-gradient)",
                            }
                          : undefined
                      }
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

              </div>
            )}
          </div>

          {/* =====================================================
              SHOW MORE / SHOW LESS
          ===================================================== */}
          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={() =>
                setShowAllFilters((prev) => !prev)
              }
              className="
                group
                inline-flex
                items-center
                gap-2
                py-2
                px-4
                rounded-full
                border
                border-[var(--border-color)]
                bg-[var(--bg-card)]
                text-[var(--text-muted)]
                text-[0.75rem]
                font-semibold
                cursor-pointer
                transition-all
                duration-300
                hover:border-[rgba(var(--accent-rgb),0.35)]
                hover:text-[var(--main-accent)]
                hover:bg-[var(--bg-card-hover)]
              "
            >
              <span>
                {showAllFilters
                  ? "Show Less"
                  : "Show More"}
              </span>

              <span
                className={`
                  text-[var(--main-accent)]
                  transition-transform
                  duration-300
                  ${
                    showAllFilters
                      ? "rotate-180"
                      : "rotate-0"
                  }
                `}
              >
                ↓
              </span>
            </button>
          </div>
        </div>

        {/* =========================================================
            SERVICES GRID
            UNCHANGED
        ========================================================= */}
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {filteredServices.map((s, i) => {
            const visible = s.allItems.slice(
              0,
              SHOW_COUNT
            );

            const hiddenCount =
              s.allItems.length - SHOW_COUNT;

            return (
              <div
                key={i}
                className="
                  group
                  relative
                  bg-[var(--bg-card)]
                  border
                  border-[var(--border-color)]
                  rounded-[var(--radius-lg)]
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-transparent
                  hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.15)]
                "
                data-category={s.cat}
              >
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[var(--radius-lg)]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    pointer-events-none
                  "
                  style={{
                    background:
                      "var(--card-edge-gradient)",
                    padding: "1px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                <div className="relative">

                  {/* IMAGE */}
                  <div className="h-[260px] relative overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="
                        object-fill
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                      unoptimized
                    />

                    <div className="absolute inset-0 to-transparent" />

                    <div
                      className="
                        absolute
                        top-4
                        right-4
                        py-1
                        px-3
                        rounded-full
                        bg-[rgba(0,0,0,0.5)]
                        backdrop-blur-md
                        border
                        border-[rgba(255,255,255,0.1)]
                        text-[0.7rem]
                        font-bold
                        text-white/80
                      "
                    >
                      {s.allItems.length}+ Services
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
                      {/* Icon intentionally hidden */}
                    </div>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="p-5 pt-4">

                    <p
                      className="
                        text-[var(--text-muted)]
                        text-[0.85rem]
                        leading-relaxed
                        mb-4
                        line-clamp-4
                      "
                    >
                      {s.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">

                      {visible.map((item, j) => (
                        <div
                          key={j}
                          className="
                            flex
                            items-center
                            gap-2
                            text-[0.8rem]
                            text-[var(--text-muted)]
                            group-hover:text-[var(--text-main)]
                            transition-colors
                            duration-300
                          "
                        >
                          <span
                            className="
                              text-[var(--main-accent)]
                              font-bold
                              shrink-0
                              text-[0.75rem]
                            "
                          >
                            ✓
                          </span>

                          <span className="leading-[1.3] truncate">
                            {item}
                          </span>
                        </div>
                      ))}

                      {hiddenCount > 0 && (
                        <button
                          onClick={() => setModal(s)}
                          className="
                            flex
                            items-center
                            gap-2
                            text-[0.8rem]
                            text-[var(--main-accent)]
                            font-bold
                            cursor-pointer
                            transition-all
                            duration-300
                            hover:gap-2.5
                            bg-transparent
                            border-none
                            p-0
                          "
                        >
                          <span className="font-bold shrink-0 text-[0.75rem]">
                            ✓
                          </span>

                          <span className="leading-[1.3]">
                            +{hiddenCount} more View All →
                          </span>
                        </button>
                      )}
                    </div>

                    {/* SERVICE LINK */}
                    <div
                      className="
                        pt-4
                        border-t
                        border-[var(--border-color)]
                        group-hover:border-[rgba(var(--accent-rgb),0.2)]
                        transition-colors
                        duration-300
                      "
                    >
                      <Link
                        href={`/services/${s.slug}`}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-[var(--main-accent)]
                          font-bold
                          text-[0.85rem]
                          transition-all
                          duration-300
                          group-hover:gap-3
                        "
                      >
                        <span className="relative">
                          {s.link
                            .replace("→", "")
                            .trim()}

                          <span
                            className="
                              absolute
                              bottom-0
                              left-0
                              w-0
                              h-[2px]
                              bg-[var(--main-accent)]
                              transition-all
                              duration-300
                              group-hover:w-full
                            "
                          />
                        </span>

                        <span
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          MODAL
      ========================================================= */}
      {modal && (
        <div
          className="
            fixed
            inset-0
            z-[1000]
            flex
            items-center
            justify-center
            p-5
          "
          onClick={() => setModal(null)}
        >
          <div
            className="
              absolute
              inset-0
              bg-[rgba(0,0,0,0.8)]
              backdrop-blur-sm
            "
          />

          <div
            className="
              relative
              w-full
              max-w-[800px]
              max-h-[85vh]
              bg-[var(--modal-bg)]
              border
              border-[var(--border-color)]
              rounded-2xl
              overflow-hidden
              shadow-[0_30px_80px_rgba(0,0,0,0.6)]
              flex
              flex-col
              animate-[modalIn_0.3s_ease]
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* MODAL IMAGE */}
            <div className="relative h-[200px] overflow-hidden shrink-0">

              <Image
                src={modal.image}
                alt={modal.title}
                fill
                className="object-cover"
                unoptimized
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[var(--modal-bg)]
                  via-[rgba(11,15,25,0.5)]
                  to-transparent
                "
              />

              <button
                onClick={() => setModal(null)}
                className="
                  absolute
                  top-4
                  right-4
                  w-10
                  h-10
                  rounded-full
                  bg-[rgba(0,0,0,0.5)]
                  backdrop-blur-md
                  border
                  border-[rgba(255,255,255,0.15)]
                  text-white
                  text-[1.2rem]
                  cursor-pointer
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  hover:bg-[rgba(255,255,255,0.15)]
                  hover:scale-110
                "
              >
                ✕
              </button>

              <div className="absolute bottom-5 left-6 flex items-center gap-3">

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-[var(--main-accent)]
                    to-[rgba(var(--accent-rgb),0.6)]
                    flex
                    items-center
                    justify-center
                    text-[1.6rem]
                    shrink-0
                    shadow-[0_8px_25px_rgba(var(--accent-rgb),0.4)]
                  "
                >
                  {modal.icon}
                </div>

                <div>
                  <h3 className="text-[1.5rem] font-bold text-[var(--text-main)]">
                    {modal.title}
                  </h3>

                  <p className="text-[var(--text-muted)] text-[0.85rem]">
                    {modal.allItems.length}+ Services Available
                  </p>
                </div>

              </div>
            </div>

            {/* MODAL CONTENT */}
            <div className="p-6 overflow-y-auto flex-1">

              <p className="text-[var(--text-muted)] text-[0.95rem] mb-6 leading-relaxed">
                {modal.desc}
              </p>

              <div className="grid grid-cols-2 gap-3 max-[600px]:grid-cols-1">

                {modal.allItems.map(
                  (item, j) => (
                    <div
                      key={j}
                      className="
                        flex
                        items-center
                        gap-3
                        py-3
                        px-4
                        rounded-xl
                        bg-[var(--bg-card)]
                        border
                        border-[var(--border-color)]
                        transition-all
                        duration-300
                        hover:border-[rgba(var(--accent-rgb),0.3)]
                        hover:bg-[var(--bg-card-hover)]
                        group/item
                      "
                    >
                      <div
                        className="
                          w-8
                          h-8
                          rounded-lg
                          bg-[rgba(var(--accent-rgb),0.1)]
                          flex
                          items-center
                          justify-center
                          shrink-0
                          transition-all
                          duration-300
                          group-hover/item:bg-[rgba(var(--accent-rgb),0.2)]
                        "
                      >
                        <span className="text-[var(--main-accent)] font-bold text-[0.75rem]">
                          ✓
                        </span>
                      </div>

                      <span className="text-[0.85rem] text-[var(--text-main)] font-medium">
                        {item}
                      </span>
                    </div>
                  )
                )}

              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="p-6 pt-0 shrink-0">
              <button
                onClick={() => setModal(null)}
                className="
                  w-full
                  py-3.5
                  rounded-xl
                  font-bold
                  text-[0.95rem]
                  cursor-pointer
                  transition-all
                  duration-300
                  border-none
                  text-[var(--on-primary)]
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_30px_rgba(var(--accent-rgb),0.3)]
                "
                style={{
                  background:
                    "var(--primary-gradient)",
                }}
              >
                Get Started with {modal.title} →
              </button>
            </div>

          </div>
        </div>
      )}

      {/* =========================================================
          ANIMATION + SCROLLBAR
      ========================================================= */}
      <style>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }

          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}