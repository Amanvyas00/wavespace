import Image from 'next/image'
import React from 'react'

const page = () => {
    const blog = [
        {
            img:"/images/home.jsx",
            title:"MVP",
            time:"11 Minutes",
            des:"Top 10 MVP Development Companies in the USA for Startups (2025 guide)",
            icon:"",
            name:"Shahid Miah",
            datee:"November 3,2025"
        }
    ]
  return (
    <div>
      <section className="px-6 py-20 bg-white">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold mb-16 text-black">
        Wavespace Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        
        {/* Left big Image */}
        <div className="w-full">
          <Image
            src="/images/home.jpeg"
            width={900}
            height={600}
            alt="Black & Orange Design Ideas"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center space-y-6 text-black">
          <div className="flex justify-between">
            <span className="text-[12px] uppercase tracking-wider text-purple-600 font-semibold">
              WEB DESIGN, WEB DESIGN COLLECTION
            </span>

            <span className="text-gray-500 text-sm">14 MINUTES TO READ</span>
          </div>

          <h2 className="text-5xl font-semibold leading-tight">
            15 Black and Orange Website Design Ideas for 2025
          </h2>

          <div className="flex items-center gap-3 pt-4">
            <Image
              src="/images/profile.png"
              alt="author"
              width={45}
              height={45}
              className="rounded-full"
            />

            <div>
              <p className="text-[15px] font-semibold text-blue-600">
                by Shahid Miah
              </p>
              <p className="text-gray-500 text-sm">
                Publish Date: <span className="font-medium text-black">November 3, 2025</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className='grid grid-col-3'>
        {blog.map((item,index)=>{
            <div className='flex flex-col'>
                <Image
                src={item.img}
                fill
                />
                <div className='flex flex-row'>

                </div>

            </div>
        })}

    </section>
    </div>
  )
}

export default page
