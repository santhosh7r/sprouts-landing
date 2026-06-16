"use client";

import Image from "next/image";
import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react";
import { Reveal } from "./ui/primitives";
import { LOCATIONS, BRAND, whatsappLink, mapEmbed, mapDirections } from "@/lib/config";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Find us</span>
          <h2 className="h-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Two campuses, <span className="text-grad">one promise</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-inkgreen/60">
            {BRAND} welcomes families in Chennai and Bengaluru. Drop by, call, or
            message us on WhatsApp — we'll plan a visit around you.
          </p>
        </Reveal>

        {/* real campus photo */}
        <Reveal>
          <div className="relative mt-12 h-56 overflow-hidden rounded-[2rem] border border-white/60 shadow-glass sm:h-72">
            <Image src="/school.png" alt={`${BRAND} campus`} fill priority sizes="(max-width:1024px) 92vw, 80rem" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-inkgreen/70 via-transparent to-transparent" />
            <div className="glass absolute bottom-4 left-4 flex items-center gap-2 !rounded-full px-4 py-2">
              <span className="bg-grad grid h-7 w-7 place-items-center rounded-full text-cream"><MapPin className="h-3.5 w-3.5" /></span>
              <span className="text-sm font-semibold text-inkgreen">Our campus · {BRAND}</span>
            </div>
          </div>
        </Reveal>

        {/* two locations */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.key} delay={i * 0.1}>
              <div className="glass overflow-hidden !rounded-[2rem] p-3">
                {/* map */}
                <div className="relative h-52 overflow-hidden rounded-[1.4rem]">
                  <iframe
                    title={`${BRAND} ${loc.city}`}
                    src={mapEmbed(loc.mapQuery)}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="glass pointer-events-none absolute left-3 top-3 flex items-center gap-2 !rounded-full px-3.5 py-1.5">
                    <span className="bg-grad grid h-6 w-6 place-items-center rounded-full text-cream"><MapPin className="h-3 w-3" /></span>
                    <span className="text-xs font-bold text-inkgreen">{loc.city}</span>
                  </div>
                </div>

                {/* details */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-extrabold tracking-tight3 text-inkgreen">{loc.city}</h3>
                    <Clock className="h-5 w-5 text-forest/60" />
                  </div>
                  <p className="mt-1 text-sm font-medium text-inkgreen/55">Mon – Sat · 8:00 am – 8:00 pm</p>

                  <div className="mt-4 flex flex-col gap-2">
                    {loc.phones.map((p) => (
                      <a key={p} href={`tel:+${p.replace(/[^\d]/g, "")}`} className="group flex items-center gap-3 rounded-2xl border border-white/60 bg-white/55 px-4 py-3 text-sm font-semibold text-inkgreen backdrop-blur transition hover:bg-white/85">
                        <Phone className="h-4 w-4 text-forest" /> {p}
                      </a>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <a href={whatsappLink(`Hi Sprouts ${loc.city}! I'd like to know about admissions for my child.`, loc.whatsapp)} target="_blank" rel="noopener noreferrer"
                      className="btn flex-1 bg-[#25D366] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#1ebe5b]">
                      WhatsApp <MessageCircle className="h-4 w-4" />
                    </a>
                    <a href={mapDirections(loc.mapQuery)} target="_blank" rel="noopener noreferrer" className="btn-glass flex-1">
                      Directions <Navigation className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
