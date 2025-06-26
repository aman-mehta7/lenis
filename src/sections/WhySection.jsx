import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const WhySection = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".parallax",
      {
        y: -200,
      },
      {
        y: 200,
        scrollTrigger: {
          // markers: true,
          trigger: ".parallax",
          start: "bottom bottom ",
          end: "top -70%",
          scrub:true,
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="md:flex flex flex-col md:flex-row px-[7vw] md:items-start justify-center gap-[10vw] min-h-[100dvh] pt-[30vw] md:pt-[30vw] lg:pt-[20vw]  text-white text-center">
        <div className="flex gap-[2.5vw] h-fit md:sticky md:top-[30%]">
          <div className=" hidden md:block w-[.5vw] h-[20vw] -mt-[1.5vw] bg-color  " />
          <div
            id="animate"
            className="md:text-[6.5vw] text-[13vw] leading-[13vw] md:leading-[5.5vw] font-[compressed] h-fit text-left"
          >
            {/* WHY <br /> SMOOTH <br /> SCROLL? */}
            <div className="flex gap-[2vw] md:flex-col md:gap-0">
              <h1>WHY</h1>
              <h1>SMOOTH</h1>
            </div>
            <h1>SCROLL?</h1>
          </div>
        </div>

        <div className="mt-[15vw] flex flex-col gap-[25vw] text-left">
          <p className=" text-[3.5vw] leading-[5vw] md:text-[1.2vw] md:leading-[1.5vw] font-[500] font-[semibold] text-left hidden md:block">
            We’ve heard all the reasons to not use smooth scroll. <br />
            It feels hacky. It’s inaccessible. It’s not performant. It’s <br />{" "}
            over-engineered. And historically, those were all true.
            <br /> But we like to imagine things as they could be, then
            <br /> build them. So, why should you use smooth scroll?
          </p>
          <p className=" text-[3.5vw] leading-[5vw] md:text-[1.2vw] md:leading-[1.5vw] font-[500] font-[semibold] text-left block md:hidden">
            We’ve heard all the reasons to not use smooth scroll.
            It feels hacky. It’s inaccessible. It’s not performant. It’s 
            over-engineered. And historically, those were all true.
             But we like to imagine things as they could be, then
             build them. So, why should you use smooth scroll?
          </p>
          <div>
            <div className=" w-full flex-wrap flex md:flex-col md:text-[2vw] md:leading-[2vw] text-color mb-[1.5vw] font-[expanded] uppercase">
              {/* Create more
              <br /> immersive <br />
              interfaces */}
              <h1>Create more</h1>
              <h1>immersive</h1>
              <h1> interfaces</h1>
            </div>
            <p className=" text-[3.5vw] leading-[5vw] md:text-[1.2vw] md:leading-[1.5vw] font-[semibold] text-left hidden md:block">
              Unlock the creative potential and impact of your web
              <br /> experiences. Smoothing the scroll pulls users into the
              <br /> flow of the experience that feels so substantial that
              <br /> they forget they’re navigating a web page.
            </p>
            <p className=" text-[3.5vw] leading-[5vw] md:text-[1.2vw] md:leading-[1.5vw] font-[semibold] text-left block md:hidden">
              Unlock the creative potential and impact of your web
              experiences. Smoothing the scroll pulls users into the
               flow of the experience that feels so substantial that
               they forget they’re navigating a web page.
            </p>
          </div>
          <div>
            <div className=" w-full flex-wrap flex md:flex-col md:text-[2vw] md:leading-[2vw] text-color mb-[1.5vw] font-[expanded] uppercase">
              {/* Normalize all <br /> your user inputs */}
              <h1>Normalize all </h1>
              <h1>your user inputs</h1>
            </div>
            <p className=" text-[3.5vw] leading-[5vw] md:text-[1.2vw] md:leading-[1.5vw] font-[semibold] text-left hidden md:block">
              Give all your users the same (dope) experience <br />
              whether they’re using trackpads, mouse wheels, or
              <br /> otherwise. With smooth scroll, you control how silky,
              <br /> heavy, or responsive the experience should be — no
              <br /> matter the input. Magic!
            </p>
            <p className=" text-[3.5vw] leading-[5vw] md:text-[1.2vw] md:leading-[1.5vw] font-[semibold] text-left block md:hidden">
              Give all your users the same (dope) experience
              whether they’re using trackpads, mouse wheels, or
               otherwise. With smooth scroll, you control how silky,
              heavy, or responsive the experience should be — no
               matter the input. Magic!
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="md:flex p-[7vw] md:p-0 justify-center gap-[10vw] md:gap-[10vw] min-h-[100dvh] pt-[20vw]  text-white text-center mt-[40vw] md:mt-[35vw] lg:mt-[35vw]">
            <div className="flex gap-[2.5vw] h-fi">
              <div className=" hidden md:block w-[.5vw] h-[30vw] md:h-[35vw] lg:h-[30vw] -mt-[1.5vw] bg-color  " />
              <h1
                id="animate"
                className=" md:block hidden parallax text-[13vw] md:text-[6.5vw] leading-[13vw] md:leading-[5.5vw] font-[compressed] text-left h-fit uppercase"
              >
                Rethinking <br /> SMOOTH <br /> SCROLL
              </h1>
              <h1
                id="animate"
                className=" block md:hidden text-[13vw] md:text-[6.5vw] leading-[13vw] md:leading-[5.5vw] font-[compressed] text-left h-fit uppercase"
              >
                Rethinking <br /> SMOOTH <br /> SCROLL
              </h1>
            </div>

            <div className="mt-[15vw] flex flex-col gap-[25vw] text-left">
              <p className=" text-[3.3vw] leading-[5vw] md:text-[1.2vw] md:leading-[1.5vw] font-[500] font-[semibold] text-left">
                We have to give props to libraries like{" "}
                <span className="text-color">Locomotive</span> <br />
                <span className="text-color">Scroll</span> and{" "}
                <span className="text-color">GSAP ScrollSmoother</span>. They’re
                well built
                <br /> and well documented – and we’ve used them a lot.
                <br /> But they still have issues that keep them from being
                <br /> bulletproof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
