"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  /* ADD TO CART */
  const addToCart = (product) => {

    setCartItems((prev) => {

      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      /* IF PRODUCT EXISTS */
      if (existingItem) {

        return prev.map((item) =>

          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + (product.quantity || 1),
              }
            : item
        );
      }

      /* NEW PRODUCT */
      return [
        ...prev,
        {
          ...product,
          quantity: product.quantity || 1,
        },
      ];
    });
  };

  /* REMOVE */
  const removeFromCart = (id) => {

    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  /* INCREASE */
  const increaseQuantity = (id) => {

    setCartItems((prev) =>
      prev.map((item) =>

        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  /* DECREASE */
  const decreaseQuantity = (id) => {

    setCartItems((prev) =>
      prev.map((item) =>

        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >

      {children}

    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}