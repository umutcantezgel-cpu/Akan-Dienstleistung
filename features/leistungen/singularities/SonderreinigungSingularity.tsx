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
import { Crosshair, Droplets, AlertOctagon, Check, Minus } from 'lucide-react';
import { useState } from 'react';

interface SonderreinigungSingularityProps {
    service: ServiceDetail;
}

export default function SonderreinigungSingularity({ service }: SonderreinigungSingularityProps) {
    const [openBenefitIdx, setOpenBenefitIdx] = useState<number | null>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    // Surgical precision line animations (SVG path drawing)
    const pathLength = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, 1]), { bounce: 0 });
    const pathOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    // Scalpel-like sharp transform for text
    const scalpelY = useSpring(useTransform(scrollYProgress, [0, 0.4], [0, -100]), { stiffness: 100, damping: 30 });

    return (
        <article ref={containerRef} className="relative w-full min-h-screen bg-black text-white overflow-hidden pt-32 pb-40">

            {/* 1. Underlying Cinematic Canvas (Laser/Surgical mode implied by absolute darkness) */}
            <CinematicCanvas type="industrial" className="opacity-0" />

            {/* 2. Surgical SVG Line Grid (Laser precision) */}
            <div className="absolute inset-0 pointer-events-none z-0 px-8 py-20 flex justify-center items-center">
                <motion.svg
                    width="100%" height="100%"
                    className="absolute inset-0 w-full h-full opacity-30"
                    style={{ opacity: pathOpacity }}
                >
                    <motion.rect
                        x="5%" y="10%" width="90%" height="80%"
                        fill="none"
                        stroke="#ef4444" // red-500
                        strokeWidth="1"
                        style={{ pathLength }}
                    />
                    <motion.line x1="5%" y1="50%" x2="95%" y2="50%" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="4 4" style={{ pathLength }} />
                    <motion.line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="4 4" style={{ pathLength }} />
                </motion.svg>
            </div>

            <div className="container-fluid relative z-10 h-full flex flex-col justify-center">

                {/* Surgical Hero Typography */}
                <div className="max-w-5xl mx-auto text-center mt-20 mb-32 relative">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="inline-flex items-center gap-3 px-6 py-2 bg-red-500/10 border border-red-500/50 mb-12 rounded-sm"
                    >
                        <Crosshair className="w-5 h-5 text-red-500 animate-[spin_4s_linear_infinite]" />
                        <span className="text-sm font-mono tracking-[0.3em] uppercase text-red-400">Chirurgische Präzision</span>
                    </motion.div>

                    <motion.div style={{ y: scalpelY }} className="relative">
                        <h1 className="text-6xl md:text-8xl xl:text-9xl font-sans font-black tracking-tight leading-[0.9] mb-8">
                            <div className="text-white">SONDER</div>
                            <div className="text-red-600 outline-text-surgical">REINIGUNG</div>
                        </h1>
                    </motion.div>

                    <div className="text-xl md:text-2xl text-slate-400 font-mono max-w-2xl mx-auto text-balance mt-8 mb-16 overflow-hidden">
                        {/* Hard, terminal-like typing effect using SplitText chars */}
                        <SplitText text={service.subtitle} type="chars" delay={0.4} staggerDuration={0.02} yOffset={0} />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ delay: 1, duration: 0.4 }}
                        className="flex flex-col items-center justify-center mt-8"
                    >
                        <MagneticButton mass={0.1} damping={15} strength={0.8}>
                            <Button href="/contact" variant="primary" className="bg-red-600 border border-red-500 text-white hover:bg-red-700 py-5 px-10 text-lg rounded-sm group transition-all duration-200 flex items-center font-mono uppercase tracking-widest">
                                <span>Eingriff planen</span>
                                <Droplets className="w-6 h-6 ml-4 group-hover:scale-125 transition-transform duration-200" />
                            </Button>
                        </MagneticButton>
                    </motion.div>

                </div>

                {/* Deep Clinical B2B Context Section (World Champion UX) */}
                <div className="max-w-7xl mx-auto w-full mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-20 px-8 lg:px-0">

                    {/* Left Side: The "Why" - Deep Description & Pain Points */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-sans font-light text-white mb-6 tracking-wide">Hygiene-<span className="text-red-500 font-bold">Wiederherstellung</span></h2>
                        <div className="prose prose-lg prose-invert text-slate-400 mb-16">
                            <p className="leading-relaxed text-balance font-mono text-sm">
                                {service.description}
                            </p>
                        </div>

                        <div className="border border-red-500/20 bg-red-950/20 p-8 rounded-sm">
                            <h3 className="text-xl font-sans font-bold flex items-center gap-3 mb-8 text-red-500 tracking-wider">
                                <AlertOctagon className="w-6 h-6" />
                                Kritische Indikationen
                            </h3>
                            <ul className="space-y-6">
                                {service.painPoints.map((pain, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-none bg-red-500 shrink-0 mt-2" />
                                        <span className="text-slate-300 font-mono text-sm leading-snug">{pain}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Side: The "How" - Detailed Clinical Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-sans font-light text-white mb-6 tracking-wide">Methoden-<span className="text-red-500 font-bold">Protokoll</span></h2>
                        <div className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className={`border transition-all duration-300 overflow-hidden ${openBenefitIdx === idx ? 'bg-red-950/40 border-red-500/50' : 'bg-transparent border-white/10 hover:border-red-500/30'}`}
                                >
                                    <button
                                        onClick={() => setOpenBenefitIdx(openBenefitIdx === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="text-lg font-sans font-bold text-white flex items-center gap-4 tracking-wide">
                                            <Check className={`w-5 h-5 transition-colors duration-300 ${openBenefitIdx === idx ? 'text-red-500' : 'text-slate-600'}`} />
                                            {benefit.title}
                                        </span>
                                        <div className={`w-8 h-8 border flex items-center justify-center transition-colors duration-300 ${openBenefitIdx === idx ? 'border-red-500 text-red-500' : 'border-white/20 text-white/50'}`}>
                                            <Minus className={`w-4 h-4 transition-transform duration-300 ${openBenefitIdx === idx ? '' : 'rotate-90'}`} />
                                        </div>
                                    </button>
                                    <div
                                        className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openBenefitIdx === idx ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-slate-400 font-mono text-sm leading-relaxed pl-9 text-balance">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

                {/* Surgical Features List (Clinical lines) */}
                <div className="max-w-4xl mx-auto w-full mt-32 relative z-20 border-t border-red-500/20 pt-16">
                    <h2 className="text-xl font-mono text-red-500 tracking-widest uppercase mb-12 text-center">Einsatzvektoren</h2>
                    {service.features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                            className="flex items-center gap-6 py-6 border-b border-white/10 group hover:border-red-500/50 transition-colors duration-300"
                        >
                            <span className="text-red-500 font-mono text-xl opacity-50 group-hover:opacity-100">0{idx + 1}</span>
                            <h3 className="text-2xl md:text-3xl font-light text-slate-300 group-hover:text-white transition-colors duration-300">
                                {feature}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                {/* Vorher-Nachher Qualitätsbeweis & Höhenreinigung */}
                {service.beforeAfter && (
                    <div className="mt-32 border-t border-red-500/20 pt-20">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <span className="text-xs font-mono text-red-500 uppercase tracking-[0.25em] bg-red-950/40 border border-red-500/30 px-4 py-1.5 rounded-full inline-block mb-3">
                                Toxikologische & Industrielle Wiederherstellung
                            </span>
                            <h2 className="text-3xl md:text-5xl font-mono font-bold text-white tracking-tight mb-4 uppercase">
                                {service.beforeAfter.title}
                            </h2>
                            <p className="text-lg text-slate-400 font-mono">
                                {service.beforeAfter.description}
                            </p>
                        </div>
                        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
                            <div className="lg:col-span-7 rounded-[2rem] overflow-hidden shadow-2xl border border-red-500/30 bg-black">
                                <BeforeAfterSlider
                                    beforeImage={service.beforeAfter.beforeImage}
                                    afterImage={service.beforeAfter.afterImage}
                                    beforeLabel={service.beforeAfter.beforeLabel}
                                    afterLabel={service.beforeAfter.afterLabel}
                                />
                            </div>
                            <div className="lg:col-span-5 rounded-[2rem] overflow-hidden shadow-2xl border border-red-500/30 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] bg-zinc-950">
                                <ImagePlaceholder
                                    alt="AKAN Höhenreinigung mit Linde Industriestapler und Sicherheits-Arbeitskorb"
                                    fill
                                    className="object-cover"
                                    originalSrc={service.imageSrc}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-6 z-10">
                                    <p className="text-white text-sm font-mono text-red-100">
                                        Schwerer Zugang: Hallendecken- & Infrastrukturreinigung mit Hubtechnik
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <style jsx>{`
        .outline-text-surgical {
            -webkit-text-stroke: 2px #ef4444;
            color: transparent;
        }
      `}</style>
        </article>
    );
}
