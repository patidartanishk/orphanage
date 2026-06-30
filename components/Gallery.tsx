import Image from "next/image";

export default function Gallery() {
  const images = [
    "/images/gallery1.jpeg",
    "/images/gallery2.jpeg",
    "/images/gallery3.jpeg",
    "/images/gallery4.jpeg",
    "/images/gallery5.jpeg",
    "/images/gallery6.jpeg",
  ];

  return (
    <section
      id="gallery"
      className="bg-[#f8f5ef] py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Heading */}
        <p className="text-amber-700 uppercase tracking-[0.3em] text-xs md:text-sm mb-3">
          Gallery
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-[#2d1a0f] mb-4">
          Moments That Matter
        </h2>

        <p className="text-base md:text-xl text-gray-600 mb-10 md:mb-14 max-w-2xl">
          Every smile tells a story of hope, growth and belonging.
        </p>

        {/* Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-2xl
                md:rounded-3xl
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                width={500}
                height={350}
                className="
                  w-full
                  h-40
                  sm:h-48
                  md:h-[300px]
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-110
                "
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}