"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Music, Sprout, Calculator, BookOpen } from "lucide-react";
import { Reveal } from "./ui/primitives";

const tabs = [
  { id: "art", icon: Palette, label: "Art & Creativity", img: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?auto=format&fit=crop&w=1000&q=80", title: "Studios for little artists", desc: "Open-ended art, clay and messy play where process matters more than the picture — building confidence, focus and fine-motor control." },
  { id: "music", icon: Music, label: "Music & Movement", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80", title: "Rhythm, song & dance", desc: "Daily music circles strengthen language, memory and coordination — and there's nothing quite like a room full of joyful little voices." },
  { id: "nature", icon: Sprout, label: "Nature & Outdoors", img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80", title: "Our garden classroom", desc: "Gardening, mud kitchens and outdoor exploration connect children to the natural world while they climb, dig and discover." },
  { id: "numbers", icon: Calculator, label: "Early Math", img: "https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?auto=format&fit=crop&w=1000&q=80", title: "Math through play", desc: "Counting games, patterns and building blocks turn abstract numbers into something children can touch, sort and truly understand." },
  { id: "literacy", icon: BookOpen, label: "Language & Stories", img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80", title: "A love of stories", desc: "Phonics woven into storytelling, puppetry and conversation — so reading begins as delight, long before it becomes a skill." },
];

export default function Experience() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active);

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">The learning experience</span>
          <h2 className="h-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            A day at Sprouts is <span className="text-grad">never ordinary</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-3 shadow-glass backdrop-blur-xl lg:grid-cols-2">
          {/* LEFT — full-height image */}
          <div className="relative min-h-[22rem] overflow-hidden rounded-[1.6rem] lg:min-h-[34rem]">
            <AnimatePresence mode="wait">
              <motion.div key={current.id} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                <Image src={current.img} alt={current.title} fill sizes="(max-width:1024px) 90vw, 42vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-inkgreen/80 via-transparent to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div key={current.id + "-cap"} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-x-4 bottom-4">
                <div className="glass-dark p-5 text-cream">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight3">{current.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/80">{current.desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — interactive tabs */}
          <div className="flex flex-col justify-center gap-2.5 p-4 sm:p-6">
            {tabs.map((t) => {
              const on = t.id === active;
              return (
                <button
                  key={t.id}
                  onMouseEnter={() => setActive(t.id)}
                  onFocus={() => setActive(t.id)}
                  onClick={() => setActive(t.id)}
                  className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${on ? "border-brand-200 bg-white shadow-soft" : "border-transparent bg-white/0 hover:bg-white/50"}`}
                >
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition ${on ? "bg-grad text-cream" : "bg-brand-50 text-forest"}`}>
                    <t.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div className="flex-1">
                    <p className={`font-display text-lg font-bold tracking-tight3 ${on ? "text-inkgreen" : "text-inkgreen/70"}`}>{t.label}</p>
                    <AnimatePresence>
                      {on && (
                        <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-sm text-inkgreen/55">
                          {t.desc.split("—")[0]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-full transition ${on ? "bg-gold" : "bg-brand-200"}`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
