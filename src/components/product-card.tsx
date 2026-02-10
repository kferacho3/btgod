import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/format";
import type { Product } from "@/lib/catalog";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      id={product.slug}
      className="card-shell group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden border-b border-[var(--line)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1300px) 50vw, 33vw"
          className="object-cover grayscale-[16%] transition duration-700 group-hover:scale-[1.03]"
          priority={false}
        />
        <span className="pill absolute left-4 top-4 bg-[color-mix(in_srgb,var(--bg-elevated)_90%,transparent)]">
          {product.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="space-y-3">
          <p className="eyebrow">{product.collection}</p>
          <h3 className="display-font text-4xl leading-none tracking-[0.06em]">
            {product.name}
          </h3>
          <p className="text-xs uppercase tracking-[0.13em] text-[var(--text-secondary)]">
            {product.subtitle}
          </p>
        </div>

        <div className="space-y-1 text-xs uppercase tracking-[0.13em] text-[var(--text-secondary)]">
          <p>{product.materials}</p>
          <p>{product.fit}</p>
          <p className="metal-text">{product.aura}</p>
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-4">
          <p className="display-font text-3xl tracking-[0.08em]">
            {formatCurrency(product.price)}
          </p>
          <div className="flex gap-2">
            <Link href={`/shop/${product.slug}`} className="btn-outline">
              View Piece
            </Link>
            <button type="button" className="btn-solid">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

