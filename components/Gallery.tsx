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
    <section id="gallery" className="bg-[#f8f5ef] py-32">
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-amber-700 uppercase tracking-[0.3em] mb-4">
          Gallery
        </p>

        <h2 className="text-5xl font-bold text-[#2d1a0f] mb-4">
          Moments That Matter
        </h2>

        <p className="text-xl text-gray-600 mb-12">
          Every smile tells a story of hope, growth and belonging.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={img}
                alt="Gallery"
                width={500}
                height={350}
                className="w-full h-[300px] object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}