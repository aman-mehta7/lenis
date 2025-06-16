import React, { useRef } from "react";
import gsap from "gsap";

const AnimatedButton = ({ icon, text, iconSize, arrow, bgColor, color,id }) => {
  const textRef = useRef(null);
  const bgRef = useRef(null);

  const handleEnter = () => {
    gsap.to(textRef.current, {
      scaleY: 0,
      transformOrigin: "top top",
    });


    

    gsap.fromTo(
      bgRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "bottom bottom",
      }
    );
  };

  const handleLeave = () => {
    gsap.to(textRef.current, {
      scaleY: 1,
        transformOrigin: "bottom bottom",
    });

    gsap.to(bgRef.current, {
      scaleY: 0,
        transformOrigin: "top top",
    });
  };

  return (
    <button
      style={{ color: color }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className=" relative overflow-hidden group md:w-[20vw] md:h-[3.5vw] w-full h-[13vw] text-nowrap bg-color text-black font-[bold] flex items-center justify-between px-0.5"
    >
      <div
        className={`h-[95.5%] w-[12vw] md:h-[95.5%] md:w-[3.25vw] bg-black text-white flex items-center justify-center md:text-[2vw] text-[5vw] z-50`}
        style={{ backgroundColor: color, color: bgColor }}
      >
        {icon}
      </div>

      {/* Foreground Layer (initial) */}
      <div
        ref={textRef}
        className="z-30 flex bg-color items-center justify-center gap-[1vw] absolute bottom-0 left-0 w-full h-full"
      >
        <span className="ml-[2vw] z-10 text-[3vw] md:text-[1vw]">{text}</span>
        <span className="font-bold scale-140">{arrow}</span>
      </div>

      {/* Animated BG Layer */}
      <div
        ref={bgRef}
        className={`z-10 flex bg-${bgColor} items-center justify-center gap-[1vw] absolute bottom-0 left-0 w-full h-full `}
      >
        <span className="ml-[2vw] z-10 text-[3vw] md:text-[1vw]">{text}</span>
        <span className="font-bold scale-140">{arrow}</span>
      </div>
    </button>
  );
};

export default AnimatedButton;
