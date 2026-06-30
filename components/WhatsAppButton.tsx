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

        shadow-2xl

        hover:scale-110
        hover:shadow-[0_20px_40px_rgba(37,211,102,0.45)]

        transition-all
        duration-300

        animate-bounce
      "
    >
      <i className="bi bi-whatsapp text-white text-4xl"></i>
    </a>
  );
}