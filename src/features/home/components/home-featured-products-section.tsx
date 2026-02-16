import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/lib/catalog";

export function HomeFeaturedProductsSection() {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="space-y-8 border-t border-[var(--line)] pt-8 reveal-up">
      <SectionHeading
        eyebrow="Shop • God-Level Essentials"
        title="Curated Wear For Gods Only."
        description="Sharp tailoring, clean outerwear, and heavyweight essentials for the daily mission."
        action={
          <Link href="/shop" className="btn-outline">
            Browse Full Shop
          </Link>
        }
      />
      <div className="gold-divider" />
      <div className="grid gap-5 lg:grid-cols-3">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
