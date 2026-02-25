'use client';

import { useRef, useState, ReactNode, useRef as useReactRef } from 'react';
import { motion, useSpring } from 'motion/react';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    stiffness?: number;
    damping?: number;
    mass?: number;
    strength?: number; // How far the element pulls towards the mouse
}

export default function MagneticButton({
    children,
    className = '',
    stiffness = 150,
    damping = 15,
    mass = 0.5,
    strength = 0.3
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Physics springs for x and y translation
    const springX = useSpring(0, { stiffness, damping, mass });
    const springY = useSpring(0, { stiffness, damping, mass });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        // Get bounding box of the element
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        // Calculate distance from center (normalized between -1 and 1)
        const x = (e.clientX - (left + width / 2));
        const y = (e.clientY - (top + height / 2));

        // Apply pull strength
        springX.set(x * strength);
        springY.set(y * strength);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Snap back to center
        springX.set(0);
        springY.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                x: springX,
                y: springY,
            }}
            className={`inline-block touch-none ${className}`}
        >
            {children}
        </motion.div>
    );
}
