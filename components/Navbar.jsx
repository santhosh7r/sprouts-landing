"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./ui/primitives";

const links = [
  { label: "Programs", href: "#programs" },
  { label: "Why us", href: "#why" },
  { label: "Founder", href: "#founder" },
  { label: "Experience", href: "#experience" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-[70]"
    >
      <div className="container-x pt-3 sm:pt-4">
        <nav
          className={`flex items-center justify-between gap-4 rounded-full px-3 py-2.5 pl-5 transition-all duration-300 ${
            scrolled ? "border border-white/60 bg-white/65 shadow-glass backdrop-blur-2xl" : "border border-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-display text-lg font-extrabold tracking-tight3 text-inkgreen">Sprouts</span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-3.5 py-2 text-sm font-medium text-inkgreen/70 transition hover:bg-brand-50 hover:text-forest">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Magnetic strength={0.45}>
              <a href="#enroll" className="btn-primary !py-3">
                Enroll now <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/60 bg-white/60 text-inkgreen backdrop-blur lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass mt-2 overflow-hidden p-2 lg:hidden"
            >
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-inkgreen/80 transition hover:bg-brand-50">
                  {l.label} <ArrowUpRight className="h-4 w-4 text-forest" />
                </a>
              ))}
              <a href="#enroll" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
                Enroll now <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

function Logo() {
  return (
    <span className="bg-grad grid h-9 w-9 place-items-center rounded-xl text-cream shadow-forest gold-ring">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21V11" />
        <path d="M12 11C12 7 9 4 4 4c0 5 3 7 8 7Z" />
        <path d="M12 13c0-3.3 2.7-6 6-6 0 3.3-2.7 6-6 6Z" />
      </svg>
    </span>
  );
}
