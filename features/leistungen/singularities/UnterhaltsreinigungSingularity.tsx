'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import type { ServiceDetail } from '@/features/services/data/serviceDetails';
import CinematicCanvas from '@/features/singularity/motion/CinematicCanvas';
import SplitText from '@/features/singularity/motion/SplitText';
import MagneticButton from '@/features/singularity/interactions/MagneticButton';
import Button from '@/shared/components/Button';
import { ArrowDownRight, Clock, ShieldAlert, CheckSquare, Plus } from 'lucide-react';
import { useState } from 'react';

interface UnterhaltsreinigungSingularityProps {
    service: ServiceDetail;
}

export default function UnterhaltsreinigungSingularity({ service }: UnterhaltsreinigungSingularityProps) {
    const [openBenefitIdx, setOpenBenefitIdx] = useState<number | null>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    // Metronome breathing effect for background
    const breathingScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

    // Parallax for rhythmic background lines
    const lineY1 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const lineY2 = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

    // Triple the features array to ensure seamless infinite looping marquee
    const marqueeItems = [...service.features, ...service.features, ...service.features];

    return (
        <article ref={containerRef} className="relative w-full min-h-screen bg-[#FAF9F6] overflow-hidden pt-32 pb-40 border-t-8 border-t-slate-900">

            {/* 1. Underlying Cinematic Canvas (Rhythmic mode - if added, else none) */}
            <CinematicCanvas type="industrial" className="opacity-5" />

            {/* 2. Symmetrical Grid Lines (Background Rhythm) */}
            <div className="absolute inset-0 pointer-events-none flex justify-center gap-[20vw] opacity-10">
                <motion.div style={{ y: lineY1 }} className="h-[200vh] w-px bg-slate-900 -mt-[50vh]" />
                <motion.div style={{ y: lineY2 }} className="h-[200vh] w-px bg-slate-900 -mt-[50vh]" />
            </div>

            <motion.div
                style={{ scale: useSpring(breathingScale, { damping: 40, stiffness: 20 }) }}
                className="container-fluid relative z-10 h-full flex flex-col justify-center"
            >

                {/* Rhythmic Hero Typography */}
                <div className="max-w-5xl mx-auto text-center mt-20 mb-32 relative">

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 mb-12"
                    >
                        <Clock className="w-5 h-5 text-slate-900 animate-pulse" />
                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-slate-900">Konsistenz & Takt</span>
                    </motion.div>

                    {/* Symmetrical, perfectly centered brutalist-lite typography */}
                    <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85] mb-12">
                        <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.85, 0, 0.15, 1] }} className="block">Unterhalts</motion.span></div>
                        <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.85, 0, 0.15, 1] }} className="block text-slate-500">Reinigung</motion.span></div>
                    </h1>

                    <div className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto text-balance mt-8 mb-16 overflow-hidden">
                        <SplitText text={service.subtitle} type="chars" delay={0.6} staggerDuration={0.015} yOffset={20} />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="flex flex-col items-center justify-center mt-8"
                    >
                        <MagneticButton mass={0.5} damping={20} strength={0.3}>
                            <Button href="/contact" variant="primary" className="bg-slate-900 border-none text-white hover:bg-slate-800 py-6 px-12 text-lg rounded-none group transition-all duration-300 flex items-center shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1">
                                <span className="font-bold tracking-wider uppercase">Taktung planen</span>
                                <ArrowDownRight className="w-6 h-6 ml-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
                            </Button>
                        </MagneticButton>
                    </motion.div>

                </div>

                {/* Deep Brutalist/Minimalist B2B Context Section (World Champion UX) */}
                <div className="max-w-7xl mx-auto w-full mt-24 border-t-2 border-slate-900 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-20 px-4 md:px-0">

                    {/* Left Side: The "Why" - Deep Description & Pain Points */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Systemausfälle vermeiden</h2>
                        <div className="prose prose-lg prose-slate text-slate-700 mb-16">
                            <p className="leading-relaxed text-balance font-medium">
                                {service.description}
                            </p>
                        </div>

                        <div className="bg-white border-2 border-slate-900 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                            <h3 className="text-xl font-bold flex items-center gap-3 mb-6 text-slate-900 uppercase">
                                <ShieldAlert className="w-6 h-6 text-red-600" />
                                Operationale Risiken
                            </h3>
                            <ul className="space-y-4">
                                {service.painPoints.map((pain, idx) => (
                                    <li key={idx} className="flex items-start gap-4 pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                                        <div className="w-2 h-2 rounded-none bg-red-600 shrink-0 mt-2" />
                                        <span className="text-slate-800 font-medium leading-snug">{pain}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Side: The "How" - Detailed Minimalist Accordion */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Systematische Lösung</h2>
                        <div className="space-y-0 border-t-2 border-slate-900">
                            {service.benefits.map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className={`border-b-2 border-slate-900 transition-colors duration-300 overflow-hidden ${openBenefitIdx === idx ? 'bg-slate-50' : 'bg-transparent hover:bg-slate-50'}`}
                                >
                                    <button
                                        onClick={() => setOpenBenefitIdx(openBenefitIdx === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="text-xl font-bold text-slate-900 flex items-center gap-4">
                                            <CheckSquare className={`w-6 h-6 transition-colors duration-300 ${openBenefitIdx === idx ? 'text-blue-600' : 'text-slate-300'}`} />
                                            {benefit.title}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center transition-transform duration-500 ${openBenefitIdx === idx ? 'rotate-45 bg-slate-900 text-white' : 'bg-transparent text-slate-900'}`}>
                                            <Plus className="w-5 h-5" />
                                        </div>
                                    </button>
                                    <div
                                        className={`px-6 overflow-hidden transition-all duration-500 ease-[0.85,0,0.15,1] ${openBenefitIdx === idx ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-slate-600 font-medium leading-relaxed pl-10 text-balance">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

            </motion.div>

            {/* 3. The Endless Loop Marquee (Persistence Engine) */}
            <div className="w-full relative py-20 mt-20 border-y-2 border-slate-200 bg-white overflow-hidden flex items-center">
                <motion.div
                    animate={{ x: ["0%", "-33.333%"] }}
                    transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    className="flex whitespace-nowrap"
                >
                    {marqueeItems.map((feature, idx) => (
                        <div key={idx} className="flex items-center px-8 md:px-16">
                            <span className="text-4xl md:text-6xl font-black text-slate-200 uppercase tracking-tighter">
                                {feature}
                            </span>
                            <span className="w-4 h-4 rounded-full bg-slate-900 mx-8 md:mx-16 inline-block" />
                        </div>
                    ))}
                </motion.div>
            </div>

        </article>
    );
}
