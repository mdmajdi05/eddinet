"use client";

// ============================================================================
//  FILE: components/chat/ChatInput.tsx
//  Message type karne ka input + send button.
// ============================================================================

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Send, Sparkles } from "lucide-react";
import s from "./chat.module.css";

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export default function ChatInput({
  onSend,
  disabled,
  placeholder = "Ask me anything...",
}: ChatInputProps) {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!disabled) inputRef.current?.focus();
  }, [disabled]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setText("");
  };

  const canSend = Boolean(text.trim()) && !disabled;

  return (
    <form onSubmit={handleSubmit} className={s.inputForm}>
      <div className={s.inputRow}>
        <div className={s.inputWrap}>
          <div className={`${s.inputGlow} ${focused ? s.inputGlowOn : ""}`} />
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            disabled={disabled}
            className={s.input}
            aria-label="Type a message"
          />
          {!text && !focused && <span className={s.inputHint}>Press Enter ↵</span>}
        </div>

        <button
          type="submit"
          disabled={!canSend}
          className={s.sendBtn}
          aria-label="Send message"
        >
          {canSend && <span className={s.sendShimmer} />}
          {canSend ? <Send /> : <Sparkles />}
        </button>
      </div>
    </form>
  );
}
