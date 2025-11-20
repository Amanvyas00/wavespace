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

export default function ImageSlider() {
  const topRef = useRef(null);
  const midRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const top = topRef.current;
    const mid = midRef.current;
    const bottom = bottomRef.current;

    let animationFrame;

   const scroll = () => {
     if (top && mid && bottom) {
       const topSpeed = 1.2;
       const midSpeed = -1.5; // <-- moves right
       const bottomSpeed = 1.2;

       top.scrollLeft += topSpeed;
       mid.scrollLeft += midSpeed;
       bottom.scrollLeft += bottomSpeed;

       const maxHalf = top.scrollWidth / 2;

       if (top.scrollLeft >= maxHalf) top.scrollLeft = 0;
       if (bottom.scrollLeft >= maxHalf) bottom.scrollLeft = 0;

       if (mid.scrollLeft <= 0) {
         mid.scrollLeft = maxHalf; // jump to mid → smooth infinite loop
       }
     }

     animation = requestAnimationFrame(scroll);
   };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const renderRow = (ref, images) => (
    <div
      ref={ref}
      className="flex gap-6 overflow-x-scroll scrollbar-hide px-6"
      style={{ scrollBehavior: "auto", scrollbarWidth: "none" }}
    >
      {[...images, ...images].map((src, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-[260px] sm:w-[320px] md:w-[420px] h-[200px] sm:h-[240px] md:h-[280px] rounded-2xl overflow-hidden"
        >
          <Image
            src={src}
            alt=""
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative bg-white py-10 md:py-16 overflow-hidden">
      <div className="flex flex-col gap-8 md:gap-4 w-full max-w-[1550px]  ">
        {renderRow(topRef, image1)}
        {renderRow(midRef, image2)}
        {renderRow(bottomRef, image3)}
      </div>

      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
