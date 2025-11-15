"use client";
import Image from "next/image";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    budget: "",
    hear: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-[#F0F0F0] min-h-screen flex flex-col justify-center py-26 px-6 md:px-16 lg:px-22">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-6xl font-bold text-gray-900 mb-4 leading-17 pb-8">
            Have a Project?
            <br /> Let's talk!
          </h2>

          <ul className="space-y-3 text-black font-semibold mb-10 pb-8  ">
            <li className="flex items-center gap-2">
              <span className="text-black">☑</span> NDA? Absolutely just ask.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-black">☑</span> We'll respond in 24 hours
              fast & focused.
            </li>
            <li className="flex items-center gap-2">
              <span className="text-black">☑</span> Work with senior UX
              experts, not juniors.
            </li>
          </ul>

          <div>
            <h3 className="text-lg font-semibold mb-3">Schedule a call:</h3>
            <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 w-fit">
              <Image
                src="/images/man1.webp" // Replace with your image path
                alt="Shahid Miah"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-lg text-gray-900">
                  Shahid Miah
                </p>
                <p className="text-gray-500 text-sm">Founder & CEO</p>
              </div>
              <div className="bg-indigo-600 text-white rounded-full p-3 cursor-pointer">
                📅
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:border-gray-600 focus:outline-none"
                />
              </div>
              <div>
               
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:border-gray-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 text-gray-600 focus:border-gray-600 focus:outline-none"
              >
                <option>Project budget</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000+</option>
              </select>

              <select
                name="hear"
                value={formData.hear}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 text-gray-600 focus:border-gray-600 focus:outline-none"
              >
                <option>How did you hear about us?</option>
                <option>Google</option>
                <option>LinkedIn</option>
                <option>Referral</option>
              </select>
            </div>

            <div>
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your product and goals."
                rows="3"
                className="w-full border border-gray-300 rounded-md p-3 focus:border-gray-600 focus:outline-none"
              ></textarea>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">
                How can we help you?
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "UI/UX Design",
                  "SaaS Design",
                  "Branding",
                  "CRO",
                  "Mobile app",
                  "Development",
                  "MVP Development",
                  "Web Design",
                ].map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition"
            >
              Send message
            </button>

            <p className="text-right text-sm text-black">
              Prefer email?{" "}
              <a
                href="mailto:hello@wavespace.agency"
                className="text-gray-600 underline font-semibold"
              >
                hello@wavespace.agency
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}