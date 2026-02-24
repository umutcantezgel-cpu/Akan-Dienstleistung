'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { triggerSuccessVibration } from '@/shared/utils/rewards';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-25 — BackToTop Anti-Gravity Launch
// Appears with ring expansion, clicks trigger engine glow,
// haptics, and accelerating scroll physics back to top.
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

        window.addEventListener('scroll', toggleVisibility);
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
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
                    whileHover="hover"
                    className="fixed bottom-6 right-6 z-50 flex items-center justify-center pointer-events-none"
                >
                    {/* Ring Expansion Materialization Effect */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full bg-primary"
                    />

                    {/* Engine Thrust Glow (Triggered on Launch) */}
                    <AnimatePresence>
                        {isLaunching && (
                            <motion.div
                                initial={{ opacity: 0, scaleY: 0, y: 0 }}
                                animate={{ opacity: 1, scaleY: 2, y: 20 }}
                                exit={{ opacity: 0 }}
                                className="absolute bottom-0 w-8 h-24 bg-gradient-to-b from-[#00ffff] via-primary to-transparent rounded-full blur-[8px] origin-top"
                            />
                        )}
                    </AnimatePresence>

                    <button
                        onClick={scrollToTop}
                        aria-label="Zum Anfang scrollen"
                        className="relative w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(146,24,41,0.5)] border border-white/20 hover:bg-primary-hover transition-colors overflow-hidden pointer-events-auto"
                    >
                        {/* Hover Radar Sweep */}
                        <motion.div
                            variants={{
                                hover: {
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 90, 0],
                                    opacity: [0.3, 0.6, 0.3],
                                },
                            }}
                            className="absolute inset-0 bg-white/20 rounded-full pointer-events-none"
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        />

                        <motion.div
                            animate={isLaunching ? {
                                y: [0, 2, -4, 2, 0],
                                scale: [1, 0.9, 1.1, 1], // Vibration distortion
                            } : {}}
                            transition={isLaunching ? { duration: 0.2, repeat: Infinity } : {}}
                            className="relative z-10"
                        >
                            <ArrowUp className="w-6 h-6" />
                        </motion.div>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
