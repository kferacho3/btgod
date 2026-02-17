"use client";

import Link from "next/link";
import { CartItemCard } from "@/features/cart/components/cart-item-card";
import { CartOrderSummary } from "@/features/cart/components/cart-order-summary";
import { useCartSummary } from "@/hooks/use-cart-summary";

export function CartExperience() {
  const { items, subtotal, delivery, tax, total, isEmpty } = useCartSummary();

  return (
    <section className="card-shell space-y-7 p-6 sm:p-8">
      <div className="space-y-3">
        <p className="eyebrow">Cart Management</p>
        <h1 className="display-font text-[clamp(2.25rem,8vw,4.5rem)] leading-none tracking-[0.06em]">
          License Cart
        </h1>
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          Manage your selected beats, license tiers, and checkout-ready totals from one command center.
        </p>
      </div>

      {isEmpty ? (
        <article className="border border-[var(--line)] p-6">
          <p className="eyebrow">No Licenses Added</p>
          <h2 className="display-font mt-2 text-5xl leading-none tracking-[0.07em]">
            Your Cart Is Empty
          </h2>
          <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
            Add beats from the catalog to start your licensing bundle.
          </p>
          <Link href="/shop" className="btn-solid mt-5">
            Browse Beat Vault
          </Link>
        </article>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-4">
            {items.map((item) => (
              <CartItemCard key={item.key} item={item} />
            ))}
          </div>
          <CartOrderSummary
            subtotal={subtotal}
            delivery={delivery}
            tax={tax}
            total={total}
          />
        </div>
      )}
    </section>
  );
}
