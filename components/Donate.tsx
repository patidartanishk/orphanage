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
    <section id="donate" className="bg-[#24140d] py-20">
      <div className="max-w-7xl mx-auto px-8 pt-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="text-amber-400 uppercase tracking-[0.35em] mb-4">
              Get Involved
            </p>

            <div className="w-16 h-[2px] bg-amber-400 mb-6"></div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Every Rupee
              <br />
              Changes a Life
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-xl">
              Your support helps provide food, education,
              healthcare and a brighter future for children.
            </p>

            {/* Donation Options */}
            <div className="space-y-5">

              {donations.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center justify-between rounded-3xl p-4 transition-all duration-300 hover:translate-x-2 ${
                    item.featured
                      ? "bg-amber-500 text-black"
                      : "bg-[#2b160d] border border-white/10"
                  }`}
                >
                  {item.featured && (
                    <div className="absolute -top-3 left-8 bg-white text-black px-4 py-1 rounded-full text-xs font-bold">
                      BEST IMPACT
                    </div>
                  )}

                  <div className="flex items-center gap-5">

                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
  <i className={`bi ${item.icon} ${item.color} text-2xl`}></i>
</div>

                    <div>

                      <h3
                        className={`text-4xl font-bold ${
                          item.featured
                            ? "text-black"
                            : "text-amber-400"
                        }`}
                      >
                        {item.amount}
                      </h3>

                      <h4 className="font-semibold text-lg">
                        {item.title}
                      </h4>

                      <p
                        className={`text-sm ${
                          item.featured
                            ? "text-black/70"
                            : "text-gray-400"
                        }`}
                      >
                        {item.desc}
                      </p>

                    </div>

                  </div>

                  <span className="text-3xl">
                    →
                  </span>

                </div>
              ))}

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-amber-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition">
                Donate Now
              </button>

              <button className="border border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition">
                Become a Volunteer
              </button>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">

            <Image
              src="/images/donate-main..png"
              alt="Helping children"
              width={700}
              height={800}
              className="rounded-3xl object-cover w-full h-[520px]"
            />

            <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm px-6 py-4 rounded-2xl">
              <p className="text-white font-semibold">
                Small contribution.
              </p>
              <p className="text-amber-400 font-bold">
                Big change.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}