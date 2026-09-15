'use client';

import { useRef, useState, useEffect, useCallback, useSyncExternalStore } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { motion } from 'motion/react';
import type { Testimonial } from '@/config/site';
import TestimonialCard from '@/shared/components/TestimonialCard';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-06 — Autonomous Visual Carousel with Cross-Device Polish
// Auto-advancing rotation with interactive pause & progress bar.
// Mobile: 1 card (100%), Tablet & Desktop: 2 cards (50%).
// ═══════════════════════════════════════════════════════════

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
    autoPlayInterval?: number; // ms, default 5500
}

function subscribeReducedMotion(callback: () => void) {
    if (typeof window === 'undefined') return () => {};
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', callback);
    return () => mediaQuery.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
    return false;
}

export default function TestimonialCarousel({
    testimonials,
    autoPlayInterval = 5500,
}: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [isInteracting, setIsInteracting] = useState(false);
    const [isPausedManually, setIsPausedManually] = useState(false);

    const prefersReducedMotion = useSyncExternalStore(
        subscribeReducedMotion,
        getReducedMotionSnapshot,
        getReducedMotionServerSnapshot
    );

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (!entry) return;
            const containerW = entry.contentRect.width;
            if (containerW <= 0) return;

            const visible = containerW >= 640 ? 2 : 1;
            setVisibleCards(visible);

            const gap = 20;
            const rawCardWidth = visible === 2
                ? Math.floor((containerW - gap) / 2)
                : Math.floor(containerW);

            setCardWidth(rawCardWidth);
            setCurrentIndex(prev => Math.min(prev, Math.max(0, testimonials.length - visible)));
        });

        observer.observe(el);
        return () => observer.disconnect();
    }, [testimonials.length]);

    const maxIndex = Math.max(0, testimonials.length - visibleCards);

    const scroll = useCallback((direction: 'left' | 'right') => {
        setCurrentIndex(prev => {
            if (direction === 'left') {
                return prev > 0 ? prev - 1 : maxIndex;
            } else {
                return prev < maxIndex ? prev + 1 : 0;
            }
        });
    }, [maxIndex]);

    const isAutoPlayActive = !isHovered && !isInteracting && !isPausedManually && !prefersReducedMotion;

    // Autonomous visual rotation timer
    useEffect(() => {
        if (!isAutoPlayActive || maxIndex === 0) return;

        const timer = setInterval(() => {
            scroll('right');
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [isAutoPlayActive, maxIndex, scroll, autoPlayInterval]);

    const handleDragEnd = (_e: any, { offset }: any) => {
        setIsInteracting(false);
        const swipe = offset.x;
        // min-distance 45px threshold
        if (swipe < -45) {
            scroll('right');
        } else if (swipe > 45) {
            scroll('left');
        }
    };

    if (!testimonials?.length) return null;

    const gap = 20;
    const translateX = -(currentIndex * (cardWidth + gap));

    return (
        <div
            className="relative group w-full select-none"
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => setIsInteracting(false)}
            role="region"
            aria-roledescription="Karussell"
            aria-label="Kundenbewertungen"
        >
            {/* Autonomous subtle progress indicator header */}
            <div className="flex items-center justify-between pb-3 px-1">
                <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                        Echte Kundenstimmen ({currentIndex + 1}/{testimonials.length})
                    </span>
                </div>

                {/* Automation play/pause control */}
                <button
                    type="button"
                    onClick={() => setIsPausedManually(prev => !prev)}
                    className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-primary transition-colors py-1 px-2.5 rounded-lg bg-surface hover:bg-surface-raised border border-border/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 cursor-pointer"
                    aria-label={isPausedManually ? "Automatische Rotation fortsetzen" : "Automatische Rotation anhalten"}
                    title={isPausedManually ? "Rotation fortsetzen" : "Rotation anhalten"}
                >
                    {isPausedManually ? (
                        <>
                            <Play className="w-3 h-3 text-emerald-600 fill-emerald-600" aria-hidden="true" />
                            <span className="hidden sm:inline">Start</span>
                        </>
                    ) : (
                        <>
                            <Pause className="w-3 h-3 text-primary" aria-hidden="true" />
                            <span className="hidden sm:inline">Pause</span>
                        </>
                    )}
                </button>
            </div>

            {/* Autonomous cycle progress bar */}
            <div className="w-full h-1 bg-border/40 rounded-full overflow-hidden mb-4">
                <motion.div
                    key={`${currentIndex}-${isAutoPlayActive}`}
                    initial={{ width: '0%' }}
                    animate={isAutoPlayActive ? { width: '100%' } : { width: '0%' }}
                    transition={isAutoPlayActive ? { duration: autoPlayInterval / 1000, ease: 'linear' } : { duration: 0 }}
                    className="h-full bg-primary/70 rounded-full"
                />
            </div>

            {/* Scroll Container */}
            <div className="overflow-hidden pb-4 pt-1 w-full">
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.12}
                    onDragStart={() => setIsInteracting(true)}
                    onDragEnd={handleDragEnd}
                    initial={false}
                    animate={{ x: translateX }}
                    transition={{ type: 'spring', stiffness: 100, damping: 14 }}
                    className="flex cursor-grab active:cursor-grabbing touch-pan-y"
                    style={{ gap: `${gap}px` }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="shrink-0 transition-opacity duration-300"
                            style={{
                                width: cardWidth > 0 ? `${cardWidth}px` : '100%',
                            }}
                        >
                            <TestimonialCard
                                author={testimonial.author}
                                role={testimonial.role}
                                text={testimonial.text}
                                rating={testimonial.rating || 5}
                                badge={testimonial.badge}
                                delay={0}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Controls: Chevrons & Interactive Dots */}
            <div className="flex items-center justify-between mt-4 px-1">
                {/* Dots indicator */}
                <div className="flex items-center gap-1.5" aria-label="Karussell-Navigation">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setCurrentIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 cursor-pointer ${
                                i === currentIndex
                                    ? 'w-6 bg-primary'
                                    : 'w-2 bg-border hover:bg-border/80'
                            }`}
                            aria-label={`Gehe zu Folie ${i + 1}`}
                            aria-current={i === currentIndex ? 'true' : 'false'}
                        />
                    ))}
                </div>

                {/* Navigation Buttons (Both Mobile & Desktop accessible) */}
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => scroll('left')}
                        className="w-9 h-9 rounded-full bg-white dark:bg-zinc-800 border border-border shadow-sm flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 cursor-pointer"
                        aria-label="Vorherige Kundenstimme"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        type="button"
                        onClick={() => scroll('right')}
                        className="w-9 h-9 rounded-full bg-white dark:bg-zinc-800 border border-border shadow-sm flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 cursor-pointer"
                        aria-label="Nächste Kundenstimme"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
