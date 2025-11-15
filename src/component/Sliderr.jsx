"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Sliderr() {
  const swiperRef = useRef(null);

  const slides = [
    { bg: "#3B32F0", img: "/images/slider/s1.webp" },
    { bg: "#ff0000", img: "/images/slider/s1.webp" },
    { bg: "#3B32F0", img: "/images/slider/s1.webp" },
    { bg: "#ff0000", img: "/images/slider/s1.webp" },
  ];

  // 🔥 Add scroll listener to trigger slide change
  useEffect(() => {
    function handleWheel(e) {
      if (!swiperRef.current) return;

      const swiper = swiperRef.current;

      // Scrolling down → next slide
      if (e.deltaY > 0) {
        swiper.slideNext();
      }

      // Scrolling up → previous slide
      if (e.deltaY < 0) {
        swiper.slidePrev();
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      mousewheel={false} // ⬅ Turn off default
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      modules={[Mousewheel, Pagination, Keyboard]}
      onSwiper={(swiper) => (swiperRef.current = swiper)} // ⬅ Store swiper instance
      className="h-[510px] w-full"
    >
      {slides.map((s, index) => (
        <SwiperSlide key={index}>
          <section
            className="w-full py-8 px-6 md:px-12 lg:px-20 flex items-center"
            style={{ background: s.bg }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* LEFT SIDE */}
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                  Branding Identity
                </h1>

                <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                  <p className="text-white text-lg leading-relaxed md:w-1/2">
                    Create a trusted, global brand with our expert designs and
                    strategies. We help improve your brand&apos;s visibility,
                    credibility, and connection with customers both online and
                    offline.
                  </p>

                  <div className="md:w-1/2 grid grid-cols-1 gap-4 text-white text-lg leading-relaxed">
                    {[
                      "Brand identity design",
                      "Corporate identity design",
                      "Brand strategy",
                      "Motion graphics design",
                      "Graphic design",
                      "Startup branding",
                    ].map((item, i) => (
                      <p
                        key={i}
                        className="flex items-center gap-3 hover:translate-x-1 transition-all"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-white/70"></span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <button className="mt-10 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg shadow-md hover:scale-105 transition">
                  Build brand identity ↗
                </button>
              </div>

              {/* RIGHT IMAGE (UPDATED) */}
              <div className="w-full flex justify-center lg:justify-end">
                <div className="bg-white p-4 rounded-xl max-w-sm w-full shadow-lg service_card">
                  <Image
                    src={s.img}
                    width={500}
                    height={500}
                    alt="brand"
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
