import type { ShopFilter, ShopSort } from "@/store/types";

export const shopFilters: Array<{ value: ShopFilter; label: string }> = [
  { value: "all", label: "All Pieces" },
  { value: "outerwear", label: "Outerwear" },
  { value: "tailoring", label: "Tailoring" },
  { value: "hoodies", label: "Hoodies" },
  { value: "bottoms", label: "Bottoms" },
  { value: "footwear", label: "Footwear" },
  { value: "accessories", label: "Accessories" },
  { value: "trending", label: "Trending" },
  { value: "exclusive", label: "Exclusive" },
];

export const shopSortOptions: Array<{ value: ShopSort; label: string }> = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low To High" },
  { value: "price-desc", label: "Price: High To Low" },
  { value: "name-asc", label: "Name: A To Z" },
  { value: "newest", label: "Newest First" },
];
