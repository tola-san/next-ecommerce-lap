import Link from "next/link";
import Hero from "./components/landing/Banner";
import ProductGrid from "./components/landing/ProductGrid";
import Category from "./components/landing/Categories";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      
      {/* Hero Section */}
      <Hero />

      {/* Products */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10">
        <ProductGrid />
      </section>

      {/* Categories */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10">
        <Category />
      </section>

     
     {/* Bottom CTA - Glassmorphism Style */}
<section className="px-4 pb-16 relative py-24">
  {/* Background for glass effect (important for blur) */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-fuchsia-600 to-cyan-500"></div>
  
  <div className="mx-auto max-w-7xl relative">
    <div className="rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-8 sm:p-12 text-center shadow-2xl">
      
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight tracking-tighter">
          Discover Premium Products
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed">
          Shop the latest collections with modern design, premium quality, 
          and unbeatable prices.
        </p>

        <Link
          href="/products"
          className="group inline-flex items-center justify-center gap-2 mt-8 rounded-full bg-white px-10 py-4 text-base font-semibold text-zinc-900 transition-all duration-300 hover:bg-white/90 active:scale-105 hover:shadow-xl hover:-translate-y-0.5"
        >
          Start Shopping
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}