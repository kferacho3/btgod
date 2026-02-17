"use client";

import Link from "next/link";
import { formatCurrency } from "@/lib/format";
import { useCartActions } from "@/store/selectors";

type CartOrderSummaryProps = {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
};

export function CartOrderSummary({
  subtotal,
  shipping,
  tax,
  total,
}: CartOrderSummaryProps) {
  const { clearCart } = useCartActions();

  return (
    <aside className="royal-shell h-fit space-y-5 p-5">
      <h2 className="display-font text-3xl leading-none tracking-[0.08em] sm:text-4xl">
        Order Summary
      </h2>
      <div className="space-y-3 border-y border-[var(--line)] py-4 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
        <div className="flex items-center justify-between gap-2">
          <p>Subtotal</p>
          <p>{formatCurrency(subtotal)}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p>Shipping</p>
          <p>{formatCurrency(shipping)}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p>Estimated Tax</p>
          <p>{formatCurrency(tax)}</p>
        </div>
      </div>
      <div className="flex items-end justify-between gap-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          Total
        </p>
        <p className="display-font text-4xl tracking-[0.08em] sm:text-5xl">
          {formatCurrency(total)}
        </p>
      </div>
      <div className="grid gap-2">
        <button type="button" className="btn-solid">
          Proceed To Checkout
        </button>
        <button type="button" onClick={clearCart} className="btn-outline">
          Clear Cart
        </button>
        <Link href="/shop" className="btn-outline">
          Keep Shopping
        </Link>
      </div>
    </aside>
  );
}
