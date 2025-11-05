"use client";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10 px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">wavespace</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Wavespace is a global UI/UX design agency that boosts brand value
            with user-friendly, effective designs for web, mobile, and SaaS
            platforms.
          </p>
          <button className="flex items-center justify-between bg-[#E8FF52] text-black font-medium px-6 py-3 rounded-full w-fit hover:bg-[#d9f44d] transition-all">
            Company Deck
            <span className="ml-2 bg-black text-white rounded-full p-1">
              <ArrowDown size={16} />
            </span>
          </button>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="#">UI UX Design</Link>
            </li>
            <li>
              <Link href="#">Web Design</Link>
            </li>
            <li>
              <Link href="#">Product Design</Link>
            </li>
            <li>
              <Link href="#">SaaS Design</Link>
            </li>
            <li>
              <Link href="#">Branding</Link>
            </li>
            <li>
              <Link href="#">Landing Page Design</Link>
            </li>
            <li>
              <Link href="#">UX Audit</Link>
            </li>
            <li>
              <Link href="#">Mobile App</Link>
            </li>
            <li>
              <Link href="#">Design System</Link>
            </li>
            <li>
              <Link href="#">Webflow</Link>
            </li>
            <li>
              <Link href="#">UX Research</Link>
            </li>
          </ul>
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="text-white font-semibold mb-4">Case studies</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="#">Open Hub</Link>
            </li>
            <li>
              <Link href="#">Better AI</Link>
            </li>
            <li>
              <Link href="#">Spacebook</Link>
            </li>
            <li>
              <Link href="#">Kodezi</Link>
            </li>
            <li>
              <Link href="#">View all work</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#">Clutch</Link>
              </li>
              <li>
                <Link href="#">Behance</Link>
              </li>
              <li>
                <Link href="#">Dribbble</Link>
              </li>
              <li>
                <Link href="#">Awwwards</Link>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-white text-sm mb-1">Let's work together</p>
            <Link
              href="#"
              className="text-[#E8FF52] text-2xl font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Call wavespace
              <span className="bg-[#E8FF52] text-black rounded-full p-2">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-16 pt-8 flex flex-wrap justify-between items-center text-gray-400 text-sm">
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white">
            Instagram
          </Link>
          <Link href="#" className="hover:text-white">
            Facebook
          </Link>
          <Link href="#" className="hover:text-white">
            LinkedIn
          </Link>
          <Link href="#" className="hover:text-white">
            Twitter
          </Link>
        </div>
        <p className="mt-4 md:mt-0">
          © {new Date().getFullYear()} Wavespace. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
