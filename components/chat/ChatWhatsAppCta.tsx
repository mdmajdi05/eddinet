"use client";

// ============================================================================
//  FILE: components/chat/ChatWhatsAppCta.tsx
//  Lead handoff CTA — jab bot ke paas naam + requirement ho, ye green button
//  dikhta hai. Message already pre-filled hota hai, user ko sirf Send dabana
//  hota hai. Click par Meta Pixel "Lead" event bhi jaata hai.
// ============================================================================

import { fbTrack } from "@/lib/fb";
import { site } from "@/data/site/contact";
import WhatsAppIcon from "./WhatsAppIcon";
import s from "./chat.module.css";
import type { ChatWhatsAppCta as ChatWhatsAppCtaType } from "@/lib/chat/types";

export default function ChatWhatsAppCta({
  cta,
}: {
  cta: ChatWhatsAppCtaType;
}) {
  const href = `${site.whatsapp}?text=${encodeURIComponent(cta.message)}`;

  return (
    <div className={s.ctaWrap}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={s.ctaBtn}
        onClick={() =>
          fbTrack("Lead", {
            content_name: "chat-whatsapp",
            content_category: "chat",
          })
        }
        aria-label="Continue this conversation on WhatsApp"
      >
        <WhatsAppIcon className={s.ctaIcon} />
        <span>{cta.label}</span>
      </a>
      <span className={s.ctaNote}>
        Opens WhatsApp with your message pre-filled
      </span>
    </div>
  );
}
