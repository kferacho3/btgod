import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { ProductPurchaseActions } from "@/features/shop/components/product-purchase-actions";
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
      <section className="card-shell grid gap-8 p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[4/5] overflow-hidden border border-[var(--line)]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1000px) 100vw, 45vw"
            className="object-cover grayscale-[14%]"
            priority
          />
          <span className="pill surface-subtle absolute left-4 top-4">
            {product.badge}
          </span>
        </div>

        <div className="space-y-7">
          <p className="eyebrow">{product.collection}</p>
          <h1 className="display-font text-[clamp(2.2rem,8vw,4.4rem)] leading-[0.92] tracking-[0.06em]">
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
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}
