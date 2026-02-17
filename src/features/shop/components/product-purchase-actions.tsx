"use client";

import { useState } from "react";
import { licensingTiers } from "@/lib/catalog";
import { useCartActions } from "@/store/selectors";
import type { LicenseTierCode } from "@/lib/catalog";

type ProductPurchaseActionsProps = {
  productSlug: string;
};

export function ProductPurchaseActions({
  productSlug,
}: ProductPurchaseActionsProps) {
  const [license, setLicense] = useState<LicenseTierCode>("M");
  const { addToCart } = useCartActions();

  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
      <div className="flex flex-wrap gap-2">
        {licensingTiers.map((tier) => (
          <button
            key={tier.code}
            type="button"
            onClick={() => setLicense(tier.code)}
            className={`pill ${
              license === tier.code
                ? "border-[var(--metal-gold)] text-[var(--text-primary)]"
                : ""
            }`}
          >
            {tier.code} • {tier.name}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="btn-solid w-full sm:w-auto"
        onClick={() => addToCart({ productSlug, license })}
      >
        Add License
      </button>
    </div>
  );
}
