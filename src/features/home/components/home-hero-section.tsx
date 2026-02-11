import Image from "next/image";
import Link from "next/link";
import { brandPillars } from "@/lib/catalog";

const heroImage =
  "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1400&q=80";

export function HomeHeroSection() {
  return (
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
  );
}

