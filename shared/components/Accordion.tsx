'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { springs } from '@/shared/styles/animations';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-07 — FAQ Accordion Harmonic Resonance
// Musical spring physics, ripple-open effect, color resonance
// ═══════════════════════════════════════════════════════════

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
    className?: string;
    allowMultiple?: boolean;
}

export default function Accordion({
    items,
    className = '',
    allowMultiple = false,
}: AccordionProps) {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const toggle = (index: number) => {
        setOpenItems((prev) => {
            const next = new Set(allowMultiple ? prev : []);
            if (prev.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };

    return (
        <div className={`space-y-3 ${className}`}>
            {items.map((item, i) => {
                const isOpen = openItems.has(i);
                return (
                    <motion.div
                        key={i}
                        layout
                        transition={{ layout: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                        className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                                ? 'border-primary/30 bg-white shadow-[0_8px_32px_-8px_rgba(155,28,46,0.08)]'
                                : 'border-border bg-surface/50 hover:border-primary/15 hover:bg-white/80'
                            }`}
                    >
                        <button
                            onClick={() => toggle(i)}
                            className="w-full flex items-center justify-between p-5 text-left group"
                            aria-expanded={isOpen}
                        >
                            {/* Question number badge */}
                            <div className="flex items-center gap-4 flex-1">
                                <motion.span
                                    animate={{
                                        backgroundColor: isOpen ? 'rgba(155, 28, 46, 1)' : 'rgba(155, 28, 46, 0.08)',
                                        color: isOpen ? 'rgba(255, 255, 255, 1)' : 'rgba(155, 28, 46, 1)',
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </motion.span>
                                <span className={`font-bold text-sm transition-colors ${isOpen ? 'text-primary' : 'text-text-primary group-hover:text-primary'
                                    }`}>
                                    {item.question}
                                </span>
                            </div>

                            {/* Animated chevron with rotation + color */}
                            <motion.div
                                animate={{
                                    rotate: isOpen ? 180 : 0,
                                    scale: isOpen ? 1.1 : 1,
                                }}
                                transition={springs.snappy}
                                className="flex-shrink-0 ml-4"
                            >
                                <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-text-secondary'
                                    }`} />
                            </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                                        opacity: { duration: 0.25, delay: 0.1 },
                                    }}
                                    className="overflow-hidden"
                                >
                                    <motion.div
                                        initial={{ y: -8 }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="px-5 pb-5 text-sm text-text-secondary leading-relaxed border-t border-border/50 pt-4 ml-12"
                                    >
                                        {item.answer}
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </div>
    );
}
