import Image from "next/image";
import React from "react";
import Form from "@/component/Form";
import Link from "next/link";

const page = () => {
  const blogs = [
    {
      title: "Top 20 UI/UX Design Agencies in the USA - 2025 Rankings",
      category: "UI/UX Design",
      time: "20 minutes",
      image: "/images/blog/blog1.webp",
      slug: "/blog/top-ui-ux-design-agencies-in-usa",
      author: "Wavespace Team",
      authorImage: "/images/author_image.webp",
      authorLink: "/authors/wavespace-team",
      date: "November 10, 2025",
    },
    {
      title: "15 Black & Orange Website Design Inspirations for 2025",
      category: "Web Design",
      time: "14 minutes",
      image: "/images/blog/blog2.webp",
      slug: "/blog/black-and-orange-websites",
      author: "Wavespace Team",
      authorImage: "/images/author_image.webp",
      authorLink: "/authors/wavespace-team",
      date: "November 5, 2025",
    },
    {
      title: "Top 10 MVP Development Companies in the USA (2025 Guide)",
      category: "MVP Development",
      time: "11 minutes",
      image: "/images/blog/blog3.webp",
      slug: "/blog/top-mvp-development-agencies-in-usa",
      author: "Wavespace Team",
      authorImage: "/images/author_image.webp",
      authorLink: "/authors/wavespace-team",
      date: "November 3, 2025",
    },
    {
      title: "Best Modern Portfolio Website Designs for Agencies (2025)",
      category: "Portfolio Design",
      time: "9 minutes",
      image: "/images/blog/blog4.webp",
      slug: "/blog/portfolio-website-designs",
      author: "Wavespace Team",
      authorImage: "/images/author_image.webp",
      authorLink: "/authors/wavespace-team",
      date: "October 29, 2025",
    },
    {
      title: "How AI is Reshaping UI/UX Design in 2025",
      category: "AI & Design",
      time: "10 minutes",
      image: "/images/blog/blog5.webp",
      slug: "/blog/ai-impact-on-ui-ux",
      author: "Wavespace Team",
      authorImage: "/images/author_image.webp",
      authorLink: "/authors/wavespace-team",
      date: "October 25, 2025",
    },
    {
      title: "Best SaaS Website UI Trends to Watch in 2025",
      category: "SaaS Design",
      time: "12 minutes",
      image: "/images/blog/blog6.webp",
      slug: "/blog/saas-website-ui-trends",
      author: "Wavespace Team",
      authorImage: "/images/author_image.webp",
      authorLink: "/authors/wavespace-team",
      date: "October 22, 2025",
    },
    {
      title: "Dark Mode Design – Best Practices for 2025",
      category: "UI/UX",
      time: "8 minutes",
      image: "/images/blog/blog7.webp",
      slug: "/blog/dark-mode-design-practices",
      author: "Wavespace Team",
      authorImage: "/images/author_image.webp",
      authorLink: "/authors/wavespace-team",
      date: "October 20, 2025",
    },
    {
      title: "Why Minimalism Is Still Winning in Modern Web Design",
      category: "Web Design",
      time: "7 minutes",
      image: "/images/blog/blog8.webp",
      slug: "/blog/minimal-web-design",
      author: "Wavespace Team",
      authorImage: "/images/author_image.webp",
      authorLink: "/authors/wavespace-team",
      date: "October 18, 2025",
    },
    {
      title: "Top Landing Page Design Strategies for High Conversions",
      category: "Conversion Design",
      time: "13 minutes",
      image: "/images/blog/blog9.webp",
      slug: "/blog/landing-page-strategies",
      author: "Wavespace Team",
      authorImage: "/images/author_image.webp",
      authorLink: "/authors/wavespace-team",
      date: "October 15, 2025",
    },
    {
      title: "E-commerce Website Design Best Practices for 2025",
      category: "E-commerce",
      time: "9 minutes",
      image: "/images/blog/blog10.webp",
      slug: "/blog/ecommerce-design-best-practices",
      author: "Wavespace Team",
      authorImage: "/images/author_image.webp",
      authorLink: "/authors/wavespace-team",
      date: "October 10, 2025",
    },
    {
      title: "How to Build a Strong Brand Identity in 2025",
      category: "Branding",
      time: "10 minutes",
      image: "/images/blog/blog11.webp",
      slug: "/blog/build-brand-identity",
      author: "Wavespace Team",
      authorImage: "/images/author_image.webp",
      authorLink: "/authors/wavespace-team",
      date: "October 5, 2025",
    },
    {
      title: "Color Psychology in UI/UX – Updated 2025 Guide",
      category: "UI/UX Psychology",
      time: "8 minutes",
      image: "/images/blog/blog12.webp",
      slug: "/blog/color-psychology-uiux",
      author: "Wavespace Team",
      authorImage: "/images/author_image.webp",
      authorLink: "/authors/wavespace-team",
      date: "October 1, 2025",
    },
    {
      title: "Why Motion Design Is Crucial for Modern Interfaces",
      category: "Motion Design",
      time: "12 minutes",
      image: "/images/blog/blog13.webp",
      slug: "/blog/motion-design-guide",
      author: "Wavespace Team",
      authorImage: "/images/author_image.webp",
      authorLink: "/authors/wavespace-team",
      date: "September 28, 2025",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-16 pb-24 bg-white">
        {/* Category Tabs */}
        <div className="flex gap-10 text-lg font-semibold border-b border-gray-200 mt-20 pb-4 mb-16">
          {["All Blogs", "UI UX", "Webflow", "SaaS", "MVP"].map((tab, i) => (
            <button
              key={i}
              className={`pb-2 ${
                i === 0
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-black hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-16 text-black leading-[1.1]">
          Wavespace Blog
        </h1>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Image */}
          <div className="w-full rounded-xl overflow-hidden">
            <Image
              src="/images/blog/top.webp"
              alt="Hero Blog"
              width={900}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col w-full pt-4 gap-10">
            {/* Category + Read Time */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
                DESIGN INSPIRATION, WEBSITE DESIGN
              </span>

              <span className="text-sm text-gray-500 font-medium tracking-wide">
                15 MINUTES TO READ
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-[1.15] mb-8">
              Top 15 Website Design Inspirations for 2025 <br />
              (With Real Brand Examples)
            </h2>

            {/* Description + Author */}
            <div className="flex items-center justify-between w-full">
              {/* Author Section */}
              <div className="flex items-center gap-3">
                <Image
                  src="/images/author_image.webp"
                  width={40}
                  height={40}
                  alt="Author"
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div className="flex items-center gap-1">
                  <span className="text-gray-500 font-semibold text-sm">
                    by
                  </span>

                  <Link
                    href="/"
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Aman
                  </Link>
                </div>
              </div>

              {/* Date */}
              <p className="text-xs font-bold text-gray-600">
                November 19, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 pt-6">
          {blogs.map((blog, index) => (
            <div key={index} className="flex flex-col">
              <Link href={blog.slug} className="block">
                <div className="w-full mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={blog.image}
                    width={832}
                    height={500}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-120"
                  />
                </div>
              </Link>

              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-gray-700">
                <span>{blog.category}</span>
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                <span>{blog.time}</span>
              </div>

              <Link href={blog.slug}>
                <h2 className="text-2xl font-bold leading-snug mt-4 mb-6 ">
                  {blog.title}
                </h2>
              </Link>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <Image
                    src={blog.authorImage}
                    width={40}
                    height={40}
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600 font-semibold text-xl">
                      by
                    </span>
                    <Link
                      href={blog.authorLink}
                      className="text-xl font-semibold text-blue-600 hover:underline"
                    >
                      {blog.author}
                    </Link>
                  </div>
                </div>

                <p className="text-xs font-bold">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Form />
      </section>
    </div>
  );
};

export default page;
