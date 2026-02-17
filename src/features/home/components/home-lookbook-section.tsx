import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { lookbookFrames, producerSpotlights } from "@/lib/catalog";

export function HomeLookbookSection() {
  const lookbookPreview = lookbookFrames.slice(0, 3);

  return (
    <section className="space-y-8 border-t border-[var(--line)] pt-8 reveal-up">
      <SectionHeading
        eyebrow="Visual + Producer Lab"
        title="Campaign Mood Systems"
        description="Creative direction for shoots, visualizers, and rollout worlds tied to the BTGOD sound."
        action={
          <Link href="/lookbook" className="btn-outline">
            Open Visual Lab
          </Link>
        }
      />
      <div className="gold-divider" />

      <div className="frame-grid">
        {lookbookPreview.map((frame, index) => (
          <article
            key={frame.id}
            className={`card-shell hover-lift overflow-hidden reveal-up ${
              index === 0
                ? "reveal-delay-1"
                : index === 1
                  ? "reveal-delay-2"
                  : "reveal-delay-3"
            }`}
          >
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

      <div className="grid gap-4 md:grid-cols-3">
        {producerSpotlights.map((producer) => (
          <article key={producer.id} className="card-shell overflow-hidden">
            <div className="relative aspect-[4/3] border-b border-[var(--line)]">
              <Image
                src={producer.image}
                alt={producer.name}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                className="object-cover grayscale-[8%]"
              />
            </div>
            <div className="space-y-2 p-4">
              <p className="eyebrow">{producer.city}</p>
              <h3 className="display-font text-3xl leading-none tracking-[0.07em]">
                {producer.name}
              </h3>
              <p className="text-[0.62rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {producer.style}
              </p>
              <p className="text-[0.62rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {producer.placements}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
