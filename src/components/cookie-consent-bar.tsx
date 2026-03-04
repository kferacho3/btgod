"use client";

import { useState } from "react";

type ConsentState = "essential" | "all";

const STORAGE_KEY = "btgod-cookie-consent";

const getInitialVisibility = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  return saved !== "essential" && saved !== "all";
};

export function CookieConsentBar() {
  const [isVisible, setIsVisible] = useState(getInitialVisibility);

  const handleConsent = (value: ConsentState) => {
    localStorage.setItem(STORAGE_KEY, value);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="fixed inset-x-0 bottom-0 z-[60] border-t border-[var(--line)] glass-shell">
      <div className="mx-auto flex w-full max-w-[1460px] flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p className="text-[0.63rem] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
          <span className="mr-2 font-semibold text-[var(--text-primary)]">Cookies</span>
          We use essential and analytics cookies to improve your experience.
        </p>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <button
            type="button"
            className="btn-outline h-10 w-full px-4 py-0 sm:w-auto"
            onClick={() => handleConsent("essential")}
          >
            Essential Only
          </button>
          <button
            type="button"
            className="btn-solid h-10 w-full px-4 py-0 sm:w-auto"
            onClick={() => handleConsent("all")}
          >
            Accept All
          </button>
        </div>
      </div>
    </aside>
  );
}
