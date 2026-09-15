'use client';

import { Building2, HardHat, Sun, Factory, ArrowRight, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
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

    // Theme-driven Design Matrix für 100% Barrierefreiheit & perfekten Kontrast
    const isLight = location.theme !== 'dark'; // Unified luminous corporate palette
    const mainTxt = isLight ? 'text-slate-900' : 'text-white';
    const mutedTxt = isLight ? 'text-slate-600' : 'text-zinc-300';
    const bgContainer = isLight ? 'bg-slate-50/80' : 'bg-zinc-900';
    const bgAlt = isLight ? 'bg-white' : 'bg-zinc-950';
    const borderCol = isLight ? 'border-slate-200/80' : 'border-zinc-800';
    const accentTxt = 'text-primary';

    return (
        <article className="bg-background text-slate-900 overflow-hidden min-h-screen selection:bg-primary/20 selection:text-primary">
            {/* 1. HERO SECTION */}
            <section className="relative pt-36 pb-20 lg:pt-52 lg:pb-36 bg-slate-50/70 overflow-hidden border-b border-border/60">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70 z-10" />
                    <Image
                        src="/images/hero/akan-fensterreinigung-team-teleskopstange-aktion.webp"
                        alt={`Gebäudereinigung in ${location.name}`}
                        fill
                        priority
                        className="object-cover opacity-35 scale-105"
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

                        <motion.h1 variants={fadeInUp} className="text-h1 font-bold text-slate-900 mb-6 font-display leading-[1.1] tracking-tight">
                            {location.localContent.heroHeadline}
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 font-normal max-w-2xl leading-relaxed mb-10">
                            {location.localContent.heroSubline}
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
                            <Button href="/contact" size="lg" className="bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25 border-none">
                                Kostenloses Angebot
                            </Button>
                            <Button href="#leistungen" variant="secondary" size="lg" className="border border-slate-300 bg-white/80 text-slate-800 hover:bg-white hover:text-slate-900 backdrop-blur-md shadow-sm">
                                Unsere Leistungen
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. LOCAL INTRO & ECONOMY FACT */}
            <section className="py-20 lg:py-28 bg-white relative z-20 border-b border-border/60">
                <div className="container-fluid">
                    <AnimatedSection variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedItem variants={fadeInUp} className="space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900">
                                Ein Teil von <span className="text-primary">{location.name}</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {location.localContent.introText}
                            </p>
                            <div className="pt-6 border-t border-slate-200">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <Building2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 text-base">Wirtschaft & Standort</h4>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {location.localContent.economyFact}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedItem>

                        <AnimatedItem variants={fadeInUp} className="relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-md relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                                <Image
                                    src="/images/galerie/gewerbereinigung/akan-gewerbereinigung-glasfassade-gebaeude-aussen.webp"
                                    alt="Bürogebäude"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-6 left-6 right-6 z-20">
                                    <div className="bg-slate-900/90 text-white backdrop-blur-md border border-slate-700/60 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
                                        <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                                        <div>
                                            <p className="font-bold text-white text-sm">Garantierte Qualität</p>
                                            <p className="text-xs text-slate-300">{location.localContent.localReference}</p>
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
                <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-border/60 relative z-20">
                    <div className="container-fluid">
                        <AnimatedSection variants={fadeInUp} className="mb-16 max-w-4xl mx-auto text-center">
                            <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-sm mb-3">Lokale B2B-Expertise</h2>
                            <h3 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 mb-4">
                                Reinigungssicherheit für <span className="text-primary">{location.name}</span>
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {location.localContent.localAuthority}
                            </p>
                            {location.localContent.economicFocus && (
                                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-full text-sm text-slate-700">
                                    <Factory className="w-4 h-4 text-primary shrink-0" />
                                    <span>Branchenfokus: {location.localContent.economicFocus}</span>
                                </div>
                            )}
                        </AnimatedSection>

                        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-20">
                            {/* Left Side: Pain Points (The "Why") */}
                            <AnimatedItem variants={fadeInUp}>
                                <div className="bg-white border border-slate-200/90 rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden group h-full">
                                    <h3 className="text-xl font-bold flex items-center gap-3 mb-6 text-slate-900 uppercase tracking-wider font-display">
                                        <ShieldAlert className="w-6 h-6 text-primary shrink-0" />
                                        Spezifische Risiken in {location.name}
                                    </h3>
                                    <ul className="space-y-5">
                                        {location.localContent.painPoints.map((pain, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                                                <span className="text-slate-700 leading-relaxed">{pain}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedItem>

                            {/* Right Side: Benefits (The "How" Accordion) */}
                            <AnimatedItem variants={fadeInUp}>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold mb-6 text-slate-900 uppercase tracking-wider font-display hidden lg:block">Unsere Lösungsarchitektur</h3>
                                    {location.localContent.benefits.map((benefit, idx) => (
                                        <div
                                            key={idx}
                                            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openBenefitIdx === idx ? 'bg-primary/5 border-primary/30 shadow-sm' : 'bg-white border-slate-200 hover:border-primary/40'}`}
                                        >
                                            <button
                                                onClick={() => setOpenBenefitIdx(openBenefitIdx === idx ? null : idx)}
                                                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                                            >
                                                <span className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3 sm:gap-4">
                                                    <CheckSquare className={`w-5 h-5 shrink-0 transition-colors duration-300 ${openBenefitIdx === idx ? 'text-primary' : 'text-slate-400'}`} />
                                                    {benefit.title}
                                                </span>
                                                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border flex items-center justify-center transition-all duration-300 shrink-0 ${openBenefitIdx === idx ? 'border-primary bg-primary text-white rotate-45' : 'border-slate-300 text-slate-500 bg-slate-50'}`}>
                                                    <Plus className="w-4 h-4" />
                                                </div>
                                            </button>
                                            <div
                                                className={`px-5 sm:px-6 overflow-hidden transition-all duration-500 ease-[0.85,0,0.15,1] ${openBenefitIdx === idx ? 'max-h-60 pb-5 sm:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                            >
                                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8 sm:pl-9">
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
            <section id="leistungen" className="py-20 lg:py-28 bg-white border-b border-border/60 relative z-20">
                <div className="container-fluid">
                    <AnimatedSection variants={fadeInUp} className="mb-14 text-center max-w-3xl mx-auto">
                        <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-sm mb-3">Unser Angebot</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 mb-4">
                            Professionelle Reinigung in {location.name}
                        </h3>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
            <section className="py-20 lg:py-28 bg-slate-50/80 border-b border-border/60 relative z-20 overflow-hidden">
                <div className="container-fluid">
                    <AnimatedSection variants={fadeInUp} className="mb-14 text-center max-w-3xl mx-auto">
                        <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-sm mb-3">Kundenstimmen aus der Region</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 mb-4">
                            Das sagen Unternehmen aus {location.name} & Umgebung
                        </h3>
                        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            Erfahrungsberichte und Qualitätsnachweise von gewerblichen und privaten Auftraggebern vor Ort.
                        </p>
                    </AnimatedSection>

                    {/* The specialized Testimonials component filtered by city */}
                    <LocalTestimonials city={location.name} />

                    <AnimatedSection variants={fadeInUp} className="mt-14 flex flex-wrap justify-center gap-6 sm:gap-10 text-slate-700">
                        {['Reinigungsmeisterbetrieb', '10+ Jahre Erfahrung', 'Feste Ansprechpartner', 'Lückenlose Vertretungsgarantie'].map((trust, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span className="font-medium text-slate-800 text-sm sm:text-base">{trust}</span>
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
            <section className="py-20 lg:py-28 bg-white relative z-20 text-center">
                <div className="container-fluid relative z-10">
                    <AnimatedSection variants={fadeInUp} className="max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 mb-6">
                            Bereit für makellose Sauberkeit in {location.name}?
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
                            Lassen Sie uns bei einem kostenlosen Vor-Ort-Termin herausfinden, wie wir Ihr Gebäude optimal pflegen können.
                        </p>
                        <Button href="/contact" size="lg" className="bg-primary hover:bg-primary-hover text-white shadow-xl shadow-primary/20 border-none">
                            Kostenlosen Termin vereinbaren
                        </Button>
                    </AnimatedSection>
                </div>
            </section>
        </article>
    );
}
