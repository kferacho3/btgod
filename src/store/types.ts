import type { BeatCategory, LicenseTierCode } from "@/lib/catalog";

export type ThemeMode = "night" | "day";

export type ShopFilter = "all" | BeatCategory | "trending" | "exclusive";

export type ShopSort =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "bpm-asc"
  | "bpm-desc";

export type CartItem = {
  productSlug: string;
  quantity: number;
  license: LicenseTierCode;
};

export type AddToCartPayload = {
  productSlug: string;
  quantity?: number;
  license?: LicenseTierCode;
};

export type RemoveCartItemPayload = {
  productSlug: string;
  license: LicenseTierCode;
};

export type SetCartItemQuantityPayload = {
  productSlug: string;
  license: LicenseTierCode;
  quantity: number;
};

export type AppStoreState = {
  theme: ThemeMode;
  hasHydrated: boolean;
  cartItems: CartItem[];
  shopFilter: ShopFilter;
  shopSort: ShopSort;
  lookbookPrompt: string;
};

export type AppStoreActions = {
  setHasHydrated: (hasHydrated: boolean) => void;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  setShopFilter: (filter: ShopFilter) => void;
  setShopSort: (sort: ShopSort) => void;
  resetShopControls: () => void;
  setLookbookPrompt: (prompt: string) => void;
  addToCart: (payload: AddToCartPayload) => void;
  removeCartItem: (payload: RemoveCartItemPayload) => void;
  setCartItemQuantity: (payload: SetCartItemQuantityPayload) => void;
  clearCart: () => void;
};

export type AppStore = AppStoreState & AppStoreActions;
