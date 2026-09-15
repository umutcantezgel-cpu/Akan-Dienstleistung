'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LightingRig() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });

            // Check if hovering over interactive elements
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a, button, input, select, textarea, [role="button"]') !== null;
            setIsHovering(isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-100 overflow-hidden mix-blend-overlay">
            {/* Ambient Radial Light (Top Left) */}
            <div className="absolute -top-[40%] -left-[40%] w-[100%] h-[100%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen opacity-50 omega-breathe" />

            {/* Ambient Radial Light (Bottom Right Theme Accent) */}
            <div className="absolute -bottom-[20%] -right-[20%] w-[70%] h-[70%] rounded-full bg-accent/10 blur-[100px] mix-blend-screen opacity-30 omega-breathe" style={{ animationDelay: '4s' }} />

            {/* Dynamic Mouse Tracking Cursor Light */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full bg-white/10 blur-[80px] mix-blend-overlay"
                animate={{
                    x: mousePosition.x - 300,
                    y: mousePosition.y - 300,
                    scale: isHovering ? 1.2 : 1,
                    opacity: isHovering ? 0.8 : 0.5,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    mass: 0.5,
                }}
            />

            {/* Global Grain/Noise Texture for Film Look */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
