import { X } from "lucide-react";
import { useEffect } from "react";

export type MediaItem = {
  src: string;
  alt: string;
  type: "image" | "video";
  poster?: string;
};

export function Lightbox({
  item,
  onClose,
}: {
  item: MediaItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute top-4 right-4 text-white"
        aria-label="Close lightbox"
        onClick={onClose}
      >
        <X size={28} />
      </button>
      <div className="max-h-[88vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
        {item.type === "video" ? (
          <video
            className="max-h-[88vh] w-full"
            controls
            autoPlay
            playsInline
            poster={item.poster}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <img src={item.src} alt={item.alt} className="max-h-[88vh] w-full object-contain" />
        )}
      </div>
    </div>
  );
}
