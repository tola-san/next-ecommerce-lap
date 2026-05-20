import { getProducts } from "@/services/api";
import ProductCard from "./ProductCard";

export default async function ProductGrid() {
  const products = await getProducts();
  // Show only the first 8 products
  const limitedProducts = products.slice(0, 8); 

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {limitedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}