# AKAN Dienstleistung — Architecture Overview

## Component Tree

```
app/layout.tsx (Root Layout)
├── ScrollProgress          — Reading progress bar
├── Navbar                  — Scroll-aware navbar + mobile overlay
├── main
│   └── {children}          — Page content
├── Footer                  — Site footer with animations
├── SocialProofToast        — Cycling engagement notifications
├── KonamiEasterEgg         — Konami code confetti easter egg
├── BackToTop               — Animated scroll-to-top button
├── CommandPalette          — Cmd+K fuzzy search navigation
├── CursorTrail             — Toggleable mouse cursor trail
└── ClickCounter            — Click milestone celebrations
```

## Pages

| Route          | File                       | Type   | Description                            |
| -------------- | -------------------------- | ------ | -------------------------------------- |
| `/`            | `app/page.tsx`             | Client | 11-section animated homepage           |
| `/services`    | `app/services/page.tsx`    | Server | Detailed service pages with sticky nav |
| `/ueber-uns`   | `app/ueber-uns/page.tsx`   | Server | About page with team, values, region   |
| `/galerie`     | `app/galerie/page.tsx`     | Client | Animated filter gallery + lightbox     |
| `/contact`     | `app/contact/page.tsx`     | Server | Contact form + map + office hours      |
| `/datenschutz` | `app/datenschutz/page.tsx` | Server | Privacy policy                         |
| `/impressum`   | `app/impressum/page.tsx`   | Server | Legal imprint                          |
| `/about`       | `app/about/page.tsx`       | Server | Redirect/alternate about               |

## Components (28 total)

### Animation System

| Component         | File                             | Purpose                                            |
| ----------------- | -------------------------------- | -------------------------------------------------- |
| `AnimatedSection` | `components/AnimatedSection.tsx` | Viewport-triggered wrapper with SSR-safe hydration |
| `AnimatedCounter` | `components/AnimatedCounter.tsx` | Spring-physics number counter                      |
| `TextReveal`      | `components/TextReveal.tsx`      | Word/character text reveal                         |
| `ParticleCanvas`  | `components/ParticleCanvas.tsx`  | Canvas particle system with mouse interaction      |
| `ScrollProgress`  | `components/ScrollProgress.tsx`  | Page reading progress bar                          |

### Interactive UI

| Component             | File                                 | Purpose                                    |
| --------------------- | ------------------------------------ | ------------------------------------------ |
| `TestimonialCarousel` | `components/TestimonialCarousel.tsx` | Auto-play carousel with drag/dots/keyboard |
| `Accordion`           | `components/Accordion.tsx`           | Animated FAQ accordion                     |
| `Timeline`            | `components/Timeline.tsx`            | Scroll-driven company history              |
| `GalleryGrid`         | `components/GalleryGrid.tsx`         | Filter gallery with lightbox               |
| `ServiceTabs`         | `components/ServiceTabs.tsx`         | Animated tabbed service view               |
| `CommandPalette`      | `components/CommandPalette.tsx`      | Cmd+K fuzzy search navigation              |
| `HorizontalScroller`  | `components/HorizontalScroller.tsx`  | Horizontal scroll card section             |

### Data Visualization

| Component    | File                        | Purpose                     |
| ------------ | --------------------------- | --------------------------- |
| `StatsRing`  | `components/StatsRing.tsx`  | Animated SVG progress rings |
| `RadarChart` | `components/RadarChart.tsx` | SVG radar/spider chart      |

### Micro-Interactions & Delight

| Component        | File                            | Purpose                       |
| ---------------- | ------------------------------- | ----------------------------- |
| `MagneticButton` | `components/MagneticButton.tsx` | 3D tilt + shine hover effect  |
| `Tooltip`        | `components/Tooltip.tsx`        | Animated tooltip with arrow   |
| `BackToTop`      | `components/BackToTop.tsx`      | Scroll-to-top button          |
| `CursorTrail`    | `components/CursorTrail.tsx`    | Toggleable mouse cursor trail |
| `ClickCounter`   | `components/ClickCounter.tsx`   | Click milestone celebrations  |

### Content & Social

| Component          | File                              | Purpose                             |
| ------------------ | --------------------------------- | ----------------------------------- |
| `TeamCard`         | `components/TeamCard.tsx`         | Expandable profiles with skill bars |
| `SocialProofToast` | `components/SocialProofToast.tsx` | Engagement notifications            |
| `KonamiEasterEgg`  | `components/KonamiEasterEgg.tsx`  | Konami code confetti                |
| `DarkModeToggle`   | `components/DarkModeToggle.tsx`   | Dark/light mode switch              |

### Layout

| Component          | File                              | Purpose                              |
| ------------------ | --------------------------------- | ------------------------------------ |
| `Navbar`           | `components/Navbar.tsx`           | Scroll-aware shrink + mobile overlay |
| `Footer`           | `components/Footer.tsx`           | Animated site footer                 |
| `ImagePlaceholder` | `components/ImagePlaceholder.tsx` | Image fallback wrapper               |

## Libraries & Hooks

| File                    | Purpose                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| `lib/animations.ts`     | 50+ animation presets, 7 spring configs, stagger utilities                                 |
| `lib/data.ts`           | Centralized typed data store (services, testimonials, team, FAQ, stats, regions, timeline) |
| `lib/performance.ts`    | Web Vitals budgets, metric rating, reduced motion detection                                |
| `hooks/useTimeOfDay.ts` | German greeting based on current hour                                                      |

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Animation:** Framer Motion (motion/react)
- **Styling:** Vanilla CSS + CSS Custom Properties (60+ design tokens)
- **Icons:** Lucide React
- **Fonts:** Montserrat (display) + Open Sans (body)
