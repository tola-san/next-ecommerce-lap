"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "https://cdn.prod.website-files.com/615d7c5513b1a337397bbdd7/651d7fd77e6ad1c0493dea8c_Main.webp",
  },
  {
    id: 2,
    image:
      "https://media.gq-magazine.co.uk/photos/69c5565a362c1c2206e578ba/16:9/w_1280,c_limit/willy%20x%20zara%20triptych%20lede%20v1.png",
  },
  {
    id: 3,
    image:
      "https://data2.nssmag.com/images/galleries/29735/zara-cover.jpg",
  },
];

export default function HeroCarousel() {
  return (
    <section className="w-full px-4 py-6">
      <div className="mx-auto max-w-7xl">
        
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="rounded-2xl overflow-hidden"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              
              <div
                className="
                  relative
                  w-full
                  h-[220px]
                  sm:h-[320px]
                  lg:h-[450px]
                  overflow-hidden
                  rounded-2xl
                "
              >
                
                {/* Full Image */}
                <img
                  src={slide.image}
                  alt="banner"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    
    </section>
  );
}