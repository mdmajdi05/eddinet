"use client";

// ============================================================================
//  FILE: components/chat/ChatSuggestions.tsx
//  Quick reply chips (click karne par payload bhej diya jaata hai).
// ============================================================================

import s from "./chat.module.css";
import type { QuickReply } from "@/lib/chat/types";

interface ChatSuggestionsProps {
  suggestions: QuickReply[];
  onSelect: (payload: string) => void;
}

export default function ChatSuggestions({
  suggestions,
  onSelect,
}: ChatSuggestionsProps) {
  if (!suggestions.length) return null;

  return (
    <div className={s.suggestionsWrap}>
      <div className={s.suggestions}>
        {suggestions.map((sug, i) => (
          <button
            key={`${sug.payload}-${i}`}
            type="button"
            onClick={() => onSelect(sug.payload)}
            className={s.chip}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {sug.label}
          </button>
        ))}
      </div>
    </div>
  );
}
