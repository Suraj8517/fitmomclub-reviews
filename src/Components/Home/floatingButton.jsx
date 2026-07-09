import React, { useMemo } from "react";
import icon from "../../assets/home/icon.png";

/**
 * Fallback WhatsApp glyph so the button still renders correctly
 * even if the image asset fails to load or hasn't loaded yet.
 */
function WhatsAppGlyph({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.42.68 4.68 1.86 6.6L3 29l7.1-2.31A12.42 12.42 0 0 0 16 28c6.9 0 12.5-5.596 12.5-12.5S22.9 3 16 3zm0 22.72c-2 0-3.86-.55-5.46-1.5l-.39-.23-4.21 1.37 1.39-4.1-.25-.42a10.16 10.16 0 0 1-1.58-5.36c0-5.65 4.6-10.24 10.24-10.24 5.65 0 10.24 4.6 10.24 10.24 0 5.65-4.6 10.24-10.24 10.24zm5.6-7.66c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.65-.94-2.26-.25-.6-.5-.51-.68-.52h-.58c-.2 0-.53.08-.8.37-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.79-.73 2.04-1.44.25-.7.25-1.31.18-1.44-.08-.13-.28-.2-.58-.35z" />
    </svg>
  );
}

export default function FloatingWhatsAppButton({
  phoneNumber = "916379013865",
  message = "Hi! I'd like to know more.",
  position = "bottom-right",
  label = "Chat with us",
  showPing = true,
}) {
  const href = useMemo(
    () => `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    [phoneNumber, message]
  );

  const positionClasses =
    position === "bottom-left" ? "left-5 sm:left-6" : "right-5 sm:right-6";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className={`group fixed bottom-5 sm:bottom-6 ${positionClasses} z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2`}
    >
      {/* Ping animation ring — decorative, must not block clicks or intercept hover */}
      {showPing && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"
        />
      )}

      {/* Icon: real asset with an inline-SVG fallback if it fails to load */}
      <span className="relative z-10 flex h-7 w-7 items-center justify-center text-white">
        <img
          src={icon}
          alt=""
          width={28}
          height={28}
          loading="lazy"
          className="h-7 w-7 object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "block";
          }}
        />
        <WhatsAppGlyph className="hidden h-7 w-7" />
      </span>

      {/* Tooltip on hover, desktop only */}
      <span
        role="tooltip"
        className="pointer-events-none absolute right-full mr-3 hidden origin-right scale-95 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 sm:block"
      >
        {label}
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
      </span>
    </a>
  );
}