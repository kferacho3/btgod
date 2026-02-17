import Image from "next/image";
import Link from "next/link";
import { chartHighlights, productsBySlug } from "@/lib/catalog";

const sidebarLinks = [
  { href: "/shop", label: "Browse Beats" },
  { href: "/collections", label: "Current Drops" },
  { href: "/lookbook", label: "Visual Lab" },
  { href: "/cart", label: "License Cart" },
  { href: "/account", label: "Artist Access" },
];

const signatures = [
  "Dress Like A God",
  "Sound Like A Legend",
  "Never Regress",
];

export function SiteSidebar() {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-[11.5rem] space-y-5">
        <article className="royal-shell hover-lift space-y-5 p-4">
          <p className="eyebrow reveal-up">God Aura Index</p>
          <div className="relative mx-auto h-36 w-24 crest-float reveal-up reveal-delay-1">
            <Image
              src="/BTGOD-symbol.png"
              alt="BTGOD crest symbol"
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>
          <div className="gold-divider" />

          <nav className="grid gap-1 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            {sidebarLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`sidebar-link px-3 py-2 transition-colors hover:text-[var(--text-primary)] reveal-up ${
                  index === 0
                    ? "reveal-delay-1"
                    : index === 1
                      ? "reveal-delay-2"
                      : "reveal-delay-3"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </article>

        <article className="brand-banner space-y-4 p-4 hover-lift">
          <p className="eyebrow">Chart Command</p>
          <ul className="space-y-3">
            {chartHighlights.slice(0, 3).map((item) => {
              const product = productsBySlug.get(item.beatSlug);
              if (!product) {
                return null;
              }

              return (
                <li key={item.id} className="space-y-1 border-b border-[var(--line)] pb-3 last:border-b-0 last:pb-0">
                  <p className="text-[0.64rem] uppercase tracking-[0.18em] text-[var(--metal-gold)]">
                    {item.rank}
                  </p>
                  <p className="text-[0.63rem] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                    {product.name}
                  </p>
                  <p className="text-[0.6rem] uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                    Streams {item.streams}
                  </p>
                </li>
              );
            })}
          </ul>
        </article>

        <article className="brand-banner space-y-4 p-4 hover-lift">
          <p className="eyebrow">Code of Aura</p>
          <ul className="space-y-2">
            {signatures.map((line) => (
              <li
                key={line}
                className="text-[0.67rem] uppercase tracking-[0.17em] text-[var(--text-secondary)]"
              >
                {line}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </aside>
  );
}
