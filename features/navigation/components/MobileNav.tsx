'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, ChevronDown, MapPin, Mail, X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Button from '@/shared/components/Button';
import { useNavigationStore } from '../store/useNavigationStore';
import { navLinks } from '../config/navLinks';
import AkanLogo from '@/shared/components/AkanLogo';

export default function MobileNav() {
    const { isMobileMenuOpen, setMobileMenuOpen } = useNavigationStore();
    const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

    const handleClose = () => {
        setMobileMenuOpen(false);
        setTimeout(() => setExpandedGroup(null), 300);
    };

    const toggleGroup = (href: string) => {
        setExpandedGroup(expandedGroup === href ? null : href);
    };

    return (
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[120] w-full h-[100dvh] bg-white xl:hidden flex flex-col overflow-hidden"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Hauptnavigation"
                >
                    {/* Header: Logo & Close */}
                    <div className="flex items-center justify-between p-4 px-6 border-b border-border/60 shrink-0 pt-[max(1rem,env(safe-area-inset-top))]">
                        <Link href="/" onClick={handleClose} className="flex items-center gap-2">
                            <AkanLogo className="w-8 h-8" />
                            <span className="text-sm font-bold tracking-tight font-display">AKAN</span>
                        </Link>
                        <button
                            onClick={handleClose}
                            className="w-12 h-12 flex items-center justify-center -mr-2 text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-lg touch-target"
                            aria-label="Menü schließen"
                        >
                            <X className="w-7 h-7" />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto px-6 py-6 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] flex flex-col">

                        <nav aria-label="Mobile Navigation" className="flex flex-col w-full mb-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                                    className="border-b border-border/40"
                                >
                                    {link.children ? (
                                        <div className="flex flex-col">
                                            <button
                                                type="button"
                                                onClick={() => toggleGroup(link.href)}
                                                className="flex items-center justify-between py-4 min-h-[48px] text-xl font-bold tracking-tight text-text-primary hover:text-primary transition-colors font-display w-full text-left focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-sm"
                                                aria-expanded={expandedGroup === link.href}
                                            >
                                                {link.label}
                                                <motion.div
                                                    animate={{ rotate: expandedGroup === link.href ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronDown className="w-6 h-6 text-primary" aria-hidden="true" />
                                                </motion.div>
                                            </button>
                                            <AnimatePresence>
                                                {expandedGroup === link.href && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="flex flex-col pb-4 gap-2 border-l-2 border-primary/20 ml-2 pl-4">
                                                            {link.children.map(child => (
                                                                <Link
                                                                    key={child.href}
                                                                    href={child.href}
                                                                    prefetch={child.href === '/contact' || child.href.startsWith('/leistungen') ? true : null}
                                                                    onClick={handleClose}
                                                                    className="py-2.5 min-h-[48px] flex items-center text-text-secondary hover:text-primary font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:text-primary touch-target"
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            prefetch={link.href === '/contact' || link.href.startsWith('/leistungen') ? true : null}
                                            onClick={handleClose}
                                            className="flex items-center py-4 min-h-[48px] text-xl font-bold tracking-tight text-text-primary hover:text-primary transition-colors font-display focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-sm touch-target"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </nav>

                        {/* Trust Elements */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col gap-2 mb-8 items-center bg-surface p-4 rounded-xl border border-border/60"
                        >
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <span className="text-xs font-bold text-text-primary">4.9/5 bei Google</span>
                            <span className="text-xs text-text-secondary font-medium mt-1">Über 10 Jahre Erfahrung</span>
                        </motion.div>

                        {/* Contact Options Bottom */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-auto flex flex-col gap-4"
                        >
                            <div className="flex flex-col gap-3">
                                <a href="tel:+4915234754386" className="flex items-center text-sm font-medium text-text-primary hover:text-primary min-h-[48px] touch-target">
                                    <Phone className="w-5 h-5 mr-3 text-primary opacity-80" /> 0152 3475 4386
                                </a>
                                <a href="mailto:info@akan-dienstleistung.de" className="flex items-center text-sm font-medium text-text-primary hover:text-primary min-h-[48px] touch-target">
                                    <Mail className="w-5 h-5 mr-3 text-primary opacity-80" /> info@akan-dienstleistung.de
                                </a>
                                <div className="flex items-center text-sm font-medium text-text-primary min-h-[48px]">
                                    <MapPin className="w-5 h-5 mr-3 text-primary opacity-80" /> Gudensberg, Nordhessen
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 mt-2">
                                <Button href="/contact" variant="primary" className="w-full justify-center min-h-[48px]" onClick={handleClose}>
                                    Jetzt Angebot anfordern
                                </Button>
                                <Button href="tel:+4915234754386" variant="secondary" className="w-full justify-center min-h-[48px]" onClick={handleClose}>
                                    Anrufen: 0152 34754386
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
