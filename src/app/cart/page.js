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
      <section className="min-h-screen bg-zinc-50 flex items-center justify-center px-6 py-12">
        <div className="text-center max-w-md">
          <div className="w-28 h-28 rounded-full bg-white shadow-lg border border-zinc-200 flex items-center justify-center mx-auto mb-8">
            <ShoppingBag size={52} className="text-zinc-300" />
          </div>
          <h1 className="text-4xl font-semibold mb-4 text-zinc-900">
            Your Cart is Empty
          </h1>
          <p className="text-zinc-500 text-[17px] leading-relaxed mb-10">
            Looks like you haven’t added any products yet.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-3xl hover:bg-zinc-800 transition text-lg font-medium"
          >
            Continue Shopping
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-zinc-50 min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <p className="uppercase tracking-widest text-violet-600 font-semibold text-sm mb-2">
            Shopping Cart
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-zinc-900">
            Your Cart
          </h1>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Cart Items - Takes more space */}
          <div className="md:col-span-3 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-5 flex gap-5 border border-zinc-100 shadow-sm"
              >
                {/* Image */}
                <div className="w-20 h-20 bg-zinc-100 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold text-lg leading-tight line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 text-sm mt-1">Premium Product</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 transition"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    {/* Price */}
                    <div>
                      <p className="text-2xl font-bold text-zinc-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      {item.originalPrice && (
                        <p className="text-sm text-zinc-400 line-through">
                          ${item.originalPrice}
                        </p>
                      )}
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-zinc-100 transition"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="w-12 text-center font-semibold text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-zinc-100 transition"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl p-6 md:p-8 sticky top-8 border border-zinc-100 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4 text-base">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Tax (5%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-zinc-200 my-6 pt-6 flex justify-between items-center text-xl">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-3xl">${total.toFixed(2)}</span>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-black text-white py-2 rounded-full flex items-center justify-center gap-3 hover:bg-zinc-800 transition text-md font-medium mt-4"
              >
                Proceed to Checkout
                <ArrowRight size={22} />
              </Link>

              <div className="mt-6 text-xs text-zinc-500 space-y-2">
                <div>🔒 Secure checkout</div>
                <div>🚚 Free shipping on orders over $100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}