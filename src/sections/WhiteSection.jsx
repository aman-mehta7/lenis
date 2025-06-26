import React from "react";
import CardSection from "../components/CardSection";

const WhiteSection = () => {
  return (
    <>
    <div className="bg-white h-[50vh] md:h-[70dvh] lg:h-[100dvh] w-full overflow-hidden p-8 md:p-15 -mt-[450vw] md:-mt-0 absolute md:relative">
      <h1 className=" text-[4vw] leading-[4vw] text-black font-bold  font-[semibold] hidden md:block ">
        Lenis is an <span className="text-color">open-source library </span>built to <br />
        standardize scroll experiences and sauce up<br /> websites with butter-smooth navigation, all<br /> while using the
        platform and keeping it<br /> accessible.
      </h1>
      <h1 className=" md:text-[4vw] md:leading-[4vw] text-black font-bold  font-[semibold] block md:hidden ">
        Lenis is an <span className="text-color">open-source library </span>built to
        standardize scroll experiences and sauce up websites with butter-smooth navigation, all while using the
        platform and keeping it accessible.
      </h1>
    </div>
    <CardSection />
    </>
  );
};

export default WhiteSection;
