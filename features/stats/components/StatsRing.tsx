'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-12 — StatsRing Orbital Data Viz
// 3 concentric layers (Glow, Alpha-Track, Progress) building up asynchronously
// ═══════════════════════════════════════════════════════════

interface StatsRingProps {
    value: number;
    maxValue?: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    bgColor?: string;
    label: string;
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
    suffix = '%',
    className = '',
}: StatsRingProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const percentage = Math.min(value / maxValue, 1);
    const targetOffset = circumference * (1 - percentage);

    return (
        <div ref={ref} className={`flex flex-col items-center group ${className}`}>
            <div className="relative" style={{ width: size, height: size }}>
                <svg width={size} height={size} className="-rotate-90 overflow-visible">
                    {/* Layer 1: Alpha-Track (Static Background) */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={bgColor}
                        strokeWidth={strokeWidth}
                        className="opacity-40 transition-opacity duration-1000 group-hover:opacity-20"
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
                            opacity: 0.3
                        } : {
                            strokeDashoffset: circumference,
                            opacity: 0
                        }}
                        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="filter blur-[8px]" // Strong blur for orbital glow
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
                        transition={{ duration: 1.8, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }} // Springy rubber-band ease
                        className="drop-shadow-[0_2px_10px_rgba(155,28,46,0.3)]"
                    />
                </svg>

                {/* Center Content — Animated Counter */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-2xl font-bold text-text-primary font-display"
                    >
                        {value}{suffix}
                    </motion.span>
                </div>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 text-tiny uppercase tracking-[0.15em] font-bold text-text-secondary text-center group-hover:text-primary transition-colors duration-300"
            >
                {label}
            </motion.p>
        </div>
    );
}
