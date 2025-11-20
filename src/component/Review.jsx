"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  const swiperRef = useRef(null);
  return (
    <section className="bg-[#f0f0f0] overflow-hidden pt-10 md:pl-20 pl-6">
      <div
        className=" flex flex-col pt-[9.5rem] pb-[8.5rem] gap-[4rem]
       md:pt-16 md:pb-28 md:gap-8
      
    "
      >
        {/* Section Heading Wrapper */}
        <div
          className="
        flex justify-between items-end
        gap-[80px]
        md:flex-col md:items-start md:gap-6
        sm:gap-4
      "
        >
          <h2
            className="
    max-w-[1312px]
    font-bold
    text-[2.89rem] leading-[1.3] tracking-[1px]
    md:text-[2.7rem]
    sm:text-[1.85rem]
   
  "
          >
            Find your best design into us.{" "}
            <span className="text-[#7e7e81]">We</span>
            <br />
            <span className="text-[#7e7e81]">
              guarantee next success is yours!
            </span>
          </h2>
        </div>

        {/* ---------- SWIPER CONTAINER ---------- */}
        <div className="relative ">
          <Swiper
            modules={[Pagination, Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1.2}
            spaceBetween={0}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
              bulletClass: "swiper-pagination-bullet custom-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active custom-bullet-active",
            }}
            breakpoints={{
              768: { slidesPerView: 2.3 },
              1024: { slidesPerView: 3.2 },
              1440: { slidesPerView: 4 },
            }}
            className=""
          >
            {/* ---------- FIRST RATING CARD ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="bg-white border-r border-[#f0f0f0] md:h-[27.5em] h-[21rem] flex flex-col p-8 items-center justify-center">
                <div className="text-[90px] font-semibold text-gray-400 pt-10">
                  4.9
                </div>

                <div className=" text-red-500 text-3xl">★★★★★</div>

                <p className=" text-sm text-gray-600">200+ reviews</p>

                <div className="flex gap-6 mt-auto pt-6">
                  <img
                    className="w-[4.5rem]"
                    src="/images/review/clutch.webp"
                    alt=""
                  />
                  <img
                    className="w-[4.5rem]"
                    src="/images/review/upwork.webp"
                    alt=""
                  />
                  <img
                    className="w-[4.5rem]"
                    src="/images/review/fiver.webp"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- TESTIMONIAL CARD 1 ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">Kodezi</p>

                <p className="tes_para">
                  "Wavespace very{" "}
                  <span className="font-bold text-black">reliable</span> at all
                  times and we have enjoyed working & designs are{" "}
                  <span className="font-bold text-black">truly impressive</span>
                  "
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img1.webp" alt="" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Israqh Khan</div>
                    <div className="tes_role">CEO</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- TESTIMONIAL CARD 2 ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">tournated</p>

                <p className="tes_para">
                  "<span className="font-bold text-black">Highly happy</span>{" "}
                  with a design delivered by Wavespace.{" "}
                  <span className="font-bold text-black">
                    Definitely will keep working
                  </span>{" "}
                  with Wavespace. Great and quality smooth communication."
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img1.webp" alt="" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Nick Fisher</div>
                    <div className="tes_role">CEO</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- TESTIMONIAL CARD 3 ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">ActiveSync</p>

                <p className="tes_para">
                  "Wavespace brought my{" "}
                  <span className="font-bold text-black">idea to life</span>.
                  Taken great care of my business & implement{" "}
                  <span className="font-bold text-black">
                    best user experience
                  </span>{" "}
                  possible"
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img2.webp" alt="" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Abraham Ajayi</div>
                    <div className="tes_role">CEO</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">Luxara</p>

                <p className="tes_para">
                  "Very professional,{" "}
                  <span className="font-bold text-black">
                    top notch communication
                  </span>{" "}
                  & absolute pleasure to work. Super satisfied with results.{" "}
                  <span className="font-bold text-black">
                    Highly recommended
                  </span>
                  !"
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img3.webp" alt="Danny P" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Danny P</div>
                    <div className="tes_role">Director of Sales</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- HBIT App ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">HBIT App</p>

                <p className="tes_para">
                  "Wavespace delivered a{" "}
                  <span className="font-bold text-black">stunning</span>
                  and professional mobile UI design quickly. Highly recommend
                  their{" "}
                  <span className="font-bold text-black">excellent work</span>!"
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img4.webp" alt="Mark Gawlyk" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Mark Gawlyk</div>
                    <div className="tes_role">Co-founder & CTO</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- Augalo ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">Augalo</p>

                <p className="tes_para">
                  "Wavespace{" "}
                  <span className="font-bold text-black">satisfied</span> me
                  from the very first order. I able to call on him again & the
                  result as
                  <span className="font-bold text-black"> brilliant</span> as
                  ever."
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img5.webp" alt="Camille" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Camille</div>
                    <div className="tes_role">CEO & Founder</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- LifeTales ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">LifeTales</p>

                <p className="tes_para">
                  "Wavespace is a fantastic design team, with a{" "}
                  <span className="font-bold text-black">
                    healthy blend of UI and UX skills
                  </span>
                  . Highly recommended."
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img6.webp" alt="Matt Kabus" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Matt Kabus</div>
                    <div className="tes_role">CEO & Founder</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* ---------- Krispy ---------- */}
            <SwiperSlide
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-none md:cursor-none"
            >
              <div className="testimonial_card">
                <p className="tes_brand-name">Krispy</p>

                <p className="tes_para">
                  "Super awesome design team,{" "}
                  <span className="font-bold text-black">
                    I came back again
                  </span>{" "}
                  because how satisfied I was last time.{" "}
                  <span className="font-bold text-black">As usual, great</span>
                  !"
                </p>

                <div className="tes_profile-wrap">
                  <div className="tes_img-wrap">
                    <img src="/images/review/img7.webp" alt="Shah Taj" />
                  </div>
                  <div className="tes_profile-details">
                    <div className="tes_name h4">Shah Taj</div>
                    <div className="tes_role">CEO</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* 👇 CUSTOM PAGINATION OUTSIDE SWIPER */}
          <div className="custom-swiper-pagination flex justify-center mt-8"></div>
        </div>
      </div>
    </section>
  );
}
