import React, { useRef } from "react";
import "../index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedButton from "../components/AnimatedButton";


const Hero = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("#animate").forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          // y: 50,
        },
        {
          opacity: 1,
          // y: 0,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            // markers: true,
            trigger: el,
            start: "top 90%",
            // end: "bottom center",
          },
        }
      );
    });

    gsap.fromTo(
      ".scrollToExplore",
      {
        opacity: 1,
      },
      {
        backgroundColor: "transparent",
        opacity: 0,
        ease: "power1.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".scrollToExplore",
          start: "bottom 87.4%",
          end: "bottom 82%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      "#yoyo",
      { opacity: 0, height: 0 },
      {
        height: "5vw",
        opacity: 1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );

    const elements = gsap.utils.toArray(".text-outline-white");

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { duration: 1.5, ease: "power2.inOut" },
    });

    // Wave from RIGHT to LEFT
    tl.fromTo(
      elements,
      {
        color: "black",
        scale: 0.95,
        opacity: 0.8,
        // textShadow: "0 0 5px #FF98A2, 0 0 10px #FF98A2",
        textShadow: "0 0 5px #FF98A2",
      },
      {
        color: "#FF98A2",
        scale: 1.05,
        opacity: 1,
        // textShadow: "0 0 5px #FF98A2, 0 0 10px #FF98A2",
        textShadow: "0 0 5px #FF98A2",
        stagger: {
          each: 0.3,
          from: "start", // 👈 starts from right
        },
      }
    );

    // Wave from LEFT to RIGHT
    tl.to(elements, {
      color: "black",
      scale: 0.95,
      opacity: 0.8,
      // textShadow: "0 0 5px #FF98A2, 0 0 10px #FF98A2",
      textShadow: "0 0 5px #FF98A2",
      stagger: {
        each: 0.3,
        from: "start", // 👈 goes back to the right
      },
    });
  });

  // const btn = useRef(null);
  // const btn2 = useRef(null);

  // const buttonAnimationEnter = () => {
  //   gsap.to(btn.current, {
  //     // background: "white",
  //     // y: -100,
  //     scaleY:0,
  //     // duration: 0.5,
  //     transformOrigin: "top top"
  //     // ease: "power2.inOut",
  //   });
  // };

  // const buttonAnimationLeave = () => {
  //   gsap.to(btn.current, {
  //     // background: "#FF98A2",
  //     // y: 0,
  //     scaleY: 1,
  //      transformOrigin: "top top"
  //     // duration: 0.5,
  //     // ease: "power2.inOut",
  //   });
  // };
  // const buttonAnimationEnter2 = () => {
  //   gsap.fromTo(
  //     btn2.current,
  //     {   scaleY:0, },
  //     {
  //       background:"white",
  //       scaleY: 1,
  //       // duration: 0.5,
  //       //  transformOrigin: "bottom bottom"
  //     }
  //   );
  // };

  // const buttonAnimationLeave2 = () => {
  //   gsap.to(btn2.current, {
  //     // background: "#FF98A2",
  //    scaleY: 0,
  //     // duration: 0.5,
  //     // ease: "power2.inOut",
  //   });
  // };

  return (
    <div>
      <section className="text-right relative h-screen w-full">
        <div className="h-[80%]">
          <div className="flex flex-col items-center justify-normal mt-[1.5vw]">
            <h1 className="text-[32vw] font-[mid] text-gray-900 dark:text-gray-500 mb-4 -mt-[12vw] text-color lenis pointer-events-none ">
              {/* LENIS */}
              <spam className=" text-outline-white">L</spam>
              <spam className=" text-outline-white">E</spam>
              <spam className=" text-outline-white">N</spam>
              <spam className=" text-outline-white">I</spam>
              <spam className=" text-outline-white">S</spam>
            </h1>
          </div>
          <div className="mr-[6vw]">
            <h1 className=" text-[3.5vw] font-bold mb-2 -mt-[12vw] font-[expanded] ">
              {" "}
              SMOOTH SCROLL
            </h1>
            <p className=" mb-6 font-[bold] uppercase text-[#585858] -mt-[.5vw] ">
              © 2025 darkroom.engineering
            </p>
          </div>
        </div>

        {/* footer */}

        <div className="md:mr-[6vw] md:mt-10 -mt-[40vw]">
          <div className="flex flex-col md:flex-row  md:items-end gap-[5vw] p-10 ">
            <div className="md:flex md:items-end md:pl-18 md:gap-[8vw] w-[50%] ">
              <div>
                <div
                  id="yoyo"
                  className="scrollToExplore hidden md:block w-[.13vw] h-[10vh] bg-color absolute left-13 "
                />
                <h1 className="scrollToExplore hidden md:block text-nowrap text-left font-[compressed] uppercase text-[1.5vw] leading-[1.5vw]">
                  scroll <br /> to explore
                </h1>
              </div>
              <h1 className="   text-nowrap text-left font-[semibold] uppercase text-[4vw] leading-[5vw] md:text-[.9vw] md:leading-[1.1vw]">
                A smooth scroll library <br /> fresh out of darkroom.engineering
                <br /> website designed by Studio Freight
              </h1>
            </div>
            <div className="">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-10 w-full">

                <AnimatedButton id={"hero1"} bgColor={"white"} icon={<FaGithub />} text="DOCUMENTATION" arrow={  <GoArrowUpRight />} iconSize={"1.5"} />
                <AnimatedButton id={"hero2"} bgColor={"white"}  icon={<CiHeart />} text=" BECOME A SPONSER" arrow={  <GoArrowUpRight />} iconSize={"1.5"} />
                
                {/* <button
                  onMouseEnter={() => {
                    buttonAnimationEnter();
                    buttonAnimationEnter2();
                  }}
                  onMouseLeave={() => {
                    buttonAnimationLeave();
                    buttonAnimationLeave2();
                  }}
                  className="relative overflow-hidden group w-[20vw] h-[3.5vw] text-nowrap bg-color text-black font-[bold] text-[1vw] flex items-center justify-between px-0.5"
                >
                  <div className="h-[95.5%] w-[3.25vw] bg-black text-white flex items-center justify-center text-[1.5vw] z-50">
                    <FaGithub />
                  </div>

                  <div
                    ref={btn}
                    className=" z-20 flex items-center justify-center gap-[1vw]  absolute bottom-0 left-0 w-full h-full  "
                  >
                    <span className=" ml-[2vw] z-10">DOCUMENTATION</span>
                    <span className="scale-125 z-10">
                      <GoArrowUpRight />
                    </span>
                  </div>

                  <div
                    ref={btn2}
                    className=" z-20 flex items-center justify-center gap-[1vw] absolute bottom-0 left-0 w-full h-full "
                  >
                    <span className=" ml-[2vw] z-10">DOCUMENTATION</span>
                    <span className="scale-125 z-10">
                      <GoArrowUpRight />
                    </span>
                  </div>

                </button> */}
{/* 
                <button className=" w-[20vw] h-[3.5vw]  text-nowrap bg-color text-black font-[bold] text-[1vw] flex items-center justify-between px-0.5 relative">
                  <div className=" h-[95.5%] w-[3.25vw] bg-black text-white flex items-center justify-center text-[2vw] font-bold ">
                    <CiHeart />
                  </div>{" "}
                  BECOME A SPONSER{" "}
                  <span className="font-bold scale-125 mr-5 -ml-5">
                    <GoArrowUpRight />
                  </span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

// import React from "react";
// import AnimatedButton from "../components/AnimatedButton";
// import { FaGithub } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { GoArrowUpRight } from "react-icons/go";

// const Hero = () => {
//   return (
//    <div className="grid grid-cols-1">
//   <div className="flex items-end gap-10 w-full">
//     <AnimatedButton
//       icon={<FaGithub />}
//       text="DOCUMENTATION"
//     />

//     <button className=" w-[20vw] h-[3.5vw]  text-nowrap bg-color text-black font-[bold] text-[1vw] flex items-center justify-between px-0.5 relative">
//       <div className=" h-[95.5%] w-[3.25vw] bg-black text-white flex items-center justify-center text-[2vw] font-bold ">
//         <CiHeart />
//       </div>{" "}
//       BECOME A SPONSOR{" "}
//       <span className="font-bold scale-125 mr-5 -ml-5">
//         <GoArrowUpRight />
//       </span>
//     </button>
//   </div>
// </div>
//   )
// }

// export default Hero
