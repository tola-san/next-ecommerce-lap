"use client";

import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaPlus, FaHeart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";


export default function ProductCard({ product }) {
  const [isMobile, setIsMobile] = useState(false);
  const { addToCart } = useCart();


  const handleAddToCart = () => {

  addToCart(product);

  toast.success(
    `${product.title} added to cart 🛒`,
    {
      duration: 2000,
    }
  );

};
    useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);


  return (
    <div
      className="
        group flex flex-col h-full
        overflow-hidden rounded-2xl
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
            h-44 sm:h-32
            overflow-hidden
            bg-gradient-to-b from-zinc-100 to-zinc-50
            p-3 sm:p-5
          "
        >
          {/* Badge */}
          <span
            className="
              absolute left-2 top-2 z-20
              rounded-xl bg-orange-500/20
              px-2 py-1
              text-[10px] sm:text-xs
              font-medium text-orange-400 border border-orange-300
            "
          >
            {product.stock > 0 ? "New" : "Sold Out"}
          </span>

          

          {/* Product Image */}
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={250}
            height={240}
            className="
              relative z-10
              h-28 sm:h-40
              w-auto object-contain
              transition duration-500
              group-hover:scale-105
            "
          />
        </div>
      </Link>
       
       <div className="flex flex-1 flex-row sm:flex-col p-3 sm:p-4 gap-3">
  
  {/* LEFT CONTENT */}
  <div className="flex-1">
    
    {/* Category */}
    <p
      className="
        text-[10px] sm:text-xs
        font-semibold uppercase
        tracking-[0.15em]
        text-zinc-500
      "
    >
      {product.category}
    </p>

    {/* Title */}
    <Link href={`/products/${product.id}`}>
      <h2
        className="
          mt-2
          min-h-[32px]
          text-sm sm:text-lg
          font-bold
          text-zinc-900
          transition group-hover:text-zinc-700
          line-clamp-1
        "
      >
        {product.title}
      </h2>
    </Link>

    {/* Price */}
    <div className="mt-3">
      <p className="text-xs text-green-500 line-through">
        ${(product.price + 20).toFixed(2)}
      </p>

      <p className="text-lg sm:text-2xl font-bold text-zinc-900">
        ${product.price}
      </p>
    </div>
  </div>

  <button
  onClick={handleAddToCart}
  className="
    flex items-center justify-center gap-2
    h-11
    w-11 sm:w-full
    rounded-full
    bg-black text-white
    hover:bg-zinc-800
    transition-all duration-300
    active:scale-95
  "
>
  <FaPlus className="sm:hidden text-sm" />

  <span className="hidden sm:flex items-center gap-2 text-sm font-medium">
    <FaShoppingCart />
    Add To Cart
  </span>
</button>
</div>
      
    </div>
  );
}