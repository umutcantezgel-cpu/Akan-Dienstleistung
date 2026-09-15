'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import type { ServiceDetail } from '@/features/services/data/serviceDetails';
import CinematicCanvas from '@/features/singularity/motion/CinematicCanvas';
import SplitText from '@/features/singularity/motion/SplitText';
import MagneticButton from '@/features/singularity/interactions/MagneticButton';
import Button from '@/shared/components/Button';
import BeforeAfterSlider from '@/features/before-after/components/BeforeAfterSlider';
import { ChevronRight, ChevronDown, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useState } from 'react';

interface BauendreinigungSingularityProps {
    service: ServiceDetail;
}

export default function BauendreinigungSingularity({ service }: BauendreinigungSingularityProps) {
    const [openBenefitIdx, setOpenBenefitIdx] = useState<number | null>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Heavy, brutalist scroll mapping for the Typography
    const titleY = useTransform(scrollYProgress, [0, 0.2], ['0%', '15%']);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.2]);

    return (
        <article ref={containerRef} className="relative w-full min-h-screen bg-theme-bg overflow-hidden pt-32 pb-24">
            {/* Background Canvas: Dust & Industrial Grit */}
            <CinematicCanvas type="industrial" />

            <div className="container-fluid relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--spacing-complexity-grid)] relative">

                    {/* Header Block (Brutalist Typography, Asymmetric) */}
                    <div className="lg:col-span-8 lg:col-start-1 mt-12 lg:mt-24 mb-16 lg:mb-32">
                        <motion.h1
                            style={{ y: titleY, opacity: titleOpacity }}
                            className="text-5xl md:text-7xl xl:text-8xl font-display font-black text-theme-text uppercase tracking-tighter leading-[0.85] mix-blend-difference"
                        >
                            {service.title.split('end').map((part, i) => (
                                <span key={i} className="block">
                                    {i === 1 ? <span className="text-theme-primary">END</span> : part}
                                </span>
                            ))}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            className="w-1.5 h-32 bg-theme-primary mt-8 mb-6 origin-top"
                        />

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-theme-text/80 font-medium max-w-2xl text-balance"
                        >
                            {service.subtitle}
                        </motion.p>
                    </div>

                    {/* Intro Description & CTA (Right Aligned) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="lg:col-span-6 xl:col-span-5 lg:col-start-7 xl:col-start-8 flex flex-col justify-end pb-12"
                    >
                        <h2 className="text-2xl font-display font-bold text-theme-primary mb-6">
                            <SplitText text={service.subtitle} type="words" delay={0.8} />
                        </h2>
                        <p className="text-lg text-theme-text/80 leading-relaxed mb-10 overflow-hidden">
                            <SplitText text={service.description} type="words" delay={1.2} staggerDuration={0.015} yOffset={10} />
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <MagneticButton mass={0.8} damping={25} strength={0.4}>
                                <Button href="/contact" variant="primary" className="py-4 px-8 text-lg font-bold w-full sm:w-auto">
                                    Kostenlose Besichtigung
                                </Button>
                            </MagneticButton>
                        </div>
                    </motion.div>
                </div>

                {/* Brutalist Service Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-complexity-grid)] mt-24">
                    {service.features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="p-8 border border-theme-text/10 bg-theme-text/5 hover:bg-theme-text/10 transition-colors group flex flex-col justify-between min-h-[160px]"
                        >
                            <div className="w-8 h-1 bg-theme-primary mb-6 transition-all group-hover:w-full duration-500 ease-out" />
                            <h3 className="text-xl font-bold text-theme-text tracking-tight flex items-center justify-between">
                                <span>{feature}</span>
                                <ChevronRight className="w-5 h-5 text-theme-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                        </motion.div>
                    ))}
                </div>
                {/* Deep Brutalist B2B Context Section (World Champion UX) */}
                <div className="mt-32 border-t border-theme-text/10 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-complexity-grid)] relative z-20">

                    {/* Left Side: The "Why" - Deep Description & Pain Points */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-display font-bold text-theme-text mb-6">Risikominimierung am Bauende</h2>
                        <div className="prose prose-lg prose-invert text-theme-text/80 mb-12">
                            <p className="leading-relaxed text-balance text-shadow-sm font-medium">
                                {service.description}
                            </p>
                        </div>

                        <h3 className="text-xl font-bold flex items-center gap-3 mb-6 text-theme-primary">
                            <ShieldAlert className="w-6 h-6" />
                            Operative Engpässe
                        </h3>
                        <ul className="space-y-4">
                            {service.painPoints.map((pain, idx) => (
                                <li key={idx} className="flex items-start gap-4 p-5 bg-theme-text/5 border-l-4 border-theme-primary">
                                    <span className="text-theme-text font-medium leading-snug">{pain}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Side: The "How" - Detailed Brutalist Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-display font-bold text-theme-text mb-6">Prozess-Integration</h2>
                        <div className="space-y-4">
                            {service.benefits.map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className={`border transition-all duration-300 overflow-hidden ${openBenefitIdx === idx ? 'bg-theme-text/10 border-theme-primary' : 'bg-transparent border-theme-text/20 hover:bg-theme-text/5'}`}
                                >
                                    <button
                                        onClick={() => setOpenBenefitIdx(openBenefitIdx === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="text-xl font-bold text-theme-text flex items-center gap-4 uppercase tracking-wide">
                                            <span className={`text-sm font-mono transition-colors ${openBenefitIdx === idx ? 'text-theme-primary' : 'text-theme-text/50'}`}>0{idx + 1}</span>
                                            {benefit.title}
                                        </span>
                                        <ChevronDown className={`w-5 h-5 text-theme-primary transition-transform duration-300 ${openBenefitIdx === idx ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div
                                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openBenefitIdx === idx ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-theme-text/80 leading-relaxed font-medium pl-10 text-balance">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Vorher-Nachher Qualitätsbeweis */}
                {service.beforeAfter && (
                    <div className="mt-32 border-t border-theme-text/10 pt-20">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <span className="text-xs font-mono text-theme-primary uppercase tracking-[0.2em] block mb-3">
                                [ REALE TRANSFORMATION ]
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display font-black text-theme-text uppercase tracking-tight mb-4">
                                {service.beforeAfter.title}
                            </h2>
                            <p className="text-lg text-theme-text/80 font-medium">
                                {service.beforeAfter.description}
                            </p>
                        </div>
                        <div className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border border-theme-text/20">
                            <BeforeAfterSlider
                                beforeImage={service.beforeAfter.beforeImage}
                                afterImage={service.beforeAfter.afterImage}
                                beforeLabel={service.beforeAfter.beforeLabel}
                                afterLabel={service.beforeAfter.afterLabel}
                            />
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                .text-shadow-sm {
                    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
                }
            `}</style>
        </article>
    );
}
