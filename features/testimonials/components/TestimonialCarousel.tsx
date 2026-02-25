'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { Testimonial } from '@/config/site';
import TestimonialCard from '@/shared/components/TestimonialCard';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-06 — Framer Motion Testimonial Carousel
// Implements TOUCH-02 with Physics: stiffness 80, damping 10
// Desktop: 3 cards, Tablet: 2 cards, Mobile: 1 card
// ═══════════════════════════════════════════════════════════

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
    autoPlayInterval?: number;
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);

    const updateMeasurements = () => {
        if (containerRef.current) {
            const containerW = containerRef.current.clientWidth;
            // Bestimme sichtbare Karten anhand der Breakpoints aus Tailwind
            let visible = 1;
            if (containerW >= 1024) visible = 3; // lg
            else if (containerW >= 640) visible = 2; // sm

            setVisibleCards(visible);

            // cardWidth + gap (24px) muss in den Container passen.
            // Die CSS Klassen der Karten regeln die %-Breiten.
            const rawCardWidth = containerW >= 1024 ? (containerW - 48) / 3 : containerW >= 640 ? (containerW - 24) / 2 : containerW;
            setCardWidth(rawCardWidth);

            // Korrigiere Index falls Resize outside of bounds geht
            const maxIdx = testimonials.length - visible;
            setCurrentIndex(prev => Math.min(prev, Math.max(0, maxIdx)));
        }
    };

    useEffect(() => {
        // Run once on mount after ref is attached
        if (containerRef.current && cardWidth === 0) {
            updateMeasurements();
        }
        window.addEventListener('resize', updateMeasurements);
        return () => window.removeEventListener('resize', updateMeasurements);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [testimonials.length]);

    const maxIndex = Math.max(0, testimonials.length - visibleCards);

    const scroll = (direction: 'left' | 'right') => {
        if (direction === 'left' && currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else if (direction === 'right' && currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handleDragEnd = (e: any, { offset }: any) => {
        const swipe = offset.x;

        // TOUCH-02: min-distance 50px threshold
        if (swipe < -50 && currentIndex < maxIndex) {
            scroll('right');
        } else if (swipe > 50 && currentIndex > 0) {
            scroll('left');
        }
    };

    if (!testimonials?.length) return null;

    // 24px is the gap space (gap-6)
    const translateX = -(currentIndex * (cardWidth + 24));

    return (
        <div className="relative group" ref={containerRef}>
            {/* Scroll Container */}
            <div className="overflow-hidden pb-12 pt-4 px-4 sm:px-0">
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }} // Elastic resistance bounds, we manage the true X via animate
                    dragElastic={0.15}
                    onDragEnd={handleDragEnd}
                    initial={false}
                    animate={{ x: translateX }}
                    transition={{ type: 'spring', stiffness: 80, damping: 10 }} // TOUCH-02 physics
                    className="flex gap-6 cursor-grab active:cursor-grabbing w-max touch-pan-y"
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-[calc(100vw-32px)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                        >
                            <TestimonialCard
                                author={testimonial.author}
                                role={testimonial.role}
                                text={testimonial.text}
                                rating={testimonial.rating || 5}
                                delay={0} // Disable initial CSS animation delay for smooth dragging
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Buttons (Desktop) */}
            <div className="absolute top-1/2 -translate-y-[calc(50%+24px)] left-0 right-0 justify-between pointer-events-none px-2 sm:-mx-6 z-10 hidden sm:flex">
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentIndex > 0 ? 1 : 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scroll('left')}
                    disabled={currentIndex === 0}
                    className="w-12 h-12 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-colors pointer-events-auto disabled:opacity-50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 -ml-4"
                    aria-label="Vorherige Kundenstimmen"
                >
                    <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentIndex < maxIndex ? 1 : 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scroll('right')}
                    disabled={currentIndex === maxIndex}
                    className="w-12 h-12 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-colors pointer-events-auto disabled:opacity-50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 -mr-4"
                    aria-label="Nächste Kundenstimmen"
                >
                    <ChevronRight className="w-6 h-6" />
                </motion.button>
            </div>

            {/* Pagination Indicators (Mobile) */}
            <div className="flex justify-center mt-2 sm:hidden gap-2" aria-hidden="true">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-primary scale-125' : 'bg-border hover:bg-border/80'}`}
                        aria-label={`Gehe zu Kundenstimme ${i + 1}`}
                    />
                ))}
                <span className="sr-only">Wische nach links oder rechts für mehr Testimonials</span>
            </div>
        </div>
    );
}
