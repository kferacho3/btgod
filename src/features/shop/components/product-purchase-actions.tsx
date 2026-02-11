"use client";

import { useState } from "react";
import { useCartActions } from "@/store/selectors";
import type { ProductSize } from "@/store/types";

type ProductPurchaseActionsProps = {
  productSlug: string;
};

const sizes: ProductSize[] = ["S", "M", "L", "XL"];

export function ProductPurchaseActions({
  productSlug,
}: ProductPurchaseActionsProps) {
  const [size, setSize] = useState<ProductSize>("M");
  const { addToCart } = useCartActions();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex gap-2">
        {sizes.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSize(option)}
            className={`pill ${
              size === option ? "border-[var(--metal-silver)] text-[var(--text-primary)]" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="btn-solid"
        onClick={() => addToCart({ productSlug, size })}
      >
        Add To Cart
      </button>
    </div>
  );
}

