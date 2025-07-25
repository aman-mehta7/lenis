import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Popup = ({ setBgColor }) => {
  gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {

  const mobile = window.innerWidth < 768

  const tl = gsap.timeline({
    scrollTrigger: {
      // markers: true,
      trigger: "#mainn",
      start: "top 0%",
      end: mobile ? "top -200%" : "top -400%",
      scrub: true,
      pin: true,
      onLeave: () => setBgColor("white"),
      onEnterBack: () => setBgColor("black"),
    },
  });

  tl.to("#ZoomOut", {
    scale: 2,
    duration: 0.5,
    x: -500,
    y: -500,
    ease: "none",
  }, 0);

  tl.to("#ZoomOut2", {
    scale: 2,
    duration: 0.5,
    x: 300,
    y: 300,
    ease: "none",
  }, 0);

  tl.fromTo(
    "#popup",
    { scale: 0, transformOrigin: "center 30%", opacity: 0.9 },
    mobile ? { scale: 40, transformOrigin: "center 30%", duration: 3.5, opacity: 1, ease: "none" } : { scale: 15, transformOrigin: "center 30%", duration: 3, opacity: 1, ease: "none" },
    0
  );

tl.to("#expand", {
  width: "100vw",
  height: "100vh",
  duration: 2,
  ease: "none",
}, 3.5);

});


  return (
    <>
      <div className="md:h-[500vh] h-[400vh] w-full bg-transparent overflow-hidden uppercase text-[8vw] leading-[7vw] font-[compressed] mt-40 ">
        <div
          id="mainn"
          className=" relative h-dvh w-full flex flex-col items-start justify-between p-15"
        >
          <h1 id="ZoomOut">
            so we built <br /> <span className="text-color">web scrolling</span>
          </h1>
          <div className="  w-full flex items-center justify-center text-center font-[expanded]">
            <h1 id="popup">
              Enter <br /> Lenis
            </h1>
            <div
              id="expand"
              className=" absolute top-0 h-screen w-0 bg-white "
            />
          </div>
          <div className="w-full text-right">
            <h1 id="ZoomOut2">As it should be</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
