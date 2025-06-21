"use client";

import React, { useEffect, useState } from "react";
import { SignUpButton } from "@/app/ui/button";
import { MenuIcon, WhiteMenuIcon } from "@/app/utils/icons";
import Image from "next/image";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 1450); // adjust 800 to your hero height
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="navbar" className="w-full h-20 z-10 flex justify-center fixed">
      <div className="w-[90%] h-full flex justify-between items-center">
        <div>{scrolled ? <MenuIcon /> : <WhiteMenuIcon />}</div>
        <div className="w-24 h-20 relative ml-[103px]">
          <Image
            src={scrolled ? "/assets/brand-logo.png" : "/assets/brand-logo-white.png"}
            fill={true}
            alt="drift-brand-logo"
          />
        </div>
        <div className="flex gap-x-5">
          <button className="text-sm">Login</button>
          <SignUpButton scrolled={scrolled} buttonText="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
