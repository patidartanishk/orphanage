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
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#work">Our Work</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold text-[#2d1a0f] text-lg mb-5">
              Get Involved
            </h4>

            <ul className="space-y-3 text-gray-600">
              <li><a href="#donate">Donate</a></li>
              <li><a href="#">Volunteer</a></li>
            </ul>

            <button className="mt-6 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-xl font-semibold transition w-full sm:w-auto">
              Donate Now
            </button>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-[#2d1a0f] text-lg mb-5">
              Legal
            </h4>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/child-protection">
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