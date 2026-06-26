import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#f8f5ef] py-20">
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
  <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 items-center mt-12">

    {/* LEFT */}

    <div>

      <p className="text-lg leading-5 text-gray-600 max-w-xl">
        For over 15 years, Ebenezer Child Care Center has provided a
        safe home, quality education, healthcare and emotional support
        for children in need.

        <br />
        <br />

        We believe every child deserves an opportunity to dream,
        learn and grow in a nurturing environment filled with love
        and hope.
      </p>

      {/* Values */}

      <div className="space-y-6 mt-10">

        <div className="flex items-start gap-5">

          <div className="w-14 h-14 rounded-2xl bg-amber-50 shadow flex items-center justify-center text-2xl">
            ❤️
          </div>

          <div>

            <h3 className="text-2xl font-bold text-[#2D1A0F]">
              Love & Safety
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              Every child deserves a secure home where they feel
              protected, loved and valued.
            </p>

          </div>

        </div>

        <div className="flex items-start gap-5">

          <div className="w-14 h-14 rounded-2xl bg-amber-50 shadow flex items-center justify-center text-2xl">
            📚
          </div>

          <div>

            <h3 className="text-2xl font-bold text-[#2D1A0F]">
              Education
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              Empowering children through quality education,
              creativity and lifelong learning.
            </p>

          </div>

        </div>

        <div className="flex items-start gap-5">

          <div className="w-14 h-14 rounded-2xl bg-amber-50 shadow flex items-center justify-center text-2xl">
            🤝
          </div>

          <div>

            <h3 className="text-2xl font-bold text-[#2D1A0F]">
              Community
            </h3>

            <p className="mt-2 text-gray-600 leading-7">
              Building trust, belonging and meaningful relationships
              that help children thrive.
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* RIGHT */}

    <div className="relative flex justify-center">

      {/* Decorative Hearts */}

      <div className="absolute -top-8 left-10 text-3xl animate-pulse">
        🤍
      </div>

      <div className="absolute top-2 left-24 text-xl text-amber-500">
        ❤
      </div>

      {/* Image Card */}

      <div
        className="
          relative
          bg-white
          rounded-[36px]
          p-5
          border
          border-[#F2E7D8]
          shadow-[0_25px_60px_rgba(0,0,0,0.08)]
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
            text-[#2D1A0F]
            font-bold
            z-20
          "
        >
          Our Values
        </div>

        {/* Main Image */}

        <Image
          src="/images/about.jpg"
          alt="About Us"
          width={700}
          height={500}
          className="
            rounded-[28px]
            object-cover
            w-full
            h-[520px]
            transition-all
            duration-700
            hover:scale-[1.03]
          "
        />

        {/* Bottom Heart */}

        <div
          className="
            absolute
            -bottom-5
            left-10
            w-16
            h-16
            rounded-full
            bg-white
            shadow-xl
            flex
            items-center
            justify-center
            text-3xl
          "
        >
          🧡
        </div>

      </div>

      {/* Quote */}

      <div
        className="
          absolute
          -bottom-16
          right-0
          text-right
        "
      >
        <p
          className="
            text-[26px]
            italic
            text-[#6B4B2A]
            font-medium
            leading-8
          "
          style={{
            fontFamily: "cursive",
          }}
        >
          Every child
          <br />
          deserves a chance 🧡
        </p>
      </div>

      {/* Decorative Dots */}

      <div
        className="
          absolute
          -top-8
          right-0
          grid
          grid-cols-4
          gap-2
        "
      >
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-amber-300"
          />
        ))}
      </div>

    </div>

  </div>

</div>

</section>
    
        
  );
}