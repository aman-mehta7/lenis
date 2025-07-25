import React from "react";
import CardSection from "../components/CardSection";

const WhiteSection = () => {
  return (
    <>
    <div className="bg-white w-full h-fit overflow-hidden px-8 md:px-15 relative  ">
      <h1 className=" md:mt-70 text-[4vw] leading-[4vw] text-black font-bold  font-[semibold] hidden md:block ">
        Lenis is an <span className="text-color">open-source library </span>built to <br />
        standardize scroll experiences and sauce up<br /> websites with butter-smooth navigation, all<br /> while using the
        platform and keeping it<br /> accessible.
      </h1>
      <h1 className=" text-[5vw] md:leading-[5vw] text-black font-bold  font-[semibold] block md:hidden ">
        Lenis is an <span className="text-color">open-source library </span>built to
        standardize scroll experiences and sauce up websites with butter-smooth navigation, all while using the
        platform and keeping it accessible.
      </h1>
    </div>

    <div className="hidden lg:block" >
    <CardSection />
    </div>
    </>
  );
};

export default WhiteSection;
