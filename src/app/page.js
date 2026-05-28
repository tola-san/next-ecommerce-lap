import Link from "next/link";
import Hero from "./components/landing/Banner";
import ProductGrid from "./components/landing/ProductGrid";

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

      {/* Bottom CTA */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-7xl rounded-xl bg-white border border-zinc-200 p-8 sm:p-12 text-center shadow-sm">
          
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-900 leading-tight">
            Discover Premium Products
          </h2>

          <p className="mt-4 text-sm sm:text-lg text-zinc-600 leading-7">
            Shop the latest collections with modern design,
            premium quality, and unbeatable prices.
          </p>

          <Link
            href="/products"
            className="inline-block mt-8 rounded-full bg-black px-8 py-3 text-sm sm:text-base font-medium text-white transition hover:bg-zinc-800 active:scale-105"
          >
            Start Shopping
          </Link>

        </div>
      </section>
    </main>
  );
}