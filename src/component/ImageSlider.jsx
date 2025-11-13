"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const image1 = [
  "/images/img1.webp",
  "/images/img2.webp",
  "/images/img3.webp",
  "/images/img4.webp",
  "/images/img5.webp",
  "/images/img6.webp",
  "/images/img7.webp",
  "/images/img8.webp",
];

const image2 = [
  "/images/img3.webp",
  "/images/img5.webp",
  "/images/img6.webp",

  "/images/img8.webp",
  "/images/img1.webp",
  "/images/img2.webp",
  "/images/img7.webp",

  "/images/img4.webp",
];

const image3 = [
  "/images/img3.webp",
  "/images/img4.webp",
  "/images/img7.webp",
  "/images/img8.webp",
  "/images/img1.webp",
  "/images/img2.webp",
  "/images/img5.webp",
  "/images/img6.webp",
];

export default function ThreeLayerSwapSlider() {
  const topRef = useRef(null);
  const midRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const top = topRef.current;
    const mid = midRef.current;
    const bottom = bottomRef.current;
    let animation;

    // Start middle from halfway
    if (mid) mid.scrollLeft = mid.scrollWidth / 2;

    const scroll = () => {
      if (top && mid && bottom) {
        // Control speed here 👇
        const topSpeed = 50.0;
        const midSpeed = -20.3; // mid one moves right
        const bottomSpeed = 15.0;

        // Move top & bottom left, middle right
        top.scrollLeft += topSpeed;
        mid.scrollLeft += midSpeed;
        bottom.scrollLeft += bottomSpeed;

        // Reset when scrolled halfway for infinite loop
        if (top.scrollLeft >= top.scrollWidth / 2) top.scrollLeft = 0;
        if (mid.scrollLeft >= mid.scrollWidth / 2) mid.scrollLeft = 0;
        if (bottom.scrollLeft >= bottom.scrollWidth / 2) bottom.scrollLeft = 0;
      }
      animation = requestAnimationFrame(scroll);
    };

    animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  const renderRow = (ref, images) => (
    <div
      ref={ref}
      className="flex gap-5 overflow-x-scroll scrollbar-hide"
      style={{
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
      }}
    >
      {[...images, ...images].map((src, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-[260px] sm:w-[320px] md:w-[420px] h-[200px] sm:h-[240px] md:h-[280px] rounded-2xl overflow-hidden"
        >
          <Image
            src={src}
            alt={`slide-${i}`}
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-2xl transition-transform duration-500 hover:scale-[1.05]"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative bg-white py-10 md:py-16 overflow-hidden">
      <div className="flex flex-col gap-8 md:gap-12 w-full max-w-[1500px] mx-auto px-4">
        {renderRow(topRef, image1)} {/* Top: left */}
        {renderRow(midRef, image2)} {/* Middle: right */}
        {renderRow(bottomRef, image3)} {/* Bottom: left */}
      </div>

      {/* Gradient fade edges */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
