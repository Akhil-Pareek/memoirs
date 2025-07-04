"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import MobileHeader from "./MobileHeader";
import Image from "next/image";
import { AppAssets } from "@/constants/AppAssets";

export default function Header() {
  const [state, setState] = useState({
    isOpen: false,
    hasScrolled: false,
  });

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/our-story", label: "OUR STORY" },
    { href: "/our-work", label: "OUR WORK" },
    { href: "/wedding-tales", label: "WEDDING TALES" },
    { href: "/contact-us", label: "CONTACT US" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setState((prev) => ({
        ...prev,
        hasScrolled: window.scrollY > 10,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`text-sm text-white font-cormorant fixed z-50 w-full md:py-3 space-y-5 flex flex-col lg:items-center transition-all duration-300 ${
          state.hasScrolled
            ? "bg-white/20 backdrop-blur-md  shadow-sm"
            : "bg-transparent"
        }`}
      >
        <Link href="/" className="hidden xl:block">
          <Image
            alt="logo"
            src={AppAssets?.whiteLogo}
            width={1000}
            height={1000}
            className="w-[30%] lg:w-[70%] lg:mx-auto"
          />
        </Link>

        <div className="hidden xl:block">
          <div className="flex gap-12">
            {navLinks.map((link, index) => (
              <Link key={index} href={link?.href}>
                {link?.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <MobileHeader
        isOpen={state.isOpen}
        setIsOpen={(value) =>
          setState((prev) => ({ ...prev, isOpen: value }))
        }
          isScrolled={state.hasScrolled}
        menuItems={navLinks}
      />
    </>
  );
}
