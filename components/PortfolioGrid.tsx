"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Link from "next/link";

import {
  portfolioProjects,
  projectCategories,
  type PortfolioProject,
} from "@/data/portfolio";

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

/* =========================================================
   PROJECT CARD
   DESKTOP LIVE WEBSITE PREVIEW
   ========================================================= */

function ProjectCard({ p }: { p: PortfolioProject }) {
  const [hovered, setHovered] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  const cardRef = useRef<HTMLDivElement | null>(null);

  /*
   * IMPORTANT
   *
   * The website ALWAYS renders at desktop width.
   *
   * It does NOT use the small portfolio-card width
   * as its browser viewport.
   */

  const DESKTOP_WIDTH = 1440;

  /*
   * Long virtual desktop page.
   *
   * This gives us enough content to create the
   * top-to-bottom hover preview.
   */

  const DESKTOP_HEIGHT = 3440;

  /*
   * How far the website moves upward while hovering.
   *
   * Because the desktop canvas is scaled afterwards,
   * this remains proportional to the desktop layout.
   */

  const SCROLL_DISTANCE = 1750;

  /* =========================================================
     GET ACTUAL CARD WIDTH
     ========================================================= */

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const updateWidth = () => {
      const width =
        element.getBoundingClientRect().width;

      setCardWidth(width);
    };

    updateWidth();

    const resizeObserver =
      new ResizeObserver(() => {
        updateWidth();
      });

    resizeObserver.observe(element);

    window.addEventListener(
      "resize",
      updateWidth
    );

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener(
        "resize",
        updateWidth
      );
    };
  }, []);

  /* =========================================================
     DESKTOP SCALE
     ========================================================= */

  /*
   * Example:
   *
   * Card width = 450px
   * Desktop width = 1440px
   *
   * Scale:
   *
   * 450 / 1440 = 0.3125
   *
   * So the website still thinks it is 1440px wide,
   * but visually it fits inside the 450px card.
   */

  const desktopScale =
    cardWidth > 0
      ? cardWidth / DESKTOP_WIDTH
      : 0.3;

  /* =========================================================
     PROJECT CARD
     ========================================================= */

  const card = (
    <div
      ref={cardRef}
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-[20px]
        border
        border-[var(--border-color)]
        bg-[var(--bg-card)]
        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-[rgba(var(--accent-rgb),0.45)]
        hover:shadow-[0_25px_60px_rgba(var(--accent-rgb),0.16)]
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* =================================================
          WEBSITE PREVIEW WINDOW
          ================================================= */}

      <div
  className="
    relative
    w-full
    h-[450px]

    max-[1200px]:h-[450px]
    max-[900px]:h-[450px]
    max-[650px]:h-[450px]

    overflow-hidden
    bg-white
  "
