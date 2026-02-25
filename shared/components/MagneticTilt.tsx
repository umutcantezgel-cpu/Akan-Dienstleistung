'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface MagneticTiltProps {
    children: React.ReactNode;
    className?: string;
    maxTilt?: number;
    depth?: number;
}

export default function MagneticTilt({
    children,
    className = "",
    maxTilt = 7,  // Subtle 7 degree max tilt
    depth = 30    // Simulated Z-depth translation
}: MagneticTiltProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for X and Y cursor position relative to center
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for organic return-to-center
    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Transform coordinate ratios to rotation degrees
    const rotateX = useTransform(springY, [-1, 1], [maxTilt, -maxTilt]);
    const rotateY = useTransform(springX, [-1, 1], [-maxTilt, maxTilt]);

    // Transform for children to create parallax depth
    const translateZ = useTransform(springX, () => isHovered ? depth : 0);

    // Dynamic glare effect based on rotation
    const glareX = useTransform(springX, [-1, 1], [100, 0]);
    const glareY = useTransform(springY, [-1, 1], [100, 0]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current || !isHovered) return;

            const rect = ref.current.getBoundingClientRect();

            // Calculate cursor position relative to element center (-1 to 1)
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const normalizedX = (e.clientX - centerX) / (rect.width / 2);
            const normalizedY = (e.clientY - centerY) / (rect.height / 2);

            // Clamp values between -1 and 1
            x.set(Math.max(-1, Math.min(1, normalizedX)));
            y.set(Math.max(-1, Math.min(1, normalizedY)));
        };

        if (isHovered) {
            window.addEventListener('mousemove', handleMouseMove);
        } else {
            // Reset position when hover ends
            x.set(0);
            y.set(0);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHovered, x, y]);

    return (
        <motion.div
            ref={ref}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative [transform-style:preserve-3d] ${className}`}
            style={{
                rotateX,
                rotateY,
                perspective: 1200,
            }}
        >
            <motion.div
                style={{ translateZ }}
                className="w-full h-full [transform-style:preserve-3d]"
            >
                {children}
            </motion.div>

            {/* Subtly moving glare overlay */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-50 rounded-inherit opacity-0 transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 0.4 : 0,
                    background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.15), transparent 60%)`,
                }}
            />
        </motion.div>
    );
}
