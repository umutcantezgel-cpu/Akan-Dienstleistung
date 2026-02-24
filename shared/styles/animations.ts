import type { Variants, Transition } from 'motion/react';

// ═══════════════════════════════════════════════════════════
// COMPLEXITY AMPLIFIER — Advanced Animation System
// 50+ animation presets, spring configs, orchestration utils
// ═══════════════════════════════════════════════════════════

// ── Spring Configs ──────────────────────────────────────────
export const springs = {
    gentle: { type: 'spring' as const, stiffness: 120, damping: 14, mass: 1 },
    snappy: { type: 'spring' as const, stiffness: 300, damping: 20, mass: 0.8 },
    bouncy: { type: 'spring' as const, stiffness: 400, damping: 10, mass: 0.5 },
    stiff: { type: 'spring' as const, stiffness: 500, damping: 30, mass: 1 },
    wobbly: { type: 'spring' as const, stiffness: 180, damping: 8, mass: 1 },
    slow: { type: 'spring' as const, stiffness: 80, damping: 20, mass: 1.5 },
    elastic: { type: 'spring' as const, stiffness: 200, damping: 5, mass: 0.5 },
};

// ── Easing Presets ──────────────────────────────────────────
export const easings = {
    smooth: [0.4, 0, 0.2, 1] as const,
    decelerate: [0, 0, 0.2, 1] as const,
    accelerate: [0.4, 0, 1, 1] as const,
    sharp: [0.4, 0, 0.6, 1] as const,
    bounce: [0.68, -0.55, 0.265, 1.55] as const,
};

// ── Entry Animations (hidden → visible) ────────────────────
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: springs.gentle },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: springs.gentle },
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: springs.gentle },
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: springs.gentle },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: springs.snappy },
};

export const scaleInBounce: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: springs.bouncy },
};

export const slideInUp: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: springs.gentle },
};

export const slideInDown: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: springs.gentle },
};

export const slideInLeft: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: springs.gentle },
};

export const slideInRight: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: springs.gentle },
};

export const rotateIn: Variants = {
    hidden: { opacity: 0, rotate: -15, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1, transition: springs.snappy },
};

export const flipInX: Variants = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0, transition: springs.snappy },
};

export const flipInY: Variants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0, transition: springs.snappy },
};

// ── Exit Animations (visible → hidden) ─────────────────────
export const fadeOut: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 0.3 } },
};

export const fadeOutUp: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -40, transition: { duration: 0.3 } },
};

export const fadeOutDown: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40, transition: { duration: 0.3 } },
};

export const scaleOut: Variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

// ── Attention Animations ────────────────────────────────────
export const pulse: Variants = {
    idle: { scale: 1 },
    active: {
        scale: [1, 1.05, 1],
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
    },
};

export const shake: Variants = {
    idle: { x: 0 },
    active: {
        x: [0, -10, 10, -8, 8, -4, 4, 0],
        transition: { duration: 0.5 },
    },
};

export const glow: Variants = {
    idle: { boxShadow: '0 0 0 0 rgba(155, 28, 46, 0)' },
    active: {
        boxShadow: [
            '0 0 0 0 rgba(155, 28, 46, 0.4)',
            '0 0 0 20px rgba(155, 28, 46, 0)',
        ],
        transition: { duration: 1.5, repeat: Infinity },
    },
};

export const bounce: Variants = {
    idle: { y: 0 },
    active: {
        y: [0, -15, 0],
        transition: { duration: 0.6, repeat: Infinity, repeatDelay: 2 },
    },
};

export const wiggle: Variants = {
    idle: { rotate: 0 },
    active: {
        rotate: [0, -3, 3, -2, 2, 0],
        transition: { duration: 0.5 },
    },
};

export const float: Variants = {
    idle: { y: 0 },
    active: {
        y: [0, -10, 0],
        transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
};

// ── Loading Animations ──────────────────────────────────────
export const skeletonPulse: Variants = {
    idle: { opacity: 0.5 },
    active: {
        opacity: [0.5, 1, 0.5],
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
    },
};

export const spinnerRotate: Variants = {
    idle: { rotate: 0 },
    active: {
        rotate: 360,
        transition: { duration: 1, repeat: Infinity, ease: 'linear' },
    },
};

export const dotsLoading: Variants = {
    idle: { opacity: 0.3 },
    active: {
        opacity: [0.3, 1, 0.3],
        transition: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' },
    },
};

export const progressBar: Variants = {
    idle: { scaleX: 0, originX: 0 },
    active: {
        scaleX: 1,
        transition: { duration: 2, ease: 'easeOut' },
    },
};

// ── Success/Error Feedback ──────────────────────────────────
export const successCheck: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export const errorShake: Variants = {
    idle: { x: 0, borderColor: 'transparent' },
    error: {
        x: [0, -6, 6, -4, 4, -2, 2, 0],
        borderColor: '#DC2626',
        transition: { duration: 0.4 },
    },
};

export const celebrationPop: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
        scale: 1,
        rotate: 0,
        transition: springs.elastic,
    },
};

// ── Stagger Orchestration ───────────────────────────────────
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

export const staggerContainerSlow: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

export const staggerContainerFast: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.05,
        },
    },
};

// ── Scroll-Linked Utilities ─────────────────────────────────
export const parallaxUp = (distance: number = 50): Variants => ({
    hidden: { y: distance },
    visible: { y: 0, transition: springs.gentle },
});

export const parallaxScale: Variants = {
    hidden: { scale: 0.95, opacity: 0.8 },
    visible: { scale: 1, opacity: 1, transition: springs.gentle },
};

// ── Card Hover Effects ──────────────────────────────────────
export const cardHover = {
    rest: { y: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    hover: {
        y: -8,
        boxShadow: '0 25px 50px -12px rgba(155, 28, 46, 0.15)',
        transition: springs.snappy,
    },
};

export const cardTilt3D = {
    rest: { rotateX: 0, rotateY: 0, scale: 1 },
    hover: { scale: 1.02, transition: springs.snappy },
};

// ── Magnetic Button Hover ───────────────────────────────────
export const magneticHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: springs.snappy },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
};

// ── Page Transition ─────────────────────────────────────────
export const pageTransition: Transition = {
    type: 'tween',
    ease: easings.smooth,
    duration: 0.4,
};

export const pageVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: pageTransition },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

// ── Navbar Scroll Animation ─────────────────────────────────
export const navbarShrink: Variants = {
    expanded: { height: 96, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' },
    shrunk: {
        height: 72,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        transition: springs.snappy,
    },
};

// ── Text Reveal ─────────────────────────────────────────────
export const charReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export const wordReveal: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: springs.gentle,
    },
};

// ── Counter Animation Config ────────────────────────────────
export const counterSpring: Transition = {
    type: 'spring',
    stiffness: 50,
    damping: 15,
    mass: 1,
};
