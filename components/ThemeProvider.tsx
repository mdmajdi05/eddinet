"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ThemeContextType = {
  accent: string;
  mode: string;
  setAccent: (a: string) => void;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  accent: "cyan",
  mode: "dark",
  setAccent: () => {},
  toggleMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [accent, setAccentState] = useState("cyan");
  const [mode, setMode] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedAccent = localStorage.getItem("du-accent") || "cyan";
    const savedMode = localStorage.getItem("du-mode") || "dark";
    setAccentState(savedAccent);
    setMode(savedMode);
    applyTheme(savedAccent, savedMode);
  }, []);

  function applyTheme(a: string, m: string) {
    const theme = m === "dark" ? a : a + "-light";
    document.documentElement.setAttribute("data-theme", theme);
  }

  function setAccent(a: string) {
    setAccentState(a);
    localStorage.setItem("du-accent", a);
    applyTheme(a, mode);
  }

  function toggleMode() {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    localStorage.setItem("du-mode", next);
    applyTheme(accent, next);
  }

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ accent, mode, setAccent, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
