'use client';

import { Building2, HardHat, Sun, Factory, ArrowRight, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import type { LocationDetail } from '../data/locationData';
import AnimatedSection, { AnimatedItem } from '@/shared/components/AnimatedSection';
import { fadeInUp, staggerContainer } from '@/shared/styles/animations';
import ServiceCard from '@/shared/components/ServiceCard';
import LocalTestimonials from '@/features/trust-signals/components/LocalTestimonials';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[600px] bg-surface-secondary/50 animate-pulse flex items-center justify-center">
            <span className="text-zinc-400">Lade interaktive Karte...</span>
        </div>
    )
});
import Button from '@/shared/components/Button';
import { ShieldAlert, CheckSquare, Plus } from 'lucide-react';

interface StandortTemplateProps {
    location: LocationDetail;
}

export default function StandortTemplate({ location }: StandortTemplateProps) {
    const [openBenefitIdx, setOpenBenefitIdx] = useState<number | null>(0);

    // Theme-driven Design Matrix für 100% Barrierefreiheit & Kontrast
    // "dark" (Default) erzwingt nun ECHTE dunkle Hintergründe, anstatt das helle "bg-background" zu nutzen.
    const isLight = location.theme === 'light';
    const mainTxt = isLight ? 'text-slate-900' : 'text-white';
    const mutedTxt = isLight ? 'text-slate-600' : 'text-zinc-300';
    const bgContainer = isLight ? 'bg-slate-50' : 'bg-zinc-900';
    const bgAlt = isLight ? 'bg-white' : 'bg-zinc-950';
    const borderCol = isLight ? 'border-slate-200' : 'border-zinc-800';
    const accentTxt = isLight ? 'text-primary' : 'text-red-400';

    // Für Sektionen mit Hintergrundbildern immer einen extra Text-Shadow für Lesbarkeit einplanen:
    const dropShadowText = isLight ? 'drop-shadow-sm' : 'drop-shadow-[0_2px_10px_rgba(0,0,0,1)]';

    return (
        <article className={`${bgAlt} ${mainTxt} overflow-hidden min-h-screen selection:bg-primary/30`}>
            {/* 1. HERO SECTION */}
            <section className={`relative pt-40 pb-24 lg:pt-56 lg:pb-40 ${bgContainer} overflow-hidden`}>
                <div className="absolute inset-0 z-0">
                    <div className={`absolute inset-0 ${isLight ? 'bg-white/40 backdrop-blur-sm' : 'bg-[linear-gradient(to_bottom,transparent,rgba(10,10,12,0.9)_80%)]'} z-10`} />
                    <img
                        src="/images/hero/akan-fensterreinigung-team-teleskopstange-aktion.webp"
                        alt={`Gebäudereinigung in ${location.name}`}
                        className={`w-full h-full object-cover ${isLight ? 'opacity-30' : 'opacity-20 mix-blend-luminosity'} scale-105`}
                    />
                </div>

                <div className="container-fluid relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="max-w-4xl"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-primary tracking-widest uppercase">
                                AKAN vor Ort in {location.name}
                            </span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className={`text-h1 font-bold ${mainTxt} ${dropShadowText} mb-6 font-display leading-[1.1] tracking-tight`}>
                            {location.localContent.heroHeadline}
                        </motion.h1>

                        <motion.p variants={fadeInUp} className={`text-xl md:text-2xl ${mutedTxt} ${isLight ? 'font-medium' : 'font-light'} ${dropShadowText} max-w-2xl leading-relaxed mb-10`}>
                            {location.localContent.heroSubline}
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
                            <Button href="/contact" size="lg" className="bg-primary hover:bg-primary-hover text-white shadow-[0_0_30px_rgba(155,28,46,0.3)] border-none">
                                Kostenloses Angebot
                            </Button>
                            <Button href="#leistungen" variant="secondary" size="lg" className={`border ${isLight ? 'bg-white/50 border-slate-300 text-slate-800 hover:bg-white hover:text-slate-900' : 'bg-zinc-900/50 border-zinc-700 text-zinc-100 hover:bg-zinc-800 hover:text-white'} backdrop-blur-md`}>
                                Unsere Leistungen
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. LOCAL INTRO & ECONOMY FACT */}
            <section className={`py-24 ${bgAlt} relative z-20`}>
                <div className="container-fluid">
                    <AnimatedSection variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedItem variants={fadeInUp} className="space-y-6">
                            <h2 className={`text-3xl lg:text-4xl font-bold font-display ${mainTxt}`}>
                                Ein Teil von <span className={accentTxt}>{location.name}</span>
                            </h2>
                            <p className={`text-lg ${mutedTxt} leading-relaxed`}>
                                {location.localContent.introText}
                            </p>
                            <div className={`pt-6 border-t ${borderCol}`}>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <Building2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className={`font-bold ${mainTxt} mb-2`}>Wirtschaft & Standort</h4>
                                        <p className={`${mutedTxt} leading-relaxed text-sm`}>
                                            {location.localContent.economyFact}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedItem>

                        <AnimatedItem variants={fadeInUp} className="relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border/50 relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                                <img
                                    src="/images/galerie/gewerbereinigung/akan-gewerbereinigung-glasfassade-gebaeude-aussen.webp"
                                    alt="Bürogebäude"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-6 left-6 right-6 z-20">
                                    <div className="bg-surface/80 backdrop-blur-md border border-border/50 p-4 rounded-2xl flex items-center gap-4">
                                        <ShieldCheck className="w-8 h-8 text-primary" />
                                        <div>
                                            <p className="font-bold text-white text-sm">Garantierte Qualität</p>
                                            <p className={`text-xs text-zinc-300`}>{location.localContent.localReference}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedItem>
                    </AnimatedSection>
                </div>
            </section>

            {/* 2.5 LOCAL MORPHOLOGY ENGINE (B2B WORLD CHAMPION CONTEXT) */}
            {location.localContent.localAuthority && location.localContent.painPoints && location.localContent.benefits && (
                <section className={`py-24 ${bgContainer} border-t ${borderCol} relative z-20`}>
                    <div className="container-fluid">
                        <AnimatedSection variants={fadeInUp} className="mb-16 max-w-4xl mx-auto text-center">
                            <h2 className={`${accentTxt} font-bold tracking-[0.25em] uppercase text-sm mb-4`}>Lokale B2B-Expertise</h2>
                            <h3 className={`text-3xl lg:text-4xl font-bold font-display ${mainTxt} mb-6`}>
                                Reinigungssicherheit für <span className={accentTxt}>{location.name}</span>
                            </h3>
                            <p className={`text-lg ${mutedTxt}`}>
                                {location.localContent.localAuthority}
                            </p>
                            {location.localContent.economicFocus && (
                                <div className={`mt-6 inline-flex items-center gap-2 px-4 py-2 ${bgAlt} border ${borderCol} rounded-full text-sm ${mutedTxt}`}>
                                    <Factory className={`w-4 h-4 ${accentTxt}`} />
                                    <span>Branchenfokus: {location.localContent.economicFocus}</span>
                                </div>
                            )}
                        </AnimatedSection>

                        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-20">
                            {/* Left Side: Pain Points (The "Why") */}
                            <AnimatedItem variants={fadeInUp}>
                                <div className={`${bgAlt} border ${borderCol} p-8 md:p-12 relative overflow-hidden group`}>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl group-hover:bg-red-500/10 transition-colors duration-500" />
                                    <h3 className={`text-xl font-bold flex items-center gap-3 mb-8 ${mainTxt} uppercase tracking-wider font-display`}>
                                        <ShieldAlert className={`w-6 h-6 ${accentTxt}`} />
                                        Spezifische Risiken in {location.name}
                                    </h3>
                                    <ul className="space-y-6">
                                        {location.localContent.painPoints.map((pain, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className="w-1.5 h-1.5 rounded-none bg-red-500 shrink-0 mt-2.5" />
                                                <span className={`${mutedTxt} leading-relaxed`}>{pain}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedItem>

                            {/* Right Side: Benefits (The "How" Accordion) */}
                            <AnimatedItem variants={fadeInUp}>
                                <div className="space-y-3">
                                    <h3 className={`text-xl font-bold mb-8 ${mainTxt} uppercase tracking-wider font-display hidden lg:block`}>Unsere Lösungsarchitektur</h3>
                                    {location.localContent.benefits.map((benefit, idx) => (
                                        <div
                                            key={idx}
                                            className={`border transition-all duration-300 overflow-hidden ${openBenefitIdx === idx ? `bg-primary/5 border-primary/30` : `${bgAlt} ${borderCol} hover:border-primary/50`}`}
                                        >
                                            <button
                                                onClick={() => setOpenBenefitIdx(openBenefitIdx === idx ? null : idx)}
                                                className="w-full flex items-center justify-between p-6 text-left"
                                            >
                                                <span className={`text-lg font-bold ${mainTxt} flex items-center gap-4`}>
                                                    <CheckSquare className={`w-5 h-5 transition-colors duration-300 ${openBenefitIdx === idx ? accentTxt : (isLight ? 'text-primary/40' : 'text-red-400/40')}`} />
                                                    {benefit.title}
                                                </span>
                                                <div className={`w-8 h-8 rounded-none border flex items-center justify-center transition-all duration-300 ${openBenefitIdx === idx ? `border-primary bg-primary text-white rotate-45` : `${borderCol} ${mutedTxt} bg-transparent`}`}>
                                                    <Plus className="w-4 h-4" />
                                                </div>
                                            </button>
                                            <div
                                                className={`px-6 overflow-hidden transition-all duration-500 ease-[0.85,0,0.15,1] ${openBenefitIdx === idx ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                            >
                                                <p className={`${mutedTxt} leading-relaxed pl-9`}>
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedItem>
                        </div>
                    </div>
                </section>
            )}

            {/* 3. SERVICES GRID */}
            <section id="leistungen" className={`py-24 ${bgContainer} border-y ${borderCol} relative z-20`}>
                <div className="container-fluid">
                    <AnimatedSection variants={fadeInUp} className="mb-16 text-center max-w-3xl mx-auto">
                        <h2 className={`${accentTxt} font-bold tracking-[0.25em] uppercase text-sm mb-4`}>Unser Angebot</h2>
                        <h3 className={`text-3xl lg:text-4xl font-bold font-display ${mainTxt} mb-6`}>
                            Professionelle Reinigung in {location.name}
                        </h3>
                        <p className={`text-lg ${mutedTxt}`}>
                            Vom Großraumbüro bis zur Industriehalle – wir bieten maßgeschneiderte Lösungen für jeden Bedarf in Ihrer Nähe.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Unterhaltsreinigung', desc: 'Dauerhaft saubere Büros und Geschäftsräume.', icon: Building2, link: '/leistungen/unterhaltsreinigung' },
                            { title: 'Fensterreinigung', desc: 'Streifenfreier Glanz für Fassaden und Fenster.', icon: Sun, link: '/leistungen/fensterreinigung' },
                            { title: 'Bauendreinigung', desc: 'Sichere Übergabe nach Neubau oder Sanierung.', icon: HardHat, link: '/leistungen/bauendreinigung' },
                            { title: 'Industriereinigung', desc: 'Höchste Hygiene für sensible Produktionsbereiche.', icon: Factory, link: '/leistungen/industriereinigung' }
                        ].map((service, i) => (
                            <AnimatedItem key={i} variants={fadeInUp} className="h-full">
                                <ServiceCard
                                    title={service.title}
                                    description={service.desc}
                                    icon={service.icon}
                                    href={service.link}
                                />
                            </AnimatedItem>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* 4. TRUST SIGNALS & TESTIMONIALS */}
            <section className={`py-24 ${bgAlt} relative z-20 overflow-hidden`}>
                <div className="container-fluid">
                    <AnimatedSection variants={fadeInUp} className="mb-16 text-center max-w-3xl mx-auto">
                        <h2 className={`${accentTxt} font-bold tracking-[0.25em] uppercase text-sm mb-4`}>Kundenstimmen aus der Region</h2>
                        <h3 className={`text-3xl lg:text-4xl font-bold font-display ${mainTxt}`}>
                            Das sagen Unternehmen aus {location.name} & Umgebung
                        </h3>
                    </AnimatedSection>

                    {/* The specialized 3D Tilt Testimonials component filtered by city */}
                    <LocalTestimonials city={location.name} />

                    <AnimatedSection variants={fadeInUp} className={`mt-16 flex flex-wrap justify-center gap-8 ${mutedTxt}`}>
                        {['Reinigungsmeisterbetrieb', '10+ Jahre Erfahrung', 'Feste Ansprechpartner'].map((trust, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle2 className={`w-5 h-5 ${accentTxt}`} />
                                <span className="font-medium">{trust}</span>
                            </div>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* 5. GEOFENCE MAP */}
            <AnimatedSection variants={fadeInUp}>
                <DynamicMap location={location} />
            </AnimatedSection>

            {/* CTA SECTION */}
            <section className={`py-24 ${bgContainer} relative z-20 text-center`}>
                <div className="container-fluid relative z-10">
                    <AnimatedSection variants={fadeInUp} className="max-w-3xl mx-auto">
                        <h2 className={`text-4xl lg:text-5xl font-bold font-display ${mainTxt} mb-6`}>
                            Bereit für makellose Sauberkeit in {location.name}?
                        </h2>
                        <p className={`text-xl ${mutedTxt} mb-10 leading-relaxed`}>
                            Lassen Sie uns bei einem kostenlosen Vor-Ort-Termin herausfinden, wie wir Ihr Gebäude optimal pflegen können.
                        </p>
                        <Button href="/contact" size="lg" className={`${isLight ? 'bg-primary hover:bg-primary-hover text-white' : 'bg-white text-background hover:bg-zinc-200'}`}>
                            Kostenlosen Termin vereinbaren
                        </Button>
                    </AnimatedSection>
                </div>
            </section>
        </article>
    );
}
