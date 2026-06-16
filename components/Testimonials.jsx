"use client";

import { Star, Play, Quote } from "lucide-react";
import { Reveal } from "./ui/primitives";

const reviews = [
  { quote: "Sprouts transformed my shy little boy. He now runs into class every morning — the educators truly treat the children like their own.", name: "Ananya Sharma", role: "Mother of Vihaan, UKG", color: "#0F5B45", video: true },
  { quote: "The live CCTV and daily updates give us such peace of mind. You can feel the intention behind every corner of this campus.", name: "Rahul Mehta", role: "Father of Aadya, Pre-KG", color: "#15803D" },
  { quote: "From phonics to manners, the growth has been remarkable. It never feels like pressure — she thinks she's just playing all day.", name: "Priya Nair", role: "Mother of Kiaan, LKG", color: "#22855B", video: true },
  { quote: "Easily the best decision we made. Clean, calm, beautiful — and a curriculum that genuinely respects how toddlers learn.", name: "Karthik Reddy", role: "Father of Meera, Play Group", color: "#0B4233" },
  { quote: "We toured five schools. Sprouts was the only one that felt premium and warm at the same time. Worth every rupee.", name: "Sneha Iyer", role: "Mother of Aarav, LKG", color: "#15803D", video: true },
  { quote: "The teachers send the loveliest little updates. My daughter has blossomed into a confident, curious child here.", name: "Farah Khan", role: "Mother of Zoya, Pre-KG", color: "#0F5B45" },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Loved by parents</span>
          <h2 className="h-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Stories from our <span className="text-grad">community</span>
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 backdrop-blur">
            <div className="flex">{[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
            <span className="font-display text-sm font-bold text-inkgreen">4.9 / 5 · 600+ reviews</span>
          </div>
        </Reveal>
      </div>

      {/* single infinite marquee row */}
      <div className="group fade-x mt-14 flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-5 pr-5 [animation-play-state:running] group-hover:[animation-play-state:paused]">
          {reviews.map((r, i) => <Card key={`a-${i}`} r={r} />)}
          {reviews.map((r, i) => <Card key={`b-${i}`} r={r} clone />)}
        </div>
      </div>
    </section>
  );
}

function Card({ r, clone }) {
  return (
    <figure aria-hidden={clone || undefined} className="glass flex w-[20rem] shrink-0 flex-col gap-4 p-6 sm:w-[24rem]">
      <div className="flex items-center justify-between">
        <Quote className="h-7 w-7 text-brand-200" fill="currentColor" />
        <div className="flex gap-0.5">{[0,1,2,3,4].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}</div>
      </div>
      <blockquote className="text-sm leading-relaxed text-inkgreen/75">“{r.quote}”</blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-1">
        <span className="grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-cream" style={{ background: r.color }}>
          {r.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
        </span>
        <div className="flex-1">
          <p className="font-display text-sm font-bold text-inkgreen">{r.name}</p>
          <p className="text-xs font-medium text-inkgreen/55">{r.role}</p>
        </div>
        {r.video && (
          <span className="grid h-9 w-9 place-items-center rounded-full bg-grad text-cream gold-ring" title="Watch video review">
            <Play className="h-4 w-4 translate-x-px" fill="currentColor" />
          </span>
        )}
      </figcaption>
    </figure>
  );
}
