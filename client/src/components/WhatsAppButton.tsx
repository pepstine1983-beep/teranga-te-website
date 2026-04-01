/**
 * WhatsApp Floating Button
 * Fixed bottom-right button with pulse animation and hover tooltip.
 * Links to WhatsApp with pre-filled message.
 */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_NUMBER = "221773372628";

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const [hovered, setHovered] = useState(false);

  const message =
    language === "fr"
      ? "Bonjour Teranga TE, je souhaite avoir des informations sur vos services."
      : "Hello Teranga TE, I would like information about your services.";

  const tooltip = language === "fr" ? "Contactez-nous sur WhatsApp" : "Contact us on WhatsApp";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`bg-white text-[#0B3D6E] text-sm font-['Outfit'] font-medium px-4 py-2.5 rounded-xl shadow-lg border border-[#0B3D6E]/10 transition-all duration-300 whitespace-nowrap ${
          hovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        {tooltip}
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#25D366] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

        {/* WhatsApp icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 relative z-10"
          fill="white"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958a15.9 15.9 0 0 0 8.832 2.668C24.826 31.998 32 24.822 32 16.004 32 7.176 24.826 0 16.004 0zm9.53 22.606c-.396 1.116-2.326 2.134-3.21 2.27-.884.134-2.008.19-3.24-.204a29.584 29.584 0 0 1-2.932-1.084c-5.158-2.23-8.528-7.456-8.788-7.802-.258-.346-2.108-2.806-2.108-5.354 0-2.548 1.334-3.804 1.808-4.322.474-.518 1.034-.648 1.378-.648.344 0 .69.004 .99.018.318.014.744-.12 1.164.888.42 1.01 1.428 3.49 1.554 3.744.126.258.21.558.042.898-.168.344-.252.558-.504.858-.252.302-.53.672-.756.902-.252.258-.514.536-.222 1.054.294.518 1.306 2.154 2.804 3.49 1.926 1.718 3.55 2.252 4.068 2.51.518.258.82.216 1.12-.13.302-.346 1.292-1.506 1.636-2.024.344-.518.688-.432 1.162-.258.474.172 3.014 1.422 3.53 1.68.518.258.862.388.99.604.126.216.126 1.252-.27 2.37z" />
        </svg>
      </a>
    </div>
  );
}
