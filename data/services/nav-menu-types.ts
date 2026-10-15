// ============================================================================
//  FILE: data/services/nav-menu-types.ts
//
//  Client-safe TYPES for the header mega-menus.
//
//  Yeh file jaan-boojh kar "halki" hai (koi heavy data import nahi) taaki
//  Header / MegaMenu / PortfolioMegaMenu jaise CLIENT components ise safely
//  import kar sakein. Asli (bhaari) data server par banta hai:
//  `data/services/nav-menu.ts` — aur props ke through client tak aata hai.
//
//  ⚠️ Yahan koi data import mat karo — sirf types.
// ============================================================================

export type NavItemLink = { label: string; href: string };

export type NavGroup = { label: string; items: NavItemLink[] };

export type MegaMenuCategory = {
  slug: string;
  icon: string;
  title: string;
  groups: NavGroup[] | null;
  items: NavItemLink[] | null;
  extraHeading?: { icon: string; title: string; items: NavItemLink[] };
};

export type MobileServiceLink = { title: string; slug: string };

export type PortfolioMenuCategory = { key: string; label: string };
