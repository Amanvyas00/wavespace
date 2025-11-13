"use client";
import Image from "next/image";
import React from "react";
import Slider2 from "@/component/Slider2";
import ProcessSteps from "@/component/ProcessSteps";
import { useState, useEffect } from "react";
import { ArrowUpRight, Flame, Check } from "lucide-react";

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
  const images = Array.from(
    { length: 13 },
    (_, i) => `/images/about_slider/img${i + 1}.webp`
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % wordsArray.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="w-full flex items-center justify-between px-10 lg:px-28 py-30">
        <div>
          <h1 className="text-5xl lg:text-7xl font-[1000] leading-tight tracking-tight">
            Designed for billions, and we are the team behind{" "}
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
        <div className="bg-gray-200 w-full h-[80vh]"></div>
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
      {/* We don’t just design. We believe, then deliver. */}
      <section>
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* LEFT IMAGE */}
            <div className="relative w-full">
              <div className=" overflow-hidden shadow-md">
                <Image
                  src="/images/believe-deliver.webp" // update this path with your image
                  alt="Designer working on laptop"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover "
                  priority
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col justify-center text-gray-900">
              <h2 className="text-[2.8rem] leading-tight font-semibold mb-6">
                We don't just design.{" "}
                <span className="text-gray-400 font-semibold mb-6">
                  We believe, then deliver.
                </span>
              </h2>

              <p className="text-lg text-gray-600  mb-8">
                We've seen great ideas fail just because the UX didn't work.
                That's why we design to solve, not just to impress. When you
                care about users like a founder does, design becomes direction,
                not decoration. And that mindset has changed everything for our
                clients:
              </p>

              <ul className="space-y-3 mb-10 text-xl font-bold">
                <li>35% faster product launches through scalable systems</li>
                <li>480+ dev hours saved per project</li>
                <li>Up to 67% shorter onboarding time</li>
                <li>92% client satisfaction across 250+ global brands</li>
                <li>40% drop in user drop-off through better UX</li>
              </ul>

              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="#"
                  className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-base font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
                >
                  Build your product
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Founder’s Led Journey */}
      <section
        className="bg-cover bg-center relative w-full"
        style={{
          backgroundImage: "url('/images/backgroundImage.webp')",
        }}
      >
        {/* Overlay to make text pop */}
        <div className="absolute inset-0 bg-black/0"></div>

        <div className="container mx-auto flex flex-col justify-center items-center py-[16rem] px-10 md:py-[16rem] md:px-10 sm:py-[6.5625rem] sm:px-5">
          <div className="text-white font-bold text-[10rem] leading-none sm:text-[5rem] md:text-[8rem]">
            Founder's
          </div>
          <div className="text-white font-bold text-[10rem] leading-none ml-auto sm:text-[5rem] md:text-[8rem]">
            Led Journey
          </div>
        </div>
      </section>
      {/* back in 2014 */}
      <section className="bg-black text-white overflow-hidden py-[9.75rem] max-md:py-[4rem]">
        <div className="container mx-auto flex flex-col justify-center items-center px-6 md:px-10">
          {/* --- Top Wrap --- */}
          <div className="flex justify-between items-start gap-[8.875rem] border-b border-[#242424] pb-[7.5rem] max-md:flex-col max-md:gap-[2.5rem] max-md:pb-[3.25rem]">
            {/* Desktop Image */}
            <div className="flex-none max-md:hidden">
              <Image
                src="/images/shahid.webp"
                alt="Author image"
                width={700}
                height={632}
                className="object-cover w-[11.375rem] h-[11.875rem]"
                loading="lazy"
              />
            </div>

            {/* Quote Text */}
            <div className="flex flex-col justify-start items-start w-full">
              <p className="text-[1.75rem] leading-[1.54] tracking-[0.28px] max-md:text-[1.125rem] text-white/90">
                "Like most kids from a middle-class home, I aimed for
                engineering. Design? Never crossed my mind. But when my uncle
                nudged me toward graphic arts, I followed, not out of passion,
                but because it was something. Somewhere along that journey, I
                stumbled into UI/UX. No mentor, no roadmap. Just late nights,
                curiosity, and a deep urge to make things make sense. I kept
                wondering, how can design solve real problems?"
              </p>
            </div>
          </div>

          {/* --- Mobile Image --- */}
          <div className="hidden max-md:block mt-10 flex flex-col items-center">
            <Image
              src="/images/shahid.webp"
              alt="Author image"
              width={700}
              height={632}
              className="object-cover w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
        <div className="container mx-auto flex justify-between items-start gap-[7.75rem] max-md:flex-col max-md:gap-[2.5rem] max-md:mb-[4rem] mb-[9.75rem] px-6 md:px-10">
          {/* --- Left: Text Grid --- */}
          <div className="grid grid-cols-2 gap-x-[4.5rem] gap-y-[2.5rem] w-full max-md:grid-cols-1 max-md:gap-y-[2rem]">
            <p className="text-[1rem] leading-[1.54] max-md:text-[1.125rem] text-white/90">
              That question lit a fire in me. One project led to another &
              before long, I was designing for bigger companies, across borders,
              and I finally wanted to work abroad by going. By then, the dream
              had changed. It wasn't just about earning or designing for clients
              anymore.
            </p>

            <p className="text-[1rem] leading-[1.54] max-md:text-[1.125rem] text-white/90">
              In 2019, I paused and dug deeper, not into tools, but into why
              products fail. And from that, Wavespace was born. I never planned
              to build an agency. I just wanted to solve problems. That mission
              hasn't changed. We don't show up to impress.
            </p>

            <p className="text-[1rem] leading-[1.54] max-md:text-[1.125rem] text-white/90">
              I wanted to understand, <br /> Why do great founders fail, and why
              do strong products disappear? That one question led me across
              projects, borders, and eventually, toward something bigger.
            </p>

            <p className="text-[1rem] leading-[1.54] max-md:text-[1.125rem] text-white/90">
              We show up to help founders who were once like me, full of vision,
              short on clarity. We design for outcomes. Because future Unicorns
              aren't found, they're designed. Now I'm here, ready to team up
              with venture capital, building what's next, with clarity, speed,
              and heart.
            </p>

            {/* Center Big Quote (Desktop) */}
            <div className="col-span-2 text-center mt-10 max-md:hidden">
              <Image
                src="/images/quote-icon.webp"
                alt="quote icon"
                width={28}
                height={28}
                className="mx-auto mb-6"
              />
              <p className="text-[2rem] leading-[1.31] text-white/90">
                “Wavespace started with design, now we're building future
                unicorns. With VC partners and early-stage founders, we combine
                clarity, code, and capital to launch what's next.”
              </p>
            </div>

            {/* Mobile Quote */}
            <div className="hidden max-md:block text-center mt-10">
              <p className="text-[1.375rem] leading-[1.4] tracking-[0.22px] text-white/90">
                “Wavespace started with design, now we're building future
                unicorns. With VC partners and early-stage founders, we combine
                clarity, code, and capital to launch what's next.”
              </p>
            </div>
          </div>

          {/* --- Right: Author Image --- */}
          <div className="flex flex-col items-start max-w-[25rem] w-full flex-none max-md:hidden">
            <div className="text-[1.125rem] font-medium">Shahid Miah</div>
            <div className="text-[#b9b9b9] text-[0.875rem] mt-1 mb-12">
              2025, we growing fast with unicorn energy
            </div>
            <Image
              src="/images/author_image.webp"
              alt="author image"
              width={400}
              height={500}
              className="w-full object-cover"
            />
          </div>

          {/* --- Mobile Image --- */}
          <div className="hidden max-md:flex flex-col items-center text-center">
            <Image
              src="/images/author_image.webp"
              alt="author image"
              width={400}
              height={500}
              className="w-full object-cover"
            />
            <div className="text-[1.125rem] font-medium mt-6">Shahid Miah</div>
            <div className="text-[#b9b9b9] text-[0.875rem] mt-1 mb-8">
              2025, we growing fast with unicorn energy
            </div>
          </div>
        </div>
        <div className="flex animate-marquee gap-6">
          {/* Duplicate list for seamless scroll */}
          {images.concat(images).map((src, index) => (
            <div
              key={index}
              className="flex-none w-[15.5rem] sm:w-[10.25rem] rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`about slider image ${index + 1}`}
                width={248}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
      {/* team section */}
      <section className="bg-white text-black py-[7rem] max-md:py-[4rem]">
        <div className="container mx-auto flex flex-col px-6 md:px-10 max-w-[1440px]">
          {/* --- Top Text Section --- */}
          <div className="flex justify-between items-end flex-wrap gap-[6rem] max-md:gap-[2rem] max-md:flex-col">
            <div className="text-[2rem] font-semibold max-md:text-[1.25rem]">
              Meet our creatives
            </div>
            <div className="max-w-[60%] max-md:max-w-full">
              <h3 className="text-[2.5rem] leading-[1.3em] font-bold max-md:text-[1.875rem]">
                We are your product geek, UX mind, UI lovers, & Webflow
                builders. <br className="hidden md:block" />
                Your creative team,{" "}
                <span className="text-[#29242469]">just a Slack away.</span>
              </h3>
            </div>
          </div>

          {/* --- Grid Cards Section --- */}
          <div className="grid grid-cols-3 gap-[6px] mt-[6rem] max-md:grid-cols-1 max-md:mt-[2.5rem]">
            {/* Card 01 */}
            <div className="flex flex-col justify-center items-start border border-[#eeedec] rounded-[1.25rem] p-[2rem] gap-[9.25rem] max-md:p-[1.25rem]">
              <div className="text-[#7e7e81] text-[1rem]">/01</div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[3.5rem] font-bold leading-[1.35] max-md:text-[2rem]">
                  Dhaka
                </div>
                <p className="text-[#3a3a3a] text-[1.125rem] leading-[1.55] max-md:text-[0.875rem]">
                  Global team working from SF, Berlin,
                  <br />
                  KL, Jakarta, Sydney
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="flex flex-col justify-center items-start border border-[#eeedec] rounded-[1.25rem] p-[2rem] gap-[9.25rem] max-md:p-[1.25rem]">
              <div className="text-[#7e7e81] text-[1rem]">/02</div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[3.5rem] font-bold leading-[1.35] max-md:text-[2rem]">
                  15+
                </div>
                <p className="text-[#3a3a3a] text-[1.125rem] leading-[1.55] max-md:text-[0.875rem]">
                  Industries served
                  <br />
                  (AI, SaaS, Fintech, Health, B2B, more)
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="flex flex-col justify-center items-start border border-[#eeedec] rounded-[1.25rem] p-[2rem] gap-[9.25rem] max-md:p-[1.25rem]">
              <div className="text-[#7e7e81] text-[1rem]">/03</div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[3.5rem] font-bold leading-[1.35] max-md:text-[2rem]">
                  10M+ users
                </div>
                <p className="text-[#3a3a3a] text-[1.125rem] leading-[1.55] max-md:text-[0.875rem]">
                  Marketplace users served
                  <br />
                  across 10+ time zones
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6 mt-20 mb-20">
          {/* Team Members Inline */}
          <div className="flex flex-col items-start">
            <div className="w-full overflow-hidden rounded-lg">
              <Image
                src="/images/team1.webp"
                alt="Shahid Miah"
                width={306}
                height={386}
                className="object-cover w-full h-[24.125rem]"
              />
            </div>
            <div className="mt-6 mb-1 text-[1.375rem] font-semibold">
              Shahid Miah
            </div>
            <div className="text-[#7e7e81] text-[1.125rem]">Founder & CEO</div>
          </div>

          <div className="flex flex-col items-start">
            <div className="w-full overflow-hidden rounded-lg">
              <Image
                src="/images/team2.webp"
                alt="Noor Mohammad"
                width={306}
                height={386}
                className="object-cover w-full h-[24.125rem]"
              />
            </div>
            <div className="mt-6 mb-1 text-[1.375rem] font-semibold">
              Noor Mohammad
            </div>
            <div className="text-[#7e7e81] text-[1.125rem]">Head of Design</div>
          </div>

          <div className="flex flex-col items-start">
            <div className="w-full overflow-hidden rounded-lg">
              <Image
                src="/images/team3.webp"
                alt="Barakatullah"
                width={306}
                height={386}
                className="object-cover w-full h-[24.125rem]"
              />
            </div>
            <div className="mt-6 mb-1 text-[1.375rem] font-semibold">
              Barakatullah
            </div>
            <div className="text-[#7e7e81] text-[1.125rem]">
              Senior Product Designer
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="w-full overflow-hidden rounded-lg">
              <Image
                src="/images/team4.webp"
                alt="Rabbi Mia"
                width={306}
                height={386}
                className="object-cover w-full h-[24.125rem]"
              />
            </div>
            <div className="mt-6 mb-1 text-[1.375rem] font-semibold">
              Rabbi Mia
            </div>
            <div className="text-[#7e7e81] text-[1.125rem]">UI/UX Designer</div>
          </div>

          {/* ... add remaining members similarly ... */}
        </div>

        {/* BELIEFS SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* LEFT SIDE TITLE */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[3.5rem] md:text-[2.7rem] sm:text-[2rem] font-bold leading-[1.35]">
              The beliefs{" "}
              <span className="text-[#29242469]">
                behind <br /> the builds
              </span>
            </h2>
          </div>

          {/* RIGHT SIDE BELIEFS INLINE */}
          <div className="flex flex-col gap-14 w-full lg:max-w-[36.375rem]">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-[#7e7e81] text-[1.375rem] mt-[2px]">01</div>
              <div className="flex flex-col gap-3">
                <div className="text-[1.5rem] font-bold">Empathy</div>
                <p className="text-[1.375rem] md:text-[1rem] leading-[1.54]">
                  Before we create a design, we listen. Because the good always
                  comes from understanding. We put ourselves in your users'
                  shoes so your product enters their lives smoothly.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-[#7e7e81] text-[1.375rem] mt-[2px]">02</div>
              <div className="flex flex-col gap-3">
                <div className="text-[1.5rem] font-bold">Clarity</div>
                <p className="text-[1.375rem] md:text-[1rem] leading-[1.54]">
                  We don't design to sound smart. We design so your users feel
                  smart. Every word, flow, and screen is crafted to remove
                  friction, not add flash.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-[#7e7e81] text-[1.375rem] mt-[2px]">03</div>
              <div className="flex flex-col gap-3">
                <div className="text-[1.5rem] font-bold">Momentum</div>
                <p className="text-[1.375rem] md:text-[1rem] leading-[1.54]">
                  Start small. Learn fast. Move with focus. We don't believe in
                  perfection. We believe in progress. That is why we ship, test,
                  and stay North Star aligned.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-[#7e7e81] text-[1.375rem] mt-[2px]">04</div>
              <div className="flex flex-col gap-3">
                <div className="text-[1.5rem] font-bold">Outcomes</div>
                <p className="text-[1.375rem] md:text-[1rem] leading-[1.54]">
                  A good-looking app that doesn't convert is just decoration. We
                  obsess over real results — conversions, activations, and
                  retention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* from bangladesh to usa */}
      <section className="relative w-full overflow-hidden bg-white py-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/backgroundImage.webp"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Scrolling image marquee */}
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 13 }).map((_, i) => (
            <div
              key={i}
              className="team_marquee-card flex flex-col justify-start items-start mr-4 flex-none"
            >
              <div className="relative w-[18.1875rem] h-[22.3125rem] overflow-hidden rounded-xl">
                <Image
                  src={`/images/about_slider/img${i + 1}.webp`}
                  alt={`Team image ${i + 1}`}
                  width={291}
                  height={357}
                  className="team_image object-cover w-full h-full"
                />
              </div>
              <p className="text-[#7e7e81] text-[0.75rem] font-medium leading-[1.45] mt-2">
                {
                  [
                    "UI working time product look 2024",
                    "Product designer working time 2024",
                    "Knowledge share in workshop 2024",
                    "Team celebrating moment 2024",
                    "Sharing ideas for new design 2024",
                    "Team meeting time 2024",
                    "Mood board setup 2024",
                    "Sketch to wireframe 2024",
                    "Team brainstorming 2024",
                    "Design sprint kickoff 2024",
                    "Presentation day 2024",
                    "Design feedback session 2024",
                    "Collaboration time 2024",
                  ][i]
                }
              </p>
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {Array.from({ length: 13 }).map((_, i) => (
            <div
              key={`dup-${i}`}
              className="team_marquee-card flex flex-col justify-start items-start mr-4 flex-none"
            >
              <div className="relative w-[18.1875rem] h-[22.3125rem] overflow-hidden rounded-xl">
                <Image
                  src={`/images/about_slider/img${i + 1}.webp`}
                  alt={`Team image duplicate ${i + 1}`}
                  width={291}
                  height={357}
                  className="team_image object-cover w-full h-full"
                />
              </div>
              <p className="text-[#7e7e81] text-[0.75rem] font-medium leading-[1.45] mt-2">
                {
                  [
                    "UI working time product look 2024",
                    "Product designer working time 2024",
                    "Knowledge share in workshop 2024",
                    "Team celebrating moment 2024",
                    "Sharing ideas for new design 2024",
                    "Team meeting time 2024",
                    "Mood board setup 2024",
                    "Sketch to wireframe 2024",
                    "Team brainstorming 2024",
                    "Design sprint kickoff 2024",
                    "Presentation day 2024",
                    "Design feedback session 2024",
                    "Collaboration time 2024",
                  ][i]
                }
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* process behind our */}
      <section>
        <ProcessSteps />
      </section>
      {/* try our ui/ux */}
      <section className="bg-[#040849] text-white py-20 px-6 md:px-20 rounded-[2rem] max-w-6xl mx-auto mt-10 relative overflow-hidden">
        {/* Tag */}
        <div className="flex items-center bg-[#0a0f6b] border border-[#1d237a] px-4 py-1 rounded-full w-fit mb-8">
          <Flame className="text-yellow-400 w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Only 4 seats per month</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
          Try our <span className="font-bold">UI/UX design service</span> that
          is built
          <br /> for you — just <span className="text-blue-300">$500</span> for
          one week.
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-300 mb-4">…and get the answers on:</p>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            "See how we plan, design and build",
            "Get a full view of our UX process, made for you",
            "Track how we work, communicate and stay on schedule",
            "Know if we're the right fit before you commit",
          ].map((text, idx) => (
            <div
              key={idx}
              className="flex items-center bg-[#0b1073] border border-[#1d237a] rounded-full px-4 py-3 text-sm md:text-base"
            >
              <Check className="text-green-400 w-4 h-4 mr-2" />
              {text}
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-[#e5f15f] text-black font-medium rounded-full px-6 py-3 flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
          <span>Book an intro call</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>

        {/* Background overlay mock (optional design layer) */}
        <div className="absolute right-0 bottom-0 w-[500px] h-[300px] bg-[url('/images/mockup-bg.svg')] bg-contain bg-no-repeat opacity-10 pointer-events-none"></div>
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
