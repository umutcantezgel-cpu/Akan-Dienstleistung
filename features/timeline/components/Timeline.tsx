'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { springs } from '@/shared/styles/animations';
import type { TimelineEvent } from '@/config/site';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-13 — Timeline Gravitational Cascade
// Progressive scroll-based line drawing, pulsating stars,
// and spring-based catapult effects for content boxes
// ═══════════════════════════════════════════════════════════

interface TimelineProps {
    events: TimelineEvent[];
    className?: string;
}

export default function Timeline({ events, className = '' }: TimelineProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll progress strictly clamped to the container area
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center']
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <div ref={containerRef} className={`relative py-10 overflow-hidden ${className}`}>
            {/* Background Track Line (Dim) */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-border/50 md:-translate-x-1/2 rounded-full hidden md:block" />

            {/* Progressive Glow Line (Active Scroll Progress) */}
            <motion.div
                className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary via-primary-light to-primary md:-translate-x-1/2 rounded-full hidden md:block origin-top shadow-[0_0_15px_var(--color-primary)] z-0"
                style={{ height: lineHeight }}
            />

            {/* Mobile lines */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 rounded-full md:hidden" />
            <motion.div
                className="absolute left-6 sm:left-8 top-0 w-1 bg-primary -translate-x-1/2 rounded-full md:hidden origin-top shadow-[0_0_15px_var(--color-primary)] z-0"
                style={{ height: lineHeight }}
            />

            <div className="space-y-16 md:space-y-24 relative z-10">
                {events.map((event, i) => (
                    <TimelineItem key={i} event={event} index={i} isLeft={i % 2 === 0} />
                ))}
            </div>
        </div>
    );
}

function TimelineItem({
    event,
    index,
    isLeft,
}: {
    event: TimelineEvent;
    index: number;
    isLeft: boolean;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-20% 0px' });

    // The Katapult-Effekt originates from the center
    const slideDirection = isLeft ? -30 : 30;

    return (
        <div
            ref={ref}
            className={`relative flex items-center w-full ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >
            {/* Center Pulsating Star Dot */}
            <div className="absolute left-6 sm:left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 z-20">
                {/* Core Dot */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.1, ...springs.elastic }}
                    className="w-4 h-4 bg-white rounded-full border-4 border-primary relative z-10"
                />

                {/* Orbiting Pulsar Glow */}
                <motion.div
                    animate={isInView ? {
                        scale: [1, 2, 1],
                        opacity: [0.5, 0, 0.5]
                    } : { opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                    className="absolute inset-0 bg-primary/40 rounded-full blur-[2px]"
                />
            </div>

            {/* Empty spacer for the line side on desktop */}
            <div className="hidden md:block md:w-1/2" />

            {/* Content Box with Katapult-Effekt */}
            <motion.div
                initial={{
                    opacity: 0,
                    x: slideDirection,
                    scale: 0.85,
                    rotateY: isLeft ? 10 : -10
                }}
                animate={
                    isInView
                        ? { opacity: 1, x: 0, scale: 1, rotateY: 0 }
                        : { opacity: 0, x: slideDirection, scale: 0.85, rotateY: isLeft ? 10 : -10 }
                }
                transition={{ delay: 0.15, ...springs.gentle }}
                className={`ml-12 sm:ml-16 md:ml-0 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-1/2 min-w-0 max-w-full ${isLeft ? 'md:pl-16 md:pr-4' : 'md:pr-16 md:pl-4'} perspective-1000`}
            >
                <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-border/60 shadow-elevated relative overflow-hidden group hover:border-primary/40 transition-colors duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110" />

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: 0.3, ...springs.snappy }}
                        className="inline-block px-4 py-1.5 text-xs font-bold text-primary bg-primary/10 tracking-[0.1em] rounded-full mb-4 shadow-inner-glow"
                    >
                        {event.year}
                    </motion.div>

                    <h4 className="font-bold text-text-primary text-2xl mb-3 font-display tracking-tight">
                        {event.title}
                    </h4>

                    <p className="text-base text-text-secondary leading-relaxed">
                        {event.description}
                    </p>

                    {/* Laser Connection Line to Center Dot (Desktop only) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] w-12 bg-gradient-to-r ${isLeft ? 'left-4 from-transparent to-primary/50' : 'right-4 from-primary/50 to-transparent'}`} />
                </div>
            </motion.div>
        </div>
    );
}
