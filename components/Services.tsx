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
      className="bg-gradient-to-br from-[#24140d] via-[#2d1a12] to-[#3a2115] py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left Side */}
          <div className="sticky top-32 h-fit">

            <p className="text-[#c99700] uppercase tracking-[0.35em] mb-6">
              Our Programs
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-8">
              What We Do
              <br />
              <span className="text-[#c99700]">
                Every Day
              </span>
            </h2>

            <div className="w-20 h-[3px] bg-[#c99700] mb-8"></div>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              We work every day to bring hope, care and opportunities
              to children so they can dream, grow and build a
              brighter future.
            </p>

          </div>

          {/* Right Side */}
          <div className="space-y-10">

            {services.map((service, index) => (
              <div
                key={index}
                className="flex gap-8 border-b border-white/10 pb-10 hover:translate-x-2 transition-all duration-300"
              >

                <div className="text-5xl font-bold text-[#c99700] min-w-[80px]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>

                  <h3 className="text-3xl font-semibold text-[#c99700] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
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