'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-12 — StatsRing Orbital Data Viz with Autonomous Counter
// 3 concentric layers (Glow, Alpha-Track, Progress) with smooth
// 60fps number animation and responsive mobile-to-desktop scaling.
// ═══════════════════════════════════════════════════════════

interface StatsRingProps {
    value: number;
    maxValue?: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    bgColor?: string;
    label: string;
    sublabel?: string | undefined;
    suffix?: string;
    className?: string;
}

export default function StatsRing({
    value,
    maxValue = 100,
    size = 140,
    strokeWidth = 10,
    color = '#9B1C2E',
    bgColor = '#e2e8f0',
    label,
    sublabel,
    suffix = '%',
    className = '',
}: StatsRingProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [displayCount, setDisplayCount] = useState(0);

    // Autonomous 60fps Count-Up Animation
    useEffect(() => {
        if (!isInView) return;

        let frameId: number;
        const duration = 1800; // ms
        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // EaseOutExpo curve for elegant decelerating finish
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.round(value * easeOutExpo);
            setDisplayCount(current);

            if (progress < 1) {
                frameId = requestAnimationFrame(tick);
            } else {
                setDisplayCount(value);
            }
        };

        frameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frameId);
    }, [isInView, value]);

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const percentage = Math.min(value / maxValue, 1);
    const targetOffset = circumference * (1 - percentage);

    return (
        <div ref={ref} className={`flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1 ${className}`}>
            {/* Responsive circular container */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-[136px] md:h-[136px]">
                <svg
                    viewBox={`0 0 ${size} ${size}`}
                    className="-rotate-90 overflow-visible w-full h-full drop-shadow-sm"
                >
                    {/* Layer 1: Alpha-Track (Static Background) */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={bgColor}
                        strokeWidth={strokeWidth}
                        className="opacity-40 transition-opacity duration-1000 group-hover:opacity-25"
                    />

                    {/* Layer 2: Glow Ring (Asynchronous build up) */}
                    <motion.circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth={strokeWidth + 4} // Wider for glow
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference, opacity: 0 }}
                        animate={isInView ? {
                            strokeDashoffset: targetOffset,
                            opacity: 0.35
                        } : {
                            strokeDashoffset: circumference,
                            opacity: 0
                        }}
                        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="filter blur-[6px]" // Strong blur for orbital glow
                    />

                    {/* Layer 3: Main Progress Ring */}
                    <motion.circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={isInView ? { strokeDashoffset: targetOffset } : { strokeDashoffset: circumference }}
                        transition={{ duration: 1.8, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
                        className="drop-shadow-[0_2px_8px_rgba(155,28,46,0.3)]"
                    />
                </svg>

                {/* Center Content — Autonomous Counter with Live Numbers */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-xl sm:text-2xl md:text-[26px] font-bold text-text-primary font-display tracking-tight"
                    >
                        {displayCount}{suffix}
                    </motion.span>
                </div>
            </div>

            {/* Label */}
            <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-4 text-xs sm:text-tiny uppercase tracking-[0.14em] font-bold text-text-secondary text-center group-hover:text-primary transition-colors duration-300"
            >
                {label}
            </motion.p>

            {/* Industry Specific Sublabel */}
            {sublabel && (
                <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-[11px] text-text-secondary/70 text-center mt-1 font-medium max-w-[150px] leading-tight"
                >
                    {sublabel}
                </motion.span>
            )}
        </div>
    );
}
