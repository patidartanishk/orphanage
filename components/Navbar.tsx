"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-3">

        <div
          className="
            flex
            items-center
            justify-between
            bg-[#2D1A0F]/60
            backdrop-blur-xl
            border
            border-white/15
            rounded-2xl
            px-4
            sm:px-5
            lg:px-8
            py-3
            shadow-xl
          "
        >

          {/* Logo + Name */}
          <div className="flex items-center gap-4 md:gap-5">

            <div
              className="
                w-11 h-11
                sm:w-12 sm:h-12
                lg:w-14 lg:h-14
                rounded-full
                bg-white
                border border-white/40
                shadow-lg
                flex
                items-center
                justify-center
                overflow-hidden
                flex-shrink-0
              "
            >
              <Image
                src="/images/ebenezer-logo.png"
                alt="Ebenezer Child Care Centre"
                width={46}
                height={46}
                className="object-contain"
                priority
              />
            </div>

            <div>

              <h1 className="text-sm sm:text-lg lg:text-[2rem] font-bold text-white tracking-tight leading-tight">
                Ebenezer Child Care Centre
              </h1>

              <p className="hidden lg:block mt-1 text-sm text-amber-200 font-medium">
                A Home. A Future. A Hope.
              </p>

            </div>

          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-white">

            <a
              href="/#about"
              className="hover:text-amber-400 transition"
            >
              About
            </a>

            <a
              href="/#impact"
              className="hover:text-amber-400 transition"
            >
              Impact
            </a>

            <a
              href="/#work"
              className="hover:text-amber-400 transition"
            >
              Our Work
            </a>

            <a
              href="/#gallery"
              className="hover:text-amber-400 transition"
            >
              Gallery
            </a>

            <a
              href="/#donate"
              className="hover:text-amber-400 transition"
            >
              Donate
            </a>

            <a
  href="/#donate"
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
    hover:-translate-y-1
    hover:shadow-xl
  "
>
  <i className="bi bi-heart-fill"></i>
  Donate Now
</a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-3xl"
          >
            <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div className="max-w-7xl mx-auto px-3 md:px-6">

        {menuOpen && (

          <div
            className="
              lg:hidden
              mt-2
              rounded-2xl
              bg-[#2D1A0F]/95
              backdrop-blur-xl
              border
              border-white/10
              shadow-2xl
              p-6
            "
          >

            <div className="flex flex-col gap-6 text-white">

              <a
                href="/#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400 transition"
              >
                About
              </a>

              <a
                href="/#impact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400 transition"
              >
                Impact
              </a>

              <a
                href="/#work"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400 transition"
              >
                Our Work
              </a>

              <a
                href="/#gallery"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400 transition"
              >
                Gallery
              </a>

              <a
                href="/#donate"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400 transition"
              >
                Donate
              </a>

              <a
  href="/#donate"
  onClick={() => setMenuOpen(false)}
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
    duration-300
  "
>
  <i className="bi bi-heart-fill"></i>
  Donate Now
</a>
            </div>

          </div>

        )}

      </div>

    </nav>
  );
}