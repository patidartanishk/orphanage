import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Children running"
        fill
        priority
        className="object-cover brightness-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex items-center pt-24">

        <div className="max-w-2xl text-white animate-fadeIn">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight max-w-xl">
            Every child deserves
            <br />
            <span className="text-amber-400">
              love, care & a future.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Join hands with us and become a reason for a child's
            smile, education, and brighter tomorrow.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 mt-8 text-sm md:text-base font-medium">

            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              ✓ Registered NGO
            </span>

            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              ✓ 15+ Years Service
            </span>

            <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              ✓ 250+ Children Supported
            </span>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <button className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              Support Us
            </button>

            <button className="border border-white/60 backdrop-blur-sm px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-2">
              Learn More
            </button>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-2xl animate-bounce">
        ↓
      </div>

    </section>
  );
}