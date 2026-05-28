import { Poppins } from "next/font/google";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

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

        <Footer />

      </body>

    </html>
  );
}