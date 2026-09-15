'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import QuickInquirySheet from '@/features/contact-form/components/QuickInquirySheet';

// ═══════════════════════════════════════════════════════════
// HERMES-V3 — Context-Sensitive Sticky Action Bar
// Replaces StickyCTA. Appears after 20% scroll depth.
// Mobile: Fixed Bottom Navigation Bar. 
// Desktop: Floating Side Dock (Bottom Right).
// ═══════════════════════════════════════════════════════════

export default function StickyActionBar() {
    const [visible, setVisible] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            // Show after 300px scroll depth (NAV-03)
            setVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check in case of mid-page reload
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper function to determine contextual CTA text
    const getContextInfo = () => {
        if (pathname?.startsWith('/standorte/')) {
            const city = pathname.split('/').pop()?.replace(/-/g, ' ');
            return city ? `Angebot für ${city.charAt(0).toUpperCase() + city.slice(1)}` : 'Kostenloses Angebot';
        }
        if (pathname?.startsWith('/leistungen/')) {
            const service = pathname.split('/').pop()?.replace(/-/g, ' ');
            return service ? `${service.charAt(0).toUpperCase() + service.slice(1)} anfragen` : 'Jetzt anfragen';
        }
        return 'Kostenloses Angebot';
    };

    const ctaText = getContextInfo();

    return (
        <>
            <AnimatePresence>
                {visible && (
                    <>
                        {/* MOBILE VERSION: Premium Bottom Navigation Bar */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed bottom-0 left-0 right-0 z-[99] lg:hidden pointer-events-none"
                        >
                            {/* Protection Gradient to separate from page content */}
                            <div className="h-10 bg-gradient-to-t from-surface to-transparent opacity-80" />

                            <div className="bg-surface/85 backdrop-blur-2xl border-t border-border/60 px-4 pb-[calc(env(safe-area-inset-bottom,16px)+8px)] pt-3 pointer-events-auto shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                                <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
                                    <a
                                        href="tel:+4915234754386"
                                        className="flex-shrink-0 flex flex-col items-center justify-center w-[60px] h-[50px] bg-surface-secondary text-text-primary rounded-xl border border-border/60 active:scale-95 transition-all text-primary hover:bg-primary/5"
                                        aria-label="Anrufen"
                                    >
                                        <Phone className="w-5 h-5 mb-1" />
                                        <span className="text-[9px] uppercase tracking-widest font-bold opacity-80">Anruf</span>
                                    </a>
                                    <a
                                        href="https://wa.me/4915234754386?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20professionelle%20Reinigung."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-shrink-0 flex flex-col items-center justify-center w-[60px] h-[50px] bg-[#25D366]/10 text-[#25D366] rounded-xl border border-[#25D366]/30 active:scale-95 transition-all active:bg-[#25D366]/20"
                                        aria-label="WhatsApp"
                                    >
                                        <MessageCircle className="w-5 h-5 mb-1" />
                                        <span className="text-[9px] uppercase tracking-widest font-bold opacity-90">Chat</span>
                                    </a>
                                    <button
                                        onClick={(e) => { e.preventDefault(); setIsSheetOpen(true); }}
                                        className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm h-[50px] rounded-xl shadow-[0_4px_20px_rgba(155,28,46,0.3)] active:scale-95 transition-all font-display truncate px-2 border border-primary/20 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(155,28,46,0.4)]"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-active:translate-x-full transition-transform duration-500 ease-in-out" />
                                        <span className="truncate">{ctaText}</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* DESKTOP VERSION: Floating Side Dock Right */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed bottom-10 right-10 z-[99] hidden lg:flex flex-col items-end gap-3 pointer-events-none"
                        >
                            {/* Secondary Actions (WhatsApp, Phone) in a vertical pill */}
                            <div className="flex flex-col gap-2 bg-[#0a0a0c]/80 backdrop-blur-xl p-2 rounded-full border border-white/10 shadow-2xl pointer-events-auto">
                                <a
                                    href="tel:+4915234754386"
                                    className="group flex items-center justify-center w-12 h-12 bg-white/5 text-white/80 rounded-full hover:bg-white hover:text-primary transition-all duration-300 relative"
                                    aria-label="Anrufen"
                                >
                                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    {/* Tooltip */}
                                    <div className="absolute right-full mr-4 px-3 py-1.5 bg-[#0a0a0c] text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 pointer-events-none transition-all duration-300 border border-white/10 whitespace-nowrap">
                                        0152 347 543 86
                                    </div>
                                </a>
                                <div className="w-8 h-px bg-white/10 mx-auto" />
                                <a
                                    href="https://wa.me/4915234754386?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20professionelle%20Reinigung."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 relative"
                                    aria-label="WhatsApp"
                                >
                                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    {/* Tooltip */}
                                    <div className="absolute right-full mr-4 px-3 py-1.5 bg-[#0a0a0c] text-[#25D366] text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 pointer-events-none transition-all duration-300 border border-[#25D366]/20 whitespace-nowrap">
                                        WhatsApp Support
                                    </div>
                                </a>
                            </div>

                            {/* Primary Action (Contact) standalone pill */}
                            <button
                                onClick={(e) => { e.preventDefault(); setIsSheetOpen(true); }}
                                className="group relative flex items-center gap-3 bg-primary text-white font-bold text-sm px-7 h-14 rounded-full shadow-[0_10px_30px_rgba(155,28,46,0.3)] hover:shadow-[0_10px_40px_rgba(155,28,46,0.5)] border border-primary-light/30 transition-all duration-300 hover:-translate-y-1 font-display overflow-hidden pointer-events-auto mt-2"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative z-10 whitespace-nowrap">{ctaText}</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <QuickInquirySheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
        </>
    );
}
