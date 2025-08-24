"use client";
import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IMobileHeader {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  menuItems: { href: string; label: string; icon?: React.ReactNode }[];
  isScrolled?: boolean;
}

export default function MobileHeader({
  isOpen,
  setIsOpen,
  menuItems,
  isScrolled,
}: IMobileHeader) {
  const pathName = usePathname();

  return (
    <header
      className={`md:hidden block font-cormorant fixed z-[990] px-5 lg:px-11 w-full h-20
        ${
          isScrolled
            ? "bg-warmGray/20 backdrop-blur-md shadow-sm"
            : "bg-warmGray/20 backdrop-blur-md"
        }`}
      role="banner"
    >
      {/* Top bar with logo + hamburger */}
      <div className="flex justify-between h-full items-center">
        <Link href="/" aria-label="Go to homepage">
          <Image
            alt="Site logo"
            src={AppAssets?.newLogo}
            width={1000}
            height={1000}
            className="w-[30%] lg:mx-auto"
            priority
          />
        </Link>

        {/* Hamburger button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1 z-20 items-center justify-center w-10 h-10 cursor-pointer rounded-md transition-all duration-300"
        >
          <span
            className={`block h-1 w-6 bg-scarletRed rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-scarletRed rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-scarletRed rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile nav menu */}
      <nav
        className={`mt-2 w-full bg-warmGray text-darkMutedRed backdrop-blur-md rounded-lg transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-[600px]"
        }`}
        role="navigation"
        aria-label="Mobile menu"
      >
        <ul className="flex gap-6 flex-col p-4">
          {menuItems.map((item, index) => (
            <li key={index} className="relative py-2">
              <Link
                href={item?.href}
                className={`flex gap-2 items-center w-fit font-bold text-lg text-left ${
                  pathName === item?.href ? "border-b border-darkMutedRed" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item?.label}
                {item?.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
