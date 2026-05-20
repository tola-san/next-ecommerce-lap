import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border border-zinc-300 rounded-2xl p-4 shadow hover:shadow-2xl transition duration-300 bg-white">

      <Link href={`/products/${product.id}`}>
        <div className="cursor-pointer">

          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain"
          />

          <h3 className="font-bold mt-4 line-clamp-1 text-lg">
            {product.title}
          </h3>

          <p className="text-gray-500 mt-2 text-xl font-semibold">
            ${product.price}
          </p>

        </div>
      </Link>

      <div className="mt-5 flex gap-3 justify-between  ">

        <button className="flex-1 bg-black text-white py-2 text-sm font-medium rounded-full hover:bg-gray-800 transition">
          Add To Cart
        </button>

        <Link
          href={`/products/${product.id}`}
          className="flex-1 border border-black text-center text-sm font-medium py-2 rounded-full hover:bg-black hover:text-white transition"
        >
          View
        </Link>

      </div>
    </div>
  );
}