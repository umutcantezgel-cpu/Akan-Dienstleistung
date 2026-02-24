'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

// ═══════════════════════════════════════════════════════════
// HERMES — Sticky Mobile CTA Bar
// Appears after 50% scroll depth. Always-visible conversion
// pathway on mobile: Click-to-Call + WhatsApp + Anfragen
// ═══════════════════════════════════════════════════════════

export default function StickyCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            setVisible(scrollPercent > 0.15);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-[999] lg:hidden"
                >
                    {/* Gradient fade-in edge */}
                    <div className="h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />

                    <div className="bg-white/95 backdrop-blur-xl border-t border-border/60 px-4 pb-[env(safe-area-inset-bottom,8px)] pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
                        <div className="flex items-center gap-3 max-w-lg mx-auto">
                            {/* Click-to-Call */}
                            <a
                                href="tel:+4915234754386"
                                className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm py-3.5 rounded-xl shadow-sm active:scale-95 transition-transform font-display"
                            >
                                <Phone className="w-4 h-4" />
                                Anrufen
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/4915234754386?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20professionelle%20Reinigung."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm py-3.5 px-5 rounded-xl shadow-sm active:scale-95 transition-transform font-display"
                            >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp
                            </a>

                            {/* Contact Form CTA */}
                            <a
                                href="/contact"
                                className="flex-1 flex items-center justify-center gap-2 bg-surface text-primary font-bold text-sm py-3.5 rounded-xl border border-primary/20 active:scale-95 transition-transform font-display"
                            >
                                Anfragen
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
