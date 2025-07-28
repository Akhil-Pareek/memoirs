"use client";
import Banner from "@/components/Banner";
import Button from "@/components/common/Button";
import TextBox from "@/components/common/TextBox";
import { AppAssets } from "@/constants/AppAssets";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaPhoneVolume, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp, IoLogoWhatsapp } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import * as Yup from "yup";

export default function page() {
  const contactDetails = [
    {
      label: "Our Location",
      icon: <IoLocationSharp className="w-5 h-5 text-primaryGolden" />,
      values: [
        {
          text: "  Memoirs Photography, Basement, R, Triambatul apartment 9,              Yudhister Marg, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302001",
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
          icon: <PiInstagramLogoFill className="w-4 h-4" />,
          url: "http://instagram.com/memoirs_jaipur/?hl=en",
          name: "Instagram",
          className: "text-primaryGolden hover:text-red-500 ",
        },
        {
          icon: <FaYoutube className="w-4 h-4" />,
          url: "https://www.youtube.com/@memoirs_photography",
          name: "Youtube",
          className: "text-primaryGolden hover:text-red-500",
        },
        {
          icon: <IoLogoWhatsapp className="w-4 h-4" />,
          url: "https://wa.me/9024577771?text=Hello%20Akshay%2C%20I%20came%20across%20your%20work%20and%20I%E2%80%99m%20interested%20in%20your%20services.%20Could%20you%20please%20share%20more%20information%3F",
          name: "WhatsApp",
          className: "text-primaryGolden hover:text-green-500",
        },
      ],
    },
  ];

  const leadGenerate = [
    {
      id: "firstName",
      type: "text",
      placeholder: "First Name *",
    },
    {
      id: "lastName",
      type: "text",
      placeholder: "Last Name *",
    },
    {
      id: "email",
      type: "email",
      placeholder: "Email *",
    },
    {
      id: "phone",
      type: "phone",
      placeholder: "Phone no *",
    },
    {
      id: "estimateCount",
      type: "text",
      placeholder: "Estimate Guest Count *",
    },
    {
      id: "location",
      type: "text",
      placeholder: "Location of the wedding *",
    },
    {
      id: "dates",
      type: "text",
      placeholder: "Event Dates *",
    },
    {
      id: "tellUs",
      type: "text",
      placeholder: "Tell us more about your wedding event flow venues *",
    },
  ];

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const contactUsSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .required("Required")
      .matches(emailRegex, "Invalid email"),
    phone: Yup.string().required("Required"),
    estimateCount: Yup.string().required("Required"),
    tellUs: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    dates: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      estimateCount: "",
      tellUs: "",
      location: "",
      dates: "",
      error: "",
    },
    validationSchema: contactUsSchema,
    onSubmit: async (values, { resetForm }) => {
      // Convert file to Base64 before sending
      console.log("values", values);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values }),
        });

        if (response.ok) {
          const result = await response.json();
          // setPopup({
          //   type: "success",
          //   message: "Submission Successful",
          //   description: result.message,
          // });
          resetForm();
        } else {
          throw response;
        }
      } catch (error: any) {
        // setPopup({
        //   type: "error",
        //   message: "Submission Failed",
        //   description: error.statusText,
        // });
      }
    },
  });
  return (
    <div className="font-cormorant bg-[#f3eae4] text-darkMutedRed">
    {/* <div className="font-cormorant bg-warmGray/50 text-darkMutedRed"> */}
      <Banner srcUrl={AppAssets?.contactUsBanner} bannerLabel="Contact Us" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 space-y-20">
        <section className="font-cormorant">
          {/* Left content */}
          <div>
            <h4 className="text-lg  font-semibold mb-2">We’re Here to Help</h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold mb-4">
              Have Questions? We'd Love to Hear from You
            </h2>
            <p className=" text-base mb-6">
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
                className="flex gap-4 items-start w-full shadow-full border-b border-primaryGolden bg-white rounded-lg p-3 h-fit"
              >
                <div className="p-2  bg-[#f3eae4] rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.label}
                  </h4>
                  <div className="text-sm text-gray-600 space-y-2">
                    {/* Check if it's social links */}
                    {item.label === "Connect with us" ? (
                      <div className="flex gap-3">
                        {item.values.map((val: any, i) => (
                          <Link
                            key={i}
                            href={val.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-1 border group rounded-full transition-transform duration-300 transform  `}
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
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-2">
              We can’t wait for you to let us in on your love stories.
            </h2>
            <p className="italic text-base sm:text-lg mb-2">
              Award winning wedding photographer & videographer near you.
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Might sound cliché, but we adore love stories and would be
              honoured to be a part of yours! All you have to do is drop us a
              hey...
            </p>
          </div>
          <div className="h-full relative flex flex-col md:flex-row items-center shadow-full rounded-lg bg-white overflow-hidden ">
            <div className="h-full lg:w-1/2">
              <Image
                alt="form image"
                src={AppAssets?.formImage}
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-8 overflow-y-scroll hide-scrollbar w-full h-full lg:w-1/2 p-3 xl:p-5 absolute md:static bg-white/10 rounded-md text-white backdrop-blur-md xl:bg-white"
            >
              <div className="space-y-5 grid md:grid-cols-2 lg:grid-cols-1 md:gap-x-2">
                {leadGenerate.map(
                  ({ id, type, placeholder }: any, index: any) => (
                    <TextBox
                      disabled={formik.isSubmitting}
                      key={index}
                      id={id}
                      formik={formik}
                      type={type === "Email" ? "email" : "text"}
                      placeholder={placeholder}
                      input_className="text-sm text-white md:text-darkMutedRed font-medium"
                      className="w-full  p-3 border-b border-white md:border-primaryGolden rounded-md"
                    />
                  )
                )}
              </div>
              <Button
                loaderType="white-loader"
                loading={formik.isSubmitting}
                disabled={formik.isSubmitting}
                text="Submit"
                className="text-left bg-white text-primaryGolden md:bg-primaryGolden md:text-white cursor-pointer  w-full md:w-fit px-20  rounded-sm"
              />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
