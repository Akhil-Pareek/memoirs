import { AppAssets } from "@/constants/AppAssets";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Footer() {
  const socialIcons = [
    {
      icon: <PiInstagramLogoFill />,
      url: "http://instagram.com/memoirs_jaipur/?hl=en",
      name: "Instagram",
      className: " hover:text-red-300 h-8 w-8",
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@memoirs_photography",
      name: "Instagram",
      className: " hover:text-red-300 h-8 w-8",
    },
  ];
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/our-work", label: "OUR WORK" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/contact-us", label: "CONTACT US" },
  ];
  return (
    <footer className="bg-black text-white py-16 space-y-10 font-cormorant">
      <Image
        alt="logo"
        src={AppAssets?.whiteLogo}
        width={1000}
        height={1000}
        className=" w-[50%] md:w-1/4 xl:w-[15%] mx-auto"
      />
      <div className=" flex flex-wrap lg:flex-nowrap justify-between lg:justify-center gap-10 md:w-[80%] mx-auto ">
        {/* Contact Info */}
        <div className="lg:w-[33%] p-5 space-y-8">
          <div className="flex items-center">
            <span className="mr-2">
              <IoMail />
            </span>
            <Link href="mailto:memoirsjaipur@gamil.com" className="text-sm">
              memoirsjaipur@gamil.com
            </Link>
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              <FaPhone />
            </span>
            <Link href="tel:9024577771" className="text-sm">
              9024577771
            </Link>
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              <FaPhone />
            </span>
            <Link href="tel:8824388884" className="text-sm">
              8824388884
            </Link>
          </div>

          <div className="flex items-start">
            <span className="mr-2 mt-1">
              <FaLocationDot />
            </span>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=Memoirs+Photography,+Basement,R,+Triambatul+apartment+9,+Yudhister+Marg,+C+Scheme,+Ashok+Nagar,+Jaipur,+Rajasthan+302001"
              target="_blank"
              className="text-sm"
            >
              Memoirs Photography, Basement, R, Triambatul apartment 9,
              Yudhister Marg, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302001
            </Link>
          </div>
        </div>

        {/* Pages */}
        <div className="   w-full md:w-[40%] lg:w-[33%] border-gray-600 md:border-r lg:border-l md:text-center p-5 space-y-5">
          <h4 className="text-lg font-semibold ">Pages</h4>
          <ul className="space-y-3">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link href={item?.href} className="hover:underline">
                  {item?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-[50%] lg:w-[33%] p-5">
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="w-full p-2 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-black py-2 hover:bg-gray-200 transition"
            >
              Submit
            </button>
          </form>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2 uppercase tracking-widest">
              Follow Us
            </h4>
            <div className="flex items-center gap-4 mt-3  justify-start">
              {socialIcons.map((item: any, index: number) => (
                <Link
                  target="_blank"
                  key={index}
                  href={item?.url}
                  className={`text-gray-300  hover:scale-125 cursor-pointer transition-all duration-500 ${item?.className} `}
                >
                  {item?.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
