import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import AnimatedButton from "../components/AnimatedButton";


const Footer2 = () => {
  return (
    <div className=" bg-transparent text-black p-15 relative h-fit md:h-[78vh] lg:h-fit w-full pt-[50vh] md:pt-0 ">
      <div>
        <div className="uppercase font-[compressed] md:text-[10vw] md:leading-[10vw] text-[20vw] leading-[20vw] md:flex md:flex-col md:gap-[20vw] lg:gap-0 ">
          <h1>
            Lenis is <br />
            <span className="text-color">Open source</span>
          </h1>
          <h1 className="text-right flex flex-col text-[10vw] leading-[10vw]">
            & open to features <br />
            and sponsors
          <span className=" h-fit font-[bold] uppercase text-[#585858] mr-[1vw] text-[3vw] md:text-xl">
            © 2025 darkroom.engineering
          </span>
          </h1>
        </div>
        <div className="uppercase -mb-[1.5vw] ">
          <div className="mb-[2vw] mt-[8vw] md:mt-0" >

          <AnimatedButton
          id={"footer"}
            bgColor={"black"}
            color={"#fff"}
            text={"Let's build together"}
            arrow={<GoArrowUpRight />}
            icon={<FaGithub />}
            iconSize={"1.5"}
            />
            </div>
          {/* <button className=" uppercase w-[20vw] h-[3.5vw] text-nowrap bg-color text-black font-[bold] text-[1vw] flex items-center justify-between px-0.5 relative mb-[2vw]">
            <div className=" h-[95.5%] w-[3.25vw] bg-white text-white flex items-center justify-center text-[1.5vw]">
              {" "}
              <span className="text-black">
                <FaGithub />
              </span>
            </div>
            Let's build together
            <span className=" scale-125 mr-5 -ml-6">
              <GoArrowUpRight />
            </span>
          </button> */}
          <div className="flex flex-wrap md:flex-nowrap md:gap-[2vw] gap-[4vw] font-[semibold] mt-[5vw] md:mt-0">
            <a href="">Twitter</a>
            <a href="">GitHub</a>
            <a href="">Website</a>
            <a href="">Designed by Studio Freight</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
