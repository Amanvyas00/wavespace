"use client";
import Image from "next/image";
import React from "react";
import Slider2 from "@/component/Slider2";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";


const wordsArray = [
  "SaaS companies.",
  "AI/ML Solutions.",
  "Future Unicorns.",
  "Startups.",
];
  const items = [
    "Startup-Speed Process",
    "SaaS, AI & Web3 Experts",
    "Work with Experts, Not Layers",
    "Design That Performs",
    "Flexible Engagement Models",
  ];

const states = [
  {
    id: "/01",
    title: "92%",
    sub: "client satisfaction in post-project reviews",
  },
  { id: "/02", title: "$10B+", sub: "valuation influenced by our design" },
  { id: "/03", title: "2019", sub: "Founded, 6 years of experience" },
  { id: "/04", title: "25M+", sub: "monthly visits on client platforms" },
  {
    id: "/05",
    title: "500+ global project",
    sub: "250+ testimonial with trusted by YC-backed, VC-funded, a16z, Sequoia",
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % wordsArray.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="w-full flex items-center justify-between px-10 lg:px-28 py-30">
        <div >
          
          <h1 className="text-5xl lg:text-7xl font-[1000] leading-tight tracking-tight">
            Designed for billions, and we are the team behind {" "}
            <span className="inline-block bg-gradient-to-r from-orange-500 to-blue-700 bg-clip-text text-transparent animate-slideUp">
             future unicorns.
            </span>
          </h1>
          <p className="text-2xl font-bold ">
            We’re not just a design agency. We’re the product-thinking team
            behind 100M+ users, $2B+ funding, & 250+ VC-backed success stories.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <div className="bg-gray-200 h-[800px] w-[1200px]"></div>
      </section>

      <section>
        <h1 className="text-center p-8 text-xl font-bold">
          Trusted by 500+ global companies
        </h1>
        <Slider2 />
      </section>
      <section className="w-full py-24 bg-gray-100">
        <div className="px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight">
            Bold UX design, billion-dollar proof. We
            <br />
            measure impact, not just ship pixels.
          </h2>
          {/* first div */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {states.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-10 text-left"
              >
                <span className="text-gray-400 text-lg ">{item.id}</span>
                <h3 className="text-5xl font-semibold mt-6 mb-3 pt-30">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg w-50">{item.sub}</p>
              </div>
            ))}
          </div>
          {/* second div */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
            {states.slice(3).map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm  p-10 text-left"
              >
                <span className="text-gray-400 text-lg pb-70">{item.id}</span>
                <h3 className="text-5xl font-semibold mt-6 mb-3 pt-30">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg w-100">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f5f5f5] py-24 px-6 md:px-16 lg:px-28">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black mx-auto">
            From one laptop to 22+ countries, we helps bold visions become{" "}
            <span className="text-gray-500">intuitive brands.</span>
          </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
          {/* LEFT IMAGE */}
          <div>
            
            <Image
              src="/images/fam.webp" // <-- tum image ka naam / path change kar dena
              width={450}
              height={550}
              alt="team photo"
              className="rounded-xl w-auto h-[500px] object-cover pl-20 pt-10"
            />
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Wavespace didn't start in a co-working space or some glossy
              VC-funded setup. It started in a small bedroom, just one laptop, a
              noisy fan, and a founder who couldn't stop thinking about why so
              many good ideas fail.
            </p>

            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              So we helped early teams fix broken onboarding, redesign confusing
              UX, and turn messy ideas into real products. One founder at a
              time.
            </p>

            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              But now? Wavespace works with 500+ startups, helps teams launch
              faster MVPs, improve conversion, and build systems that scale. Our
              design now powers 100M+ users across 22 countries, from
              early-stage AI tools to Series B SaaS giants.
            </p>

            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              But honestly? We still build like it's day one, fast, honest,
              human. Behind every screen is someone betting it all on an idea.
            </p>

            <button className="mt-7 bg-[#4A3AFF] hover:bg-[#3a2ed1] transition text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2">
              Shape your vision ↗
            </button>
          </div>
        </div>
      </section>
       <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/images/boys.webp" // <-- change image
            width={500}
            height={550}
            alt="team working"
            className="rounded-xl object-cover shadow"
          />
        </div>

        {/* RIGHT SIDE TEXT */}
        <div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Why Wavespace? We care <br /> like co-founders.
          </h2>

          <p className="text-gray-500 mt-4 text-[18px] leading-relaxed max-w-md">
            Not another agency. We are your team that gives a damn. Because we
            treat your product like it’s ours.
          </p>

          <div className="mt-10 space-y-6">
            {items.map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-gray-200 pb-4 group cursor-pointer"
              >
                <div className="flex items-center gap-3 text-gray-800 font-medium">
                  <span className="text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </div>

                <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* BOTTOM SUB SECTION */}
      <div className="max-w-7xl mx-auto mt-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <h3 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
          From vision to velocity, we are <br />
          <span className="text-gray-500">all in one place.</span>
        </h3>

        <button className="bg-[#4A3AFF] hover:bg-[#362ec5] text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition shadow-sm">
          View services <ArrowUpRight className="h-5 w-5" />
        </button>
      </div>
    </section>
    </div>
  );
}
