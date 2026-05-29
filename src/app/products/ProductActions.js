"use client";

import { useCart } from "@/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { showSuccessToast } from "@/lib/toast";

export default function AddToCartButton({
  product,
}) {

  const { addToCart } = useCart();

  const handleAddToCart = () => {

    addToCart(product);

    showSuccessToast(
      `${product.title} added to cart 🛒`
    );

  };

  return (
    <button
      onClick={handleAddToCart}
      className="
        bg-black
        text-white
        px-8
        py-4
        rounded-2xl
        hover:bg-zinc-800
        transition
        flex
        items-center
        gap-3
      "
    >
      <FaShoppingCart />

      Add To Cart
    </button>
  );
}