"use client";

import Image from "next/image";

export default function OurMembership() {
  const benefits = [
    {
      title: "Flat monthly fee",
      desc: "Our pricing remains same each month — no guesswork, no surprises.",
      video: "/videos/flat_monthly_fee.mp4",
      type: "_01",
    },
    {
      title: "Fast turnaround",
      desc: "Our team creates stunning designs tailored to your needs, ready in just a few days.",
      video: "/videos/fast_turnaround.mp4",
      type: "_02",
    },
    {
      title: "Unlimited revisions",
      desc: "Change it, swap it, until you love it — as per design need changes.",
      video: "/videos/unlimited_revisions.mp4",
      type: "_01",
    },
    {
      title: "Full design service",
      desc: "We offer full-service design, covering every aspect to meet all your needs.",
      video: "/videos/muted.mp4",
      type: "_02",
    },
    {
      title: "No contracts, no headaches",
      desc: "Top-notch designs without any tricky rules or paperwork. It’s simple and straightforward.",
      video: "/videos/No_contract.mp4",
      type: "_02",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      {/* ==============================
          OUTERMOST CONTAINER
      =============================== */}
      <div
        className="
          flex flex-col w-full max-w-[1440px] mx-auto
          gap-[4rem] px-[2.5rem]
          md:gap-[2rem] md:px-[1.25rem]
          sm:px-[0.9rem]
        "
      >
        {/* ==============================
            HEADER
        =============================== */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Our membership <br />
            <span className="text-gray-500 font-medium">benefits</span>
          </h2>

          <button className="mt-6 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition">
            Choose a plan →
          </button>
        </div>

        {/* ==============================
            GRID OF BENEFITS
        =============================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* Map through benefits */}
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`
                bg-white shadow-sm hover:shadow-md transition relative flex flex-col justify-between
                rounded-[1rem]
                ${
                  benefit.type === "_01"
                    ? "p-[2rem_1.5rem_0.9375rem_2rem] md:flex md:items-center md:justify-between md:gap-[1.25rem] md:p-[2.5rem_1.875rem] sm:flex-col sm:rounded-[0.5rem]"
                    : "p-[2.5rem_2rem] md:flex md:justify-between md:gap-[1.25rem] md:p-[2.5rem] sm:flex-col sm:px-[1.5rem] sm:rounded-[0.5rem]"
                }
                ${
                  index === 1 || index === 3 || index === 4
                    ? "md:col-span-2"
                    : ""
                }
              `}
            >
              {/* TEXT CONTENT */}
              <div className="relative z-10">
                <h3
                  className="
                    benefits-card-title text-[1.375rem] font-semibold leading-[135%]
                    md:text-[1.25rem] sm:text-[1.5rem] sm:text-center text-gray-900 mb-4
                  "
                >
                  {benefit.title}
                </h3>

                <p
                  className="
                    benefits-card-details text-[#101010] mt-3 mb-1 text-[0.9375rem] leading-[1.375rem]
                    md:max-w-[16.875rem] sm:text-[1rem] sm:text-center sm:max-w-[22rem]
                    sm:mt-0 sm:mb-0
                  "
                >
                  {benefit.desc}
                </p>
              </div>

              {/* VIDEO */}
              <div className="relative w-full h-[300px] mt-8 overflow-hidden rounded-2xl">
                <video
                  src={benefit.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ==============================
            TESTIMONIAL SECTION
        =============================== */}
        <div
          className="
            bg-white rounded-[1rem] shadow-sm
            flex flex-col justify-center items-center text-center
            py-[4.125rem] px-[4.125rem]
            max-md:py-[2.5rem] max-md:px-[1.875rem]
          "
        >
          {/* QUOTE ICON */}
          <Image
            src="/images/quote.webp"
            alt="Quote icon"
            width={36}
            height={36}
            className="w-9 mb-6"
          />

          {/* CEO INFO */}
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/images/ceo.webp"
              alt="Ishraq Khan CEO at Kodezi"
              width={50}
              height={50}
              className="w-10 md:w-[3.125rem] rounded-full"
            />

            <div className="text-left">
              <div className="text-[#101010] tracking-[0.0625rem] mb-[0.125rem] text-[1.125rem] leading-[130%]">
                Ishraq Khan
              </div>
              <div className="tracking-[0.0625rem] text-[0.875rem] leading-[1.125rem] text-gray-500">
                Founder & CEO @Kodezi
              </div>
            </div>
          </div>

          {/* MAIN TESTIMONIAL TEXT */}
          <h2
            className="
              text-center font-bold leading-[135%] tracking-[1px]
              text-[#101010]
              max-w-[46.6875rem] mt-[2rem] mb-[3rem] text-[2.5rem]
              md:max-w-[37.5rem] md:mt-[1.875rem] md:mb-[2.5rem] md:text-[2.2rem]
              sm:mt-[1.25rem] sm:mb-[1.25rem] sm:text-[1.625rem]
            "
          >
            “Transforming visions into top-notch digital experiences solutions”
          </h2>
        </div>
      </div>
    </section>
  );
}
