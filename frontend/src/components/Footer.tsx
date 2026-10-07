import { Camera, MessageCircle, Play } from "lucide-react";
import type { ReactNode } from "react";
import { navLinks, site } from "../config";

export function Footer() {
  return (
    <footer className="footer-shell border-t border-white/10 bg-black/95">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="display text-3xl text-white">
            {site.name.toUpperCase()}
            <span className="text-blood">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-steel">
            A no-nonsense strength gym. Heavy iron, serious coaching, and a floor that
            rewards the work you put in.
          </p>
        </div>
        <div>
          <p className="display text-xl text-white">Quick links</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-steel hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="display text-xl text-white">Train with us</p>
          <p className="mt-4 text-sm text-steel">{site.address.full}</p>
          <p className="mt-2 text-sm text-steel">{site.phoneDisplay}</p>
          <p className="mt-1 text-sm text-steel">{site.email}</p>
          <div className="mt-5 flex gap-3">
            <Social href={site.social.instagram} label="Instagram">
              <Camera size={18} />
            </Social>
            <Social href={site.social.facebook} label="Facebook">
              <MessageCircle size={18} />
            </Social>
            <Social href={site.social.youtube} label="YouTube">
              <Play size={18} />
            </Social>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-steel">
        © 2026 Iron Heaven. All rights reserved.
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white transition hover:-translate-y-0.5 hover:border-blood hover:bg-blood"
    >
      {children}
    </a>
  );
}
