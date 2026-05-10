import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5500000000000?text=Oi!%20Quero%20fazer%20um%20teste%20gratis."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] inline-flex items-center gap-2 rounded-full bg-green-500 px-4 sm:px-5 py-3 text-sm sm:text-base text-white font-semibold shadow-xl hover:bg-green-600 transition"
    >
      <FaWhatsapp className="text-xl sm:text-2xl" />
      <span>WhatsApp</span>
    </a>
  );
}
