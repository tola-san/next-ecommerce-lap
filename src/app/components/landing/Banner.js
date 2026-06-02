"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const fashionCategories = [
  {
    id: 1,
    name: "Women Clothing",
    query: "women clothing",
  },
  {
    id: 2,
    name: "Men Clothing",
    query: "men clothing",
  },
  {
    id: 3,
    name: "Streetwear",
    query: "streetwear fashion",
  },
  {
    id: 4,
    name: "Luxury Fashion",
    query: "luxury fashion",
  },
  {
    id: 5,
    name: "Fashion Shopping",
    query: "fashion shopping",
  },
];

export default function HeroCarousel() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.pexels.com/v1/search",
          {
            headers: {
              Authorization:
                process.env.NEXT_PUBLIC_PEXELS_API_KEY, // Ensure this is set in your .env file
            },
            params: {
              query: fashionCategories[Math.floor(Math.random() * fashionCategories.length)].query,
              per_page: 3,
              orientation: "landscape",
            },
          }
        );

        setSlides(response.data.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

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
              <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[450px] overflow-hidden rounded-2xl">
                <img
                  src={slide.src.landscape}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}