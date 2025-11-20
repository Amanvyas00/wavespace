"use client";
import { useEffect, useState } from "react";
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
import { MdOutlineArrowOutward } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const pathname = usePathname();

  // Define custom navbar backgrounds for routes
  const navbarBg =
    pathname === "/service"
      ? "bg-[#000054]" // blue
      : pathname === "/pricing"
      ? "bg-black" // black
      : "bg-white"; // default

  // Change text color based on background
  const textColor =
    pathname === "/service" || pathname === "/pricing"
      ? "text-white"
      : "text-black";

  // underline color based on background
  const underlineColor =
    pathname === "/service" || pathname === "/pricing"
      ? "after:bg-white"
      : "after:bg-gray-800";

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`
        w-full fixed top-0 left-0 z-50 transition-transform duration-300 
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${navbarBg} ${textColor}
      `}
    >
      <div className="container mx-auto flex justify-between items-center px-20 py-4">
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl font-semibold tracking-tight ${textColor}`}
        >
          <span className="font-bold">wave</span>space
        </Link>

        {/* Menu Wrapper */}
        <Link
          href="/service"
          className={`hidden md:flex space-x-8 text-lg relative font-medium ${textColor}`}
        >
          {/* Services Menu */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className={`
                cursor-pointer relative flex items-center gap-2 
                ${textColor}
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                ${underlineColor}
                after:transition-all after:duration-300 hover:after:w-full
              `}
            >
              <span>Services</span>
              <MdOutlineArrowOutward className="text-[16px]" />
            </button>

            {/* Mega Menu */}
            <div
              className={`absolute left-0 top-full mt-4 w-[950px] bg-white shadow-2xl border border-gray-100 rounded-3xl p-8 flex gap-8 transition-all duration-200 ${
                open
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
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

              {/* Right card */}
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

          {/* Other Menu Items */}
          {[
            { href: "/case-studies", label: "Case studies", count: "09" },
            { href: "/pricing", label: "Pricing" },
            { href: "/about", label: "About us" },
            { href: "/blog", label: "Blog" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`
                relative ${textColor}
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-0 after:h-[2px] ${underlineColor}
                after:transition-all after:duration-300 hover:after:w-full
              `}
            >
              {item.label}
              {item.count && (
                <sup className="text-[10px] ml-0.5 opacity-70">
                  {item.count}
                </sup>
              )}
            </Link>
          ))}
        </Link>

        {/* Contact Button */}
        <Link
          href="#"
          className="bg-[#3F2FEE] text-white text-[15px] font-bold rounded-full px-7 py-4 hover:bg-indigo-700 transition-all flex items-center gap-2"
        >
          <span>Contact Us</span>
          <MdOutlineArrowOutward className="text-[20px]" />
        </Link>
      </div>
    </nav>
  );
}
