"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Layout,
  Layers,
  Grid,
  PenTool,
  Box,
  Search,
  Zap,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 relative z-50">
      <div className="container mx-auto flex justify-between items-center px-10 py-4">
        {/* Logo */}
        <Link
        href="/"
         className="text-2xl font-semibold tracking-tight text-gray-900">
          <span className="font-bold">wave</span>space
        </Link>

        {/* Menu */}
        <Link
        href="/service"
        className="hidden md:flex space-x-8 text-black text-lg relative font-medium">
          {/* Services Menu */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full">
              Services <span className="text-sm">↗</span>
            </button>

            {/* Mega Menu */}
            <div
              className={`absolute left-0 top-full mt-4 w-[950px] bg-white shadow-2xl border border-gray-100 rounded-3xl p-8 flex gap-8 transition-all duration-200 ${
                open
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {/* Left two columns */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 flex-1">
                {[
                  { name: "UI UX Design", icon: Layout },
                  { name: "Web Design", icon: Monitor },
                  { name: "Product Design", icon: Box },
                  { name: "SaaS Design", icon: Layers },
                  { name: "Branding", icon: PenTool },
                  { name: "Landing Page Design", icon: Grid },
                  { name: "UX Audit", icon: Search },
                  { name: "Mobile App", icon: Smartphone },
                  { name: "Design System", icon: Zap },
                  { name: "Webflow", icon: Layout },
                  { name: "UX Research", icon: Search },
                  { name: "Build Product (MVP)", icon: Layers },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
                  >
                    <span className="bg-indigo-600 text-white p-2 rounded-full">
                      <item.icon size={18} />
                    </span>
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Right gradient card */}
              <div className="w-[250px] bg-gradient-to-br from-indigo-500 to-indigo-300 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg">
                <div>
                  <div className="bg-white/20 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                    <span className="font-bold text-lg">w</span>
                  </div>
                  <h3 className="text-lg font-semibold">
                    Subscription Services
                  </h3>
                  <p className="text-sm mt-2 text-white/90">
                    One subscription, unlimited design requests for your
                    business.
                  </p>
                </div>
                <Link
                  href="#"
                  className="relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                >
                  <span>Contact Us</span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Other Links */}
          {/* Menu Items */}
          <Link
            href="/case-studies "
            className="relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
          >
            Case studies
            <sup className="text-[10px] text-gray-500 ml-0.5">09</sup>
          </Link>

          <Link
            href="/pricing"
            className="relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
          >
            Pricing
          </Link>

          <Link
            href="/about"
            className="relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
          >
            About us
          </Link>

          <Link
            href="/blog"
            className="relative hover:text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
          >
            Blog
          </Link>
        </Link>

        {/* Contact Button */}
        <Link
          href="#"
          className="bg-indigo-600 text-white font-medium rounded-full px-6 py-2 hover:bg-indigo-700 transition-all flex items-center gap-2"
        >
          Contact Us <span className="text-sm">↗</span>
        </Link>
      </div>
    </nav>
  );
}
