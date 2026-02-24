'use client';

import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-03 — Gravitational Lens Button
// Elements gravitate toward cursor with lens distortion
// ═══════════════════════════════════════════════════════════

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    strength?: number;
    radius?: number;
    onClick?: () => void;
}

export default function MagneticButton({
    children,
    className = '',
    strength = 0.35,
    radius = 180,
    onClick,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Gravitational spring — snappier approach, elastic return
    const springConfig = { stiffness: 350, damping: 18, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // 3D rotation derived from position
    const rotateX = useTransform(springY, [-radius, radius], [8, -8]);
    const rotateY = useTransform(springX, [-radius, radius], [-8, 8]);

    // Lens glow intensity based on proximity
    const glowIntensity = useMotionValue(0);
    const springGlow = useSpring(glowIntensity, { stiffness: 200, damping: 25 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < radius) {
            // Gravitational falloff: stronger pull when closer
            const pullStrength = Math.pow(1 - distance / radius, 1.5) * strength;
            x.set(deltaX * pullStrength);
            y.set(deltaY * pullStrength);
            glowIntensity.set(1 - distance / radius);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
        glowIntensity.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`relative ${className}`}
            style={{
                x: springX,
                y: springY,
                rotateX,
                rotateY,
                perspective: 1000,
                transformStyle: 'preserve-3d' as const,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            whileTap={{ scale: 0.93, rotateX: 0, rotateY: 0 }}
        >
            {children}

            {/* Gravitational Lens Glow Ring */}
            {isHovered && (
                <motion.div
                    className="absolute -inset-2 rounded-[inherit] pointer-events-none"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(146, 24, 41, 0.08) 0%, transparent 70%)',
                        filter: 'blur(8px)',
                    }}
                />
            )}

            {/* Surface Light Refraction */}
            {isHovered && (
                <motion.div
                    className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 40%, rgba(255,255,255,0.15) 80%, transparent 100%)',
                            x: springX,
                            y: springY,
                        }}
                    />
                </motion.div>
            )}
        </motion.div>
    );
}
