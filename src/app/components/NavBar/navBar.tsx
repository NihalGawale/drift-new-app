"use client";

import React, { useEffect, useState } from "react";
import { SignUpButton } from "@/app/components/ui/button";
import { MenuIcon, WhiteMenuIcon } from "@/app/components/icons";
import Image from "next/image";
import SideBar from "../SideBar/sidebar";
import useIsMobile from "@/app/hooks/useMobile";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [scrolled, setScrolled] = useState({
    isScrolled: false,
    scrolledValue: 0,
  });
  const [hideNavBar, setHideNavBar] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const isMobile = useIsMobile();
  const pathname = usePathname();

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

  const showBrandLogo = () => {
    if (pathname === "/") {
      return scrolled?.scrolledValue > 800
        ? "/assets/brand-logo.png"
        : "/assets/brand-logo-white.png";
    } else {
      return "/assets/brand-logo.png";
    }
  };

  const showMenuIcon = () => {
    if (pathname === "/") {
      return scrolled?.scrolledValue > 800 ? <MenuIcon /> : <WhiteMenuIcon />;
    } else {
      return <MenuIcon />;
    }
  };
  return (
    <>
      <div
        id="navbar"
        className={` ${
          hideNavBar ? "-translate-y-full" : "translate-y-0 backdrop-blur-[5px]"
        } ${scrolled?.scrolledValue < 300 && "backdrop-blur-none"}  w-full h-20 z-20 flex md:justify-center fixed`}
      >
        <div className={`w-[53%] ml-5 md:ml-0 md:w-[90%] h-full flex justify-between items-center`}>
          <button className="cursor-pointer" onClick={() => setOpenSideBar(!openSideBar)}>
            {showMenuIcon()}
          </button>
          <div className={`${isMobile ? "w-16 h-8" : " w-20 h-10 "} relative md:ml-[103px]`}>
            <Image src={showBrandLogo()} fill={true} alt="drift-brand-logo" />
          </div>
          <div className="hidden md:flex gap-x-5">
            <button className="text-sm">Login</button>
            <SignUpButton pathname={pathname} scrolled={scrolled} buttonText="Sign Up" />
          </div>
        </div>
      </div>

      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
    </>
  );
};

export default NavBar;
