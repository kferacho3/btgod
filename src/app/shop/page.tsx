import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { ShopControls } from "@/features/shop/components/shop-controls";
import { ShopGrid } from "@/features/shop/components/shop-grid";

const vaultMetrics = [
  { label: "Live Pieces", value: "70+" },
  { label: "Luxury Fabrics", value: "100%" },
  { label: "Global Ship", value: "48 Countries" },
];

export default function ShopPage() {
  return (
    <>
      <section className="card-shell space-y-8 p-6 sm:p-8">
        <SectionHeading
          eyebrow="Elite Catalog"
          title="Luxury Built For The Culture"
          description="The BTGOD vault: statement outerwear, tailored essentials, and collector accessories for rappers, athletes, and creators."
          action={
            <Link href="/collections" className="btn-outline">
              View Collections
            </Link>
          }
        />

        <div className="grid gap-3 sm:grid-cols-3">
          {vaultMetrics.map((metric) => (
            <article key={metric.label} className="surface-soft border border-[var(--line)] p-4">
              <p className="eyebrow">{metric.label}</p>
              <p className="display-font mt-2 text-3xl leading-none tracking-[0.07em] sm:text-4xl">
                {metric.value}
              </p>
            </article>
          ))}
        </div>

        <ShopControls />
      </section>

      <ShopGrid />
    </>
  );
}
