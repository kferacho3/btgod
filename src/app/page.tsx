import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { brandPillars, collections, lookbookFrames, products } from "@/lib/catalog";

const heroImage =
  "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const lookbookPreview = lookbookFrames.slice(0, 3);

  return (
    <>
      <section className="card-shell grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-7">
          <p className="eyebrow">Drop 01 • The Aura Uniform</p>
          <h1 className="display-font text-6xl leading-[0.88] tracking-[0.06em] sm:text-7xl lg:text-8xl">
            BE THE
            <br />
            GREATEST
            <br />
            <span className="metal-text">OR DIE.</span>
          </h1>
          <p className="max-w-2xl text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
            Minimal structure. Street elegance. Monochrome discipline with gold
            and silver intention. Built for people chasing a god-tier standard.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/shop" className="btn-solid">
              Shop The Drop
            </Link>
            <Link href="/lookbook" className="btn-outline">
              Open Lookbook
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {brandPillars.map((pillar) => (
              <article key={pillar.title} className="border border-[var(--line)] p-4">
                <h2 className="display-font text-3xl leading-none tracking-[0.08em]">
                  {pillar.title}
                </h2>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <article className="border border-[var(--line)] bg-[var(--bg-elevated)] p-4">
          <div className="relative aspect-[4/5] overflow-hidden border border-[var(--line)]">
            <Image
              src={heroImage}
              alt="Editorial model in black minimal fashion style"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className="object-cover grayscale-[22%]"
              priority
            />
            <span className="pill absolute left-4 top-4 bg-[color-mix(in_srgb,var(--bg-elevated)_90%,transparent)]">
              Signature Editorial
            </span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="border border-[var(--line)] p-3">
              <p className="eyebrow">Brand Name</p>
              <p className="display-font text-3xl tracking-[0.08em]">BTGOD</p>
            </div>
            <div className="border border-[var(--line)] p-3">
              <p className="eyebrow">Expanded Form</p>
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                Be The Greatest Or Die
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Featured Grid"
          title="City Armor Ready."
          description="Engineered silhouettes for movement, confidence, and everyday dominance."
          action={
            <Link href="/shop" className="btn-outline">
              Browse Full Shop
            </Link>
          }
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="card-shell space-y-8 p-6 sm:p-8">
        <SectionHeading
          eyebrow="Collection Index"
          title="Three Drops. Zero Noise."
          description="Seasonal capsules with disciplined palettes and statement cuts."
          action={
            <Link href="/collections" className="btn-outline">
              Shop Collections
            </Link>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.id}
              className="border border-[var(--line)] p-5 transition-colors hover:border-[var(--line-strong)]"
            >
              <p className="eyebrow">{collection.drop}</p>
              <h3 className="display-font mt-2 text-4xl leading-none tracking-[0.06em]">
                {collection.title}
              </h3>
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {collection.description}
              </p>
              <p className="mt-4 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--metal-silver)]">
                Mood • {collection.mood}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Lookbook Lab"
          title="Generate The Streets."
          description="Visual references for campaign energy, mood, and styling direction."
          action={
            <Link href="/lookbook" className="btn-outline">
              View Full Lookbook
            </Link>
          }
        />
        <div className="frame-grid">
          {lookbookPreview.map((frame) => (
            <article key={frame.id} className="card-shell overflow-hidden">
              <div className="relative aspect-[4/5] border-b border-[var(--line)]">
                <Image
                  src={frame.image}
                  alt={frame.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="object-cover grayscale-[8%]"
                />
              </div>
              <div className="space-y-3 p-4">
                <h3 className="display-font text-3xl leading-none tracking-[0.07em]">
                  {frame.title}
                </h3>
                <p className="text-[0.66rem] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                  {frame.prompt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
