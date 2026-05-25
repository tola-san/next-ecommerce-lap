"use client";

import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaPlus, FaHeart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div
      className="
        group flex flex-col h-full
        overflow-hidden rounded-3xl
        bg-white border border-zinc-200
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
      "
    >

      {/* Product Image */}
      <Link href={`/products/${product.id}`}>

        <div
          className="
            relative flex items-center justify-center
            h-44 sm:h-56
            overflow-hidden
            bg-gradient-to-b from-zinc-100 to-zinc-50
            p-4 sm:p-6
          "
        >

          {/* Badge */}
          <span
            className="
              absolute left-3 top-3 z-20
              rounded-full bg-black
              px-3 py-1
              text-[10px] sm:text-xs
              font-medium tracking-wide
              text-white
            "
          >
            New
          </span>

          {/* Wishlist */}
          <button
            className="
              absolute right-3 top-3 z-20
              flex h-8 w-8 items-center justify-center
              rounded-full bg-white/90
              text-zinc-700 shadow-sm
              transition hover:scale-110
            "
          >
            <FaHeart className="text-xs" />
          </button>

          {/* Circle Background */}
          <div
            className="
              absolute h-28 w-28 sm:h-40 sm:w-40
              rounded-full bg-cyan-100/60
            "
          />

          {/* Product Image */}
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={240}
            height={240}
            className="
              relative z-10
              h-28 sm:h-40
              w-auto object-contain
              transition duration-500
              group-hover:scale-110
            "
          />

        </div>

      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">

        {/* Category */}
        <p
          className="
            text-[10px] sm:text-xs
            font-semibold uppercase
            tracking-[0.2em]
            text-zinc-500
          "
        >
          Premium Collection
        </p>

        {/* Title */}
        <Link href={`/products/${product.id}`}>

          <h2
            className="
              mt-2
              min-h-[48px]
              text-base sm:text-xl
              font-bold leading-snug
              text-zinc-900
              transition group-hover:text-zinc-700
              line-clamp-2
            "
          >
            {product.title}
          </h2>

        </Link>

        {/* Description */}
        <p
          className="
            mt-2 hidden sm:block
            text-sm leading-6
            text-zinc-500 line-clamp-2
          "
        >
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-4 flex items-end justify-between">

          <div>

            <p className="text-xs text-zinc-400 line-through">
              ${(product.price + 20).toFixed(2)}
            </p>

            <p
              className="
                text-2xl sm:text-3xl
                font-bold text-zinc-900
              "
            >
              ${product.price}
            </p>

          </div>

          {/* Stock */}
          <span
            className="
              hidden sm:flex
              rounded-full
              border border-green-200
              bg-green-100
              px-3 py-1
              text-xs font-medium
              text-green-700
            "
          >
            In Stock
          </span>

        </div>

        {/* Buttons */}
        <div
          className="
            mt-auto pt-5
            flex items-center gap-2 sm:gap-3
          "
        >

          {/* Add To Cart */}
          <button
            onClick={() => addToCart(product)}
            className="
              flex items-center justify-center gap-2
              h-10 sm:h-12
              w-10 sm:flex-1
              rounded-xl sm:rounded-2xl
              bg-black
              px-4
              text-white
              shadow-md shadow-black/10
              transition-all duration-300
              hover:bg-zinc-800
              active:scale-95
            "
          >

            {/* Mobile */}
            <span className="sm:hidden">
              <FaPlus className="text-sm" />
            </span>

            {/* Tablet/Desktop */}
            <span className="hidden sm:flex items-center gap-2">
              <FaShoppingCart className="text-sm" />
              <span className="truncate text-sm font-medium">
                Add To Cart
              </span>
            </span>

          </button>

          {/* View */}
          <Link
            href={`/products/${product.id}`}
            className="
              flex h-10 sm:h-12
              items-center justify-center
              rounded-xl sm:rounded-2xl
              border border-zinc-300
              px-4 sm:px-5
              text-xs sm:text-sm
              font-medium text-zinc-700
              transition-all duration-300
              hover:border-zinc-400
              hover:bg-zinc-100
            "
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}