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
    <aside className="border border-[var(--line)] p-5">
      <h2 className="display-font text-4xl leading-none tracking-[0.08em]">
        Order Summary
      </h2>
      <div className="mt-5 space-y-3 border-y border-[var(--line)] py-4 text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
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
      <div className="mt-4 flex items-end justify-between gap-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          Total
        </p>
        <p className="display-font text-5xl tracking-[0.08em]">
          {formatCurrency(total)}
        </p>
      </div>
      <div className="mt-5 grid gap-2">
        <button type="button" className="btn-solid">
          Checkout
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

