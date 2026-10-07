import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "../config";

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open ? "bg-black/95 shadow-lg shadow-black/40 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <a href="#home" className="flex items-center gap-3 text-white">
          <img
            src="/images/logo.jpg"
            alt="Iron Heaven logo"
            className="h-10 w-10 rounded-full border border-white/10 bg-white/5 object-cover shadow-lg shadow-black/20 sm:h-12 sm:w-12"
          />
          <span className="display text-lg tracking-[0.08em] sm:text-2xl">{site.name.toUpperCase()}</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-steel transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10 sm:inline-flex"
          >
            {theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>
          <a
            href="#plans"
            className="hidden rounded-sm bg-blood px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-blood-hover sm:inline-flex"
          >
            Join Now
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <ul className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-lg font-medium text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                type="button"
                onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
                className="mb-3 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/15 bg-white/5 py-3 text-sm font-medium text-white"
              >
                {theme === "dark" ? <SunMedium size={16} /> : <MoonStar size={16} />}
                Toggle theme
              </button>
            </li>
            <li className="pt-2">
              <a
                href="#plans"
                onClick={() => setOpen(false)}
                className="mb-3 inline-flex w-full items-center justify-center rounded-sm bg-blood py-3 text-sm font-semibold uppercase tracking-wide text-white"
              >
                Join Now
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
