"use client";

import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/breadcrumbs";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Collections = () => {
  const navigate = useRouter();
  return (
    <div className="w-full h-auto pt-20 md:pt-32 flex justify-center items-center">
      <div className="w-[90%] h-[80%] flex flex-col">
        <Breadcrumbs />
        <div className="w-full h-full py-6">
          <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <div className="w-[160px] h-[200px] md:w-full md:h-[450px] relative">
                <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
              </div>
              <button
                className="w-full cursor-pointer hover:underline flex justify-center font-inter text-xs md:text-base p-2 text-[#5F6473] "
                onClick={() => {
                  navigate.push("drift-collections/product-1");
                }}
              >
                Drift Solace
              </button>
            </div>
            <div>
              <div className="w-[160px] h-[200px] md:w-full md:h-[450px] relative">
                <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
              </div>
              <p className="flex justify-center font-inter text-xs md:text-base p-2  text-[#5F6473] ">
                Drift Solace
              </p>
            </div>
            <div>
              <div className="w-[160px] h-[200px] md:w-full md:h-[450px] relative">
                <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
              </div>
              <p className="flex justify-center font-inter text-xs md:text-base p-2  text-[#5F6473] ">
                Drift Solace
              </p>
            </div>
            <div>
              <div className="w-[160px] h-[200px] md:w-full md:h-[450px] relative">
                <Image fill={true} src="/assets/sneaker1.png" alt="sneaker-image" />
              </div>
              <p className="flex justify-center font-inter text-xs md:text-base p-2  text-[#5F6473] ">
                Drift Solace
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
