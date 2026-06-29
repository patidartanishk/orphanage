import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3">

        <div className="flex items-center justify-between bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-3">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 bg-white rounded-x1 p-0 shadow-md">
               <Image
    src="/images/ebenezer-logo.png"
    alt="Ebenezer Child Care Centre"
    width={70}
    height={70}
    className="object-contain"
  />

</div>
 
  <div>

    <h1 className="text-2xl font-bold text-[#FFFFFF] leading-tight">
      Ebenezer Child Care Centre
    </h1>

    <p className="text-sm text-amber-100 font-medium">
      A Home. A Future. A Hope.
    </p>

  </div>

</div>

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

           <button
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
    gap-2
    transition
  "
>
  <i className="bi bi-heart-fill text-base"></i>
  <span>Donate Now</span>
</button>

          </div>

        </div>

      </div>
    </nav>
  );
}