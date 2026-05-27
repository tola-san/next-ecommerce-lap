
import React from "react";
import Image from "next/image";
import ProductGrid from "./ProductGrid";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden ">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/20b55a91628085.5e3ef69d6c72d.png')`
        }}
      />
      
      {/* Stronger Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Left Aligned Glass Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
        <div className="max-w-md">
          <div className=" ">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-3 text-white">
              Welcome to <span className="text-violet-400">MyShop</span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
              Discover Amazing Products
            </h2>

            <p className="text-lg text-white/90 mb-10">
              Shop the latest in modern fashion, electronics, and lifestyle products with premium quality.
            </p>

             
            <div className="flex flex-col sm:flex-row gap-4">

              {/* link to products list */}
              <Link href="/products" className="bg-white text-black font-semibold px-8 py-2 rounded-2xl hover:bg-white/90 transition-all active:scale-95 text-lg">
                Shop Now
              </Link>

              {/* link to Products list  */}
              <Link href="/categories" className="border border-white/70 hover:border-white text-white font-medium px-8 py-2 rounded-2xl hover:bg-white/10 transition-all active:scale-95 text-lg backdrop-blur-md">
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </div>

    
    </section>

    

    
  );
}