import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="w-full flex justify-center px-4 py-8 md:px-16 md:py-24 bg-[#F8F5F0] h-auto text-[#C4A77D]"
    >
      <div className="w-full md:w-[85%] flex items-center flex-col gap-y-8 md:gap-y-20 leading-8 ">
        <p className="w-[80%] md:w-full font-cormorant text-4xl md:text-6xl font-bold text-center">
          The Beginning of a Legacy
        </p>
        <div className="w-[85%] font-inter text-xs md:text-lg font-normal flex flex-col gap-y-4">
          <p>
            At DRIFT, we craft premium sneakers for those who move with quiet confidence — through{" "}
            <span className="italic font-medium"> boardrooms, airports, studios, and streets.</span>
          </p>

          <p>
            Fusing global design with Indian precision, every pair is made from high-grade leather,
            finished with flawless stitching, and built for all-day comfort. These are sneakers for
            those who value subtle craftsmanship, effortless style, and performance without
            compromise.
          </p>

          <div className="flex justify-center mt-4 md:mt-10">
            <Link className="underline" href="/">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
