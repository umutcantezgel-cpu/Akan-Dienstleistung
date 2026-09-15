'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import type { ServiceDetail } from '@/features/services/data/serviceDetails';
import CinematicCanvas from '@/features/singularity/motion/CinematicCanvas';
import SplitText from '@/features/singularity/motion/SplitText';
import MagneticButton from '@/features/singularity/interactions/MagneticButton';
import Button from '@/shared/components/Button';
import BeforeAfterSlider from '@/features/before-after/components/BeforeAfterSlider';
import ImagePlaceholder from '@/shared/components/ImagePlaceholder';
import { Sparkles, ArrowDownRight, CheckCircle2, AlertTriangle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface GlasreinigungSingularityProps {
    service: ServiceDetail;
}

export default function GlasreinigungSingularity({ service }: GlasreinigungSingularityProps) {
    const [openBenefitIdx, setOpenBenefitIdx] = useState<number | null>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    // Parallax for floating glass panes
    const pane1Y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const pane2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

    return (
        <article ref={containerRef} className="relative w-full min-h-screen bg-[#F8FAFC] overflow-hidden pt-32 pb-40">

            {/* 1. Underlying Cinematic Canvas (Light/Refraction mode) */}
            <CinematicCanvas type="ethereal" className="opacity-60" />

            {/* 2. Floating Ambient Glass Panes (Parallaxing behind content) */}
            <motion.div
                style={{ y: pane1Y }}
                className="absolute top-20 right-[10%] w-[40vw] h-[60vh] bg-white/20 backdrop-blur-[40px] border border-white/50 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.05)] rotate-12 z-0"
            />
            <motion.div
                style={{ y: pane2Y }}
                className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-blue-50/30 backdrop-blur-[60px] border border-white/60 rounded-full shadow-[0_20px_40px_rgba(14,165,233,0.05)] z-0"
            />

            <div className="container-fluid relative z-10 h-full flex flex-col justify-center">

                {/* Ethereal Hero Typography */}
                <div className="max-w-5xl mx-auto text-center mt-20 mb-32 relative">

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/80 shadow-sm mb-8"
                    >
                        <Sparkles className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-semibold tracking-widest uppercase text-slate-700">Refraktion & Klarheit</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl xl:text-9xl font-display font-light text-slate-900 tracking-tight leading-[0.9] mb-8 relative">
                        {/* Text is immediately sharp and clear */}
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="block bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 drop-shadow-sm"
                        >
                            GLAS<br />REINIGUNG
                        </motion.span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-3xl text-slate-600 font-light max-w-3xl mx-auto text-balance mt-12 mb-16 overflow-hidden"
                    >
                        <SplitText text={service.subtitle} type="words" delay={0.2} staggerDuration={0.03} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col items-center justify-center mt-12"
                    >
                        <MagneticButton mass={0.2} damping={12} strength={0.6}>
                            <Button href="/contact" variant="primary" className="bg-white/80 backdrop-blur-xl border border-white/100 text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-5 px-10 text-lg rounded-2xl group transition-all duration-500 flex items-center">
                                <span>Transparenz anfragen</span>
                                <ArrowDownRight className="w-6 h-6 ml-2 group-hover:rotate-[-45deg] transition-transform duration-300 text-blue-500" />
                            </Button>
                        </MagneticButton>
                    </motion.div>

                </div>

                {/* Deep B2B Context Section (World Champion UX) */}
                <div className="max-w-6xl mx-auto w-full mt-32 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Side: The "Why" - Deep Description & Pain Points */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-display text-slate-900 mb-6 drop-shadow-sm">Architektonischer Werterhalt</h2>
                        <div className="prose prose-lg prose-slate text-slate-700 mb-12">
                            {/* Rendering the extensive description added in serviceDetails */}
                            <p className="leading-relaxed drop-shadow-sm text-balance">
                                {service.description}
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold flex items-center gap-2 mb-6 text-slate-800 drop-shadow-sm">
                            <AlertTriangle className="w-5 h-5 text-red-500" />
                            Kritische B2B Herausforderungen
                        </h3>
                        <ul className="space-y-4">
                            {service.painPoints.map((pain, idx) => (
                                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/40 backdrop-blur-md border border-red-100/50 shadow-sm">
                                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                    </div>
                                    <span className="text-slate-700 font-medium leading-snug drop-shadow-sm">{pain}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Side: The "How" - Detailed Benefits Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-display text-slate-900 mb-6 drop-shadow-sm">Unsere Expertise</h2>
                        <div className="space-y-4">
                            {service.benefits.map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openBenefitIdx === idx ? 'bg-white/70 backdrop-blur-xl border-blue-200 shadow-md' : 'bg-white/30 backdrop-blur-md border-white/50 hover:bg-white/40'}`}
                                >
                                    <button
                                        onClick={() => setOpenBenefitIdx(openBenefitIdx === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="text-xl font-semibold text-slate-800 flex items-center gap-3 drop-shadow-sm">
                                            <CheckCircle2 className={`w-6 h-6 transition-colors duration-300 ${openBenefitIdx === idx ? 'text-blue-500' : 'text-slate-400'}`} />
                                            {benefit.title}
                                        </span>
                                        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openBenefitIdx === idx ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div
                                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openBenefitIdx === idx ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-slate-600 leading-relaxed font-medium pl-9 text-balance drop-shadow-sm">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Vorher-Nachher Transformation & Action Photo */}
                {service.beforeAfter && (
                    <div className="mt-32 border-t border-slate-200/60 pt-20">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block mb-3">
                                Reales Reinigungsergebnis
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display font-semibold text-slate-900 tracking-tight mb-4">
                                {service.beforeAfter.title}
                            </h2>
                            <p className="text-lg text-slate-600 font-normal">
                                {service.beforeAfter.description}
                            </p>
                        </div>
                        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
                            <div className="lg:col-span-7 rounded-[2rem] overflow-hidden shadow-xl border border-white/80 bg-white/40 backdrop-blur-sm">
                                <BeforeAfterSlider
                                    beforeImage={service.beforeAfter.beforeImage}
                                    afterImage={service.beforeAfter.afterImage}
                                    beforeLabel={service.beforeAfter.beforeLabel}
                                    afterLabel={service.beforeAfter.afterLabel}
                                />
                            </div>
                            <div className="lg:col-span-5 rounded-[2rem] overflow-hidden shadow-xl border border-white/80 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]">
                                <ImagePlaceholder
                                    alt="AKAN Glasreiniger mit professioneller Teleskopstange im Außeneinsatz"
                                    fill
                                    className="object-cover"
                                    originalSrc={service.imageSrc}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6 z-10">
                                    <p className="text-white text-sm font-medium">
                                        Schadensfreie Reinigung bis in 15m Höhe dank Carbon-Teleskopstangen
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </article>
    );
}
