"use client";

import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  User,
  X,
} from "lucide-react";

export default function Navbar() {
  
  const [open, setOpen] = useState(false);

  
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
          border-b border-white/10
          bg-white/70
          backdrop-blur-xl
          shadow-sm overflow-x-hidden
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-4 py-4
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
            <Link
              href="/"
              className="
                rounded-full
                px-4 py-2
                transition-all
                hover:bg-zinc-900
                hover:text-white
              "
            >
              Home
            </Link>

            <Link
              href="/products"
              className="
                rounded-full
                px-4 py-2
                transition-all
                hover:bg-zinc-900
                hover:text-white
              "
            >
              Shop
            </Link>

            <Link
              href="/categories"
              className="
                rounded-full
                px-4 py-2
                transition-all
                hover:bg-zinc-900
                hover:text-white
              "
            >
              Categories
            </Link>

            <Link
              href="/about"
              className="
                rounded-full
                px-4 py-2
                transition-all
                hover:bg-zinc-900
                hover:text-white
              "
            >
              About
            </Link>
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
            <button
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
            </button>

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
              "
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
     {/* Overlay */}
<div
  onClick={() => setOpen(false)}
  className={`
    fixed inset-0 z-40
    bg-black/40
    backdrop-blur-sm
    transition-all duration-300
    ${
      open
        ? "visible opacity-100"
        : "invisible opacity-0 pointer-events-none"
    }
  `}
/>

      
     {/* Mobile Offcanvas */}
<div
  className={`
    fixed top-0 right-0 z-50
    h-screen
    w-[85%] max-w-[320px]
    overflow-y-auto
    bg-white
    shadow-2xl
    transition-transform duration-300
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
>
        {/* Header */}
        <div
          className="
            flex items-center justify-between
            border-b border-zinc-200
            p-5
          "
        >
          <h2 className="text-xl font-bold">
            Menu
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="
              rounded-full
              p-2
              hover:bg-zinc-100
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Search */}
        <div className="p-5">
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
                rounded-2xl
                border border-zinc-200
                py-3 pl-11 pr-4
                outline-none
              "
            />
          </div>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col px-5">
          
          <Link
            href="/"
            className="
              rounded-2xl
              px-4 py-3
              text-lg font-medium
              transition-all
              hover:bg-zinc-100
            "
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/products"
            className="
              rounded-2xl
              px-4 py-3
              text-lg font-medium
              transition-all
              hover:bg-zinc-100
            "
            onClick={() => setOpen(false)}
          >
            Shop
          </Link>

          <Link
            href="/categories"
            className="
              rounded-2xl
              px-4 py-3
              text-lg font-medium
              transition-all
              hover:bg-zinc-100
            "
            onClick={() => setOpen(false)}
          >
            Categories
          </Link>

          <Link
            href="/about"
            className="
              rounded-2xl
              px-4 py-3
              text-lg font-medium
              transition-all
              hover:bg-zinc-100
            "
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
    </>
  );
}