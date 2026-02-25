'use client';

import { motion, AnimatePresence } from 'motion/react';
import { MousePointer2 } from 'lucide-react';
import { useCursorTrail, getHueColor } from '@/shared/hooks/useCursorTrail';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-03 — Sentient Cursor Gravitational Field
// Plasma-faden trail with velocity-responsive physics
// ═══════════════════════════════════════════════════════════

export default function CursorTrail() {
    const { isEnabled, trail, toggle } = useCursorTrail();

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                onClick={toggle}
                className={`fixed z-[97] w-12 h-12 rounded-full hidden lg:flex items-center justify-center border backdrop-blur-md transition-all duration-300 pointer-events-auto lg:bottom-[104px] lg:left-10 lg:right-auto ${isEnabled
                    ? 'bg-primary/90 text-white border-primary shadow-[0_0_20px_rgba(146,24,41,0.5)]'
                    : 'bg-[#0a0a0c]/80 text-white/50 border-white/10 hover:border-primary/50 hover:text-primary shadow-elevated'
                    }`}
                whileHover={{ scale: 1.08, rotate: isEnabled ? -10 : 10 }}
                whileTap={{ scale: 0.92 }}
                aria-label={isEnabled ? 'Cursor-Effekt deaktivieren' : 'Cursor-Effekt aktivieren'}
            >
                <MousePointer2 className="w-5 h-5" />
            </motion.button>

            {/* Plasma Trail */}
            <AnimatePresence>
                {trail.map((p, i) => {
                    const trailProgress = (i + 1) / trail.length;
                    const lifetimeOpacity = trailProgress * (0.3 + (1 - p.velocity) * 0.5);

                    return (
                        <motion.div
                            key={p.id}
                            className="fixed pointer-events-none z-max"
                            style={{
                                left: p.x - p.size / 2,
                                top: p.y - p.size / 2,
                                width: p.size,
                                height: p.size,
                            }}
                            initial={{ scale: 1.2, opacity: lifetimeOpacity }}
                            animate={{ scale: 0.1, opacity: 0 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{
                                duration: 0.5 + (1 - p.velocity) * 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div
                                className="w-full h-full rounded-full mix-blend-screen"
                                style={{
                                    background: `radial-gradient(circle, ${getHueColor(p.hue, 0.9)} 0%, ${getHueColor(p.hue, 0.4)} 40%, transparent 70%)`,
                                    boxShadow: `0 0 ${p.size * 1.5}px ${getHueColor(p.hue, 0.35)}, 0 0 ${p.size * 3}px ${getHueColor(p.hue, 0.15)}`,
                                    filter: `blur(${Math.max(0, (1 - p.velocity) * 2)}px)`,
                                }}
                            />
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </>
    );
}
