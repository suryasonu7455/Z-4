import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Reveal } from "./components/Reveal";
import { Toast } from "./components/Toast";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Facilities } from "./sections/Facilities";
import { Gallery } from "./sections/Gallery";
import { Hero } from "./sections/Hero";
import { Plans } from "./sections/Plans";
import { Timings } from "./sections/Timings";
import { Transformations } from "./sections/Transformations";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    gsap.utils.toArray<HTMLElement>(".animate-in").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 42 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            once: true,
          },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>(".pin-panel").forEach((panel) => {
      gsap.to(panel, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="mb-10 text-center">
            <p className="display text-sm tracking-[0.35em] text-blood">Why Iron Heaven</p>
            <h2 className="display mt-3 text-4xl text-white sm:text-6xl">Train with purpose.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Strength Floor",
                text: "Heavy-duty equipment and structured lifting zones for real progress.",
              },
              {
                title: "Fat Loss Programs",
                text: "Simple plans that combine training, discipline, and consistency for results.",
              },
              {
                title: "Conditioning",
                text: "Build stamina, endurance, and athletic performance without burnout.",
              },
              {
                title: "Beginner Friendly",
                text: "Clear guidance and a motivating environment to start your fitness journey.",
              },
            ].map((item) => (
              <Reveal key={item.title} className="h-full">
                <article className="h-full rounded-sm border border-white/10 bg-ink-card p-6 transition hover:-translate-y-1 hover:border-blood">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blood/10 text-lg text-blood">
                    •
                  </div>
                  <h3 className="display text-3xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Plans />
        <Transformations />
        <Gallery />
        <Timings />
        <Contact onToast={setToast} />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toast message={toast} onDone={() => setToast(null)} />
    </>
  );
}
