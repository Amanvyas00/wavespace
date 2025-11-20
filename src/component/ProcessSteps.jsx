"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & strategy",
    desc: "We align on business goals, audience needs, and product vision, setting a clear foundation for what we're building and why.",
    points: [
      "Business goals & product vision",
      "Mission & market positioning",
      "Target users & core audience",
      "Unique value proposition",
    ],
  },
  {
    number: "02",
    title: "Structure the Experience",
    desc: "We map out the user journey, define key screens, and shape the overall flow, ensuring every step feels natural and intuitive.",
    points: [
      "User flows & journey mapping",
      "Low-fidelity wireframes",
      "Information architecture",
      "Core feature layout & screen logic",
    ],
  },
  {
    number: "03",
    title: "Design the Interface",
    desc: "We bring the product to life with a visual language that's clean, consistent, and aligned with your brand and users.",
    points: [
      "UI design & layout",
      "Visual style & color system",
      "Typography & iconography",
      "Interaction states & micro-details",
    ],
  },
  {
    number: "04",
    title: "Build for Scale",
    desc: "We create scalable, handoff-ready files for smooth development, growth, and consistency across your dev team.",
    points: [
      "Design systems",
      "Dev-ready Figma files",
      "Handoff documentation",
      "Scalable structure & components",
    ],
  },
];

export default function ProcessSteps() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={ref} className="bg-[#f0f0f0] pt-24 overflow-hidden pl-10">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-20 pl-10">
          <h2 className="text-4xl md:text-6xl font-bold leading-snug ">
            The process behind our{" "} <br />
            <span className="text-[#29242469]">design of your product</span>
          </h2>
        </div>

        {/* Sticky Horizontal Scroll */}
        <div className="relative h-[100vh]">
          <div className="sticky top-10 flex items-center overflow-hidden ">
            <motion.div
              style={{ x }}
              className="flex gap-6 md:gap-10 will-change-transform"
            >
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white shadow-sm flex flex-col justify-start items-start min-w-[350px] md:min-w-[400px] lg:min-w-[480px] rounded-xl p-8"
                >
                  <div className="text-gray-400 font-semibold text-xl mb-8">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 font-medium mb-6 leading-relaxed">
                    {step.desc}
                  </p>
                  <ul className="space-y-3">
                    {step.points.map((p, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-800 rounded-full" />
                        <span className="font-medium text-[1rem]">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
