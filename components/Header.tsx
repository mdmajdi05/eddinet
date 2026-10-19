"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import MegaMenu from "./MegaMenu";
import PortfolioMegaMenu from "./PortfolioMegaMenu";
import Image from "next/image";
import type {
  MegaMenuCategory,
  MobileServiceLink,
  PortfolioMenuCategory,
} from "@/data/services/nav-menu-types";
import { site } from "@/data/site/contact";
import { IMG } from "@/data/site/images";

// NOTE (performance): nav data `app/layout.tsx` (server) se props me aata hai,
// taaki poora services/child content client bundle me na jaaye.
export default function Header({
  megaMenuCategories,
  mobileServiceLinks,
  portfolioMenuCategories,
}: {
  megaMenuCategories: MegaMenuCategory[];
  mobileServiceLinks: MobileServiceLink[];
  portfolioMenuCategories: PortfolioMenuCategory[];
}) {
  const { mode, toggleMode } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Compact glass bar + viewport-top progress line while scrolling.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (y / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Desktop par aa jaane par mobile panel band kar do.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    if (base === "/") return pathname === "/";
    return pathname === base || pathname.startsWith(base + "/");
  };

  return (
    <>
      <i
        className="scrollProgress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <header className={`siteHeader${scrolled ? " is-scrolled" : ""}`}>
        <Link className="logo" href="/" aria-label="Eddinet home">
          <Image
            src={IMG.brand.eddinetLogo.src}
            alt="Eddinet"
            width={320}
            height={88}
            sizes="200px"
            priority
          />
        </Link>

        <nav
          id="primary-navigation"
          className={`nav${open ? " open" : ""}`}
          aria-label="Primary"
        >
          <Link
            href="/"
            className={`navItem${isActive("/") ? " active" : ""}`}
            onClick={() => setOpen(false)}
          >
            <span className="navLabel">Home</span>
            <i className="navUnder" aria-hidden="true" />
            <i className="navDot" aria-hidden="true" />
          </Link>

          <MegaMenu categories={megaMenuCategories} />

          <PortfolioMegaMenu categories={portfolioMenuCategories} />

          {/* Mobile panel me mega menus ki jagah simple links. */}
          <Link
            href="/services"
            className="navItem navMobileOnly"
            onClick={() => setOpen(false)}
          >
            <span className="navLabel">Services</span>
          </Link>
          <Link
            href="/portfolio"
            className="navItem navMobileOnly"
            onClick={() => setOpen(false)}
          >
            <span className="navLabel">Portfolio</span>
          </Link>

          <Link
            href="/blog"
            className={`navItem${isActive("/blog") ? " active" : ""}`}
            onClick={() => setOpen(false)}
          >
            <span className="navLabel">Blog</span>
            <i className="navUnder" aria-hidden="true" />
            <i className="navDot" aria-hidden="true" />
          </Link>

          <Link
            href="/about"
            className={`navItem${isActive("/about") ? " active" : ""}`}
            onClick={() => setOpen(false)}
          >
            <span className="navLabel">About</span>
            <i className="navUnder" aria-hidden="true" />
            <i className="navDot" aria-hidden="true" />
          </Link>

          <Link
            href="/contact"
            className={`navItem${isActive("/contact") ? " active" : ""}`}
            onClick={() => setOpen(false)}
          >
            <span className="navLabel">Contact Us</span>
            <i className="navUnder" aria-hidden="true" />
            <i className="navDot" aria-hidden="true" />
          </Link>

          <a
            className="navContact"
            href={site.phoneHref}
            aria-label={`Call Eddinet at ${site.phone}`}
            onClick={() => setOpen(false)}
          >
            <svg className="ctaArrow" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="ctaText">{site.phone}</span>
            <i className="ctaShine" aria-hidden="true" />
          </a>

          {/* Mobile panel extras: popular services + contact. */}
          <div className="navMobileOnly navMobileExtra">
            <span className="navMobileExtraLabel">Popular Services</span>
            {mobileServiceLinks.slice(0, 8).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setOpen(false)}
                className="navMobileExtraLink"
              >
                {s.title}
              </Link>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="navMobileExtraLink"
              style={{ color: "#25D366", fontWeight: 700 }}
            >
              Chat on WhatsApp
            </a>
            <a
              href={site.phoneHref}
              onClick={() => setOpen(false)}
              className="navMobileExtraLink"
            >
              Call {site.phone}
            </a>
          </div>
        </nav>

        {/* Theme toggle — nav aur burger se alag, header ke andar. */}
        <button
          type="button"
          className="themeBtn"
          onClick={toggleMode}
          title="Dark / Light mode"
          aria-label="Toggle dark / light mode"
        >
          {mode === "dark" ? "☀️" : "🌙"}
        </button>

        <button
          type="button"
          className={`menuBtn${open ? " open" : ""}`}
          ref={buttonRef}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menuLines" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </header>
    </>
  );
}
