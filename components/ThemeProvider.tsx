"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ThemeContextType = {
  mode: string;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  mode: "dark",
  toggleMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem("du-mode") || "dark";
    setMode(savedMode);
    document.documentElement.setAttribute(
      "data-theme",
      savedMode === "dark" ? "red" : "red-light",
    );
  }, []);

  function toggleMode() {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    localStorage.setItem("du-mode", next);
    document.documentElement.setAttribute(
      "data-theme",
      next === "dark" ? "red" : "red-light",
    );
  }

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}