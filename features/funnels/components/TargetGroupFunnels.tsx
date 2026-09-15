'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import {
    Building2, Briefcase, HardHat, Home,
    ArrowRight, CheckCircle2, AlertTriangle, Sparkles,
    Phone, MessageCircle
} from 'lucide-react';
import AnimatedSection from '@/shared/components/AnimatedSection';
import { fadeInUp } from '@/shared/styles/animations';

// ═══════════════════════════════════════════════════════════
// MERCURIUS — Target-Group Conversion Funnels
// Four dedicated micro-funnels, each addressing specific
// pain points, solutions, social proof, and CTAs per persona
// ═══════════════════════════════════════════════════════════

interface Funnel {
    id: string;
    icon: React.ElementType;
    tabLabel: string;
    headline: string;
    subline: string;
    painPoints: string[];
    solution: string;
    proofPoint: string;
    ctaLabel: string;
    ctaHref: string;
    color: string;
}

const funnels: Funnel[] = [
    {
        id: 'hausverwaltung',
        icon: Building2,
        tabLabel: 'Hausverwaltungen',
        headline: 'Zuverlässige Gebäudereinigung für Ihre Objekte',
        subline: 'Ein Anruf. Ein Ansprechpartner. Alle Objekte sauber.',
        painPoints: [
            'Mieterbeschwerden zur Treppenhausreinigung',
            'Häufiger Anbieterwechsel, keine Kontinuität',
            'Unzuverlässige Teams, keine festen Ansprechpartner',
        ],
        solution: 'Wir stellen Ihnen einen festen Objektleiter zur Seite, der Ihr gesamtes Portfolio kennt. Feste Teams für jedes Objekt. Monatliche Qualitätsberichte. Und wenn es einmal nicht passt: kostenlose Nachreinigung am selben Tag.',
        proofPoint: 'Hausverwaltungen in der Region vertrauen uns bereits – mit durchschnittlich 98% weniger Mieterbeschwerden zur Reinigung.',
        ctaLabel: 'Kostenloses Angebot für Ihr Portfolio',
        ctaHref: '/contact?service=unterhaltsreinigung&segment=hausverwaltung',
        color: '#9B1C2E',
    },
    {
        id: 'unternehmen',
        icon: Briefcase,
        tabLabel: 'Unternehmen',
        headline: 'Professionelle Unterhaltsreinigung für Ihr Unternehmen',
        subline: 'Ihr Unternehmen verdient mehr als Standard-Reinigung.',
        painPoints: [
            'Hygienestandards werden nicht eingehalten',
            'Mitarbeiter beschweren sich über unsaubere Räume',
            'Die Reinigung stört den Geschäftsbetrieb',
        ],
        solution: 'Diskrete Reinigung außerhalb Ihrer Geschäftszeiten – von einem geschulten Team, das Ihre Sicherheitsvorgaben kennt. ISO-konforme Prozesse, umweltfreundliche Mittel, und ein Qualitätsstandard, der Ihre Mitarbeiter und Kunden beeindruckt.',
        proofPoint: 'Über 50 Unternehmen in Nordhessen setzen auf AKAN – von der Arztpraxis bis zum Produktionsbetrieb.',
        ctaLabel: 'Erstberatung vor Ort – kostenlos',
        ctaHref: '/contact?service=unterhaltsreinigung&segment=unternehmen',
        color: '#1E3A5F',
    },
    {
        id: 'bauunternehmer',
        icon: HardHat,
        tabLabel: 'Bauunternehmer',
        headline: 'Bauendreinigung – damit Ihr Projekt perfekt übergeben wird',
        subline: 'Wir machen aus Ihrer Baustelle ein übergabefertiges Objekt – termingerecht.',
        painPoints: [
            'Zeitdruck vor der Übergabe an den Bauherren',
            'Baufeinstaub in jeder Ecke und auf jeder Oberfläche',
            'Subunternehmer liefern unzureichende Qualität',
        ],
        solution: 'Von der Baugrobreinigung bis zur Baufeinreinigung: Wir kennen den Unterschied zwischen „fertig" und „übergabefertig". Termingerecht, gründlich, mit Abnahmegarantie. Unser Team ist in 48h einsatzbereit.',
        proofPoint: 'Dutzende Bauprojekte in Nordhessen erfolgreich zur Übergabe gebracht – vom Einfamilienhaus bis zum Gewerbeobjekt.',
        ctaLabel: 'Termin für Baubegehung vereinbaren',
        ctaHref: '/contact?service=bauendreinigung&segment=bauunternehmer',
        color: '#D6A848',
    },
    {
        id: 'privatkunden',
        icon: Home,
        tabLabel: 'Privatkunden',
        headline: 'Professionelle Reinigung für Ihr Zuhause',
        subline: 'Mehr Zeit für das, was wirklich wichtig ist.',
        painPoints: [
            'Zeitmangel für gründliche Grundreinigung',
            'Umzugsstress: Alte Wohnung muss übergeben werden',
            'Fenster in oberen Stockwerken nicht erreichbar',
        ],
        solution: 'Ob Grundreinigung, Umzugsreinigung oder regelmäßige Haushaltshilfe: Wir bringen die Erfahrung von über 200 gewerblichen Objekten in Ihr Zuhause – diskret, zuverlässig, und mit der Gründlichkeit, die nur ein Profi-Team liefert.',
        proofPoint: '4,9 Sterne auf Google. 95% unserer Privatkunden empfehlen uns weiter.',
        ctaLabel: 'Jetzt unverbindlich anfragen',
        ctaHref: '/contact?service=sonstiges&segment=privatkunde',
        color: '#22C55E',
    },
];

