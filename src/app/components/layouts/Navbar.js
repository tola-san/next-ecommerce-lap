"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Menu,
  User,
  X,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <nav
        className="
          sticky top-0 z-50
          border-b border-white/30
          bg-white/20
          backdrop-blur-xl
          shadow-sm 
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center 
            justify-between
            py-4 px-4
            
          "
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="
                flex h-10 w-10 items-center justify-center
                rounded-2xl
                bg-gradient-to-br
                from-black
                to-violet-500
                shadow-lg
              "
            >
              <span className="text-xl font-black text-white">
                La
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
              zada
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="
              hidden md:flex
              items-center gap-2
              rounded-full
              border border-zinc-200
              bg-white/70
              p-1 px-4
              text-sm
              backdrop-blur-lg
            "
          >
            {["Home", "Shop", "Categories", "About"].map(
              (item, index) => (
                <Link
                  key={index}
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase()}`
                  }
                  className="
                    rounded-full
                    px-4 py-2
                    transition-all duration-300
                    hover:bg-zinc-900
                    hover:text-white
                  "
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search */}
            <div className="relative hidden lg:block w-72">
              <Search
                size={18}
                className="
                  absolute left-4 top-1/2
                  -translate-y-1/2
                  text-zinc-400
                "
              />

              <input
                type="text"
                placeholder="Search products..."
                className="
                  w-full
                  rounded-full
                  border border-zinc-200
                  bg-white/80
                  py-2 pl-11 pr-4
                  text-sm
                  outline-none
                  transition-all
                  focus:border-zinc-400
                "
              />
            </div>

            {/* User */}
            {/* <button
              className="
                rounded-full
                border border-zinc-200
                p-2
                text-zinc-700
                transition-all
                hover:bg-zinc-900
                hover:text-white
              "
            >
              <User size={20} />
            </button> */}

            {/* Cart */}
            <Link
              href="/cart"
              className="
                relative
                rounded-full
                border border-zinc-200
                p-2
                text-zinc-700
                transition-all
                hover:bg-zinc-900
                hover:text-white
              "
            >
              <ShoppingCart size={20} />

              <span
                className="
                  absolute -right-1 -top-1
                  flex h-5 w-5 items-center justify-center
                  rounded-full
                  bg-red-500
                  text-xs font-medium text-white
                "
              >
                3
              </span>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(true)}
              className="
                md:hidden
                rounded-full
                border border-zinc-200
                p-2
                text-zinc-700
                transition-all
                hover:bg-zinc-100
              "
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40
          bg-black/50
          backdrop-blur-sm
          transition-all duration-300
          md:hidden
          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Offcanvas */}
      <div
        className={`
          fixed top-0 right-0 z-50
          h-[100dvh]
          w-[85%] max-w-[340px]
          bg-white
          shadow-2xl
          transition-transform duration-300 ease-in-out
          md:hidden
          flex flex-col
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-lg font-bold">
            Menu
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="
              rounded-full
              p-2
              transition
              hover:bg-zinc-100
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Search Mobile */}
        <div className="p-5 border-b">
          <div className="relative">
            <Search
              size={18}
              className="
                absolute left-4 top-1/2
                -translate-y-1/2
                text-zinc-400
              "
            />

            <input
              type="text"
              placeholder="Search..."
              className="
                w-full
                rounded-full
                border border-zinc-200
                py-3 pl-11 pr-4
                text-sm
                outline-none
              "
            />
          </div>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col p-5">
          {[
            { name: "Home", href: "/" },
            { name: "Shop", href: "/products" },
            { name: "Categories", href: "/categories" },
            { name: "About", href: "/about" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                rounded-xl
                px-4 py-3
                text-base font-medium
                text-zinc-700
                transition-all
                hover:bg-zinc-100
              "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}