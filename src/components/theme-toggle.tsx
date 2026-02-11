"use client";

import { useThemeActions, useThemeState } from "@/store/selectors";

export function ThemeToggle() {
  const { theme } = useThemeState();
  const { toggleTheme } = useThemeActions();

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
