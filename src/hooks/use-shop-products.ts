"use client";

import { useMemo } from "react";
import { products } from "@/lib/catalog";
import { useShopState } from "@/store/selectors";

const LIMITED_BADGES = new Set(["Limited", "Top Pick"]);

export function useShopProducts() {
  const { shopFilter, shopSort } = useShopState();

  return useMemo(() => {
    let filtered = [...products];

    if (shopFilter === "limited") {
      filtered = filtered.filter((product) => LIMITED_BADGES.has(product.badge));
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
      case "featured":
      default:
        break;
    }

    return filtered;
  }, [shopFilter, shopSort]);
}

