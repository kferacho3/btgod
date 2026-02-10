import Image from "next/image";
import Link from "next/link";
import { cartPreview, products } from "@/lib/catalog";
import { formatCurrency } from "@/lib/format";

export default function CartPage() {
  const items = cartPreview.flatMap((entry) => {
    const product = products.find((item) => item.slug === entry.productSlug);
    return product ? [{ ...entry, product }] : [];
  });

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const shipping = 18;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  return (
    <>
      <section className="card-shell space-y-7 p-6 sm:p-8">
        <div className="space-y-3">
          <p className="eyebrow">Cart Management</p>
          <h1 className="display-font text-6xl leading-none tracking-[0.06em] sm:text-7xl">
            Cart Aura
          </h1>
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">
            Frontend preview of cart operations before backend integration.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-4">
            {items.map((item) => (
              <article
                key={`${item.productSlug}-${item.size}`}
                className="grid gap-4 border border-[var(--line)] p-4 sm:grid-cols-[0.26fr_0.74fr]"
              >
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
                  <h2 className="display-font text-4xl leading-none tracking-[0.06em]">
                    {item.product.name}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                    Size {item.size} • Qty {item.quantity}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-[var(--line)] pt-3">
                    <p className="display-font text-3xl tracking-[0.08em]">
                      {formatCurrency(item.product.price * item.quantity)}
                    </p>
                    <button type="button" className="btn-outline">
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

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
              <Link href="/shop" className="btn-outline">
                Keep Shopping
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
