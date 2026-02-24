'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useAnimationFrame } from 'motion/react';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-17 — Heading Kinetic Weight Shift
// Wraps characters individually to calculate local cursor distance.
// Applies dynamic 'wght' variable axis shifting for a typographic lens effect.
// ═══════════════════════════════════════════════════════════

interface KineticHeadingProps {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
    className?: string;
}

export default function KineticHeading({ as: Tag = 'h2', children, className = '' }: KineticHeadingProps) {
    const containerRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        if (isHovering) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isHovering]);

    // Parse children. We only apply the effect to string segments.
    // If there's a React element (like clear spans), we'll try to extract text or just render it.
    const renderKineticText = (text: string) => {
        const words = text.split(' ');
        return words.map((word, wIdx) => {
            const letters = word.split('');
            return (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                    {letters.map((char, cIdx) => (
                        <KineticLetter
                            key={`${wIdx}-${cIdx}`}
                            char={char}
                            mousePos={mousePos}
                            isHovering={isHovering}
                        />
                    ))}
                    {wIdx < words.length - 1 && <span className="inline-block w-[0.25em]">&nbsp;</span>}
                </span>
            );
        });
    };

    const processChildren = (nodes: React.ReactNode): React.ReactNode => {
        if (typeof nodes === 'string') {
            return renderKineticText(nodes);
        }
        if (Array.isArray(nodes)) {
            return nodes.map((node, i) => (
                <React.Fragment key={i}>
                    {processChildren(node)}
                </React.Fragment>
            ));
        }
        // If it's an element, return it as is (we lose kinetic effect inside elements)
        return nodes;
    };

    const Component = Tag as any;
    return (
        <Component
            ref={containerRef}
            className={`relative ${className}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setMousePos({ x: -1000, y: -1000 });
            }}
        >
            {processChildren(children)}
        </Component>
    );
}

function KineticLetter({ char, mousePos, isHovering }: { char: string, mousePos: { x: number, y: number }, isHovering: boolean }) {
    const ref = useRef<HTMLSpanElement>(null);
    // Base weight is bold (700). 
    const currentWeight = useRef(700);

    useAnimationFrame(() => {
        if (!ref.current) return;

        let targetWeight = 700;

        if (isHovering) {
            const rect = ref.current.getBoundingClientRect();
            // Calculate center of the letter
            const letterX = rect.left + rect.width / 2;
            const letterY = rect.top + rect.height / 2;

            // Distance from cursor
            const dx = mousePos.x - letterX;
            const dy = mousePos.y - letterY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Influence radius
            const radius = 180;

            if (distance < radius) {
                const normalized = distance / radius; // 0 to 1
                // Lens formula: center = 200 (light), edges = 900 (black)
                targetWeight = 200 + Math.pow(normalized, 1.2) * 700;
            }
        }

        // Smooth lerp for organic feel
        currentWeight.current += (targetWeight - currentWeight.current) * 0.12;

        // Direct DOM manipulation for maximum performance during mousemove
        ref.current.style.fontVariationSettings = `'wght' ${Math.round(currentWeight.current)}`;
    });

    return (
        <span
            ref={ref}
            className="inline-block transform-gpu"
            style={{ fontVariationSettings: "'wght' 700" }} // Initial state
        >
            {char}
        </span>
    );
}
