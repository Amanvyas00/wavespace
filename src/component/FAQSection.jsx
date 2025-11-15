"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const faqData = [
  {
    q: "What are your focus areas as a UI/UX design agency?",
    a: `<p>Back in 2021, Wavespace started with one simple goal: to create digital user experiences that leave a mark.Over the years, we’ve grown from a small remote team to a trusted UI/UX design agency for startups, SaaS brands,and forward-thinking businesses around the world.
    </p>

<p>Our focus is always on making designs that look great and work well. As a team of UX experts, we love working with new ideas that help companies elevate their brand experiences for their customers. Whether it’s a mobile app for a startup or a SaaS tool to grow revenue, we make sure every screen is both good-looking and easy to use.</p>

<p>What makes us a true UI/UX agency is our love for human ideas and teamwork. We don’t make designs we work with you 
to bring your vision to life. Each project is a chance to build something amazing — and we can’t wait to do it for you.</p>`,
  },
  {
    q: "Why is UI/UX design important for your business growth?",
    a: `
      <p>At Wavespace, we always say: great UX design is about more than just making things look good; it’s about creating an experience that keeps your users happy, builds trust, and helps your business grow. Since we started in 2021, we’ve worked with SaaS companies and other tech-focused businesses to build UI/UX designs that make a real impact.</p>

      <p>Think of UI/UX design as a platform that sets the tone for your business. If users find it difficult or frustrating to use, they won’t come back. That’s why we design with empathy — understanding how your customers feel. At Wavespace, we focus on creating designs that connect emotionally, drive engagement, and make your brand stand out.</p>

      <p>When your website or product is easy to use, people stick around longer, interact more, and trust your brand more — and that’s where our design shines.</p>
    `,
  },
  {
    q: "My website isn’t generating enough leads. How can your design help?",
    a: `
      <p>We totally get it. When something isn’t working, it often has to do with design. That’s why we focus on improving the user experience. A great-looking design is nice, but what makes UI/UX design so key to turning visitors into loyal customers is how it simplifies their journey — helping them find what they need faster, guiding users to take the next step, like signing up, buying, or getting in touch.</p>

      <p>With our UX design model, we focus on your brand and your users. You can see real results by making your website better, more accessible, and easier to use. At Wavespace, turning visitors into leads is our mission. Working with the best design agency means more than just a nice website — it means a business that works for you.</p>
    `,
  },
  {
    q: "What separates Wavespace from other top UI/UX design agencies?",
    a: `
      <p>What makes Wavespace stand out from other UI/UX design agencies is that our goal is about more than just design — it’s about creating real results. We focus on creating designs that are not only visually appealing but also easy to use and effective. Our UX is all about making sure everything works smoothly and provides a great experience for your users.</p>

      <p>When you work with us, you’re not just getting a design company; you’re gaining a partner who is deeply invested in your success. We take the time to understand your business and its goals, crafting each design as a reflection of your brand values and the needs of your audience. Our team is made up of experts who are passionate about what they do and who want to see every project we touch succeed.</p>
    `,
  },
  {
    q: "How could you help us redesign our app, website, or enterprise/B2B software?",
    a: `
      <p>When it’s time to redesign your app, website, or B2B software, we focus on making it work better for your business and your users. Redesigning requires precision — and in UI/UX design, we do it at every project level with a clear understanding of your needs and your goals.</p>

      <p>We work across various industries — from SaaS to B2B to product design — bringing a fresh perspective. Our redesign process is data-driven and creative. We start by understanding your users’ challenges, your business model, and your current pain points. Once we have this insight, we design a modern and user-friendly interface that boosts engagement and conversions.</p>
    `,
  },
  {
    q: "Do you work with startups or only with B2B/enterprise companies?",
    a: `
      <p>We work with both startups and B2B/enterprise companies — offering custom solutions that fit each business’s needs. At one end, we help startups bring their ideas to life through creative designs and strategic consulting. At the other, we assist enterprises in simplifying their digital products and workflows while improving the user experience.</p>

      <p>Whether you’re a new startup or an established enterprise, we make sure the design aligns with your business goals and delivers measurable results.</p>
    `,
  },
  {
    q: "Can a redesign boost more traffic and enhance user experience?",
    a: `
      <p>Absolutely. A redesign can dramatically increase traffic, boost conversions, and make your website or app feel modern and trustworthy. When visitors find your design easy to use, they spend more time exploring — and that’s when engagement grows.</p>

      <p>At Wavespace, we’ve helped many businesses rebrand and redesign their digital products with one goal in mind: to make user experiences smoother, faster, and more enjoyable. Whether you’re a SaaS brand or a large enterprise, a redesign can open new opportunities for growth.</p>
    `,
  },
  {
    q: "How can your UI/UX design agency help my startup?",
    a: `
      <p>A strong UI/UX design is the foundation of a startup’s success. We help startups like yours define your vision and build a design that truly represents it. From your MVP to your fully developed product, we make sure each stage is validated with real user feedback and design expertise.</p>

      <p>Our approach is flexible and focused — we listen to your users, test design ideas quickly, and create an experience that connects your brand with your audience.</p>
    `,
  },
  {
    q: "Do you offer design services in your agency?",
    a: `
      <p>Yes, absolutely. We’re a full-service UI/UX design agency, which means we handle everything from strategy to design execution. Our design services include:</p>

      <ul class="list-disc pl-6">
        <li>UI/UX design for web and mobile</li>
        <li>Product strategy and user research</li>
        <li>Wireframing and prototyping</li>
        <li>Design systems and branding</li>
      </ul>

      <p>We help you get from concept to product — with creative ideas that work for your users and business.</p>
    `,
  },
  {
    q: "What digital design tools and technologies do you use for UI UX design?",
    a: `
      <p>We use the latest tools and technologies that help us create fast, modern, and scalable design systems. Some of our core tools include Figma, Adobe XD, Webflow, Notion, and Framer.</p>

      <p>These platforms let us collaborate in real-time with clients, iterate faster, and deliver high-quality digital products.</p>
    `,
  },
  {
    q: "How long does the entire design process take?",
    a: `
      <p>The timeline depends on the project’s scope and goals, but typically, our design process takes between 4 to 12 weeks. It starts with discovery and research, followed by wireframes and prototypes, and finally, testing and refinements.</p>

      <p>We move fast but never skip the details — every step is carefully executed to ensure your users get the best experience.</p>
    `,
  },
  {
    q: "How much do you charge for design services?",
    a: `
      <p>We provide flexible pricing depending on your needs. For startups, our Brand Growth Pack starts at $4,400 — it’s a perfect bundle to help you launch or redesign your digital product with strong UX foundations.</p>

      <p>For larger companies, we create custom packages that include research, strategy, and UI/UX implementation. Our goal is always to provide measurable ROI and exceptional quality for your investment.</p>
    `,
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="bg-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-18 grid lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <h2 className="text-[54px] font-semibold text-gray-900 mb-12 leading-tight">
            Frequently asked <br /> questions
          </h2>

          <div className="divide-y divide-gray-200">
            {faqData.map((item, i) => (
              <div
                key={i}
                className="py-6 cursor-pointer transition-colors duration-200 hover:text-gray-900"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {/* Question */}
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[20px] leading-6 font-semibold text-[#1B1B1B] w-[90%]">
                    {item.q}
                  </span>
                  <ArrowUpRight
                    className={`w-5 h-5 flex-shrink-0 mt-1 text-gray-800 transition-transform duration-300 ${
                      open === i ? "rotate-[180deg] text-black" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    open === i
                      ? "max-h-[1100px] mt-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className="text-[16px] text-black leading-[1.5] space-y-5 font-normal"
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Sticky Card */}
        <div className="relative">
          <div className="sticky top-24 bg-[#111] text-white p-6 rounded-md shadow-md h-fit w-full">
            <div className="flex items-center mb-4">
              <img
                src="/images/man1.webp"
                alt="CEO"
                className="w-12 h-12 mr-3 object-cover rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">
                  Hi, I’m Shahid, the CEO and Founder of Wavespace.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-5 leading-snug">
              Don’t hesitate to reach out to me anytime — I’m here to answer all
              your questions!
            </p>

            <button className="bg-lime-400 text-black text-sm font-semibold py-2 px-4 rounded-full hover:bg-lime-500 transition">
              Ask Questions 💬
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
