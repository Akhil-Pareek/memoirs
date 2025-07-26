"use client";
import Button from "@/components/common/Button";
import TextBox from "@/components/common/TextBox";
import Banner from "@/components/Banner";
import { AppAssets } from "@/constants/AppAssets";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function page() {
  const leadGenerate = [
    {
      id: "name",
      type: "name",
      placeholder: "Name *",
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
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      estimateCount: "",
      tellUs: "",
      location: "",
      dates: "",
      error: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      estimateCount: Yup.string().required("Required"),
      tellUs: Yup.string().required("Required"),
      location: Yup.string().required("Required"),
      dates: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      // Convert file to Base64 before sending
      console.log("values", values);
      resetForm();
    },
  });
  return (
    <div className="font-cormorant">
      <Banner srcUrl={AppAssets?.contactUsBanner} bannerLabel="Contact Us" />
      <section className="py-12 px-4 sm:px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-2">
            We can’t wait for you to let us in on your love stories.
          </h2>
          <p className="italic text-base sm:text-lg mb-2">
            Award winning wedding photographer & videographer near you.
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Might sound cliché, but we adore love stories and would be honoured
            to be a part of yours! All you have to do is drop us a hey...
          </p>
        </div>
        <div className="max-w-5xl mx-auto shadow-full py-5 px-8 rounded-lg">
          <form onSubmit={formik.handleSubmit} className="   space-y-8 ">
            <div className="grid lg:grid-cols-2 gap-x-5 gap-y-10">
              {leadGenerate.map(
                ({ id, type, placeholder }: any, index: any) => (
                  <TextBox
                    disabled={formik.isSubmitting}
                    key={index}
                    id={id}
                    formik={formik}
                    type={type === "Email" ? "email" : "text"}
                    placeholder={placeholder}
                    input_className="text-sm"
                    className="w-full  p-3 border-b border-primaryGolden rounded-md"
                  />
                )
              )}
            </div>
            <Button
              loaderType="white-loader"
              loading={formik.isSubmitting}
              disabled={formik.isSubmitting}
              text="Submit"
              className="text-left bg-primaryGolden cursor-pointer text-white w-full md:w-fit px-20  rounded-sm"
            />
          </form>
        </div>
      </section>
    </div>
  );
}
