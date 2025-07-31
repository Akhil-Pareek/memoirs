import { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToasterProps {
  label: string;
  type: string;
}

export default function InfoToaster({ label, type = "default" }: ToasterProps) {
  useEffect(() => {
    if (label) {
      switch (type) {
        case "success":
          toast.success(label, {
            position: "top-right",
            icon: <FaRegCheckCircle className="text-red-700" />, // custom icon
          });
          break;
        case "error":
          toast.error(label, {
            position: "top-right",
            icon: <MdCancel className="text-red-700" />,
          });
          break;

        default:
          toast(label, {
            position: "top-right",
            // icon: "🔔",
          });
          break;
      }
    }
  }, [label, type]);

  return <ToastContainer hideProgressBar={true} />;
}
