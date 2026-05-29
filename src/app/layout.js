import { Poppins } from "next/font/google";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { Toaster } from "react-hot-toast";

import { CartProvider } from "@/context/CartContext";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Ecomlap",
  description: "Full-Stack Developer & Systems Architect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">

      <body
        className={`${poppins.className} min-h-full flex flex-col bg-white/30 backdrop-blur-lg`}
      > 

        <Navbar />

        <CartProvider>
          {children}
        </CartProvider>
        <Toaster
  position="top-center"
  gutter={12}
  toastOptions={{
    duration: 3000,
    className:
      "!bg-green-500 !text-white !rounded-2xl !shadow-2xl !px-4 !py-3",
  }}
/>
        <Footer />

      </body>

    </html>
  );
}