"use client";

import { useState } from "react";
import Link from "next/link";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { BrandLockup } from "@/components/brand-lockup";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCartItemCount } from "@/store/selectors";

const mainLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/lookbook", label: "Lookbook" },
];

const utilityLinks = [
  { href: "/account/sign-in", label: "Login" },
  { href: "/account/sign-in", label: "Signup" },
];

const tickerItems = [
  "Be The Greatest Or Die",
  "Dress Like A God",
  "Live Like A Legend",
  "Never Regress",
];

const tickerLoop = [...tickerItems, ...tickerItems];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = useCartItemCount();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] glass-shell">
      <div className="mx-auto flex w-full max-w-[1460px] flex-col gap-4 px-4 py-3 sm:px-8 lg:px-10">
        <AnnouncementBanner />

        <div className="grid items-center gap-3 border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-3 md:grid-cols-[1fr_auto_1fr]">
          <nav className="hidden items-center gap-4 text-[0.62rem] uppercase tracking-[0.21em] text-[var(--text-secondary)] md:flex">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/" className="mx-auto">
            <BrandLockup compact />
          </Link>

          <div className="ml-auto flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto">
            <button
              type="button"
              className="btn-outline h-10 min-w-[5.1rem] px-3 py-0 md:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-site-menu"
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </button>

            <div className="hidden gap-2 lg:flex">
              {utilityLinks.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="btn-outline h-9 px-3 py-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/cart"
              className="btn-outline h-10 min-w-[5rem] px-3 py-0 sm:min-w-[6rem]"
            >
              Cart ({cartCount})
            </Link>
            <ThemeToggle />
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div
            id="mobile-site-menu"
            className="surface-soft rounded-sm border border-[var(--line)] px-3 py-3 md:hidden"
          >
            <nav className="grid gap-2 text-[0.68rem] uppercase tracking-[0.17em] text-[var(--text-secondary)]">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm border border-[var(--line)] px-3 py-2 transition-colors hover:text-[var(--text-primary)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="gold-divider my-1" />

              {utilityLinks.map((link) => (
                <Link
                  key={`${link.href}-${link.label}-mobile`}
                  href={link.href}
                  className="rounded-sm border border-[var(--line)] px-3 py-2 transition-colors hover:text-[var(--text-primary)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}

        <div className="overflow-hidden border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-2">
          <div className="ticker-marquee">
            <div className="ticker-track whitespace-nowrap text-sm tracking-[0.2em] sm:text-xl sm:tracking-[0.34em]">
              {tickerLoop.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="inline-flex items-center gap-4 pr-8 lux-ticker"
                >
                  {item}
                  <span className="text-[var(--metal-gold)]">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-divider" />
      </div>
    </header>
  );
}
