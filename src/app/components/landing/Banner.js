"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=1328&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Fashion Collection",
    subtitle: "Discover Trending Styles",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    title: "Premium Electronics",
    subtitle: "Latest Smart Technology",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
    title: "Lifestyle Essentials",
    subtitle: "Upgrade Your Everyday Living",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen w-full">
              
              {/* Background Image */}
              <div
                className="
                  absolute inset-0
                  bg-cover bg-center bg-no-repeat
                  scale-105
                "
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
                  
                  <div className="max-w-2xl">
                    
                    <span
                      className="
                        mb-6 inline-block
                        rounded-full
                        border border-white/20
                        bg-white/10
                        px-4 py-2
                        text-sm font-medium
                        text-white
                        backdrop-blur-md
                      "
                    >
                      Premium Shopping Experience
                    </span>

                    <h1
                      className="
                        text-4xl
                        sm:text-5xl
                        lg:text-7xl
                        font-black
                        leading-tight
                        tracking-tight
                        text-white
                      "
                    >
                      {slide.title}
                    </h1>

                    <p
                      className="
                        mt-6
                        text-lg
                        text-zinc-200
                        max-w-xl
                      "
                    >
                      {slide.subtitle}
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                      
                      <Link
                        href="/products"
                        className="
                          inline-flex items-center justify-center
                          rounded-full
                          bg-white
                          px-8 py-3
                          text-lg font-semibold
                          text-black
                          transition-all duration-300
                          hover:scale-105
                          hover:bg-zinc-100
                        "
                      >
                        Shop Now
                      </Link>

                      <Link
                        href="/categories"
                        className="
                          inline-flex items-center justify-center
                          rounded-full
                          border border-white/30
                          bg-white/10
                          backdrop-blur-md
                          px-8 py-3
                          text-lg font-medium
                          text-white
                          transition-all duration-300
                          hover:bg-white/20
                        "
                      >
                        Browse Categories
                      </Link>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}