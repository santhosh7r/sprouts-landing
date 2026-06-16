"use client";

import { Phone, MapPin, Instagram, Facebook, Youtube, ArrowUpRight, MessageCircle } from "lucide-react";
import { Magnetic } from "./ui/primitives";
import { BRAND, LOCATIONS, whatsappLink } from "@/lib/config";

const cols = [
  { title: "Programs", links: ["Play Group", "Pre-KG", "LKG", "UKG", "Day Care"] },
  { title: "School", links: ["Our story", "Why Sprouts", "The founder", "Experience", "Gallery"] },
  { title: "Parents", links: ["Admissions", "Fee structure", "Calendar", "FAQs", "Contact"] },
];
const socials = [Instagram, Facebook, Youtube];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-inkgreen text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald/25 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-x relative">
        {/* big CTA */}
        <div className="grid gap-8 border-b border-white/10 py-16 lg:grid-cols-2 lg:items-end">
          <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight4 sm:text-6xl">
            Give your child a<br />
            <span className="text-gold">remarkable</span> start.
          </h2>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Magnetic strength={0.4}>
              <a href="#enroll" className="btn-gold text-base">Enroll now <ArrowUpRight className="h-4 w-4" /></a>
            </Magnetic>
            <a href={whatsappLink("Hi Sprouts! I'd like to know more about admissions.")} target="_blank" rel="noopener noreferrer" className="btn border border-white/20 bg-white/10 text-cream backdrop-blur hover:bg-white/20">
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
        </div>

        {/* main */}
        <div className="grid gap-10 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="bg-grad grid h-10 w-10 place-items-center rounded-xl text-cream gold-ring">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21V11" /><path d="M12 11C12 7 9 4 4 4c0 5 3 7 8 7Z" /><path d="M12 13c0-3.3 2.7-6 6-6 0 3.3-2.7 6-6 6Z" />
                </svg>
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight3">Sprouts</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
              {BRAND} — a premium early-childhood learning center nurturing curious,
              confident and joyful children across Chennai &amp; Bengaluru.
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-cream/65">
              {LOCATIONS.map((loc) => (
                <div key={loc.key} className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    <span className="font-semibold text-cream/85">{loc.city}</span>
                    {loc.phones.map((p) => (
                      <a key={p} href={`tel:+${p.replace(/[^\d]/g, "")}`} className="block transition hover:text-mint">{p}</a>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-cream/85">{c.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {c.links.map((l) => <li key={l}><a href="#" className="text-sm text-cream/55 transition hover:text-mint">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2.5 sm:items-start">
            <p className="text-xs text-cream/45">© 2026 {BRAND}. All rights reserved.</p>
            <a
              href="https://webzystudios.com"
              target="_blank"
              rel="noopener"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs text-cream/55 backdrop-blur transition-all duration-300 hover:border-gold/40 hover:bg-white/10"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Crafted by</span>
              <span className="relative font-display text-sm font-extrabold tracking-tight3 text-gold">
                Webzy
              </span>
              <ArrowUpRight className="relative h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            {socials.map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-cream/70 transition hover:bg-gold hover:text-inkgreen">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
