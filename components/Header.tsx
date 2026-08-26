"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";
import ConsultModal from "./ConsultModal";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const { accent, mode, setAccent, toggleMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const navItems = [
    ["Home", "home"], ["Portfolio", "portfolio"],
    ["Clients", "clients"], ["About", "about"], ["Contact Us", "contact"],
  ];

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
            <a href="#home" className="flex items-center gap-2.5 text-[1.5rem] font-extrabold tracking-[-0.5px] text-[var(--chrome-text)]">
              <span className="gradient-text">EDDINET</span>
            </a>

            <nav className="flex items-center gap-8 max-lg:hidden">
              <MegaMenu />
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} className="text-[0.95rem] font-medium text-[var(--chrome-text-muted)] transition-all duration-300 hover:text-[var(--main-accent)]">
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3.5">
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
                    onClick={() => setAccent("cyan")}
                  >
                    <span className="w-[18px] h-[18px] rounded-full shrink-0 bg-[linear-gradient(135deg,#00F2FE,#7928CA)]" />
                    <span>Cyber Cyan</span>
                    <span className={`ml-auto text-[var(--main-accent)] text-[0.85rem] transition-all duration-300 ${accent === "cyan" ? "opacity-100" : "opacity-0"}`}>✓</span>
                  </button>
                  <button
                    className={`flex items-center gap-2.5 w-full bg-transparent border-none text-[var(--text-main)] font-[inherit] text-[0.9rem] font-semibold py-2.5 px-3 rounded-lg cursor-pointer text-left transition-all duration-300 hover:bg-[var(--soft-hover)] ${accent === "red" ? "bg-[rgba(var(--accent-rgb),0.08)]" : ""}`}
                    onClick={() => setAccent("red")}
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

              <a
                href="https://wa.me/917042840441"
                target="_blank"
                className="inline-flex items-center justify-center gap-2.5 py-2.5 px-5 rounded-full font-bold text-[0.85rem] cursor-pointer transition-all duration-300 border-none outline-none no-underline bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-0.5"
              >
                💬 WhatsApp
              </a>

              <button
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-full font-bold text-[0.95rem] cursor-pointer transition-all duration-300 border-none outline-none text-[var(--on-primary)] shadow-[0_10px_25px_-5px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-[3px] hover:shadow-[0_15px_30px_-5px_rgba(var(--accent-rgb),0.6)] max-lg:hidden"
                style={{ background: "var(--primary-gradient)" }}
                onClick={() => setModalOpen(true)}
              >
                Get Free Consultation
              </button>

              <button className="hidden max-lg:block bg-transparent border-none text-[var(--chrome-text)] text-[1.5rem] cursor-pointer">☰</button>
            </div>
          </div>
        </div>
      </header>
      <ConsultModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
