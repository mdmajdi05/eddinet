"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

type ViewportCollapseProps = {
  children: ReactNode;
  /** Pixels kept free under the content when it has to be collapsed. */
  breathingRoom?: number;
  /** Extra classes for the "Show More" / "Show Less" toggle. */
  toggleClassName?: string;
  /**
   * Line budget. When set, the "Show More" toggle only appears if the content
   * actually renders on more lines than this — short copy never gets a toggle,
   * however small the viewport is.
   */
  maxLines?: number;
};

/**
 * Caps the visible height of its children so the surrounding <section> never
 * grows past the viewport, and offers a "Show More" toggle when it has to.
 *
 * The children are rendered completely untouched — no measuring, splitting or
 * re-flowing happens in here. Only the box they sit in is clipped, so whatever
 * layout the child produces (line breaks, spacing, wrapping) stays exactly as
 * it normally would.
 */
export default function ViewportCollapse({
  children,
  breathingRoom = 28,
  toggleClassName = "",
  maxLines,
}: ViewportCollapseProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [collapsedHeight, setCollapsedHeight] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    const section = el?.closest("section");
    if (!el || !(section instanceof HTMLElement)) return;

    const measure = () => {
      // Height of the section minus this box. Reading the *current* box keeps
      // the number stable whether we are collapsed or already expanded, so no
      // un-collapse/re-measure round trip is needed.
      const rest = section.offsetHeight - el.offsetHeight;
      const available = Math.max(
        120,
        window.innerHeight - rest - breathingRoom,
      );
      // Two conditions, both required:
      //   - the content is taller than the room the viewport leaves for it, and
      //   - it renders on more lines than the caller's budget.
      // Short copy therefore never grows a "Show More" button, no matter how
      // short the viewport gets.
      const overHeight = el.scrollHeight > available + 1;
      const overLines = maxLines === undefined || countLines(el) > maxLines;
      setCollapsedHeight(overHeight && overLines ? available : null);
    };

    // Runs before paint, so the hero never flashes at full height first.
    measure();
    setExpanded(false);

    // Web fonts settling changes the wrapping, hence the height.
    if (document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => undefined);
    }

    // The available height is driven by the viewport, so watch the root box.
    // Deliberately NOT observing `el` itself: collapsing changes this box's
    // height, which would re-trigger measure and make the two states (collapsed
    // / un-collapsed, the toggle taking a few px) chase each other. Every layout
    // change that can reflow the text is a viewport change, already covered.
    const observer = new ResizeObserver(measure);
    observer.observe(document.documentElement);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [breathingRoom, maxLines]);

  const collapsed = collapsedHeight !== null && !expanded;

  return (
    <>
      <div
        ref={wrapRef}
        style={
          collapsed
            ? { maxHeight: collapsedHeight, overflow: "hidden" }
            : undefined
        }
      >
        {children}
      </div>
      {collapsedHeight !== null && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className={`inline-flex items-center gap-1.5 font-bold no-underline text-[var(--main-accent)] hover:underline transition-colors duration-300 cursor-pointer bg-transparent border-0 p-0 ${toggleClassName}`}
        >
          {expanded ? "Show Less" : "Show More"}
          <svg
            className={`w-3.5 h-3.5 ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}

/**
 * Counts the lines the content actually renders on.
 *
 * A Range over the text nodes reports one client rect per rendered line box,
 * so the answer is read straight off the layout. Rects sharing a top are the
 * same visual line. Hidden measurement copies (`aria-hidden`) are skipped so
 * they cannot be counted as an extra line.
 */
function countLines(el: HTMLElement): number {
  const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 20;
  // Comfortably below the gap between two lines, comfortably above the
  // sub-pixel jitter of two rects that belong to the same line.
  const tolerance = Math.max(1, lineHeight * 0.4);
  const range = document.createRange();
  const tops: number[] = [];

  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      if (!node.textContent?.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest('[aria-hidden="true"]')) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    range.selectNodeContents(node);
    for (const rect of Array.from(range.getClientRects())) {
      if (rect.width < 1 || rect.height < 1) continue;
      if (!tops.some((top) => Math.abs(top - rect.top) <= tolerance)) {
        tops.push(rect.top);
      }
    }
  }

  return Math.max(tops.length, 1);
}