export default function TargetGroupFunnels() {
    const [activeTab, setActiveTab] = useState(0);
    const active = funnels[activeTab];

    return (
        <section className="py-section-lg bg-background relative overflow-hidden">
            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
                    style={{ background: `radial-gradient(circle, ${active?.color || '#9B1C2E'} 0%, transparent 70%)` }} />
            </div>

            <div className="container-fluid relative z-10">
                {/* Section Header */}
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" variants={fadeInUp}>
                    <span className="inline-block py-2 px-5 rounded-full bg-surface shadow-inner-glow text-primary text-mini font-bold tracking-[0.25em] uppercase mb-6 border border-primary/10">
                        Ihre Branche, unsere Lösung
                    </span>
                    <h2 className="text-h2 font-bold text-text-primary mb-6 font-display tracking-tight leading-[1.1]">
                        Maßgeschneidert für <span className="text-gradient-primary">Ihre Anforderungen</span>
                    </h2>
                    <p className="text-large font-light text-text-secondary leading-[1.8]">
                        Jede Branche hat eigene Herausforderungen. Wählen Sie Ihren Bereich – und erfahren Sie, wie wir genau Ihr Problem lösen.
                    </p>
                </AnimatedSection>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {funnels.map((funnel, i) => {
                        const Icon = funnel.icon;
                        const isActive = i === activeTab;
                        return (
                            <motion.button
                                key={funnel.id}
                                onClick={() => setActiveTab(i)}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 font-display ${isActive
                                        ? 'bg-primary text-white shadow-elevated'
                                        : 'bg-surface text-text-secondary border border-border hover:border-primary/30 hover:text-primary'
                                    }`}
                            >
                                <Icon className="w-4.5 h-4.5" />
                                {funnel.tabLabel}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Active Funnel Content */}
                <AnimatePresence mode="wait">
                    {active && (
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                            className="max-w-5xl mx-auto"
                        >
                            <div className="grid lg:grid-cols-2 gap-16 items-start">
                                {/* Left: Pain → Solution */}
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-display tracking-tight leading-tight">
                                        {active.headline}
                                    </h3>
                                    <p className="text-lg font-medium text-primary mb-10">
                                        {active.subline}
                                    </p>

                                    {/* Pain Points */}
                                    <div className="mb-10">
                                        <div className="flex items-center gap-2 mb-5">
                                            <AlertTriangle className="w-4 h-4 text-red-400" />
                                            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Typische Herausforderungen</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {active.painPoints.map((point, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + i * 0.1 }}
                                                    className="flex items-start gap-3 text-text-secondary"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                                    {point}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Solution */}
                                    <div className="mb-10">
                                        <div className="flex items-center gap-2 mb-5">
                                            <Sparkles className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-bold text-primary uppercase tracking-wider">Unsere Lösung</span>
                                        </div>
                                        <p className="text-text-secondary leading-relaxed">
                                            {active.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Social Proof + CTA */}
                                <div className="flex flex-col gap-8">
                                    {/* Social Proof Card */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="bg-surface p-8 rounded-[2rem] border border-border shadow-soft"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            <span className="text-sm font-bold text-primary uppercase tracking-wider">Bewiesene Ergebnisse</span>
                                        </div>
                                        <p className="text-text-primary font-medium leading-relaxed text-lg">
                                            {active.proofPoint}
                                        </p>
                                    </motion.div>

                                    {/* CTA Stack */}
                                    <div className="flex flex-col gap-4">
                                        <motion.div whileHover={{ scale: 1.02, y: -3 }} whileTap={{ scale: 0.98 }}>
                                            <Link
                                                href={active.ctaHref}
                                                className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary-hover text-white text-base font-bold py-5 px-8 rounded-xl shadow-elevated transition-all font-display"
                                            >
                                                {active.ctaLabel}
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </motion.div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <a
                                                href="tel:+4915234754386"
                                                className="flex items-center justify-center gap-2 bg-white border border-border text-text-primary hover:border-primary/40 hover:text-primary text-sm font-bold py-4 rounded-xl transition-all"
                                            >
                                                <Phone className="w-4 h-4" />
                                                Anrufen
                                            </a>
                                            <a
                                                href="https://wa.me/4915234754386?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20professionelle%20Reinigung."
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-bold py-4 rounded-xl transition-all hover:bg-[#20BD5A]"
                                            >
                                                <MessageCircle className="w-4 h-4" />
                                                WhatsApp
                                            </a>
                                        </div>
                                    </div>

                                    {/* Trust micro-badge */}
                                    <div className="text-center text-xs text-text-secondary font-medium flex items-center justify-center gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-trust-gold" />
                                        Kostenlos · Unverbindlich · Antwort innerhalb von 24h
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
