import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredProductSlugs, productsBySlug } from "@/lib/catalog";

export function HomeFeaturedProductsSection() {
  const featuredProducts = featuredProductSlugs
    .map((slug) => productsBySlug.get(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  return (
    <section className="space-y-8 border-t border-[var(--line)] pt-8 reveal-up">
      <SectionHeading
        eyebrow="Top Catalog"
        title="Current Heat Rotation"
        description="The most requested BTGOD beats this cycle, selected for artist conversion and chart momentum."
        action={
          <Link href="/shop" className="btn-outline">
            Browse Full Catalog
          </Link>
        }
      />
      <div className="gold-divider" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
