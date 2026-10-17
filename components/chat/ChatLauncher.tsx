"use client";

// ============================================================================
//  FILE: components/chat/ChatLauncher.tsx
//  Chatbot ka entry point — ise app/layout.tsx me ek baar render kiya jaata hai.
//
//  Iske andar:
//    - state (messages, open/close, typing, notification) yahan rehti hai
//    - floating chat button + rotating notification popup
//    - ChatWidget (panel) — lazy load hota hai (sirf kholne par)
//    - reply engine — lazy load hota hai (sirf pehle message par)
//
//  Isliye jin users ko chat use nahi karni, unke bundle me chat ka bhaari
//  knowledge base load hi nahi hota.
// ============================================================================

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Sparkles, X } from "lucide-react";
import ChatButton from "./ChatButton";
import ChatBotLogo from "./ChatBotLogo";
import { site } from "@/data/site/contact";
import {
  BOT_NAME,
  GREETING_MESSAGE,
  NOTIFICATIONS,
  NOTIF_DISMISSED_KEY,
  QUICK_SUGGESTIONS,
  TYPING_MAX_MS,
  TYPING_MIN_MS,
  WHATSAPP_MESSAGE,
} from "@/data/chat/bot";
import s from "./chat.module.css";
import type { BotReply, ChatMessage } from "@/lib/chat/types";

const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

const NOTIF_FIRST_DELAY = 5000;
const NOTIF_DISPLAY_DURATION = 8000;
const NOTIF_CYCLE_INTERVAL = 60000;
const CLOSE_ANIM_MS = 160;

let msgCounter = 0;
function nextId() {
  return `msg-${++msgCounter}-${Date.now()}`;
}

export default function ChatLauncher() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const [notifVisible, setNotifVisible] = useState(false);
  const [notifIndex, setNotifIndex] = useState(0);
  const [notifDismissed, setNotifDismissed] = useState(false);

  const engineRef = useRef<typeof import("@/lib/chat/engine") | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const notifIndexRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ─── Rotating notification popup ──────────────────────────────────────────
  useEffect(() => {
    if (!mounted || isOpen || notifDismissed) return;

    let alreadyDismissed = false;
    try {
      alreadyDismissed = localStorage.getItem(NOTIF_DISMISSED_KEY) === "1";
    } catch {
      alreadyDismissed = false;
    }
    if (alreadyDismissed) {
      setNotifDismissed(true);
      return;
    }

    let cancelled = false;
    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      if (cancelled) return;
      setNotifIndex(notifIndexRef.current);
      setNotifVisible(true);
      hideTimer = setTimeout(() => {
        if (cancelled) return;
        setNotifVisible(false);
        notifIndexRef.current =
          (notifIndexRef.current + 1) % NOTIFICATIONS.length;
        showTimer = setTimeout(
          runCycle,
          NOTIF_CYCLE_INTERVAL - NOTIF_DISPLAY_DURATION,
        );
      }, NOTIF_DISPLAY_DURATION);
    };

    showTimer = setTimeout(runCycle, NOTIF_FIRST_DELAY);

    return () => {
      cancelled = true;
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [mounted, isOpen, notifDismissed]);

  // ─── Open / close ─────────────────────────────────────────────────────────
  const openChat = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setNotifVisible(false);
    setClosing(false);
    setIsOpen(true);
    setMessages((prev) =>
      prev.length
        ? prev
        : [
            {
              id: nextId(),
              role: "bot",
              text: GREETING_MESSAGE,
              quickReplies: QUICK_SUGGESTIONS,
              createdAt: Date.now(),
            },
          ],
    );
  }, []);

  const closeChat = useCallback(() => {
    setClosing(true);
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
      setClosing(false);
    }, CLOSE_ANIM_MS);
  }, []);

  const dismissNotification = useCallback(() => {
    setNotifVisible(false);
    setNotifDismissed(true);
    try {
      localStorage.setItem(NOTIF_DISMISSED_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  // ─── Send message + reply ─────────────────────────────────────────────────
  const loadEngine = useCallback(async () => {
    if (!engineRef.current) {
      engineRef.current = await import("@/lib/chat/engine");
    }
    return engineRef.current;
  }, []);

  const handleSend = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping) return;

      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "user", text: trimmed, createdAt: Date.now() },
      ]);
      setIsTyping(true);

      const delay = TYPING_MIN_MS + Math.random() * (TYPING_MAX_MS - TYPING_MIN_MS);

      let reply: BotReply;
      try {
        const engine = await loadEngine();
        reply = engine.getBotReply(trimmed);
      } catch {
        reply = {
          text:
            `Sorry, I couldn't process that just now. Please call ` +
            `**${site.phone}** or email **${site.email}**.`,
          quickReplies: QUICK_SUGGESTIONS,
        };
      }

      await new Promise((resolve) => setTimeout(resolve, delay));

      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          role: "bot",
          text: reply.text,
          quickReplies: reply.quickReplies,
          link: reply.link,
          createdAt: Date.now(),
        },
      ]);
      setIsTyping(false);
    },
    [isTyping, loadEngine],
  );

  // NOTE: yahan `mounted` par return null NAHI karte. Pehle aisa tha, isliye
  // agar client hydration kisi wajah se na chale to bot poori tarah gaayab ho
  // jaata tha. Ab launcher/button server par bhi render hota hai (turant dikhta
  // hai) — sirf notification popup client par (localStorage + rotation) chalta hai.
  const activeNotif = NOTIFICATIONS[notifIndex % NOTIFICATIONS.length];
  const whatsappHref = `${site.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className={s.launcher}>
      {isOpen && (
        <ChatWidget
          messages={messages}
          isTyping={isTyping}
          closing={closing}
          onSend={handleSend}
          onClose={closeChat}
        />
      )}

      {!isOpen && notifVisible && (
        <div className={s.notif}>
          <button
            type="button"
            className={s.notifClose}
            onClick={dismissNotification}
            aria-label="Dismiss notification"
          >
            <X />
          </button>

          <div className={s.notifRow}>
            <div className={s.notifAvatar}>
              <ChatBotLogo size="sm" animated={false} showGlow={false} />
              <span className={s.notifOnline} />
            </div>

            <div className={s.notifBody}>
              <div className={s.notifHead}>
                <span className={s.notifName}>{BOT_NAME}</span>
                <Sparkles />
                <span className={s.notifStatus}>Online</span>
              </div>

              <p className={s.notifText}>{activeNotif.text}</p>

              <div className={s.notifActions}>
                <button
                  type="button"
                  className={s.notifPrimary}
                  onClick={openChat}
                >
                  {activeNotif.action}
                </button>
                <a
                  className={s.notifWhats}
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <span className={s.notifTail} />
        </div>
      )}

      {!isOpen && <ChatButton onClick={openChat} />}
    </div>
  );
}
