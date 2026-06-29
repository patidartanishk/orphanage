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
          <h1 className="text-3xl md:text-6xl font-semibold leading-[1.1] tracking-tight max-w-xl">
            Every child deserves
            <br />
            <span className="text-amber-300">
              love, care & a future.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Join hands with us and become a reason for a child's
            smile, education, and brighter tomorrow.
          </p>

          {/* Trust Indicators */}
<div className="flex flex-wrap gap-5 mt-8">

  <div
    className="
      flex
      items-center
      gap-2
      px-5
      py-2.5
      rounded-full
      bg-white/10
      backdrop-blur-md
      border
      border-white/15
      shadow-lg
      hover:bg-white/15
      transition-all
      duration-300
    "
  >
    <i className="bi bi-patch-check-fill text-amber-400 text-lg"></i>
    <span className="text-white text-sm font-medium">
      Registered NGO
    </span>
  </div>

  <div
    className="
      flex
      items-center
      gap-2
      px-5
      py-2.5
      rounded-full
      bg-white/10
      backdrop-blur-md
      border
      border-white/15
      shadow-lg
      hover:bg-white/15
      transition-all
      duration-300
    "
  >
    <i className="bi bi-award-fill text-amber-400 text-lg"></i>
    <span className="text-white text-sm font-medium">
      15+ Years Service
    </span>
  </div>

  <div
    className="
      flex
      items-center
      gap-2
      px-5
      py-2.5
      rounded-full
      bg-white/10
      backdrop-blur-md
      border
      border-white/15
      shadow-lg
      hover:bg-white/15
      transition-all
      duration-300
    "
  >
    <i className="bi bi-people-fill text-amber-400 text-lg"></i>
    <span className="text-white text-sm font-medium">
      250+ Children Supported
    </span>
  </div>

</div>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <button
className="
bg-amber-500
hover:bg-amber-400
text-black
px-9
py-4
rounded-xl
font-semibold
flex
items-center
gap-3
transition-all
duration-300
hover:-translate-y-2
hover:shadow-2xl
"
>
<i className="bi bi-heart-fill"></i>
Support Us
</button>

            <button
className="
border
border-white/50
backdrop-blur-sm
px-9
py-4
rounded-xl
font-semibold
flex
items-center
gap-3
hover:bg-white
hover:text-black
transition-all
duration-300
"
>
<i className="bi bi-arrow-right"></i>
Learn More
</button>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

<i className="bi bi-chevron-double-down text-white text-3xl"></i>

</div>

    </section>
  );
}