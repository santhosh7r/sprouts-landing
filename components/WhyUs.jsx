"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BookOpen, GraduationCap, Salad, Blocks, HeartHandshake, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem, CountUp } from "./ui/primitives";

export default function WhyUs() {
  return (
    <section id="why" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why parents choose us</span>
          <h2 className="h-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Six promises we <span className="text-grad">never compromise</span> on
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-inkgreen/60">
            Every detail — from the curriculum to the kitchen — is designed around
            your child's safety, growth and happiness.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid auto-rows-[minmax(11rem,auto)] grid-cols-2 gap-5 lg:grid-cols-4">
          {/* Safety — large feature tile */}
          <StaggerItem className="col-span-2 row-span-2">
            <Tile className="group flex h-full flex-col justify-between bg-grad p-8 text-cream">
              <div className="flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-cream backdrop-blur transition group-hover:scale-110 gold-ring">
                  <ShieldCheck className="h-7 w-7" strokeWidth={2} />
                </span>
                <ArrowUpRight className="h-6 w-6 text-mint opacity-0 transition group-hover:opacity-100" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-extrabold tracking-tight3">Uncompromising safety</h3>
                <p className="mt-3 max-w-md text-cream/80">
                  Gated, fire-safe campus with biometric pickup, trained caregivers
                  and live CCTV streamed privately to parents.
                </p>
                <div className="mt-5 flex gap-6">
                  <div><p className="font-display text-2xl font-extrabold"><CountUp to={24} suffix="/7" /></p><p className="text-xs text-cream/65">Monitoring</p></div>
                  <div><p className="font-display text-2xl font-extrabold">100%</p><p className="text-xs text-cream/65">Verified pickup</p></div>
                </div>
              </div>
            </Tile>
          </StaggerItem>

          <Mini icon={BookOpen} title="Play-based curriculum" desc="Learning through stories, art & discovery — never rote." />
          <Mini icon={GraduationCap} title="Qualified educators" desc="Certified early-years specialists, 1:8 ratio." accent />
          <Mini icon={Salad} title="Fresh nutrition" desc="Dietitian-planned meals cooked in-house daily." accent />
          <Mini icon={Blocks} title="Play-based learning" desc="Curiosity-first classrooms built for exploration." />

          {/* Emotional dev — wide tile */}
          <StaggerItem className="col-span-2">
            <Tile className="group flex h-full items-center justify-between gap-5 bg-white/60 p-7">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-forest transition group-hover:rotate-6">
                  <HeartHandshake className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight3 text-inkgreen">Emotional development</h3>
                <p className="mt-1.5 max-w-sm text-sm text-inkgreen/60">Mindfulness, empathy circles and gentle guidance that build resilient, kind little humans.</p>
              </div>
              <span className="hidden font-display text-6xl font-extrabold text-grad sm:block">♥</span>
            </Tile>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

function Tile({ children, className = "" }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className={`h-full overflow-hidden rounded-[1.75rem] border border-white/60 shadow-glass backdrop-blur-xl transition-shadow duration-300 hover:shadow-lift ${className}`}>
      {children}
    </motion.div>
  );
}

function Mini({ icon: Icon, title, desc, accent }) {
  return (
    <StaggerItem>
      <Tile className={`group flex h-full flex-col justify-between p-6 ${accent ? "bg-beige/70" : "bg-white/60"}`}>
        <span className={`grid h-12 w-12 place-items-center rounded-2xl transition group-hover:-rotate-6 ${accent ? "bg-gold/15 text-gold" : "bg-brand-50 text-forest"}`}>
          <Icon className="h-6 w-6" strokeWidth={2} />
        </span>
        <div className="mt-5">
          <h3 className="font-display text-lg font-extrabold tracking-tight3 text-inkgreen">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-inkgreen/60">{desc}</p>
        </div>
      </Tile>
    </StaggerItem>
  );
}
