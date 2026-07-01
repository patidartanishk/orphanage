import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f8f5ef] border-t border-gray-200 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#2d1a0f] mb-4">
              Ebenezer Child Care Centre
            </h3>

            <p className="text-gray-600 leading-8">
              Every child deserves love, care, education and a brighter
              future. Together we create opportunities that transform
              lives and build stronger communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#2d1a0f] text-lg mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-600">
              <li><a href="/#"  className="hover:text-amber-600 transition">Home</a></li>
              <li><a href="/#about"  className="hover:text-amber-600 transition">About</a></li>
              <li><a href="/#impact"  className="hover:text-amber-600 transition">Impact</a></li>
              <li><a href="/#work"  className="hover:text-amber-600 transition">Our Work</a></li>
              <li><a href="/#gallery"  className="hover:text-amber-600 transition">Gallery</a></li>
              <li>
  <a
    href="/#visit"
    className="hover:text-amber-600 transition"
  >
    Visit Us
  </a>
</li>
            </ul>
          </div>

         {/* Get Involved */}

<div>
  <h4 className="font-bold text-[#2d1a0f] text-lg mb-5">
    Get Involved
  </h4>

  <ul className="space-y-3 text-gray-600 mb-6">
    <li>
      <a
        href="/#donate"
        className="hover:text-amber-600 transition"
      >
        Contribute
      </a>
    </li>

    <li>
      <a
        href="https://wa.me/919845216239?text=Hello%20Ebenezer%20Child%20Care%20Centre,%20I%20would%20like%20to%20become%20a%20volunteer."
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-600 transition"
      >
        Become a Volunteer
      </a>
    </li>

    <li>
      <a
        href="/#visit"
        className="hover:text-sky-600 transition"
      >
        Plan a Visit
      </a>
    </li>

  <li>
    <a
  href="/#donate"
  className="
    bg-amber-500
    hover:bg-amber-400
    text-[#2D1A0F]

    px-6
    py-3

    rounded-xl

    font-semibold

    flex
    items-center
    justify-center
    gap-2

    transition-all
    duration-300

    hover:-translate-y-1
    hover:shadow-xl

    w-full
  "
>
  <i className="bi bi-heart-fill"></i>

  Donate Now
</a>
  </li>
  </ul>
</div>
          {/* Legal */}
          <div>
            <h4 className="font-bold text-[#2d1a0f] text-lg mb-5">
              Legal
            </h4>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/privacy-policy"  className="hover:text-amber-600 transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms"  className="hover:text-amber-600 transition">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/child-protection"  className="hover:text-amber-600 transition">
                  Child Protection Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-300 mt-14 pt-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Copyright */}

            <p className="text-gray-600 text-sm text-center lg:text-left">
              © 2026 Ebenezer Child Care Centre.
              <br className="lg:hidden" />
              All Rights Reserved.
            </p>

            {/* Made With */}

            <div className="flex items-center gap-2 text-sm sm:text-base">

              <span className="uppercase tracking-wider text-gray-500">
                Made with
              </span>

              <i className="bi bi-heart-fill text-red-500 animate-pulse"></i>

              <span className="uppercase tracking-wider text-gray-500">
                by
              </span>

              <a
                href="https://antilabs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#2D1A0F] text-lg hover:text-amber-500 transition"
              >
                AntiLabs
              </a>

            </div>

            {/* Social */}

            <div className="flex items-center gap-6 text-xl text-gray-500">

              <a
                href="https://www.facebook.com/ebenezerchildcarecentre"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/ebenezer_childcare_centre/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://maps.google.com/?q=Ebenezer+Child+Care+Centre+Vidyasagar+Layout+Kembathahalli+Cross+Bengaluru+560083"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition"
              >
                <i className="bi bi-geo-alt-fill"></i>
              </a>

              <a
                href="tel:+919845216239"
                className="hover:text-amber-500 transition"
              >
                <i className="bi bi-telephone-fill"></i>
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}