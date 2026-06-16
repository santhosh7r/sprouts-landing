"use client";

import { motion } from "framer-motion";
import { TrendingUp, Heart, Award, Users } from "lucide-react";
import { CountUp, Reveal, Stagger, StaggerItem } from "./ui/primitives";

const metrics = [
  { icon: Award, label: "Years of excellence", to: 12, suffix: "+", note: "Established 2014" },
  { icon: Users, label: "Certified educators", to: 32, suffix: "", note: "Avg. 8 yrs experience" },
  { icon: Heart, label: "Parent satisfaction", to: 98, suffix: "%", note: "Annual survey 2025" },
  { icon: TrendingUp, label: "School-ready rate", to: 99, suffix: "%", note: "UKG graduates" },
];

export default function Metrics() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container-x">
        <Reveal>
          <div className="glass relative overflow-hidden p-6 sm:p-10">
            {/* subtle inner glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mint/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <span className="eyebrow">Trusted by families</span>
                <h2 className="h-display mt-4 max-w-md text-2xl sm:text-3xl">
                  Numbers that speak <span className="text-grad">louder than promises</span>
                </h2>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/50 px-4 py-3 backdrop-blur">
                <span className="relative grid h-12 w-12 place-items-center">
                  <Ring value={98} />
                  <span className="absolute font-display text-xs font-extrabold text-forest">98</span>
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-inkgreen">Satisfaction score</p>
                  <p className="text-xs font-medium text-inkgreen/55">Would recommend Sprouts</p>
                </div>
              </div>
            </div>

            <Stagger className="relative mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {metrics.map((m) => (
                <StaggerItem key={m.label}>
                  <motion.div whileHover={{ y: -5 }} className="group h-full rounded-3xl border border-white/60 bg-white/55 p-5 shadow-soft backdrop-blur-xl transition hover:bg-white/80">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-forest transition group-hover:bg-forest group-hover:text-cream">
                      <m.icon className="h-5 w-5" strokeWidth={2.1} />
                    </span>
                    <p className="mt-4 font-display text-3xl font-extrabold tracking-tight3 text-inkgreen sm:text-4xl">
                      <CountUp to={m.to} suffix={m.suffix} />
                    </p>
                    <p className="mt-1 text-sm font-semibold text-inkgreen/75">{m.label}</p>
                    <p className="mt-0.5 text-xs font-medium text-inkgreen/45">{m.note}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Ring({ value }) {
  const r = 18, c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 44 44" className="h-12 w-12 -rotate-90">
      <circle cx="22" cy="22" r={r} fill="none" stroke="#D6EBE0" strokeWidth="4" />
      <motion.circle
        cx="22" cy="22" r={r} fill="none" stroke="#15803D" strokeWidth="4" strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c * (1 - value / 100) }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />
    </svg>
  );
}
