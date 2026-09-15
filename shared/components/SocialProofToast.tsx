'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Clock, CheckCircle2, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { springs } from '@/shared/styles/animations';
import { triggerMicroVibration } from '@/shared/utils/rewards';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-20 — SocialProofToast Sentient Notification
// Contextual awareness, materialization shake, chromatic edge, 
// and satisfying implosion on dismiss
// ═══════════════════════════════════════════════════════════

interface SocialProofToastProps {
    delay?: number;
    duration?: number;
}

export default function SocialProofToast({
    delay = 6000,
    duration = 5000,
}: SocialProofToastProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false); // once dismissed manually, don't show again
    const [visitorCount, setVisitorCount] = useState(3);
    const pathname = usePathname();

    // Contextual Messages
    const getContextualMessage = () => {
        if (pathname === '/contact') return 'Jemand aus Kassel schreibt uns gerade eine Nachricht...';
        if (pathname === '/services') return `${visitorCount} Personen vergleichen gerade unsere Reinigungs-Optionen`;
        if (pathname === '/galerie') return `Zuletzt vor 5 Minuten gereinigt: Bürogebäude in Fritzlar`;
        return `${visitorCount} Besucher sehen sich unsere Seite gerade an`;
    };

    const getContextualIcon = () => {
        if (pathname === '/contact') return <Clock className="w-4 h-4 text-primary" />;
        if (pathname === '/galerie') return <CheckCircle2 className="w-4 h-4 text-primary" />;
        return <Eye className="w-4 h-4 text-primary" />;
    };

    useEffect(() => {
        if (isDismissed) return;

        // Show first toast after delay
        const showTimer = setTimeout(() => {
            setIsVisible(true);
            triggerMicroVibration();
            // Pulse the visitor count slightly
            setVisitorCount(Math.floor(Math.random() * 4) + 2);
        }, delay);

        return () => clearTimeout(showTimer);
    }, [delay, isDismissed, pathname]);

    useEffect(() => {
        if (!isVisible || isDismissed) return;

        // Hide after duration
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        // Show next toast after hide + pause
        const nextTimer = setTimeout(() => {
            if (!isDismissed) {
                setIsVisible(true);
                triggerMicroVibration();
            }
        }, duration + 8000 + Math.random() * 5000); // Random offset for next appearance

        return () => {
            clearTimeout(hideTimer);
            clearTimeout(nextTimer);
        };
    }, [isVisible, duration, isDismissed]);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true); // Permanent dismiss for the session
        triggerMicroVibration();
    };

    if (isDismissed) return null;

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    // The shake effect is integrated into the entrance animation keyframes
                    initial={{ x: -100, opacity: 0, scale: 0.8 }}
                    animate={{
                        x: 0, // Spring handles the bounce
                        opacity: 1,
                        scale: 1
                    }}
                    exit={{
                        scale: 0, // Implosion
                        opacity: 0,
                        filter: 'blur(10px)',
                        transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }
                    }}
                    transition={{
                        x: { type: 'spring', damping: 8, mass: 0.8, stiffness: 100 },
                        opacity: { duration: 0.2 }
                    }}
                    className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 max-w-[260px] sm:max-w-xs group cursor-pointer"
                    onClick={handleDismiss} // Click anywhere to dismiss
                >
                    {/* Chromatic Animated Border */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#00ffff] via-primary to-[#ff00ff] opacity-40 blur-[2px] animate-pulse-slow" />

                    {/* Sentient Body */}
                    <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-elevated border border-white flex items-start gap-4 hover:bg-white transition-colors duration-300">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 animate-pulse-slow mt-0.5 relative overflow-hidden">
                            {/* Inner rotation ring */}
                            <div className="absolute inset-0 border-[2px] border-primary/20 rounded-full border-t-primary animate-spin-slow"></div>
                            {getContextualIcon()}
                        </div>
                        <div className="flex-1">
                            <p className="text-tiny text-text-primary font-bold leading-snug drop-shadow-sm pr-4">
                                {getContextualMessage()}
                            </p>
                        </div>

                        {/* Dismiss Button */}
                        <motion.button
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => { e.stopPropagation(); handleDismiss(); }}
                            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-text-secondary/50 hover:text-text-primary bg-surface/50 rounded-full transition-colors"
                            aria-label="Schließen"
                        >
                            <X className="w-4 h-4" strokeWidth={2} />
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
