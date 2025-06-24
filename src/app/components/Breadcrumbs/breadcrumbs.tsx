"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return { label, href };
  });

  return (
    <nav
      aria-label="breadcrumb"
      className=" text-[#4B4B4B]  text-xs md:text-sm flex items-center flex-wrap gap-1 md:gap-3 pr-4 py-2 tracking-wide font-inter"
    >
      <Link href="/" className="font-semibold text-black hover:underline">
        Home
      </Link>
      {breadcrumbs.map((crumb, index) => (
        <span key={crumb.href} className="flex items-center gap-1 md:gap-3">
          <span className="text-xl text-[#5F6473]">•</span>
          {index === breadcrumbs.length - 1 ? (
            <span>{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="font-medium text-[#1A1A1A] hover:underline">
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
