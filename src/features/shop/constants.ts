import type { ShopFilter, ShopSort } from "@/store/types";

export const shopFilters: Array<{ value: ShopFilter; label: string }> = [
  { value: "all", label: "All Pieces" },
  { value: "outerwear", label: "Outerwear" },
  { value: "knitwear", label: "Knitwear" },
  { value: "bottoms", label: "Bottoms" },
  { value: "essentials", label: "Essentials" },
  { value: "limited", label: "Limited" },
];

export const shopSortOptions: Array<{ value: ShopSort; label: string }> = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low To High" },
  { value: "price-desc", label: "Price: High To Low" },
  { value: "name-asc", label: "Name: A To Z" },
];

