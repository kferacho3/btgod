import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { ShopControls } from "@/features/shop/components/shop-controls";
import { ShopGrid } from "@/features/shop/components/shop-grid";

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
        <ShopControls />
      </section>

      <ShopGrid />
    </>
  );
}
