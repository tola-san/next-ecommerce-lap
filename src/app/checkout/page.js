"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { showErrorToast } from "@/lib/toast";

import {
  FaCreditCard,
  FaPaypal,
  FaMoneyBillWave,
  FaLock,
} from "react-icons/fa";

import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {

  const {
    cartItems,
    clearCart,
  } = useCart();

  const [loading, setLoading] =
    useState(false);

  const [payment, setPayment] =
    useState("cod");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const shipping = 10;

  const tax = subtotal * 0.05;

  const total =
    subtotal + shipping + tax;

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handlePlaceOrder = async () => {

    if (
      !form.firstName ||
      !form.phone ||
      !form.address
    ) {


      showErrorToast("Please fill all required fields.")
      
      return;
    }

    if (cartItems.length === 0) {

      showErrorToast("Please fill all required fields.")

      return;
    }

    try {

      setLoading(true);

      const order = {

        ...form,

        payment,

        products: cartItems,

        subtotal,

        shipping,

        tax,

        total,

        createdAt:
          new Date().toISOString(),
      };

      const response = await fetch(
        "/api/orders",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(order),
        }
      );

      const data =
        await response.json();

     if (data.success) {

  clearCart();

  toast.success(
    "Order submitted successfully!"
  );

  setTimeout(() => {
    window.location.href = "/";
  }, 1500);

}

    } catch (error) {

      console.error(error);
      
      // alert(
      //   "Failed to place order."
      // );
      showErrorToast("Failed to place order.")

    } finally {

      setLoading(false);

    }
  };

  return (
    <section className="bg-zinc-50 min-h-screen pb-24">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">

          <Link
            href="/cart"
            className="text-zinc-400 hover:text-zinc-700 transition"
          >
            <ArrowLeft size={24} />
          </Link>

          <div>

            <p className="uppercase tracking-widest text-violet-600 font-semibold text-sm">
              Secure Checkout
            </p>

            <h1 className="text-4xl font-semibold">
              Complete Your Order
            </h1>

          </div>

        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-3 space-y-8">

            {/* Shipping */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">

              <h2 className="text-2xl font-semibold mb-6">
                Shipping Information
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  className="border p-4 rounded-xl"
                />

                <input
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  className="border p-4 rounded-xl"
                />

                <input
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="border p-4 rounded-xl md:col-span-2"
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  className="border p-4 rounded-xl md:col-span-2"
                />

                <input
                  name="address"
                  placeholder="Address"
                  onChange={handleChange}
                  className="border p-4 rounded-xl md:col-span-2"
                />

                <input
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  className="border p-4 rounded-xl"
                />

                <input
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={handleChange}
                  className="border p-4 rounded-xl"
                />

              </div>

            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">

              <h2 className="text-2xl font-semibold mb-6">
                Payment Method
              </h2>

              <div className="space-y-4">

                <label className="flex items-center justify-between border rounded-xl p-5 cursor-pointer">

                  <div className="flex items-center gap-4">

                    <FaCreditCard size={24} />

                    <span>
                      Credit Card
                    </span>

                  </div>

                  <input
                    type="radio"
                    checked={
                      payment === "card"
                    }
                    onChange={() =>
                      setPayment("card")
                    }
                  />

                </label>

                <label className="flex items-center justify-between border rounded-xl p-5 cursor-pointer">

                  <div className="flex items-center gap-4">

                    <FaPaypal size={24} />

                    <span>
                      PayPal
                    </span>

                  </div>

                  <input
                    type="radio"
                    checked={
                      payment === "paypal"
                    }
                    onChange={() =>
                      setPayment(
                        "paypal"
                      )
                    }
                  />

                </label>

                <label className="flex items-center justify-between border rounded-xl p-5 cursor-pointer">

                  <div className="flex items-center gap-4">

                    <FaMoneyBillWave size={24} />

                    <span>
                      Cash On Delivery
                    </span>

                  </div>

                  <input
                    type="radio"
                    checked={
                      payment === "cod"
                    }
                    onChange={() =>
                      setPayment("cod")
                    }
                  />

                </label>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-2xl p-8 shadow-sm sticky top-8">

              <h2 className="text-2xl font-semibold mb-6">
                Order Summary
              </h2>

              <div className="space-y-3">

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="flex justify-between text-sm"
                  >

                    <span>
                      {item.title}
                      {" "}
                      ×
                      {" "}
                      {item.quantity}
                    </span>

                    <span>
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </span>

                  </div>

                ))}

              </div>

              <div className="border-t mt-6 pt-6 space-y-4">

                <div className="flex justify-between">

                  <span>
                    Subtotal
                  </span>

                  <span>
                    $
                    {subtotal.toFixed(2)}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>
                    Shipping
                  </span>

                  <span>
                    $
                    {shipping.toFixed(2)}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>
                    Tax
                  </span>

                  <span>
                    $
                    {tax.toFixed(2)}
                  </span>

                </div>

                <div className="border-t pt-4 flex justify-between text-xl font-bold">

                  <span>
                    Total
                  </span>

                  <span>
                    $
                    {total.toFixed(2)}
                  </span>

                </div>

              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="mt-8 w-full bg-black text-white py-4 rounded-full hover:bg-zinc-800 transition"
              >
                {loading
                  ? "Submitting..."
                  : `Place Order • $${total.toFixed(
                      2
                    )}`}
              </button>

              <div className="flex items-center justify-center gap-2 mt-5 text-sm text-zinc-500">

                <FaLock />

                Secure SSL encrypted checkout

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}