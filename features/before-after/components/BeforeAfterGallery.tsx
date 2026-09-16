'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-17 — BeforeAfterGallery Organism
// Horizontal scroll-snap gallery of Before/After sliders
// ═══════════════════════════════════════════════════════════

interface BeforeAfterItem {
    id: string;
    title: string;
    category: 'Industriereinigung' | 'Glasreinigung' | 'Unterhaltsreinigung' | 'Sonderreinigung';
    description: string;
    beforeImage: string;
    afterImage: string;
    beforeLabel: string;
    afterLabel: string;
}

const galleryData: BeforeAfterItem[] = [
    {
        id: "industrieboden",
        title: "Industrieboden Tiefenreinigung & Glanzversiegelung",
        category: "Industriereinigung",
        description: "Beseitigung hartnäckiger Abriebspuren, Industrieöle und Feinstaub mit anschließender polymerer Schutzversiegelung.",
        beforeImage: "/images/vorher-nachher/akan-bodenreinigung-industriehalle-vorher-verschmutzt.webp",
        afterImage: "/images/vorher-nachher/akan-bodenreinigung-industriehalle-nachher-glaenzend.webp",
        beforeLabel: "Vorher: Stark verschmutzt",
        afterLabel: "Nachher: Hochglanzversiegelt"
    },
    {
        id: "pvc-vorhang",
        title: "PVC-Streifenvorhang & Hallenabtrennung Messraum",
        category: "Industriereinigung",
        description: "Rückstandslose Entfernung von Industrie-Sedimenten für perfekte Lichtdurchlässigkeit und Arbeitssicherheit.",
        beforeImage: "/images/vorher-nachher/akan-vorher-nachher-pvc-streifenvorhang-vorher.jpg",
        afterImage: "/images/vorher-nachher/akan-vorher-nachher-pvc-streifenvorhang-nachher.jpg",
        beforeLabel: "Vorher: Erblindete Lamellen",
        afterLabel: "Nachher: Glasklare Transparenz"
    },
    {
        id: "kran-hebezeug",
        title: "Industriekran & Hebezeug-Motor Entfettung",
        category: "Industriereinigung",
        description: "Entfernung von zähem Schmierfett, Staubkrusten und Verharzungen an Hebezeug und Motorgehäusen.",
        beforeImage: "/images/vorher-nachher/akan-vorher-nachher-kran-hebezeug-vorher.jpg",
        afterImage: "/images/vorher-nachher/akan-vorher-nachher-kran-hebezeug-nachher.jpg",
        beforeLabel: "Vorher: Schmierfilm & Staub",
        afterLabel: "Nachher: Tiefenentfettet & rein"
    },
    {
        id: "glas-wintergarten",
        title: "Wintergarten- & Glaspavillon-Reinigung",
        category: "Glasreinigung",
        description: "Streifenfreie Beseitigung von Witterungsablagerungen und Moos mit entmineralisiertem Reinwasser.",
        beforeImage: "/images/vorher-nachher/akan-glasreinigung-wintergarten-verschmutzt-vorher.webp",
        afterImage: "/images/vorher-nachher/akan-glasreinigung-pavillon-sauber-nachher.webp",
        beforeLabel: "Vorher: Verwitterte Glasfront",
        afterLabel: "Nachher: Brillanter Durchblick"
    },
    {
        id: "sektionaltor",
        title: "Industrie-Sektionaltor & Hallenzugang",
        category: "Sonderreinigung",
        description: "Beseitigung von Ruß, Straßenschmutz und Industrieablagerungen an Torlamellen und Führungen.",
        beforeImage: "/images/vorher-nachher/akan-vorher-nachher-sektionaltor-halle-vorher.jpg",
        afterImage: "/images/vorher-nachher/akan-vorher-nachher-sektionaltor-halle-nachher.jpg",
        beforeLabel: "Vorher: Dunkler Rußbelag",
        afterLabel: "Nachher: Makellose Torfläche"
    },
    {
        id: "sanitaer-fliesen",
        title: "Sanitäranlagen Tiefen- & Fugenreinigung",
        category: "Unterhaltsreinigung",
        description: "Entkalkung und Tiefendesinfektion von Wand- und Bodenfliesen für kompromisslose gewerbliche Hygiene.",
        beforeImage: "/images/vorher-nachher/akan-vorher-nachher-sanitaer-fliesen-vorher.jpg",
        afterImage: "/images/vorher-nachher/akan-vorher-nachher-sanitaer-fliesen-nachher.png",
        beforeLabel: "Vorher: Verkalkte Fugen",
        afterLabel: "Nachher: Keimfreie Frische"
    }
];

const categories = ['Alle', 'Industriereinigung', 'Glasreinigung', 'Unterhaltsreinigung', 'Sonderreinigung'] as const;

export default function BeforeAfterGallery() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const filteredData = selectedCategory === 'Alle'
        ? galleryData
        : galleryData.filter(item => item.category === selectedCategory);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [filteredData]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth > 1024 ? container.clientWidth * 0.75 : container.clientWidth;

            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full space-y-6">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pb-2">
                {categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCategory(cat);
                                if (scrollContainerRef.current) {
                                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                                }
                            }}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                                isActive
                                    ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                                    : 'bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-elevated border border-border/60'
                            }`}
                            aria-pressed={isActive}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>

            {/* Carousel with Navigation */}
            <div className="relative group w-full overflow-hidden">
                {/* Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-2 px-1 hide-scrollbar scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    role="region"
                    aria-label="Vorher-Nachher Galerie"
                    tabIndex={0}
                >
                    {filteredData.map((item) => (
                        <div
                            key={item.id}
                            className="snap-center shrink-0 w-full md:w-[calc(60%-1rem)] lg:w-[calc(50%-1rem)] min-w-0 flex flex-col justify-between bg-surface rounded-[2.25rem] p-4 border border-border/70 shadow-card hover:shadow-elevated transition-shadow"
                        >
                            <div className="w-full">
                                <BeforeAfterSlider
                                    beforeImage={item.beforeImage}
                                    afterImage={item.afterImage}
                                    beforeLabel={item.beforeLabel}
                                    afterLabel={item.afterLabel}
                                />
                            </div>
                            <div className="pt-4 px-2">
                                <div className="flex items-center justify-between gap-2 mb-1.5">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                                        {item.category}
                                    </span>
                                </div>
                                <h4 className="font-bold text-text-primary text-base font-display mb-1.5 leading-snug">
                                    {item.title}
                                </h4>
                                <p className="text-xs text-text-secondary leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                {filteredData.length > 1 && (
                    <div className="absolute top-1/2 -translate-y-12 left-2 right-2 flex justify-between pointer-events-none z-30">
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: canScrollLeft ? 1 : 0 }}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className="w-11 h-11 rounded-full bg-white/95 backdrop-blur border border-border shadow-lg flex items-center justify-center text-text-primary hover:text-primary transition-colors pointer-events-auto disabled:opacity-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            aria-label="Vorheriges Ergebnis"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: canScrollRight ? 1 : 0 }}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className="w-11 h-11 rounded-full bg-white/95 backdrop-blur border border-border shadow-lg flex items-center justify-center text-text-primary hover:text-primary transition-colors pointer-events-auto disabled:opacity-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            aria-label="Nächstes Ergebnis"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                )}
            </div>
        </div>
    );
}
