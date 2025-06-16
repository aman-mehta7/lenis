import React, { useRef } from "react";
import gsap from "gsap";
import { FaLocationArrow } from "react-icons/fa6";

const data = [
  { text: "Deso", span: "Studio Freight" },
  { text: "Sculpting Harmony", span: "Resn" },
  { text: "Super Power", span: "" },
  { text: "DayLight Computer", span: "Basment Studio" },
  { text: "Github aman-mehta7", span: "" },
];

const Footer = () => {
  const bgRefs = useRef([]);

  const handleMouseEnter = (i) => {
    gsap.fromTo(
      bgRefs.current[i],
      { y: "100%" },
      {
        y: "0%",
        duration: 0.3,
      }
    );
  };

  const handleMouseLeave = (i) => {
    gsap.to(bgRefs.current[i], {
      y: "-100%",
      duration: 0.3,
      onComplete: () => {
        gsap.set(bgRefs.current[i], { y: "100%" });
      },
    });
  };

  return (
    <div className="h-[100dvh] lg:h-[150dvh] w-full bg-white flex justify-between pt-[20vw]">
      <h1 className="text-[4vw] leading-[4vw] text-black font-bold font-[expanded] uppercase p-15">
        Lenis <br />
        <span className="text-gray-700 opacity-85">in use</span>
      </h1>

      <div className="text-black font-[regular] text-[2.2vw] mt-[5vw] pr-[5vw] w-[58vw]">
        {data.map((row, i) => (
          <div
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            className="group relative overflow-hidden border-b-2 border-gray-400 py-4 cursor-pointer hover:px-5 transition-all"
          >
            {/* Animated Background */}
            <div
              ref={(el) => (bgRefs.current[i] = el)}
              className="absolute top-0 left-0 w-full h-full bg-[#FF98A2] z-0 translate-y-full"
            />

            {/* Text Content */}
            <div className="relative z-10 flex items-center justify-between px-4">
              <h1 className="font-[semibold] flex items-center gap-5">
                {row.text}
                <FaLocationArrow className="opacity-0 translate-x-[-10px] translate-y-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
              </h1>
              {row.span && <span className="font-[bold]">{row.span}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
