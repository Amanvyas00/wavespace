import React from 'react'

const Testimonial = () => {
     const states = [
        {
          id: "/01",
          title: "92%",
          sub: "client satisfaction in post-project reviews",
        },
        { id: "/02", title: "$10B+", sub: "valuation influenced by our design" },
        { id: "/03", title: "2019", sub: "Founded, 6 years of experience" },
        { id: "/04", title: "25M+", sub: "monthly visits on client platforms" },
        {
          id: "/05",
          title: "500+ global project",
          sub: "250+ testimonial with trusted by YC-backed, VC-funded, a16z, Sequoia",
        },
      ];
  return (
    <>
      <section className="w-full py-24 px-10 bg-gradient-to-b from-white to-gray-200">
        <div className="px-8">
          <h2 className="text-4xl md:text-6xl font-semibold mb-12 leading-tight tracking-[0.01em]">
            Bold UX design, billion-dollar proof. We
            <br />
            measure impact,{" "}
            <span className="text-gray-500">not just ship pixels.</span>
          </h2>
          {/* first div */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {states.slice(0, 3).map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-10 text-left">
                <span className="text-gray-400 text-lg ">{item.id}</span>
                <h3 className="text-5xl font-semibold mt-6 mb-3 pt-30">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg w-50">{item.sub}</p>
              </div>
            ))}
          </div>
          {/* second div */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            {states.slice(3).map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm  p-10 text-left"
              >
                <span className="text-gray-400 text-lg pb-70">{item.id}</span>
                <h3 className="text-5xl font-semibold mt-6 mb-3 pt-30">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg w-100">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial