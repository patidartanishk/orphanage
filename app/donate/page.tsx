"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DonatePage() {
  const router = useRouter();

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

      <main className="relative overflow-hidden bg-[#FCF8F2] pt-28 md:pt-36 pb-14 md:pb-20">

        {/* Background */}

        <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-amber-100/50 blur-[140px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-orange-100/40 blur-[160px]" />

        {/* Floating Icons */}

        <i className="pointer-events-none bi bi-heart-fill hidden lg:block absolute left-10 top-52 text-pink-400 text-4xl opacity-20"></i>

        <i className="pointer-events-none bi bi-stars hidden lg:block absolute right-16 top-56 text-amber-400 text-4xl opacity-20"></i>

        <i className="pointer-events-none bi bi-balloon-heart hidden lg:block absolute left-1/4 bottom-40 text-red-300 text-5xl opacity-20"></i>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}

          <div className="mb-8 md:mb-12">

            <button
              onClick={() => router.push("/")}
              className="
                inline-flex
                items-center
                gap-2

                text-[#6F6258]

                hover:text-amber-500

                text-sm
                sm:text-base

                font-semibold

                transition-all
                duration-300
              "
            >
              <i className="bi bi-arrow-left text-lg"></i>

              <span>Back to Home</span>

            </button>

          </div>

          {/* Hero */}

          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.32em] md:tracking-[0.45em] text-amber-500 font-semibold text-xs sm:text-sm">

              SUPPORT A CHILD

            </p>

            <h1 className="mt-4 text-[#2D1A0F] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05]">

              Every Scan

              <br />

              Creates Hope

            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-8 max-w-2xl">

              Your kindness provides nutritious meals, quality education,
              healthcare, and a brighter future for every child at

              <span className="font-semibold text-[#2D1A0F]">
                {" "}
                Ebenezer Child Care Centre.
              </span>

            </p>

          </div>

                    {/* Main Card */}

          <div className="mt-12 md:mt-20">

            <div
              className="
                max-w-6xl
                mx-auto

                rounded-[28px]
                md:rounded-[36px]

                bg-white/90
                backdrop-blur-xl

                border
                border-white

                shadow-xl
                md:shadow-[0_35px_80px_rgba(0,0,0,0.12)]

                p-5
                sm:p-6
                md:p-10
                lg:p-14
              "
            >

              <div
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-2

                  gap-10
                  lg:gap-14

                  items-center
                "
              >

                {/* LEFT */}

                <div className="relative">

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                    <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-amber-100 blur-[90px] opacity-70"></div>

                  </div>

                  {/* QR Card */}

                  <div
                    className="
                      relative

                      bg-[#FFF9F0]

                      rounded-[28px]

                      border
                      border-amber-100

                      shadow-lg

                      p-5
                      sm:p-6
                      md:p-8

                      flex
                      flex-col
                      items-center
                    "
                  >

                    {/* Icon */}

                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md flex items-center justify-center">

                      <i className="bi bi-heart-fill text-3xl md:text-4xl text-amber-500"></i>

                    </div>

                    {/* Heading */}

                    <h2 className="mt-5 md:mt-6 text-2xl md:text-3xl font-bold text-[#2D1A0F] text-center">

                      Scan To Donate

                    </h2>

                    <p className="mt-3 text-gray-500 text-center text-sm md:text-base leading-7 max-w-sm">

                      Scan the QR code using any UPI app and make your contribution securely.

                    </p>

                    {/* QR */}

                    <div
                      className="
                        mt-6
                        md:mt-8

                        bg-white

                        rounded-[22px]

                        p-4
                        md:p-5

                        shadow-lg
                      "
                    >

                      <Image
                        src="/images/demo-qr.png"
                        alt="QR Code"
                        width={260}
                        height={260}
                        className="w-[200px] sm:w-[230px] md:w-[260px] h-auto rounded-xl"
                      />

                    </div>

                    {/* UPI */}

                    <div className="mt-6 md:mt-8 w-full">

                      <p className="text-sm text-gray-500">

                        UPI ID

                      </p>

                      <div
                        className="
                          mt-2

                          flex
                          flex-col
                          sm:flex-row

                          gap-3

                          sm:items-center
                          sm:justify-between

                          bg-white

                          rounded-xl

                          border
                          border-amber-100

                          px-4
                          md:px-5

                          py-4
                        "
                      >

                        <span className="font-semibold text-[#2D1A0F] break-all">

                          demo@upi

                        </span>

                        <button
                          className="
                            w-full
                            sm:w-auto

                            flex
                            items-center
                            justify-center

                            gap-2

                            bg-amber-500

                            hover:bg-amber-400

                            text-[#2D1A0F]

                            px-5
                            py-3

                            rounded-lg

                            font-semibold

                            transition-all
                            duration-300
                          "
                        >

                          <i className="bi bi-copy"></i>

                          Copy

                        </button>

                      </div>

                    </div>

                    {/* Badges */}

                    <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3">

                      <div className="bg-white rounded-full px-4 py-2 shadow-sm text-xs md:text-sm flex items-center gap-2">

                        <i className="bi bi-shield-check text-green-500"></i>

                        Secure

                      </div>

                      <div className="bg-white rounded-full px-4 py-2 shadow-sm text-xs md:text-sm flex items-center gap-2">

                        <i className="bi bi-heart-fill text-red-400"></i>

                        Verified

                      </div>

                      <div className="bg-white rounded-full px-4 py-2 shadow-sm text-xs md:text-sm flex items-center gap-2">

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

                      rounded-[28px]

                      border
                      border-amber-100

                      shadow-lg

                      p-5
                      sm:p-6
                      md:p-8
                      lg:p-10
                    "
                  >

                    {/* Heading */}

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

                      <div
                        className="
                          w-14
                          h-14
                          md:w-16
                          md:h-16

                          rounded-2xl

                          bg-amber-500

                          flex
                          items-center
                          justify-center

                          shadow-md
                          shrink-0
                        "
                      >

                        <i className="bi bi-cloud-arrow-up-fill text-white text-2xl md:text-3xl"></i>

                      </div>

                      <div>

                        <h2 className="text-2xl md:text-3xl font-bold text-[#2D1A0F]">

                          Upload Payment Proof

                        </h2>

                        <p className="text-gray-500 mt-2 text-sm md:text-base leading-6">

                          Already donated? Upload your payment screenshot below so we can verify your contribution.

                        </p>

                      </div>

                    </div>

                    {/* Name */}

                    <div className="mt-8 md:mt-10">

                      <label className="block font-semibold text-[#2D1A0F] mb-2">

                        Your Name

                      </label>

                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="
                          w-full

                          h-12
                          md:h-14

                          rounded-xl

                          border
                          border-amber-200

                          bg-white

                          px-5

                          text-sm
                          md:text-base

                          outline-none

                          focus:border-amber-500
                          focus:ring-4
                          focus:ring-amber-100

                          transition-all
                        "
                      />

                    </div>

                    {/* Upload */}

                    <div className="mt-8">

                      <label className="block font-semibold text-[#2D1A0F] mb-3">

                        Payment Screenshot

                      </label>

                      <label
                        className="
                          flex

                          flex-col

                          items-center
                          justify-center

                          w-full

                          h-52
                          sm:h-60
                          md:h-64

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
                            className="max-h-44 sm:max-h-52 w-full object-contain rounded-xl"
                          />

                        ) : (

                          <>

                            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">

                              <i className="bi bi-cloud-arrow-up-fill text-3xl text-amber-500"></i>

                            </div>

                            <h3 className="mt-5 text-lg md:text-xl font-bold text-[#2D1A0F]">

                              Upload Screenshot

                            </h3>

                            <p className="mt-2 text-center text-sm md:text-base text-gray-500 px-6">

                              Drag & drop your payment proof here or click to browse

                            </p>

                            <p className="mt-4 text-xs md:text-sm text-gray-400">

                              JPG • PNG • JPEG (Max 5 MB)

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
                        mt-8
                        md:mt-10

                        w-full

                        h-12
                        md:h-14

                        rounded-xl

                        bg-amber-500
                        hover:bg-amber-400

                        text-[#2D1A0F]

                        text-base
                        md:text-lg

                        font-bold

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