"use client";

import { useMemo } from "react";
import { productsBySlug } from "@/lib/catalog";
import { useCartState } from "@/store/selectors";
import type { LicenseTierCode } from "@/lib/catalog";

const DELIVERY_RATE = 14;
const TAX_RATE = 0.075;

export type ResolvedCartItem = {
  key: string;
  productSlug: string;
  quantity: number;
  license: LicenseTierCode;
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
          key: `${item.productSlug}-${item.license}`,
          productSlug: item.productSlug,
          quantity: item.quantity,
          license: item.license,
          lineTotal: product.price * item.quantity,
          product,
        },
      ];
    });

    const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
    const delivery = items.length > 0 ? DELIVERY_RATE : 0;
    const tax = Math.round(subtotal * TAX_RATE);
    const total = subtotal + delivery + tax;

    return {
      items,
      subtotal,
      delivery,
      tax,
      total,
      isEmpty: items.length === 0,
    };
  }, [cartItems]);
}
