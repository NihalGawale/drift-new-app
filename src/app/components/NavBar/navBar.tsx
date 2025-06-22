"use client";

import React, { useEffect, useState } from "react";
import { SignUpButton } from "@/app/ui/button";
import { MenuIcon, WhiteMenuIcon } from "@/app/utils/icons";
import Image from "next/image";

const NavBar = () => {
  const [scrolled, setScrolled] = useState({
    isScrolled: false,
    scrolledValue: 0,
  });
  const [hideNavBar, setHideNavBar] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideNavBar(true); // Scrolling down
      } else {
        setHideNavBar(false); // Scrolling up
      }

      // Change logo after hero section (e.g., 800px)
      setScrolled({ isScrolled: currentScrollY > 800, scrolledValue: currentScrollY });

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navbar"
      className={` ${
        hideNavBar ? "-translate-y-full" : "translate-y-0 backdrop-blur-[5px]"
      } ${scrolled?.scrolledValue < 300 && "backdrop-blur-none"}  w-full h-20 z-20 flex md:justify-center fixed`}
    >
      <div className={`w-[50%] ml-10 md:ml-0 md:w-[90%] h-full flex justify-between items-center`}>
        <div className="">{scrolled?.scrolledValue > 800 ? <MenuIcon /> : <WhiteMenuIcon />}</div>
        <div className="w-24 h-20 relative md:ml-[103px]">
          <Image
            src={
              scrolled?.scrolledValue > 800
                ? "/assets/brand-logo.png"
                : "/assets/brand-logo-white.png"
            }
            fill={true}
            alt="drift-brand-logo"
          />
        </div>
        <div className="hidden md:flex gap-x-5">
          <button className="text-sm">Login</button>
          <SignUpButton scrolled={scrolled} buttonText="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
