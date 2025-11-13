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
  return (
    <>
      <section className="bg-black text-white py-24 px-4">
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

      <section>
        <LogoSlider />
      </section>
      <section>
        <OurMembership />
      </section>
      {/* <section><ImageSlider/></section> */}
      <main className=" min-h-screen text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">
          Our Work Showcase
        </h1>
        <ImageSlider />
      </main>
      {/* creative services section */}
      <section>
        <CreativeServicesSection />
      </section>
      <section>
        <Achievements />
      </section>
      <section>
        <FAQSection />
      </section>
      <section>
        <Form />
      </section>
    </>
  );
}
