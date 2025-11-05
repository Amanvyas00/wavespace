import Slider1 from "@/component/Slider1";
import Slider from "@/component/Slider1";
import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Form from "@/component/Form";

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
    <div className="bg-white text-black">
      <section className="px-10 py-12">
        <h1 className="text-6xl font-black leading-none px-14">
          Where creativity meets <br />
          <span className="text-gray-500 font-normal">success in our work</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 px-14">
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
      <section className="bg-gray-100 px-14">
        <h1 className="text-black text-5xl font-black leading-tight py-10">
          Find your best design into us.
          <span className="text-[#555555]">
            We <br /> guarantee next success is yours!
          </span>
        </h1>
        <Slider1 />
      </section>
      <section className="bg-[#e9e9e9] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black py-10">
            One subscription. all the <br />
            <span className="font-medium text-gray-500">
              creative services you need
            </span>
          </h2>

          <div className="bg-white shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b p-5 hover:bg-gray-50 cursor-pointer transition "
                >
                  <span className="flex items-center gap-5 text-[20px] font-bold text-black">
                    <span className="text-gray-400 font-semibold w-8">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                      {item}
                    </span>
                  </span>

                  <ArrowUpRight className="w-5 h-5 text-gray-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Form/>
    </div>
  );
};

export default Home;
