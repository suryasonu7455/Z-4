import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal, SectionHeading } from "../components/Reveal";
import { site } from "../config";

type Status = "idle" | "sending" | "ok" | "error";

export function Contact({ onToast }: { onToast: (msg: string) => void }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const goal = String(data.get("goal") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    setStatus("sending");

    const text = [
      "Hi Iron Heaven, I want to book a free trial.",
      name ? `Name: ${name}` : "",
      phone ? `Phone: ${phone}` : "",
      email ? `Email: ${email}` : "",
      goal ? `Goal: ${goal}` : "",
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      form.reset();
      setStatus("ok");
      onToast("We’ve opened WhatsApp with your details. A coach will be in touch.");
    } catch {
      setStatus("error");
      onToast("Could not open WhatsApp right now. Please call or message us directly.");
    }
  }

  return (
    <section id="contact" className="bg-ink-elevated py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Start here"
          title="Contact"
          copy="Book a free trial, ask about a plan, or just come see the floor. We answer the same day."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <form onSubmit={onSubmit} className="space-y-4 rounded-sm border border-white/10 bg-ink-card p-6">
              <Field label="Name" name="name" required autoComplete="name" />
              <Field label="Phone" name="phone" required type="tel" autoComplete="tel" />
              <Field label="Email" name="email" required type="email" autoComplete="email" />
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-steel">Goal</span>
                <select
                  name="goal"
                  required
                  className="mt-1 w-full rounded-sm border border-white/15 bg-ink px-3 py-3 text-white outline-none focus:border-blood"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your goal
                  </option>
                  {site.goals.map((goal) => (
                    <option key={goal} value={goal}>
                      {goal}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-steel">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-sm border border-white/15 bg-ink px-3 py-3 text-white outline-none focus:border-blood"
                  placeholder="When do you want to start? Any injuries we should know about?"
                />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-sm bg-blood py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-blood-hover disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send enquiry"}
              </button>
            </form>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5">
              <iframe
                title="Iron Heaven gym location on Google Maps"
                src={site.mapEmbedUrl}
                className="h-72 w-full rounded-sm border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <ul className="space-y-4 text-sm text-steel">
                <li className="flex gap-3">
                  <MapPin className="shrink-0 text-blood" size={18} />
                  <a href={site.mapsLink} className="hover:text-white">
                    {site.address.full}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="shrink-0 text-blood" size={18} />
                  <a href={`tel:+91${site.phone}`} className="hover:text-white">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="shrink-0 text-blood" size={18} />
                  <a href={`mailto:${site.email}`} className="hover:text-white">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-steel">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1 w-full rounded-sm border border-white/15 bg-ink px-3 py-3 text-white outline-none focus:border-blood"
      />
    </label>
  );
}
