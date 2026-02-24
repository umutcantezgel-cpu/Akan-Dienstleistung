'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useInView } from 'motion/react';
import { springs } from '@/shared/styles/animations';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-04 + Ω-16 — Quantum Scramble TextReveal
// Characters materialize from chaos: scramble → settle → glow
// ═══════════════════════════════════════════════════════════

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?!@#$%&';

interface TextRevealProps {
    text: string;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
    mode?: 'chars' | 'words' | 'scramble';
    staggerDelay?: number;
    once?: boolean;
}

export default function TextReveal({
    text,
    className = '',
    as: Tag = 'h2',
    mode = 'words',
    staggerDelay = 0.04,
    once = true,
}: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.5 });
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return <Tag ref={ref} className={className}>{text}</Tag>;
    }

    if (mode === 'scramble') {
        return (
            <Tag ref={ref} className={className} aria-label={text}>
                <ScrambleReveal text={text} isActive={isInView} staggerDelay={staggerDelay} />
            </Tag>
        );
    }

    const units = mode === 'chars' ? text.split('') : text.split(' ');

    return (
        <Tag ref={ref} className={className} aria-label={text}>
            {units.map((unit, i) => (
                <span key={i} className="inline-block overflow-hidden">
                    <motion.span
                        className="inline-block"
                        initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
                        animate={isInView
                            ? { y: 0, opacity: 1, filter: 'blur(0px)' }
                            : { y: '100%', opacity: 0, filter: 'blur(8px)' }
                        }
                        transition={{
                            ...springs.gentle,
                            delay: i * staggerDelay,
                            filter: { duration: 0.4, delay: i * staggerDelay + 0.1 },
                        }}
                        aria-hidden="true"
                    >
                        {unit}
                        {mode === 'words' && i < units.length - 1 ? '\u00A0' : ''}
                    </motion.span>
                </span>
            ))}
        </Tag>
    );
}

// ── Scramble Reveal Sub-Component ────────────────────────────
function ScrambleReveal({
    text,
    isActive,
    staggerDelay,
}: {
    text: string;
    isActive: boolean;
    staggerDelay: number;
}) {
    const chars = useMemo(() => text.split(''), [text]);
    const [displayChars, setDisplayChars] = useState(chars.map(() => ' '));
    const [settled, setSettled] = useState(chars.map(() => false));
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!isActive) return;

        let iteration = 0;
        const totalSteps = chars.length * 4; // 4 scramble cycles per char

        intervalRef.current = setInterval(() => {
            iteration++;

            setDisplayChars((prev) =>
                prev.map((_, i) => {
                    const settleAt = Math.floor(i * 3 + 3); // When this char settles
                    if (iteration >= settleAt) return chars[i] || '';
                    if (chars[i] === ' ') return ' ';
                    return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)] || '';
                })
            );

            setSettled((prev) =>
                prev.map((_, i) => {
                    const settleAt = Math.floor(i * 3 + 3);
                    return iteration >= settleAt;
                })
            );

            if (iteration >= totalSteps) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setDisplayChars(chars);
                setSettled(chars.map(() => true));
            }
        }, 30);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isActive, chars]);

    return (
        <>
            {displayChars.map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isActive ? {
                        opacity: 1,
                        y: 0,
                    } : { opacity: 0 }}
                    transition={{
                        delay: i * staggerDelay * 0.5,
                        duration: 0.15,
                    }}
                    style={{
                        // Glow effect on settle
                        textShadow: settled[i]
                            ? '0 0 0px transparent'
                            : '0 0 8px rgba(146, 24, 41, 0.3)',
                        transition: 'text-shadow 0.3s ease',
                    }}
                    aria-hidden="true"
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </>
    );
}
