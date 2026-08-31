"use client";
import { useState } from "react";
import Image from "next/image";
import { services, serviceTabs } from "@/data/services";

const SHOW_COUNT = 5;

export default function Services() {
  const [tab, setTab] = useState("all");
  const [modal, setModal] = useState<typeof services[number] | null>(null);

  return (
    <section id="services" className="py-[100px]">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-3xl text-[var(--main-accent)] text-[0.85rem] font-semibold uppercase tracking-wider mb-4 transition-all duration-300">
            Our Core Expertise
          </div>
          <h2 className="text-[2.5rem] font-extrabold leading-[1.2] mb-4 text-[var(--text-main)] max-[768px]:text-[2rem]">
            High-Impact Growth <span className="gradient-text">Services</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[1.1rem] max-w-[650px] mx-auto mb-10">
            Tailored, transparent, and performance-backed digital solutions designed for predictable scalability.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {serviceTabs.map((t) => (
            <button
              key={t.key}
              className={`py-2 px-5 rounded-full font-semibold text-[0.8rem] cursor-pointer transition-all duration-300 border ${
                tab === t.key
                  ? "text-[var(--on-primary)] border-transparent"
                  : "bg-[var(--chip-bg)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--text-main)]"
              }`}
              style={tab === t.key ? { background: "var(--primary-gradient)" } : undefined}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {services.filter((s) => tab === "all" || s.cat === tab).map((s, i) => {
            const visible = s.allItems.slice(0, SHOW_COUNT);
            const hiddenCount = s.allItems.length - SHOW_COUNT;
            return (
              <div
                key={i}
                className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_20px_50px_rgba(var(--accent-rgb),0.15)]"
                data-category={s.cat}
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

                <div className="relative">
                  <div className="h-[160px] relative overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,25,1)] via-[rgba(11,15,25,0.5)] to-transparent" />

                    <div className="absolute top-4 right-4 py-1 px-3 rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-[0.7rem] font-bold text-white/80">
                      {s.allItems.length}+ Services
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--main-accent)] to-[rgba(var(--accent-rgb),0.6)] flex items-center justify-center text-[1.4rem] shrink-0 shadow-[0_8px_25px_rgba(var(--accent-rgb),0.35)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_12px_35px_rgba(var(--accent-rgb),0.5)]">
                        {s.icon}
                      </div>
                      <h3 className="text-[1.15rem] font-bold text-white leading-tight">{s.title}</h3>
                    </div>
                  </div>

                  <div className="p-5 pt-4">
                    <p className="text-[var(--text-muted)] text-[0.85rem] leading-relaxed mb-4 line-clamp-4">
                      {s.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                      {visible.map((item, j) => (
                        <div key={j} className="flex items-center gap-2 text-[0.8rem] text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors duration-300">
                          <span className="text-[var(--main-accent)] font-bold shrink-0 text-[0.75rem]">✓</span>
                          <span className="leading-[1.3] truncate">{item}</span>
                        </div>
                      ))}
                      {hiddenCount > 0 && (
                        <button
                          onClick={() => setModal(s)}
                          className="flex items-center gap-2 text-[0.8rem] text-[var(--main-accent)] font-bold cursor-pointer transition-all duration-300 hover:gap-2.5 bg-transparent border-none p-0"
                        >
                          <span className="font-bold shrink-0 text-[0.75rem]">✓</span>
                          <span className="leading-[1.3]">+{hiddenCount} more View All →</span>
                        </button>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[var(--border-color)] group-hover:border-[rgba(var(--accent-rgb),0.2)] transition-colors duration-300">
                      <a href="#" className="inline-flex items-center gap-2 text-[var(--main-accent)] font-bold text-[0.85rem] transition-all duration-300 group-hover:gap-3">
                        <span className="relative">
                          {s.link.replace("→", "").trim()}
                          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--main-accent)] transition-all duration-300 group-hover:w-full" />
                        </span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {modal && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-5"
          onClick={() => setModal(null)}
        >
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm" />
          <div
            className="relative w-full max-w-[800px] max-h-[85vh] bg-[var(--modal-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] flex flex-col animate-[modalIn_0.3s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[200px] overflow-hidden shrink-0">
              <Image
                src={modal.image}
                alt={modal.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--modal-bg)] via-[rgba(11,15,25,0.5)] to-transparent" />
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] text-white text-[1.2rem] cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-[rgba(255,255,255,0.15)] hover:scale-110"
              >
                ✕
              </button>
              <div className="absolute bottom-5 left-6 flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--main-accent)] to-[rgba(var(--accent-rgb),0.6)] flex items-center justify-center text-[1.6rem] shrink-0 shadow-[0_8px_25px_rgba(var(--accent-rgb),0.4)]">
                  {modal.icon}
                </div>
                <div>
                  <h3 className="text-[1.5rem] font-bold text-[var(--text-main)]">{modal.title}</h3>
                  <p className="text-[var(--text-muted)] text-[0.85rem]">{modal.allItems.length}+ Services Available</p>
                </div>
              </div>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <p className="text-[var(--text-muted)] text-[0.95rem] mb-6 leading-relaxed">{modal.desc}</p>

              <div className="grid grid-cols-2 gap-3 max-[600px]:grid-cols-1">
                {modal.allItems.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] transition-all duration-300 hover:border-[rgba(var(--accent-rgb),0.3)] hover:bg-[var(--bg-card-hover)] group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center shrink-0 transition-all duration-300 group-hover/item:bg-[rgba(var(--accent-rgb),0.2)]">
                      <span className="text-[var(--main-accent)] font-bold text-[0.75rem]">✓</span>
                    </div>
                    <span className="text-[0.85rem] text-[var(--text-main)] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 pt-0 shrink-0">
              <button
                onClick={() => setModal(null)}
                className="w-full py-3.5 rounded-xl font-bold text-[0.95rem] cursor-pointer transition-all duration-300 border-none text-[var(--on-primary)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(var(--accent-rgb),0.3)]"
                style={{ background: "var(--primary-gradient)" }}
              >
                Get Started with {modal.title} →
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </section>
  );
}
