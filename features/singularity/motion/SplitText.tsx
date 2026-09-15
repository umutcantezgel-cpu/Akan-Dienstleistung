'use client';

import { motion } from 'motion/react';
import React from 'react';

interface SplitTextProps {
    text: string;
    className?: string;
    type?: 'words' | 'chars';
    delay?: number;
    staggerDuration?: number;
    yOffset?: number;
}

export default function SplitText({
    text,
    className = '',
    type = 'words',
    delay = 0,
    staggerDuration = 0.05,
    yOffset = 20
}: SplitTextProps) {

    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: staggerDuration, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring' as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: yOffset,
            transition: {
                type: 'spring' as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    if (type === 'chars') {
        return (
            <motion.span
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className={`inline-block ${className}`}
            >
                {text.split('').map((char, index) => (
                    <motion.span
                        variants={child}
                        key={index}
                        className="inline-block whitespace-pre"
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.span>
        );
    }

    return (
        <motion.span
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className={`inline-block ${className}`}
        >
            {words.map((word, index) => (
                <React.Fragment key={index}>
                    <motion.span
                        variants={child}
                        className="inline-block whitespace-nowrap"
                    >
                        {word}
                    </motion.span>
                    {/* Add space between words, but don't animate the space itself */}
                    {index < words.length - 1 && <span className="inline-block">&nbsp;</span>}
                </React.Fragment>
            ))}
        </motion.span>
    );
}
