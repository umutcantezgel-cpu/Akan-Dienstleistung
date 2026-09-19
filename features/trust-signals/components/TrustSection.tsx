'use client';

import { ShieldCheck, Leaf, Users, CheckCircle2, HeartHandshake, Clock, CalendarCheck, Award } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/shared/components/AnimatedSection';
import { fadeInUp, staggerContainer } from '@/shared/styles/animations';
import Badge from '@/shared/components/Badge';

export default function TrustSection({
    statsComponents,
    testimonialsComponent
}: {
    statsComponents?: React.ReactNode[];
    testimonialsComponent?: React.ReactNode;
}) {
    const valueCards = [
        {
            title: 'Zufriedene Kunden',
            description: 'Persönliche Betreuung und schnelle Lösungen bei Ihren Anliegen.',
            icon: HeartHandshake,
        },
        {
            title: 'Zuverlässigkeit',
            description: 'Vereinbarte Termine und Absprachen werden strikt und verlässlich eingehalten.',
            icon: Clock,
        },
        {
            title: 'Flexibilität',
            description: 'Ausrichtung nach den Arbeitszeiten und betrieblichen Abläufen unserer Kunden.',
            icon: CalendarCheck,
        },
        {
            title: 'Langjährige Erfahrung',
            description: 'Fundiertes Know-how und praktische Erfahrung in der professionellen Objektbetreuung.',
            icon: Award,
        },
    ];

    return (
        <section className="py-section-lg bg-background relative overflow-hidden noise-overlay">
            {/* Top divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container-fluid relative z-10">

                {/* ── Certificates / Trust Badges ──────────────────────── */}
                <AnimatedSection className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-16" variants={staggerContainer} stagger>
                    {[
                        { label: 'Inhabergeführt', title: 'Inhabergeführter Reinigungsbetrieb aus Gudensberg', icon: Users, variant: 'trust' as const },
                        { label: 'Gewerbehaftpflicht versichert', title: 'Vollumfassend versicherter Betrieb', icon: ShieldCheck, variant: 'gold' as const },
                        { label: 'Ökologisch schonend', title: 'Wir verwenden umweltfreundliche, materialschonende Reinigungsmittel', icon: Leaf, variant: 'status' as const },
                        { label: 'Feste Ansprechpartner', title: 'Persönlicher Kontakt und direkte Betreuung vor Ort', icon: HeartHandshake, variant: 'trust' as const },
                    ].map((cert, idx) => (
                        <AnimatedItem key={idx} variants={fadeInUp} className="group">
                            <div title={cert.title}>
                                <Badge variant={cert.variant} size="lg" icon={<cert.icon className="w-4 h-4 svg-draw-effect" aria-hidden="true" />}>
                                    {cert.label}
                                </Badge>
                            </div>
                        </AnimatedItem>
                    ))}
                </AnimatedSection>

                {/* ── Headline & Intro ───────────────────────────────── */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <AnimatedSection variants={fadeInUp}>
                        <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini mb-3">Ihre Sicherheit</h2>
                        <h3 className="text-h2 font-bold text-text-primary leading-tight font-display mb-4">
                            Darauf können Sie sich <span className="text-gradient-primary">verlassen</span>
                        </h3>
                        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                            Hausverwaltungen und Unternehmen in der Region setzen auf unsere zuverlässige Gebäudereinigung – mit festen Abläufen, persönlichen Ansprechpartnern und hohen Qualitätsstandards.
                        </p>
                    </AnimatedSection>
                </div>

                {/* ── 4 Value Cards mit Häkchen ────────────────────────── */}
                <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" variants={staggerContainer} stagger>
                    {valueCards.map((card, idx) => (
                        <AnimatedItem key={idx} variants={fadeInUp}>
                            <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                        <card.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <h4 className="font-bold text-text-primary text-lg font-display">
                                            {card.title}
                                        </h4>
                                    </div>
                                    <p className="text-sm text-text-secondary leading-relaxed font-light">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </AnimatedItem>
                    ))}
                </AnimatedSection>

            </div>
        </section>
    );
}
