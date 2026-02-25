'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useConsentStore } from '../store/useConsentStore';
import { Fingerprint } from 'lucide-react';
import { useState, useEffect } from 'react';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-21 — Permanent Privacy Revocation Trigger
// Required by GDPR Art. 7(3): "It shall be as easy to withdraw 
// as to give consent." Always visible but non-intrusive.
// ═══════════════════════════════════════════════════════════

export default function PrivacyTrigger() {
    const { hasConsented, isBannerOpen, openBanner } = useConsentStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    // Only show if the user HAS consented and the banner is NOT currently open
    const shouldShow = hasConsented && !isBannerOpen;

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.5, x: -20 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300, delay: 0.5 }}
                    onClick={openBanner}
                    className="fixed bottom-4 left-4 z-[9990] w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center shadow-soft text-text-secondary hover:text-primary hover:border-primary/50 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary backdrop-blur-sm"
                    aria-label="Datenschutzeinstellungen ändern (Cookies widerrufen)"
                    title="Datenschutzeinstellungen ändern"
                >
                    <Fingerprint className="w-6 h-6 group-hover:scale-110 transition-transform" />

                    {/* Tooltip on hover */}
                    <span className="absolute left-14 bg-surface border border-border px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-soft">
                        Datenschutz anpassen
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
