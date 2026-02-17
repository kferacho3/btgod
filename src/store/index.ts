"use client";

import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { cartPreview } from "@/lib/catalog";
import type { AddToCartPayload, AppStore, AppStoreState, CartItem, ThemeMode } from "@/store/types";
import type { LicenseTierCode } from "@/lib/catalog";

const STORE_KEY = "btgod-store";
const THEME_STORAGE_KEY = "btgod-theme";
const DEFAULT_LOOKBOOK_PROMPT =
  "Noir rap visualizer, crown motif, black and gold lighting, cinematic camera movement";

const clampQuantity = (quantity: number) => Math.max(1, Math.min(quantity, 99));

const writeThemeToStorage = (theme: ThemeMode) => {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

const findCartItemIndex = (
  items: CartItem[],
  productSlug: string,
  license: LicenseTierCode,
) =>
  items.findIndex(
    (item) => item.productSlug === productSlug && item.license === license,
  );

const initialState: AppStoreState = {
  theme: "night",
  hasHydrated: false,
  cartItems: cartPreview,
  shopFilter: "all",
  shopSort: "featured",
  lookbookPrompt: DEFAULT_LOOKBOOK_PROMPT,
};

const addToCartReducer = (items: CartItem[], payload: AddToCartPayload): CartItem[] => {
  const quantity = clampQuantity(payload.quantity ?? 1);
  const license = payload.license ?? "M";
  const index = findCartItemIndex(items, payload.productSlug, license);

  if (index === -1) {
    return [...items, { productSlug: payload.productSlug, quantity, license }];
  }

  return items.map((item, itemIndex) =>
    itemIndex === index
      ? { ...item, quantity: clampQuantity(item.quantity + quantity) }
      : item,
  );
};

export const useAppStore = create<AppStore>()(
  subscribeWithSelector(
    persist(
      (set, get) => ({
        ...initialState,
        setHasHydrated: (hasHydrated) => set({ hasHydrated }),
        setTheme: (theme) => {
          writeThemeToStorage(theme);
          set({ theme });
        },
        toggleTheme: () => {
          const nextTheme = get().theme === "night" ? "day" : "night";
          writeThemeToStorage(nextTheme);
          set({ theme: nextTheme });
        },
        setShopFilter: (shopFilter) => set({ shopFilter }),
        setShopSort: (shopSort) => set({ shopSort }),
        resetShopControls: () =>
          set({
            shopFilter: initialState.shopFilter,
            shopSort: initialState.shopSort,
          }),
        setLookbookPrompt: (lookbookPrompt) => set({ lookbookPrompt }),
        addToCart: (payload) =>
          set((state) => ({
            cartItems: addToCartReducer(state.cartItems, payload),
          })),
        removeCartItem: ({ productSlug, license }) =>
          set((state) => ({
            cartItems: state.cartItems.filter(
              (item) =>
                item.productSlug !== productSlug || item.license !== license,
            ),
          })),
        setCartItemQuantity: ({ productSlug, license, quantity }) =>
          set((state) => ({
            cartItems: state.cartItems.map((item) =>
              item.productSlug === productSlug && item.license === license
                ? { ...item, quantity: clampQuantity(quantity) }
                : item,
            ),
          })),
        clearCart: () => set({ cartItems: [] }),
      }),
      {
        name: STORE_KEY,
        partialize: (state) => ({
          theme: state.theme,
          cartItems: state.cartItems,
          shopFilter: state.shopFilter,
          shopSort: state.shopSort,
          lookbookPrompt: state.lookbookPrompt,
        }),
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
          if (state) {
            writeThemeToStorage(state.theme);
          }
        },
      },
    ),
  ),
);
