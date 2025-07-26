"use client";
import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface IMobileHeader {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  menuItems: any;
  isScrolled?: any;
}

export default function MobileHeader({
  isOpen,
  setIsOpen,
  menuItems,
  isScrolled,
}: IMobileHeader) {
  return (
    <div
      className={`lg:hidden block font-cormorant  fixed z-[990] px-5 lg:px-11  w-full  h-20
    ${
      isScrolled ? "bg-warmGray/20 backdrop-blur-md  shadow-sm " : "bg-warmGray/20 backdrop-blur-md"
    }`}
    >
      {/* Hamburger Menu */}
      <div className="flex justify-between h-full items-center ">
        <Link href="/">
          <Image
            alt="logo"
            src={AppAssets?.newLogo}
            width={1000}
            height={1000}
            className="w-[30%] lg:mx-auto"
          />
        </Link>
        <div
          className="flex flex-col gap-1 z-20  top-5 right-10 
              items-center justify-center w-10 h-10 cursor-pointer rounded-md transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* First Bar */}
          <span
            className={`block h-1 w-6   bg-[#d1192e] rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          {/* Middle Bar */}
          <span
            className={`block h-1 w-6 rounded  bg-[#d1192e] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          {/* Last Bar */}
          <span
            className={`block h-1 w-6 rounded bg-[#d1192e] transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* side bar */}
      <div
        className={` mt-2  w-full  bg-warmGray text-darkMutedRed  backdrop-blur-md   rounded-lg 
              transition-all duration-500 ease-in-out transform ${
                isOpen ? "translate-y-0" : "-translate-y-[600px] "
              }
              
         `}
      >
        <nav className="flex gap-6 flex-col p-4 ">
          {menuItems.map((item: any, index: number) => (
            <div key={index} className="relative py-2">
              <Link
                href={item?.href}
                className="flex gap-2 items-center  w-fit font-bold text-lg   text-left"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {item?.label}
                {item?.icon}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
