"use client";

import Breadcrumbs from "@/app/components/Breadcrumbs/breadcrumbs";
import useIsMobile from "@/app/hooks/useMobile";
import Image from "next/image";
import React from "react";

const ProductDetails = () => {
  const isMobile = useIsMobile();
  return (
    <div className="w-full h-auto pt-20 md:pt-24 flex justify-center items-center mb-20">
      <div className="w-[90%] h-[80%] flex flex-col">
        <Breadcrumbs />
        <div className="w-full h-auto p-4 md:p-12 bg-[#F8F5F0] flex flex-col gap-y-4 md:gap-y-8">
          <div className="w-full h-1/3 grid grid-cols-3 gap-2 md:gap-4 relative">
            <div className="col-span-1 h-[150px]  md:w-[390px] md:h-[480px] mt-3 md:mt-6 relative">
              <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
            </div>
            <div className="col-span-1 h-[200px] md:w-[390px] md:h-[600px] relative">
              <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
            </div>
            <div className="w-[96.5px] h-[150px] md:w-[390px] md:h-[480px] bottom-0 absolute right-0 mb-3 md:mb-6">
              <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
            </div>
          </div>
          <div className="w-full h-1/3 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 justify-center">
            <div className="col-span-1 w-[150px] h-[250px] md:w-full md:h-[650px] relative">
              <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
            </div>
            <div className="md:col-span-2 grid grid-rows-2 md:grid-rows-3 gap-2 md:gap-4">
              <div className="md:row-span-2 w-full grid md:grid-cols-2 gap-2 md:gap-4">
                <div className="relative">
                  <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
                </div>
                {!isMobile && (
                  <div className="relative">
                    <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
                  </div>
                )}
              </div>
              {isMobile && (
                <div className="relative">
                  <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
                </div>
              )}
              {!isMobile && (
                <div className="w-full">
                  <button className="w-full p-4 rounded-full bg-[#C4A77D] cursor-pointer">
                    Add to cart
                  </button>
                </div>
              )}
            </div>
          </div>
          {isMobile && (
            <div className="w-full">
              <button className="w-full p-2.5 rounded-full bg-[#C4A77D] cursor-pointer">
                Add to cart
              </button>
            </div>
          )}
          <div className="w-full h-1/3 grid grid-cols-2 gap-2 md:gap-4">
            <div className="h-[150px] md:h-[600px] relative">
              <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
            </div>
            <div className="h-[150px] md:h-[600px] relative">
              <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
