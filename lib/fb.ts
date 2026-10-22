// ============================================================================
//  FILE: lib/fb.ts
//  Meta (Facebook) Pixel ke helpers — SSR-safe.
//
//  Base snippet `app/layout.tsx` me load hota hai (init + first PageView), aur
//  `components/FacebookEvents.tsx` route changes / clicks / forms ke events
//  bhejta hai. Yahan sirf ek chhota wrapper hai taaki har jagah
//  `typeof window` check na likhna pade.
// ============================================================================

declare global {
  interface Window {
    // Base snippet ise define karta hai; script load hone tak calls queue me
    // chali jaati hain (isliye kabhi bhi safe call kar sakte hain).
    fbq?: (...args: unknown[]) => void;
  }
}

export const FB_PIXEL_ID = "1648474986812826";

/** Meta standard event bhejo (e.g. "Lead", "Contact", "ViewContent"). */
export function fbTrack(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (params) window.fbq?.("track", event, params);
  else window.fbq?.("track", event);
}

/** Custom (non-standard) event bhejo — `trackCustom` use hota hai. */
export function fbTrackCustom(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (params) window.fbq?.("trackCustom", event, params);
  else window.fbq?.("trackCustom", event);
}
