import React from "react";
import CardSection from "../components/CardSection";

const WhiteSection = () => {
  return (
    <>
    <div className="bg-white h-[100dvh] md:h-[70dvh] lg:h-[100dvh] w-full overflow-hidden p-15">
      <h1 className=" text-[4vw] leading-[4vw] text-black font-bold  font-[semibold] ">
        Lenis is an <span className="text-color">open-source library </span>built to <br />
        standardize scroll experiences and sauce up<br /> websites with butter-smooth navigation, all<br /> while using the
        platform and keeping it<br /> accessible.
      </h1>
    </div>
    <CardSection />
    </>
  );
};

export default WhiteSection;
