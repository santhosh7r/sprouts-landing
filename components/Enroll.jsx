"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, PartyPopper, ShieldCheck, CalendarCheck, Sparkles, MessageCircle } from "lucide-react";
import { Reveal, Magnetic } from "./ui/primitives";
import { whatsappLink, locationByKey, LOCATIONS } from "@/lib/config";

const benefits = [
  { icon: CalendarCheck, t: "Free campus visit", d: "Walk the rooms, meet educators — no sales pitch." },
  { icon: ShieldCheck, t: "Transparent everything", d: "Fees, safety, curriculum — all upfront." },
  { icon: Sparkles, t: "Priority 2026–27 seat", d: "Small classes fill fast. Reserve early." },
];

export default function Enroll() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const v = (id) => (f.elements[id]?.value || "").trim();
    const loc = locationByKey(v("location"));
    const message =
      `Hi Sprouts (${loc.city})! I'd like to enquire about admission.\n\n` +
      `• Parent: ${v("name")}\n` +
      `• Phone: ${v("phone")}\n` +
      `• Child's age: ${v("age")}\n` +
      `• Program: ${v("program") || "Not specified"}\n` +
      `• Campus: ${loc.city}`;
    window.open(whatsappLink(message, loc.whatsapp), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="enroll" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-grad p-3 shadow-premium sm:p-4">
          {/* glow + shapes */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-80 w-80 animate-aurora rounded-full bg-emerald/40 blur-3xl" />
            <div className="absolute -bottom-28 -left-16 h-80 w-80 animate-aurora rounded-full bg-gold/20 blur-3xl" style={{ animationDelay: "-8s" }} />
            <div className="dot-grid absolute inset-0 opacity-[0.07]" />
          </div>

          <div className="relative grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
            {/* benefits */}
            <div className="p-6 text-cream sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-mint backdrop-blur">
                Admissions open · 2026–27
              </span>
              <h2 className="h-display mt-5 text-4xl text-cream sm:text-5xl">
                Reserve your child's place
              </h2>
              <p className="mt-4 max-w-md text-cream/75">
                Tell us a little about your little one. Our admissions team will call
                within 24 hours to plan a private visit.
              </p>

              <div className="mt-9 flex flex-col gap-3">
                {benefits.map((b, i) => (
                  <Reveal key={b.t} delay={i * 0.08}>
                    <div className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 text-mint">
                        <b.icon className="h-5 w-5" strokeWidth={2.1} />
                      </span>
                      <div>
                        <p className="font-display text-sm font-bold text-cream">{b.t}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-cream/65">{b.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* form */}
            <Reveal delay={0.1}>
              <div className="glass h-full !rounded-[2rem] p-6 sm:p-8">
                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex h-full flex-col items-center justify-center py-12 text-center">
                    <span className="bg-grad grid h-16 w-16 place-items-center rounded-full text-cream shadow-forest gold-ring">
                      <PartyPopper className="h-8 w-8" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-extrabold text-inkgreen">You're on the list 🎉</h3>
                    <p className="mt-2 max-w-xs text-sm text-inkgreen/60">We've opened WhatsApp with your details — just hit send and our team will reply within minutes.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <h3 className="font-display text-xl font-extrabold text-inkgreen">Enquire on WhatsApp</h3>
                    <Field label="Parent's name" id="name" placeholder="Your full name" />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Phone" id="phone" type="tel" placeholder="+91 …" />
                      <Field label="Child's age" id="age" placeholder="e.g. 3 yrs" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="program" className="text-xs font-semibold text-inkgreen/55">Program of interest</label>
                        <select id="program" name="program" defaultValue="" className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm font-medium text-inkgreen outline-none backdrop-blur transition focus:border-forest focus:ring-4 focus:ring-brand-100">
                          <option value="" disabled>Select a program</option>
                          <option>Play Group</option><option>Pre-KG</option><option>LKG</option><option>UKG</option><option>Day Care</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="location" className="text-xs font-semibold text-inkgreen/55">Preferred campus</label>
                        <select id="location" name="location" defaultValue={LOCATIONS[0].key} className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm font-medium text-inkgreen outline-none backdrop-blur transition focus:border-forest focus:ring-4 focus:ring-brand-100">
                          {LOCATIONS.map((l) => <option key={l.key} value={l.key}>{l.city}</option>)}
                        </select>
                      </div>
                    </div>
                    <Magnetic strength={0.25} className="mt-1 w-full">
                      <button type="submit" className="btn w-full bg-[#25D366] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#1ebe5b] text-base">
                        Send on WhatsApp <MessageCircle className="h-4 w-4" />
                      </button>
                    </Magnetic>
                    <p className="flex items-center justify-center gap-1.5 text-xs text-inkgreen/45">
                      <Check className="h-3.5 w-3.5 text-emerald" /> Goes straight to our team's WhatsApp — quick reply.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-inkgreen/55">{label}</label>
      <input id={id} name={id} type={type} required placeholder={placeholder}
        className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm font-medium text-inkgreen outline-none backdrop-blur transition placeholder:text-inkgreen/35 focus:border-forest focus:ring-4 focus:ring-brand-100" />
    </div>
  );
}
