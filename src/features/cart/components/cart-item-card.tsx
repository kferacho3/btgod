"use client";

import Image from "next/image";
import { formatCurrency } from "@/lib/format";
import { useCartActions } from "@/store/selectors";
import type { ResolvedCartItem } from "@/hooks/use-cart-summary";

type CartItemCardProps = {
  item: ResolvedCartItem;
};

export function CartItemCard({ item }: CartItemCardProps) {
  const { removeCartItem, setCartItemQuantity } = useCartActions();

  return (
    <article className="grid gap-4 border border-[var(--line)] p-4 sm:grid-cols-[0.26fr_0.74fr]">
      <div className="relative aspect-square overflow-hidden border border-[var(--line)]">
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          sizes="(max-width: 640px) 100vw, 25vw"
          className="object-cover grayscale-[12%]"
        />
      </div>

      <div className="flex flex-col gap-3">
        <p className="eyebrow">{item.product.collection}</p>
        <h2 className="display-font text-3xl leading-none tracking-[0.06em] sm:text-4xl">
          {item.product.name}
        </h2>
        <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
          Size {item.size} • {item.product.colorway}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="pill"
            onClick={() =>
              setCartItemQuantity({
                productSlug: item.productSlug,
                size: item.size,
                quantity: item.quantity - 1,
              })
            }
          >
            -
          </button>
          <span className="pill border-[var(--line)] text-[var(--text-primary)]">
            Qty {item.quantity}
          </span>
          <button
            type="button"
            className="pill"
            onClick={() =>
              setCartItemQuantity({
                productSlug: item.productSlug,
                size: item.size,
                quantity: item.quantity + 1,
              })
            }
          >
            +
          </button>
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-[var(--line)] pt-3">
          <p className="display-font text-3xl tracking-[0.08em]">
            {formatCurrency(item.lineTotal)}
          </p>
          <button
            type="button"
            className="btn-outline w-full sm:w-auto"
            onClick={() =>
              removeCartItem({ productSlug: item.productSlug, size: item.size })
            }
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}
