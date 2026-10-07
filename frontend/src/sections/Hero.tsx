import { ArrowRight, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "../config";

function allowHeroVideo() {
  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  };
  const conn = nav.connection;
  if (conn?.saveData) return false;
  if (conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g") return false;
  return true;
}

export function Hero() {
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    setUseVideo(allowHeroVideo());
  }, []);

  return (
    <section id="home" className="hero-shell relative flex min-h-svh items-center overflow-hidden">
      <div className="absolute inset-0">
        {useVideo ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/IMG_9331.jpg"
            preload="metadata"
            onError={() => setUseVideo(false)}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/images/IMG_9331.jpg"
            alt="Athletes training with heavy weights at Iron Heaven"
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-black/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <span className="eyebrow-pill">
              <span className="h-2 w-2 rounded-full bg-blood" />
              Premium Strength Gym
            </span>
            <h1 className="display mt-6 max-w-4xl text-6xl leading-[0.9] text-white sm:text-8xl lg:text-[7rem]">
              {site.tagline.toUpperCase()}
            </h1>
            <p className="mt-5 max-w-xl text-base text-steel sm:text-lg">
              Strength coaching, elite equipment, and real results built for people who treat every rep like progress.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-blood px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-blood-hover"
              >
                Join Now
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white hover:bg-white/10"
              >
                Book a Free Trial
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 text-left">
              {site.stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="rounded-sm border border-white/10 bg-black/25 px-3 py-4 backdrop-blur-sm">
                  <div className="display text-3xl text-white">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-steel">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="hero-panel ml-auto">
              <div className="hero-media">
                <img
                  src="/images/IMG_9340.jpg"
                  alt="Iron Heaven members training on the main floor"
                />
              </div>

              <div className="floating-card">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-steel">
                  <Trophy size={14} className="text-blood" />
                  Results-driven
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="display text-4xl leading-none text-white">500+</span>
                  <span className="text-sm text-steel">athletes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
