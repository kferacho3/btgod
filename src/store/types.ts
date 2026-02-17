import type { ProductCategory, ProductSize } from "@/lib/catalog";

export type ThemeMode = "night" | "day";

export type ShopFilter = "all" | ProductCategory | "trending" | "exclusive";

export type ShopSort =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "newest";

export type CartItem = {
  productSlug: string;
  quantity: number;
  size: ProductSize;
};

export type AddToCartPayload = {
  productSlug: string;
  quantity?: number;
  size?: ProductSize;
};

export type RemoveCartItemPayload = {
  productSlug: string;
  size: ProductSize;
};

export type SetCartItemQuantityPayload = {
  productSlug: string;
  size: ProductSize;
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
