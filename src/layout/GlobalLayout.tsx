"use client";

import InfoToaster from "@/components/common/InfoToaster";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useCommon } from "@/hooks/useCommon";
import { ReactNode } from "react";

interface IGlobalLayout {
  children: ReactNode;
}

export default function GlobalLayout({ children }: IGlobalLayout) {
  const { modalState, setModalState }: any = useCommon();

  const {
    isOpen,
    type,
    title,
    description,
    onCancel,
    onConfirm,
    autoCloseDelay,
    label,
  }: any = modalState || {};
  return (
    <>
      <main className="h-full">
        <Header />
        {children}
        <Footer />
      </main>
      <InfoToaster label={label} type={type} />
    </>
  );
}
