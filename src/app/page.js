import Image from "next/image";
import Hero from "./components/landing/Banner";
import ProductGrid from "./components/landing/ProductGrid";
export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50  min-h-screen py-8 px-4"> 
    <Hero/>
    <ProductGrid />

      <p className="text-lg text-gray-600 mt-4 max-w-xl text-center">
        Discover the best products at unbeatable prices. Shop now and experience the difference!
      </p>
    </div>
  );
}
