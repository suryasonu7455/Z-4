import { Play } from "lucide-react";
import { useState } from "react";
import { Lightbox, type MediaItem } from "../components/Lightbox";
import { Reveal, SectionHeading } from "../components/Reveal";

const gallery: MediaItem[] = [
  { type: "image", src: "/images/IMG_9331.jpg", alt: "Iron Heaven strength floor and training energy" },
  { type: "image", src: "/images/IMG_9332.jpg", alt: "Members training with focus and intensity" },
  { type: "video", src: "/videos/gallery-clip.mp4", poster: "/images/IMG_9333.jpg", alt: "Training session highlight reel" },
  { type: "image", src: "/images/IMG_9334.jpg", alt: "Gym space with heavy lifting equipment" },
  { type: "image", src: "/images/IMG_9335.jpg", alt: "Functional training setup inside the gym" },
  { type: "video", src: "/videos/gallery-clip-2.mp4", poster: "/images/IMG_9336.jpg", alt: "Iron Heaven floor action" },
  { type: "image", src: "/images/IMG_9340.jpg", alt: "Members on the gym floor during a workout" },
  { type: "image", src: "/images/IMG_9341.jpg", alt: "Image from the gym showing the premium training environment" },
];

export function Gallery() {
  const [active, setActive] = useState<MediaItem | null>(null);

  return (
    <section id="gallery" className="bg-ink-elevated py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Inside"
          title="Gallery"
          copy="Racks, turf, steam, and the kind of lighting that makes 6 AM feel like a statement."
        />
        <div className="masonry">
          {gallery.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.05} className="masonry-item">
              <button
                type="button"
                className="group relative block w-full overflow-hidden rounded-sm border border-white/10"
                onClick={() => setActive(item)}
              >
                <img
                  src={item.poster ?? item.src}
                  alt={item.alt}
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {item.type === "video" ? (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/35">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blood text-white">
                      <Play fill="currentColor" size={22} />
                    </span>
                  </span>
                ) : null}
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <Lightbox item={active} onClose={() => setActive(null)} />
    </section>
  );
}
