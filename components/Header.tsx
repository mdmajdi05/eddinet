"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import ConsultModal from "./ConsultModal";
import MegaMenu from "./MegaMenu";
import Image from "next/image";
import { services } from "@/data/services";
import { site } from "@/data/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const { accent, mode, setAccent, toggleMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setThemeMenuOpen(false);
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setThemeMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out border-b border-[var(--hairline)] ${
          scrolled ? "py-3 bg-[var(--header-bg)]" : "py-5 bg-[var(--header-bg)]"
        }`}
        style={{ color: "var(--chrome-text)" }}
      >
        <div className="w-full max-w-[var(--container-max)] mx-auto px-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
              <Image src="/eddinet-logo.png" alt="Eddinet" width={320} height={88} className="h-[88px] w-auto" priority />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className={`text-[0.95rem] font-medium transition-all duration-300 hover:text-[var(--main-accent)] no-underline ${
                  isActive("/") && !mobileOpen ? "text-[var(--main-accent)]" : "text-[var(--chrome-text-muted)]"
                }`}
              >
                Home
              </Link>
              <MegaMenu />
              {navLinks.slice(1).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-[0.95rem] font-medium transition-all duration-300 hover:text-[var(--main-accent)] no-underline ${
                    isActive(l.href) ? "text-[var(--main-accent)]" : "text-[var(--chrome-text-muted)]"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3.5">
              <button
                className="hidden lg:inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] cursor-pointer transition-all duration-300 border-none outline-none text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)]"
                style={{ background: "var(--primary-gradient)" }}
                onClick={() => setModalOpen(true)}
              >
                Get Free Consultation
              </button>

              <div className="relative" ref={menuRef}>
                <button
                  className="w-[42px] h-[42px] rounded-full bg-white/[0.08] border border-white/[0.18] text-[var(--chrome-text)] text-[1.05rem] cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-white/[0.16] hover:border-[rgba(var(--accent-rgb),0.5)] hover:-translate-y-0.5"
                  onClick={(e) => { e.stopPropagation(); setThemeMenuOpen(!themeMenuOpen); }}
                  title="Change Theme Color"
                >
                  🎨
                </button>
                <div className={`absolute top-[calc(100%+12px)] right-0 w-[190px] bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-[14px] p-2 shadow-[var(--shadow-menu)] transition-all duration-300 z-[1100] ${
                  themeMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}>
                  <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text-muted)] px-2.5 pt-2 pb-1.5">Theme</div>
                  <button
                    className={`flex items-center gap-2.5 w-full bg-transparent border-none text-[var(--text-main)] font-[inherit] text-[0.9rem] font-semibold py-2.5 px-3 rounded-lg cursor-pointer text-left transition-all duration-300 hover:bg-[var(--soft-hover)] ${accent === "cyan" ? "bg-[rgba(var(--accent-rgb),0.08)]" : ""}`}
                    onClick={() => { setAccent("cyan"); setThemeMenuOpen(false); }}
                  >
                    <span className="w-[18px] h-[18px] rounded-full shrink-0 bg-[linear-gradient(135deg,#00F2FE,#7928CA)]" />
                    <span>Cyber Cyan</span>
                    <span className={`ml-auto text-[var(--main-accent)] text-[0.85rem] transition-all duration-300 ${accent === "cyan" ? "opacity-100" : "opacity-0"}`}>✓</span>
                  </button>
                  <button
                    className={`flex items-center gap-2.5 w-full bg-transparent border-none text-[var(--text-main)] font-[inherit] text-[0.9rem] font-semibold py-2.5 px-3 rounded-lg cursor-pointer text-left transition-all duration-300 hover:bg-[var(--soft-hover)] ${accent === "red" ? "bg-[rgba(var(--accent-rgb),0.08)]" : ""}`}
                    onClick={() => { setAccent("red"); setThemeMenuOpen(false); }}
                  >
                    <span className="w-[18px] h-[18px] rounded-full shrink-0 bg-[linear-gradient(135deg,#FF4D4D,#E60000)]" />
                    <span>Royal Red</span>
                    <span className={`ml-auto text-[var(--main-accent)] text-[0.85rem] transition-all duration-300 ${accent === "red" ? "opacity-100" : "opacity-0"}`}>✓</span>
                  </button>
                </div>
              </div>

              <button
                className="w-[42px] h-[42px] rounded-full bg-white/[0.08] border border-white/[0.18] text-[var(--chrome-text)] text-[1.15rem] cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-white/[0.16] hover:border-[rgba(var(--accent-rgb),0.5)] hover:-translate-y-0.5 active:scale-[0.94]"
                onClick={toggleMode}
                title="Dark / Light Mode"
              >
                {mode === "dark" ? "☀️" : "🌙"}
              </button>

              <button
                className="lg:hidden w-[42px] h-[42px] rounded-full bg-white/[0.08] border border-white/[0.18] text-[var(--chrome-text)] text-[1.3rem] cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-white/[0.16]"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-[var(--header-bg)] border-b border-[var(--hairline)] shadow-[var(--shadow-menu)] transition-all duration-300 overflow-y-auto max-h-[calc(100vh-90px)] ${
            mobileOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="max-w-[var(--container-max)] mx-auto px-5 py-6 flex flex-col gap-1">
            {mobileLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-[1rem] font-semibold no-underline rounded-xl px-3 transition-colors duration-200"
                style={isActive(l.href) && l.href !== "/services" ? { color: "var(--main-accent)", background: "var(--soft-hover)" } : { color: "var(--chrome-text-muted)" }}
              >
                {l.label}
              </Link>
            ))}

            <div className="mt-2 mb-1 pl-3 text-[0.68rem] font-bold uppercase tracking-widest text-[var(--text-dim)]">
              Popular Services
            </div>
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 pl-6 text-[0.92rem] font-medium no-underline rounded-xl text-[var(--chrome-text-muted)] hover:text-[var(--main-accent)] transition-colors duration-200"
              >
                {s.title}
              </Link>
            ))}

            <div className="flex flex-col gap-3 mt-4 pt-5 border-t border-[var(--hairline)]">
              <button
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-full font-bold text-[0.95rem] cursor-pointer transition-all duration-300 border-none outline-none text-[var(--on-primary)]"
                style={{ background: "var(--primary-gradient)" }}
                onClick={() => { setModalOpen(true); setMobileOpen(false); }}
              >
                Get Free Consultation
              </button>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full font-bold text-[0.88rem] no-underline bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors duration-200"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>
      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}