'use client';

import { useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity, useMotionValueEvent } from 'motion/react';
import { triggerConfettiBurst, triggerSuccessVibration } from '@/shared/utils/rewards';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-22 — ScrollProgress Biometric Feedback
// Rainbow gradient changing with scroll, thickness pulsing with velocity,
// glowing end-dot, and confetti explosion at 100%
// ═══════════════════════════════════════════════════════════

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const [hasExploded, setHasExploded] = useState(false);

    // Smooth progress for the main bar width
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Calculate Scroll Velocity to map directly to line thickness
    const scrollVelocity = useVelocity(scrollYProgress);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    // Map velocity to thickness: min 3px, max 8px
    const thickness = useTransform(smoothVelocity, [-1, 0, 1], [8, 3, 8]);

    // Map scroll progress to hue shift (creating a dynamic shifting rainbow)
    const background = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [
            'linear-gradient(90deg, #9B1C2E 0%, #D6A848 100%)', // Primary to Gold
            'linear-gradient(90deg, #D6A848 0%, #00ffff 100%)', // Gold to Cyan
            'linear-gradient(90deg, #00ffff 0%, #ff00ff 100%)'  // Cyan to Magenta
        ]
    );

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Trigger explosion when reaching the very end
        if (latest >= 0.99 && !hasExploded) {
            setHasExploded(true);
            setTimeout(() => {
                // Determine right edge of screen 
                triggerSuccessVibration();
                triggerConfettiBurst(typeof window !== 'undefined' ? window.innerWidth : 1000, 10);
            }, 100);
        } else if (latest < 0.9) {
            // Reset explosion flag when scrolling back up
            setHasExploded(false);
        }
    });

    return (
        <div className="fixed top-0 left-0 right-0 z-overlay pointer-events-none overflow-hidden h-4" aria-hidden="true">
            {/* The Main Progress Bar */}
            <motion.div
                className="absolute top-0 left-0 right-0 origin-left shadow-[0_0_10px_rgba(155,28,46,0.5)]"
                style={{
                    scaleX,
                    height: thickness,
                    background
                }}
            />

            {/* The Biometric Glow Dot following the tip */}
            <motion.div
                className="absolute top-0 left-0 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_2px_#ffffff] -translate-y-1/2 pointer-events-none"
                style={{
                    x: useTransform(scaleX, [0, 1], ['0px', 'calc(100vw - 12px)']),
                    y: useTransform(thickness, t => (t as number) / 2),
                    opacity: useTransform(scrollYProgress, [0, 0.05], [0, 1]) // hide dot when at absolute top
                }}
            />
        </div>
    );
}
