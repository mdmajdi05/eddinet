// ============================================================================
//  FILE: data/services/child/_category/design-creative.ts
//  CATEGORY: /services/design-creative
//
//  Ye category ke US blocks ka single source hai jo sabhi child pages par
//  bilkul same hain.  Page files ise import karti hain, copy nahi karti —
//  isliye yahan ek change poori category me lagu ho jaata hai aur duplicate
//  text ka scope nahi bachta.
//
//  Sirf >= 2 pages par shared values yahan aati hain; jo block kisi ek page
//  ka unique hai wo usi page file me rehta hai.
// ============================================================================

import type { GeneratedChildService } from "../generated-child-services";

type Block<K extends "features" | "benefits" | "whyChooseUs" | "process" | "faqs"> =
  GeneratedChildService[K];

export const benefits: Block<"benefits"> = [];
