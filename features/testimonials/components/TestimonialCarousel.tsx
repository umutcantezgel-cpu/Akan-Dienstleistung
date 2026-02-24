'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { springs } from '@/shared/styles/animations';
import type { Testimonial } from '@/config/site';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-06 — Testimonial Carousel Orbital System
// 3D depth scaling, orbital dot navigation, quote glow
// ═══════════════════════════════════════════════════════════

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
    autoPlayInterval?: number;
}

export default function TestimonialCarousel({
    testimonials,
    autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const total = testimonials.length;

    const goTo = useCallback((index: number, dir: number) => {
        setDirection(dir);
        setCurrent(index);
    }, []);

    const goNext = useCallback(() => {
        goTo((current + 1) % total, 1);
    }, [current, total, goTo]);

    const goPrev = useCallback(() => {
        goTo((current - 1 + total) % total, -1);
    }, [current, total, goTo]);

    // Autoplay
    useEffect(() => {
        if (isPaused) return;
        timerRef.current = setInterval(goNext, autoPlayInterval);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [goNext, autoPlayInterval, isPaused]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [goNext, goPrev]);

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 200 : -200,
            opacity: 0,
            scale: 0.88,
            rotateY: dir > 0 ? 8 : -8,
            filter: 'blur(6px)',
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            filter: 'blur(0px)',
            transition: { ...springs.gentle, filter: { duration: 0.3 } },
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -200 : 200,
            opacity: 0,
            scale: 0.88,
            rotateY: dir > 0 ? -8 : 8,
            filter: 'blur(6px)',
            transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
        }),
    };

    const testimonial = testimonials[current];
    if (!testimonial) return null;

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            role="region"
            aria-label="Kundenstimmen"
            aria-roledescription="carousel"
        >
            {/* Slide Area with perspective container */}
            <div className="relative overflow-hidden min-h-[280px] flex items-center" style={{ perspective: 1200 }}>
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="w-full"
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${current + 1} von ${total}`}
                    >
                        <div className="max-w-3xl mx-auto text-center px-12 relative">
                            {/* Decorative quote mark */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 0.06, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="absolute -top-6 left-1/2 -translate-x-1/2"
                            >
                                <Quote className="w-20 h-20 text-primary" />
                            </motion.div>

                            {/* Stars with orbital entrance */}
                            <div className="flex justify-center gap-1.5 mb-6">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <motion.div
                                        key={j}
                                        initial={{ opacity: 0, scale: 0, rotate: -180, y: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                                        transition={{ delay: j * 0.08 + 0.1, ...springs.bouncy }}
                                    >
                                        <Star className="w-5 h-5 text-trust-gold fill-current drop-shadow-[0_2px_4px_rgba(214,168,72,0.3)]" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quote with text glow */}
                            <blockquote className="text-xl md:text-2xl text-text-primary font-medium leading-relaxed mb-8 italic">
                                &ldquo;{testimonial.text}&rdquo;
                            </blockquote>

                            {/* Author with entrance */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <p className="font-bold text-text-primary text-lg font-display">{testimonial.author}</p>
                                <p className="text-sm text-text-secondary">{testimonial.role}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows with hover glow */}
            <motion.button
                onClick={goPrev}
                whileHover={{ scale: 1.08, x: -3 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:bg-surface hover:border-primary/30 hover:shadow-[0_4px_16px_rgba(155,28,46,0.1)] transition-all group"
                aria-label="Vorheriges Testimonial"
            >
                <ChevronLeft className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
            </motion.button>
            <motion.button
                onClick={goNext}
                whileHover={{ scale: 1.08, x: 3 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:bg-surface hover:border-primary/30 hover:shadow-[0_4px_16px_rgba(155,28,46,0.1)] transition-all group"
                aria-label="Nächstes Testimonial"
            >
                <ChevronRight className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
            </motion.button>

            {/* Orbital Dot Indicators */}
            <div className="flex justify-center gap-2.5 mt-8" role="tablist" aria-label="Testimonial wählen">
                {testimonials.map((_, i) => (
                    <motion.button
                        key={i}
                        onClick={() => goTo(i, i > current ? 1 : -1)}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative"
                        role="tab"
                        aria-selected={i === current}
                        aria-label={`Testimonial ${i + 1}`}
                    >
                        <div className={`w-3 h-3 rounded-full transition-all duration-500 ${i === current ? 'bg-primary scale-100' : 'bg-border hover:bg-primary/40 scale-100'
                            }`} />
                        {i === current && (
                            <motion.div
                                layoutId="testimonialDot"
                                className="absolute -inset-1 rounded-full border-2 border-primary/40"
                                transition={{ ...springs.snappy, layout: { duration: 0.3 } }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
