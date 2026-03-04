"use client";

import { ProductCard } from "@/components/product-card";
import { useShopProducts } from "@/hooks/use-shop-products";

export function ShopGrid() {
  const products = useShopProducts();

  if (products.length === 0) {
    return (
      <section className="card-shell p-6 sm:p-8">
        <p className="eyebrow">No Matches</p>
        <h2 className="display-font mt-2 text-[clamp(1.9rem,9vw,3.1rem)] leading-[0.95] tracking-[0.07em]">
          No Pieces Found
        </h2>
        <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
          Try another filter or sort to browse more from the catalog.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <p className="eyebrow">{products.length} results</p>
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
