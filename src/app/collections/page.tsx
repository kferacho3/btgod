import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { collections, products } from "@/lib/catalog";

export default function CollectionsPage() {
  return (
    <>
      <section className="card-shell space-y-8 p-6 sm:p-8">
        <SectionHeading
          eyebrow="Collection Index"
          title="Six Lines. No Noise."
          description="Structured drops with monochrome focus and intentional metal accents."
          action={
            <Link href="/shop" className="btn-outline">
              Shop All Products
            </Link>
          }
        />

        <div className="grid gap-6">
          {collections.map((collection) => {
            const match = products.find(
              (product) => product.collection === collection.title,
            );

            return (
              <article
                key={collection.id}
                className="grid gap-4 border border-[var(--line)] p-4 sm:p-5 lg:grid-cols-[0.42fr_0.58fr]"
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-[var(--line)]">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 1000px) 100vw, 38vw"
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
                  <div className="grid gap-3 sm:grid-cols-2">
                    <article className="border border-[var(--line)] p-4">
                      <p className="eyebrow">Mood</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                        {collection.mood}
                      </p>
                    </article>
                    <article className="border border-[var(--line)] p-4">
                      <p className="eyebrow">Anchor Piece</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                        {match ? match.name : "Coming Soon"}
                      </p>
                    </article>
                  </div>
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
    </>
  );
}

