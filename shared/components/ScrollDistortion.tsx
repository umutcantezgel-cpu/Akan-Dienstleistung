'use client';

import { useScroll, useVelocity, useTransform, useSpring, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ScrollDistortion() {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    // Transform velocity into chromatic aberration shift values
    const chromaticShift = useTransform(smoothVelocity, [-1000, 0, 1000], [-3, 0, 3]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-[90] h-full w-full mix-blend-difference"
            style={{
                boxShadow: useTransform(
                    chromaticShift,
                    (shift) => `inset ${shift}px 0 0 rgba(255,0,0,0.1), inset ${-shift}px 0 0 rgba(0,0,255,0.1)`
                )
            }}
        />
    );
}
