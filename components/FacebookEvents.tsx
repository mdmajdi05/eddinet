"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { fbTrack } from "@/lib/fb";

// ============================================================================
//  FILE: components/FacebookEvents.tsx
//  Meta Pixel ke saare client-side events — ek hi jagah.
//
//  1) PageView    — har SPA route change par (base snippet sirf first load par
//                   bhejta hai, isliye landing skip hota hai — double count nahi).
//  2) ViewContent — content pages par (services / portfolio / case-studies / blog),
//                   ek pathname par ek baar. Retargeting audiences ke liye.
//  3) Contact     — kisi bhi tel: / WhatsApp / mailto: link par click.
//  4) Lead        — jin forms par `data-fb-event="Lead"` laga hai (contact form,
//                   quote popup, blog sidebar message).
//     Subscribe   — newsletter form (`data-fb-event="Subscribe"`).
//
//  Chat ka input form jaan-boojh kar chhoda gaya hai (har message par Lead nahi
//  chahiye) — usme koi data-fb-event attribute nahi hai.
//
//  Naya event add karna ho to: form par data-fb-event="Lead" laga do, ya
//  seedha fbTrack("Lead", {...}) call kar do. Type lib/fb.ts me hai.
// ============================================================================

/** Path se content category nikalo — sirf content pages par ViewContent. */
function contentCategory(pathname: string): string | null {
  const [first, second] = pathname.split("/").filter(Boolean);
  if (!first) return null; // home

  switch (first) {
    case "services":
      return second ? "service" : "services";
    case "portfolio":
      return second ? "portfolio-category" : "portfolio";
    case "case-studies":
      return second ? "case-study" : "case-studies";
    case "blog":
      return second ? "blog-post" : "blog";
    default:
      return null; // about / contact / policies — ViewContent nahi
  }
}

export default function FacebookEvents() {
  const pathname = usePathname();

  // PageView: pehla pathname skip (base snippet bhejta hai), baaki har change par.
  const lastPageViewPath = useRef(pathname);
  // ViewContent: landing par bhi chahiye, isliye null se shuru.
  const lastContentPath = useRef<string | null>(null);

  useEffect(() => {
    // 1) PageView — SPA route change
    if (lastPageViewPath.current !== pathname) {
      lastPageViewPath.current = pathname;
      fbTrack("PageView");
    }

    // 2) ViewContent — content page par ek baar
    const category = contentCategory(pathname);
    if (category && lastContentPath.current !== pathname) {
      lastContentPath.current = pathname;
      fbTrack("ViewContent", {
        content_name: typeof document !== "undefined" ? document.title : pathname,
        content_category: category,
        content_ids: [pathname],
      });
    }
  }, [pathname]);

  useEffect(() => {
    // 3) Contact — phone / WhatsApp / email click (delegated, capture phase)
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[href]");
      const href = link?.getAttribute("href") ?? "";
      if (!href) return;

      if (href.startsWith("tel:")) {
        fbTrack("Contact", { method: "phone" });
      } else if (/wa\.me|api\.whatsapp\.com|whatsapp:/i.test(href)) {
        fbTrack("Contact", { method: "whatsapp" });
      } else if (href.startsWith("mailto:")) {
        fbTrack("Contact", { method: "email" });
      }
    }

    // 4) Lead / Subscribe — sirf un forms par jinke paas data-fb-event hai
    function onSubmit(event: Event) {
      const form = event.target as HTMLElement | null;
      const name = form?.getAttribute?.("data-fb-event");
      if (!name) return;
      fbTrack(name, {
        content_name: form?.getAttribute("data-fb-form") ?? undefined,
      });
    }

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  return null;
}
