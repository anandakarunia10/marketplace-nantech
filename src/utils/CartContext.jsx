import { createContext, useContext, useState } from "react";

// Buat Context
const CartContext = createContext();

// Provider untuk membungkus app
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Tambah ke cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  // Update qty
  const updateQty = (id, qty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  // Hapus dari cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Hitung total qty
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQty, removeFromCart, totalQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook untuk pakai CartContext
export function useCart() {
  return useContext(CartContext);
}
