"use client";
import { ArrowUpRight } from "lucide-react";
import LogoSlider from "../../component/LogoSlider";
import OurMembership from "../../component/OurMembership";
import ImageSlider from "../../component/ImageSlider";
import CreativeServicesSection from "@/component/CreativeServicesSection";
import Achievements from "../../component/Achievements";
import FAQSection from "@/component/FAQSection";
import Form from "@/component/Form";
export default function page() {
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
  return (
    <>
      <section className="bg-black text-white py-24 px-4 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm mb-2 text-gray-300">Clutch ⭐⭐⭐⭐⭐ 5.0</p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Your on-demand design team on call,
            <br /> for one flat monthly price
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
            All-in-one product design plan. No hourly rates, no hidden fees,
            just fast, expert work and unlimited requests for one fixed monthly
            price.
          </p>

          {/* top switch buttons */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <button className="px-4 py-2 bg-[#ebfe5b] text-black rounded-full text-sm font-semibold">
              Monthly
            </button>
            <button className="px-4 py-2 bg-[#1a1a1a] rounded-full border border-gray-700 text-sm">
              Quarterly -15%
            </button>
            <button className="px-4 py-2 bg-[#1a1a1a] rounded-full border border-gray-700 text-sm">
              Yearly -25%
            </button>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Standard */}
            <div className="bg-[#1b1b1b] border border-gray-700 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-3">Standard</h3>
                <p className="text-3xl font-bold">
                  $2,200<span className="text-lg font-normal">/monthly</span>
                </p>
                <p className="text-sm text-gray-400 mb-8">
                  Per month / cancel any time
                </p>

                <button className="bg-white text-black w-full py-3 rounded-full font-medium flex items-center justify-center gap-1 mb-4">
                  Get start today <ArrowUpRight size={18} />
                </button>

                <p className="text-center text-sm mb-6 text-gray-400">
                  Book A Call
                </p>

                <h4 className="font-semibold mb-3">What's Included</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✔ 40 hours of per month</li>
                  <li>✔ Dedicated design team</li>
                  <li>✔ All design services included</li>
                  <li>✔ 2 meetings per month</li>
                  <li>✔ Daily communication Slack • Loom</li>
                  <li>✔ Weekly updates and monthly reports</li>
                </ul>
              </div>
              <p className="text-[#ebfe5b] mt-6 text-sm">
                2 Spots left this month
              </p>
            </div>

            {/* Pro */}
            <div className="bg-[#1b1b1b] border border-[#ebfe5b] rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="bg-[#ebfe5b] text-black px-3 py-1 rounded-full w-fit text-xs font-semibold mb-3">
                  Popular
                </div>
                <h3 className="text-xl font-semibold mb-3">Pro</h3>
                <p className="text-3xl font-bold">
                  $4,400<span className="text-lg font-normal">/monthly</span>
                </p>
                <p className="text-sm text-gray-400 mb-8">
                  Per month / cancel any time
                </p>

                <button className="bg-[#ebfe5b] text-black w-full py-3 rounded-full font-medium flex items-center justify-center gap-1 mb-4">
                  Get start today <ArrowUpRight size={18} />
                </button>

                <p className="text-center text-sm mb-6 text-gray-400">
                  Book A Call
                </p>

                <h4 className="font-semibold mb-3">What's Included</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✔ 80 hours of per month</li>
                  <li>✔ Dedicated design team</li>
                  <li>✔ All design services included</li>
                  <li>✔ 4 meetings per month</li>
                  <li>✔ Daily communication Slack • Loom</li>
                  <li>✔ Weekly updates and monthly reports</li>
                </ul>
              </div>
              <p className="text-[#ebfe5b] mt-6 text-sm">
                4 Spots left this month
              </p>
            </div>

            {/* Enterprise */}
            <div className="bg-[#1b1b1b] border border-gray-700 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="bg-gray-700 text-white px-3 py-1 rounded-full w-fit text-xs font-semibold mb-3">
                  Unlimited Talent
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise</h3>
                <p className="text-3xl font-bold">Custom</p>
                <p className="text-sm text-gray-400 mb-8">
                  Price per project or monthly subscription
                </p>

                <button className="bg-white text-black w-full py-3 rounded-full font-medium flex items-center justify-center gap-1 mb-4">
                  Contact us <ArrowUpRight size={18} />
                </button>

                <h4 className="font-semibold mb-3">What's Included</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✔ Service based on your needs</li>
                  <li>✔ Fullstack delivery team</li>
                  <li>✔ All design services included</li>
                  <li>✔ Meetings</li>
                  <li>✔ Daily Communication Slack • Loom</li>
                  <li>✔ Fixed pricing</li>
                </ul>
              </div>
              <p className="text-[#ebfe5b] mt-6 text-sm">
                4 Enterprise slots left this year
              </p>
            </div>
          </div>

          {/* bottom features */}
          <div className="bg-[#1b1b1b] border border-gray-700 rounded-2xl p-6 mt-16 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-300">
            <span>✔ Hours rollover</span>
            <span>✔ Unlimited requests</span>
            <span>✔ Same-day response time</span>
            <span>✔ WaveHub</span>
            <span>✔ 1 Active request per team member</span>
          </div>
        </div>
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
                <p className="text-gray
                 text-lg w-50">{item.sub}</p>
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

      <section>
        <LogoSlider />
      </section>
      <section>
        <OurMembership />
      </section>
     
      <ImageSlider/>
      {/* creative services section */}
      <section>
        <CreativeServicesSection />
      </section>
      <section>
        <Achievements />
      </section>
      <section id="contact" className="py-20 bg-white">
        <FAQSection />
      </section>
      <section>
        <Form />
      </section>
    </>
  );
}
