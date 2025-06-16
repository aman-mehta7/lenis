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
      <div className="flex justify-center gap-[10vw] min-h-[100dvh] pt-[20vw]  text-white text-center">
        <div className="flex gap-[2.5vw] h-fit sticky top-[30%]">
          <div className=" w-[.5vw] h-[20vw] -mt-[1.5vw] bg-color  " />
          <h1 id="animate" className="text-[6.5vw] leading-[5.5vw] font-[compressed] h-fit text-left">
            WHY <br /> SMOOTH <br /> SCROLL?
          </h1>
        </div>

        <div className="mt-[15vw] flex flex-col gap-[25vw] text-left">
          <p className="text-[1.2vw] leading-[1.5vw] font-[500] font-[semibold] text-left">
            We’ve heard all the reasons to not use smooth scroll. <br />
            It feels hacky. It’s inaccessible. It’s not performant. It’s <br />{" "}
            over-engineered. And historically, those were all true.
            <br /> But we like to imagine things as they could be, then
            <br /> build them. So, why should you use smooth scroll?
          </p>
          <div>
            <h1 className="text-[2vw] leading-[2vw] text-color mb-[1.5vw] font-[expanded] uppercase">
              Create more
              <br /> immersive <br />
              interfaces
            </h1>
            <p className="text-[1.2vw] leading-[1.5vw] font-[semibold] text-left">
              Unlock the creative potential and impact of your web
              <br /> experiences. Smoothing the scroll pulls users into the
              <br /> flow of the experience that feels so substantial that
              <br /> they forget they’re navigating a web page.
            </p>
          </div>
          <div>
            <h1 className="text-[2vw] leading-[2vw] text-color mb-[1.5vw] font-[expanded] uppercase">
              Normalize all <br /> your user inputs
            </h1>
            <p className="text-[1.2vw] leading-[1.5vw] font-[semibold]  text-left">
              Give all your users the same (dope) experience <br />
              whether they’re using trackpads, mouse wheels, or
              <br /> otherwise. With smooth scroll, you control how silky,
              <br /> heavy, or responsive the experience should be — no
              <br /> matter the input. Magic!
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex justify-center gap-[10vw] md:gap-[10vw] min-h-[100dvh] pt-[20vw]  text-white text-center mt-[40vw] md:mt-[35vw] lg:mt-[15vw]">
            <div className="flex gap-[2.5vw] h-fi">
              <div className=" w-[.5vw] h-[30vw] md:h-[35vw] lg:h-[30vw] -mt-[1.5vw] bg-color  " />
              <h1 id="animate" className=" parallax text-[6.5vw] leading-[5.5vw] font-[compressed] text-left h-fit uppercase">
                Rethinking <br /> SMOOTH <br /> SCROLL
              </h1>
            </div>

            <div className="mt-[15vw] flex flex-col gap-[25vw] text-left">
              <p className="text-[1.2vw] leading-[1.5vw] font-[500] font-[semibold] text-left">
               We have to give props to libraries like <span className="text-color">Locomotive</span> <br />
                 <span className="text-color">Scroll</span> and <span className="text-color">GSAP ScrollSmoother</span>. They’re well built
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
