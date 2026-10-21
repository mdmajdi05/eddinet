// ============================================================================
//  FILE: lib/social-metadata.ts  (OPEN GRAPH + TWITTER / X CARD METADATA)
//  WHAT'S IN THIS FILE:
//    socialMetadata() - ek hi jagah se consistent og:* + twitter:* block.
//
//  WHY THIS EXISTS:
//    Next.js metadata inherit hoti hai FIELD-BY-FIELD, deep-merge nahi hoti.
//    Isliye root layout me jo `openGraph`/`twitter` likha tha, wo har page
//    pe apne aap copy ho jata tha — bina `url` fix kiye. Result:
//      - 9 index pages par `og:url` homepage ka tha (galat URL)
//      - har page par SAME `twitter:title` / `twitter:description`
//      - jis page ne apna `openGraph` likha, usme `images` bhool gaya to
//        `og:image` poora render hi nahi hua
//
//    Ab har page `socialMetadata()` use karta hai -> title/description/url/
//    siteName/images/twitter sab ek hi shape me, aur har page ka apna URL.
//
//  USAGE:
//    export const metadata: Metadata = {
//      title: "...",
//      description: "...",
//      alternates: { canonical: "https://eddinet.com/services" },
//      ...socialMetadata({
//        title: "...",
//        description: "...",
//        url: "https://eddinet.com/services",
//      }),
//    };
// ============================================================================

import type { Metadata } from "next";
import { site } from "@/data/site/contact";

/** Default OG/Twitter image — 1200x630 (Open Graph ka standard size). */
export const OG_IMAGE = {
  url: "https://eddinet.com/opengraph-image.webp",
  width: 1200,
  height: 630,
  alt: `${site.name} - Digital Marketing & Software Agency`,
};

export interface SocialMetadataInput {
  title: string;
  description: string;
  /** Is page ka apna absolute URL (canonical ke barabar). */
  url: string;
  type?: "website" | "article";
  /** Article pages ke liye published/modified time. */
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

/**
 * Open Graph + Twitter card block — har page ke liye consistent.
 * `url` har page ka apna hota hai, isliye `og:url` galat nahi hota.
 */
export function socialMetadata(input: SocialMetadataInput): Pick<
  Metadata,
  "openGraph" | "twitter"
> {
  const { title, description, url, type = "website" } = input;

  const base = {
    title,
    description,
    url,
    siteName: site.name,
    locale: "en_IN",
    images: [OG_IMAGE],
  };

  const openGraph =
    type === "article"
      ? {
          ...base,
          type: "article" as const,
          publishedTime: input.publishedTime,
          modifiedTime: input.modifiedTime ?? input.publishedTime,
          authors: input.authors,
        }
      : { ...base, type: "website" as const };

  return {
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
