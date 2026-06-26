export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3">

        <div className="flex items-center justify-between bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-3">

          <h1 className="text-white text-2xl font-bold">
            A New Tomorrow
          </h1>

          <div className="hidden md:flex items-center gap-8 text-white">

            <a href="#about" className="hover:text-amber-400 transition">
              About
            </a>

            <a href="#impact"  className="hover:text-amber-400 transition">
              Impact
              </a>

            <a href="#work" className="hover:text-amber-400 transition">
              Our Work
            </a>

            <a href="#gallery" className="hover:text-amber-400 transition">
              Gallery
            </a>

            <a href="#donate" className="hover:text-amber-400 transition">
              Donate
            </a>

            <button className="bg-amber-500 text-black px-5 py-2 rounded-xl font-semibold hover:bg-amber-600 transition">
              Donate Now
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}