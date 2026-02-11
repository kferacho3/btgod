import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { collections } from "@/lib/catalog";

export function HomeCollectionsSection() {
  return (
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
  );
}

