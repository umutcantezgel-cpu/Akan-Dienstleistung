'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

interface CustomCursorProps {
    hideNative?: boolean;
}

export default function CustomCursor({ hideNative = true }: CustomCursorProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Spring configs for smooth follower physics
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        // Detect if it's a touch device; if so, never show the custom cursor
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16); // Center the 32px circle
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Advanced hover detection for interactive elements
        const handleInteractionOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over links, buttons, or elements with role="button"
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovered(true);
            }
        };

        const handleInteractionOut = () => {
            setIsHovered(false);
        };

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        // Listen for hovers across the document
        document.addEventListener('mouseover', handleInteractionOver);
        document.addEventListener('mouseout', handleInteractionOut);

        if (hideNative) {
            document.body.style.cursor = 'none';
        }

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleInteractionOver);
            document.removeEventListener('mouseout', handleInteractionOut);

            if (hideNative) {
                document.body.style.cursor = 'auto';
            }
        };
    }, [cursorX, cursorY, hideNative, isVisible]);

    // Don't render until we have a real coordinate to prevent flash at 0,0
    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full border border-primary flex items-center justify-center mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
            }}
            animate={{
                scale: isHovered ? 2 : 1,
                backgroundColor: isHovered ? 'rgba(155, 28, 46, 0.2)' : 'transparent',
                borderColor: isHovered ? 'rgba(155, 28, 46, 0.4)' : 'var(--primary)',
            }}
            transition={{
                scale: { type: 'spring', stiffness: 300, damping: 20 },
                backgroundColor: { duration: 0.2 },
            }}
        >
            <motion.div
                className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"
                animate={{
                    scale: isHovered ? 0 : 1,
                    opacity: isHovered ? 0 : 1
                }}
            />
        </motion.div>
    );
}
