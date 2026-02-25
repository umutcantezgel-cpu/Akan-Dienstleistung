'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, Building2, Calendar, CheckCircle2, Clock, CalendarDays, BarChart } from 'lucide-react';
import Button from '@/shared/components/Button';
import ImagePlaceholder from '@/shared/components/ImagePlaceholder';
import { springs, staggerContainer, fadeInUp } from '@/shared/styles/animations';
import type { ServiceDetail } from '../data/serviceDetails';

interface Props {
    service: ServiceDetail;
}

type IntervalType = 'daily' | 'weekly' | 'custom';

// Interactive Interval Configurator
function IntervalConfigurator() {
    const [selectedInterval, setSelectedInterval] = useState<IntervalType>('daily');

    const intervals = [
        { id: 'daily', icon: Clock, title: 'Täglich', desc: 'Für hochfrequentierte Bereiche & Arztpraxen', color: 'text-rose-500', bg: 'bg-rose-50' },
        { id: 'weekly', icon: CalendarDays, title: 'Wöchentlich', desc: 'Für normale Büros & Kanzleien', color: 'text-amber-500', bg: 'bg-amber-50' },
        { id: 'custom', icon: BarChart, title: 'Individuell', desc: 'Smarte Intervalle nach Auslastung', color: 'text-primary', bg: 'bg-primary/10' },
    ] as const;

    const intervalContent = {
        daily: [
            "Tägliche Müllentsorgung und Desinfektion",
            "Sanitäranlagen-Spezialreinigung",
            "Griffspuren- & Oberflächenreinigung",
            "Täglicher Küchen- & Pausenraum-Service"
        ],
        weekly: [
            "Grundreinigung der Arbeitsplätze",
            "Staubsaugen & Feuchtwischen",
            "Treppenhaus & Empfangsbereich",
            "Spinnweben & Fensterbänke"
        ],
        custom: [
            "Sensorbasierte Reinigungsplanung",
            "Fokus auf Meeting-Räume nach Nutzung",
            "Saisonale Anpassungen (Winter/Schmutzfang)",
            "Budget-optimierte Intervalle"
        ]
    };

    return (
        <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-card border border-border/40 mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center font-display">Wählen Sie Ihren Reinigungs-Rhythmus</h3>

            {/* Tabs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 relative z-10 p-2 bg-surface rounded-2xl">
                {intervals.map((interval) => {
                    const isActive = selectedInterval === interval.id;
                    const Icon = interval.icon;
                    return (
                        <button
                            key={interval.id}
                            onClick={() => setSelectedInterval(interval.id)}
                            className={`flex-1 relative flex flex-col items-center p-4 rounded-xl transition-colors duration-300 ${isActive ? 'text-primary' : 'text-text-secondary hover:bg-white/50'}`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="intervalTab"
                                    className="absolute inset-0 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-border/50"
                                    transition={springs.gentle}
                                />
                            )}
                            <div className="relative z-10 flex flex-col items-center">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${isActive ? interval.bg : 'bg-transparent'} transition-colors duration-300`}>
                                    <Icon className={`w-6 h-6 ${isActive ? interval.color : 'text-text-secondary'}`} />
                                </div>
                                <span className="font-bold mb-1">{interval.title}</span>
                                <span className="text-xs text-center opacity-80">{interval.desc}</span>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Content Change with Layout Animation */}
            <div className="relative min-h-[220px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedInterval}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="grid sm:grid-cols-2 gap-4"
                    >
                        {intervalContent[selectedInterval].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 bg-surface/50 p-4 rounded-xl border border-border/30">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-text-secondary font-medium">{feature}</span>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <div className="mt-10 flex justify-center">
                    <Button href="/contact" size="lg" className="bg-primary text-white shadow-elevated">
                        Diesen Rhythmus anfragen
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default function UnterhaltsreinigungTemplate({ service }: Props) {
    return (
        <article className="bg-background text-text-primary overflow-hidden min-h-screen">
            {/* Flowing CSS Pattern Background */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            {/* 1. Hero */}
            <header className="relative pt-40 pb-32 lg:pt-48 lg:pb-32 overflow-hidden bg-surface isolation-isolate">
                <div className="container-fluid relative z-10">
                    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-4xl mx-auto text-center">
                        <motion.div variants={fadeInUp} className="mb-8">
                            <Link href="/leistungen" className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 rounded-sm">
                                <ArrowLeft className="w-4 h-4" />
                                Zurück zu Services
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white text-primary mb-8 shadow-card border border-border/50">
                            <Building2 className="w-10 h-10" />
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-black text-text-primary uppercase tracking-tighter mb-6 font-display">
                            Der unsichtbare <br /> <span className="text-primary italic">Rhythmus.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-text-secondary font-medium tracking-wide mb-12 text-measure mx-auto">
                            {service.subtitle}
                        </motion.p>
                    </motion.div>
                </div>
            </header>

            {/* 2. Configurator Section */}
            <section className="py-24 bg-background relative z-10 border-y border-border/40">
                <div className="container-fluid">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold font-display">Maßgeschneiderte Reinigungszyklen</h2>
                        <p className="text-text-secondary max-w-2xl mx-auto mt-4">{service.description}</p>
                    </div>

                    <IntervalConfigurator />
                </div>
            </section>

            {/* 3. Consistency Metaphor */}
            <section className="py-32 bg-primary text-white relative overflow-hidden">
                {/* Flowing background shapes representing constant rhythm */}
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex"
                >
                    <div className="w-[200vw] h-full bg-[url('/wave-pattern.svg')] opacity-10 bg-repeat-x bg-[length:100vw_100%]" />
                </motion.div>

                <div className="container-fluid relative z-10 max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                            <ImagePlaceholder alt="Sauberes Büro" fill className="object-cover" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold mb-6 italic tracking-tight font-display">&bdquo;Qualität ist kein Akt, sondern eine Gewohnheit.&ldquo;</h2>
                            <p className="text-white/80 text-lg mb-8 leading-relaxed">
                                Unterhaltsreinigung bedeutet für uns nicht das Löschen von Bränden, sondern das Schaffen einer verlässlichen Basis. Unsere fest zugeteilten Objektleiter garantieren, dass unser hoher Standard nicht am ersten Tag glänzt, sondern am 100sten.
                            </p>
                            <ul className="space-y-4">
                                {service.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex gap-4 p-5 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10">
                                        <Calendar className="w-6 h-6 shrink-0 text-white/70" />
                                        <div>
                                            <span className="font-bold block mb-1">{benefit.title}</span>
                                            <span className="text-white/70 text-sm leading-relaxed">{benefit.description}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
