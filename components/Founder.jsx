"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "./ui/primitives";

const timeline = [
  { year: "2014", text: "Opened the first Sprouts campus with 18 children and one big belief." },
  { year: "2018", text: "Introduced our signature play-based, emotion-first curriculum." },
  { year: "2021", text: "Earned regional recognition for early-childhood excellence." },
  { year: "2026", text: "2,000+ graduates later — still obsessed with the small things." },
];

export default function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mesh">
        <span className="left-[60%] top-[10%] h-[24rem] w-[24rem] animate-aurora bg-mint/60" />
        <span className="left-[5%] bottom-[5%] h-[20rem] w-[20rem] animate-aurora bg-gold/10" style={{ animationDelay: "-7s" }} />
      </div>

      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">The founder's story</span>
          <h2 className="h-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            It started with <span className="text-grad">one belief</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* portrait + glass quote */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="bg-grad absolute -inset-3 -z-10 rotate-2 rounded-[2.4rem] opacity-90" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[5px] border-white/85 bg-brand-100 shadow-premium">
                <Image src="/founder.jpeg" alt="M. Revathi, Founder & Director" fill sizes="(max-width:1024px) 90vw, 32vw" className="object-cover" />
              </div>
              <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute -bottom-6 left-1/2 w-[90%] -translate-x-1/2 p-5">
                <Quote className="h-7 w-7 text-gold" fill="currentColor" />
                <p className="mt-2 text-sm font-medium leading-snug text-inkgreen/80">
                  “Children don't need to be rushed into school. They need to fall in love with learning first.”
                </p>
                <p className="mt-3 font-display text-sm font-bold text-inkgreen">M. Revathi</p>
                <p className="text-xs font-medium text-inkgreen/55">Founder &amp; Director</p>
              </motion.div>
            </div>
          </Reveal>

          {/* narrative + timeline */}
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-inkgreen/70">
                After years in classrooms, Revathi kept
                seeing the same thing: bright, curious children losing their spark to
                rigid, rushed schooling. So she built the opposite — a place where the
                day is shaped by wonder, not worksheets, and where every child is
                <span className="font-semibold text-forest"> known, not just taught.</span>
              </p>
            </Reveal>

            <div className="mt-10">
              <div className="relative ml-3 border-l-2 border-brand-200/70 pl-8">
                {timeline.map((t, i) => (
                  <Reveal key={t.year} delay={i * 0.08}>
                    <div className="relative pb-8 last:pb-0">
                      <span className="bg-grad absolute -left-[2.6rem] grid h-7 w-7 place-items-center rounded-full text-[0.6rem] font-extrabold text-cream gold-ring">
                        ●
                      </span>
                      <p className="font-display text-xl font-extrabold text-grad">{t.year}</p>
                      <p className="mt-1 max-w-md text-sm leading-relaxed text-inkgreen/65">{t.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
