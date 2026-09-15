'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { triggerSuccessVibration } from '@/shared/utils/rewards';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-25 — BackToTop Anti-Gravity Launch
// Appears with ring expansion, clicks trigger engine glow,
// haptics, and accelerating scroll physics back to top.
// Mobile: Rests above Sticky Action Bar.
// Desktop: Bottom Left (to avoid Right Side Sales CTA dock).
// ═══════════════════════════════════════════════════════════

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isLaunching, setIsLaunching] = useState(false);

    // Show button when scrolled down slightly
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
                setIsLaunching(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const startY = window.scrollY;

        // Don't launch if already there
        if (startY <= 0) return;

        setIsLaunching(true);
        triggerSuccessVibration();

        // Custom easing function: accelerating progress over time.
        // It's technically moving backwards, so we use an easeIn curve.
        const duration = Math.min(Math.max(startY / 3, 800), 1500); // 800ms - 1500ms max
        let start = performance.now();

        const step = (now: number) => {
            const time = now - start;
            const progress = Math.min(time / duration, 1);

            // Accelerating cubic curve (ease-in)
            const easing = progress * progress * progress;
            const newY = startY * (1 - easing);

            window.scrollTo(0, newY);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                window.scrollTo(0, 0); // guarantee true zero
                setIsLaunching(false);
            }
        };

        requestAnimationFrame(step);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                    className="fixed z-30 bottom-[calc(env(safe-area-inset-bottom,16px)+84px)] right-4 lg:bottom-20 lg:left-6 flex items-center justify-center pointer-events-auto"
                >
                    <button
                        onClick={scrollToTop}
                        aria-label="Zum Anfang der Seite scrollen"
                        className="w-10 h-10 lg:w-11 lg:h-11 bg-surface border border-border text-text-primary hover:text-primary hover:border-primary/50 rounded-full flex items-center justify-center shadow-soft hover:shadow-card transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary backdrop-blur-md"
                    >
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
