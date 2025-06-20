import { MenuIcon } from "@/app/utils/icons";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-20 fixed  flex justify-center">
      <div className="w-[90%] h-full flex justify-between items-center">
        <div>
          <MenuIcon />
        </div>
        <div className="w-20 h-16 relative ml-24">
          <Image src="/assets/brand-logo.webp" fill={true} alt="drift-brand-logo" />
        </div>
        <div className="text-base"></div>
      </div>
    </div>
  );
};

export default NavBar;
