import Image from "next/image";
import {
  Heart,
  Award,
  Users,
  Truck,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-cyan-200 blur-3xl rounded-full opacity-60" />

          <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-200 blur-3xl rounded-full opacity-60" />
        </div>

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-6
            py-24
            grid
            lg:grid-cols-2
            gap-20
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-zinc-200
                bg-white
                shadow-sm
                mb-8
              "
            >
              <Sparkles size={16} className="text-cyan-500" />

              <span className="text-sm text-zinc-600">
                Premium Shopping Experience
              </span>
            </div>

            {/* Title */}
            <h1
              className="
                text-5xl
                md:text-7xl
                font-black
                tracking-tight
                leading-none
              "
            >
              We Build

              <span
                className="
                  block
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                "
              >
                Modern Commerce
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-8
                text-lg
                text-zinc-600
                leading-relaxed
                max-w-xl
              "
            >
              Discover curated premium products designed
              for modern lifestyles. Fast delivery,
              trusted quality, and beautiful shopping
              experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              
              <a
                href="/products"
                className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-black
                  text-white
                  font-semibold
                  hover:bg-zinc-800
                  hover:scale-105
                  transition-all
                "
              >
                Explore Products
              </a>

              <a
                href="#story"
                className="
                  px-8
                  py-4
                  rounded-2xl
                  border
                  border-zinc-300
                  bg-white
                  hover:bg-zinc-100
                  transition-all
                "
              >
                Learn More
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            
            {/* Glow */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-cyan-200
                to-blue-200
                blur-3xl
                rounded-full
                opacity-70
              "
            />

            {/* Mockup Card */}
            <div
              className="
                relative
                bg-white/80
                backdrop-blur-xl
                border
                border-zinc-200
                rounded-[2rem]
                p-5
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                rotate-2
                hover:rotate-0
                transition-all
                duration-500
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Modern Product"
                width={700}
                height={700}
                className="
                  rounded-[1.5rem]
                  object-cover
                  w-full
                  h-auto
                "
              />

              {/* Floating Card */}
              <div
                className="
                  absolute
                  -bottom-8
                  -left-8
                  bg-white/90
                  backdrop-blur-xl
                  border
                  border-zinc-200
                  rounded-2xl
                  p-5
                  shadow-xl
                "
              >
                <p className="text-sm text-zinc-500">
                  Trusted by
                </p>

                <h3 className="text-3xl font-bold mt-1">
                  100k+
                </h3>

                <p className="text-xs text-zinc-500 mt-1">
                  Happy customers worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        id="story"
        className="py-28 border-t border-zinc-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold tracking-tight">
              Why Choose Us
            </h2>

            <p
              className="
                mt-6
                text-zinc-600
                text-lg
                leading-relaxed
              "
            >
              We focus on quality, speed, and beautiful
              customer experiences that make online
              shopping feel premium.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            
            {[
              {
                icon: Award,
                title: "Premium Quality",
                desc: "Carefully curated products from trusted brands.",
                color: "text-cyan-500",
                bgColor: "bg-cyan-50 border-cyan-100",
              },
              {
                icon: Users,
                title: "Customer First",
                desc: "We prioritize customer happiness and satisfaction.",
                color: "text-blue-500",
                bgColor: "bg-blue-50 border-blue-100",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Quick shipping with reliable tracking systems.",
                color: "text-green-500",
                bgColor: "bg-green-50 border-green-100",
              },
              {
                icon: Heart,
                title: "Built With Passion",
                desc: "Designed for people who love modern shopping.",
                color: "text-purple-500",
                bgColor: "bg-purple-50 border-purple-100",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    bg-white
                    border
                    border-zinc-200
                    rounded-3xl
                    p-8
                    shadow-sm
                    hover:shadow-2xl
                    hover:border-cyan-300
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >
                  {/* Icon */}
                  <div
                    className={`
  w-16
  h-16
  rounded-2xl
  ${item.bgColor}
  flex
  items-center
  justify-center
  mb-6
  group-hover:scale-110
  transition-transform
`}
                  >
                    <Icon className={`w-8 h-8 ${item.color}`}  />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid md:grid-cols-3 gap-10">
            
            {[
              ["100K+", "Happy Customers"],
              ["500+", "Premium Products"],
              ["24/7", "Customer Support"],
            ].map(([number, label], index) => (
              <div
                key={index}
                className="
                  text-center
                  bg-white
                  border
                  border-zinc-200
                  rounded-3xl
                  p-12
                  shadow-sm
                "
              >
                <h3
                  className="
                    text-6xl
                    font-black
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                  "
                >
                  {number}
                </h3>

                <p className="mt-4 text-zinc-600 text-lg">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <h2 className="text-5xl font-bold tracking-tight">
            Ready to Upgrade

            <span
              className="
                block
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
              "
            >
              Your Shopping Experience?
            </span>
          </h2>

          <p
            className="
              mt-8
              text-zinc-600
              text-lg
              max-w-2xl
              mx-auto
            "
          >
            Join thousands of customers discovering
            premium products with a modern ecommerce
            experience.
          </p>

          <a
            href="/products"
            className="
              inline-flex
              items-center
              justify-center
              mt-10
              px-10
              py-5
              rounded-2xl
              bg-black
              text-white
              font-semibold
              hover:bg-zinc-800
              hover:scale-105
              transition-all
            "
          >
            Start Shopping
          </a>
        </div>
      </section>
    </main>
  );
}