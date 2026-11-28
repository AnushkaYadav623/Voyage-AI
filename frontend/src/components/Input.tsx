import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: Props) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      />
    </div>
  );
}