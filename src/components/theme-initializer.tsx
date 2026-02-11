"use client";

import { useThemeSync } from "@/hooks/use-theme-sync";

export function ThemeInitializer() {
  useThemeSync();
  return null;
}

