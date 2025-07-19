import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Popup = () => {
  gsap.registerPlugin(ScrollTrigger);

  // --vh setup for mobile viewport height
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".ZoomOut",
      {
        scale: 1,
        opacity: 1,
      },
      {
        scale: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: ".ZoomOut",
          start: "bottom 30%",
          end: "top -70%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".apper",
      {
        scale: 0,
      },
      {
        scale: 8, // Reduced from 40 to avoid layout bugs
        transformOrigin: "center 30%",
        scrollTrigger: {
          trigger: ".apper",
          start: "bottom 50%",
          end: "top -3000%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".apper2",
      {
        width: "0vw",
        height: "100%",
        opacity: 0,
      },
      {
        width: "100vw",
        height: "100%",
        opacity: 1,
        scrollTrigger: {
          trigger: ".apper2",
          start: "top -500%",
          end: "top -1000%",
          scrub: true,
        },
      }
    );

    // OPTIONAL: Animate canvas color (if using a <canvas> element)
    gsap.to("canvas", {
      backgroundColor: "#ffffff",
      scrollTrigger: {
        trigger: ".apper2",
        start: "top -500%",
        end: "top -1000%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="uppercase mt-[15vw] w-full" style={{ height: "calc(var(--vh, 1vh) * 1100)" }}>
      <div className="sticky top-0 w-full" style={{ height: "calc(var(--vh, 1vh) * 100)" }}>
        <div className="overflow-hidden w-full h-full pt-[5vw] md:p-0">
          {/* First Zooming Heading */}
          <h1 className="ZoomOut text-[20vw] leading-[20vw] md:text-[8.5vw] md:leading-[8vw] font-[compressed] h-fit">
            so we built <br />
            <span className="text-color">web scrolling</span>
          </h1>

          {/* Animated Large Text & White Panel */}
          <div className="absolute inset-0 overflow-hidden bg-transparent flex items-center justify-center">
            <h1 className="apper text-center md:text-[23vw] text-[29vw] leading-[23vw] lg:text-[8.5vw] md:leading-[23vw] lg:leading-[8vw] font-[expanded] h-fit mt-[30vw] md:mt-[6vw] lg:mt-0">
              ENTER <br />
              LENIS
            </h1>
            <div className="apper2 bg-white absolute z-10 pointer-events-none" />
          </div>

          {/* Final ZoomOut Heading */}
          <h1 className="ZoomOut text-[8.5vw] text-right leading-[20vw] md:text-[8.5vw] md:leading-[8vw] font-[compressed] h-fit mt-[100vw] md:mt-[55vw] lg:mt-[23vw]">
            As it should be
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Popup;
