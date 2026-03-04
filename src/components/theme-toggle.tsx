"use client";

import { useThemeActions, useThemeState } from "@/store/selectors";

export function ThemeToggle() {
  const { theme } = useThemeState();
  const { toggleTheme } = useThemeActions();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn-outline h-10 min-w-[4.8rem] px-3 py-0 sm:min-w-[6rem]"
      aria-label="Toggle day and night theme"
    >
      {theme === "night" ? "Day" : "Night"}
    </button>
  );
}
