"use client";

// ============================================================================
//  FILE: components/chat/ChatButton.tsx
//  Floating chat button (3D robot logo) + optional unread badge.
// ============================================================================

import ChatBotLogo from "./ChatBotLogo";
import s from "./chat.module.css";

interface ChatButtonProps {
  onClick: () => void;
  unread?: number;
}

export default function ChatButton({ onClick, unread = 0 }: ChatButtonProps) {
  return (
    <div className={s.launcherBtnWrap}>
      <ChatBotLogo size="md" animated showGlow onClick={onClick} />
      {unread > 0 && (
        <span className={s.badge}>{unread > 9 ? "9+" : unread}</span>
      )}
    </div>
  );
}
