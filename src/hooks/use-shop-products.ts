"use client";

import { useMemo } from "react";
import { products } from "@/lib/catalog";
import { useShopState } from "@/store/selectors";

const TREND_BADGES = new Set([
  "Top Pick",
  "Fast Moving",
  "Trend Alert",
  "Runway Favorite",
]);

export function useShopProducts() {
  const { shopFilter, shopSort } = useShopState();

  return useMemo(() => {
    let filtered = [...products];

    if (shopFilter === "trending") {
      filtered = filtered.filter((product) => TREND_BADGES.has(product.badge));
    } else if (shopFilter === "exclusive") {
      filtered = filtered.filter((product) => product.badge === "Exclusive");
    } else if (shopFilter !== "all") {
      filtered = filtered.filter((product) => product.category === shopFilter);
    }

    switch (shopSort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        filtered.sort(
          (a, b) =>
            new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
        );
        break;
      case "featured":
      default:
        break;
    }

    return filtered;
  }, [shopFilter, shopSort]);
}
