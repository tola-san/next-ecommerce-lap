// src/app/components/layouts/Navbar.js
import Link from 'next/link';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-100/20 backdrop-blur-sm border-b border-zinc-300  shadow-sm">
      <div className="max-w-7xl mx-auto px-14 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-black to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/30">
            <span className="text-white text-2xl font-bold tracking-tighter">M</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Odex
          </h1>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-800 bg-white/60 border border-zinc-300 p-1 px-4 rounded-full">
          <Link href="/" className="nav-link hover:text-zinc-200 hover:bg-zinc-800 transition-colors p-1 px-4 rounded-full ">Home</Link>
          <Link href="/products" className="nav-link hover:text-zinc-200 hover:bg-zinc-800 transition-colors  p-1 px-4 rounded-full">Shop</Link>
          <Link href="/categories" className="nav-link hover:text-zinc-200 hover:bg-zinc-800 transition-colors p-1 px-4 rounded-full">Categories</Link>
          <Link href="/about" className="nav-link hover:text-zinc-200 hover:bg-zinc-800 transition-colors  p-1 px-4 rounded-full">About</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          
          {/* Search Bar */}
          <div className="hidden sm:block relative w-72">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-white/60  border border-zinc-200 focus:border-zinc-400 rounded-full py-2 pl-11 pr-4 text-sm focus:outline-none transition-all shadow-inner"
            />
          </div>

          {/* Icons */}
          <button className="p-2  hover:bg-zinc-800 cursor-pointer rounded-full transition-all text-gray-700 border border-zinc-300">
            <User size={22} />
          </button>

          <Link href="/cart" className="p-2 hover:bg-zinc-800 rounded-full transition-all text-gray-700 border border-zinc-300 relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-1 bg-rose-500/30 border border-red-500 text-red-500 text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center  ">
              3
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-zinc-800 rounded-full transition-all text-gray-700 border border-zinc-300">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}