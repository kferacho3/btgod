"use client";

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

export function SiteHeader() {
  const cartCount = useCartItemCount();
  const tickerItems = [
    "Be The Greatest Or Die",
    "Dress Like A God",
    "Live Like A Legend",
    "Never Regress",
  ];
  const tickerLoop = [...tickerItems, ...tickerItems];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] glass-shell">
      <div className="mx-auto flex w-full max-w-[1460px] flex-col gap-4 px-5 py-3 sm:px-8 lg:px-10">
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

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden gap-2 sm:flex">
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
            <Link href="/cart" className="btn-outline h-9 min-w-[6.4rem] px-3 py-0">
              Cart ({cartCount})
            </Link>
            <ThemeToggle />
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_84%,transparent)] px-3 py-2 text-[0.64rem] uppercase tracking-[0.24em] text-[var(--text-secondary)] md:hidden">
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

        <div className="overflow-hidden border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-2">
          <div className="ticker-marquee">
            <div className="ticker-track whitespace-nowrap text-lg tracking-[0.42em] sm:text-xl">
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
