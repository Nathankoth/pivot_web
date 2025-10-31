import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  sku: string;
  title: string;
  price: number;
  priceDisplay: string;
  image?: string;
  quantity: number;
};

type CartItemInput = Omit<CartItem, "quantity">;

type CartContextValue = {
  items: CartItem[];
  addItem: (item: CartItemInput, quantity?: number) => void;
  removeItem: (sku: string) => void;
  updateQuantity: (sku: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotals: () => { itemCount: number; subtotal: number };
};

const STORAGE_KEY = "pivot-guard-cart";

const CartContext = createContext<CartContextValue | undefined>(undefined);

const getInitialCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) => typeof item?.sku === "string" && typeof item?.quantity === "number");
  } catch (error) {
    console.warn("Unable to parse cart from sessionStorage", error);
    return [];
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(getInitialCart);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: CartItemInput, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.sku === item.sku);
      const nextQuantity = Math.min(10, Math.max(1, quantity));

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.sku === item.sku
            ? { ...cartItem, quantity: Math.min(10, cartItem.quantity + nextQuantity) }
            : cartItem,
        );
      }

      return [...prev, { ...item, quantity: nextQuantity }];
    });
  }, []);

  const updateQuantity = useCallback((sku: string, quantity: number) => {
    setItems((prev) => {
      const nextQuantity = Math.min(10, Math.max(0, quantity));
      if (nextQuantity === 0) {
        return prev.filter((item) => item.sku !== sku);
      }
      return prev.map((item) => (item.sku === sku ? { ...item, quantity: nextQuantity } : item));
    });
  }, []);

  const removeItem = useCallback((sku: string) => {
    setItems((prev) => prev.filter((item) => item.sku !== sku));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getCartTotals = useCallback(() => {
    return items.reduce(
      (acc, item) => {
        acc.itemCount += item.quantity;
        acc.subtotal += item.price * item.quantity;
        return acc;
      },
      { itemCount: 0, subtotal: 0 },
    );
  }, [items]);

  const value = useMemo<CartContextValue>(
    () => ({ items, addItem, updateQuantity, removeItem, clearCart, getCartTotals }),
    [items, addItem, updateQuantity, removeItem, clearCart, getCartTotals],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

