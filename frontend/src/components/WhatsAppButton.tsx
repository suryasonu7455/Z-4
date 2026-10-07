import { MessageCircle } from "lucide-react";
import { site } from "../config";

export function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi Iron Heaven, I want to book a free trial.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <MessageCircle fill="currentColor" />
    </a>
  );
}
