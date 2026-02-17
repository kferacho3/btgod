import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { ShopControls } from "@/features/shop/components/shop-controls";
import { ShopGrid } from "@/features/shop/components/shop-grid";

const beatVaultMetrics = [
  { label: "Live Catalog", value: "312 Beats" },
  { label: "Avg Delivery", value: "<12 Hours" },
  { label: "Topline Ready", value: "100%" },
];

export default function ShopPage() {
  return (
    <>
      <section className="card-shell space-y-8 p-6 sm:p-8">
        <SectionHeading
          eyebrow="Beat Vault"
          title="Curated Heat. Zero Filler."
          description="Premium records from the BTGOD producer roster built for artists, sync teams, and campaign velocity."
          action={
            <Link href="/collections" className="btn-outline">
              View Drops
            </Link>
          }
        />

        <div className="grid gap-3 sm:grid-cols-3">
          {beatVaultMetrics.map((metric) => (
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
