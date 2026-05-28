import { FaGithub, FaTwitter, FaTelegram } from "react-icons/fa";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-5">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Lazada
              </h2>

              {/* Accent line */}
              <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>

            <p className="text-sm leading-relaxed text-zinc-500">
              Premium products with exceptional quality.
              Built for modern shopping experiences and
              seamless online discovery.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/tola-san/next-ecommerce-lap
                "
                className="group p-3 rounded-full border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300"
              >
                <FaGithub
                  size={18}
                  className="group-hover:text-white transition-colors"
                />
              </a>

              <a
                href="#"
                className="group p-3 rounded-full border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300"
              >
                <FaTwitter
                  size={18}
                  className="group-hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">
              Shop
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                "New Arrivals",
                "Trending",
                "Best Sellers",
                "Discount Deals",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">
              Company
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                "About Us",
                "Our Team",
                "Careers",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Telegram Community */}
<div>
  <h4 className="text-white font-semibold mb-5 text-lg">
    Join Community
  </h4>

  <p className="text-sm text-zinc-500 mb-5 leading-relaxed">
    Join our Telegram channel for product updates,
    exclusive deals, and developer news.
  </p>

  <div className="space-y-4">
    <a
      href="https://t.me/tolasannn"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center justify-center gap-3
        w-full
        rounded-full
        bg-[#229ED9]
        hover:bg-[#1d8bc2]
        text-white
        py-3
        text-sm
        font-medium
        transition-all duration-300
        hover:scale-[1.02]
      "
    >
      {/* Telegram Icon */}
      <FaTelegram
        size={18}
        className="group-hover:text-white transition-colors"
      />
        <path d="M21.944 4.507c.307-1.214-.44-1.69-1.389-1.34L2.91 10.014c-1.203.47-1.186 1.142-.206 1.44l4.53 1.414 1.75 5.316c.213.586.107.82.72.82.474 0 .683-.217.948-.474l2.29-2.226 4.764 3.52c.878.484 1.51.235 1.729-.814l2.509-11.503z" />
      

      Join Telegram
    </a>

   
  </div>
</div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-800 bg-black/70">
        <div
          className="
            max-w-7xl mx-auto px-6 py-5
            flex flex-col md:flex-row
            items-center justify-between
            gap-4 text-sm
          "
        >
          <p className="text-zinc-500 text-center md:text-left">
            © 2026 Lazada. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs uppercase tracking-wider">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Terms
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>

          <p className="flex items-center gap-1.5 text-zinc-500">
            Made with
            <Heart size={14} className="text-red-500 fill-red-500" />
            for developers
          </p>
        </div>
      </div>
    </footer>
  );
}