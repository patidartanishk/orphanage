import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f8f5ef] border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-[#2d1a0f] mb-4">
              A New Tomorrow
            </h3>

            <p className="text-gray-600 leading-relaxed max-w-sm">
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

              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-amber-600 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#impact" className="hover:text-amber-600 transition">
                  Impact
                </a>
              </li>

              <li>
                <a href="#work" className="hover:text-amber-600 transition">
                  Our Work
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-amber-600 transition">
                  Gallery
                </a>
              </li>

            </ul>
          </div>

          {/* Get Involved */}
          <div>

            <h4 className="font-bold text-[#2d1a0f] text-lg mb-5">
              Get Involved
            </h4>

            <ul className="space-y-3 text-gray-600">

              <li>
                <a href="#donate" className="hover:text-amber-600 transition">
                  Donate
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Volunteer
                </a>
              </li>

            </ul>

            <button className="mt-6 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-xl font-semibold transition">
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
                <Link
                  href="/privacy-policy"
                  className="hover:text-amber-600 transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="hover:text-amber-600 transition"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/child-protection"
                  className="hover:text-amber-600 transition"
                >
                  Child Protection Policy
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-600 text-sm">
            © 2026 A New Tomorrow. All Rights Reserved.
          </p>

          <div className="flex gap-5 text-xl text-gray-500">

            <a href="#" className="hover:text-amber-500 transition">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="#" className="hover:text-amber-500 transition">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="#" className="hover:text-amber-500 transition">
              <i className="bi bi-linkedin"></i>
            </a>

            <a href="#" className="hover:text-amber-500 transition">
              <i className="bi bi-youtube"></i>
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}