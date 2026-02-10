import Link from "next/link";

const footerLinks = [
  { href: "/collections", label: "Collections" },
  { href: "/shop", label: "Shop" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/account/sign-in", label: "Account" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 px-5 py-14 sm:px-8 lg:px-12">
        <div className="card-shell grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <p className="eyebrow">Stay In The Loop</p>
            <h2 className="display-font text-5xl leading-none tracking-[0.06em] sm:text-6xl">
              BTGOD
              <br />
              Newsletter
            </h2>
            <p className="max-w-md text-sm uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              Drop alerts, exclusive access, and private launch updates.
            </p>
          </div>
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <input
              type="email"
              placeholder="Email Address"
              className="field-input h-12"
            />
            <button type="submit" className="btn-solid h-12 min-w-32">
              Join
            </button>
          </form>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-[var(--line)] pt-6">
          <div>
            <p className="eyebrow">BTGOD • New York</p>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Be The Greatest Or Die
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
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

