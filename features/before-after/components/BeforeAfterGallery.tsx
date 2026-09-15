'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-17 — BeforeAfterGallery Organism
// Horizontal scroll-snap gallery of Before/After sliders
// ═══════════════════════════════════════════════════════════

const galleryData = [
    {
        beforeImage: "/images/vorher-nachher/akan-bodenreinigung-industriehalle-vorher-verschmutzt.webp",
        afterImage: "/images/vorher-nachher/akan-bodenreinigung-industriehalle-nachher-glaenzend.webp",
        beforeLabel: "Vorher (Industrieboden)",
        afterLabel: "Nachher (Industrieboden)"
    },
    {
        beforeImage: "/images/vorher-nachher/akan-glasreinigung-wintergarten-verschmutzt-vorher.webp",
        afterImage: "/images/vorher-nachher/akan-glasreinigung-pavillon-sauber-nachher.webp",
        beforeLabel: "Vorher (Glasreinigung)",
        afterLabel: "Nachher (Glasreinigung)"
    }
];

export default function BeforeAfterGallery() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth > 1024 ? container.clientWidth / 2 : container.clientWidth;

            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative group w-full">
            {/* Scroll Container */}
            <div
                ref={scrollContainerRef}
                onScroll={checkScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-fluid pb-8 pt-4 px-4 sm:px-0 hide-scrollbar scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                role="region"
                aria-label="Vorher-Nachher Galerie"
                tabIndex={0}
            >
                {galleryData.map((item, index) => (
                    <div
                        key={index}
                        className="snap-center sm:snap-start shrink-0 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] min-w-[300px]"
                    >
                        <BeforeAfterSlider
                            beforeImage={item.beforeImage}
                            afterImage={item.afterImage}
                            beforeLabel={item.beforeLabel}
                            afterLabel={item.afterLabel}
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons (Desktop mostly) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 sm:-mx-6 z-10 hidden lg:flex">
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: canScrollLeft ? 1 : 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className="w-12 h-12 rounded-full bg-white border border-border mt-[-20px] shadow-md flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-colors pointer-events-auto disabled:opacity-50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 -ml-4"
                    aria-label="Vorherige Bilder"
                >
                    <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: canScrollRight ? 1 : 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className="w-12 h-12 rounded-full bg-white border border-border mt-[-20px] shadow-md flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-colors pointer-events-auto disabled:opacity-50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 -mr-4"
                    aria-label="Nächste Bilder"
                >
                    <ChevronRight className="w-6 h-6" />
                </motion.button>
            </div>

            {/* Scroll Indicator (Mobile/Tablet) */}
            <div className="flex justify-center sm:-mt-2 lg:hidden gap-2" aria-hidden="true">
                {galleryData.map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-border" />
                ))}
            </div>
        </div>
    );
}
