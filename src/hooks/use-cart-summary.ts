"use client";

import { useMemo } from "react";
import { productsBySlug } from "@/lib/catalog";
import { useCartState } from "@/store/selectors";
import type { ProductSize } from "@/lib/catalog";

const SHIPPING_RATE = 18;
const TAX_RATE = 0.08;

export type ResolvedCartItem = {
  key: string;
  productSlug: string;
  quantity: number;
  size: ProductSize;
  lineTotal: number;
  product: NonNullable<ReturnType<typeof productsBySlug.get>>;
};

export function useCartSummary() {
  const { cartItems } = useCartState();

  return useMemo(() => {
    const items: ResolvedCartItem[] = cartItems.flatMap((item) => {
      const product = productsBySlug.get(item.productSlug);
      if (!product) {
        return [];
      }

      return [
        {
          key: `${item.productSlug}-${item.size}`,
          productSlug: item.productSlug,
          quantity: item.quantity,
          size: item.size,
          lineTotal: product.price * item.quantity,
          product,
        },
      ];
    });

    const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
    const shipping = items.length > 0 ? SHIPPING_RATE : 0;
    const tax = Math.round(subtotal * TAX_RATE);
    const total = subtotal + shipping + tax;

    return {
      items,
      subtotal,
      shipping,
      tax,
      total,
      isEmpty: items.length === 0,
    };
  }, [cartItems]);
}
