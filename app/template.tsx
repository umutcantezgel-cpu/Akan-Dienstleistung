'use client';

import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-23 — Page Transition Dimensional Gate
// Replaces the instant Next.js router transitions with a
// cinematic circular wipe and a deep blur entrance.
// ═══════════════════════════════════════════════════════════

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Skip heavy transitions for internal hash links or query params
    // But since Template remounts on route change, this runs on new pages.

    return (
        <>
            {/* The Dimensional Gate: Shrinking Circle Wipe */}
            <motion.div
                className="fixed inset-0 z-modal bg-primary pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"
                initial={{ clipPath: 'circle(150% at 50% 50%)' }}
                animate={{ clipPath: 'circle(0% at 50% 50%)' }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            />

            {/* Content Materialization */}
            <motion.div
                key={pathname}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px) brightness(1.5)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="will-change-transform"
            >
                {children}
            </motion.div>
        </>
    );
}
