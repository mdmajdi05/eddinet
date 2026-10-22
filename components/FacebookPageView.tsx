"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    // Base snippet (app/layout.tsx) ise define karta hai — script load hone tak
    // calls queue me chali jaati hain.
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Meta Pixel — SPA route changes par PageView.
 *
 * Next.js App Router me page change par document reload nahi hota, isliye base
 * pixel ka PageView sirf FIRST load par jaata hai. Ye component har pathname
 * change par ek PageView bhejta hai.
 *
 * Double counting se bachne ke liye:
 *  - Base snippet landing load par PageView khud bhejta hai, isliye `lastTracked`
 *    pehle pathname se initialize hota hai -> wo skip ho jaata hai.
 *  - React Strict Mode (dev) me effect do baar chalta hai; same pathname par
 *    dobara fire nahi karta (ref guard) — isliye dev me bhi duplicate nahi.
 *  - Query-param change (e.g. ?page=2) par PageView nahi jaata, sirf path change
 *    par jaata hai — yahi Meta ke liye sahi hai.
 *
 * Naya event (jaise Lead / Contact) chahiye to usi jagah `window.fbq?.("track",
 * "Lead")` call kar do — queue khud handle ho jaata hai.
 */
export default function FacebookPageView() {
  const pathname = usePathname();
  const lastTracked = useRef(pathname);

  useEffect(() => {
    if (pathname === lastTracked.current) return;
    lastTracked.current = pathname;
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
