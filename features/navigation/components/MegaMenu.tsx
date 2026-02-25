'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MegaMenuProps {
    isOpen: boolean;
    activeHref: string | null;
    items: {
        href: string;
        label: string;
        desc?: string;
        icon?: React.ElementType;
    }[];
    type: 'leistungen' | 'standorte';
    onClose: () => void;
}

export default function MegaMenu({ isOpen, activeHref, items, type, onClose }: MegaMenuProps) {
    // Differentiation: Leistungen has 2 columns, Standorte has 3 columns
    const gridConfig = type === 'leistungen'
        ? "grid grid-cols-2 gap-x-8 gap-y-6"
        : "grid grid-cols-3 gap-x-6 gap-y-4";

    const panelWidth = type === 'leistungen' ? 800 : 900;
    const colSpanClass = type === 'leistungen' ? "col-span-2" : "col-span-3";

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 pointer-events-auto z-50 origin-top"
                    onMouseLeave={onClose}
                >
                    <motion.div
                        layout
                        initial={{ width: panelWidth }}
                        animate={{ width: panelWidth }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),0_0_20px_0_rgba(0,0,0,0.05)] border border-white/50 overflow-hidden relative"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeHref}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 8 }}
                                transition={{ duration: 0.15 }}
                                className="p-8 w-full"
                            >
                                <div className={gridConfig}>
                                    <div className={`${colSpanClass} mb-2`}>
                                        <h4 className="text-primary font-bold tracking-[0.25em] uppercase text-mini flex items-center gap-3">
                                            <span className="w-8 h-[1px] bg-primary/30"></span>
                                            {type === 'leistungen' ? "Unsere Fachbereiche" : "AKAN in Ihrer Nähe"}
                                        </h4>
                                    </div>

                                    {items.map((child, i) => (
                                        <motion.div
                                            key={child.href}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.03 }}
                                        >
                                            <Link
                                                href={child.href}
                                                onClick={onClose}
                                                className="flex items-start gap-4 p-4 rounded-xl hover:bg-black/[0.02] transition-colors group/item focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 border border-transparent"
                                            >
                                                {child.icon && (
                                                    <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shrink-0 border border-border group-hover/item:border-primary/20 group-hover/item:bg-primary/5 transition-colors relative overflow-hidden svg-draw-effect">
                                                        <child.icon className="w-6 h-6 stroke-2 text-text-secondary group-hover/item:text-primary transition-colors relative z-10" aria-hidden="true" />
                                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                    </div>
                                                )}
                                                <div className="flex-1">
                                                    <div className="font-bold text-text-primary font-display group-hover/item:text-primary transition-colors flex items-center gap-2">
                                                        {child.label}
                                                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-primary" aria-hidden="true" />
                                                    </div>
                                                    {child.desc && (
                                                        <div className="text-sm text-text-secondary mt-1">{child.desc}</div>
                                                    )}
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}

                                    <div className={`${colSpanClass} mt-4 pt-6 border-t border-black/5 flex justify-between items-center`}>
                                        <p className="text-sm text-text-secondary font-medium">
                                            {type === 'leistungen'
                                                ? "Suchen Sie eine spezielle Reinigungslösung?"
                                                : "Ihr Standort ist nicht dabei? Wir arbeiten auch überregional."}
                                        </p>
                                        <Link href="/contact" onClick={onClose} className="text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-2 focus-visible:outline-none focus-visible:underline group/cta">
                                            Kostenlose Erstberatung <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" aria-hidden="true" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
