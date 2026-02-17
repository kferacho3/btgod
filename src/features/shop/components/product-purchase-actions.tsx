"use client";

import { useState } from "react";
import { sizeTiers } from "@/lib/catalog";
import { useCartActions } from "@/store/selectors";
import type { ProductSize } from "@/lib/catalog";

type ProductPurchaseActionsProps = {
  productSlug: string;
};

export function ProductPurchaseActions({
  productSlug,
}: ProductPurchaseActionsProps) {
  const [size, setSize] = useState<ProductSize>("M");
  const { addToCart } = useCartActions();

  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
      <div className="flex flex-wrap gap-2">
        {sizeTiers.map((tier) => (
          <button
            key={tier.code}
            type="button"
            onClick={() => setSize(tier.code)}
            className={`pill ${
              size === tier.code
                ? "border-[var(--metal-gold)] text-[var(--text-primary)]"
                : ""
            }`}
          >
            {tier.code} • {tier.name}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="btn-solid w-full sm:w-auto"
        onClick={() => addToCart({ productSlug, size })}
      >
        Add To Cart
      </button>
    </div>
  );
}
