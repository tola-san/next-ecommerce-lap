// dynamic route by request by parameters

import { getProductsByCategory } from "@/services/api";
import ProductCard from "../../components/landing/ProductCard";




export default async function CategoryDetailPage({ params }) {

    

    const { id } = await params;

   
    const products = await getProductsByCategory(id);

    return (
        <section className="max-w-7xl mx-auto px-6 py-10">

            <div className="mb-10">
                <h1 className="text-4xl font-bold capitalize">
                    {id}
                </h1>
                <p className="text-gray-500 mt-2">
                    Explore our {id} products
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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