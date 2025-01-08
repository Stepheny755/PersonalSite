"use client";

import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full mt-2 text-left rounded-lg focus:outline-none"
      >
        <span className="text-lg font-semibold">{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${open ? "rotate-90" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="">
          {children}
        </div>
      )}
      <hr className="mt-3 mb-4 sm:mx-auto border-gray-700 dark:border-stone-50" />
    </div>
  );
}