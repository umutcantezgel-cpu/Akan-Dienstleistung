'use client';

import { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    magneticIntensity?: number; // How far the button follows the cursor
    springConfig?: { stiffness: number; damping: number; mass: number };
}

export default function MagneticButton({
    children,
    className = '',
    magneticIntensity = 0.3, // 30% pull
    springConfig = { stiffness: 150, damping: 15, mass: 0.1 },
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Track mouse position relative to the center of the element
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { left, top, width, height } = ref.current.getBoundingClientRect();

        // Calculate center of the element
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Distance from center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        x.set(distanceX * magneticIntensity);
        y.set(distanceY * magneticIntensity);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Reset position on leave
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Also pull the children slightly stronger for a parallax effect inside the button
    const childX = useTransform(x, (val) => val * 1.5);
    const childY = useTransform(y, (val) => val * 1.5);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`inline-block relative ${className}`}
        >
            <motion.div style={{ x: childX, y: childY }} className="w-full h-full flex items-center justify-center">
                {children}
            </motion.div>
        </motion.div>
    );
}
