import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#FCF8F2] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <p className="text-amber-600 uppercase tracking-[0.35em] font-semibold mb-4">
          ABOUT US
        </p>

        <h2 className="text-5xl lg:text-6xl font-bold text-[#2D1A0F] leading-[1.05] tracking-[-0.03em]">
          Our Story,
          <br />
          Told With Heart
        </h2>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center mt-14">

          {/* LEFT */}

          <div>

            <p className="text-lg leading-8 text-gray-600 max-w-xl">
              For over 15 years, Ebenezer Child Care Center has provided a
              safe home, quality education, healthcare and emotional support
              for children in need.

              <br />
              <br />

              We believe every child deserves an opportunity to dream,
              learn and grow in a nurturing environment filled with love,
              hope and compassion.
            </p>

            {/* Values */}

            <div className="space-y-8 mt-12">

              {/* Love */}

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-amber-50 shadow-md flex items-center justify-center flex-shrink-0">

                  <i className="bi bi-heart-fill text-rose-500 text-2xl"></i>

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#2D1A0F]">
                    Love & Safety
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Every child deserves a secure home where they feel
                    protected, loved and valued every day.
                  </p>

                </div>

              </div>

              {/* Education */}

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-amber-50 shadow-md flex items-center justify-center flex-shrink-0">

                  <i className="bi bi-book-fill text-amber-500 text-2xl"></i>

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#2D1A0F]">
                    Education
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Inspiring every child through quality education,
                    creativity and lifelong learning.
                  </p>

                </div>

              </div>

              {/* Community */}

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-amber-50 shadow-md flex items-center justify-center flex-shrink-0">

                  <i className="bi bi-people-fill text-orange-500 text-2xl"></i>

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#2D1A0F]">
                    Community
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Building trust, belonging and meaningful
                    relationships that help every child thrive.
                  </p>

                </div>

              </div>

              {/* Growth */}

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-amber-50 shadow-md flex items-center justify-center flex-shrink-0">

                  <i className="bi bi-tree-fill text-green-600 text-2xl"></i>

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#2D1A0F]">
                    Growth
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Helping children discover confidence, skills,
                    independence and a brighter future.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">
    
              {/* Decorative Background Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[420px] h-[420px] rounded-full bg-amber-100/40 blur-3xl"></div>
          </div>

          {/* Decorative Hearts */}
          <div className="absolute -top-6 left-10 animate-pulse">
            <i className="bi bi-heart-fill text-rose-300 text-3xl"></i>
          </div>

          <div className="absolute top-10 left-28">
            <i className="bi bi-heart-fill text-amber-500 text-xl"></i>
          </div>

          {/* Decorative Dots */}
          <div className="absolute -top-6 right-0 grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-amber-300"
              />
            ))}
          </div>

          {/* Image Card */}
          <div
            className="
              relative
              bg-white
              rounded-[36px]
              p-5
              border
              border-[#F3E8D8]
              shadow-[0_25px_70px_rgba(0,0,0,0.08)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_35px_90px_rgba(245,158,11,0.18)]
            "
          >
            {/* Floating Badge */}
            <div
              className="
                absolute
                -top-5
                right-8
                bg-[#FFD56A]
                px-6
                py-3
                rounded-full
                shadow-lg
                font-semibold
                text-[#2D1A0F]
                flex
                items-center
                gap-2
                z-20
              "
            >
              <i className="bi bi-stars text-amber-700"></i>
              Our Values
            </div>

            {/* Main Image */}
            <Image
              src="/images/about.jpeg"
              alt="About Us"
              width={700}
              height={500}
              className="
                w-full
                h-[520px]
                object-cover
                rounded-[28px]
                transition-transform
                duration-700
                hover:scale-[1.03]
              "
            />

            {/* Floating Bottom Icon */}
            <div
              className="
                absolute
                -bottom-6
                left-10
                w-16
                h-16
                rounded-full
                bg-white
                shadow-xl
                flex
                items-center
                justify-center
              "
            >
              <i className="bi bi-heart-fill text-orange-500 text-3xl"></i>
            </div>
          </div>

          {/* Quote */}
          <div className="absolute -bottom-16 right-0 text-right">
            <p
              className="
                text-[24px]
                italic
                text-[#7A5732]
                leading-8
              "
              style={{ fontFamily: "cursive" }}
            >
              Every child deserves
              <br />
              a chance to shine
            </p>

            <div className="flex justify-end mt-2">
              <i className="bi bi-heart-fill text-orange-500 text-xl"></i>
            </div>
          </div>

        </div>
        </div>

      </div>

    </section>
  );
}