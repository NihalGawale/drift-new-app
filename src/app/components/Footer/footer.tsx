"use client";

import useIsMobile from "@/app/hooks/useMobile";
import { contactLeftConstants } from "@/app/utils/constants";
import { FacebookIcon, InstagramIcon, TermsPolicyDot, TwitterIcon } from "@/app/components/icons";
import Image from "next/image";
import React from "react";

const rightsReserved = "Copyright 2025 © Drift, All Rights Reserved";
function Footer() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full h-auto py-8 md:py-12 bg-[#F8F5F0] flex justify-center items-center text-[#5F6473] font-inter">
      <div className="w-[80%] h-[80%] ">
        <div className="h-[80%] pb-10 flex justify-between border-b-1 border-[#5F6473]">
          {!isMobile ? (
            <>
              <div className="w-1/3 h-full">
                <div className="w-[220px] h-[40px] relative">
                  <Image
                    src="/assets/brand-full-logo-antiqueGold.png"
                    alt="drift-brand-logo"
                    fill={true}
                  />
                </div>
              </div>
              <div className="w-1/3 h-full">
                <div className="flex justify-center">
                  <div className="flex flex-col gap-y-8 max-w-[70%] text-base tracking-normal">
                    {contactLeftConstants.map((item) => (
                      <div key={item.key} className="flex gap-x-3 text-sm">
                        <div className="mt-0.5">{item.icon}</div>
                        <div>{item.contact}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="w-1/3 h-full text-lg flex justify-center">
                <div className="flex flex-col gap-y-5">
                  {navBarItems.map((item) => (
                    <div key={item.id}>{item.value}</div>
                  ))}
                </div>
              </div> */}
            </>
          ) : (
            <div className="flex flex-col gap-y-10">
              <div className="w-[130px] h-[24px] relative">
                <Image
                  src="/assets/brand-full-logo-antiqueGold.png"
                  alt="drift-brand-logo"
                  fill={true}
                />
              </div>
              <div className="flex">
                <div className="flex flex-col gap-y-4 max-w-[70%] text-base tracking-normal">
                  {contactLeftConstants.map((item) => (
                    <div key={item.key} className="flex gap-x-3 text-sm">
                      <div className="mt-0.5">{item.icon}</div>
                      <div>{item.contact}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-full h-[20%] md:mt-6 flex md:items-center tracking-normal text-xs">
          {!isMobile ? (
            <>
              <div className="w-1/3">{rightsReserved}</div>
              <div className="w-1/3 flex flex-col md:flex-row items-center md:gap-x-10 justify-center">
                <FacebookIcon width="14" height="24" />
                <InstagramIcon width="24" height="24" />
                <TwitterIcon width="24" height="24" />
              </div>
              <div className="w-1/3 flex items-center justify-end gap-x-2 font-medium tracking-normal">
                Terms & Conditions <TermsPolicyDot /> Privacy Policy
              </div>
            </>
          ) : (
            <div className="my-5 flex flex-col gap-y-4">
              <div className="flex flex-row items-center gap-x-10">
                <FacebookIcon width="10" height="20" />
                <InstagramIcon width="18" height="18" />
                <TwitterIcon width="18" height="18" />
              </div>
              <div className="">{rightsReserved}</div>
              <div className=" flex items-center gap-x-2 tracking-normal">
                Terms & Conditions <TermsPolicyDot /> Privacy Policy
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
