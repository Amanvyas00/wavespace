"use client";
import Image from "next/image";

const testimonials = [
  {
    img: "/images/man1.webp",
    brand: "LifeTales",
    name: "Matt Kabus",
    role: "CEO & Founder @LifeTales",
    review:
      "Wavespace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended",
  },
  {
    img: "/images/man2.webp",
    brand: "Kodezi",
    name: "Ishraq Khan",
    role: "CEO @Kodezi",
    review:
      "Wavespace very reliable at all times and we have enjoyed working & designs are truly impressive. An absolute pleasure to work with and I'm super satisfied with the results. Highly recommended!",
  },
  {
    img: "/images/man3.webp",
    brand: "tournated",
    name: "Nikita Ribakovs",
    role: "Founder & CEO @Tournated",
    review:
      "Highly happy with a design delivered by Wavespace. Definitely will keep working with Wavespace. Great quality and smooth communication",
  },
];

export default function Founders() {
  return (
    <section className="px-6 md:px-20 py-20">
      <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-20 px-12">
        500+ Founders trusted us. Get return
        <br />
        on your <span className="text-gray-400">investment, multiplied!</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="space-y-5 text-left">
            <div className="relative">
              <Image
                src={t.img}
                alt={t.name}
                width={500}
                height={500}
                className="rounded-md w-full h-[350px] object-cover grayscale"
              />
              <p className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                {t.brand}
              </p>
            </div>

            <div>
              <p className="font-semibold text-lg">/ {t.name}</p>
              <p className="text-gray-700 text-sm mb-4">{t.role}</p>
              <p className="text-black text-bold leading-relaxed">&quot;{t.review}&quot;</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
