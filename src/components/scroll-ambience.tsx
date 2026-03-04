"use client";

import { useEffect } from "react";

export function ScrollAmbience() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const tabletQuery = window.matchMedia("(max-width: 1024px)");
    let rafId = 0;
    let currentY = window.scrollY;
    let targetY = window.scrollY;

    const syncDefaults = () => {
      root.style.setProperty("--scroll-progress", "0");
      root.style.setProperty("--scroll-shift-y", "0px");
    };

    const shouldDisable = () =>
      reducedMotionQuery.matches || coarsePointerQuery.matches || tabletQuery.matches;

    const getMaxScroll = () =>
      Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);

    const apply = () => {
      if (shouldDisable()) {
        syncDefaults();
        rafId = 0;
        return;
      }

      currentY += (targetY - currentY) * 0.1;

      const progress = Math.min(Math.max(currentY / getMaxScroll(), 0), 1);
      const shiftY = currentY * -0.08;

      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      root.style.setProperty("--scroll-shift-y", `${shiftY.toFixed(2)}px`);

      if (Math.abs(targetY - currentY) > 0.2) {
        rafId = window.requestAnimationFrame(apply);
      } else {
        rafId = 0;
      }
    };

    const schedule = () => {
      if (shouldDisable()) {
        if (rafId) {
          window.cancelAnimationFrame(rafId);
          rafId = 0;
        }
        syncDefaults();
        return;
      }

      targetY = window.scrollY;
      if (!rafId) {
        rafId = window.requestAnimationFrame(apply);
      }
    };

    const bindQueryChange = (query: MediaQueryList, listener: () => void) => {
      if (typeof query.addEventListener === "function") {
        query.addEventListener("change", listener);
        return () => query.removeEventListener("change", listener);
      }

      query.addListener(listener);
      return () => query.removeListener(listener);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const unbindReducedMotion = bindQueryChange(reducedMotionQuery, schedule);
    const unbindCoarsePointer = bindQueryChange(coarsePointerQuery, schedule);
    const unbindTablet = bindQueryChange(tabletQuery, schedule);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      unbindReducedMotion();
      unbindCoarsePointer();
      unbindTablet();
      root.style.removeProperty("--scroll-progress");
      root.style.removeProperty("--scroll-shift-y");
    };
  }, []);

  return null;
}
