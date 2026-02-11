"use client";

import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/format";
import type { Product } from "@/lib/catalog";
import { useCartActions } from "@/store/selectors";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartActions();

  return (
    <article
      id={product.slug}
      className="royal-shell group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden border-b border-[var(--line)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1300px) 50vw, 33vw"
          className="object-cover grayscale-[8%] transition duration-700 group-hover:scale-[1.03]"
          priority={false}
        />
        <span className="pill absolute left-4 top-4 bg-[color-mix(in_srgb,var(--bg-elevated)_90%,transparent)]">
          {product.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <p className="eyebrow">{product.collection}</p>
          <h3 className="display-font text-3xl leading-none tracking-[0.08em]">
            {product.name}
          </h3>
          <p className="text-[0.63rem] uppercase tracking-[0.17em] text-[var(--text-secondary)]">
            {product.subtitle}
          </p>
        </div>

        <div className="space-y-1 border-y border-[var(--line)] py-3 text-[0.62rem] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          <p>{product.materials}</p>
          <p>{product.fit}</p>
          <p className="metal-text">{product.aura}</p>
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <p className="display-font text-2xl tracking-[0.08em]">
            {formatCurrency(product.price)}
          </p>
          <div className="flex gap-2">
            <Link href={`/shop/${product.slug}`} className="btn-outline h-9 px-3 py-0">
              View Piece
            </Link>
            <button
              type="button"
              className="btn-solid h-9 px-3 py-0"
              onClick={() => addToCart({ productSlug: product.slug })}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
