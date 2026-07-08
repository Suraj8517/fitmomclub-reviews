import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppButton({
  phoneNumber = "916379013865",
  message = "Hi! I'd like to know more.",
  position = "bottom-right",
}) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const positionClasses =
    position === "bottom-left" ? "left-5 sm:left-6" : "right-5 sm:right-6";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`group fixed bottom-5 sm:bottom-6 ${positionClasses} z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]`}
    >
      {/* Ping animation ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
      <MessageCircle className="relative h-7 w-7 text-white" fill="white" strokeWidth={0} />

      {/* Tooltip on hover, desktop only */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
    </a>
  );
}