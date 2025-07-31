
import { AiOutlineLoading } from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Id, toast, ToastOptions } from "react-toastify";

const toastIcons = {
  success: () => <FaRegCheckCircle className="text-deepRichGreen" />,
  error: () => <MdCancel className="text-vibrantReddishPink" />,
//   info: () => <Info className="text-vibrantSKyBlue" />,
//   warning: () => <TriangleAlert className="text-goldenYellow" />,
  loading: () => <AiOutlineLoading className="animate-spin text-gray-500" />,
};

const defaultOptions: ToastOptions = {
  autoClose: 3000,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: true,
};

function extractAllMessages(
  error: any,
  fallback = "Something went wrong"
): string {
  if (!error) return fallback;

  if (typeof error === "string") return error;
  if (error instanceof Error) return error.message;

  const messages: string[] = [];

  const walk = (obj: any) => {
    if (typeof obj === "string") {
      messages.push(obj);
    } else if (Array.isArray(obj)) {
      obj.forEach(walk);
    } else if (typeof obj === "object" && obj !== null) {
      Object.values(obj).forEach(walk);
    }
  };

  if (error.response?.data) {
    walk(error.response.data);
  } else if (error.data) {
    walk(error.data);
  } else {
    walk(error);
  }

  return messages.length > 0 ? messages.join(" | ") : fallback;
}

export const ToastHelper = {
  loading: (message: string): Id => {
    return toast.loading(message);
  },

  success: (id: Id, message: string, options?: ToastOptions) => {
    toast.update(id, {
      render: message,
      type: "success",
      isLoading: false,
      closeButton: true,
      icon: toastIcons.success,
      ...defaultOptions,
      ...options,
    });
  },

//   info: (id: Id, message: string, options?: ToastOptions) => {
//     toast.update(id, {
//       render: message,
//       type: "info",
//       isLoading: false,
//       closeButton: true,
//       icon: toastIcons.info,
//       ...defaultOptions,
//       ...options,
//     });
//   },

  error: (id: Id, error: any, options?: ToastOptions) => {
    const message = extractAllMessages(error);
    toast.update(id, {
      render: message,
      type: "error",
      isLoading: false,
      closeButton: true,
      icon: toastIcons.error,
      ...defaultOptions,
      ...options,
    });
  },

//   warning: (id: Id, error: any, options?: ToastOptions) => {
//     const message = extractAllMessages(error);
//     toast.update(id, {
//       render: message,
//       type: "warning",
//       isLoading: false,
//       closeButton: true,
//       icon: toastIcons.warning,
//       ...defaultOptions,
//       ...options,
//     });
//   },

  showError: (error: any, options?: ToastOptions) => {
    const message = extractAllMessages(error);
    toast.error(message, {
      icon: toastIcons.error,
      closeButton: true,
      ...defaultOptions,
      ...options,
    });
  },

  showSuccess: (message: string, options?: ToastOptions) => {
    toast.success(message, {
      icon: toastIcons.success,
      closeButton: true,
      ...defaultOptions,
      ...options,
    });
  },

//   showInfo: (message: string, options?: ToastOptions) => {
//     toast.info(message, {
//       icon: toastIcons.info,
//       closeButton: true,
//       ...defaultOptions,
//       ...options,
//     });
//   },
};
