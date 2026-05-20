import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tola | Portfolio",                    // ← Change to your name
  description: "Full-Stack Developer & Systems Architect",
  icons: {
    icon: [
      { url: "../shopping-bag.png", sizes: "any" },     // This is correct now
    
    ],
    shortcut: "../shopping-bag.png",
    apple: "../shopping-bag.png",                       // For iPhone/iPad
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} h-full`}>
      <body className="min-h-full flex flex-col ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}