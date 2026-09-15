'use client';

import { ShieldCheck, Award, ThumbsUp, Leaf } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/shared/components/AnimatedSection';
import { fadeInUp, staggerContainer } from '@/shared/styles/animations';
import Badge from '@/shared/components/Badge';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-16 — TrustSection Organism
// Merges Stats, Certificates, and Testimonials into a unified
// premium trust-building segment.
// ═══════════════════════════════════════════════════════════

export default function TrustSection({
    statsComponents,
    testimonialsComponent
}: {
    statsComponents?: React.ReactNode[];
    testimonialsComponent?: React.ReactNode;
}) {
    return (
        <section className="py-section bg-background relative overflow-hidden noise-overlay">
            {/* Top divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container-fluid relative z-10">

                {/* ── Certificates / Trust Badges ──────────────────────── */}
                <AnimatedSection className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-16" variants={staggerContainer} stagger>
                    {[
                        { label: 'Meisterbetrieb', title: 'Geprüfter Meisterbetrieb im Gebäudereiniger-Handwerk', icon: ShieldCheck, variant: 'trust' as const },
                        { label: 'ISO 9001 Zertifiziert', title: 'Zertifiziertes Qualitätsmanagement nach ISO 9001', icon: Award, variant: 'gold' as const },
                        { label: 'Ökologisch Nachhaltig', title: 'Wir verwenden umweltfreundliche, biologisch abbaubare Reinigungsmittel', icon: Leaf, variant: 'status' as const },
                        { label: 'Top Bewertet', title: 'Über 200+ zufriedene Stammkunden', icon: ThumbsUp, variant: 'trust' as const },
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

                {/* ── Split Layout: Stats & Testimonials ───────────────── */}
                <div className="flex flex-col xl:flex-row gap-12 sm:gap-16 lg:gap-20 xl:gap-24 items-center">

                    {/* Left: Stats Grid */}
                    <div className="w-full xl:w-5/12 shrink-0">
                        <AnimatedSection variants={fadeInUp} className="mb-8 sm:mb-10 text-center xl:text-left">
                            <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini mb-3">Ihre Sicherheit</h2>
                            <h3 className="text-h2 font-bold text-text-primary leading-tight font-display mb-4 sm:mb-6">
                                Fakten, die <span className="text-gradient-primary">Vertrauen</span> schaffen
                            </h3>
                            <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mx-auto xl:mx-0">
                                Wir lassen Taten sprechen. Unsere Zahlen belegen unser Engagement für Sauberkeit, Zuverlässigkeit und höchste Kundenzufriedenheit.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8" stagger>
                            {statsComponents?.map((StatItem, idx) => (
                                <AnimatedItem key={idx} variants={fadeInUp}>
                                    {StatItem}
                                </AnimatedItem>
                            ))}
                        </AnimatedSection>
                    </div>

                    {/* Right: Testimonial Carousel */}
                    <div className="w-full xl:w-7/12 min-w-0">
                        <AnimatedSection variants={fadeInUp} className="mb-6 sm:mb-8 text-center xl:text-left">
                            <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini mb-3">Kundenstimmen</h2>
                            <h3 className="text-h3 font-bold text-text-primary leading-tight mb-2">
                                Was unsere Kunden sagen
                            </h3>
                        </AnimatedSection>

                        <AnimatedSection variants={fadeInUp} className="w-full relative">
                            {/* Premium Glow Blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-3/4 bg-primary/10 dark:bg-primary/5 blur-[100px] rounded-full pointer-events-none z-0" aria-hidden="true" />

                            {/* Container for Carousel */}
                            <div className="w-full relative z-10">
                                {testimonialsComponent}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>

            </div>
        </section>
    );
}
