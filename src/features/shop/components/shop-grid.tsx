"use client";

import { ProductCard } from "@/components/product-card";
import { useShopProducts } from "@/hooks/use-shop-products";

export function ShopGrid() {
  const products = useShopProducts();

  if (products.length === 0) {
    return (
      <section className="card-shell p-6 sm:p-8">
        <p className="eyebrow">No Matches</p>
        <h2 className="display-font mt-2 text-5xl leading-none tracking-[0.07em]">
          No Beats Found
        </h2>
        <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
          Try another filter or sort to browse more of the catalog.
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
