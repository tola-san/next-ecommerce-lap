import { getProductById } from "@/services/api";

export default async function ProductDetailPage({ params }) {

  const { id } = await params;

  const product = await getProductById(id);

  return (
    <section className="max-w-6xl mx-auto p-10">
      <div className="grid md:grid-cols-2 gap-10">

        <div className="border border-zinc-300  rounded-2xl p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[300px] object-contain"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-2xl text-gray-700 mb-6">
            ${product.price}
          </p>

          <p className="text-gray-500 leading-7 mb-8">
            {product.description}
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
            Add To Cart
          </button>
        </div>

      </div>
    </section>
  );
}