>

        {/* =================================================
            DESKTOP WEBSITE CANVAS
            ================================================= */}

        {p.url ? (
          <div
            className="
              absolute
              top-0
              left-0
              overflow-hidden
            "
            style={{
              /*
               * The actual browser canvas remains 1440px.
               */
              width: `${DESKTOP_WIDTH}px`,
              height: `${DESKTOP_HEIGHT}px`,

              /*
               * Scale the desktop website down to
               * exactly fit the portfolio card.
               */
              transform: `scale(${desktopScale})`,

              transformOrigin:
                "top left",

              /*
               * Do NOT use width: 100% here.
               *
               * 1440px is intentional because we want
               * the website to stay in desktop layout.
               */
            }}
          >

            <iframe
              src={p.url}
              title={`${p.title} desktop website preview`}
              loading="lazy"
              scrolling="no"
              className="
                absolute
                top-0
                left-0

                border-0
                bg-white

                pointer-events-none

                will-change-transform
              "
              style={{
                /*
                 * IMPORTANT:
                 *
                 * iframe browser viewport = 1440px
                 *
                 * Therefore responsive websites should
                 * detect this as desktop.
                 */

                width: `${DESKTOP_WIDTH}px`,
                height: `${DESKTOP_HEIGHT}px`,

                /*
                 * Hover:
                 *
                 * TOP
                 * ↓
                 * middle
                 * ↓
                 * bottom
                 */

                transform: hovered
                  ? `translateY(-${SCROLL_DISTANCE}px)`
                  : "translateY(0px)",

                transitionProperty:
                  "transform",

                transitionDuration:
                  hovered
                    ? "10000ms"
                    : "700ms",

                transitionTimingFunction:
                  hovered
                    ? "linear"
                    : "ease-out",
              }}
            />

          </div>
        ) : (

          /* =================================================
             NO URL
             ================================================= */

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-[var(--bg-card)]
            "
          >
            <span
              className="
                text-sm
                font-semibold
                text-[var(--text-muted)]
              "
            >
              Preview unavailable
            </span>
          </div>
        )}

        {/* =================================================
            TOP FADE
            ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            top-0
            left-0
            right-0
            h-10
            z-20

            bg-gradient-to-b
            from-black/[0.07]
            to-transparent
          "
        />

        {/* =================================================
            BOTTOM FADE
            ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            h-20
            z-20

            bg-gradient-to-t
            from-black/[0.12]
            to-transparent
          "
        />

        {/* =================================================
            LIVE BADGE
            ================================================= */}

        {p.url && (
          <div
            className="
              pointer-events-none

              absolute
              top-4
              right-4
              z-30

              flex
              items-center
              gap-2

              rounded-full

              border
              border-black/10

              bg-white/90
              backdrop-blur-md

              px-3
              py-1.5

              shadow-[0_8px_25px_rgba(0,0,0,0.12)]
            "
          >

            <span
              className="
                block
                w-1.5
                h-1.5
                rounded-full
                bg-green-500
              "
            />

            <span
              className="
                text-[0.65rem]
                font-bold
                tracking-wide
                text-black/70
              "
            >
              LIVE
            </span>

          </div>
        )}

      </div>
    </div>
  );

  /* =======================================================
     EXTERNAL PROJECT LINK
     ======================================================= */

  if (!p.url) {
    return card;
  }

  return (
    <Link
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline"
      aria-label={`Visit ${p.title}`}
    >
      {card}
    </Link>
  );
}

/* =========================================================
   PORTFOLIO GRID
   ========================================================= */

