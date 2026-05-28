import { 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube 
} from "react-icons/fa";

import { Heart } from "lucide-react";   // Keep Heart from Lucide (optional)

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl  to-blue-500 font-semibold text-white tracking-tight">Lazada</h3>
            <p className="text-sm leading-relaxed">
              Premium products with exceptional quality. 
              Shop smarter, live better.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-5 pt-2">
              <a href="#" className="hover:text-white transition-all hover:scale-110">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-white transition-all hover:scale-110">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="hover:text-white transition-all hover:scale-110">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-white transition-all hover:scale-110">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Deals</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-medium mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 bg-black py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 MyShop. All rights reserved.</p>
          
          <div className="flex gap-6 text-xs uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <p className="flex items-center gap-1.5 text-zinc-500">
            Made with <Heart size={14} className="text-red-500" /> for great shopping
          </p>
        </div>
      </div>
    </footer>
  );
}