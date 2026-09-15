'use client';

import { motion, type Variants } from 'motion/react';
import { fadeInUp, staggerContainer } from '@/shared/styles/animations';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    variants?: Variants;
    stagger?: boolean;
    delay?: number;
    once?: boolean;
    amount?: number;
    as?: 'div' | 'section' | 'article' | 'aside' | 'ul' | 'li' | 'span';
}

const MOTION_MAP: Record<string, React.ElementType> = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
    aside: motion.aside,
    ul: motion.ul,
    li: motion.li,
    span: motion.span
};

export default function AnimatedSection({
    children,
    className = '',
    variants = fadeInUp,
    stagger = false,
    delay = 0,
    once = true,
    amount = 0.15,
    as = 'div',
}: AnimatedSectionProps) {
    const Component = MOTION_MAP[as] || motion.div;
    const containerVariants = stagger ? staggerContainer : variants;

    return (
        <Component
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount, margin: "0px 0px -50px 0px" }}
            transition={delay ? { delay } : {}}
        >
            {children}
        </Component>
    );
}

// ── Animated Child (for stagger groups) ─────────────────────
interface AnimatedItemProps {
    children: React.ReactNode;
    className?: string;
    variants?: Variants;
    as?: 'div' | 'li' | 'article' | 'span';
}

export function AnimatedItem({
    children,
    className = '',
    variants = fadeInUp,
    as = 'div',
}: AnimatedItemProps) {
    const Component = MOTION_MAP[as] || motion.div;

    return (
        <Component className={className} variants={variants}>
            {children}
        </Component>
    );
}
