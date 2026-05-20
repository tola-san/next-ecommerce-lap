import { getProducts } from "@/services/api";
import ProductCard from "../components/landing/ProductCard";

export default async function ProductsPage() {

  const products = await getProducts();

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          All Products
        </h1>

        <p className="text-gray-500 mt-2">
          Discover our latest collection
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}