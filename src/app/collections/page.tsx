import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { collections, productsBySlug, releaseTimeline, trendHighlights } from "@/lib/catalog";

export default function CollectionsPage() {
  return (
    <>
      <section className="card-shell space-y-8 p-6 sm:p-8">
        <SectionHeading
          eyebrow="Collection Index"
          title="Four Pillars Of Luxury"
          description="A disciplined release cadence that blends runway-level detail with street-level authority."
          action={
            <Link href="/shop" className="btn-outline">
              Shop All Pieces
            </Link>
          }
        />

        <div className="grid gap-6">
          {collections.map((collection) => {
            const anchorPiece = Array.from(productsBySlug.values()).find(
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
                    <h2 className="display-font text-[clamp(2rem,9vw,3.8rem)] leading-[0.92] tracking-[0.06em]">
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
                      <p className="eyebrow">Pieces</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                        {collection.pieceCount} pieces
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
                    <p className="eyebrow">Anchor Piece</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                      {anchorPiece
                        ? `${anchorPiece.name} • ${anchorPiece.colorway}`
                        : "Catalog index updating"}
                    </p>
                  </article>

                  <div className="mt-auto flex flex-wrap gap-3 border-t border-[var(--line)] pt-4">
                    <Link href="/shop" className="btn-solid">
                      Shop This Drop
                    </Link>
                    <Link href="/lookbook" className="btn-outline">
                      View Moodboard
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
          <p className="eyebrow">Live Trend Moments</p>
          <div className="grid gap-3">
            {trendHighlights.map((trend) => {
              const product = productsBySlug.get(trend.productSlug);
              if (!product) {
                return null;
              }

              return (
                <article key={trend.id} className="border border-[var(--line)] p-4">
                  <p className="display-font text-3xl leading-none tracking-[0.07em]">
                    {trend.rank}
                  </p>
                  <p className="mt-2 text-[0.66rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                    {product.name} • {product.collection}
                  </p>
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                    Sell-through {trend.sellThrough} • Wishlist {trend.wishlist} • {trend.growth}
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
