'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import type { VisualSingularity } from '../components/ThemeInjector';

interface CinematicCanvasProps {
    type: VisualSingularity;
    className?: string;
}

export default function CinematicCanvas({ type, className = '' }: CinematicCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Base physics
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

    // Example: Parallax specific to Industrial (Bauendreinigung dust)
    const industrialY1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const industrialY2 = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
    const springIndustrialY1 = useSpring(industrialY1, springConfig);
    const springIndustrialY2 = useSpring(industrialY2, springConfig);

    // Example: Refraction specific to Ethereal (Glasreinigung clearing up)
    const etherealBlur = useTransform(scrollYProgress, [0, 0.5], ['40px', '0px']);
    const etherealOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const springEtherealBlur = useSpring(etherealBlur, springConfig);

    // Example: Rhythmic loop

    // Render different atmospheres based on type
    return (
        <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>

            {/* 1. INDUSTRIAL (Bauendreinigung) - Dust & Grit */}
            {type === 'industrial' && (
                <>
                    <motion.div
                        className="absolute inset-0 opacity-20 mix-blend-overlay"
                        style={{
                            y: springIndustrialY1,
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                        }}
                    />
                    <motion.div
                        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-10"
                        style={{
                            y: springIndustrialY2,
                            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 1px)',
                            backgroundSize: '100px 100px'
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-80" />
                </>
            )}

            {/* 2. ETHEREAL (Glasreinigung) - Refraction */}
            {type === 'ethereal' && (
                <>
                    <motion.div
                        style={{
                            backdropFilter: springEtherealBlur.get() ? `blur(${springEtherealBlur.get()})` : 'none',
                            opacity: etherealOpacity
                        }}
                        className="absolute inset-0 bg-white/10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/20 via-transparent to-blue-50/10" />
                </>
            )}

            {/* Default Global Gradient as baseline if no specific map matches */}
            <div className="absolute inset-0 bg-gradient-to-br from-theme-glow/30 to-transparent mix-blend-soft-light" />
        </div>
    );
}
