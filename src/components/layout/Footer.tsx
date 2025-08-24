"use client";
import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhone, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMail } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Footer() {
  const pathName = usePathname();

  const socialIcons = [
    {
      icon: <PiInstagramLogoFill className="w-5 h-5" />,
      url: "http://instagram.com/memoirs_jaipur/?hl=en",
      name: "Instagram",
      className: " hover:text-red-500 h-8 w-8",
    },
    {
      icon: <FaYoutube className="w-5 h-5" />,
      url: "https://www.youtube.com/@memoirs_photography",
      name: "Youtube",
      className: " hover:text-red-500 h-8 w-8",
    },
    {
      icon: <IoLogoWhatsapp className="w-5 h-5" />,
      url: "https://wa.me/9024577771?text=Hello%20Akshay%2C%20I%20came%20across%20your%20work%20and%20I%E2%80%99m%20interested%20in%20your%20services.%20Could%20you%20please%20share%20more%20information%3F",
      name: "WhatsApp",
      className: "hover:text-green-500 h-8 w-8",
    },
  ];

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/our-work", label: "OUR WORK" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/contact-us", label: "CONTACT US" },
  ];

  const contactItems = [
    {
      icon: <IoMail />,
      href: "mailto:memoirsjaipur@gmail.com", // gmail spelling fix
      text: "memoirsjaipur@gmail.com",
    },
    {
      icon: <FaPhone />,
      href: "tel:9024577771",
      text: "9024577771",
    },
    {
      icon: <FaPhone />,
      href: "tel:8824388884",
      text: "8824388884",
    },
    {
      icon: <FaLocationDot />,
      href: "https://www.google.com/maps/search/?api=1&query=Memoirs+Photography,+Basement,R,+Triambatul+apartment+9,+Yudhister+Marg,+C+Scheme,+Ashok+Nagar,+Jaipur,+Rajasthan+302001",
      text: "Memoirs Photography R-9, Triambatul Apartment, Basement Yudhister Marg, C-Scheme Ashok Nagar, Jaipur, Rajasthan – 302001",
      external: true,
    },
  ];

  return (
    <footer className="bg-black text-white py-16 space-y-10 font-cormorant">
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          alt="Memoirs Photography Logo"
          src={AppAssets?.newLogo}
          width={1000}
          height={1000}
          className="w-[50%] md:w-1/4 xl:w-[15%] mx-auto"
          priority
        />
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between lg:justify-center gap-10 md:w-[80%] mx-auto">
        {/* Contact Info */}
        <address className="lg:w-[33%] p-5 space-y-8 not-italic">
          <p className="sr-only">Contact Information</p>

          {contactItems.map((item, index) => (
            <div
              key={index}
              className={`flex ${
                item.icon?.type === FaLocationDot
                  ? "items-start"
                  : "items-center"
              }`}
            >
              <span className="mr-2 mt-1">{item.icon}</span>
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                className="text-sm 4xl:text-lg"
                aria-label={item.text}
              >
                {item.text}
              </Link>
            </div>
          ))}
        </address>

        {/* Pages Navigation */}
        <nav
          className="w-full md:w-[40%] lg:w-[33%] border-gray-600 md:border-r lg:border-l md:text-center p-5 space-y-5"
          aria-label="Footer Navigation"
        >
          <p className="text-lg font-semibold">Pages</p>
          <ul className="space-y-3">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item?.href}
                  className={`${
                    pathName === item?.href ? " text-red-500" : ""
                  }`}
                >
                  {item?.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media */}
        <section className="w-full md:w-[50%] lg:w-[33%] p-5">
          <p className="text-lg font-semibold mb-2 uppercase tracking-widest">
            Follow Us
          </p>
          <div className="flex items-center gap-4 mt-3 justify-start">
            {socialIcons.map((item, index) => (
              <Link
                target="_blank"
                key={index}
                href={item?.url}
                aria-label={`Visit our ${item?.name} page`}
                className={`text-gray-300 hover:scale-125 cursor-pointer transition-all duration-500 ${item?.className}`}
              >
                {item?.icon}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
