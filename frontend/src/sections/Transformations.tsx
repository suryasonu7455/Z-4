import { Reveal, SectionHeading } from "../components/Reveal";

const stories = [
  {
    name: "Rahul Nair",
    result: "−18 kg in 7 months",
    quote:
      "I stopped hopping between crash diets and started lifting four days a week. The coaches kept the program honest. Clothes fit. The bar moves.",
    before: "/images/IMG_9343.jpg",
    after: "/images/IMG_9344.jpg",
  },
  {
    name: "Sneha Iyer",
    result: "+8 kg lean mass",
    quote:
      "I was scared of getting bulky. I got stronger, my back stopped hurting, and I actually look athletic. Best decision I made last year.",
    before: "/images/IMG_9345.jpg",
    after: "/images/IMG_9346.jpg",
  },
  {
    name: "Karan Patel",
    result: "185 kg deadlift",
    quote:
      "Walked in with a messy conventional pull. Six months of technique, food, and sleep later I pulled 185. The floor here is built for that.",
    before: "/images/IMG_9347.jpg",
    after: "/images/IMG_9348.jpg",
  },
];

export function Transformations() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Proof"
        title="Transformations"
        copy="Real members. Real training blocks. Photos taken on the gym floor, not a filter farm."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {stories.map((story, i) => (
          <Reveal key={story.name} delay={i * 0.06}>
            <article className="overflow-hidden rounded-sm border border-white/10 bg-ink-card">
              <div className="grid grid-cols-2">
                <figure>
                  <img
                    src={story.before}
                    alt={`${story.name} before training at Iron Heaven`}
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="bg-black px-2 py-1 text-center text-[10px] uppercase tracking-widest text-steel">
                    Before
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={story.after}
                    alt={`${story.name} after training at Iron Heaven`}
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="bg-blood px-2 py-1 text-center text-[10px] uppercase tracking-widest text-white">
                    After
                  </figcaption>
                </figure>
              </div>
              <div className="p-5">
                <p className="display text-2xl text-white">{story.name}</p>
                <p className="text-sm text-blood">{story.result}</p>
                <p className="mt-3 text-sm text-steel">“{story.quote}”</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
