"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-3">

        <div className="flex items-center justify-between bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl px-4 sm:px-5 lg:px-8 py-3">

          {/* Logo */}
          <div className="flex items-center gap-3 md:gap-4">

            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center">

             <Image
  src="/images/ebenezer-logo.png"
  alt="Ebenezer Child Care Centre"
  width={56}
  height={56}
  className="w-full h-full object-contain"
  priority
/>

            </div>

            <div>

             <h1 className="text-sm sm:text-base lg:text-2xl font-bold text-white leading-tight">
                Ebenezer Child Care Centre
              </h1>

              <p className="hidden lg:block text-sm text-amber-100 font-medium">
                A Home. A Future. A Hope.
              </p>

            </div>

          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-white">

            <a
              href="#about"
              className="hover:text-amber-400 transition"
            >
              About
            </a>

            <a
              href="#impact"
              className="hover:text-amber-400 transition"
            >
              Impact
            </a>

            <a
              href="#work"
              className="hover:text-amber-400 transition"
            >
              Our Work
            </a>

            <a
              href="#gallery"
              className="hover:text-amber-400 transition"
            >
              Gallery
            </a>

            <a
              href="#donate"
              className="hover:text-amber-400 transition"
            >
              Donate
            </a>

            <button
              className="
                bg-amber-500
                hover:bg-amber-400
                text-[#2D1A0F]
                px-6
                py-3
                rounded-xl
                font-semibold
                flex
                items-center
                gap-2
                transition-all
                duration-300
              "
            >
              <i className="bi bi-heart-fill"></i>
              Donate Now
            </button>

          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-3xl"
          >
            <i
              className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}
            ></i>
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div className="max-w-7xl mx-auto px-3 md:px-6">

        {menuOpen && (

          <div
            className="
              lg:hidden
              rounded-2xl
              bg-[#2D1A0F]/95
              backdrop-blur-xl
              border
              border-white/10
              p-6
              mt-2
              shadow-2xl
            "
          >

            <div className="flex flex-col gap-6 text-white">

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400 transition"
              >
                About
              </a>

              <a
                href="#impact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400 transition"
              >
                Impact
              </a>

              <a
                href="#work"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400 transition"
              >
                Our Work
              </a>

              <a
                href="#gallery"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400 transition"
              >
                Gallery
              </a>

              <a
                href="#donate"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400 transition"
              >
                Donate
              </a>

              <button
                className="
                  mt-2
                  bg-amber-500
                  hover:bg-amber-400
                  text-[#2D1A0F]
                  py-3
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-all
                "
              >
                <i className="bi bi-heart-fill"></i>
                Donate Now
              </button>

            </div>

          </div>

        )}

      </div>

    </nav>
  );
}