import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("zenith-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("zenith-cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART
  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + quantity,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          qty: quantity,
        },
      ];
    });
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // INCREASE
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty: item.qty - 1,
              }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // CLEAR
  const clearCart = () => {
    setCart([]);
  };

  // TOTAL ITEMS
  const cartCount = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  // TOTAL PRICE
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const value = {
    cart,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    cartCount,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};