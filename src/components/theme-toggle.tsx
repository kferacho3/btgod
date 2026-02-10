"use client";

import { useEffect, useState } from "react";

type Theme = "night" | "day";

const resolveStoredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "night";
  }

  const saved = localStorage.getItem("btgod-theme");
  return saved === "day" || saved === "night" ? saved : "night";
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(resolveStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("btgod-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "night" ? "day" : "night";
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn-outline min-w-28"
      aria-label="Toggle day and night theme"
    >
      {theme === "night" ? "Day Mode" : "Night Mode"}
    </button>
  );
}
