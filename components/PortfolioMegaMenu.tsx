"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { projectCategories } from "@/data/portfolio";

export default function PortfolioMegaMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function handleMouseEnter() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  }

  function handleButtonClick(e: React.MouseEvent) {
    e.stopPropagation();
    setOpen((prev) => !prev);
  }

  function getIcon(label: string) {
    switch (label) {
      case "Websites & Portals":
        return "🌐";
      case "eCommerce & D2C":
        return "🛒";
      case "Software & SaaS":
        return "⚙️";
      case "AI & Automation":
        return "🤖";
      case "Mobile Apps":
        return "📱";
      case "SEO":
        return "🔍";
      case "Paid Media & Social":
        return "📣";
      case "Content & Design":
        return "🎨";
      case "Cloud, Hosting & DevOps":
        return "☁️";
      default:
        return "✦";
    }
  }

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* NAV BUTTON */}

      <button
        type="button"
        onClick={handleButtonClick}
        className="
          flex
          items-center
          gap-1
          py-0
          bg-transparent
          border-none
          cursor-pointer
          text-[0.95rem]
          font-medium
          transition-all
          duration-300
          hover:text-[var(--main-accent)]
        "
        style={{
          color: open
            ? "var(--main-accent)"
            : "var(--chrome-text-muted)",
        }}
      >
        Portfolio

        <span
          className={`
            inline-block
            text-[10px]
            transition-transform
            duration-200
            ${open ? "rotate-180" : ""}
          `}
        >
          ▼
        </span>
      </button>


      {/* MEGA MENU */}

      <div
        className="z-[999]"
        style={{
          position: "fixed",
          top: "72px",
          left: "50%",
          width: "min(1370px, 92vw)",
          transform: `translateX(-50%) translateY(${
            open ? "0" : "-12px"
          })`,
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transition:
            "opacity .2s ease, transform .2s ease, visibility .2s ease",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div
          className="
            overflow-hidden
            rounded-2xl
            shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          "
          style={{
            background: "var(--modal-bg)",
            border: "1px solid var(--border-color)",
          }}
        >
          {/* CATEGORY AREA */}

          <div
            className="
              max-h-[70vh]
              overflow-y-auto
              scrollbar-thin
              scrollbar-thumb-[rgba(255,255,255,0.15)]
              scrollbar-track-transparent
            "
          >
            <div
              className="
                p-[30px]
                pb-[25px]

                max-[1250px]:p-6
                max-[600px]:p-[18px]
              "
            >
              <div
                className="
                  grid
                  grid-cols-5
                  gap-x-[42px]
                  gap-y-[35px]

                  max-[1250px]:grid-cols-3
                  max-[1250px]:gap-x-6

                  max-[900px]:grid-cols-2
                  max-[900px]:gap-5

                  max-[600px]:grid-cols-1
                  max-[600px]:gap-6
                "
              >
                {projectCategories.map((cat) => (
                  <div key={cat.key}>
                    {/* CATEGORY TITLE */}

                    <Link
                      href={`/portfolio/${cat.key}`}
                      onClick={() => setOpen(false)}
                      className="
                        flex
                        items-start
                        gap-2
                        mb-3
                        no-underline
                        transition-opacity
                        duration-200
                        hover:opacity-75
                      "
                      style={{
                        color: "var(--main-accent)",
                      }}
                    >
                      <span className="text-[17px] shrink-0 leading-none">
                        {getIcon(cat.label)}
                      </span>

                      <span className="text-[1rem] font-bold leading-[1.3]">
                        {cat.label}
                      </span>
                    </Link>

                    {/* PROJECT LINK */}

                    <Link
                      href={`/portfolio/${cat.key}`}
                      onClick={() => setOpen(false)}
                      className="
                        flex
                        items-start
                        no-underline
                        text-[0.84rem]
                        leading-[1.4]
                        transition-all
                        duration-150
                        hover:translate-x-[3px]
                      "
                      style={{
                        color: "var(--text-muted)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color =
                          "var(--main-accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          "var(--text-muted)";
                      }}
                    >
                      <span
                        className="mr-2 mt-[1px] text-[11px] font-bold"
                        style={{
                          color: "var(--main-accent)",
                        }}
                      >
                        ✓
                      </span>

                      View {cat.label} Projects
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* BOTTOM BAR */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-5
              px-[38px]
              py-5
              border-t

              max-[1250px]:px-6

              max-[600px]:
              flex-col
              max-[600px]:items-start
              max-[600px]:gap-4
            "
            style={{
              borderColor: "var(--border-color)",
            }}
          >
            <div
              className="text-[0.85rem] leading-relaxed"
              style={{
                color: "var(--text-muted)",
              }}
            >
              <strong
                style={{
                  color: "var(--text-main)",
                }}
              >
                Explore our digital work.
              </strong>{" "}
              Browse projects by capability.
            </div>

            <Link
              href="/portfolio"
              onClick={() => setOpen(false)}
              className="
                shrink-0
                py-3
                px-5
                rounded-lg
                text-[0.8rem]
                font-bold
                no-underline
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
              style={{
                background: "var(--primary-gradient)",
              }}
            >
              VIEW ALL PROJECTS →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}