import { Heart, Award, Users, Truck } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-zinc-950 text-zinc-300 min-h-screen">
      {/* Hero Section */}
      <section className="bg-black py-24 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            About MyShop
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto">
            Redefining premium shopping with quality, trust, and style.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
                <p>
                  Founded in 2024, MyShop began with a simple idea: 
                  <span className="text-white">great products should be easy to find, trustworthy, and delivered with care.</span>
                </p>
                <p>
                  What started as a small curated collection has grown into a premium destination 
                  for those who value quality over quantity.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-2xl aspect-video flex items-center justify-center border border-zinc-800">
              <p className="text-zinc-500 text-center">Brand Story Image / Video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-zinc-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-white text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors group">
              <Award className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-3">Premium Quality</h3>
              <p className="text-zinc-400">We partner only with trusted manufacturers who maintain the highest standards.</p>
            </div>

            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors group">
              <Users className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-3">Customer First</h3>
              <p className="text-zinc-400">Your satisfaction is our top priority. We go the extra mile to make you happy.</p>
            </div>

            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors group">
              <Truck className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-3">Fast Delivery</h3>
              <p className="text-zinc-400">Reliable shipping with real-time tracking, so you never have to wait anxiously.</p>
            </div>

            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors group">
              <Heart className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-3">Sustainability</h3>
              <p className="text-zinc-400">We care about our planet and support ethical, eco-friendly practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 ">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-white mb-4">Why Shop With Us?</h2>
          <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
            We’re more than just an online store — we’re your partner in smart, stylish living.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8">
              <div className="text-5xl font-bold text-white mb-2">30</div>
              <p className="text-zinc-400">Days Free Returns</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-white mb-2">100k+</div>
              <p className="text-zinc-400">Happy Customers</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <p className="text-zinc-400">Premium Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-zinc-100 py-20 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">
            Ready to experience better shopping?
          </h2>
          <p className="text-zinc-400 mb-10 text-lg">
            Join thousands of customers who trust MyShop for quality and style.
          </p>
          <a 
            href="/products" 
            className="inline-block bg-white text-black font-medium px-10 py-4 rounded-full hover:bg-zinc-200 transition-colors text-lg"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
}