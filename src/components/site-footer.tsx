import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";

const footerLinks = [
  { href: "/collections", label: "Collections" },
  { href: "/shop", label: "Shop" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/account/sign-in", label: "Account" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto flex w-full max-w-[1460px] flex-col gap-10 px-4 py-14 sm:px-8 lg:px-10">
        <div className="brand-banner px-4 py-2">
          <div className="banner-marquee">
            <div className="banner-track text-[0.58rem] uppercase tracking-[0.14em] text-[var(--text-secondary)] sm:tracking-[0.22em]">
              <span>Drop Alerts</span>
              <span className="metal-text">•</span>
              <span>Private Capsule Access</span>
              <span className="metal-text">•</span>
              <span>Members-Only Releases</span>
              <span className="metal-text">•</span>
              <span>Drop Alerts</span>
              <span className="metal-text">•</span>
              <span>Private Capsule Access</span>
              <span className="metal-text">•</span>
              <span>Members-Only Releases</span>
            </div>
          </div>
        </div>

        <div className="royal-shell shine-border grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <p className="eyebrow">Stay In The Loop</p>
            <h2 className="display-font shimmer-text text-[clamp(2rem,8vw,3.3rem)] leading-[0.95] tracking-[0.07em] sm:tracking-[0.08em]">
              BTGOD Newsletter
            </h2>
            <p className="max-w-md text-[0.68rem] uppercase tracking-[0.17em] text-[var(--text-secondary)]">
              Drop alerts, limited runs, and exclusive offers straight to your inbox.
            </p>
          </div>
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <input type="email" placeholder="Email Address" className="field-input h-12" />
            <button type="submit" className="btn-solid h-12 w-full sm:w-auto sm:min-w-32">
              Join
            </button>
          </form>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-[var(--line)] pt-6">
          <div className="space-y-2">
            <BrandLockup compact />
            <p className="text-[0.63rem] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              New York City • Built For Greatness
            </p>
          </div>
          <nav className="flex w-full flex-wrap justify-start gap-4 text-[0.63rem] uppercase tracking-[0.2em] text-[var(--text-secondary)] sm:w-auto sm:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
