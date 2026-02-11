"use client";

import { useShallow } from "zustand/react/shallow";
import { useAppStore } from "@/store";

export const useThemeState = () =>
  useAppStore(
    useShallow((state) => ({
      theme: state.theme,
      hasHydrated: state.hasHydrated,
    })),
  );

export const useThemeActions = () =>
  useAppStore(
    useShallow((state) => ({
      setTheme: state.setTheme,
      toggleTheme: state.toggleTheme,
    })),
  );

export const useShopState = () =>
  useAppStore(
    useShallow((state) => ({
      shopFilter: state.shopFilter,
      shopSort: state.shopSort,
    })),
  );

export const useShopActions = () =>
  useAppStore(
    useShallow((state) => ({
      setShopFilter: state.setShopFilter,
      setShopSort: state.setShopSort,
      resetShopControls: state.resetShopControls,
    })),
  );

export const useLookbookState = () =>
  useAppStore(
    useShallow((state) => ({
      lookbookPrompt: state.lookbookPrompt,
    })),
  );

export const useLookbookActions = () =>
  useAppStore(
    useShallow((state) => ({
      setLookbookPrompt: state.setLookbookPrompt,
    })),
  );

export const useCartState = () =>
  useAppStore(
    useShallow((state) => ({
      cartItems: state.cartItems,
    })),
  );

export const useCartActions = () =>
  useAppStore(
    useShallow((state) => ({
      addToCart: state.addToCart,
      removeCartItem: state.removeCartItem,
      setCartItemQuantity: state.setCartItemQuantity,
      clearCart: state.clearCart,
    })),
  );

export const useCartItemCount = () =>
  useAppStore((state) =>
    state.cartItems.reduce((total, item) => total + item.quantity, 0),
  );