export default function PortfolioGrid({
  initialCategory = "all",
  hideControls = false,
}: {
  initialCategory?: string;
  hideControls?: boolean;
}) {
  const [active, setActive] =
    useState(initialCategory);

  /* =========================================================
     FILTER PROJECTS
     ========================================================= */

  const filteredProjects =
    active === "all"
      ? portfolioProjects
      : portfolioProjects.filter(
          (p) => p.category === active
        );

  const activeCategory =
    projectCategories.find(
      (c) => c.key === active
    );

  return (
    <div className="w-full">

      {/* =================================================
          FILTER CONTROLS
          ================================================= */}

      {!hideControls && (
        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-2.5
            mb-10
          "
        >

          {/* ALL PROJECTS */}

          <button
            type="button"
            onClick={() => setActive("all")}
            className="
              py-2.5
              px-5
              rounded-full
              font-bold
              text-[0.85rem]
              cursor-pointer
              transition-all
              duration-300
              border
            "
            style={{
              background:
                active === "all"
                  ? "var(--primary-gradient)"
                  : "var(--chip-bg)",

              borderColor:
                active === "all"
                  ? "transparent"
                  : "var(--border-color)",

              color:
                active === "all"
                  ? "var(--on-primary)"
                  : "var(--text-main)",
            }}
          >
            All Projects
          </button>

          {/* CATEGORIES */}

          {projectCategories.map(
            (category) => {
              const isActive =
                active === category.key;

              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() =>
                    setActive(category.key)
                  }
                  className="
                    py-2.5
                    px-5
                    rounded-full
                    font-bold
                    text-[0.85rem]
                    cursor-pointer
                    transition-all
                    duration-300
                    border
                  "
                  style={{
                    background: isActive
                      ? "var(--primary-gradient)"
                      : "var(--chip-bg)",

                    borderColor: isActive
                      ? "transparent"
                      : "var(--border-color)",

                    color: isActive
                      ? "var(--on-primary)"
                      : "var(--text-main)",
                  }}
                >
                  {category.label}
                </button>
              );
            }
          )}

        </div>
      )}

      {/* =================================================
          CATEGORY HEADER
          ================================================= */}

      {hideControls &&
        activeCategory && (
          <div className="mb-10">

            <div
              className="
                flex
                items-center
                gap-3
                mb-3
              "
            >

              <span
                className="
                  text-[1.7rem]
                  leading-none
                "
              >
                {getIcon(
                  activeCategory.label
                )}
              </span>

              <h1
                className="
                  text-[2.4rem]
                  font-extrabold
                  leading-[1.15]
                  text-[var(--text-main)]

                  max-[768px]:text-[1.9rem]
                "
              >
                {activeCategory.label}
              </h1>

            </div>

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  inline-flex
                  items-center
                  py-1.5
                  px-3

                  rounded-full

                  bg-[var(--tag-bg)]

                  border
                  border-[var(--tag-border)]

                  text-[0.75rem]
                  font-bold

                  text-[var(--main-accent)]
                "
              >
                {filteredProjects.length}{" "}
                {filteredProjects.length === 1
                  ? "Project"
                  : "Projects"}
              </span>

              <span
                className="
                  h-px
                  flex-1
                  bg-[var(--border-color)]
                "
              />

            </div>

          </div>
        )}

      {/* =================================================
          ALL PORTFOLIO HEADER
          ================================================= */}

      {!hideControls && (
        <div
          className="
            mb-10
            text-center
          "
        >

          <h1
            className="
              text-[2.6rem]
              font-extrabold
              text-[var(--text-main)]
              mb-3

              max-[768px]:text-[2rem]
            "
          >
            Our{" "}
            <span className="gradient-text">
              Portfolio
            </span>
          </h1>

          <p
            className="
              max-w-[650px]
              mx-auto

              text-[1rem]
              leading-[1.7]

              text-[var(--text-muted)]
            "
          >
            Explore websites, digital products,
            software, SaaS, AI and other digital
            work created by Eddinet.
          </p>

        </div>
      )}

      {/* =================================================
          PROJECT GRID
          ================================================= */}

      {filteredProjects.length > 0 ? (

        <div
          className="
            grid
            grid-cols-3
            gap-x-6
            gap-y-12

            max-[1050px]:grid-cols-2

            max-[650px]:grid-cols-1
            max-[650px]:gap-y-10
          "
        >

          {filteredProjects.map(
            (project) => (

              <div
                key={project.id}
                className="min-w-0"
              >

                {/* ==========================================
                    LIVE WEBSITE PREVIEW CARD
                    ========================================== */}

                <ProjectCard
                  p={project}
                />

                {/* ==========================================
                    INFORMATION BELOW CARD
                    ========================================== */}

                <div className="pt-4 px-1">

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >

                    <div>

                      <h3
                        className="
                          text-[1.05rem]
                          font-bold
                          leading-[1.3]
                          text-[var(--text-main)]
                          mb-1
                        "
                      >
                        {project.title}
                      </h3>

                      {/* =================================================
                          FIXED:
                          portfolioProjects has `tags`, not `tag`
                          ================================================= */}

                      {project.tags?.length > 0 && (
                        <p
                          className="
                            text-[0.78rem]
                            font-semibold
                            text-[var(--main-accent)]
                          "
                        >
                          {project.tags[0]}
                        </p>
                      )}

                    </div>

                    {project.url && (
                      <span
                        className="
                          shrink-0
                          text-[0.85rem]
                          font-bold
                          text-[var(--main-accent)]
                        "
                      >
                        ↗
                      </span>
                    )}

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      ) : (

        /* =================================================
           EMPTY STATE
           ================================================= */

        <div
          className="
            py-20
            text-center

            rounded-2xl

            border
            border-[var(--border-color)]
          "
        >
          <p
            className="
              text-[var(--text-muted)]
            "
          >
            No projects available in this
            category yet.
          </p>
        </div>

      )}

      {/* =================================================
          CTA
          ================================================= */}

      <div
        className="
          text-center
          mt-16
        "
      >

        <Link
          href="/contact"
          className="
            inline-flex
            items-center
            justify-center
            gap-2.5

            py-3.5
            px-7

            rounded-full

            font-bold
            text-[0.95rem]

            no-underline

            transition-all
            duration-300

            text-[var(--on-primary)]

            hover:-translate-y-[2px]

            shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.35)]
          "
          style={{
            background:
              "var(--primary-gradient)",
          }}
        >
          Start Your Project →
        </Link>

      </div>

    </div>
  );
}