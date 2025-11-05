"use client";

import { motion } from "framer-motion";

const achievements = [
  { id: "01", title: "140+ International design awards" },
  { id: "02", title: "100M+ Global users reached" },
  { id: "03", title: "300%+ Average conversion uplift" },
  { id: "04", title: "$2B+ raised UX-led launches" },
];

export default function Achievements() {
  return (
    <section className="relative w-full py-28 ">
      
      <div  className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/purple.jpg')" }}></div>

    <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-tight capitalize">
          our award &
          <br />
          achievements
        </h1>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 mt-16">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-sm p-10 text-left border border-gray-200"
            >
              <span className="text-gray-400 text-md">{item.id}</span>
              <h3 className="text-xl font-semibold mt-6 text-black leading-snug pt-20">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
