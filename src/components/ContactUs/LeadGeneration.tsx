"use client";
import React from "react";
import { useFormik } from "formik";
import { ToastHelper } from "@/utils/toastHelper";
import * as Yup from "yup";
import Image from "next/image";
import { AppAssets } from "@/constants/AppAssets";
import TextBox from "../common/TextBox";
import Button from "../common/Button";

export default function LeadGeneration() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const onlyAlphabets = /^[A-Za-z]+$/;
  const onlyNumbers = /^[0-9]+$/; // only digits allowed

  const contactUsSchema = Yup.object({
    firstName: Yup.string()
      .required("Required")
      .matches(onlyAlphabets, "Only alphabets are allowed"),
    lastName: Yup.string()
      .required("Required")
      .matches(onlyAlphabets, "Only alphabets are allowed"),
    email: Yup.string()
      .required("Required")
      .matches(emailRegex, "Invalid email"),
    phone: Yup.string()
      .required("Required")
      .matches(onlyNumbers, "Only numbers are allowed"),
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
      const id = ToastHelper.loading("Submitting");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values }),
        });
        if (response.ok) {
          ToastHelper.success(id, "Success");
          const result = await response.json();

          resetForm();
        } else {
          throw response;
        }
      } catch (error: any) {
        console.error("error", error?.statusText);
        ToastHelper.error(id, error?.statusText);
      }
    },
  });
  const leadGenerate = [
    {
      id: "firstName",
      type: "text",
      placeholder: "First Name*",
    },
    {
      id: "lastName",
      type: "text",
      placeholder: "Last Name*",
    },
    {
      id: "email",
      type: "email",
      placeholder: "Email*",
    },
    {
      id: "phone",
      type: "phone",
      placeholder: "Phone no*",
    },
    {
      id: "estimateCount",
      type: "text",
      placeholder: "Estimate Guest Count*",
    },
    {
      id: "location",
      type: "text",
      placeholder: "Location of the wedding*",
    },
    {
      id: "dates",
      type: "text",
      placeholder: "Event Dates*",
    },
    {
      id: "tellUs",
      type: "text",
      placeholder: "Tell us more about your wedding event flow venues *",
    },
  ];
  return (
    <section className="h-full relative flex flex-col md:flex-row items-center shadow-full rounded-lg bg-white overflow-hidden ">
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
        className="space-y-8 overflow-y-scroll hide-scrollbar w-full h-full lg:w-1/2 p-3 xl:p-5 bg-white/10 rounded-md text-white backdrop-blur-md xl:bg-white"
      >
        <div className="space-y-5 grid md:grid-cols-2 lg:grid-cols-1 md:gap-x-2">
          {leadGenerate.map(({ id, type, placeholder }: any, index: any) => (
            <TextBox
              disabled={formik.isSubmitting}
              key={index}
              id={id}
              formik={formik}
              type={type === "Email" ? "email" : "text"}
              placeholder={placeholder}
              input_className="text-sm text-darkMutedRed font-medium"
              className="w-full  p-3 border-b border-primaryGolden rounded-md"
            />
          ))}
        </div>
        <Button
          loaderType="white-loader"
          loading={formik.isSubmitting}
          disabled={formik.isSubmitting}
          text="Submit"
          className="text-left bg-primaryGolden text-white cursor-pointer  w-full md:w-fit px-20  rounded-sm"
        />
      </form>
    </section>
  );
}
