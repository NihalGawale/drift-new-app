import React from "react";
import { CancelIcon, ChevronRightIcon } from "../icons";
import Image from "next/image";
import useIsMobile from "@/app/hooks/useMobile";

interface SidebarProps {
  openSideBar: boolean;
  setOpenSideBar: (value: boolean) => void;
}

interface sidebarOptionsListType {
  id: string;
  value: string;
}

const sidebarOptionsList = [
  { id: "product-1", value: "Products" },
  { id: "our-story", value: "Our Story" },
  { id: "faq", value: "FAQ's" },
  { id: "cart", value: "Cart" },
  { id: "my-orders", value: "My Orders" },
  { id: "contact-us", value: "Contact Us" },
];

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
              className="cursor-pointer absolute left-4 md:left-0  top-0.5 md:top-3.5"
              onClick={() => setOpenSideBar(false)}
            >
              <CancelIcon />
            </button>
            <div className={`${isMobile ? "w-12 h-6" : " w-16 h-8 "} relative`}>
              <Image src="/assets/brand-logo.png" alt="Logo" className="h-6" fill />
            </div>
          </div>

          <ul className="py-4 px-10 space-y-4 text-base md:text-lg font-inter">
            {sidebarOptionsList.map((item: sidebarOptionsListType) => (
              <li
                key={item?.id}
                className="flex justify-between items-center cursor-pointer hover:text-[#1A1A1A]"
              >
                <span>{item?.value}</span>
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
