"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Reveal } from "./ui/primitives";

const programs = [
  { name: "Play Group", age: "1.5 – 2.5 yrs", img: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80", desc: "A gentle, sensory-rich first step away from home — built on warmth, comfort and discovery.", tags: ["Sensory play", "Settling-in"] },
  { name: "Pre-KG", age: "2.5 – 3.5 yrs", img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80", desc: "Curiosity leads — early language, rhymes, fine-motor skills and the joy of friendship.", tags: ["Phonics", "Circle time"] },
  { name: "LKG", age: "3.5 – 4.5 yrs", img: "https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?auto=format&fit=crop&w=900&q=80", desc: "Structured wonder introduces letters, numbers and the world through hands-on projects.", tags: ["Reading-readiness", "Number sense"] },
  { name: "UKG", age: "4.5 – 5.5 yrs", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80", desc: "School-ready confidence — early literacy, math, STEM play and the poise to thrive.", tags: ["Writing", "STEM play"] },
  { name: "Day Care", age: "8 am – 8 pm", img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80", desc: "Extended, loving care — nutritious meals, restful naps, homework help and safe play.", tags: ["Full-day", "Meals included"] },
];

export default function Programs() {
  const track = useRef(null);
  const scrollBy = (dir) => track.current?.scrollBy({ left: dir * 360, behavior: "smooth" });

  return (
    <section id="programs" className="py-24 sm:py-32">
      <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <span className="eyebrow">Our programs</span>
          <h2 className="h-display mt-5 max-w-xl text-4xl sm:text-5xl lg:text-6xl">
            A curriculum designed by <span className="text-grad">age &amp; stage</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex items-center gap-3">
            <p className="hidden max-w-[14rem] text-sm font-medium text-inkgreen/55 sm:block">
              Drag, swipe or use the arrows to explore each stage.
            </p>
            <button onClick={() => scrollBy(-1)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-white/60 bg-white/60 text-inkgreen backdrop-blur transition hover:bg-forest hover:text-cream">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-white/60 bg-white/60 text-inkgreen backdrop-blur transition hover:bg-forest hover:text-cream">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>

      <div ref={track} className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12">
        {programs.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative h-[28rem] w-[80vw] shrink-0 snap-start overflow-hidden rounded-[2rem] border-[3px] border-white/70 shadow-premium sm:w-[22rem]"
          >
            <Image src={p.img} alt={p.name} fill draggable={false} sizes="(max-width:640px) 80vw, 22rem" className="object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-inkgreen/90 via-inkgreen/25 to-transparent" />

            {/* age chip */}
            <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold text-cream backdrop-blur-md">
              {p.name === "Day Care" && <Clock className="h-3.5 w-3.5" />} {p.age}
            </span>

            {/* glass overlay content */}
            <div className="absolute inset-x-3 bottom-3">
              <div className="glass-dark p-5 text-cream">
                <h3 className="font-display text-2xl font-extrabold tracking-tight3">{p.name}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/80 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                  {p.desc}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[0.7rem] font-medium">{t}</span>
                  ))}
                </div>
                <a href="#enroll" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-mint transition group-hover:gap-2.5">
                  Enquire <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
