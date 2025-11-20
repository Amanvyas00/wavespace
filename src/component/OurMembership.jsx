"use client";

import Image from "next/image";

export default function OurMembership() {
  return (
    <section
      className="
        bg-gray-100  
        pt-[9.75rem] pb-[9.75rem] 
        max-[991px]:pt-[4rem] 
        max-[991px]:pb-[1.25rem]
      "
    >
      <div
        className="
          flex flex-col w-full max-w-[1440px] mx-auto
          gap-[4rem] px-[2.5rem]
          md:gap-[1rem] md:px-[1.25rem]
          sm:px-[0.9rem]
        "
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-900">
            Our membership <br />
            <span className="text-gray-400 font-semibold">benefits</span>
          </h2>

          <button className="mt-6 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition">
            Choose a plan →
          </button>
        </div>

        {/* ================== TOP GROUP (1,2,3) ================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-4">
          {/* CARD 1 */}
          <div
            className="
            bg-white shadow-sm hover:shadow-md transition
            flex flex-col justify-between rounded-3xl
            p-[2rem_1.5rem_0.9375rem_2rem]
            md:p-[2.5rem_1.875rem]
            sm:flex-col 
          "
          >
            <div className="relative z-10 ">
              <h3 className="text-[1.375rem] font-semibold leading-[135%] text-gray-900 mb-4">
                Flat monthly fee
              </h3>
              <p className="text-[#101010] text-[0.9375rem] leading-[1.375rem] mt-3">
                Our pricing remains same each month — no guesswork, no
                surprises.
              </p>
            </div>

            <div className="relative w-full h-[200px] mt-8 overflow-hidden rounded-2xl">
              <video
                src="/videos/flat_monthly_fee.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CARD 2 — DOUBLE WIDTH */}
          <div
            className="
            bg-white shadow-sm hover:shadow-md transition
            flex flex-col lg:flex-row lg:items-center lg:justify-between
            rounded-3xl p-[2.5rem_2rem] lg:gap-[2rem]
            md:col-span-2
          "
          >
            {" "}
            {/* VIDEO */}
            <div className="relative w-full lg:w-1/2 h-[250px] mt-6 lg:mt-0 overflow-hidden rounded-2xl">
              <video
                src="/videos/fast_turnaround.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* TEXT */}
            <div className="relative z-10 lg:w-1/2">
              <h3 className="text-[1.375rem] font-semibold leading-[135%] text-gray-900 mb-4">
                Fast turnaround
              </h3>
              <p className="text-[#101010] text-[0.9375rem] leading-[1.375rem] mt-3">
                Our team creates stunning designs tailored to your needs, ready
                in just a few days.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="
            bg-white shadow-sm hover:shadow-md transition
            flex flex-col justify-between rounded-3xl
            p-[2rem_1.5rem_0.9375rem_2rem]
            md:p-[2.5rem_1.875rem]
            sm:flex-col 
          "
          >
            <div className="relative z-10">
              <h3 className="text-[1.375rem] font-semibold leading-[135%] text-gray-900 mb-4">
                Unlimited revisions
              </h3>
              <p className="text-[#101010] text-[0.9375rem] leading-[1.375rem] mt-3">
                Change it, swap it, until you love it — as per design need
                changes.
              </p>
            </div>

            <div className="relative w-full h-[200px] mt-8 overflow-hidden rounded-2xl">
              <video
                src="/videos/unlimited_revisions.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================== BOTTOM GROUP (4,5) ================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-4">
          {/* CARD 4 — DOUBLE WIDTH */}
          <div
            className="
            bg-white shadow-sm hover:shadow-md transition
            flex flex-col lg:flex-row lg:items-center lg:justify-between
            rounded-3xl p-[2.5rem_2rem] lg:gap-[2rem]
            md:col-span-2
          "
          >
            {" "}
            {/* VIDEO */}
            <div className="relative w-full lg:w-1/2 h-[180px] md:h-[200px] mt-6 lg:mt-0 overflow-hidden rounded-2xl">
              <video
                src="/videos/muted.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* TEXT */}
            <div className="relative z-10 lg:w-1/2">
              <h3 className="text-[1.375rem] font-semibold leading-[135%] text-gray-900 mb-4">
                Full design service
              </h3>
              <p className="text-[#101010] text-[0.9375rem] leading-[1.375rem] mt-3">
                We offer full-service design, covering every aspect to meet all
                your needs.
              </p>
            </div>
          </div>

          {/* CARD 5 — DOUBLE WIDTH */}
          <div
            className="
            bg-white shadow-sm hover:shadow-md transition
            flex flex-col lg:flex-row lg:items-center lg:justify-between
            rounded-3xl p-[2.5rem_2rem] lg:gap-[2rem]
            md:col-span-2
          "
          >
            {" "}
            {/* VIDEO */}
            <div className="relative w-full lg:w-1/2 h-[180px] md:h-[200px] m-auto lg:mt-0 overflow-hidden rounded-2xl">
              <video
                src="/videos/No_contract.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* TEXT */}
            <div className="relative z-10 lg:w-1/2">
              <h3 className="text-[1.375rem] font-semibold leading-[135%] text-gray-900 mb-4">
                No contracts, no headaches
              </h3>
              <p className="text-[#101010] text-[0.9375rem] leading-[1.375rem] mt-3">
                Top-notch designs without any tricky rules or paperwork. It’s
                simple and straightforward.
              </p>
            </div>
          </div>
        </div>

        {/* ================== CEO SECTION ================== */}
        <div
          className="
            bg-white rounded-[1rem] shadow-sm
            flex flex-col justify-center items-center text-center
            py-[4.125rem] px-[4.125rem]
            max-md:py-[2.5rem] max-md:px-[1.875rem]
          "
        >
          <Image
            src="/images/quote.webp"
            alt="Quote icon"
            width={36}
            height={36}
            className="w-9 mb-6"
          />

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
