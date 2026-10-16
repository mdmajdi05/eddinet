"use client";

// ============================================================================
//  FILE: components/chat/RichText.tsx
//  Chat messages ka chhota markdown renderer:
//    **bold**            -> <strong>
//    [label](href)       -> internal <Link> / external <a>
//    "- item" lines      -> <ul><li>
//    blank lines         -> paragraph spacing
//  Isse bot ke jawab me service pages ke clickable links aate hain.
// ============================================================================

import Link from "next/link";
import type { ReactNode } from "react";

const INLINE_RE = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
const LIST_RE = /^[-•*]\s+/;

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  INLINE_RE.lastIndex = 0;
  while ((match = INLINE_RE.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));

    if (match[1] !== undefined) {
      nodes.push(<strong key={`${keyPrefix}-b-${i}`}>{match[1]}</strong>);
    } else {
      const label = match[2];
      const href = match[3];
      const isExternal = /^(https?:)?\/\//i.test(href);
      nodes.push(
        isExternal ? (
          <a
            key={`${keyPrefix}-a-${i}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ) : (
          <Link key={`${keyPrefix}-l-${i}`} href={href}>
            {label}
          </Link>
        ),
      );
    }

    last = INLINE_RE.lastIndex;
    i++;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export default function RichText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const lines = text.split("\n");
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) return;
    const key = `ul-${blocks.length}`;
    blocks.push(
      <ul key={key}>
        {listItems.map((item, i) => (
          <li key={`${key}-${i}`}>{renderInline(item, `${key}-${i}`)}</li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (LIST_RE.test(trimmed)) {
      listItems.push(trimmed.replace(LIST_RE, ""));
      return;
    }
    flushList();
    if (trimmed) {
      blocks.push(<p key={`p-${idx}`}>{renderInline(trimmed, `p-${idx}`)}</p>);
    }
  });
  flushList();

  return <div className={className}>{blocks}</div>;
}
