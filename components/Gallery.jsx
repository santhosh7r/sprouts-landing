"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./ui/primitives";

const photos = [
  { src: "/school.png", tag: "Our Campus", h: "h-72" },
  { src: "/g1.png", tag: "Art Studio", h: "h-72" },
  { src: "/g2.png", tag: "Story Corner", h: "h-56" },
  { src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80", tag: "The Garden", h: "h-64" },
  { src: "https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?auto=format&fit=crop&w=900&q=80", tag: "Block Lab", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80", tag: "Music Room", h: "h-56" },
  { src: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80", tag: "Mud Kitchen", h: "h-64" },
  { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80", tag: "Together Time", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1587616211892-f743fcca64f9?auto=format&fit=crop&w=900&q=80", tag: "Discovery", h: "h-56" },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Inside our campus</span>
          <h2 className="h-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Moments worth <span className="text-grad">framing</span>
          </h2>
        </Reveal>

        <div className="mt-14 columns-2 gap-5 [column-fill:_balance] lg:columns-4">
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={(i % 4) * 0.06} className="mb-5 break-inside-avoid">
              <button onClick={() => setActive(p)} className={`group relative block w-full overflow-hidden rounded-3xl border-[3px] border-white/70 shadow-soft ${p.h}`}>
                <Image src={p.src} alt={p.tag} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-inkgreen/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 translate-y-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold text-cream opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {p.tag}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] grid place-items-center bg-inkgreen/80 p-5 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-[2rem] border-[5px] border-white/80 shadow-premium"
            >
              <Image src={active.src} alt={active.tag} fill sizes="90vw" className="object-cover" />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-sm font-semibold text-cream backdrop-blur-md">{active.tag}</span>
            </motion.div>
            <button onClick={() => setActive(null)} aria-label="Close" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-cream backdrop-blur-md transition hover:bg-white/30">
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
