"use client";

import { useLayoutEffect, useRef, useState } from "react";

type AdaptiveLinesProps = {
  text: string;
  /** Class applied to the wrapping <p> element. */
  className?: string;
  /** Class applied to every arranged line (defaults to a block element). */
  lineClassName?: string;
  /** Spacing class added after the first arranged line. */
  spacing?: string;
  /** Pixels of tolerance before we decide the text wraps to a second line. */
  tolerance?: number;
};

/**
 * Splits a paragraph into sentences separated by spans with a small gap — but
 * ONLY when the paragraph would actually wrap onto more than one line in its
 * container. If the content fits on a single line, it is left untouched.
 *
 * Rule used here ("only break what already flows past one line"):
 *   1. The plain single-line text is measured against the container width.
 *   2. If it fits on 1 line  -> plain paragraph, no layout change.
 *   3. If it wraps to 2+ lines -> each sentence (and dash-separated clause)
 *      is placed on its own line with a small gap.
 *   4. Text content is never changed, only arranged.
 */
export default function AdaptiveLines({
  text,
  className = "",
  lineClassName = "block",
  spacing = "mt-3",
  tolerance = 1,
}: AdaptiveLinesProps) {
  const wrapRef = useRef<HTMLParagraphElement | null>(null);
  const plainRef = useRef<HTMLSpanElement | null>(null);
  const [arranged, setArranged] = useState(false);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const plain = plainRef.current;
    if (!wrap || !plain) return;

    const measure = () => {
      setArranged(plain.scrollWidth > wrap.clientWidth + tolerance);
    };

    // Measure before the first paint so there is no visible "flash" of the
    // unarranged paragraph.
    measure();

    // Custom fonts may settle after first paint and change wrapping.
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => undefined);
    }

    // Re-evaluate when the container shrinks/grows (e.g. mobile vs desktop).
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(wrap);
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [text, tolerance]);

  const normalized = text.replace(/\s+/g, " ").trim();
  const lines = sentenceLines(text);

  return (
    <p ref={wrapRef} className={className}>
      {arranged ? (
        lines.map((line, index) => (
          <span
            key={index}
            className={`${lineClassName}${index > 0 ? ` ${spacing}` : ""}`}
          >
            {line}
          </span>
        ))
      ) : (
        <span>{normalized}</span>
      )}
      {/* Hidden measurer: intrinsic on-screen width of the text as a single line. */}
      <span
        ref={plainRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {normalized}
      </span>
    </p>
  );
}

/** Split text into paragraph -> sentence -> dash-clause lines, preserving content. */
function sentenceLines(text: string): string[] {
  return text
    .replace(/\r\n/g, "\n")
    .split(/\n+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .flatMap((part) =>
      part
        .split(/(?<=[.!?])\s+(?=[A-Z])/)
        .map((sentence) => sentence.trim())
        .filter(Boolean)
        .flatMap((sentence) =>
          sentence
            .split(/(?<=\s[-—])\s+(?=[A-Za-z])/)
            .map((clause) => clause.trim())
            .filter(Boolean)
        )
    );
}