"use client";

import Link from "next/link";

import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CartPage() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 10;
  const tax = 5;

  const total = subtotal + shipping + tax;

  /* EMPTY CART */
  if (cartItems.length === 0) {
    return (
      <section className="min-h-screen bg-zinc-50 flex items-center justify-center px-6">

        <div className="text-center max-w-lg">

          <div className="w-32 h-32 rounded-full bg-white shadow-lg border border-zinc-200 flex items-center justify-center mx-auto mb-8">

            <ShoppingBag size={60} className="text-zinc-300" />

          </div>

          <h1 className="text-5xl font-semibold mb-5">
            Your Cart is Empty
          </h1>

          <p className="text-zinc-500 text-lg leading-8 mb-10">
            Looks like you haven’t added any products yet.
            Start shopping to fill your cart.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-zinc-800 transition"
          >
            Continue Shopping

            <ArrowRight size={20} />
          </Link>

        </div>

      </section>
    );
  }

  return (
    <section className="bg-zinc-50 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">

          <p className="uppercase tracking-[0.3em] text-violet-500 font-semibold text-sm mb-4">
            Shopping Cart
          </p>

          <h1 className="text-5xl font-semibold text-zinc-900">
            Review Your Order
          </h1>

        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="group bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >

                <div className="flex flex-col md:flex-row gap-8">

                  {/* IMAGE */}
                  <div className="bg-gradient-to-b from-zinc-100 to-zinc-50 rounded-3xl p-6 flex items-center justify-center min-w-[180px]">

                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-40 h-40 object-contain transition duration-500 group-hover:scale-105"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 flex flex-col justify-between">

                    <div>

                      <p className="uppercase tracking-[0.25em] text-xs text-violet-500 font-semibold mb-3">
                        Premium Product
                      </p>

                      <h2 className="text-2xl font-semibold leading-snug line-clamp-2">
                        {item.title}
                      </h2>

                      <p className="text-zinc-500 leading-7 mt-4">
                        Premium modern product with high quality materials and elegant design.
                      </p>

                    </div>

                    {/* BOTTOM */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mt-8">

                      {/* QUANTITY */}
                      <div className="flex items-center gap-4">

                        <div className="flex items-center border border-zinc-300 rounded-2xl overflow-hidden bg-zinc-50">

                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="w-12 h-12 flex items-center justify-center hover:bg-zinc-100 transition"
                          >
                            <Minus size={18} />
                          </button>

                          <span className="w-14 text-center font-semibold text-lg">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="w-12 h-12 flex items-center justify-center hover:bg-zinc-100 transition"
                          >
                            <Plus size={18} />
                          </button>

                        </div>

                      </div>

                      {/* PRICE */}
                      <div className="flex items-center gap-6">

                        <div className="text-right">

                          <p className="text-sm text-zinc-400">
                            Total Price
                          </p>

                          <p className="text-3xl font-bold text-zinc-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>

                        </div>

                        {/* REMOVE */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-12 h-12 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition flex items-center justify-center"
                        >
                          <Trash2 size={20} />
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* RIGHT SUMMARY */}
          <div className="sticky top-24">

            <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">

              <h2 className="text-3xl font-semibold mb-10">
                Order Summary
              </h2>

              {/* SUMMARY */}
              <div className="space-y-6">

                <div className="flex justify-between text-zinc-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-zinc-600">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-zinc-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

              </div>

              {/* TOTAL */}
              <div className="border-t border-zinc-200 mt-8 pt-8 flex justify-between items-center">

                <span className="text-2xl font-semibold">
                  Total
                </span>

                <span className="text-4xl font-bold">
                  ${total.toFixed(2)}
                </span>

              </div>

              {/* BUTTON */}
              <Link
                href="/checkout"
                className="mt-10 flex items-center justify-center gap-3 bg-black text-white py-5 rounded-2xl hover:bg-zinc-800 transition text-lg font-medium shadow-lg shadow-black/10"
              >
                Proceed to Checkout

                <ArrowRight size={22} />
              </Link>

              {/* Security */}
              <div className="mt-8 border-t border-zinc-200 pt-6">

                <div className="flex items-center gap-3 text-zinc-500 text-sm">
                  🔒 Secure SSL encrypted checkout
                </div>

                <div className="flex items-center gap-3 text-zinc-500 text-sm mt-3">
                  🚚 Free shipping on orders over $100
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}