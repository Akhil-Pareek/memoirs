"use client";
import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const pathName = usePathname();
  const [state, setState] = useState({
    isOpen: false,
    hasScrolled: false,
  });
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/our-work", label: "OUR WORK" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/contact-us", label: "CONTACT US" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setState((prev) => ({
        ...prev,
        hasScrolled: scrolled,
      }));
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`text-sm text-darkMutedRed backdrop-blur-md shadow-sm font-cormorant z-50 w-full md:py-3 space-y-5 flex justify-center lg:gap-10 items-center transition-all duration-300 
          ${
            isScrolled
              ? "animate-movenav w-full bg-warmGray/20 duration-700 top-0 h-fit fixed"
              : "absolute mx-auto"
          }
        `}
      >
        <div className="hidden md:block">
          <div className="flex gap-12 mt-5">
            {navLinks.slice(0, 2).map((link, index) => (
              <Link
                key={index}
                href={link?.href}
                className={`${
                  pathName === link?.href ? "border-b border-darkMutedRed" : ""
                }`}
              >
                {link?.label}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/" className="hidden md:block">
          <Image
            alt="logo"
            src={AppAssets?.newLogo}
            width={1000}
            height={1000}
            className="w-[30%] lg:w-[45%] xl:w-[40%] mt-2 md:mx-auto"
          />
        </Link>

        <div className="hidden md:block">
          <div className="flex gap-12">
            {navLinks.slice(-2).map((link, index) => (
              <Link
                key={index}
                href={link?.href}
                className={`${
                  pathName === link?.href ? "border-b border-darkMutedRed" : ""
                }`}
              >
                {link?.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <MobileHeader
        isOpen={state.isOpen}
        setIsOpen={(value) => setState((prev) => ({ ...prev, isOpen: value }))}
        isScrolled={state.hasScrolled}
        menuItems={navLinks}
      />
    </>
  );
}
