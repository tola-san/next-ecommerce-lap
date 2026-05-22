"use client";

import React from "react";
import {
  FaCreditCard,
  FaPaypal,
  FaMoneyBillWave,
  FaLock,
} from "react-icons/fa";

export default function CheckoutPage() {
  return (
    <section className="min-h-screen bg-zinc-100 py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">

          <p className="text-violet-600 font-semibold uppercase tracking-widest mb-3">
            Secure Checkout
          </p>

          <h1 className="text-5xl font-bold tracking-tight">
            Complete Your Order
          </h1>

          <p className="text-zinc-500 mt-4 text-lg">
            Fast, secure, and modern shopping experience.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">

            {/* Shipping */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200">

              <div className="flex items-center gap-3 mb-8">

                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                  1
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Shipping Information
                  </h2>

                  <p className="text-zinc-500">
                    Enter your delivery details
                  </p>
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-zinc-200 bg-zinc-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-zinc-200 bg-zinc-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-zinc-200 bg-zinc-50 p-4 rounded-2xl md:col-span-2 outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-zinc-200 bg-zinc-50 p-4 rounded-2xl md:col-span-2 outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="text"
                  placeholder="Street Address"
                  className="border border-zinc-200 bg-zinc-50 p-4 rounded-2xl md:col-span-2 outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="text"
                  placeholder="City"
                  className="border border-zinc-200 bg-zinc-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border border-zinc-200 bg-zinc-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-black"
                />

              </div>

            </div>

            {/* Payment */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200">

              <div className="flex items-center gap-3 mb-8">

                <div className="w-12 h-12 rounded-2xl border border-blue-500 bg-blue-500/20 text-blue-500 flex items-center justify-center">
                  2
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Payment Method
                  </h2>

                  <p className="text-zinc-500">
                    Choose your preferred payment option
                  </p>
                </div>

              </div>

              <div className="space-y-4">

                {/* Credit Card */}
                <label className="flex items-center  justify-between border border-zinc-200 p-5 rounded-2xl hover:border-black transition cursor-pointer">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 bg-orange-500/20 border border-orange-400 rounded-xl flex items-center justify-center">
                      <FaCreditCard className="text-xl text-orange-500" />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Credit Card
                      </h3>

                      <p className="text-sm text-zinc-500">
                        Visa, Mastercard
                      </p>
                    </div>

                  </div>

                  <input type="radio" name="payment" />

                </label>

                {/* Paypal */}
                <label className="flex items-center justify-between border border-zinc-200 p-5 rounded-2xl hover:border-black transition cursor-pointer">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 bg-blue-500/20 border border-blue-400 rounded-xl flex items-center justify-center">
                      <FaPaypal className="text-xl text-blue-500" />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        PayPal
                      </h3>

                      <p className="text-sm text-zinc-500">
                        Secure online payment
                      </p>
                    </div>

                  </div>

                  <input type="radio" name="payment" />

                </label>

                {/* COD */}
                <label className="flex items-center justify-between border border-zinc-200 p-5 rounded-2xl hover:border-black transition cursor-pointer">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 bg-green-500/20 border border-green-400 rounded-xl flex items-center justify-center">
                      <FaMoneyBillWave className="text-xl text-green-500" />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Cash On Delivery
                      </h3>

                      <p className="text-sm text-zinc-500">
                        Pay when order arrives
                      </p>
                    </div>

                  </div>

                  <input type="radio" name="payment" />

                </label>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* Order Summary */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200 sticky top-10">

              <h2 className="text-3xl font-bold mb-8">
                Order Summary
              </h2>

              {/* Products */}
              <div className="space-y-5 mb-8">

                <div className="flex justify-between">
                  <span className="text-zinc-500">
                    Products
                  </span>

                  <span className="font-semibold">
                    $240.00
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-500">
                    Shipping
                  </span>

                  <span className="font-semibold">
                    $10.00
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-500">
                    Tax
                  </span>

                  <span className="font-semibold">
                    $15.00
                  </span>
                </div>

              </div>

              {/* Total */}
              <div className="border-t border-zinc-200 pt-6 flex justify-between items-center mb-8">

                <span className="text-2xl font-bold">
                  Total
                </span>

                <span className="text-3xl font-bold">
                  $265.00
                </span>

              </div>

              {/* Checkout Button */}
              <button className="w-full bg-black text-white py-4 rounded-xl hover:bg-zinc-800 transition text-lg font-semibold">

                Place Order

              </button>

              {/* Security */}
              <div className="flex items-center justify-center gap-2 mt-5 text-zinc-500 text-sm">

                <FaLock />

                <p>
                  Secure SSL encrypted checkout
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}