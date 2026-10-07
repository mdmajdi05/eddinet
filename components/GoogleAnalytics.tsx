"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Google Analytics 4 (Google tag) ka SPA tracking helper.
 *
 * Actual gtag snippet `app/layout.tsx` ke <head> me hai (Google ka diya hua
 * standard snippet) — wahi initial page_view bhejta hai. Ye component sirf
 * client-side route change (Next.js navigation) par extra page_view bhejta
 * hai, kyunki gtag ka config sirf full load par chalta hai.
 *
 * Measurement ID: G-DPMM8PP3ZB  (badalna ho to dono jagah: yahan ka comment
 * + app/layout.tsx ka snippet)
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const mounted = useRef(false);

  useEffect(() => {
    // Pehle render par config already page_view bhej chuka hota hai,
    // isliye sirf aage ke navigations par track karo (duplicate se bachne ke liye).
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    window.gtag?.("event", "page_view", { page_path: pathname });
  }, [pathname]);

  return null;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
