'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// ═══════════════════════════════════════════════════════════
// OMEGA PROTOCOL — Gravitational Scroll Physics Engine
// Ω-01 + Ω-02: Sentient design tokens + scroll-linked physics
// ═══════════════════════════════════════════════════════════

// ── Scroll Velocity Hook ────────────────────────────────────
export function useScrollVelocity() {
    const [velocity, setVelocity] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const lastScrollY = useRef(0);
    const lastTime = useRef(0);
    const rafId = useRef<number>(0);

    useEffect(() => {
        const update = () => {
            const now = Date.now();
            const dt = Math.max(now - lastTime.current, 1);
            const currentY = window.scrollY;
            const rawVelocity = (currentY - lastScrollY.current) / dt;

            // Smooth velocity with exponential decay
            setVelocity((prev) => prev * 0.8 + rawVelocity * 0.2);
            setScrollY(currentY);

            // Calculate scroll progress (0 → 1)
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(docHeight > 0 ? Math.min(currentY / docHeight, 1) : 0);

            lastScrollY.current = currentY;
            lastTime.current = now;
            rafId.current = requestAnimationFrame(update);
        };

        rafId.current = requestAnimationFrame(update);
        return () => cancelAnimationFrame(rafId.current);
    }, []);

    return { velocity, scrollY, scrollProgress };
}

// ── Scroll-Reactive Shadow Depth ────────────────────────────
export function useScrollShadows() {
    const { scrollProgress } = useScrollVelocity();

    // Shadow depth multiplier increases as user scrolls deeper
    const depthMultiplier = 1 + scrollProgress * 0.6;
    const glowIntensity = Math.min(0.08 + scrollProgress * 0.12, 0.2);

    return {
        depthMultiplier,
        glowIntensity,
        cardShadow: `0 ${10 * depthMultiplier}px ${30 * depthMultiplier}px -5px rgba(0, 0, 0, ${0.04 * depthMultiplier}), 0 ${30 * depthMultiplier}px ${60 * depthMultiplier}px -15px rgba(0, 0, 0, ${0.06 * depthMultiplier}), 0 0 0 1px rgba(241, 229, 231, 0.6)`,
        elevatedShadow: `0 ${20 * depthMultiplier}px ${40 * depthMultiplier}px -10px rgba(146, 24, 41, ${glowIntensity}), 0 ${40 * depthMultiplier}px ${80 * depthMultiplier}px -20px rgba(146, 24, 41, ${glowIntensity * 1.5})`,
    };
}

// ── Ambient Warmth (subtle color temp shift over time) ───────
export function useAmbientWarmth() {
    const [warmth, setWarmth] = useState(0);
    const startTime = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const elapsed = (Date.now() - startTime.current) / 1000;
            // Warmth increases over 60 seconds, maxing at 1.0
            const w = Math.min(elapsed / 60, 1);
            setWarmth(w);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Returns a subtle hue-rotate to warm the palette
    return {
        warmth,
        warmthFilter: `hue-rotate(${warmth * 2}deg) saturate(${1 + warmth * 0.05})`,
    };
}

// ── Spring Physics with Gravity ─────────────────────────────
export const gravitySpring = {
    freefall: { type: 'spring' as const, stiffness: 0, damping: 0, mass: 1, velocity: 9.81 },
    heavyDrop: { type: 'spring' as const, stiffness: 100, damping: 12, mass: 2.5 },
    lightFloat: { type: 'spring' as const, stiffness: 60, damping: 18, mass: 0.4 },
    elasticBounce: { type: 'spring' as const, stiffness: 350, damping: 8, mass: 0.6 },
    magneticSnap: { type: 'spring' as const, stiffness: 600, damping: 25, mass: 0.3 },
    orbitalDecay: { type: 'spring' as const, stiffness: 45, damping: 10, mass: 1.8 },
    quantumJitter: { type: 'spring' as const, stiffness: 900, damping: 35, mass: 0.15 },
};

// ── Inertial Scroll Entry ───────────────────────────────────
// Elements have mass — heavy sections enter slowly, light ones snap in
export interface SectionMass {
    mass: number; // 0.5 (light) → 3.0 (heavy)
    label: string;
}

