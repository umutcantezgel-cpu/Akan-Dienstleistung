'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, HardHat, CheckCircle2, Clock, ShieldCheck, Ruler } from 'lucide-react';
import ImagePlaceholder from '@/shared/components/ImagePlaceholder';
import Button from '@/shared/components/Button';
import BeforeAfterSlider from '@/features/before-after/components/BeforeAfterSlider';
import { springs, staggerContainer, fadeInUp } from '@/shared/styles/animations';
import type { ServiceDetail } from '../data/serviceDetails';

interface Props {
    service: ServiceDetail;
}

// Sub-component for dust particles tied to scroll
function DustParticles() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.8], [0.5, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ y: yParallax, opacity: opacityFade }}
            className="absolute inset-0 pointer-events-none z-0 mix-blend-screen"
        >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <filter id="dustNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.4 0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#dustNoise)" opacity="0.4" />
            </svg>
        </motion.div>
    );
}

const timelineSteps = [
    { title: "Baubegleitende Reinigung", desc: "Kontinuierliche Beseitigung von Schutt und Verpackungsmaterial während der Bauphase für mehr Arbeitssicherheit." },
    { title: "Baugrobreinigung", desc: "Trockene Reinigung des Rohbaus nach Handwerkerabschluss. Entfernung von Mörtelresten, Holzabschnitten und Schutzfolien." },
    { title: "Baufeinreinigung", desc: "Intensive Nass- und Trockenreinigung aller Oberflächen. Schlierenfreies Einwaschen von Fenstern und Türen." },
    { title: "Spezialbehandlung", desc: "Fachgerechte Zementschleierentfernung auf Fliesen und Erstpflege von elastischen Bodenbelägen." },
    { title: "Abnahmebereitschaft", desc: "Finale Kontrolle und Mängelbeseitigung. Objektübergabe in einem bewohnbaren, makellosen Zustand." }
];

export default function BauendreinigungTemplate({ service }: Props) {
    return (
        <article className="bg-[#0f0f11] text-zinc-300 selection:bg-primary/30 min-h-screen">
            {/* 1. Dark Hero Section */}
            <header className="relative pt-40 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-black isolation-isolate">
                {/* Background Image with heavy overlay */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <ImagePlaceholder alt={service.imagePlaceholderAlt} fill className="object-cover" originalSrc="/images/hero/akan-hallreinigung-stahlkonstruktion-kran-vetter.webp" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f11]/80 via-[#0f0f11]/50 to-[#0f0f11]" />
                </div>

                <DustParticles />

                <div className="container-fluid relative z-10">
                    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-4xl">
                        <motion.div variants={fadeInUp} className="mb-8">
                            <Link href="/leistungen" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                                <ArrowLeft className="w-4 h-4" />
                                Zurück zu Services
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-primary font-bold text-sm tracking-widest uppercase mb-8 backdrop-blur-md">
                            <HardHat className="w-5 h-5" />
                            Industrielle Kraft
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[1.1]"
                            style={{ textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}
                        >
                            Konstruktion trifft <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
                                Perfektion.
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl lg:text-3xl text-zinc-400 font-medium tracking-wide mb-12 text-measure">
                            {service.subtitle}
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                            <Button href="/contact" size="lg" className="bg-primary hover:bg-primary-hover text-white shadow-[0_0_30px_rgba(155,28,46,0.3)] border-none">
                                Kapazitäten anfragen
                            </Button>
                            <Button href="#prozess" variant="secondary" size="lg" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">
                                Unser Reinigungsprozess
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            {/* 2. B2B Tonalität / Agitation */}
            <section className="py-24 border-b border-zinc-800 bg-[#141417]">
                <div className="container-fluid max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white font-display">
                                Keine Toleranz für Verzögerungen am Bau.
                            </h2>
                            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                                {service.description} Wir verstehen die Sprache von Bauleitern und Architekten.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Clock, text: "Exakte Termintreue" },
                                    { icon: ShieldCheck, text: "Zertifizierte Sicherheit" },
                                    { icon: Ruler, text: "Präzisionsverfahren" },
                                    { icon: CheckCircle2, text: "Sofortige Abnahme" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                                        <item.icon className="w-6 h-6 text-primary shrink-0" />
                                        <span className="text-zinc-200 font-bold text-sm tracking-wide">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            {/* Glow behind the slider */}
                            <div className="absolute inset-0 bg-primary/20 blur-[100px] z-0 rounded-full" />
                            <div className="relative z-10 w-full rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                                <BeforeAfterSlider
                                    beforeImage="/images/vorher-nachher/akan-bodenreinigung-industriehalle-vorher-verschmutzt.webp"
                                    afterImage="/images/vorher-nachher/akan-bodenreinigung-industriehalle-nachher-glaenzend.webp"
                                    beforeLabel="Grobzustand"
                                    afterLabel="Abnahmebereit"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Volumetrische Timeline */}
            <section id="prozess" className="py-32 bg-[#0f0f11] relative overflow-hidden">
                <div className="container-fluid max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Der 5-Phasen Bauprozess</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Strukturierte Vorgehensweise für garantierte Planungssicherheit bei der Übergabe.</p>
                    </div>

                    <div className="relative">
                        {/* Vertical line constraint */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary to-primary/0" />

                        {timelineSteps.map((step, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ ...springs.gentle, delay: 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Spacer for the other side */}
                                    <div className="hidden md:block w-[45%]" />

                                    {/* Timeline Node */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black border-4 border-primary z-10 shadow-[0_0_20px_rgba(155,28,46,0.6)] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                                        <div className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-primary/50 transition-colors group">
                                            <span className="text-primary font-black text-xl mb-2 block opacity-80">0{idx + 1}</span>
                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                                            <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </article>
    );
}
