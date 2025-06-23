"use client";
import React from "react";
import { ColouredButton } from "@/app/components/ui/button";
import Image from "next/image";
import useIsMobile from "@/app/hooks/useMobile";

const exploreButtonText = "EXPLORE OUR COLLECTIONS";
const Products = () => {
  const isMobile = useIsMobile();

  return (
    <div id="products" className="w-full h-auto flex flex-col items-center">
      <div className="w-full h-full md:p-16 flex justify-center">
        <div className="flex flex-col md:flex-row w-full md:w-[85%] h-[700px] md:h-full items-center md:items-start p-8 md:p-0 gap-y-4 md:gap-y-0">
          <div className="w-[300px] h-[400px] md:w-1/2 md:h-[650px] relative">
            <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
          </div>
          <div className="w-full h-auto md:w-1/2 md:h-[650px] flex items-center md:justify-end text-center md:text-start">
            <div className="w-full md:w-[90%] flex flex-col gap-y-6 md:gap-y-[60px]">
              <div className="flex flex-col gap-y-4">
                <p className="text-3xl md:text-5xl font-cormorant font-bold text-center md:text-start text-[#C4A77D]">
                  Drift Solace
                </p>
                <p className="text-xs md:text-base text-[#5F6473] font-normal font-inter">
                  Elevate your every step with the UrbanStride Runner — a perfect fusion of
                  performance and everyday style. Built for those always on the move, this
                  lightweight sneaker is engineered to deliver exceptional comfort, breathability,
                  and long-lasting support throughout the day.
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <ColouredButton buttonText="Explore" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[#F8F5F0] md:p-16 flex justify-center">
        <div className="flex flex-col md:flex-row w-full md:w-[85%] h-[700px] md:h-full items-center md:items-start p-8 md:p-0 gap-y-4 md:gap-y-0">
          {isMobile ? (
            <div className="w-[300px] h-[400px] md:w-1/2 md:h-[650px] relative">
              <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
            </div>
          ) : (
            <></>
          )}

          <div className="w-full h-auto md:w-1/2 md:h-[650px] flex items-center md:justify-start text-center md:text-start">
            <div className="w-full md:w-[90%] flex flex-col gap-y-6 md:gap-y-[60px]">
              <div className="flex flex-col gap-y-4">
                <p className="text-3xl md:text-5xl font-cormorant font-bold text-center md:text-start text-[#C4A77D]">
                  Drift Solace
                </p>
                <p className="text-xs md:text-base text-[#5F6473]  font-normal font-inter">
                  Elevate your every step with the UrbanStride Runner — a perfect fusion of
                  performance and everyday style. Built for those always on the move, this
                  lightweight sneaker is engineered to deliver exceptional comfort, breathability,
                  and long-lasting support throughout the day.
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <ColouredButton buttonText="Explore" />
              </div>
            </div>
          </div>
          {!isMobile ? (
            <div className="w-[300px] h-[400px] md:w-1/2 md:h-[650px] relative">
              <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="w-full h-full md:p-16 flex justify-center">
        <div className="flex flex-col md:flex-row w-full md:w-[85%] h-[700px] md:h-full items-center md:items-start p-8 md:p-0 gap-y-4 md:gap-y-0">
          <div className="w-[300px] h-[400px] md:w-1/2 md:h-[650px] relative">
            <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
          </div>
          <div className="w-full h-auto md:w-1/2 md:h-[650px] flex items-center md:justify-end text-center md:text-start">
            <div className="w-full md:w-[90%] flex flex-col gap-y-6 md:gap-y-[60px]">
              <div className="flex flex-col gap-y-4">
                <p className="text-3xl md:text-5xl font-cormorant font-bold text-center md:text-start text-[#C4A77D]">
                  Drift Solace
                </p>
                <p className="text-xs md:text-base text-[#5F6473]  font-normal font-inter">
                  Elevate your every step with the UrbanStride Runner — a perfect fusion of
                  performance and everyday style. Built for those always on the move, this
                  lightweight sneaker is engineered to deliver exceptional comfort, breathability,
                  and long-lasting support throughout the day.
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <ColouredButton buttonText="Explore" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[#F8F5F0] md:p-16 flex flex-col items-center">
        <div className="flex flex-col md:flex-row w-full md:w-[85%] h-[700px] md:h-full justify-center items-center md:items-start p-8 md:p-0 gap-y-4 md:gap-y-0">
          {isMobile ? (
            <div className="w-[300px] h-[400px] md:w-1/2 md:h-[650px] relative">
              <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
            </div>
          ) : (
            <></>
          )}
          <div className="w-full h-auto md:w-1/2 md:h-[650px] flex items-center md:justify-start text-center md:text-start">
            <div className="w-full md:w-[90%] flex flex-col gap-y-6 md:gap-y-[60px]">
              <div className="flex flex-col gap-y-4">
                <p className="text-3xl md:text-5xl font-cormorant font-bold text-center md:text-start text-[#C4A77D]">
                  Drift Solace
                </p>
                <p className="text-xs md:text-base text-[#5F6473]  font-normal font-inter">
                  Elevate your every step with the UrbanStride Runner — a perfect fusion of
                  performance and everyday style. Built for those always on the move, this
                  lightweight sneaker is engineered to deliver exceptional comfort, breathability,
                  and long-lasting support throughout the day.
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <ColouredButton buttonText="Explore" />
              </div>
            </div>
          </div>
          {!isMobile ? (
            <div className="w-[300px] h-[400px] md:w-1/2 md:h-[650px] relative">
              <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="w-full flex justify-center my-20 md:mt-36 md:mb-0">
          <button className="w-auto rounded-full py-3 md:py-5 px-6 md:px-10 bg-[#C4A77D] font-inter text-sm shadow-gray-400 shadow-md hover:text-white cursor-pointer ">
            {exploreButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
