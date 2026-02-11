"use client";

import Link from "next/link";
import { CartItemCard } from "@/features/cart/components/cart-item-card";
import { CartOrderSummary } from "@/features/cart/components/cart-order-summary";
import { useCartSummary } from "@/hooks/use-cart-summary";

export function CartExperience() {
  const { items, subtotal, shipping, tax, total, isEmpty } = useCartSummary();

  return (
    <section className="card-shell space-y-7 p-6 sm:p-8">
      <div className="space-y-3">
        <p className="eyebrow">Cart Management</p>
        <h1 className="display-font text-6xl leading-none tracking-[0.06em] sm:text-7xl">
          Cart Aura
        </h1>
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          Centralized state powered by Zustand for quantity, totals, and item
          controls.
        </p>
      </div>

      {isEmpty ? (
        <article className="border border-[var(--line)] p-6">
          <p className="eyebrow">No Items</p>
          <h2 className="display-font mt-2 text-5xl leading-none tracking-[0.07em]">
            Your Cart Is Empty
          </h2>
          <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
            Add pieces from the shop to start your order.
          </p>
          <Link href="/shop" className="btn-solid mt-5">
            Go To Shop
          </Link>
        </article>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-4">
            {items.map((item) => (
              <CartItemCard key={item.key} item={item} />
            ))}
          </div>
          <CartOrderSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
          />
        </div>
      )}
    </section>
  );
}

