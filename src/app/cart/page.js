"use client";

import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CartPage() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">

        <div className="flex justify-center mb-6">
          <ShoppingBag size={80} className="text-zinc-300" />
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Your Cart is Empty
        </h1>

        <p className="text-zinc-500 mb-8">
          Looks like you haven’t added anything yet.
        </p>

        <Link
          href="/products"
          className="bg-black text-white px-8 py-4rounded-full hover:bg-zinc-800 transition"
        >
          Continue Shopping
        </Link>

      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="border border-zinc-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 shadow-sm bg-white"
            >

              {/* IMAGE */}
              <div className="bg-zinc-100 rounded-full p-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-40 object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1 flex flex-col justify-between">

                <div>

                  <h2 className="text-2xl font-semibold line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-zinc-500 mt-3">
                    Premium product with modern design.
                  </p>

                </div>

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-6">

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-zinc-100 transition"
                    >
                      <Minus size={18} />
                    </button>

                    <span className="text-xl font-semibold w-8 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-zinc-100 transition"
                    >
                      <Plus size={18} />
                    </button>

                  </div>

                  {/* PRICE + REMOVE */}
                  <div className="flex items-center gap-6">

                    <p className="text-2xl font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <Trash2 size={22} />
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* RIGHT SUMMARY */}
        <div className="border border-zinc-200 rounded-xl p-8 shadow-sm h-fit sticky top-24 bg-white">

          <h2 className="text-3xl font-bold mb-8">
            Order Summary
          </h2>

          <div className="space-y-5 mb-8">

            <div className="flex justify-between text-zinc-600">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-zinc-600">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>

            <div className="flex justify-between text-zinc-600">
              <span>Tax</span>
              <span>$5.00</span>
            </div>

          </div>

          <div className="border-t pt-5 flex justify-between text-2xl font-bold mb-8">

            <span>Total</span>

            <span>
              ${(total + 10 + 5).toFixed(2)}
            </span>

          </div>

          <Link
            href="/checkout"
            className="block text-center bg-black text-white py-4 rounded-full hover:bg-zinc-800 transition text-lg font-medium"
          >
            Proceed to Checkout
          </Link>

        </div>

      </div>

    </section>
  );
}