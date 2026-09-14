"use client";

import { useEffect, useRef, useState } from "react";

interface LineClampedTextProps {
  text: string;
  lines?: number;
}

export default function LineClampedText({ text, lines = 6 }: LineClampedTextProps) {
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);
  const innerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    setExpanded(false);
    setOverflowing(el.scrollHeight > el.clientHeight + 1);
  }, [text, lines]);

  return (
    <p className="text-[var(--text-muted)] text-[0.97rem] leading-[1.85] mb-7">
      <span
        ref={innerRef}
        className="block"
        style={
          expanded
            ? undefined
            : {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: lines,
                overflow: "hidden",
              }
        }
      >
        {text}
      </span>
      {overflowing && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-1.5 ml-2 font-bold no-underline text-[var(--main-accent)] hover:underline transition-colors duration-300 cursor-pointer bg-transparent border-0 p-0"
        >
          {expanded ? "Show Less" : "Show More"}
          <svg className={`w-3.5 h-3.5 ${expanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </p>
  );
}