"use client";
import React from "react";


export default function CheckoutPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-10">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-10">

          {/* Shipping Info */}
          <div className="border border-zinc-200 rounded-2xl p-6 shadow-sm backdrop-blur-md bg-zinc-50/70">

            <h2 className="text-2xl font-semibold mb-6">
              Shipping Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="First Name"
                className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border p-3 rounded-xl md:col-span-2 outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border p-3 rounded-xl md:col-span-2 outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="text"
                placeholder="Address"
                className="border p-3 rounded-xl md:col-span-2 outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="text"
                placeholder="City"
                className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="text"
                placeholder="Postal Code"
                className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
              />

            </div>

          </div>

          {/* Payment */}
          <div className="border border-zinc-200 rounded-2xl p-6 shadow-sm">

            <h2 className="text-2xl font-semibold mb-6">
              Payment Method
            </h2>

            <div className="space-y-4">

              <label className="flex items-center gap-3 border border-zinc-200 p-4 rounded-xl cursor-pointer">
                <input type="radio" name="payment" />
                Credit Card
              </label>

              <label className="flex items-center gap-3 border border-zinc-200 p-4 rounded-xl cursor-pointer">
                <input type="radio" name="payment" />
                PayPal
              </label>

              <label className="flex items-center gap-3 border border-zinc-200 p-4 rounded-xl cursor-pointer">
                <input type="radio" name="payment" />
                Cash On Delivery
              </label>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="border border-zinc-200 rounded-2xl p-6 shadow-sm h-fit">

          <h2 className="text-2xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4 mb-6">

            <div className="flex justify-between">
              <span>Products</span>
              <span>$240.00</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>$15.00</span>
            </div>

          </div>

          <div className="border-t pt-4 flex justify-between text-xl font-bold mb-6">

            <span>Total</span>
            <span>$265.00</span>

          </div>

          <button className="w-full bg-black text-white py-4 rounded-xl hover:bg-zinc-800 transition">
            Place Order
          </button>

        </div>

      </div>

    </section>
  );
}