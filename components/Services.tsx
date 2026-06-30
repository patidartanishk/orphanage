export default function Services() {
  const services = [
    {
      title: "Safe Home",
      desc: "Providing shelter, warmth and belonging for every child in need.",
    },
    {
      title: "Education Support",
      desc: "Access to quality education, books, tutoring and digital learning.",
    },
    {
      title: "Nutrition & Health",
      desc: "Nutritious meals, medical checkups and wellness programs.",
    },
    {
      title: "Emotional Care",
      desc: "Counselling, mentorship and emotional support for every child.",
    },
    {
      title: "Skill Development",
      desc: "Life skills and vocational training for a brighter future.",
    },
    {
      title: "Community Events",
      desc: "Outings, celebrations and activities that build happiness.",
    },
  ];

  return (
    <section
      id="work"
      className="bg-gradient-to-br from-[#24140d] via-[#2d1a12] to-[#3a2115] py-16 md:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Side */}
          <div className="lg:sticky lg:top-32 h-fit">

            <p className="text-[#c99700] uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">
              Our Programs
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white mb-6">
              What We Do
              <br />
              <span className="text-[#c99700]">
                Every Day
              </span>
            </h2>

            <div className="w-16 sm:w-20 h-[3px] bg-[#c99700] mb-6"></div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-8 max-w-lg">
              We work every day to bring hope, care and opportunities
              to children so they can dream, grow and build a brighter
              future.
            </p>

          </div>

          {/* Right Side */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">

            {services.map((service, index) => (

              <div
                key={index}
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  sm:gap-6
                  lg:gap-8
                  border-b
                  border-white/10
                  pb-6
                  lg:pb-10
                  transition-all
                  duration-300
                  hover:translate-x-2
                "
              >

                {/* Number */}

                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c99700] min-w-[60px] lg:min-w-[80px]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}

                <div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#c99700] mb-2 lg:mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-7 max-w-xl">
                    {service.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}