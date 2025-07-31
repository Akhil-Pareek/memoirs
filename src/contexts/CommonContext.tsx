"use client";

import { createContext, ReactNode, useState } from "react";

export type Language = {
  id: string | number;
  title: string;
  code: string;
};

export interface CommonContextType {
  modalState: IModal;
  setModalState: React.Dispatch<React.SetStateAction<IModal>>;
}

type IModal =
  | {
      isOpen: boolean;
      type: "info";
      label: string;
      description: string;
      autoCloseDelay?: number;
    }
  | {
      isOpen: boolean;
      type: "success" | "error";
      description?: string;
      label?: string;
      autoCloseDelay?: number;
    }
  | {
      isOpen: boolean;
      type: "confirmation";
      label: string;
      description: string;
      onConfirm: () => void;
      onCancel?: () => void;
      autoCloseDelay?: number;
    };

export const CommonContext = createContext<CommonContextType | undefined>(
  undefined
);

export default function CommonProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<IModal>({
    isOpen: false,
    description: "",
    autoCloseDelay: 2000,

    type: "success",
    label: "",
  });

  return (
    <CommonContext.Provider
      value={{
        modalState,
        setModalState,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
}
