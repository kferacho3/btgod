import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { ProductPurchaseActions } from "@/features/shop/components/product-purchase-actions";
import {
  getProductBySlug,
  products,
  sizeTiers,
  trendHighlights,
} from "@/lib/catalog";
import { formatCurrency } from "@/lib/format";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const trendSnapshot = trendHighlights.find(
    (highlight) => highlight.productSlug === product.slug,
  );

  const relatedProducts = products
    .filter(
      (item) =>
        item.slug !== product.slug &&
        (item.collection === product.collection || item.category === product.category),
    )
    .slice(0, 3);

  return (
    <>
      <section className="card-shell grid gap-8 p-5 sm:p-8 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[4/5] overflow-hidden border border-[var(--line)]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1200px) 100vw, 45vw"
            className="object-cover grayscale-[10%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <span className="pill surface-subtle absolute left-4 top-4">{product.badge}</span>
          <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--line)] bg-black/45 px-4 py-3 text-[0.62rem] uppercase tracking-[0.17em] text-[var(--text-secondary)]">
            {product.weight} • {product.category} • {product.releaseDate}
          </div>
        </div>

        <div className="space-y-7">
          <div className="space-y-3">
            <p className="eyebrow">{product.collection}</p>
            <h1 className="display-font text-[clamp(2.2rem,7vw,4.5rem)] leading-[0.9] tracking-[0.06em]">
              {product.name}
            </h1>
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
              {product.subtitle}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <article className="border border-[var(--line)] p-4">
              <p className="eyebrow">Materials</p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {product.materials}
              </p>
            </article>
            <article className="border border-[var(--line)] p-4">
              <p className="eyebrow">Fit</p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {product.fit}
              </p>
            </article>
            <article className="border border-[var(--line)] p-4">
              <p className="eyebrow">Silhouette</p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {product.silhouette}
              </p>
            </article>
            <article className="border border-[var(--line)] p-4">
              <p className="eyebrow">Colorway</p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {product.colorway}
              </p>
            </article>
          </div>

          <article className="border border-[var(--line)] p-4">
            <p className="eyebrow">Aura Notes</p>
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              {product.aura}
            </p>
          </article>

          <div className="flex flex-wrap gap-2">
            {product.usageTags.map((tag) => (
              <span key={tag} className="pill px-2 py-1 text-[0.58rem]">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-[var(--line)] pt-5">
            <p className="display-font text-4xl tracking-[0.08em] sm:text-5xl">
              {formatCurrency(product.price)}
            </p>
            <ProductPurchaseActions productSlug={product.slug} />
            <Link href="/shop" className="btn-outline w-full sm:w-auto">
              Back To Shop
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="royal-shell space-y-4 p-5 sm:p-6">
          <p className="eyebrow">Size Architecture</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {sizeTiers.map((tier) => (
              <article key={tier.code} className="border border-[var(--line)] p-4">
                <p className="display-font text-3xl leading-none tracking-[0.08em]">
                  {tier.code} • {tier.name}
                </p>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                  {tier.description}
                </p>
              </article>
            ))}
          </div>
        </article>

        <article className="royal-shell space-y-4 p-5 sm:p-6">
          <p className="eyebrow">Trend Snapshot</p>
          {trendSnapshot ? (
            <div className="space-y-3 border border-[var(--line)] p-4">
              <h2 className="display-font text-4xl leading-none tracking-[0.07em]">
                {trendSnapshot.rank}
              </h2>
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                Sell-through {trendSnapshot.sellThrough}
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                Wishlist {trendSnapshot.wishlist}
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--metal-gold)]">
                Growth {trendSnapshot.growth}
              </p>
            </div>
          ) : (
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
              Fresh drop. Trend analytics are still being indexed.
            </p>
          )}
        </article>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="display-font text-5xl tracking-[0.06em]">Related Pieces</h2>
          <Link href="/shop" className="btn-outline">
            Shop All
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}
