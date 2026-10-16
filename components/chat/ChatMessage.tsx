"use client";

// ============================================================================
//  FILE: components/chat/ChatMessage.tsx
//  Ek message bubble (bot left me, user right me) + time + rich text.
// ============================================================================

import { User } from "lucide-react";
import ChatBotLogo from "./ChatBotLogo";
import RichText from "./RichText";
import s from "./chat.module.css";
import type { ChatMessage as ChatMessageType } from "@/lib/chat/types";

export default function ChatMessage({ message }: { message: ChatMessageType }) {
  const isUser = message.role === "user";

  return (
    <div className={`${s.msgRow} ${isUser ? s.msgRowUser : s.msgRowBot}`}>
      {!isUser && <ChatBotLogo size="sm" animated={false} showGlow={false} />}

      <div className={`${s.bubble} ${isUser ? s.bubbleUser : s.bubbleBot}`}>
        <RichText text={message.text} className={s.rich} />
        <div className={s.time}>
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {isUser && (
        <div className={s.avatarUser}>
          <User />
        </div>
      )}
    </div>
  );
}
