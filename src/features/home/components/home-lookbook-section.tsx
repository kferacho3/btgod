import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { lookbookFrames } from "@/lib/catalog";

export function HomeLookbookSection() {
  const lookbookPreview = lookbookFrames.slice(0, 3);

  return (
    <section className="space-y-8 border-t border-[var(--line)] pt-8">
      <SectionHeading
        eyebrow="Lookbook Lab"
        title="Enter The Lookbook."
        description="Campaign references and styling ideation for elevated street narratives."
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
  );
}
