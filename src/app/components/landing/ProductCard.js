"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-zinc-200/80 hover:border-zinc-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">

      {/* Product Image */}
      <Link href={`/products/${product.id}`}>

        <div className="relative bg-gradient-to-b from-zinc-100 to-zinc-50 border-b border-zinc-200 h-64 flex items-center justify-center overflow-hidden p-8">

          {/* Floating Badge */}
          <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full font-medium tracking-wide">
            New
          </span>

          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-52 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-2"
          />

        </div>

      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">

        {/* Category */}
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">
          Premium Collection
        </p>

        {/* Title */}
        <Link href={`/products/${product.id}`}>

          <h2 className="text-xl font-bold mt-3 leading-snug line-clamp-2 min-h-[60px] hover:text-zinc-700 transition">
            {product.title}
          </h2>

        </Link>

        {/* Description */}
        <p className="text-sm text-zinc-500 mt-3 line-clamp-2 leading-6">
          {product.description}
        </p>

        {/* Price + Stock */}
        <div className="flex items-center justify-between mt-6">

          <div>

            <p className="text-sm text-zinc-400 line-through">
              ${(product.price + 20).toFixed(2)}
            </p>

            <p className="text-3xl font-bold text-zinc-900">
              ${product.price}
            </p>

          </div>

          <span className="bg-green-100 border border-green-200 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full">
            In Stock
          </span>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto pt-8">

          {/* Add To Cart */}
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-black text-white py-3 rounded-2xl hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center gap-3 font-medium hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg shadow-black/10"
          >
            <FaShoppingCart className="text-sm" />
            Add To Cart
          </button>

          {/* View */}
          <Link
            href={`/products/${product.id}`}
            className="px-6 py-3 rounded-2xl border border-zinc-300 hover:bg-zinc-100 transition-all duration-300 font-medium flex items-center justify-center hover:border-zinc-400"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}