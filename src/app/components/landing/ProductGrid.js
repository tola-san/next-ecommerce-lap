import { getProducts } from "@/services/api";
import ProductCard from "./ProductCard";

export const dynamic = "force-dynamic";

export default async function ProductGrid() {
  let products = [];

  try {
    products = await getProducts();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">
        Featured Products
      </h2>

      {products.length === 0 ? (
        <p className="text-gray-500">
          No products available.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}