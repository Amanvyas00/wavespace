"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const leftServices = [
  { title: "Logo & branding", img: "/images/logo-branding.webp" },
  { title: "Web design", img: "/images/web-design.webp" },
  { title: "Product design", img: "/images/product-design.webp" },
  { title: "UX design", img: "/images/ux-design.webp" },
  { title: "Design system", img: "/images/design-system.webp" },
  { title: "Graphic design", img: "/images/graphic-design.webp" },
  { title: "Animation", img: "/images/animation.webp" },
  { title: "Pitch decks", img: "/images/pitch-decks.webp" },
  { title: "Email template design", img: "/images/email-template.webp" },
];

const rightServices = [
  { title: "UI UX design", img: "/images/uiux-design.webp" },
  { title: "SaaS design", img: "/images/saas-design.webp" },
  { title: "Mobile app", img: "/images/mobile-app.webp" },
  { title: "Interaction design", img: "/images/interaction-design.webp" },
  { title: "Lottie & web animation", img: "/images/lottie-web-animation.webp" },
  { title: "MVP design", img: "/images/mvp-design.webp" },
  { title: "Website design", img: "/images/website-design.webp" },
  { title: "User research", img: "/images/user-research.webp" },
  { title: "Conversion rate optimization (CRO)", img: "/images/cro.webp" },
];

export default function CreativeServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative bg-gray-100 py-[10.5rem] px-8 md:px-12 overflow-visible">
      <div className="max-w-[1440px] mx-auto flex flex-col relative overflow-visible">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
          <h2 className="text-[3.5rem] leading-[1.3em] font-semibold text-black max-w-[915px]">
            One subscription. all the{" "}
            <span className="text-gray-500">creative services you need</span>
          </h2>
          <a
            href="#"
            className="bg-[#3f2fee] hover:bg-[#2d23b0] text-white font-medium text-[1rem] px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300"
          >
            Start designing
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 rounded-[1rem] bg-white relative z-10 overflow-visible">
          {/* LEFT SIDE */}
          <div className="border-r border-gray-200 relative overflow-visible">
            {leftServices.map((service, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(`left-${i}`)}
                onMouseLeave={() => setHovered(null)}
                className="relative group flex justify-between items-center px-10 py-8 border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 overflow-visible"
              >
                <div className="flex items-center gap-4 z-10">
                  <span className="text-gray-400 text-sm w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-900 text-lg md:text-xl font-medium group-hover:underline">
                    {service.title}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-800 z-10" />

                {/* Hover Image LEFT */}
                <AnimatePresence>
                  {hovered === `left-${i}` && (
                    <motion.div
                      initial={{ opacity: 0, rotate: 0 }}
                      animate={{ opacity: 1, rotate: 5 }}
                      exit={{ opacity: 0, rotate: 0 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="absolute hidden md:block inset-[-12.5rem_-95%_auto_auto] z-[60] w-[46rem] max-w-[92vw] rounded-xl overflow-hidden pointer-events-auto"
                      onMouseEnter={() => setHovered(`left-${i}`)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div className="rounded-xl overflow-hidden  p-3">
                        <Image
                          src={service.img}
                          alt={service.title}
                          width={900}
                          height={600}
                          className="object-cover w-full h-auto rounded-xl"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="relative overflow-visible">
            {rightServices.map((service, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(`right-${i}`)}
                onMouseLeave={() => setHovered(null)}
                className="relative group flex justify-between items-center px-10 py-8 border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 overflow-visible"
              >
                <div className="flex items-center gap-4 z-10">
                  <span className="text-gray-400 text-sm w-8">
                    {String(i + leftServices.length + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-900 text-lg md:text-xl font-medium group-hover:underline">
                    {service.title}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-800 z-10" />

                {/* Hover Image RIGHT */}
                <AnimatePresence>
                  {hovered === `right-${i}` && (
                    <motion.div
                      initial={{ opacity: 0, rotate: 0 }}
                      animate={{ opacity: 1, rotate: -5 }}
                      exit={{ opacity: 0, rotate: 0 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="absolute hidden md:block inset-[-12.5rem_auto_auto_-95%] z-[60] w-[46rem] max-w-[92vw] rounded-xl overflow-hidden hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
                      onMouseEnter={() => setHovered(`right-${i}`)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div className="rounded-xl overflow-hidden p-3">
                        <Image
                          src={service.img}
                          alt={service.title}
                          width={900}
                          height={600}
                          className="object-cover w-full h-auto rounded-xl"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