export const sectionMasses: Record<string, SectionMass> = {
    hero: { mass: 0.3, label: 'Hero — Ultra-light, instant' },
    services: { mass: 1.2, label: 'Services — Standard weight' },
    stats: { mass: 2.0, label: 'Stats — Heavy data, slow reveal' },
    testimonials: { mass: 1.0, label: 'Testimonials — Medium flow' },
    cta: { mass: 0.6, label: 'CTA — Snappy, attention-grabbing' },
    faq: { mass: 1.5, label: 'FAQ — Considered, weighted' },
    gallery: { mass: 1.8, label: 'Gallery — Visual gravity' },
    timeline: { mass: 2.2, label: 'Timeline — Heaviest, cascading' },
    contact: { mass: 1.3, label: 'Contact — Moderate' },
    footer: { mass: 0.8, label: 'Footer — Light exit' },
};

export function getSpringForMass(mass: number) {
    return {
        type: 'spring' as const,
        stiffness: Math.max(60, 200 - mass * 50),
        damping: 10 + mass * 4,
        mass: mass,
    };
}

// ── Viewport Gravity Hook ───────────────────────────────────
// Elements are "attracted" to the viewport center
export function useViewportGravity(ref: React.RefObject<HTMLElement | null>) {
    const [gravity, setGravity] = useState({ pull: 0, direction: 0 });

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const rect = entry.boundingClientRect;
                        const viewportCenter = window.innerHeight / 2;
                        const elementCenter = rect.top + rect.height / 2;
                        const distance = Math.abs(viewportCenter - elementCenter);
                        const maxDistance = window.innerHeight;

                        // Pull strength: 1.0 at center, 0.0 at edges
                        const pull = Math.max(0, 1 - distance / maxDistance);
                        const direction = elementCenter < viewportCenter ? 1 : -1;

                        setGravity({ pull, direction });
                    }
                });
            },
            { threshold: Array.from({ length: 20 }, (_, i) => i / 20) }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);

    return gravity;
}

// ── Noise Breathing Animation ───────────────────────────────
export function useNoiseBreath() {
    const [opacity, setOpacity] = useState(0.015);

    useEffect(() => {
        let frame: number;
        const startTime = Date.now();

        const breathe = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            // Slow sinusoidal breathing: 8-second cycle
            const breath = 0.012 + Math.sin(elapsed * 0.785) * 0.005;
            setOpacity(breath);
            frame = requestAnimationFrame(breathe);
        };

        frame = requestAnimationFrame(breathe);
        return () => cancelAnimationFrame(frame);
    }, []);

    return opacity;
}

// ── Parallax Layer System ───────────────────────────────────
// Multi-layer parallax with independent Z-axis speeds
export interface ParallaxLayer {
    speed: number;    // 0 = fixed, 1 = scroll speed, >1 = faster
    zIndex: number;
    opacity?: number;
}

export const parallaxLayers: ParallaxLayer[] = [
    { speed: 0.1, zIndex: -5, opacity: 0.3 },   // Deepest background
    { speed: 0.2, zIndex: -4, opacity: 0.4 },
    { speed: 0.35, zIndex: -3, opacity: 0.55 },
    { speed: 0.5, zIndex: -2, opacity: 0.7 },
    { speed: 0.7, zIndex: -1, opacity: 0.85 },
    { speed: 1.0, zIndex: 0, opacity: 1.0 },     // Content layer
    { speed: 1.3, zIndex: 1, opacity: 1.0 },      // Foreground
];

export function useParallaxOffset(speed: number) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY * (1 - speed));
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return offset;
}

// ── Cursor Proximity Detection ──────────────────────────────
export function useCursorProximity(ref: React.RefObject<HTMLElement | null>, maxDistance = 300) {
    const [proximity, setProximity] = useState(0); // 0 = far, 1 = touching

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.sqrt(
                Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
            );
            setProximity(Math.max(0, 1 - distance / maxDistance));
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [ref, maxDistance]);

    return proximity;
}
