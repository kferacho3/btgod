import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/lib/catalog";

export function HomeFeaturedProductsSection() {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Featured Grid"
        title="City Armor Ready."
        description="Engineered silhouettes for movement, confidence, and everyday dominance."
        action={
          <Link href="/shop" className="btn-outline">
            Browse Full Shop
          </Link>
        }
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

