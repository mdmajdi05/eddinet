"use client";

// ============================================================================
//  FILE: components/chat/ChatWidget.tsx
//  Chat panel: header (gradient), messages, typing indicator, footer, input.
//  Ye purely presentational hai — state ChatLauncher ke paas rehti hai.
//
//  Header me hamesha ek WhatsApp shortcut rehta hai, aur jis bot message ke
//  saath `whatsapp` CTA aata hai uske neeche bada green handoff button dikhta
//  hai (message already pre-filled).
// ============================================================================

import { useEffect, useRef } from "react";
import { RotateCcw, Sparkles, X, Zap } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ChatSuggestions from "./ChatSuggestions";
import ChatBotLogo from "./ChatBotLogo";
import ChatWhatsAppCta from "./ChatWhatsAppCta";
import WhatsAppIcon from "./WhatsAppIcon";
import {
  BOT_NAME,
  BOT_TAGLINE,
  INPUT_PLACEHOLDER,
  WHATSAPP_MESSAGE,
} from "@/data/chat/bot";
import { site } from "@/data/site/contact";
import s from "./chat.module.css";
import type { ChatMessage as ChatMessageType } from "@/lib/chat/types";

interface ChatWidgetProps {
  messages: ChatMessageType[];
  isTyping: boolean;
  closing?: boolean;
  onSend: (text: string) => void;
  onClose: () => void;
  onReset: () => void;
}

export default function ChatWidget({
  messages,
  isTyping,
  closing,
  onSend,
  onClose,
  onReset,
}: ChatWidgetProps) {
  const endRef = useRef<HTMLDivElement>(null);
  const whatsappHref = `${site.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div
      className={`${s.panel} ${closing ? s.panelClosing : ""}`}
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
                  <div className={s.status} title="Replies instantly">
                    <span className={s.statusDot} />
                    Online · {BOT_TAGLINE}
                  </div>
                </div>
              </div>

              <div className={s.headerActions}>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.headerIconBtn}
                  aria-label="Chat with our team on WhatsApp"
                  title="Chat on WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
                <button
                  type="button"
                  onClick={onReset}
                  className={s.headerIconBtn}
                  aria-label="Start a new chat"
                  title="New chat"
                >
                  <RotateCcw />
                </button>
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
        </div>

        {/* MESSAGES */}
        <div className={s.messages}>
          {messages.map((message, index) => {
            // Chips sirf latest message par — purani rows chat ko clutter karti hain.
            const isLatest = index === messages.length - 1;

            return (
              <div key={message.id}>
                <ChatMessage message={message} />
                {message.role === "bot" && isLatest && message.quickReplies && (
                  <ChatSuggestions
                    suggestions={message.quickReplies}
                    onSelect={onSend}
                  />
                )}
                {message.role === "bot" && message.whatsapp && (
                  <ChatWhatsAppCta cta={message.whatsapp} />
                )}
              </div>
            );
          })}

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
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={s.footerWhats}
          >
            <WhatsAppIcon />
            WhatsApp us
          </a>
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
