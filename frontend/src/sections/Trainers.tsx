import { Reveal, SectionHeading } from "../components/Reveal";

const trainers = [
  {
    name: "",
    specialty: "Strength & Powerlifting",
    bio: "Former state-level powerlifter. Writes linear and DUP blocks for members chasing a bigger squat, bench, and deadlift.",
    photo: "/images/IMG_9337.jpg",
  },
  {
    name: "",
    specialty: "Fat loss & Conditioning",
    bio: "Builds sustainable fat-loss plans around lifting, not endless cardio. Specialises in busy professionals who need a weekly structure.",
    photo: "/images/IMG_9338.jpg",
  },
  {
    name: "Vikram Singh",
    specialty: "Hypertrophy",
    bio: "Bodybuilding coach who obsesses over execution. If your rows look like shrugs, he will fix that in one session.",
    photo: "/images/IMG_9339.jpg",
  },
  {
    name: "Ananya Rao",
    specialty: "Mobility & Return-to-train",
    bio: "Helps members train around niggles, rebuild after time off, and keep joints healthy enough for heavy work.",
    photo: "/images/IMG_9340.jpg",
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="The coaches"
        title="Trainers"
        copy="Certified, still training, and on the floor — not hiding behind a clipboard."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trainers.map((coach, i) => (
          <Reveal key={coach.name} delay={i * 0.05}>
            <article className="group overflow-hidden rounded-sm border border-white/10 bg-ink-card transition hover:-translate-y-1 hover:border-blood">
              <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
                <img
                  src={coach.photo}
                  alt={`${coach.name}, ${coach.specialty} coach at Iron Heaven`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="display text-2xl text-white">{coach.name}</h3>
                <p className="text-sm text-blood">{coach.specialty}</p>
                <p className="mt-2 text-sm text-steel">{coach.bio}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
