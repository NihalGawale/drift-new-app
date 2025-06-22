"use client";

import { contactLeftConstants, navBarItems } from "@/app/utils/constants";
import { FacebookIcon, InstagramIcon, TermsPolicyDot, TwitterIcon } from "@/app/utils/icons";
import Image from "next/image";
import React from "react";

const rightsReserved = "Copyright 2025 © Drift, All Rights Reserved";
function Footer() {
  return (
    <div className="w-full h-[460px] bg-[#F8F5F0] flex justify-center items-center text-[#5F6473] font-inter">
      <div className="w-[80%] h-[80%] ">
        <div className="h-[80%] flex justify-between border-b-1 border-[#5F6473]">
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
          <div className="w-1/3 h-full text-lg flex justify-center">
            <div className="flex flex-col gap-y-5">
              {navBarItems.map((item) => (
                <div key={item.id}>{item.value}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-[20%] flex items-center tracking-normal text-xs">
          <div className="w-1/3">{rightsReserved}</div>
          <div className="w-1/3 flex flex-col md:flex-row items-center md:gap-x-10 justify-center">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
          <div className="w-1/3 flex items-center justify-end gap-x-2 font-medium tracking-normal">
            Terms & Conditions <TermsPolicyDot /> Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
