"use client";

// ============================================================================
//  FILE: components/chat/ChatWidget.tsx
//  Chat panel: header (gradient), messages, typing indicator, footer, input.
//  Ye purely presentational hai — state ChatLauncher ke paas rehti hai.
// ============================================================================

import { useEffect, useRef } from "react";
import { X, Sparkles, Zap } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ChatSuggestions from "./ChatSuggestions";
import ChatBotLogo from "./ChatBotLogo";
import { BOT_NAME, BOT_TAGLINE, INPUT_PLACEHOLDER } from "@/data/chat/bot";
import s from "./chat.module.css";
import type { ChatMessage as ChatMessageType } from "@/lib/chat/types";

interface ChatWidgetProps {
  messages: ChatMessageType[];
  isTyping: boolean;
  light: boolean;
  closing?: boolean;
  onSend: (text: string) => void;
  onClose: () => void;
}

export default function ChatWidget({
  messages,
  isTyping,
  light,
  closing,
  onSend,
  onClose,
}: ChatWidgetProps) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div
      className={`${s.panel} ${light ? s.light : ""} ${
        closing ? s.panelClosing : ""
      }`}
    >
      <div className={s.glowOuter} />
      <div className={s.borderWrap}>
        <div className={s.borderGradient} />
      </div>

      <div className={s.card}>
        {/* HEADER */}
        <div className={s.header}>
          <div className={s.headerGradient} />
          <div className={s.headerInner}>
            <div className={s.headerRow}>
              <div className={s.headerLeft}>
                <ChatBotLogo size="sm" showGlow={false} />
                <div>
                  <div className={s.botName}>
                    {BOT_NAME}
                    <Sparkles />
                  </div>
                  <div className={s.status}>
                    <span className={s.statusDot} />
                    Online · {BOT_TAGLINE}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className={s.closeBtn}
                aria-label="Close chat"
              >
                <X />
              </button>
            </div>
          </div>
        </div>

        {/* MESSAGES */}
        <div className={s.messages}>
          {messages.map((message) => (
            <div key={message.id}>
              <ChatMessage message={message} />
              {message.role === "bot" && message.quickReplies && (
                <ChatSuggestions
                  suggestions={message.quickReplies}
                  onSelect={onSend}
                />
              )}
            </div>
          ))}

          {isTyping && (
            <div className={s.typingRow}>
              <ChatBotLogo size="sm" animated={false} showGlow={false} />
              <div className={s.typingBubble}>
                <div className={s.typingDots}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>

        {/* FOOTER */}
        <div className={s.footer}>
          <div className={s.footerText}>
            <Zap />
            Powered by <b>{BOT_NAME}</b>
          </div>
        </div>

        {/* INPUT */}
        <ChatInput
          onSend={onSend}
          disabled={isTyping}
          placeholder={INPUT_PLACEHOLDER}
        />
      </div>
    </div>
  );
}
