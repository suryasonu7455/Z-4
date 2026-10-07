import { useEffect, useMemo, useState } from "react";
import { Reveal, SectionHeading } from "../components/Reveal";
import { site } from "../config";

function parseMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function isOpenNow(now: Date) {
  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: site.timezone,
  }).format(now);

  const timeParts = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: site.timezone,
  }).formatToParts(now);
  const hour = Number(timeParts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(timeParts.find((p) => p.type === "minute")?.value ?? "0");
  const current = hour * 60 + minute;

  const row =
    weekday === "Saturday"
      ? site.hours[1]
      : weekday === "Sunday"
        ? site.hours[2]
        : site.hours[0];

  const open = parseMinutes(row.open);
  const close = parseMinutes(row.close);
  return { open: current >= open && current < close, row };
}

export function Timings() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const status = useMemo(() => isOpenNow(now), [now]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Hours"
        title="Timings"
        copy="Open early for the 5:30 crew. Sunday is a shorter session so the floor can recover too."
      />
      <Reveal>
        <div className="mx-auto max-w-xl overflow-hidden rounded-sm border border-white/10">
          <div className="flex items-center justify-between bg-ink-card px-5 py-4">
            <p className="display text-2xl text-white">Floor hours</p>
            <span
              className={`rounded-sm px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
                status.open ? "bg-emerald-600 text-white" : "bg-zinc-700 text-white"
              }`}
            >
              {status.open ? "Open Now" : "Closed"}
            </span>
          </div>
          <table className="w-full text-left">
            <tbody>
              {site.hours.map((row) => (
                <tr key={row.days} className="border-t border-white/10">
                  <th className="px-5 py-4 text-sm font-medium text-white">{row.days}</th>
                  <td className="px-5 py-4 text-right text-sm text-steel">{row.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
