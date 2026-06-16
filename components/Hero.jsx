"use client";

import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import { ArrowUpRight, Star, ShieldCheck, Sparkles, GraduationCap } from "lucide-react";
import { Magnetic, useMouseParallax, CountUp } from "./ui/primitives";

export default function Hero() {
  const { x, y, onMove } = useMouseParallax();
  // depth layers
  const t = (mv, range) => useTransform(mv, [-1, 1], [-range, range]);
  const imgX = t(x, 16), imgY = t(y, 14);
  const c1X = t(x, -34), c1Y = t(y, -26);
  const c2X = t(x, 40), c2Y = t(y, 30);
  const c3X = t(x, -24), c3Y = t(y, 34);

  return (
    <section id="home" onMouseMove={onMove} className="relative overflow-hidden pt-28 sm:pt-36">
      {/* gradient mesh + floating shapes */}
      <div className="mesh">
        <span className="left-[2%] top-[6%] h-[26rem] w-[26rem] animate-aurora bg-mint/70" />
        <span className="right-[6%] top-[2%] h-[24rem] w-[24rem] animate-aurora bg-brand-200/60" style={{ animationDelay: "-6s" }} />
        <span className="left-[40%] top-[40%] h-[22rem] w-[22rem] animate-aurora bg-gold/15" style={{ animationDelay: "-11s" }} />
      </div>
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_top,#000_25%,transparent_72%)]" />

      <div className="container-x grid items-center gap-12 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28">
        {/* LEFT */}
        <div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Now enrolling · 2026–27
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="h-display mt-6 text-[2.7rem] leading-[1.0] sm:text-6xl lg:text-[5.2rem]"
          >
            Where childhood
            <br />
            meets <span className="text-grad">excellence</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-inkgreen/65"
          >
            A premium early-childhood learning center where play-based discovery,
            world-class educators and a beautifully safe campus help little minds
            flourish — from Play Group to UKG.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Magnetic strength={0.4} className="w-full sm:w-auto">
              <a href="#enroll" className="btn-primary w-full text-base sm:w-auto">
                Enroll now <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <a href="#programs" className="btn-glass w-full text-base sm:w-auto">
              Explore programs
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {["#0F5B45", "#15803D", "#22855B", "#D4AF37"].map((c, i) => (
                  <span key={i} className="grid h-9 w-9 place-items-center rounded-full border-2 border-cream text-[11px] font-bold text-cream" style={{ background: c }}>
                    {["A", "K", "P", "M"][i]}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}
                </div>
                <p className="mt-0.5 text-xs font-medium text-inkgreen/55">Rated 4.9 by 600+ parents</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-inkgreen/65">
              <ShieldCheck className="h-5 w-5 text-forest" /> Secured, CCTV-monitored campus
            </div>
          </motion.div>
        </div>

        {/* RIGHT — glass image stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto h-[30rem] w-full max-w-md sm:h-[34rem] lg:max-w-none"
        >
          {/* primary image */}
          <motion.div style={{ x: imgX, y: imgY }} className="absolute left-1/2 top-1/2 h-[26rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 sm:h-[30rem] sm:w-[22rem]">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-[5px] border-white/80 bg-brand-100 shadow-premium">
              <Image src="https://images.unsplash.com/photo-1587616211892-f743fcca64f9?auto=format&fit=crop&w=900&q=80" alt="A child discovering at Sprouts" fill priority sizes="(max-width:1024px) 80vw, 32vw" className="object-cover" />
            </div>
          </motion.div>

          {/* secondary image */}
          <motion.div style={{ x: c3X, y: c3Y }} className="absolute -left-2 bottom-2 hidden h-40 w-32 overflow-hidden rounded-3xl border-[4px] border-white/80 shadow-premium sm:block lg:-left-6">
            <Image src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80" alt="Children learning together" fill sizes="160px" className="object-cover" />
          </motion.div>

          {/* glass card: graduates counter */}
          <motion.div style={{ x: c1X, y: c1Y }} className="glass absolute -left-3 top-4 flex items-center gap-3 p-3.5 pr-5 sm:-left-6">
            <span className="bg-grad grid h-11 w-11 place-items-center rounded-2xl text-cream gold-ring">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-xl font-extrabold leading-none text-inkgreen"><CountUp to={2000} suffix="+" /></p>
              <p className="mt-1 text-xs font-medium text-inkgreen/55">Happy graduates</p>
            </div>
          </motion.div>

          {/* glass card: ratio */}
          <motion.div style={{ x: c2X, y: c2Y }} className="glass absolute -right-2 bottom-6 p-4 sm:-right-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold" />
              <p className="text-xs font-semibold uppercase tracking-wide text-inkgreen/55">Teacher ratio</p>
            </div>
            <p className="mt-1 font-display text-3xl font-extrabold leading-none text-grad">1:8</p>
            <p className="mt-1 text-xs font-medium text-inkgreen/55">Personal attention, always</p>
          </motion.div>

          {/* gold accent ring */}
          <div className="pointer-events-none absolute right-6 top-10 -z-10 h-28 w-28 rounded-full border-[3px] border-gold/30" />
        </motion.div>
      </div>
    </section>
  );
}
