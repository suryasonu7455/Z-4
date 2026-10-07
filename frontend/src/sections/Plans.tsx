import { Check } from "lucide-react";
import { Reveal, SectionHeading } from "../components/Reveal";
import { site } from "../config";

export function Plans() {
  return (
    <section id="plans" className="bg-ink-elevated py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Membership"
          title="Plans"
          copy="Simple pricing. No joining-fee games. Walk in for a trial, then pick the block that matches how serious you are."
        />
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {site.plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.08} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-sm border p-8 transition hover:-translate-y-1 ${
                  plan.popular
                    ? "border-blood bg-ink-card shadow-[0_0_40px_rgba(225,6,0,0.18)]"
                    : "border-white/10 bg-ink-card hover:border-white/30"
                }`}
              >
                {plan.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-sm bg-blood px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="display text-3xl text-white">{plan.name}</h3>
                <p className="mt-4">
                  <span className="display text-5xl text-white">{plan.price}</span>
                  <span className="ml-1 text-sm text-steel">{plan.period}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-steel">
                      <Check className="mt-0.5 shrink-0 text-blood" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-sm py-3 text-sm font-semibold uppercase tracking-widest transition ${
                    plan.popular
                      ? "bg-blood text-white hover:bg-blood-hover"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  Join Now
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
