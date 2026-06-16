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

     {/* Bottom CTA - Soft Gradient */}
<section className="px-4 pb-16">
  <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-zinc-50 via-white to-zinc-100 border border-zinc-200 p-8 sm:p-12 text-center shadow-sm relative overflow-hidden">
    
    {/* Soft accent glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-rose-500/20"></div>

    <div className="relative">
      <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
        Discover Premium Products
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 leading-relaxed">
        Shop the latest collections with modern design, premium quality, 
        and unbeatable prices.
      </p>

      <Link
        href="/products"
        className="group inline-flex items-center justify-center gap-2 mt-8 rounded-full bg-zinc-900 px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-black active:scale-105 hover:shadow-xl hover:-translate-y-0.5"
      >
        Start Shopping
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </div>
  </div>
</section>
    </main>
  );
}