"use client";
import Link from "next/link";
import { KeyboardEvent, ReactNode, useCallback, useState } from "react";

interface IButton {
  loaderType?: "loader" | "white-loader";
  text: any;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  link?: string;
  className?: string;
  ariaLabel?: string;
  tooltip?: string;
  variant?: "primary" | "secondary" | "danger" | "ghost" | "white";
}

const variantStyles: Record<string, string> = {
  primary: "",
  secondary: " text-white ",
  white: "bg-white ",
  danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
  ghost:
    "bg-transparent  border border-gray-200 hover:bg-gray-100 ",
};

export default function Button({
  loaderType = "loader",
  text,
  loading = false,
  disabled = false,
  onClick,
  icon,
  type = "submit",
  className = "",
  link,
  ariaLabel,
  tooltip,
  variant = "primary",
}: IButton) {
  const [linkLoading, setLinkLoading] = useState(false);
  const isDisabled = loading || disabled;

  const sharedClasses = `
    py-2.5 px-4  text-sm font-bold cursor-pointer flex items-center justify-center gap-2 transition-all duration-300",
  whitespace-nowrap focus:outline-none focus-visible:ring-2
    disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105
   ${variantStyles[variant]}
   ${isDisabled && "opacity-50 cursor-not-allowed"}
    ${className}`;

  const loader = (loading || linkLoading) && (
    <span className={`${loaderType} ml-2`} aria-hidden="true" />
  );

  const handleKeyPress = useCallback(
    (e: KeyboardEvent<HTMLAnchorElement>) => {
      if (isDisabled) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setLinkLoading(true);
      }
    },
    [isDisabled]
  );

  if (link) {
    return (
      <Link
        href={link}
        role="button"
        aria-busy={linkLoading}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        onClick={(e) => {
          if (!isDisabled) {
            setLinkLoading(true);
            onClick?.(); // Call the toggleSidebar or any passed function
          }
        }}
        // onClick={() => !isDisabled && setLinkLoading(true)}
        onKeyDown={handleKeyPress}
        className={sharedClasses}
        aria-label={ariaLabel || text}
        title={tooltip || text}
      >
        {icon && <span>{icon}</span>}
        <span>{text}</span>
        {loading && loader}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      aria-busy={loading}
      aria-label={ariaLabel || text}
      className={sharedClasses}
      title={tooltip || text}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
      {loading && loader}
    </button>
  );
}
