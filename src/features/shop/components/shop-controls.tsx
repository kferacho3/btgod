"use client";

import { shopFilters, shopSortOptions } from "@/features/shop/constants";
import { useShopActions, useShopState } from "@/store/selectors";
import type { ShopSort } from "@/store/types";

export function ShopControls() {
  const { shopFilter, shopSort } = useShopState();
  const { setShopFilter, setShopSort, resetShopControls } = useShopActions();

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
      <div className="flex flex-wrap gap-2">
        {shopFilters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setShopFilter(filter.value)}
            className={`pill transition-colors ${
              shopFilter === filter.value
                ? "border-[var(--metal-gold)] text-[var(--metal-gold)]"
                : "hover:border-[var(--line-strong)]"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="shop-sort" className="eyebrow">
          Sort
        </label>
        <select
          id="shop-sort"
          value={shopSort}
          onChange={(event) => setShopSort(event.target.value as ShopSort)}
          className="field-input h-10 min-w-[13rem] bg-[var(--bg-elevated)] py-0 text-[0.68rem]"
        >
          {shopSortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button type="button" onClick={resetShopControls} className="btn-outline h-10">
          Reset
        </button>
      </div>
    </div>
  );
}
