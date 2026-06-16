# 🌿 Sprouts — Premium Early Childhood Learning Center

An award-quality, from-scratch landing page for a **luxury** early childhood learning center (Playgroup, Nursery, LKG, UKG & Day Care). Forest-green / cream / gold brand, tasteful glassmorphism, editorial layouts and premium motion — designed to feel like a custom ₹2L–₹5L brand site, not a daycare template.

## Design system

- **Palette** — Deep Forest `#0F5B45`, Emerald `#15803D`, Warm Cream `#FAF8F3`, Soft Beige `#F5F2EA`, Gold `#D4AF37`, Mint Glow `#DDF7EA`.
- **Type** — Plus Jakarta Sans (expressive display, up to ~88px) + Inter (body).
- **Glass** — `.glass` / `.glass-soft` / `.glass-dark` frosted layers over animated gradient-mesh backdrops, premium layered shadows, 20–32px radii.
- **Motion** — scroll reveals, staggered entrances, animated counters, mouse-parallax hero, magnetic buttons, infinite marquees, gradient-mesh aurora, smooth tab/accordion transitions.

## Sections

| File | Section |
|---|---|
| `Navbar.jsx` | Floating glass nav, magnetic CTA |
| `Hero.jsx` | Editorial headline + glass image stack, floating cards, mouse parallax, gradient mesh |
| `Metrics.jsx` | Floating glass metrics dashboard, animated counters, satisfaction ring |
| `Programs.jsx` | Horizontal image carousel, hover-expand glass overlays |
| `WhyUs.jsx` | Asymmetric **bento grid**, hover lift / glow / icon motion |
| `Founder.jsx` | Magazine-style story, portrait + glass quote, journey timeline |
| `Experience.jsx` | Split-screen with interactive (hover) content tabs |
| `Gallery.jsx` | Masonry grid, hover zoom, floating captions, animated lightbox |
| `Testimonials.jsx` | Dual infinite marquee, glass cards, video placeholders, hover-pause |
| `Enroll.jsx` | High-conversion glass CTA — benefits + form, gradient glow |
| `FAQ.jsx` | Glass accordion, smooth height animation |
| `Contact.jsx` | Map + floating contact cards |
| `Footer.jsx` | Big gold CTA, links, Webzy Studios credit |
| `ui/primitives.jsx` | Reveal, Stagger, CountUp, Magnetic, useMouseParallax, ScrollProgress |

## Run

```bash
npm install
npm run dev      # open the printed localhost URL
npm run build && npm start
```

## Tech

Next.js 14 (App Router, `next/font`, `next/image`) · Tailwind CSS 3 (custom luxury theme) · Framer Motion · lucide-react.

## Make it yours

- **Brand / colors / fonts** — `tailwind.config.js`, `app/globals.css`, `app/layout.js`
- **Founder** — name, portrait, quote, timeline in `components/Founder.jsx`
- **Map / address** — `MAP_QUERY` + lines in `components/Contact.jsx`
- **Images** — Unsplash placeholders; swap `src` URLs (host whitelisted in `next.config.mjs`)

> Forms are front-end only (success state). Wire them to your email/CRM to receive enquiries.
# sprouts-landing
