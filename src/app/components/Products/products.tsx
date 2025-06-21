import { ColouredButton } from "@/app/ui/button";
import Image from "next/image";
import React from "react";

const exploreButtonText = "EXPLORE OUR COLLECTIONS";
const Products = () => {
  return (
    <div id="products" className="w-full h-auto flex flex-col items-center">
      <div className="w-full p-16 flex justify-center">
        <div className="flex w-[85%] h-[650px]">
          <div className="w-1/2 relative">
            <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
          </div>
          <div className="w-1/2 flex items-center justify-end">
            <div className="w-[90%] flex flex-col gap-y-[60px]">
              <div className="flex flex-col gap-y-4">
                <p className="text-4xl font-cormorant font-bold">Drift Solace</p>
                <p className="text-base font-normal font-inter">
                  Elevate your every step with the UrbanStride Runner — a perfect fusion of
                  performance and everyday style. Built for those always on the move, this
                  lightweight sneaker is engineered to deliver exceptional comfort, breathability,
                  and long-lasting support throughout the day.
                </p>
              </div>
              <div>
                <ColouredButton buttonText="Explore" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#D5CDC4] w-full p-16 flex justify-center">
        <div className="flex w-[85%] h-[650px]">
          <div className="w-1/2 flex items-center justify-start">
            <div className="w-[90%] flex flex-col gap-y-[60px]">
              <div className="flex flex-col gap-y-4">
                <p className="text-4xl font-cormorant font-bold">Drift Solace</p>
                <p className="text-base font-normal font-inter">
                  Elevate your every step with the UrbanStride Runner — a perfect fusion of
                  performance and everyday style. Built for those always on the move, this
                  lightweight sneaker is engineered to deliver exceptional comfort, breathability,
                  and long-lasting support throughout the day.
                </p>
              </div>
              <div>
                <ColouredButton buttonText="Explore" />
              </div>
            </div>
          </div>
          <div className="w-1/2 relative">
            <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
          </div>
        </div>
      </div>
      <div className="w-full p-16 flex justify-center">
        <div className="flex w-[85%] h-[650px]">
          <div className="w-1/2 relative">
            <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
          </div>
          <div className="w-1/2 flex items-center justify-end">
            <div className="w-[90%] flex flex-col gap-y-[60px]">
              <div className="flex flex-col gap-y-4">
                <p className="text-4xl font-cormorant font-bold">Drift Solace</p>
                <p className="text-base font-normal font-inter">
                  Elevate your every step with the UrbanStride Runner — a perfect fusion of
                  performance and everyday style. Built for those always on the move, this
                  lightweight sneaker is engineered to deliver exceptional comfort, breathability,
                  and long-lasting support throughout the day.
                </p>
              </div>
              <div>
                <ColouredButton buttonText="Explore" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#D5CDC4] w-full p-16 flex justify-center">
        <div className="flex w-[85%] h-[650px]">
          <div className="w-1/2 flex items-center justify-start">
            <div className="w-[90%] flex flex-col gap-y-[60px]">
              <div className="flex flex-col gap-y-4">
                <p className="text-4xl font-cormorant font-bold">Drift Solace</p>
                <p className="text-base font-normal font-inter">
                  Elevate your every step with the UrbanStride Runner — a perfect fusion of
                  performance and everyday style. Built for those always on the move, this
                  lightweight sneaker is engineered to deliver exceptional comfort, breathability,
                  and long-lasting support throughout the day.
                </p>
              </div>
              <div>
                <ColouredButton buttonText="Explore" />
              </div>
            </div>
          </div>
          <div className="w-1/2 relative">
            <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <button className="w-auto rounded-full py-5 px-10 bg-[#C4A77D] font-inter text-sm font-semibold shadow-gray-400 shadow-md hover:text-white cursor-pointer ">
          {exploreButtonText}
        </button>
      </div>
    </div>
  );
};

export default Products;
