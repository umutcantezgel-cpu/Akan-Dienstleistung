'use client';

import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';

// ═══════════════════════════════════════════════════════════
// HERMES-V2 — Page Transition Choreography (SEO-13)
// Weinrot-Vorhang (Wine-Red Curtain) + Content Zoom-in.
// Gives the application a SPA-feeling for premium branding.
// ═══════════════════════════════════════════════════════════

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            {/* The Wine-Red Curtain: Starts full screen, shrinks to top */}
            <motion.div
                key={`curtain-${pathname}`}
                className="fixed inset-0 z-[9999] bg-primary pointer-events-none origin-top"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Content Zoom-in and Fade */}
            <motion.div
                key={`content-${pathname}`}
                initial={{ opacity: 0, scale: 0.97, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </>
    );
}
