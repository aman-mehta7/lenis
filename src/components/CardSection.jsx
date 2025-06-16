import React from "react";
import Horizontal from "./Horizontal";

const CardSection = () => {
  return (
    <div className="w-full h-[790vw] md:h-[605vw] lg:h-[320vw] bg-white">
      <div className=" w-full h-[100dvh] text-right sticky top-0">
        <h1 className=" text-right text-[4vw] leading-[4vw] text-black font-bold  font-[expanded] uppercase p-15 absolute right-0">
          Lenis brings <br />{" "}
          <span className="text-gray-700 opacity-85">the heat</span>
        </h1>

      <div className=" h-full w-full overflow-hidden">
          <div id="horivat" className="flex pt-[30vw] lg:p-0  pl-[31vw] md:pl-[30vw] lg:pl-[26vw] overflow-hidden text-left  h-full">
            <Horizontal
              className={                 
                "h-[30vw] md:h-[33vw] lg:h-[30vw] lg:w-[31vw] md:w-[35vw] w-[35vw] mt-[10vw] md:mt-[5vw] lg:mt-[14vw] -ml-[26.2vw] md:-ml-[26.2vw] lg:-ml-[22.5vw]  border-2 border-black text-black p-10 flex flex-col justify-between backdrop-blur-xl"
              }
              objects={[
                {
                  num: "1",
                  title: "Run scroll in the main thread",
                },
                {
                  num: "2",
                  title: "Lightweight (under 4kb)",
                },
                {
                  num: "3",
                  title: "Made for 2025+",
                },
                {
                  num: "4",
                  title: "Bring your own animation library",
                },
                {
                  num: "5",
                  title: "CONTROL THE SCROLL EASING DURATION",
                },
                {
                  num: "6",
                  title: "Use any element as scroller",
                },
                {
                  num: "7",
                  title: "Enjoy horizontal + vertical support",
                },
                {
                  num: "8",
                  title: "touch support",
                },
              ]}
            />
          </div>
                </div>
      </div>
    </div>
  );
};

export default CardSection;
