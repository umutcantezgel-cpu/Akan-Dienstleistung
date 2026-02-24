'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ChevronDown, ScanLine } from 'lucide-react';
import { springs } from '@/shared/styles/animations';
import type { TeamMember } from '@/config/site';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-14 — Team Card Holographic Prism
// Holographic RGB-split hover effect, Living Frame avatar borders, 
// and dynamic animated Radar Chart for skills
// ═══════════════════════════════════════════════════════════

interface TeamCardProps {
    member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Dynamic Polygon Points for Radar Chart based on Skills
    // Assumes min 3 skills. Calculates coordinates around a circle.
    const getRadarPoints = () => {
        const numPoints = member.skills.length;
        if (numPoints < 3) return ''; // Fallback line if < 3 skills

        const centerX = 50;
        const centerY = 50;
        const radius = 45; // Max radius to fit in 100x100 SVG

        const points = member.skills.map((skill, i) => {
            const angle = (Math.PI * 2 * i) / numPoints - Math.PI / 2; // start at top (-90deg)
            const magnitude = (skill.level / 100) * radius;
            const x = centerX + Math.cos(angle) * magnitude;
            const y = centerY + Math.sin(angle) * magnitude;
            return `${x},${y}`;
        }).join(' ');

        return points;
    };

    return (
        <motion.div
            layout
            onHoverStart={() => setIsExpanded(true)}
            onHoverEnd={() => setIsExpanded(false)}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={springs.gentle}
            className="group relative bg-surface rounded-[2rem] border border-border/80 overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 perspective-1000"
        >
            {/* Holographic Edge Overlay (visible on hover) */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-[2rem] overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ffff] to-transparent translate-x-full group-hover:translate-x-[-100%] transition-transform duration-[1.5s] ease-linear repeat-infinite shadow-[0_0_8px_#00ffff]" />
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent translate-x-[-100%] group-hover:translate-x-full transition-transform duration-[1.5s] ease-linear repeat-infinite shadow-[0_0_8px_#ff00ff]" />
            </div>

            {/* Photo Section with Living Frame */}
            <div className="relative h-72 sm:h-80 overflow-hidden transform-gpu">
                {/* Image Scale on Hover */}
                <motion.div
                    className="w-full h-full"
                    animate={{ scale: isExpanded ? 1.08 : 1, filter: isExpanded ? 'contrast(1.1) brightness(1.1)' : 'contrast(1) brightness(1)' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <Image src={member.imageUrl || `https://picsum.photos/400/500?random=${member.name}`} alt={member.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                </motion.div>

                {/* Holographic Split Effect (RGB Chromatic Aberration) */}
                <AnimatePresence>
                    {isExpanded && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 0.4, x: -4 }}
                                exit={{ opacity: 0, x: 0 }}
                                className="absolute inset-0 mix-blend-screen pointer-events-none filter sepia-[.5] hue-rotate-180 saturate-200"
                            >
                                <Image src={member.imageUrl || `https://picsum.photos/400/500?random=${member.name}`} alt={member.name} fill sizes="4rem" className="object-cover filter blur-[1px]" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 0.4, x: 4 }}
                                exit={{ opacity: 0, x: 0 }}
                                className="absolute inset-0 mix-blend-screen pointer-events-none filter sepia-[.5] hue-rotate-90 saturate-200"
                            >
                                <Image src={member.imageUrl || `https://picsum.photos/400/500?random=${member.name}`} alt={member.name} fill sizes="4rem" className="object-cover filter blur-[1px]" />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Floating Info */}
                <motion.div
                    className="absolute bottom-6 left-6 right-6"
                    animate={{ y: isExpanded ? -10 : 0 }}
                    transition={springs.snappy}
                >
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-xs font-bold uppercase tracking-wider mb-2 border border-white/20">
                        {member.role}
                    </span>
                    <h3 className="text-white font-bold text-2xl lg:text-3xl font-display tracking-tight drop-shadow-md">{member.name}</h3>
                </motion.div>

                {/* Scanline indicator on hover */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isExpanded ? 1 : 0 }}
                    className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full border border-primary/50 text-primary"
                >
                    <ScanLine size={18} className="animate-pulse" />
                </motion.div>
            </div>

            {/* Content (Expands to reveal Radar Chart) */}
            <div className="p-6 relative bg-surface z-10">
                <p className="text-base text-text-secondary leading-relaxed line-clamp-3">
                    {member.desc}
                </p>

                {/* Radar Chart Hologram Area */}
                <AnimatePresence>
                    {isExpanded && member.skills.length >= 3 && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, scale: 0.9 }}
                            animate={{ height: 'auto', opacity: 1, scale: 1 }}
                            exit={{ height: 0, opacity: 0, scale: 0.9 }}
                            transition={{ ...springs.snappy, duration: 0.4 }}
                            className="mt-6 pt-6 border-t border-border overflow-hidden"
                        >
                            <div className="flex gap-6 items-center">
                                {/* SVG Radar Chart */}
                                <div className="w-24 h-24 shrink-0 relative">
                                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-[0_0_8px_rgba(155,28,46,0.4)]">
                                        {/* Background web */}
                                        <polygon points="50,5 95,30 80,85 20,85 5,30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                                        <polygon points="50,25 75,42 65,70 35,70 25,42" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                                        <polygon points="50,40 60,50 55,60 45,60 40,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />

                                        {/* Data Polygon with Draw Animation */}
                                        <motion.polygon
                                            points={getRadarPoints()}
                                            initial={{ pathLength: 0, fill: 'rgba(155,28,46,0)', strokeDasharray: 200, strokeDashoffset: 200 }}
                                            animate={{
                                                fill: 'rgba(155,28,46,0.2)',
                                                strokeDashoffset: 0
                                            }}
                                            transition={{ duration: 0.8, ease: 'easeOut' }}
                                            stroke="#9B1C2E"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                        />

                                        {/* Vertices */}
                                        {member.skills.map((skill, i) => {
                                            const numPoints = member.skills.length;
                                            const angle = (Math.PI * 2 * i) / numPoints - Math.PI / 2;
                                            const magnitude = (skill.level / 100) * 45;
                                            const x = 50 + Math.cos(angle) * magnitude;
                                            const y = 50 + Math.sin(angle) * magnitude;
                                            return (
                                                <motion.circle
                                                    key={i}
                                                    cx={x} cy={y} r="2" fill="#9B1C2E"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                                                />
                                            )
                                        })}
                                    </svg>
                                </div>

                                {/* Skill Labels */}
                                <div className="flex-1 space-y-2">
                                    {member.skills.map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className="flex justify-between items-center"
                                        >
                                            <span className="text-mini uppercase tracking-wider font-bold text-text-primary">{skill.label}</span>
                                            <span className="text-xs font-mono font-medium text-primary">{skill.level}%</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Expand Toggle Chevron (desktop only logic handles hover, this handles mobile tap) */}
                <div className="absolute right-6 top-6 sm:hidden">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-background border border-border text-primary"
                    >
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
