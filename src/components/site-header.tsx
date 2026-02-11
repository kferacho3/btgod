"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCartItemCount } from "@/store/selectors";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/account/sign-in", label: "Sign In" },
  { href: "/cart", label: "Cart" },
];

export function SiteHeader() {
  const cartCount = useCartItemCount();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] glass-shell">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-5 px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="display-font inline-flex h-12 w-12 items-center justify-center border border-[var(--line-strong)] text-xl tracking-[0.22em] text-[var(--text-primary)] transition-colors group-hover:text-[var(--metal-gold)]">
              BG
            </span>
            <span className="flex flex-col">
              <span className="eyebrow text-[0.64rem] tracking-[0.18em]">
                Be The Greatest Or Die
              </span>
              <span className="display-font text-3xl tracking-[0.21em] text-[var(--text-primary)]">
                BTGOD
              </span>
            </span>
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <ThemeToggle />
            <Link href="/cart" className="btn-outline min-w-[6.5rem]">
              Cart ({cartCount})
            </Link>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 border-y border-[var(--line)] py-3 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          {navLinks.map((link) => (
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
          <p className="display-font whitespace-nowrap text-center text-lg tracking-[0.4em] text-[var(--metal-silver)] sm:text-xl">
            BTGOD  BTGOD  BTGOD  BTGOD  BTGOD  BTGOD
          </p>
        </div>
      </div>
    </header>
  );
}
