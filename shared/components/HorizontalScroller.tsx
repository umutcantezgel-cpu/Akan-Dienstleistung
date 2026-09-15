'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';

interface HorizontalScrollerProps {
    items: {
        title: string;
        description: string;
        icon: string;
    }[];
}

export default function HorizontalScroller({ items }: HorizontalScrollerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.2 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

    return (
        <div ref={containerRef} className="overflow-hidden py-12">
            <motion.div
                className="flex gap-6 pl-6"
                style={{ x }}
            >
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                        className="flex-shrink-0 w-72 bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-card transition-shadow group"
                    >
                        <div className="text-3xl mb-4">{item.icon}</div>
                        <h4 className="text-lg font-bold text-text-primary mb-2 font-display">{item.title}</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
