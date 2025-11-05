"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Slider1 = () => {
  return (
    <>
      <div className="flex flex-row bg-white ">
        <div className="w-full py-20">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
            {/* Rating Number */}
            <div className="text-center">
              <h2 className="text-[140px] font-bold text-gray-300 leading-none">
                4.9
              </h2>

              {/* Stars */}
              <div className="flex justify-center gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-red-500 text-3xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-500 font-medium text-lg mt-2">
                200+ reviews
              </p>
            </div>

            {/* Logos */}
            <div className="flex items-center gap-10 md:gap-16 opacity-80">
              <img
                src="/clutch.png"
                alt="Clutch"
                className="h-10 object-contain"
              />
              <img
                src="/upwork.png"
                alt="Upwork"
                className="h-7 object-contain"
              />
              <img
                src="/fiverrpro.png"
                alt="Fiverr Pro"
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-full py-20">
          <div className="max-w-xl mx-auto flex flex-col gap-10">
            {/* Company Label */}
            <p className="text-gray-400 text-sm font-medium">Kodezi</p>

            {/* Quote */}
            <p className="text-[28px] leading-[1.4] text-gray-600 font-medium">
              “Wavespace very{" "}
              <span className="font-bold text-gray-800">reliable</span> at all
              times and we have enjoyed working & designs are
              <span className="font-bold text-gray-800"> truly impressive</span>
              ”
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src="/images/man1.webp"
                alt="Profile"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <p className="text-xl font-semibold text-gray-900">
                  Israqh Khan
                </p>
                <p className="text-gray-500 text-sm">CEO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-20">
          <div className="max-w-xl mx-auto flex flex-col gap-10">
            {/* Company Label */}
            <p className="text-gray-400 text-sm font-medium">Kodezi</p>

            {/* Quote */}
            <p className="text-[28px] leading-[1.4] text-gray-600 font-medium">
              “Wavespace very{" "}
              <span className="font-bold text-gray-800">reliable</span> at all
              times and we have enjoyed working & designs are
              <span className="font-bold text-gray-800"> truly impressive</span>
              ”
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src="/images/man1.webp"
                alt="Profile"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <p className="text-xl font-semibold text-gray-900">
                  Israqh Khan
                </p>
                <p className="text-gray-500 text-sm">CEO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-20">
          <div className="max-w-xl mx-auto flex flex-col gap-10">
            {/* Company Label */}
            <p className="text-gray-400 text-sm font-medium">Kodezi</p>

            {/* Quote */}
            <p className="text-[28px] leading-[1.4] text-gray-600 font-medium">
              “Wavespace very{" "}
              <span className="font-bold text-gray-800">reliable</span> at all
              times and we have enjoyed working & designs are
              <span className="font-bold text-gray-800"> truly impressive</span>
              ”
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src="/images/man1.webp"
                alt="Profile"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <p className="text-xl font-semibold text-gray-900">
                  Israqh Khan
                </p>
                <p className="text-gray-500 text-sm">CEO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-20">
          <div className="max-w-xl mx-auto flex flex-col gap-10">
            {/* Company Label */}
            <p className="text-gray-400 text-sm font-medium">Kodezi</p>

            {/* Quote */}
            <p className="text-[28px] leading-[1.4] text-gray-600 font-medium">
              “Wavespace very{" "}
              <span className="font-bold text-gray-800">reliable</span> at all
              times and we have enjoyed working & designs are
              <span className="font-bold text-gray-800"> truly impressive</span>
              ”
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src="/images/man1.webp"
                alt="Profile"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <p className="text-xl font-semibold text-gray-900">
                  Israqh Khan
                </p>
                <p className="text-gray-500 text-sm">CEO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-20">
          <div className="max-w-xl mx-auto flex flex-col gap-10">
            {/* Company Label */}
            <p className="text-gray-400 text-sm font-medium">Kodezi</p>

            {/* Quote */}
            <p className="text-[28px] leading-[1.4] text-gray-600 font-medium">
              “Wavespace very{" "}
              <span className="font-bold text-gray-800">reliable</span> at all
              times and we have enjoyed working & designs are
              <span className="font-bold text-gray-800"> truly impressive</span>
              ”
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src="/images/man1.webp"
                alt="Profile"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <p className="text-xl font-semibold text-gray-900">
                  Israqh Khan
                </p>
                <p className="text-gray-500 text-sm">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider1;
