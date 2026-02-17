import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { collections, releaseTimeline } from "@/lib/catalog";

export function HomeCollectionsSection() {
  return (
    <section className="royal-shell shine-border space-y-8 p-6 sm:p-8 reveal-up">
      <SectionHeading
        eyebrow="Collection Index"
        title="Four Drops. Zero Noise."
        description="Seasonal capsules built with strict visual language and upper-echelon finish quality."
        action={
          <Link href="/collections" className="btn-outline">
            Shop Collections
          </Link>
        }
      />
      <div className="gold-divider" />

      <div className="grid gap-4 lg:grid-cols-4">
        {collections.map((collection, index) => (
          <article
            key={collection.id}
            className={`hover-lift surface-subtle border border-[var(--line)] p-5 transition-colors hover:border-[var(--line-strong)] reveal-up ${
              index === 0
                ? "reveal-delay-1"
                : index === 1
                  ? "reveal-delay-2"
                  : "reveal-delay-3"
            }`}
          >
            <p className="eyebrow">{collection.drop}</p>
            <h3 className="display-font mt-2 text-3xl leading-none tracking-[0.06em]">
              {collection.title}
            </h3>
            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              {collection.description}
            </p>
            <p className="mt-4 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--metal-silver)]">
              {collection.pieceCount} pieces • {collection.releaseWindow}
            </p>
          </article>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {releaseTimeline.map((milestone) => (
          <article key={milestone.title} className="border border-[var(--line)] p-4">
            <p className="eyebrow">{milestone.month}</p>
            <h3 className="display-font mt-2 text-2xl leading-none tracking-[0.07em]">
              {milestone.title}
            </h3>
            <p className="mt-2 text-[0.62rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              {milestone.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
