import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredProductSlugs, productsBySlug } from "@/lib/catalog";
import type { Product } from "@/lib/catalog";

export function HomeFeaturedProductsSection() {
  const featuredProducts = featuredProductSlugs
    .map((slug) => productsBySlug.get(slug))
    .filter((product): product is Product => Boolean(product));

  return (
    <section className="space-y-8 border-t border-[var(--line)] pt-8 reveal-up">
      <SectionHeading
        eyebrow="Shop • God-Level Essentials"
        title="Curated Wear For Gods Only"
        description="Statement pieces selected for silhouette quality, material integrity, and real-world swagger."
        action={
          <Link href="/shop" className="btn-outline">
            Browse Full Shop
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
