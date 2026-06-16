"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./ui/primitives";

const faqs = [
  { q: "What ages do you accept?", a: "We welcome children from 1.5 years (Play Group) to 5.5 years (UKG) — Play Group, Pre-KG, LKG and UKG — with a dedicated Day Care for ages 1.5–6. Each program is grouped by age and developmental stage." },
  { q: "What are the timings?", a: "Core program hours are 9:00 am – 12:30 pm. Our extended Day Care runs 8:00 am – 8:00 pm, including freshly cooked meals, supervised naps and play." },
  { q: "How safe is the campus?", a: "Gated and CCTV-monitored, fire-safety compliant, with biometric pickup verification and trained caregivers. Parents also receive private live classroom access." },
  { q: "What is your teaching methodology?", a: "A play-based, activity-first curriculum blended with phonics and early-math readiness. Learning happens through stories, art, music and exploration — never rote memorisation." },
  { q: "Do you provide meals and transport?", a: "Yes — freshly cooked, dietitian-planned meals and snacks daily, plus optional GPS-tracked, air-conditioned transport with trained attendants on every route." },
  { q: "How does admission work?", a: "Submit the enquiry form or call us. We'll arrange a campus visit, share the application, and guide you through a warm, simple admission process — usually within a few days." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">Good to know</span>
            <h2 className="h-display mt-5 text-4xl sm:text-5xl">
              Questions, <span className="text-grad">answered</span>
            </h2>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-inkgreen/60">
              Everything you need before your little one joins. Still curious? A real
              human always picks up the phone.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className={`glass overflow-hidden transition ${isOpen ? "ring-1 ring-brand-200" : ""}`}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="font-display text-base font-bold text-inkgreen sm:text-lg">{f.q}</span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${isOpen ? "bg-grad rotate-45 text-cream" : "bg-brand-50 text-forest"}`}>
                      <Plus className="h-4 w-4" strokeWidth={2.6} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: "easeInOut" }}>
                        <p className="px-6 pb-6 text-sm leading-relaxed text-inkgreen/65">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
