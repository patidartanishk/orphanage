"use client";

import { useState } from "react";
import Image from "next/image";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DonatePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#FCF8F2] pt-36 pb-20">

        {/* Background */}

        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-amber-100/50 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-orange-100/40 blur-[160px]" />

        {/* Floating Icons */}

        <i className="bi bi-heart-fill hidden lg:block absolute left-12 top-48 text-pink-400 text-4xl opacity-20"></i>

        <i className="bi bi-stars hidden lg:block absolute right-20 top-56 text-amber-400 text-4xl opacity-20"></i>

        <i className="bi bi-balloon-heart hidden lg:block absolute left-1/4 bottom-40 text-red-300 text-5xl opacity-20"></i>

        <div className="max-w-7xl mx-auto px-6">

          {/* Hero */}

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.45em] text-amber-500 font-semibold text-sm">

              SUPPORT A CHILD

            </p>

            <h1 className="mt-5 text-[#2D1A0F] text-4xl md:text-5xl lg:text-6xl font-black leading-tight">

              Every Scan
              <br />

              Creates Hope

            </h1>

            <p className="mt-7 text-gray-600 text-lg leading-8">

              Your kindness provides food,
              education, healthcare and a brighter future
              for every child at
              <span className="font-semibold text-[#2D1A0F]">
                {" "}
                Ebenezer Child Care Centre.
              </span>

            </p>

          </div>

                  {/* Main Card */}

        <div className="mt-20">

          <div
            className="
              max-w-6xl
              mx-auto

              rounded-[36px]

              bg-white/90

              backdrop-blur-xl

              border
              border-white

              shadow-[0_35px_80px_rgba(0,0,0,0.12)]

              p-6
              md:p-10
              lg:p-14
            "
          >

            <div
              className="
                grid

                grid-cols-1
                lg:grid-cols-2

                gap-12

                items-center
              "
            >

              {/* LEFT */}

              <div className="relative">

                {/* Glow */}

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-100 blur-[100px] opacity-70"></div>

                {/* QR Card */}

                <div
                  className="
                    relative

                    bg-[#FFF9F0]

                    rounded-[30px]

                    border

                    border-amber-100

                    shadow-xl

                    p-8

                    flex
                    flex-col
                    items-center
                  "
                >

                  <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">

                    <i className="bi bi-heart-fill text-4xl text-amber-500"></i>

                  </div>

                  <h2 className="mt-6 text-3xl font-bold text-[#2D1A0F]">

                    Scan To Donate

                  </h2>

                  <p className="mt-3 text-gray-500 text-center">

                    Use any UPI app to scan
                    and support our children.

                  </p>

                  {/* QR */}

                  <div
                    className="
                      mt-8

                      bg-white

                      rounded-[24px]

                      p-5

                      shadow-lg
                    "
                  >

                    <Image
                      src="/images/demo-qr.png"
                      alt="QR Code"
                      width={260}
                      height={260}
                      className="
                        rounded-xl
                        object-cover
                      "
                    />

                  </div>

                  {/* UPI */}

                  <div className="mt-8 w-full">

                    <p className="text-sm text-gray-500">

                      UPI ID

                    </p>

                    <div
                      className="
                        mt-2

                        flex

                        items-center
                        justify-between

                        bg-white

                        rounded-xl

                        border

                        border-amber-100

                        px-5
                        py-4
                      "
                    >

                      <span className="font-semibold text-[#2D1A0F]">

                        demo@upi

                      </span>

                      <button
                        className="
                          flex
                          items-center
                          gap-2

                          bg-amber-500

                          hover:bg-amber-400

                          text-[#2D1A0F]

                          px-4
                          py-2

                          rounded-lg

                          font-semibold

                          transition
                        "
                      >

                        <i className="bi bi-copy"></i>

                        Copy

                      </button>

                    </div>

                  </div>

                  {/* Small Badges */}

                  <div className="mt-8 flex flex-wrap justify-center gap-3">

                    <div className="bg-white rounded-full px-4 py-2 shadow-sm text-sm flex items-center gap-2">

                      <i className="bi bi-shield-check text-green-500"></i>

                      Secure

                    </div>

                    <div className="bg-white rounded-full px-4 py-2 shadow-sm text-sm flex items-center gap-2">

                      <i className="bi bi-heart-fill text-red-400"></i>

                      Verified

                    </div>

                    <div className="bg-white rounded-full px-4 py-2 shadow-sm text-sm flex items-center gap-2">

                      <i className="bi bi-people-fill text-amber-500"></i>

                      Child First

                    </div>

                  </div>

                </div>

              </div>

                            {/* RIGHT */}

              <div>

                <div
                  className="
                    bg-[#FCF8F2]

                    rounded-[30px]

                    border
                    border-amber-100

                    shadow-lg

                    p-8
                    lg:p-10
                  "
                >

                  {/* Heading */}

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-16
                        h-16

                        rounded-2xl

                        bg-amber-500

                        flex
                        items-center
                        justify-center

                        shadow-md
                      "
                    >

                      <i className="bi bi-cloud-arrow-up-fill text-white text-3xl"></i>

                    </div>

                    <div>

                      <h2 className="text-3xl font-bold text-[#2D1A0F]">

                        Upload Payment Proof

                      </h2>

                      <p className="text-gray-500 mt-1">

                        Already donated? Upload your screenshot below.

                      </p>

                    </div>

                  </div>

                  {/* Name */}

                  <div className="mt-10">

                    <label className="font-semibold text-[#2D1A0F]">

                      Your Name

                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="
                        mt-3

                        w-full

                        h-14

                        rounded-xl

                        border

                        border-amber-200

                        bg-white

                        px-5

                        outline-none

                        focus:border-amber-500

                        transition
                      "
                    />

                  </div>

                  {/* Upload Area */}

                  <div className="mt-8">

                    <label className="font-semibold text-[#2D1A0F]">

                      Payment Screenshot

                    </label>

                    <label
                      className="
                        mt-3

                        flex

                        flex-col

                        items-center
                        justify-center

                        w-full

                        h-64

                        rounded-3xl

                        border-2

                        border-dashed

                        border-amber-300

                        bg-white

                        cursor-pointer

                        hover:border-amber-500

                        hover:bg-amber-50

                        transition-all
                        duration-300
                      "
                    >

                      {selectedImage ? (

  <img
    src={selectedImage}
    alt="Preview"
    className="max-h-52 w-full object-contain rounded-xl"
  />

) : (

                        <>

                          <i className="bi bi-cloud-arrow-up-fill text-6xl text-amber-500"></i>

                          <h3 className="mt-5 text-xl font-bold text-[#2D1A0F]">

                            Drag & Drop

                          </h3>

                          <p className="mt-2 text-gray-500">

                            or click to choose screenshot

                          </p>

                          <p className="mt-4 text-sm text-gray-400">

                            JPG • PNG • JPEG

                          </p>

                        </>

                      )}

                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />

                    </label>

                  </div>

                  {/* Submit */}

                  <button
                    className="
                      mt-10

                      w-full

                      bg-amber-500

                      hover:bg-amber-400

                      text-[#2D1A0F]

                      py-4

                      rounded-xl

                      font-bold

                      text-lg

                      flex

                      items-center
                      justify-center

                      gap-3

                      shadow-lg

                      hover:-translate-y-1

                      transition-all
                      duration-300
                    "
                  >

                    <i className="bi bi-heart-fill"></i>

                    Submit Donation

                  </button>

                                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}