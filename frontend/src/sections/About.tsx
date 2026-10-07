import { ArrowRight, CheckCircle2, Dumbbell, Sparkles } from "lucide-react";
import { LazyVideo } from "../components/LazyVideo";
import { Reveal, SectionHeading } from "../components/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="The floor"
        title="Built for lifters, not selfies"
        copy="Iron Heaven started as a garage rack and a handful of plates. Today it is a serious training floor with calibrated equipment, coaches who actually lift, and a culture that respects the work."
      />
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="image-stack">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
              <LazyVideo
                className="h-full w-full"
                mp4="/videos/about.mp4"
                poster="/images/IMG_9341.jpg"
                title="Members training on the Iron Heaven strength floor"
              />
            </div>
            <div className="absolute -bottom-4 right-6 rounded-sm border border-blood/30 bg-black/80 px-4 py-3 shadow-2xl shadow-red-950/30">
              <div className="display text-2xl text-white">6 AM</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-steel">Intensity starts early</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <h3 className="display text-4xl text-white">No shortcuts. No circus.</h3>
            <p className="mt-4 text-steel">
              We programmed this gym for people who want to get objectively stronger —
              first-timers who need a plan, intermediates chasing PRs, and athletes who
              treat training like a job. You walk in, scan your fingerprint, and get to
              work.
            </p>
            <p className="mt-4 text-steel">
              The coaching staff writes programs, spots heavy sets, and keeps the floor
              moving. Steam, lockers, and parking are taken care of so the only decision
              you make is how hard you want to train today.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="feature-chip">
                <span className="icon-wrap">
                  <Dumbbell size={16} />
                </span>
                <span>Strength programs</span>
              </div>
              <div className="feature-chip">
                <span className="icon-wrap">
                  <Sparkles size={16} />
                </span>
                <span>Beginner onboarding</span>
              </div>
            </div>

            <ul className="mt-7 space-y-3 text-sm text-white">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-blood" size={16} />
                <span>Powerlifting and hypertrophy programs</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-blood" size={16} />
                <span>Beginner onboarding in the first week</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-blood" size={16} />
                <span>Open early, packed with working people</span>
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-sm border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-blood hover:bg-blood/10"
            >
              Schedule a visit
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
