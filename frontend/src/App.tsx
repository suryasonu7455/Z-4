import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Toast } from "./components/Toast";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Facilities } from "./sections/Facilities";
import { Gallery } from "./sections/Gallery";
import { Hero } from "./sections/Hero";
import { Plans } from "./sections/Plans";
import { Stats } from "./sections/Stats";
import { Timings } from "./sections/Timings";
import { Trainers } from "./sections/Trainers";
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
        <Stats />
        <About />
        <Facilities />
        <Trainers />
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
