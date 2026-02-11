import Image from "next/image";
import Link from "next/link";
import { brandPillars } from "@/lib/catalog";

const heroImage =
  "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1400&q=80";

export function HomeHeroSection() {
  return (
    <section className="royal-shell grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="flex flex-col gap-7">
        <p className="eyebrow">Winter Drop 2026</p>
        <div className="relative h-14 w-48 sm:h-16 sm:w-60">
          <Image
            src="/brand/btgod-wordmark.svg"
            alt="BTGOD wordmark"
            fill
            sizes="240px"
            className="object-contain object-left"
            priority
          />
        </div>
        <h1 className="display-font text-5xl leading-[0.9] tracking-[0.055em] sm:text-6xl lg:text-7xl">
          Be The Greatest
          <br />
          Or Die
        </h1>
        <p className="max-w-2xl text-[0.72rem] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
          Dress like a god. Live like a legend. Swaggered minimalism with crown-tier precision, engineered for builders and grinders.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/shop" className="btn-solid">
            Shop The Drop
          </Link>
          <Link href="/lookbook" className="btn-outline">
            Enter Lookbook
          </Link>
        </div>
        <p className="max-w-2xl border-t border-[var(--line)] pt-5 text-[0.68rem] uppercase tracking-[0.17em] text-[var(--text-secondary)]">
          Swag out, made for everyone, from the greatest to the grinders. Rule the world. Never regress.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {brandPillars.map((pillar) => (
            <article key={pillar.title} className="border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_88%,transparent)] p-4">
              <h2 className="display-font text-2xl leading-none tracking-[0.09em]">
                {pillar.title}
              </h2>
              <p className="mt-2 text-[0.64rem] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <article className="border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_90%,transparent)] p-4">
        <div className="relative aspect-[4/5] overflow-hidden border border-[var(--line)]">
          <Image
            src={heroImage}
            alt="Lion portrait for BTGOD hero branding"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className="object-cover grayscale-[18%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          <span className="pill absolute left-4 top-4 bg-[color-mix(in_srgb,var(--bg-elevated)_90%,transparent)]">
            Crown Editorial
          </span>
          <div className="absolute right-4 top-4 h-[4.5rem] w-12 sm:h-24 sm:w-16">
            <Image
              src="/brand/btgod-crest.svg"
              alt="BTGOD crest overlay"
              fill
              sizes="64px"
              className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_88%,transparent)] p-3">
            <p className="eyebrow">Brand Name</p>
            <p className="display-font text-3xl tracking-[0.08em] metal-text">BTGOD</p>
          </div>
          <div className="border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_88%,transparent)] p-3">
            <p className="eyebrow">Expanded Form</p>
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              Be The Greatest Or Die
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
