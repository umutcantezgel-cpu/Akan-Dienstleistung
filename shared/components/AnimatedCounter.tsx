'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-12 — AnimatedCounter (Reliable Spring Counter)
// Simple, proven approach: animate a motion value from 0 → target
// ═══════════════════════════════════════════════════════════

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    duration?: number;
    decimals?: number;
}

export default function AnimatedCounter({
    value,
    suffix = '',
    prefix = '',
    className = '',
    duration = 2,
    decimals = 0,
}: AnimatedCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [displayValue, setDisplayValue] = useState(0);
    const motionValue = useMotionValue(0);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(motionValue, value, {
            duration,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (latest) => {
                setDisplayValue(
                    decimals > 0
                        ? parseFloat(latest.toFixed(decimals))
                        : Math.round(latest)
                );
            },
        });

        return () => controls.stop();
    }, [isInView, value, duration, decimals, motionValue]);

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            {prefix}{displayValue}{suffix}
        </motion.span>
    );
}
