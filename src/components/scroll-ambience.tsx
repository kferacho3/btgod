"use client";

import { useEffect } from "react";

export function ScrollAmbience() {
  useEffect(() => {
    const root = document.documentElement;
    let rafId = 0;
    let currentY = window.scrollY;
    let targetY = window.scrollY;

    const getMaxScroll = () =>
      Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);

    const apply = () => {
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
      targetY = window.scrollY;
      if (!rafId) {
        rafId = window.requestAnimationFrame(apply);
      }
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      root.style.removeProperty("--scroll-progress");
      root.style.removeProperty("--scroll-shift-y");
    };
  }, []);

  return null;
}

