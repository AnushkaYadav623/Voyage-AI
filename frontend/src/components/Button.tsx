import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const styles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-white text-gray-700 border hover:bg-gray-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`rounded-xl px-5 py-2.5 font-semibold transition disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}