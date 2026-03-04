import Image from "next/image";
import Link from "next/link";
import { brandPillars, labelStats, productsBySlug, trendHighlights } from "@/lib/catalog";

const heroImage =
  "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1400&q=80";

export function HomeHeroSection() {
  const leadTrend = trendHighlights[0];
  const leadProduct = productsBySlug.get(leadTrend.productSlug);

  return (
    <section className="royal-shell shine-border grid gap-8 p-5 sm:p-8 xl:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col gap-7">
        <p className="eyebrow reveal-up">Winter Capsule 2026</p>

        <h1 className="display-font reveal-up reveal-delay-1 text-[clamp(2.4rem,8vw,4.5rem)] leading-[0.9] tracking-[0.05em] sm:tracking-[0.06em]">
          Be The Greatest
          <br />
          <span className="shimmer-text">Or Die</span>
        </h1>

        <p className="reveal-up reveal-delay-2 max-w-2xl text-[0.68rem] uppercase leading-relaxed tracking-[0.14em] text-[var(--text-secondary)] sm:text-[0.72rem] sm:tracking-[0.18em]">
          High-luxury fashion for rappers, athletes, and creators. Minimalism with power,
          crafted in blacks, whites, gold, and silver with elite tailoring discipline.
        </p>

        <div className="reveal-up reveal-delay-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/shop" className="btn-solid w-full sm:w-auto">
            Shop The Drop
          </Link>
          <Link href="/lookbook" className="btn-outline w-full sm:w-auto">
            Enter Lookbook
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {brandPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`hover-lift surface-subtle border border-[var(--line)] p-4 reveal-up ${
                index === 0
                  ? "reveal-delay-1"
                  : index === 1
                    ? "reveal-delay-2"
                    : "reveal-delay-3"
              }`}
            >
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

      <div className="space-y-4">
        <article className="surface-subtle reveal-up reveal-delay-2 border border-[var(--line)] p-4">
          <div className="relative aspect-[4/5] overflow-hidden border border-[var(--line)]">
            <Image
              src={heroImage}
              alt="Lion portrait for BTGOD hero branding"
              fill
              sizes="(max-width: 1279px) 100vw, 40vw"
              className="object-cover grayscale-[12%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <span className="pill surface-subtle absolute left-4 top-4">Crown Editorial</span>
            <div className="absolute right-4 top-4 h-[4.5rem] w-12 sm:h-24 sm:w-16">
              <Image
                src="/BTGOD-symbol.png"
                alt="BTGOD crest overlay"
                fill
                sizes="64px"
                className="object-contain crest-float drop-shadow-[0_8px_16px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>

          {leadProduct ? (
            <div className="mt-4 border border-[var(--line)] p-3">
              <p className="eyebrow">Trend Leader</p>
              <p className="display-font mt-2 text-3xl leading-none tracking-[0.08em]">
                {leadTrend.rank}
              </p>
              <p className="mt-2 text-[0.64rem] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                {leadProduct.name} • {leadProduct.collection}
              </p>
              <p className="mt-1 text-[0.62rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                Sell-through {leadTrend.sellThrough} • {leadTrend.growth} growth
              </p>
            </div>
          ) : null}
        </article>

        <div className="grid gap-3 sm:grid-cols-2">
          {labelStats.map((stat) => (
            <article key={stat.label} className="surface-subtle border border-[var(--line)] p-3">
              <p className="eyebrow">{stat.label}</p>
              <p className="display-font mt-2 text-3xl leading-none tracking-[0.08em] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[0.58rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
