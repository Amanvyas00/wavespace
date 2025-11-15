"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import FAQSection from "../component/FAQSection";
import Form from "@/component/Form";
import Slider2 from "@/component/Slider2";
import Image from "next/image";
import Founders from "@/component/Founders";
import Achievements from "@/component/Achievements";
import { Mail, Phone } from "lucide-react";
import Slider from "@/component/Slider";
import ImageSlider from "@/component/ImageSlider";
import PersonSlider from "@/component/PersonSlider";
import Sliderr from "@/component/Sliderr";

// import Form from "../component/Form";
const page = () => {
  const words = [
    "SaaS companies.",
    "AI/ML Solutions.",
    "Future Unicorns.",
    "Startups.",
  ];
  const data = [
    {
      img: "/images/poster5.webp",
      title: "Tournament - Sport Management Web App",
      des: "App Design, SaaS Design, UI/UX Design",
    },
    {
      img: "/images/poster2.webp",
      title: "Off-White - Modern fashion web design",
      des: "App Design, SaaS Design, UI/UX Design",
    },
    {
      img: "/images/poster3.webp",
      title: "name - Sport Management Web App",
      des: "App Design, SaaS Design, UI/UX Design",
    },
    {
      img: "/images/poster4.webp",
      title: "fame - Sport Management Web App",
      des: "App Design, SaaS Design, UI/UX Design",
    },
    {
      img: "/images/poster5.webp",
      title: "Off-White - Modern fashion web design",
      des: "App Design, SaaS Design, UI/UX Design",
    },
    {
      img: "/images/poster6.webp",
      title: "name - Sport Management Web App",
      des: "App Design, SaaS Design, UI/UX Design",
    },
  ];
  const cases = [
    {
      img: "/images/saas1.png",
      title: "Fintech Mobile App",
      desc: "Redefined user flows for global finance platform.",
    },
    {
      img: "/images/saas2.png",
      title: "E-learning Dashboard",
      desc: "Enhanced UX for 1M+ student users.",
    },
    {
      img: "/images/saas3.png",
      title: "Crypto Trading Platform",
      desc: "Improved trust & onboarding experience.",
    },
  ];
  const testimonials = [
    {
      name: "Matt Kabus",
      role: "CEO & Founder @LifeTales",
      text: "Wavespace helped us completely revamp our UX. The impact was instant — engagement up 40%.",
      img: "/images/test1.jpg",
    },
    {
      name: "Ally Parker",
      role: "Founder @StyleUp",
      text: "Their UX process is clear, data-driven, and results-oriented. Highly recommend!",
      img: "/images/test2.jpg",
    },
    {
      name: "Tom Werner",
      role: "CTO @NextBase",
      text: "Brilliant communication and delivery. They work as an extension of your team.",
      img: "/images/test3.jpg",
    },
  ];
  const stats = [
    { value: "92%", label: "Client satisfaction" },
    { value: "$10B+", label: "Valuation of clients" },
    { value: "2019", label: "Founded" },
    { value: "25M+", label: "Users impacted" },
    { value: "500+", label: "Global projects" },
  ];
  const team = [
    { name: "Alex Stone", role: "Lead Designer", img: "/images/team1.jpg" },
    {
      name: "Jessica Lee",
      role: "Frontend Developer",
      img: "/images/team2.jpg",
    },
    { name: "Ryan Park", role: "UX Researcher", img: "/images/team3.jpg" },
  ];
  const faqData = [
    {
      q: "How long does a UX project take?",
      a: "Most of our UX design projects take 3–6 weeks depending on complexity and scope.",
    },
    {
      q: "Do you work with startups?",
      a: "Yes! We love helping early-stage founders validate and scale their product ideas.",
    },
    {
      q: "Do you provide development services?",
      a: "Yes, we build production-ready frontends and MVPs using React, Next.js, and Webflow.",
    },
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
  const [index, setindex] = useState(0);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setindex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="mt-20">
        <section className=" w-full flex items-center justify-between px-10 lg:px-20 py-20">
          {/* Left */}
          <div className="max-w-4xl space-y-2 ">
            <div className="inline-flex items-center border border-gray-100 gap-2 px-3 py-1 rounded-full text-[12px] font-medium">
              <span className="h-3 w-3 bg-[#adff3e] rounded-full"></span>
              Available for New Projects
            </div>

            <h1 className="text-[56px] lg:text-7xl font-[700] leading-tight tracking-tight">
              Global UX design
              <br /> agency digital partner
              <br /> for{" "}
              <span
                key={index}
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-slideUp"
              >
                {words[index]}
              </span>
            </h1>

            <div className="flex items-center gap-6 pt-6">
              <button className="bg-[#242424] text-white px-9 py-6 rounded-full font-semibold hover:bg-blue-500 transition cursor-pointer duration-300">
                Book a call
              </button>
              <button className="bg-white text-gray-700 text-lg border-1 border-gray-300 px-6 py-5 rounded-full font-semibold hover:opacity-90 transition duration-300 cursor-pointer flex items-center gap-3">
                <img
                  src="/images/icon/icon1.svg"
                  alt="icon"
                  className="w-7 h-7"
                />
                <span>View work</span>
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="max-w-sm hidden lg:block">
            <p className="text-[18px] leading-relaxed text-black-600 font-[500]">
              Wavespace is a global UX agency that helps brands scale with fast,
              high performance digital experiences.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 mt-6">
              {/* Loved by Founders */}
              <div className="flex items-center gap-2">
                <img
                  src="/images/man1.webp"
                  className="h-8 w-8 rounded-full"
                  alt="Founder 1"
                />
                <img
                  src="/images/man2.webp"
                  className="h-8 w-8 rounded-full"
                  alt="Founder 2"
                />
                <img
                  src="/images/man3.webp"
                  className="h-8 w-8 rounded-full"
                  alt="Founder 3"
                />
                <span className="font-semibold text-gray-800">
                  Loved by 500+ Founders
                </span>
              </div>

              {/* Clutch Reviews */}
              <div className="flex items-center gap-3">
                <Image
                  src="/images/icon/clutch.jpg"
                  alt="Clutch"
                  width={42}
                  height={42}
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    13 REVIEWS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center bg-gray-50 items-center">
          <div className="bg-gray-200 h-[750px] w-[1350px] flex justify-center items-center">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/images/Wavespace.mp4"
            />
          </div>
        </section>

        <section>
          <Slider2 />
        </section>

        <section className="w-full py-24 px-10 bg-gradient-to-b from-white to-gray-200">
          <div className="px-8">
            <h2 className="text-4xl md:text-6xl font-semibold mb-12 leading-tight tracking-[0.01em]">
              Bold UX design, billion-dollar proof. We
              <br />
              measure impact,{" "}
              <span className="text-gray-500">not just ship pixels.</span>
            </h2>
            {/* first div */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {states.slice(0, 3).map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-10 text-left">
                  <span className="text-gray-400 text-lg ">{item.id}</span>
                  <h3 className="text-5xl font-semibold mt-6 mb-3 pt-30">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg w-50">{item.sub}</p>
                </div>
              ))}
            </div>
            {/* second div */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
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

        <section className="px-10 py-12">
          <h1 className="text-6xl font-semibold leading-tight max-w-8xl px-10">
            Turn your ideas into
            <span className=" text-6xl text-gray-500 font-semibold">
              {" "}
              impactful <br /> solutions like them!
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-3 mt-8 px-8">
            {data.map((read, index) => (
              <div key={index} className="flex flex-col group cursor-pointer">
                <div className="overflow-hidden ">
                  <Image
                    src={read.img}
                    alt="img"
                    width={1200}
                    height={300}
                    className="duration-300 group-hover:scale-105"
                  />
                </div>

                <h2 className="text-xl font-semibold mt-4">{read.title}</h2>
                <p className="text-sm text-gray-900 font-medium pb-3">
                  {read.des}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Founders />
        <section className="bg-black w-full py-20 px-10">
          <div className=" px-6">
            <h1 className="text-white text-5xl font-semibold leading-tight">
              We deliver on time, in days and weeks <br />
              <span className="text-[#555555]">— not months.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row px-8 gap-16 mt-16">
            {/* LEFT BOX */}
            <div className="bg-[#333333] p-10 lg:w-[65%] w-full space-y-6 border border-gray-800">
              <p className="text-white text-2xl font-normal">
                <span className="text-gray-500 mr-2">01</span>Onboard in 1 day
              </p>
              <hr className="border border-gray-500" />

              <p className="text-white text-2xl font-normal">
                <span className="text-gray-500 mr-2">02</span>Understand Scope &
                Strategy
              </p>
              <hr className="border border-gray-500" />
              <p className="text-white text-2xl font-normal">
                <span className="text-gray-500 mr-2">03</span>First designs in
                4-5 days
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:w-[35%] w-full flex flex-col justify-between">
              <p className="text-white text-xl leading-relaxed">
                “Wavespace is a fantastic design team, with a healthy blend of
                UI and UX skills. Highly recommended”
              </p>

              <div className="flex items-center gap-4 mt-6">
                <Image
                  src="/images/man1.webp"
                  width={60}
                  height={60}
                  alt="person"
                />

                <div>
                  <h2 className="text-white font-semibold">James Mcglade</h2>
                  <p className="text-gray-300 text-sm">
                    Founder, Growth Alliance
                  </p>
                </div>
              </div>

              <button className="bg-yellow-300 text-black px-2 py-3 rounded-4xl font-medium mt-6 hover:bg-yellow-300 transition w-40">
                Book a call
              </button>
            </div>
          </div>
          <div className="px-6 pt-24">
            <h1 className="text-white text-5xl font-semibold leading-tight">
              From startup to enterprise, grow your business <br />
              <span className="text-[#555555]">
                with fast and creative designs!
              </span>
            </h1>
          </div>
        </section>
        <Sliderr />

        

        <PersonSlider />
        <section id="contact" className="py-20 bg-white">
          <FAQSection />
        </section>

        <section className="w-full py-14 bg-white">
          <div className="max-w-8xl mx-auto px-18">
            <div className="flex justify-between items-start">
              <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-[#1B1B1B]">
                Got a project in mind?
                <br /> Let's talk.
              </h1>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:opacity-90 transition">
                Book a call →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-20">
              {/* Bangladesh */}
              <div>
                <h2 className="text-xl font-semibold text-1B1B1B">
                  Bangladesh
                </h2>
                <div className="mt-4 space-y-1 text-black">
                  <span className="flex items-center gap-2">
                    <Mail size={18} /> hello@wavespace.agency
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={18} /> +880 1785 0871 48
                  </span>
                </div>
                <p className="mt-4 text-sm text-black/80 leading-relaxed">
                  Oriental Gofur Tower,
                  <br />
                  88/KA Mohammadpur,
                  <br />
                  Dhaka, Bangladesh.
                </p>
              </div>

              {/* Indonesia */}
              <div>
                <h2 className="text-xl font-semibold">Indonesia</h2>
                <div className="mt-4 space-y-1 text-black">
                  <span className="flex items-center gap-2">
                    <Mail size={18} /> hello@wavespace.agency
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={18} /> +62 8211 6925 169
                  </span>
                </div>
                <p className="mt-4 text-sm text-black/80 leading-relaxed">
                  Podomoro Park,
                  <br />
                  Padmagriya 15/6 Bandung,
                  <br />
                  Indonesia.
                </p>
              </div>

              {/* USA */}
              <div className="border-r border-gray-300 pr-10">
                <h2 className="text-xl font-semibold">USA</h2>
                <div className="mt-4 space-y-1 text-black">
                  <span className="flex items-center gap-2">
                    <Mail size={18} /> hello@wavespace.agency
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={18} /> +1 470 504 3155
                  </span>
                </div>
                <p className="mt-4 text-sm text-black/80 leading-relaxed">
                  75 E 3rd St Sheridan, WY 82801,
                  <br />
                  USA.
                </p>
              </div>

              {/* Business + Career */}
              <div>
                <h2 className="text-xl font-semibold">Business Inquiry</h2>
                <p className="mt-3 text-sm">Email</p>
                <p className="flex items-center gap-2 text-black mt-1">
                  <Mail size={18} /> hello@wavespace.agency
                </p>

                <h2 className="text-xl font-semibold mt-10">Career</h2>
                <p className="mt-3 text-sm">Join Us</p>
                <p className="flex items-center gap-2 text-black mt-1">
                  <Mail size={18} /> career@wavespace.agency
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-20 bg-[#F0F0F0]">
          <Form />
        </section>
      </div>
    </>
  );
};

export default page;
