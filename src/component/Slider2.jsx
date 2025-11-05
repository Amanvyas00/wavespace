export default function Slider2() {
  const items = [
    "/images/slider/one.svg",
    "/images/slider/one.svg",
    "/images/slider/one.svg",
    "/images/slider/one.svg",
    "/images/slider/one.svg",
  ];

  return (
    <div className="max-w-[1250px] mx-auto overflow-hidden bg-white py-12 ">
      <div className="flex animate-slide whitespace-nowrap">
        {items.concat(items).map((src, i) => (
          <img
            key={i}
            src={src}
            className="h-14 mx-6 inline-block"
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
}
