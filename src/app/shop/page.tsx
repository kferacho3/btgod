import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/lib/catalog";

const filters = [
  "All Pieces",
  "Outerwear",
  "Knitwear",
  "Bottoms",
  "Essentials",
  "Limited",
];

export default function ShopPage() {
  return (
    <>
      <section className="card-shell space-y-8 p-6 sm:p-8">
        <SectionHeading
          eyebrow="Full Shop Floor"
          title="Minimalism, Weaponized."
          description="Every piece from the current BTGOD lineup, curated for movement and aura."
          action={
            <Link href="/collections" className="btn-outline">
              View Collections
            </Link>
          }
        />
        <div className="flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={`pill transition-colors ${
                index === 0
                  ? "border-[var(--metal-gold)] text-[var(--metal-gold)]"
                  : "hover:border-[var(--line-strong)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

