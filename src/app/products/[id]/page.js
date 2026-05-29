import { getProductById } from "@/services/api";

import {
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";

import {
  showSuccessToast,
  showErrorToast,
} from "@/lib/toast";
import ProductActions from "../ProductActions";

export default async function ProductDetailPage({ params }) {

 

  const { id } = await params;

  const product = await getProductById(id);

  return (
    <section className="bg-zinc-50 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* Main Image */}
            <div className="relative bg-white border border-zinc-200 rounded-2xl p-10 shadow-sm overflow-hidden">

              {/* Badge */}
              <span className="absolute top-6 left-6 bg-black text-white text-xs px-4 py-2 rounded-full uppercase tracking-wider font-medium">
                New Arrival
              </span>

              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-[500px] object-contain hover:scale-105 transition duration-500"
              />

            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">

              {[1, 2, 3, 4].map((item) => (

                <div
                  key={item}
                  className="bg-white border border-zinc-200 rounded-2xl p-4 cursor-pointer hover:border-black transition"
                >

                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-24 w-full object-contain"
                  />

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* Category */}
            <p className="uppercase tracking-[0.3em] text-violet-500 font-semibold text-sm mb-4">
              Premium Collection
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-zinc-900">
              {product.title}
            </h1>

            {/* Reviews */}
            <div className="flex flex-wrap items-center gap-5 mt-6">

              <div className="flex items-center gap-1 text-yellow-500">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="text-zinc-500">
                4.9 Rating
              </p>

              <span className="bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full">
                In Stock
              </span>

            </div>

            {/* Price */}
            <div className="flex items-end gap-5 mt-10">

              <h2 className="text-5xl font-bold text-zinc-900">
                ${product.price}
              </h2>

              <p className="text-2xl text-zinc-400 line-through">
                ${(product.price + 30).toFixed(2)}
              </p>

            </div>

            {/* Description */}
            <p className="text-zinc-500 text-lg leading-8 mt-10">
              {product.description}
            </p>

            {/* Product Actions */}
            <ProductActions product={product} />

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-5 mt-14">

              {/* Shipping */}
              <div className="bg-white border border-zinc-200 rounded-2xl p-5 text-center shadow-sm">

                <div className="w-12 h-12 rounded-2xl bg-blue-400/20 flex items-center justify-center mx-auto mb-4">
                  <FaTruck className="text-blue-500" />
                </div>

                <h3 className="font-semibold">
                  Free Shipping
                </h3>

                <p className="text-sm text-zinc-500 mt-2">
                  Worldwide delivery
                </p>

              </div>

              {/* Secure */}
              <div className="bg-white border border-zinc-200 rounded-2xl p-5 text-center shadow-sm">

                <div className="w-12 h-12 rounded-2xl bg-green-400/20 flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-green-500" />
                </div>

                <h3 className="font-semibold">
                  Secure Payment
                </h3>

                <p className="text-sm text-zinc-500 mt-2">
                  SSL protected checkout
                </p>

              </div>

              {/* Returns */}
              <div className="bg-white border border-zinc-200 rounded-2xl p-5 text-center shadow-sm">

                <div className="w-12 h-12 rounded-2xl bg-purple-400/20 flex items-center justify-center mx-auto mb-4">
                  <FaUndo className="text-purple-500" />
                </div>

                <h3 className="font-semibold">
                  Easy Returns
                </h3>

                <p className="text-sm text-zinc-500 mt-2">
                  30-day return policy
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}