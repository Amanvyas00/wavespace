"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Sliider() {
  const containerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [current, setCurrent] = useState(0);

  const slides = [
    { id: "slide-1", bg: "#ffffff", title: "Fullscreen slides with GSAP" },
    { id: "slide-2", bg: "#45959b", title: "Navigate easily through slides" },
    { id: "slide-3", bg: "#778899", title: "Use mouse wheel to switch slides" },
    { id: "slide-4", bg: "#291F37", title: "Use keyboard arrows too" },
  ];

  const goToSlide = (index) => {
    if (isAnimating || index < 0 || index >= slides.length) return;

    setIsAnimating(true);
    setCurrent(index);

    gsap.to(containerRef.current, {
      duration: 1,
      scrollTo: { y: window.innerHeight * index },
      onComplete: () => setIsAnimating(false),
    });
  };

  const nextSlide = () => goToSlide(current + 1);
  const prevSlide = () => goToSlide(current - 1);

  // Mouse Wheel
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) nextSlide();
      else prevSlide();
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  });

  // Keyboard
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowDown") nextSlide();
      if (e.key === "ArrowUp") prevSlide();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <>
      {/* NAVIGATION BUTTONS */}
      <nav className="fixed top-6 left-0 w-full z-50 flex justify-center gap-4">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`px-4 py-2 rounded bg-white text-green-600 shadow
              ${current === i ? "bg-green-500 text-white shadow-lg -translate-y-1" : ""}
            `}
          >
            {s.id}
          </button>
        ))}
      </nav>

      {/* SLIDES WRAPPER */}
      <div
        ref={containerRef}
        className="w-full h-screen overflow-hidden absolute top-0 left-0"
      >
        {slides.map((s, index) => (
          <section
            key={index}
            className="w-full h-screen flex items-center justify-center"
            style={{ background: s.bg }}
          >
            <div className="text-center w-[60%]">
              <h1 className="text-4xl font-bold mb-4">{s.title}</h1>

              <p className="text-xl">
                {index !== 0 && (
                  <span
                    className="font-bold underline cursor-pointer mr-4"
                    onClick={prevSlide}
                  >
                    Previous Slide
                  </span>
                )}

                {index !== slides.length - 1 && (
                  <span
                    className="font-bold underline cursor-pointer"
                    onClick={nextSlide}
                  >
                    Next Slide
                  </span>
                )}
              </p>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
