"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-6
        right-6
        z-50
        w-12
        h-12
        rounded-full
        bg-amber-500
        hover:bg-amber-400
        text-[#2D1A0F]
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }
      `}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up text-xl"></i>
    </button>
  );
}