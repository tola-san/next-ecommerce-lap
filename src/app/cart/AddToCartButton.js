"use client";

import { useCart } from "@/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function AddToCartButton({ product }) {

  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-black text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition flex items-center gap-3"
    >
      <FaShoppingCart />

      Add To Cart
    </button>
  );
}