'use client';

import { CheckCircle2, ShieldCheck, MapPin, Clock } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/shared/components/AnimatedSection';
import { fadeInUp, staggerContainer } from '@/shared/styles/animations';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-09 — CTA Section (Split Layout)
// High-conversion split layout: Benefits/Trust (Left) + Direct Form (Right)
// ═══════════════════════════════════════════════════════════

export default function CtaSection({ contactForm }: { contactForm?: React.ReactNode }) {
    return (
        <section className="relative py-section-lg bg-surface overflow-hidden border-t border-border">
            {/* Ambient Base Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="container-fluid relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

                    {/* Left: Headline, Benefits, Trust */}
                    <div className="w-full lg:w-5/12 shrink-0">
                        <AnimatedSection variants={fadeInUp} className="mb-10 text-center lg:text-left">
                            <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini mb-4">Angebot anfordern</h2>
                            <h3 className="text-h2 font-bold text-text-primary leading-tight font-display mb-6">
                                Lassen Sie uns <span className="text-gradient-primary">starten</span>
                            </h3>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                Sie benötigen eine zuverlässige Gebäudereinigung? Kontaktieren Sie uns gerne für ein unverbindliches Erstgespräch. Auf Wunsch besichtigen wir Ihr Objekt kostenlos vor Ort und erstellen Ihnen ein individuelles Angebot.
                            </p>
                        </AnimatedSection>

                        {/* Benefits List */}
                        <AnimatedSection as="ul" className="space-y-6 mb-12 hidden md:block lg:block" variants={staggerContainer} stagger>
                            {[
                                { title: 'Kostenlose Erstbegehung', desc: 'Wir schauen uns Ihr Objekt und den gewünschten Reinigungsumfang persönlich an.' },
                                { title: 'Individuelles Angebot', desc: 'Abgestimmt auf Ihr Objekt und Ihre individuellen Anforderungen.' },
                                { title: 'Persönlicher Ansprechpartner', desc: 'Bei Fragen sind wir direkt und unkompliziert für Sie erreichbar.' },
                            ].map((benefit, i) => (
                                <AnimatedItem key={i} as="li" variants={fadeInUp}>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1 border border-primary/20">
                                            <CheckCircle2 className="text-primary w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="block text-text-primary font-bold text-lg mb-1">{benefit.title}</span>
                                            <span className="block text-text-secondary text-sm">{benefit.desc}</span>
                                        </div>
                                    </div>
                                </AnimatedItem>
                            ))}
                        </AnimatedSection>

                        {/* Guarantee / Trust Footer */}
                        <AnimatedSection variants={fadeInUp} className="pt-8 border-t border-border flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-surface shadow-sm border border-border flex items-center justify-center text-trust-gold">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-text-primary">Inhabergeführt</p>
                                    <p className="text-text-secondary text-xs">Höchste Sorgfalt</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-surface shadow-sm border border-border flex items-center justify-center text-primary">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-text-primary">Kurze Reaktionszeit</p>
                                    <p className="text-text-secondary text-xs">Schnelle Rückmeldung</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-surface shadow-sm border border-border flex items-center justify-center text-text-primary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-text-primary">Regional</p>
                                    <p className="text-text-secondary text-xs">Gudensberg &amp; Region</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Right: Contact Form Embedded */}
                    <div className="w-full lg:w-7/12 min-w-0 max-w-full">
                        <AnimatedSection variants={fadeInUp} className="w-full relative h-full flex flex-col min-w-0">
                            <div className="w-full relative overflow-hidden flex-grow flex flex-col justify-center min-w-0">
                                {/* The actual form */}
                                {contactForm}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
