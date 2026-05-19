
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden rounded-2xl">
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
              <button className="bg-white text-black font-semibold px-8 py-2 rounded-2xl hover:bg-white/90 transition-all active:scale-95 text-lg">
                Shop Now
              </button>
              
              <button className="border border-white/70 hover:border-white text-white font-medium px-8 py-2 rounded-2xl hover:bg-white/10 transition-all active:scale-95 text-lg backdrop-blur-md">
                Browse Categories
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2">
        <span className="text-sm tracking-widest">SCROLL</span>
        <div className="w-5 h-8 border border-white/50 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}