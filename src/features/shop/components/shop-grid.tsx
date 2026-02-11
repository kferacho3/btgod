"use client";

import { ProductCard } from "@/components/product-card";
import { useShopProducts } from "@/hooks/use-shop-products";

export function ShopGrid() {
  const products = useShopProducts();

  return (
    <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

