"use client";
import { CommonContext } from "@/contexts/CommonContext";
import { use } from "react";

export const useCommon = () => {
  const context = use(CommonContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};
