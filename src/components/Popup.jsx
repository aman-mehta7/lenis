import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Popup = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".ZoomOut",
      {
        scale: 1,
        // y: 0,
        opacity: 1,
      },
      {
        scale: 2,
        opacity: 0,
        // y: "",
        scrollTrigger: {
          // markers: true,
          trigger: ".ZoomOut",
          start: "bottom 30% ",
          end: "top -70%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".apper",
      {
        scale: 0,
        // opacity: 0,
      },
      {
        transformOrigin: "center 30%",
        scale: 40,
        // opacity: 1,
        scrollTrigger: {
          // markers: true,
          trigger: ".apper",
          start: "bottom 50% ",
          end: "top -3000%",
          scrub:true,
        },
      }
    );
    gsap.fromTo(
      ".apper2",
      {
      width: "0vw",
      height: "100%",
        // opacity: 0,
      },
      {
        width: "100vw",
        height: "100%", 
        // opacity: 1,
        scrollTrigger: {
          // markers: true,
          trigger: ".apper2",
          start: "top -500% ",
          end: "top -1000%",
          scrub:true,
        },
      }
    );
  }, []);

  return (
    <div className="uppercase mt-[15vw]  h-[1100vh] w-full ">
      <div className=" sticky top-0 h-screen w-full p-5">
        <div className="overflow-hidden w-full h-full"> 

      <h1 className="ZoomOut text-[8.5vw] leading-[8vw] font-[compressed] h-fit">
        so we built <br />
        <span className="text-color">web scrolling</span>
      </h1>
      <div className=" absolute right-0 top-0 overflow-hidden bg-transparent w-full h-screen flex items-center justify-center">

      <h1 className=" apper text-center text-[15.5vw] lg:text-[8.5vw] leading-[14vw] lg:leading-[8vw] font-[expanded] h-fit mt-[30vw] md:mt-[6vw] lg:mt-0">
        ENTER <br/>
        LENIS
      </h1>
      <div className="apper2 bg-white absolute z-10" />
      </div>
       <h1 className="ZoomOut text-[8.5vw] text-right leading-[8vw] font-[compressed] h-fit mt-[65vw] md:mt-[55vw] lg:mt-[23vw]">
        As it should be
       </h1>
        </div>
    </div>
       </div>
  );
};
``
export default Popup;
