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
      className="royal-shell hover-lift shine-border group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden border-b border-[var(--line)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1300px) 50vw, 33vw"
          className="object-cover grayscale-[8%] transition duration-700 group-hover:scale-[1.04]"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        <span className="pill surface-subtle absolute left-4 top-4">{product.badge}</span>

        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-[var(--line)] bg-black/45 px-3 py-2 text-[0.58rem] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          <span>{product.bpm} BPM</span>
          <span className="text-center">{product.musicalKey}</span>
          <span className="text-right">{product.duration}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <p className="eyebrow">{product.collection}</p>
          <h3 className="display-font text-3xl leading-none tracking-[0.08em]">
            {product.name}
          </h3>
          <p className="text-[0.64rem] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
            {product.subtitle}
          </p>
        </div>

        <div className="space-y-2 border-y border-[var(--line)] py-3 text-[0.62rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
          <p>
            Producer <span className="text-[var(--text-primary)]">{product.producer}</span>
          </p>
          <p>
            Stems <span className="text-[var(--text-primary)]">{product.stems}</span>
          </p>
          <p className="metal-text">Mood • {product.mood}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.usageTags.slice(0, 2).map((tag) => (
            <span key={tag} className="pill px-2 py-1 text-[0.56rem]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <p className="display-font text-xl tracking-[0.08em] sm:text-2xl">
            {formatCurrency(product.price)}
          </p>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <Link
              href={`/shop/${product.slug}`}
              className="btn-outline h-9 w-full px-3 py-0 sm:w-auto"
            >
              Open Beat
            </Link>
            <button
              type="button"
              className="btn-solid h-9 w-full px-3 py-0 sm:w-auto"
              onClick={() => addToCart({ productSlug: product.slug, license: "M" })}
            >
              Add License
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
