import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const PersonSlider = () => {
  return (
    <>
      <div className="py-22">
        {/* Text + Button Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 pb-14">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight md:max-w-5xl">
            From Bangladesh to USA, we turn <br /> your{" "}
            <span className="text-gray-500 font-semibold">
              vision into creative impact
            </span>
          </h1>

          <button className="bg-[#3F2FEE] text-white text-[15px] font-bold rounded-full px-7 py-4 hover:bg-indigo-700 transition-all flex flex-row justify-center items-center gap-2">
            <span>Contact Us</span>
            <MdOutlineArrowOutward className="text-[20px]" />
          </button>
        </div>

       
        {/* Center Wrapper */}
        <div className="w-full flex justify-center overflow-hidden">
          {/* Marquee Row */}
          <div className="flex whitespace-nowrap animate-marquee py-12 pt-10 w-full max-w-[1440px] relative">
            {Array.from({ length: 13 }).map((_, i) => (
              <div
                key={i}
                className="team_marquee-card flex flex-col justify-start items-start mr-4 flex-none"
              >
                <div className="relative w-[18.1875rem] overflow-hidden">
                  <Image
                    src={`/images/about_slider/img${i + 1}.webp`}
                    alt={`Team image ${i + 1}`}
                    width={291}
                    height={0}
                    className="team_image object-cover w-full h-auto"
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
                <div className="relative w-[18.1875rem] overflow-hidden">
                  <Image
                    src={`/images/about_slider/img${i + 1}.webp`}
                    alt={`Team image duplicate ${i + 1}`}
                    width={291}
                    height={0}
                    className="team_image object-cover w-full h-auto"
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
        </div>
      </div>
    </>
  );
};

export default PersonSlider;
