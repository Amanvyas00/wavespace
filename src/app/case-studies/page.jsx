import Slider1 from "@/component/Slider1";
import Slider from "@/component/Slider1";
import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Form from "@/component/Form";
import CreativeServicesSection from "@/component/CreativeServicesSection";
import Review from "@/component/Review";
const Home = () => {
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
    {
      img: "/images/poster6.webp",
      title: "name - Sport Management Web App",
      des: "App Design, SaaS Design, UI/UX Design",
    },
  ];
  const items = [
    "Logo & branding",
    "Web design",
    "Product design",
    "UX design",
    "Design system",
    "Graphic design",
    "Animation",
    "Pitch decks",
    "Email template design",
    "UI UX design",
    "SaaS design",
    "Mobile app",
    "Interaction design",
    "Lottie & web animation",
    "MVP design",
    "Website design",
    "User research",
    "Conversation rate optimization (CRO)",
  ];
  const services = [
    "Logo & branding",
    "Web design",
    "Product design",
    "UX design",
    "Design system",
    "Graphic design",
    "Animation",
    "Pitch decks",
    "Email template design",
    "UI UX design",
    "SaaS design",
    "Mobile app",
    "Interaction design",
    "Lottie & web animation",
    "MVP design",
    "Website design",
    "User research",
    "Conversation rate optimization (CRO)",
  ];
  return (
    <div className="bg-white text-black mt-25">
      <section className="px-10 py-12">
        <h1 className="text-6xl font-bold leading-[1.3em] px-14">
          Where creativity meets <br />
          <span className="text-[#29242469] ">success in our work</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-[5em] px-14">
          {data.map((read, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden ">
                <Image
                  src={read.img}
                  alt="img"
                  width={700}
                  height={400}
                  className="duration-300 group-hover:scale-105"
                />
              </div>

              <h2 className="text-xl font-semibold mt-4">{read.title}</h2>
              <p className="text-sm text-gray-500">{read.des}</p>
            </div>
          ))}
        </div>
      </section>
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
              <span className="text-gray-500 mr-2">03</span>First designs in 4-5
              days
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:w-[35%] w-full flex flex-col justify-between">
            <p className="text-white text-xl leading-relaxed">
              “Wavespace is a fantastic design team, with a healthy blend of UI
              and UX skills. Highly recommended”
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
        <div className="px-6 pt-14">
          <h1 className="text-white text-5xl font-semibold leading-tight">
            From startup to enterprise, grow your business <br />
            <span className="text-[#555555]">
              with fast and creative designs!
            </span>
          </h1>
        </div>
      </section>
      <section>
        <Review />
      </section>
      <CreativeServicesSection />
      <Form />
    </div>
  );
};

export default Home;
