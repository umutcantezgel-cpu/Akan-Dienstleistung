'use client';

import { useState } from 'react';
import { useQueryState, parseAsInteger } from 'nuqs';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { springs } from '@/shared/styles/animations';
import type { Service } from '@/config/services';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-05 — Service Tabs Dimensional Rift
// Content transitions through dimensional portal effect
// ═══════════════════════════════════════════════════════════

interface ServiceTabsProps {
    services: Service[];
}

export default function ServiceTabs({ services }: ServiceTabsProps) {
    const [activeIndex, setActiveIndex] = useQueryState('tab', parseAsInteger.withDefault(0));
    const [direction, setDirection] = useState(1);
    const active = services[activeIndex]; // Keep original logic for 'active' based on activeIndex

    if (!active) return null; // Add validation for 'active'

    const handleTabChange = (newIndex: number) => {
        setDirection(newIndex > activeIndex ? 1 : -1);
        setActiveIndex(newIndex);
    };

    return (
        <div>
            {/* Tab Bar with morphing indicator */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
                {services.map((service, i) => (
                    <motion.button
                        key={service.id}
                        onClick={() => handleTabChange(i)}
                        className={`relative px-5 py-3 rounded-xl text-sm font-bold transition-colors ${i === activeIndex
                            ? 'text-white'
                            : 'text-text-secondary hover:text-text-primary bg-white border border-border'
                            }`}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        {i === activeIndex && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-primary rounded-xl"
                                style={{
                                    boxShadow: '0 8px 32px -4px rgba(155, 28, 46, 0.3), 0 4px 16px -2px rgba(155, 28, 46, 0.15)',
                                }}
                                transition={{ ...springs.snappy, layout: { duration: 0.4 } }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            <span>{service.icon}</span>
                            <span className="hidden sm:inline">{service.title}</span>
                        </span>
                    </motion.button>
                ))}
            </div>

            {/* Tab Content with dimensional rift transition */}
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={active.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 60, scale: 0.97, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: direction * -60, scale: 0.97, filter: 'blur(4px)' }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left: Content */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div
                                initial={{ scale: 0.8, rotate: -10 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ ...springs.snappy, delay: 0.1 }}
                                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl"
                            >
                                {active.icon}
                            </motion.div>
                            <div>
                                <h3 className="text-2xl font-bold text-text-primary font-display">{active.title}</h3>
                                <p className="text-sm text-text-secondary">{active.subtitle}</p>
                            </div>
                        </div>
                        <p className="text-text-secondary leading-relaxed mb-8">{active.description}</p>

                        <ul className="space-y-3 mb-8">
                            {active.features.map((feature, i) => (
                                <motion.li
                                    key={feature}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * i + 0.15 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-text-primary text-sm">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 text-sm omega-glow"
                            >
                                Angebot anfordern <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Stats Card with staggered reveals */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl border border-border p-8 shadow-sm omega-depth"
                    >
                        <h4 className="text-lg font-bold text-text-primary mb-6 font-display">Auf einen Blick</h4>
                        <div className="space-y-6">
                            {active.highlights.map((highlight, i) => (
                                <motion.div
                                    key={highlight.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i + 0.25 }}
                                    className="flex items-center justify-between pb-4 border-b border-border last:border-0"
                                >
                                    <span className="text-sm text-text-secondary">{highlight.label}</span>
                                    <span className="font-bold text-text-primary text-sm">{highlight.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
