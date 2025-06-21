import { SignUpButton } from "@/app/ui/button";
import { MenuIcon } from "@/app/utils/icons";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-20 z-10 flex justify-center fixed">
      <div className="w-[90%] h-full flex justify-between items-center">
        <div>
          <MenuIcon />
        </div>
        <div className="w-24 h-20 relative ml-[103px]">
          <Image src="/assets/brand-logo.png" fill={true} alt="drift-brand-logo" />
        </div>
        <div className="flex gap-x-5">
          <button className="text-sm">Login</button>
          <SignUpButton buttonText="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
