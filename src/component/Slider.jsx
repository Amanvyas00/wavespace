"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const brandingData = [
  { title: "Branding Identity", img: "/images/slider/s1.webp" },
  { title: "Corporate Branding", img: "/images/brandSample2.png" },
  { title: "Startup Branding", img: "/images/brandSample3.png" },
  { title: "Motion Branding", img: "/images/brandSample4.png" },
];

export default function Slider() {
  return (
    <section className="bg-[#3B32F0] w-full py-8">
      <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
        {brandingData.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
              {/* LEFT */}
              <div className="flex-1">
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  {b.title}
                </h2>

              <div className="flex flex-row gap-12">
                  <p className="text-white text-lg leading-relaxed max-w-lg mb-8">
                  Create a trusted, global brand with our expert designs and
                  strategies. We help improve your brand's visibility,
                  credibility, and connection with customers both online and
                  offline.
                </p>
                <p className="text-white text-lg leading-relaxed max-w-lg mb-8">
                  Brand identity design Corporate identity design Brand strategy
                  Motion graphics design Graphic design Startup branding
                </p>
              </div>

                <button className="bg-white text-black mt-8 px-7 py-3 rounded-full font-semibold hover:opacity-90 transition flex items-center gap-2">
                  Build brand identity ↗
                </button>
              </div>

              {/* RIGHT IMG */}
              <div className="flex-1 flex justify-center">
                <Image
                  src={b.img}
                  width={350}
                  height={350}
                  className="border border-white/20 shadow-xl object-cover"
                  alt="branding preview"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
