"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { services } from "@/data/services";

type MegaMenuCategory = {
  slug: string;
  icon: string;
  title: string;
  groups: { label: string; items: string[] }[] | null;
  items: string[] | null;
  extraHeading?: { icon: string; title: string; items: string[] };
};

const categories: MegaMenuCategory[] = services.map((s) => ({
  slug: s.slug,
  icon: s.icon,
  title: s.title.toUpperCase(),
  groups: s.groups ?? null,
  items: s.groups ? null : s.allItems,
  extraHeading: s.extraHeading,
}));

export default function MegaMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  function handleButtonClick(e: React.MouseEvent) {
    e.stopPropagation();
    setOpen((prev) => !prev);
  }

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1 text-[0.95rem] font-medium transition-all duration-300 hover:text-[var(--main-accent)] bg-transparent border-none cursor-pointer py-0"
        style={{ color: open ? "var(--main-accent)" : "var(--chrome-text-muted)" }}
        onClick={handleButtonClick}
      >
        Services
        <span className={`text-[10px] transition-transform duration-200 inline-block ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      <div
        className="z-[999] pointer-events-auto"
        style={{
          position: "fixed",
          top: "72px",
          left: "50%",
          transform: `translateX(-50%) translateY(${open ? "0" : "-12px"})`,
          width: "min(1370px, 92vw)",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transition: "opacity .2s ease, transform .2s ease, visibility .2s ease",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div
          className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
          style={{
            background: "var(--modal-bg)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div className="max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[rgba(255,255,255,0.15)] scrollbar-track-transparent">
          <div className="p-[30px] pb-[20px] max-[1250px]:p-6 max-[600px]:p-[18px]">
            <div className="grid grid-cols-5 gap-x-[42px] gap-y-[35px] max-[1250px]:grid-cols-3 max-[1250px]:gap-x-6 max-[900px]:grid-cols-2 max-[900px]:gap-5 max-[600px]:grid-cols-1 max-[600px]:gap-6">
              {categories.map((cat, ci) => (
                <div key={ci}>
<h3
                    className="text-[1.15rem] font-bold leading-[1.25] mb-4 flex items-start gap-2"
                    style={{ color: "var(--main-accent)" }}
                  >
                    <Link
                      href={`/services/${cat.slug}`}
                      onClick={() => setOpen(false)}
                      className="text-[1.15rem] font-bold leading-[1.25] flex items-start gap-2 no-underline transition-colors duration-150 hover:opacity-85"
                      style={{ color: "var(--main-accent)" }}
                    >
                      <span className="text-[17px] shrink-0">{cat.icon}</span>
                      {cat.title}
                    </Link>
                  </h3>

                  {cat.groups ? (
                    cat.groups.map((grp, gi) => (
                      <div key={gi} className="mb-4 last:mb-0">
                        <div
                          className="text-[0.8rem] font-bold mb-1.5 flex items-center gap-1.5"
                          style={{ color: "var(--text-main)" }}
                        >
                          <span style={{ color: "var(--main-accent)", fontWeight: 900 }}>›</span>
                          {grp.label}
                        </div>
                        <ul className="list-none p-0 m-0">
                          {grp.items.map((item, ii) => (
                            <li key={ii} className="mb-2.5 last:mb-0">
                              <Link
                                href={`/services/${cat.slug}`}
                                className="text-[0.85rem] leading-[1.35] flex items-start no-underline transition-all duration-150 hover:translate-x-[3px]"
                                style={{ color: "var(--text-muted)" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--main-accent)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                                onClick={() => setOpen(false)}
                              >
                                <span className="mr-2 mt-0.5 text-[12px] font-bold shrink-0" style={{ color: "var(--main-accent)" }}>✓</span>
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <>
                      <ul className="list-none p-0 m-0">
                        {cat.items!.map((item, ii) => (
                          <li key={ii} className="mb-2.5 last:mb-0">
                            <Link
                              href={`/services/${cat.slug}`}
                              className="text-[0.85rem] leading-[1.35] flex items-start no-underline transition-all duration-150 hover:translate-x-[3px]"
                              style={{ color: "var(--text-muted)" }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--main-accent)")}
                              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                              onClick={() => setOpen(false)}
                            >
                              <span className="mr-2 mt-0.5 text-[12px] font-bold shrink-0" style={{ color: "var(--main-accent)" }}>✓</span>
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {cat.extraHeading && (
                        <div className="mt-5">
                          <h4
                            className="text-[1.15rem] font-bold leading-[1.25] mb-4 flex items-start gap-2"
                            style={{ color: "var(--main-accent)" }}
                          >
                            <span className="text-[17px] shrink-0">{cat.extraHeading.icon}</span>
                            {cat.extraHeading.title}
                          </h4>
                          <ul className="list-none p-0 m-0">
                            {cat.extraHeading.items.map((item, ii) => (
                              <li key={ii} className="mb-2.5 last:mb-0">
                                <Link
                                  href={`/services/${cat.slug}`}
                                  className="text-[0.85rem] leading-[1.35] flex items-start no-underline transition-all duration-150 hover:translate-x-[3px]"
                                  style={{ color: "var(--text-muted)" }}
                                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--main-accent)")}
                                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="mr-2 mt-0.5 text-[12px] font-bold shrink-0" style={{ color: "var(--main-accent)" }}>✓</span>
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
</>
                  )}
                </div>
              ))}
            </div>
          </div>
          </div>

          <div
            className="flex items-center justify-between px-[38px] py-5 border-t max-[1250px]:px-6 max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-4"
            style={{ borderColor: "var(--border-color)" }}
          >
            <div className="text-[0.85rem]" style={{ color: "var(--text-muted)" }}>
              <strong style={{ color: "var(--text-main)" }}>Looking for something specific?</strong>{" "}
              We can build a custom solution around your business.
            </div>
            <Link
              href="/services"
              className="shrink-0 py-3 px-5 rounded-lg text-[0.8rem] font-bold no-underline text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--primary-gradient)" }}
              onClick={() => setOpen(false)}
            >
              VIEW ALL SERVICES →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
