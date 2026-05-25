"use client";

import { useState } from "react";
import AddToCartButton from "@/app/cart/AddToCartButton";

export default function ProductActions({ product }) {

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {

    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }

  };

  return (
    <div className="flex flex-col sm:flex-row gap-5 mt-12">

      {/* Quantity */}
      <div className="flex items-center border border-zinc-300 rounded-2xl overflow-hidden bg-white shadow-sm">

        <button
          onClick={decreaseQuantity}
          className="px-5 py-4 hover:bg-zinc-100 transition text-xl"
        >
          -
        </button>

        <span className="px-8 font-semibold text-lg">
          {quantity}
        </span>

        <button
          onClick={increaseQuantity}
          className="px-5 py-4 hover:bg-zinc-100 transition text-xl"
        >
          +
        </button>

      </div>

      {/* Add To Cart */}
      <AddToCartButton
        product={{
          ...product,
          quantity,
        }}
      />

    </div>
  );
}