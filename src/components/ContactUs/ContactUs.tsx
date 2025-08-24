import { AppAssets } from "@/constants/AppAssets";
import Link from "next/link";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaPhoneVolume, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import Banner from "../common/Banner";
import LeadGeneration from "./LeadGeneration";

export default function ContactUs() {
  const contactDetails = [
    {
      label: "Our Location",
      icon: <IoLocationSharp className="w-5 h-5 text-primaryGolden" />,
      values: [
        {
          text: "Memoirs Photography R-9, Triambatul Apartment, Basement Yudhister Marg, C-Scheme Ashok Nagar, Jaipur, Rajasthan – 302001",
          href: "https://www.google.com/maps/search/?api=1&query=Memoirs+Photography,+Basement,R,+Triambatul+apartment+9,+Yudhister+Marg,+C+Scheme,+Ashok+Nagar,+Jaipur,+Rajasthan+302001",
        },
      ],
    },
    {
      label: "Our Phone",
      icon: (
        <FaPhoneVolume className="rotate-[210deg] w-5 h-5 text-primaryGolden" />
      ),
      values: [
        { text: "+91 9024577771", href: "tel:+919024577771" },
        { text: "+91 8824388884", href: "tel:+918824388884" },
      ],
    },
    {
      label: "Our Email",
      icon: <IoMdMail className="w-5 h-5 text-primaryGolden" />,
      values: [
        {
          text: "memoirsjaipur@gamil.com",
          href: "mailto:memoirsjaipur@gamil.com",
        },
      ],
    },
    {
      label: "Connect with us",
      icon: <BiSolidUserCircle className="w-5 h-5 text-primaryGolden" />,
      values: [
        {
          icon: <PiInstagramLogoFill className="w-5 h-5" />,
          url: "http://instagram.com/memoirs_jaipur/?hl=en",
          name: "Instagram",
          className: "text-primaryGolden hover:text-red-500 ",
        },
        {
          icon: <FaYoutube className="w-5 h-5" />,
          url: "https://www.youtube.com/@memoirs_photography",
          name: "Youtube",
          className: "text-primaryGolden hover:text-red-500",
        },
        {
          icon: <TbBrandWhatsappFilled className="w-5 h-5" />,
          url: "https://wa.me/9024577771?text=Hello%20Akshay%2C%20I%20came%20across%20your%20work%20and%20I%E2%80%99m%20interested%20in%20your%20services.%20Could%20you%20please%20share%20more%20information%3F",
          name: "WhatsApp",
          className: "text-primaryGolden hover:text-green-500",
        },
      ],
    },
  ];

  return (
    <section className="font-cormorant bg-warmGray text-darkMutedRed">
      <Banner srcUrl={AppAssets?.contactUsBanner} />
      <div className="max-w-5xl 4xl:max-w-7xl mx-auto px-4 sm:px-6 py-20 space-y-20">
        <section className="font-cormorant">
          {/* Left content */}
          <div>
            <h4 className="text-lg  font-semibold mb-2">We’re Here to Help</h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold mb-4">
              Have Questions? We'd Love to Hear from You
            </h2>
            <p className=" text-base 4xl:text-2xl mb-6">
              Every love story is special, and we're honored to be a part of
              yours. Whether you’re ready to book or simply exploring, feel free
              to reach out — we're here to assist with warmth and care.
            </p>
          </div>

          {/* Right: Contact Cards */}
          <div className=" grid md:grid-cols-2 gap-3 md:gap-5">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start w-full shadow-full border-b border-primaryGolden bg-white rounded-lg p-3"
              >
                <div className="p-2  bg-warmGray rounded-full">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.label}
                  </h4>
                  <div className="text-sm 4xl:text-xl text-gray-600 space-y-2">
                    {/* Check if it's social links */}
                    {item.label === "Connect with us" ? (
                      <div className="flex gap-5">
                        {item.values.map((val: any, i) => (
                          <Link
                            key={i}
                            href={val.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-full transition-transform duration-300 transform"
                          >
                            <p
                              className={`group-hover:scale-125 transition-all duration-300 ${val.className}`}
                            >
                              {" "}
                              {val.icon}
                            </p>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      item.values.map((val: any, i) => (
                        <div key={i}>
                          {val.href ? (
                            <Link
                              href={val.href}
                              className="text-primaryGolden hover:text-yellow-600 transition-colors "
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.text}
                            </Link>
                          ) : (
                            val.text
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className=" text-black">
          <div className="max-w-4xl 4xl:max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-2">
              We can’t wait for you to let us in on your love stories.
            </h2>
            <p className="italic text-base sm:text-lg 4xl:text-2xl mb-2">
              Award winning wedding photographer & videographer near you.
            </p>
            <p className="text-sm sm:text-base 4xl:text-2xl text-gray-600">
              Might sound cliché, but we adore love stories and would be
              honoured to be a part of yours! All you have to do is drop us a
              hey...
            </p>
          </div>
          <LeadGeneration />
        </section>
      </div>
    </section>
  );
}
