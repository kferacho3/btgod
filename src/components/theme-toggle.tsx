"use client";

import { useThemeActions, useThemeState } from "@/store/selectors";

export function ThemeToggle() {
  const { theme } = useThemeState();
  const { toggleTheme } = useThemeActions();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn-outline h-9 min-w-[6.2rem] px-3 py-0"
      aria-label="Toggle day and night theme"
    >
      {theme === "night" ? "Day" : "Night"}
    </button>
  );
}
