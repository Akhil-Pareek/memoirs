"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../common/Button";
import { MdArrowOutward } from "react-icons/md";
import TextBox from "../common/TextBox";

export default function Booking() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      address: "",
      notes: "",
      error: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      date: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      notes: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      // Convert file to Base64 before sending
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values }),
        });

        if (response.ok) {
          // const result = await response.json();
          // setPopup({
          //   type: "success",
          //   message: "Submission Successful",
          //   description: result.message,
          // });
          // resetForm();
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

  const booking = [
    {
      id: "name",
      type: "name",
      placeholder: "NAME",
    },
    {
      id: "email",
      type: "email",
      placeholder: "E-MAIL",
    },
    {
      id: "date",
      type: "text",
      placeholder: "WEDDING DATE (OR ESTIMATED DATE)",
    },
    {
      id: "address",
      type: "text",
      placeholder: "WEDDING ADDRESS",
    },
    {
      id: "notes",
      type: "textarea",
      placeholder: "YOUR NOTES",
    },
  ];
  console.log('arrived')

  return (
    <section className="px-5 xl:px-34 ">
      {/* Main Content */}
      <div className=" mx-auto">
        {/* Heading */}
        <div className="text-center space-y-5">
          <p className="text-sm uppercase tracking-widest font-semibold">
            Booking
          </p>
          <h2 className="text-3xl md:text-5xl  leading-tight">
            Timeless Memories: Your Wedding Day Captured.
          </h2>
        </div>

        {/* Form and Images */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className=" md:w-1/2 mx-auto">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="flex flex-col gap-5">
                {/* {booking.map(({ id, type, placeholder }: any, index: any) => (
                  <TextBox
                    disabled={formik.isSubmitting}
                    key={index}
                    id={id}
                    formik={formik}
                    type={type === "Email" ? "email" : "text"}
                    placeholder={placeholder}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                  />
                ))} */}
                <div className="flex gap-2 w-full">
                  <TextBox
                    disabled={formik.isSubmitting}
                    key="name"
                    id="name"
                    formik={formik}
                    type="text"
                    placeholder="NAME"
                    input_className="px-3"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                  />

                  <TextBox
                    disabled={formik.isSubmitting}
                    key="email"
                    id="email"
                    formik={formik}
                    type="email"
                    placeholder="E-MAIL"
                    input_className="px-3"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                  />
                </div>
                <div className="flex gap-2 w-full">
                  <TextBox
                    disabled={formik.isSubmitting}
                    key="date"
                    id="date"
                    formik={formik}
                    type="text"
                    placeholder="WEDDING DATE (OR ESTIMATED DATE)"
                    input_className="px-3"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                  />

                  <TextBox
                    disabled={formik.isSubmitting}
                    key="address"
                    id="address"
                    formik={formik}
                    type="text"
                    placeholder="WEDDING ADDRESS"
                    input_className="px-3"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                  />
                </div>

                <TextBox
                  disabled={formik.isSubmitting}
                  key="message"
                  id="message"
                  formik={formik}
                  type="textarea" // or adjust if `TextBox` handles textarea separately
                  placeholder="YOUR NOTES"
                  input_className="px-3"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />

                <Button
                  loaderType="white-loader"
                  loading={formik.isSubmitting}
                  disabled={formik.isSubmitting}
                  text="Submit"
                  className="w-full bg-yellow-600 text-white py-3 hover:bg-yellow-700 transition"
                  // icon={<MdArrowOutward />}
                />
              </div>
            </form>
          </div>

          {/* Decorative Images */}
          {/* <div className="md:w-1/2 relative">
            <div className="absolute top-0 right-0">
              <Image
                src="/path-to-top-image.jpg" 
                alt="Bride on beach"
                width={300}
                height={400}
                className="object-cover rounded-lg border-4 border-white"
              />
              <div className="absolute -top-2 -right-2 w-16 h-6 bg-white rotate-12 opacity-80"></div>{" "}
            </div>
            <div className="absolute bottom-0 left-0">
              <Image
                src="/path-to-bottom-image.jpg" 
                alt="Bride with flowers"
                width={200}
                height={250}
                className="object-cover rounded-lg border-4 border-white"
              />
              <div className="absolute -top-2 -left-2 w-16 h-6 bg-white -rotate-12 opacity-80"></div>{" "}
            </div>
          </div> */}
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12 text-center">
        <div>
          <div className="flex justify-center mb-2">
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <p className="">Phone</p>
          <p className="">+1 (704) 555-0127</p>
          <p className="">+1 (704) 555-0139</p>
        </div>
        <div>
          <div className="flex justify-center mb-2">
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="">E-Mail</p>
          <p className="">phibarrington@examp le.com</p>
        </div>
        <div>
          <div className="flex justify-center mb-2">
            <svg
              className="w-6 h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.243l-4.243-4.243m0 0l-4.243 4.243m4.243-4.243l4.243-4.243m-4.243 4.243L9 7"
              />
            </svg>
          </div>
          <p className="">Locations</p>
          <p className="">Los Angeles</p>
          <p className="">San Diego</p>
        </div>
      </div>
    </section>
  );
}
