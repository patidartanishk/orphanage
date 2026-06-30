export default function VisitUs() {
  return (
    <section
      id="visit"
      className="bg-[#FCF8F2] py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.35em] text-amber-500 font-semibold mb-4">
            FIND US
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#2D1A0F]">
            Visit Our Centre
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
            We'd love to welcome you and show you the difference
            we're making together. Visit us, meet our team and
            experience the warmth of our community.
          </p>

          <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mt-8"></div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-start">

          {/* Google Map */}
          <div
            data-aos="fade-right"
            className="
              overflow-hidden
              rounded-[30px]
              border
              border-amber-100
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_30px_80px_rgba(245,158,11,0.18)]
            "
          >
            <iframe
              src="https://www.google.com/maps?q=Ebenezer+Child+Care+Centre+Vidyasagar+Layout+Kembathahalli+Cross+Bengaluru+560083&output=embed"
              width="100%"
              height="600"
              loading="lazy"
              className="w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Card */}
          <div
            data-aos="fade-left"
            className="
            h-full
              bg-white
              rounded-[30px]
              border
              border-amber-100
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_30px_80px_rgba(245,158,11,0.18)]
            "
          >
            <h3 className="text-3xl font-bold text-[#2D1A0F] mb-8">
              Contact Details
            </h3>

            <div className="space-y-8">

              {/* Address */}
              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-geo-alt-fill text-amber-600 text-xl"></i>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-[#2D1A0F]">
                    Address
                  </h4>

                  <p className="text-gray-600 mt-2 leading-7">
                    Ebenezer Child Care Centre
                    <br />
                    Vidyasagar Layout,
                    <br />
                    Kembathahalli Cross,
                    <br />
                    Bengaluru – 560083
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-telephone-fill text-amber-600 text-xl"></i>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-[#2D1A0F]">
                    Phone
                  </h4>

                  <a
                    href="tel:+919845216239"
                    className="text-gray-600 hover:text-amber-500 transition mt-2 block"
                  >
                    +91 98452 16239
                  </a>
                </div>

              </div>


              {/* Visiting Hours */}
              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-clock-fill text-amber-600 text-xl"></i>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-[#2D1A0F]">
                    Visiting Hours
                  </h4>

                  <p className="text-gray-600 mt-2 leading-7">
                    Monday – Saturday
                    <br />
                    9:00 AM – 5:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* Button */}
            <a
              href="https://maps.google.com/?q=Ebenezer+Child+Care+Centre+Vidyasagar+Layout+Kembathahalli+Cross+Bengaluru+560083"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-flex
                items-center
                justify-center
                gap-3
                w-full
                bg-amber-500
                hover:bg-amber-400
                text-[#2D1A0F]
                font-semibold
                px-6
                py-4
                rounded-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <i className="bi bi-geo-alt-fill"></i>
              Open in Google Maps
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}