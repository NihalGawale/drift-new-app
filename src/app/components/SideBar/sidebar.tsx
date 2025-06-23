import React from "react";
import { CancelIcon, ChevronRightIcon } from "../icons";
import Image from "next/image";
import useIsMobile from "@/app/hooks/useMobile";

interface SidebarProps {
  openSideBar: boolean;
  setOpenSideBar: (value: boolean) => void;
}

export default function SideBar({ openSideBar, setOpenSideBar }: SidebarProps) {
  const isMobile = useIsMobile();
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-2/3 md:w-[500px] bg-white text-[#C4A77D] z-40 transform ${
          openSideBar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-xl`}
      >
        <div className="h-auto md:py-4 md:px-16 mt-10 flex flex-col gap-y-6">
          <div className="flex items-center justify-center md:px-4 md:py-3 relative">
            <button
              className="cursor-pointer absolute left-4 top-0.5"
              onClick={() => setOpenSideBar(false)}
            >
              <CancelIcon />
            </button>
            <div className={`${isMobile ? "w-12 h-6" : " w-20 h-10 "} relative`}>
              <Image src="/assets/brand-logo.png" alt="Logo" className="h-6" fill />
            </div>
          </div>

          <ul className="py-4 px-10 space-y-4 text-base md:text-lg font-inter">
            {["Products", "Our Story", "FAQ's", "Cart", "My Orders", "Contact Us"].map((item) => (
              <li
                key={item}
                className="flex justify-between items-center cursor-pointer hover:text-[#1A1A1A]"
              >
                <span>{item}</span>
                <ChevronRightIcon />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop */}
      {openSideBar && (
        <div className="fixed inset-0 bg-black/30 z-30" onClick={() => setOpenSideBar(false)} />
      )}
    </>
  );
}
