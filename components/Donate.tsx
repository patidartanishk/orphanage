import Image from "next/image";

export default function Donate() {
  return (
    <section
      id="donate"
      className="
relative
overflow-hidden
bg-[#FCF8F2]
pt-16
pb-8
md:pt-20
md:pb-10
lg:pt-24
lg:pb-12
"
    >
      {/* Background Blur */}

      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-amber-100 blur-[120px] opacity-60"></div>

      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-orange-100 blur-[140px] opacity-60"></div>

      {/* Bootstrap Decorative Icons */}

      <i className="bi bi-heart-fill absolute top-28 left-10 text-pink-400 text-3xl opacity-20 hidden lg:block"></i>

      <i className="bi bi-stars absolute top-44 right-20 text-amber-400 text-3xl opacity-20 hidden lg:block"></i>

      <i className="bi bi-flower1 absolute bottom-20 left-1/4 text-green-500 text-4xl opacity-20 hidden lg:block"></i>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <p
            className="
              uppercase
              tracking-[0.45em]
              text-amber-500
              font-semibold
              text-xs
              sm:text-sm
            "
          >
            TOGETHER WE CAN
          </p>

          <h2
            className="
              mt-4

              text-[#2D1A0F]

              text-4xl
              sm:text-5xl
              lg:text-6xl

              font-black

              leading-tight
            "
          >
            Change Lives
          </h2>

          <p
            className="
              mt-6

              text-gray-600

              text-base
              sm:text-lg

              leading-8

              max-w-2xl
              mx-auto
            "
          >
            Every contribution creates hope. Whether you donate,
            volunteer your time or visit our centre, your kindness
            helps children build a brighter future.
          </p>

        </div>

                {/* Hero Image */}

        <div className="relative mt-14 sm:mt-16 lg:mt-20 flex justify-center">

          <div
            className="
              relative
              overflow-hidden

              rounded-[32px]
              lg:rounded-[42px]

              border-[6px]
              lg:border-[8px]
              border-white

              shadow-[0_35px_80px_rgba(0,0,0,0.15)]

              w-full
              max-w-sm
              sm:max-w-2xl
              lg:max-w-5xl
            "
          >

            <Image
              src="/images/donate-main.png"
              alt="Happy Children"
              width={1600}
              height={900}
              priority
              className="
                w-full

                h-[220px]
                sm:h-[320px]
                md:h-[380px]
                lg:h-[460px]

                object-cover

                transition-all
                duration-700

                hover:scale-105
              "
            />

            {/* Gradient */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

          </div>

          {/* Floating Bootstrap Icons */}

          <div className="hidden lg:block">

            <i
              className="
                bi bi-heart-fill

                absolute

                -left-8
                top-10

                text-pink-500

                text-5xl

                opacity-80

                animate-pulse
              "
            ></i>

            <i
              className="
                bi bi-stars

                absolute

                right-6
                top-6

                text-amber-400

                text-4xl

                animate-pulse
              "
            ></i>

            <i
              className="
                bi bi-balloon-heart-fill

                absolute

                left-16
                bottom-8

                text-rose-400

                text-4xl
              "
            ></i>

            <i
              className="
                bi bi-flower1

                absolute

                right-20
                bottom-8

                text-green-500

                text-4xl
              "
            ></i>

          </div>

        </div>

                {/* Action Cards */}

        <div className="relative z-20 mt-10 lg:-mt-20">

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-[1fr_1.25fr_1fr]

              gap-6
              items-center
            "
          >

            {/* Volunteer Card */}

            <div
              className="
                order-2
                lg:order-1

                group
                relative
                overflow-hidden

                bg-white/95
                backdrop-blur-lg

                rounded-[30px]

                border
                border-[#F4E6D3]

                p-6
                lg:p-8

                shadow-lg

                hover:-translate-y-3
                hover:shadow-2xl

                transition-all
                duration-500
              "
            >

              {/* Accent */}

              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-green-400 to-green-600"></div>

              {/* Background Glow */}

              <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-green-100 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}

              <div
                className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-green-100

                  flex
                  items-center
                  justify-center

                  shadow-sm
                "
              >

                <i className="bi bi-people-fill text-3xl text-[#25D366] group-hover:scale-110 transition duration-300"></i>

              </div>

              <h3
                className="
                  mt-6

                  text-2xl
                  lg:text-3xl

                  font-bold

                  text-[#2D1A0F]
                "
              >

                Become a Volunteer

              </h3>

              <p
                className="
                  mt-4

                  text-gray-600

                  leading-7
                "
              >

                Give your time and skills to help children
                learn, grow and create beautiful memories.

              </p>

              <ul className="mt-6 space-y-3 text-gray-700">

                <li className="flex items-center gap-3">

                  <i className="bi bi-check-circle-fill text-green-500"></i>

                  Mentor children

                </li>

                <li className="flex items-center gap-3">

                  <i className="bi bi-check-circle-fill text-green-500"></i>

                  Conduct fun activities

                </li>

                <li className="flex items-center gap-3">

                  <i className="bi bi-check-circle-fill text-green-500"></i>

                  Inspire young minds

                </li>

              </ul>

              <a
                href="https://wa.me/919845216239?text=Hello%20Ebenezer%20Child%20Care%20Centre,%20I%20would%20like%20to%20become%20a%20volunteer."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8

                  w-full

                  inline-flex

                  justify-center
                  items-center

                  gap-3

                  bg-[#25D366]

                  hover:bg-[#1EBE5A]

                  text-white

                  py-4

                  rounded-xl

                  font-semibold

                  transition-all
                  duration-300
                "
              >

                <i className="bi bi-whatsapp"></i>

                Become a Volunteer

              </a>

            </div>

                        {/* Featured Donate Card */}

            <div
              className="
                order-1
                md:order-1
                lg:order-2

                relative
                overflow-hidden

                rounded-[34px]

                bg-gradient-to-br
                from-amber-400
                via-amber-500
                to-orange-500

                text-white

                p-7
                lg:p-10

                shadow-[0_25px_60px_rgba(245,158,11,0.35)]

                lg:scale-110
                lg:-translate-y-8

                hover:scale-[1.12]
                hover:-translate-y-10

                transition-all
                duration-500
              "
            >

              {/* Decorative Glow */}

              <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-white/15 blur-3xl"></div>

              <div className="absolute -bottom-20 -left-12 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>

              {/* Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  bg-white

                  text-amber-600

                  px-4
                  py-2

                  rounded-full

                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                "
              >

                <i className="bi bi-award-fill"></i>

                Most Impactful

              </div>

              {/* Heart Icon */}

              <div
                className="
                  absolute
                  right-8
                  top-8

                  w-14
                  h-14

                  rounded-2xl

                  bg-white/20

                  flex
                  items-center
                  justify-center
                "
              >

                <i className="bi bi-heart-fill text-2xl"></i>

              </div>

              {/* Heading */}

              <h3
                className="
                  mt-8

                  text-4xl
                  lg:text-5xl

                  font-black

                  leading-tight
                "
              >

                Donate
                <br />
                Now

              </h3>

              {/* Description */}

              <p
                className="
                  mt-5

                  text-white/95

                  leading-8

                  text-base
                  lg:text-lg
                "
              >

                Your generosity provides nutritious meals,
                quality education, healthcare and a safe,
                loving home for every child.

              </p>

              {/* Features */}

              <div className="mt-7 space-y-3">

                <div className="flex items-center gap-3">

                  <i className="bi bi-check-circle-fill"></i>

                  100% goes towards children's welfare

                </div>

                <div className="flex items-center gap-3">

                  <i className="bi bi-check-circle-fill"></i>

                  Safe & secure donation process

                </div>

                <div className="flex items-center gap-3">

                  <i className="bi bi-check-circle-fill"></i>

                  Make a lasting difference today

                </div>

              </div>

              {/* Button */}

              <a
                href="/donate"
                className="
                  mt-8

                  w-full

                  inline-flex

                  justify-center
                  items-center

                  gap-3

                  bg-white

                  text-amber-600

                  py-4

                  rounded-2xl

                  font-bold

                  shadow-lg

                  hover:bg-amber-50

                  transition-all
                  duration-300
                "
              >

                <i className="bi bi-heart-fill"></i>

                Donate Now

              </a>

            </div>

                        {/* Visit Card */}

            <div
              className="
                order-3

                group
                relative
                overflow-hidden

                bg-white/95
                backdrop-blur-lg

                rounded-[30px]

                border
                border-[#F4E6D3]

                p-6
                lg:p-8

                shadow-lg

                hover:-translate-y-3
                hover:shadow-2xl

                transition-all
                duration-500
              "
            >

              {/* Accent */}

              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-sky-400 to-blue-600"></div>

              {/* Background Glow */}

              <div className="absolute -left-16 -bottom-16 w-40 h-40 rounded-full bg-sky-100 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}

              <div
                className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-sky-100

                  flex
                  items-center
                  justify-center

                  shadow-sm
                "
              >

                <i className="bi bi-geo-alt-fill text-3xl text-sky-600 group-hover:scale-110 transition duration-300"></i>

              </div>

              {/* Title */}

              <h3
                className="
                  mt-6

                  text-2xl
                  lg:text-3xl

                  font-bold

                  text-[#2D1A0F]
                "
              >

                Want to Visit?

              </h3>

              {/* Description */}

              <p
                className="
                  mt-4

                  text-gray-600

                  leading-7
                "
              >

                Visit our centre, meet the children and
                experience the positive impact your support
                creates in their lives.

              </p>

              {/* Highlights */}

              <ul className="mt-6 space-y-3 text-gray-700">

                <li className="flex items-center gap-3">

                  <i className="bi bi-check-circle-fill text-sky-500"></i>

                  Guided visit

                </li>

                <li className="flex items-center gap-3">

                  <i className="bi bi-check-circle-fill text-sky-500"></i>

                  Meet our team

                </li>

                <li className="flex items-center gap-3">

                  <i className="bi bi-check-circle-fill text-sky-500"></i>

                  Learn about our mission

                </li>

              </ul>

              {/* Button */}

              <a
                href="/#visit"
                className="
                  mt-8

                  w-full

                  inline-flex

                  justify-center
                  items-center

                  gap-3

                  bg-sky-600

                  hover:bg-sky-700

                  text-white

                  py-4

                  rounded-xl

                  font-semibold

                  transition-all
                  duration-300
                "
              >

                <i className="bi bi-compass-fill"></i>

                Plan Your Visit

              </a>

            </div>

          </div>

        </div>

                {/* Bottom Message */}

        <div className="mt-12 lg:mt-16 text-center">

          <div
            className="
              inline-flex
              items-center
              gap-3

              px-6
              py-3

              rounded-full

              bg-white

              border
              border-amber-100

              shadow-md
            "
          >

            <i className="bi bi-heart-fill text-amber-500 text-lg"></i>

            <p className="text-sm sm:text-base text-gray-700 font-medium">
              Every act of kindness creates a brighter tomorrow.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}