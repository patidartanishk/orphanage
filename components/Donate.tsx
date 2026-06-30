import Image from "next/image";

export default function Donate() {
  const donations = [
    {
      amount: "₹500",
      title: "Food Support",
      desc: "Provides 21 nutritious meals",
      icon: "bi-cup-hot-fill",
      color: "text-orange-500",
    },
    {
      amount: "₹2,000",
      title: "Education Support",
      desc: "Books, stationery & learning materials",
      icon: "bi-book-fill",
      color: "text-amber-500",
      featured: true,
    },
    {
      amount: "₹5,000",
      title: "Healthcare Support",
      desc: "Medical care & wellness support",
      icon: "bi-heart-pulse-fill",
      color: "text-rose-500",
    },
  ];

  return (
    <section
      id="donate"
      className="bg-[#24140d] py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 lg:pt-24">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-amber-400 uppercase tracking-[0.35em] text-xs sm:text-sm mb-3">
              Get Involved
            </p>

            <div className="w-16 h-[2px] bg-amber-400 mb-5"></div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Every Rupee
              <br />
              Changes a Life
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-8 mb-8 lg:mb-10 max-w-xl">
              Your support helps provide food, education, healthcare
              and a brighter future for children.
            </p>

            {/* Donation Cards */}

            <div className="space-y-4 sm:space-y-5">

              {donations.map((item, index) => (

                <div
                  key={index}
                  className={`relative flex items-center justify-between rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-5 transition-all duration-300 hover:translate-x-2 ${
                    item.featured
                      ? "bg-amber-500 text-black"
                      : "bg-[#2b160d] border border-white/10"
                  }`}
                >

                  {item.featured && (
                    <div className="absolute -top-3 left-6 bg-white text-black px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold">
                      BEST IMPACT
                    </div>
                  )}

                  <div className="flex items-center gap-3 sm:gap-5">

                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center">

                      <i
                        className={`bi ${item.icon} ${item.color} text-lg sm:text-xl`}
                      ></i>

                    </div>

                    <div>

                      <h3
                        className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                          item.featured
                            ? "text-black"
                            : "text-amber-400"
                        }`}
                      >
                        {item.amount}
                      </h3>

                      <h4 className="font-semibold text-base sm:text-lg">
                        {item.title}
                      </h4>

                      <p
                        className={`text-xs sm:text-sm ${
                          item.featured
                            ? "text-black/70"
                            : "text-gray-400"
                        }`}
                      >
                        {item.desc}
                      </p>

                    </div>

                  </div>

                  <span className="text-xl sm:text-2xl lg:text-3xl">
                    →
                  </span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-10">

              <button className="w-full sm:w-auto bg-amber-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition">
                Donate Now
              </button>

              <button className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition">
                Become a Volunteer
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative mt-10 lg:mt-0">

            <Image
              src="/images/donate-main..png"
              alt="Helping children"
              width={700}
              height={800}
              className="rounded-3xl object-cover w-full h-[320px] sm:h-[430px] lg:h-[520px]"
            />

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/70 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-2xl">

              <p className="text-white font-semibold text-sm sm:text-base">
                Small contribution.
              </p>

              <p className="text-amber-400 font-bold text-base sm:text-lg">
                Big change.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}