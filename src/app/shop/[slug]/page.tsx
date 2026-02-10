import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/catalog";
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
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <section className="card-shell grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[4/5] overflow-hidden border border-[var(--line)]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1000px) 100vw, 45vw"
            className="object-cover grayscale-[14%]"
            priority
          />
          <span className="pill absolute left-4 top-4 bg-[color-mix(in_srgb,var(--bg-elevated)_90%,transparent)]">
            {product.badge}
          </span>
        </div>

        <div className="space-y-7">
          <p className="eyebrow">{product.collection}</p>
          <h1 className="display-font text-6xl leading-[0.9] tracking-[0.06em] sm:text-7xl">
            {product.name}
          </h1>
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
            {product.subtitle}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <article className="border border-[var(--line)] p-4">
              <p className="eyebrow">Materials</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                {product.materials}
              </p>
            </article>
            <article className="border border-[var(--line)] p-4">
              <p className="eyebrow">Fit</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                {product.fit}
              </p>
            </article>
          </div>
          <article className="border border-[var(--line)] p-4">
            <p className="eyebrow">Aura Notes</p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
              {product.aura}
            </p>
          </article>
          <div className="flex flex-wrap items-center gap-4 border-t border-[var(--line)] pt-5">
            <p className="display-font text-5xl tracking-[0.08em]">
              {formatCurrency(product.price)}
            </p>
            <button type="button" className="btn-solid">
              Add To Cart
            </button>
            <Link href="/shop" className="btn-outline">
              Back To Shop
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="display-font text-5xl tracking-[0.06em]">
            Related Pieces
          </h2>
          <Link href="/shop" className="btn-outline">
            Shop All
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <article key={item.slug} className="card-shell overflow-hidden">
              <div className="relative aspect-[4/5] border-b border-[var(--line)]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="object-cover grayscale-[12%]"
                />
              </div>
              <div className="space-y-4 p-4">
                <h3 className="display-font text-3xl leading-none tracking-[0.07em]">
                  {item.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                  {item.subtitle}
                </p>
                <div className="flex items-center justify-between gap-3 border-t border-[var(--line)] pt-4">
                  <p className="display-font text-3xl tracking-[0.08em]">
                    {formatCurrency(item.price)}
                  </p>
                  <Link href={`/shop/${item.slug}`} className="btn-outline">
                    View Piece
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

