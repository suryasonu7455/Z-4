import {
  Car,
  Dumbbell,
  Fingerprint,
  Flame,
  HeartPulse,
  Lock,
  ShowerHead,
  StretchHorizontal,
} from "lucide-react";
import { Reveal, SectionHeading } from "../components/Reveal";

const facilities = [
  {
    icon: HeartPulse,
    title: "Cardio Zone",
    copy: "Treadmills, bikes, rowers, and ski-ergs for warm-ups and conditioning blocks.",
  },
  {
    icon: Dumbbell,
    title: "Free Weights",
    copy: "Dumbbells to 50kg, bumper plates, competition bars, and dedicated squat racks.",
  },
  {
    icon: Flame,
    title: "Strength Machines",
    copy: "Selectorized and plate-loaded machines for hypertrophy without fighting for a rack.",
  },
  {
    icon: StretchHorizontal,
    title: "Functional Training",
    copy: "Turf, sleds, kettlebells, battle ropes, and rigs for athletes and hybrids.",
  },
  {
    icon: Lock,
    title: "Locker Rooms",
    copy: "Secure lockers, clean benches, and space to change before and after sessions.",
  },
  {
    icon: ShowerHead,
    title: "Steam / Shower",
    copy: "Hot showers and a steam room so you can leave the gym actually recovered.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Fingerprint Entry",
    copy: "No QR circus. Members scan in. The floor stays members-only.",
  },
  {
    icon: Car,
    title: "Ample Parking",
    copy: "Dedicated parking so you are not circling the block in peak hours.",
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="bg-ink-elevated py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The kit"
          title="Facilities"
          copy="Everything you need for a complete session — from a heavy squat to a steam finish."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <article className="group h-full rounded-sm border border-white/10 bg-ink-card p-6 transition duration-300 hover:-translate-y-1 hover:border-blood">
                <item.icon className="text-blood" strokeWidth={1.6} />
                <h3 className="display mt-4 text-2xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-steel">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
