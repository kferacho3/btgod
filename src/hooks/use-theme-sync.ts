"use client";

import { useEffect } from "react";
import { useThemeState } from "@/store/selectors";

export function useThemeSync() {
  const { theme } = useThemeState();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
}

