import React from "react";

const AboutUs = () => {
  return (
    <div id="about-us" className="w-full flex justify-center px-16 py-44 bg-[#C4A77D] h-auto">
      <div className="w-[85%] flex flex-col gap-y-20 leading-8 text-center ">
        <p className="font-cormorant text-6xl font-bold">The Beginning of a Legacy</p>
        <p className="font-inter text-md font-normal text-white">
          At DRIFT, we craft premium sneakers for those who lead fast-paced lives and value quiet
          confidence — individuals who move through{" "}
          <span className="italic font-medium">
            {" "}
            boardrooms, airports, studios, and streets with purpose and presence.
          </span>{" "}
          Blending global design sensibility with Indian precision, each pair is built from
          high-grade leather, detailed with perfect stitching, and engineered for all-day comfort.
          These are sneakers made for those who appreciate style with substance, comfort under
          pressure, and the kind of craftsmanship that never shouts — but always stands out. <br />
          This is DRIFT. Glide beyond the usual.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
