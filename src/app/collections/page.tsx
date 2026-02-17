import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { chartHighlights, collections, productsBySlug, releaseTimeline } from "@/lib/catalog";

export default function CollectionsPage() {
  return (
    <>
      <section className="card-shell space-y-8 p-6 sm:p-8">
        <SectionHeading
          eyebrow="Collection Index"
          title="Drop Universe"
          description="A structured release cadence with dedicated sonic lanes, chart strategy, and producer intent."
          action={
            <Link href="/shop" className="btn-outline">
              Shop All Beats
            </Link>
          }
        />

        <div className="grid gap-6">
          {collections.map((collection) => {
            const anchorBeat = Array.from(productsBySlug.values()).find(
              (product) => product.collection === collection.title,
            );

            return (
              <article
                key={collection.id}
                className="grid gap-4 border border-[var(--line)] p-4 sm:p-5 xl:grid-cols-[0.42fr_0.58fr]"
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-[var(--line)]">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 38vw"
                    className="object-cover grayscale-[18%]"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="space-y-2">
                    <p className="eyebrow">{collection.drop}</p>
                    <h2 className="display-font text-5xl leading-none tracking-[0.06em] sm:text-6xl">
                      {collection.title}
                    </h2>
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                      {collection.description}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <article className="border border-[var(--line)] p-4">
                      <p className="eyebrow">Mood</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                        {collection.mood}
                      </p>
                    </article>
                    <article className="border border-[var(--line)] p-4">
                      <p className="eyebrow">Tracks</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                        {collection.trackCount} records
                      </p>
                    </article>
                    <article className="border border-[var(--line)] p-4">
                      <p className="eyebrow">Window</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                        {collection.releaseWindow}
                      </p>
                    </article>
                  </div>

                  <article className="border border-[var(--line)] p-4">
                    <p className="eyebrow">Anchor Beat</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                      {anchorBeat
                        ? `${anchorBeat.name} • ${anchorBeat.producer} • ${anchorBeat.bpm} BPM`
                        : "Catalog index updating"}
                    </p>
                  </article>

                  <div className="mt-auto flex flex-wrap gap-3 border-t border-[var(--line)] pt-4">
                    <Link href="/shop" className="btn-solid">
                      License This Drop
                    </Link>
                    <Link href="/lookbook" className="btn-outline">
                      Open Visual Lab
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <article className="royal-shell space-y-4 p-5 sm:p-6">
          <p className="eyebrow">Release Timeline</p>
          <div className="grid gap-3">
            {releaseTimeline.map((milestone) => (
              <article key={milestone.title} className="border border-[var(--line)] p-4">
                <p className="eyebrow">{milestone.month}</p>
                <h2 className="display-font mt-2 text-3xl leading-none tracking-[0.07em]">
                  {milestone.title}
                </h2>
                <p className="mt-2 text-[0.64rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                  {milestone.detail}
                </p>
              </article>
            ))}
          </div>
        </article>

        <article className="royal-shell space-y-4 p-5 sm:p-6">
          <p className="eyebrow">Live Chart Moments</p>
          <div className="grid gap-3">
            {chartHighlights.map((highlight) => {
              const beat = productsBySlug.get(highlight.beatSlug);
              if (!beat) {
                return null;
              }

              return (
                <article key={highlight.id} className="border border-[var(--line)] p-4">
                  <p className="display-font text-3xl leading-none tracking-[0.07em]">
                    {highlight.rank}
                  </p>
                  <p className="mt-2 text-[0.66rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                    {beat.name} • {beat.producer}
                  </p>
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                    {highlight.streams} streams • {highlight.saves} saves • {highlight.growth}
                  </p>
                </article>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
}
