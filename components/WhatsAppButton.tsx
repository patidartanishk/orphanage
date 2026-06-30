export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919845216239"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-24
        right-6
        z-50

        w-16
        h-16

        rounded-full
        bg-[#25D366]

        flex
        items-center
        justify-center

        shadow-[0_12px_35px_rgba(37,211,102,0.35)]

        transition-all
        duration-300
        ease-in-out

        hover:scale-110
        hover:-translate-y-1
        hover:shadow-[0_20px_45px_rgba(37,211,102,0.45)]

        active:scale-95
      "
    >
      <i className="bi bi-whatsapp text-white text-4xl"></i>
    </a>
  );
}