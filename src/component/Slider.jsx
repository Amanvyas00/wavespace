
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Image from "next/image";
import { PiLinkSimpleBold } from "react-icons/pi";

// ✅ Flattened slides extracted from features
const features = [
  {
    name: "Connected Banking",
    slides: [
      {
        key: "s1",
        title: "CONNECTED BANKING",
        subtitle: "All Your Current Accounts at One Place",
        img: "/images/svg/one.webp",
        description:
          "Connect & manage existing bank accounts, consolidate banking, payments, accounting and expense management in a single interface.",
        buttons: ["Know More"],
      },
      {
        key: "s2",
        title: "Payouts",
        subtitle: "Payments Made Simple",
        img: "/images/svg/two.webp",
        description:
          "Pay vendors, customers, and employees instantly through all the payment methods - bank accounts, UPI, cards & wallets",
        buttons: ["Single Payouts", "Bulk payouts" ],
      },
      {
        key: "s3",
        title: "Collections",
        subtitle: "Collect Payments On Time",
        img: "/images/svg/three.webp",
        description:
          "Provide multiple payment options with our streamlined collection solutions, simplify your invoicing process, and set automated reminders",
        buttons: ["UPI QR", "POS Device", "Payment Gateway"],
      },
    ],
  },
  {
    name: "Beyond Banking",
    slides: [
      {
        key: "s4",
        title: "CARDS",
        subtitle: "Take Complete Control of Business Spending",
        img: "/images/svg/four.webp",
        description:
          "Powerful corporate cards that give you real-time control, track card expenses, set limits for spend control, approve expenses and visibility into business spending",
        buttons: ["Know More"],
      },
      {
        key: "s5",
        title: "Smart POS Machines",
        subtitle: "Affordable Solutions for Your Growing Business",
        img: "/images/svg/five.webp",
        description:
          "Seamless payment processing with quick transactions, secure technology, and easy setup.",
        buttons: ["Know More", "Get Started"],
      },
      // {
      //   key: "s5",
      //   title: "Working Capital",
      //   subtitle: "Affordable Loans for Your Growing Business",
      //   img: "/images/svg/five.webp",
      //   description:
      //     "Flexible financing solutions with competitive rates, easy repayment, and quick approvals.",
      //   buttons: ["Expenses Cards", "Gift Cards"],
      // },
    ],
  },
  {
    name: "Identity Verification",
    slides: [
      {
        key: "s6",
        title: "Identity Verification",
        subtitle: "Secure and Compliant KYC & KYB Solutions",
        img: "/images/svg/six.webp",
        description:
          "Streamline customer verification while adhering to regulatory standards.",
        buttons: ["Financial Verification", "Business Verification"],
      },
    ],
  },
  // {
  //   name: "Insurance",
  //   slides: [
  //     {
  //       key: "s7",
  //       title: "Insurance",
  //       subtitle: "Secure Future, Assured Protection",
  //       img: "/images/svg/8.webp",
  //       description:
  //         "Protect your business with comprehensive insurance solutions.",
  //       buttons: ["Life Insurance", "Health Insurance", "Motor Insurance"],
  //     },
  //   ],
  // },
  {
  name: "QR & Soundbox",
  slides: [
    {
      key: "s7",
      title: "QR & Soundbox",
      subtitle: "Accept Payments with Ease",
      img: "/images/svg/seven.webp", // update path if you have a new icon
      description:
        "Seamlessly accept customer payments through QR codes and soundbox alerts. Simplify collections, enhance convenience, and never miss a transaction.",
      buttons: ["QR Payments", "Soundbox"],
    },
  ],
},

  {
    name: "Other Solution",
    slides: [
      {
        key: "s8",
        title: "Other Solution",
        subtitle: "Agent Banking Solutions",
        img: "/images/svg/eight.webp",
        description:
          "Deliver banking services via India’s largest agent banking network.",
        buttons: ["Know More"],
      },
    ],
  },
];

// ✅ Flatten all slides
const allSlides = features.flatMap((f) => f.slides);

export default function StackingFeatureScrollFinal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestValue) => {
      const newActiveTab = Math.min(
        Math.floor(latestValue * allSlides.length),
        allSlides.length - 1
      );
      setActiveTab(newActiveTab);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div>
      <Tabs slides={allSlides} activeTab={activeTab} containerRef={containerRef} />
      <div
        ref={containerRef}
        className="relative bg-white"
        style={{ height: `${allSlides.length * 120}vh` }}
      >
        {allSlides.map((slide, index) => (
          <StickyCard key={slide.key} slide={slide} index={index} activeTab={activeTab} />
        ))}
      </div>
    </div>
  );
}

// ✅ Tabs Navigation
const Tabs = ({ slides, activeTab, containerRef }) => {
  const handleTabClick = (index) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const scrollableHeight =
      containerRef.current.scrollHeight - window.innerHeight;
    const targetScroll =
      containerTop + (index / slides.length) * scrollableHeight;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto">
        <ul className="flex justify-between w-full py-7  text-xs sm:text-sm font-medium px-5 sm:px-10 overflow-x-auto">
          {slides.map((slide, index) => (
            <li
              key={slide.key}
              onClick={() => handleTabClick(index)}
              className={`cursor-pointer px-3 py-2 whitespace-nowrap transition-all duration-300 ${
                activeTab === index
                  ? "text-black border-b-2 border-black font-semibold"
                  : "text-gray-500 border-b-2 border-transparent hover:text-black"
              }`}
            >
              {slide.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ✅ Sticky Card per Slide
const StickyCard = ({ slide }) => {
  return (
    <>
      <div className="h-20 bg-white/70 w-full" />
      <div className="sticky top-0 flex h-[100vh] items-center justify-center px-4 sm:px-8">
        <div className="flex h-full w-full max-w-6xl mx-auto flex-col lg:flex-row items-center mt-12 gap-6 sm:gap-10 p-4 sm:p-8 bg-white mb-12">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={slide.img}
              width={450}
              height={350}
              alt={slide.subtitle}
              className="object-contain"
            />
          </div>
          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-lg sm:text-xl text-gray-600 font-medium mb-1 sm:mb-2">
              {slide.title}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              {slide.subtitle}
            </h3>
            <p className="text-gray-800 text-base sm:text-lg mb-4 sm:mb-6">
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {slide.buttons.map((btn, i) => (
                <button
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <PiLinkSimpleBold /> {btn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
