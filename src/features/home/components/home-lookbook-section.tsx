import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { atelierSpotlights, lookbookFrames } from "@/lib/catalog";

export function HomeLookbookSection() {
  const lookbookPreview = lookbookFrames.slice(0, 3);

  return (
    <section className="space-y-8 border-t border-[var(--line)] pt-8 reveal-up">
      <SectionHeading
        eyebrow="Lookbook Lab"
        title="Visual Language, Elevated"
        description="Campaign direction, styling cues, and texture references for every drop narrative."
        action={
          <Link href="/lookbook" className="btn-outline">
            View Full Lookbook
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
        {atelierSpotlights.map((atelier) => (
          <article key={atelier.id} className="card-shell overflow-hidden">
            <div className="relative aspect-[4/3] border-b border-[var(--line)]">
              <Image
                src={atelier.image}
                alt={atelier.name}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                className="object-cover grayscale-[8%]"
              />
            </div>
            <div className="space-y-2 p-4">
              <p className="eyebrow">{atelier.base}</p>
              <h3 className="display-font text-3xl leading-none tracking-[0.07em]">
                {atelier.name}
              </h3>
              <p className="text-[0.62rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {atelier.discipline}
              </p>
              <p className="text-[0.62rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {atelier.signature}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
