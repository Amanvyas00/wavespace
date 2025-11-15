export default function Slider2() {
  const items = [
    "/images/slider/one.svg",
    "/images/slider/one.svg",
    "/images/slider/one.svg",
    "/images/slider/one.svg",
    "/images/slider/one.svg",
  ];

  return (
    <div className="max-w-[1350px] mx-auto overflow-hidden bg-gray-50 py-12 ">
      <div className="flex animate-slide whitespace-nowrap">
        {items.concat(items).map((src, i) => (
          <img
            key={i}
            src={src}
            className="h-10 mx-6 inline-block"
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
}
