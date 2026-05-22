"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {

  const { addToCart } = useCart();

  return (
    <div className="group bg-white/20 rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

      {/* Product Image */}
      <Link href={`/products/${product.id}`}>

        <div className="bg-zinc-100 border border-zinc-200 h-56 flex items-center justify-center p-10 overflow-hidden">

          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-52 object-contain group-hover:scale-105 transition duration-300"
          />

        </div>

      </Link>

      {/* Content */}
      <div className="p-6">

        {/* Category */}
        <p className="text-sm uppercase tracking-wide text-violet-500 font-semibold">
          Premium Product
        </p>

        {/* Title */}
        <Link href={`/products/${product.id}`}>
          <h2 className="text-xl font-bold mt-2 line-clamp-2 hover:text-violet-600 transition">
            {product.title}
          </h2>
        </Link>

        {/* Price */}
        <div className="flex items-center justify-between mt-5">

          <p className="text-3xl font-bold text-zinc-900">
            ${product.price}
          </p>

          <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
            In Stock
          </span>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-black text-white py-2 rounded-full hover:bg-zinc-800 transition flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
          >
            <FaShoppingCart />
            Add
          </button>

          <Link
            href={`/products/${product.id}`}
            className="px-6 py-1 rounded-full border border-zinc-300 hover:bg-zinc-100 transition font-medium"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}