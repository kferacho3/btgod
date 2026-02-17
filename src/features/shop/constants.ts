import type { ShopFilter, ShopSort } from "@/store/types";

export const shopFilters: Array<{ value: ShopFilter; label: string }> = [
  { value: "all", label: "All Beats" },
  { value: "trap", label: "Trap" },
  { value: "drill", label: "Drill" },
  { value: "rnb", label: "R&B" },
  { value: "afro", label: "Afro" },
  { value: "cinematic", label: "Cinematic" },
  { value: "club", label: "Club" },
  { value: "trending", label: "Trending" },
  { value: "exclusive", label: "Exclusive" },
];

export const shopSortOptions: Array<{ value: ShopSort; label: string }> = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low To High" },
  { value: "price-desc", label: "Price: High To Low" },
  { value: "bpm-asc", label: "BPM: Low To High" },
  { value: "bpm-desc", label: "BPM: High To Low" },
  { value: "name-asc", label: "Name: A To Z" },
];
