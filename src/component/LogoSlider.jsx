"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

const logos = [
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.svg",
  "/logos/logo4.svg",
  "/logos/logo5.svg",
  "/logos/logo6.svg",
  "/logos/logo7.svg",
  "/logos/logo8.svg",
  "/logos/logo9.svg",
  "/logos/logo10.svg",
  "/logos/logo11.svg",
  "/logos/logo12.svg",
  "/logos/logo13.svg",
  "/logos/logo14.svg",
  "/logos/logo15.svg",
];

export default function LogoSlider() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-10 mx-10 text-center ">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-10">
          Trusted by 500+ global companies
        </h2>

        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          loop={true}
          grabCursor={true}
          slidesPerView="auto"
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="flex items-center"
        >
          {logos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="!w-auto flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-8 md:h-10 mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
