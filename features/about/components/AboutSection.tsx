import { motion } from 'motion/react';
import { Star, ShieldCheck, Clock, Users, CheckCircle2, Award } from 'lucide-react';
import ImagePlaceholder from '@/shared/components/ImagePlaceholder';
import Image from 'next/image';
import AnimatedSection, { AnimatedItem } from '@/shared/components/AnimatedSection';
import { fadeInLeft, fadeInRight, fadeInUp, springs } from '@/shared/styles/animations';

export default function AboutSection() {
    return (
        <section className="py-section-lg bg-surface border-y border-border relative overflow-hidden">
            <div className="container-fluid relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <AnimatedSection variants={fadeInLeft}>
                        <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini mb-5">Warum AKAN</h2>
                        <h3 className="text-h2 font-bold text-text-primary mb-6 leading-tight">Sauberkeit aus <span className="text-primary">Leidenschaft.</span></h3>
                        <p className="text-text-secondary mb-6 leading-[1.8] font-light text-large">
                            AKAN Dienstleistung wurde von Cemal Hilaloglu in Gudensberg gegründet – mit einer klaren Vision: Verlässliche Gebäudereinigung auf höchstem handwerklichen Niveau anzubieten, bei der jedes Detail zählt.
                        </p>
                        <p className="text-text-secondary mb-12 leading-[1.8] font-light text-large">
                            Unsere Objektleiterin Zeynep Hilaloglu bringt langjährige praktische Erfahrung in Reinigung und Objektorganisation mit und ist persönlich für Sie vor Ort im Einsatz. Diese Praxiserfahrung, kombiniert mit unserem motivierten Team, macht AKAN zu Ihrem verlässlichen Partner in Nordhessen.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.02, y: -4 }}
                            transition={springs.snappy}
                            className="flex items-center gap-6 p-5 sm:p-8 bg-background rounded-3xl border border-border shadow-soft group hover:shadow-card transition-all duration-300"
                        >
                            <ImagePlaceholder width={80} height={80} alt="Cemal und Zeynep Hilaloglu – AKAN Dienstleistung" className="rounded-full object-cover border-4 border-surface shadow-sm" originalSrc="/images/galerie/fensterreinigung/akan-glasreinigung-mitarbeiter-branded-hoodie.webp" />
                            <div>
                                <p className="text-text-primary font-bold text-lg tracking-tight">Cemal &amp; Zeynep Hilaloglu</p>
                                <p className="text-tiny uppercase tracking-wider text-text-secondary font-semibold mt-1">Inhaber &amp; Objektleitung</p>
                            </div>
                        </motion.div>
                    </AnimatedSection>

                    <AnimatedSection variants={fadeInRight}>
                        <motion.div
                            whileHover={{ y: -4 }}
                            transition={springs.snappy}
                            className="bg-background rounded-[2.5rem] shadow-card p-6 sm:p-10 lg:p-12 border border-border"
                        >
                            <h4 className="text-xl font-bold text-text-primary mb-10 pb-6 border-b border-border/60 tracking-tight">Das Fundament unserer Arbeit</h4>
                            <AnimatedSection as="div" className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6" stagger>
                                {[
                                    { icon: Star, title: 'Langjährige Erfahrung', desc: 'Fundiertes Handwerk und Praxis-Know-how für jedes Objekt.', iconColor: 'text-trust-gold' },
                                    { icon: ShieldCheck, title: 'Höchste Qualität', desc: 'Gründliche, kontrollierte Sauberkeit mit modernen Geräten.', iconColor: 'text-primary' },
                                    { icon: Clock, title: 'Zuverlässigkeit', desc: 'Pünktlich, diskret und absolut verbindlich bei jedem Einsatz.', iconColor: 'text-accent' },
                                    { icon: Users, title: 'Geschultes Team', desc: 'Feste Ansprechpartner mit geschultem Blick für Sauberkeit.', iconColor: 'text-primary' },
                                ].map((item, i) => (
                                    <AnimatedItem key={i} variants={fadeInUp}>
                                        <div className="flex gap-4 group">
                                            <motion.div
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.5 }}
                                                className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface flex items-center justify-center"
                                            >
                                                <item.icon className={`${item.iconColor} w-5 h-5 svg-draw-effect`} />
                                            </motion.div>
                                            <div>
                                                <h5 className="font-bold text-text-primary text-sm mb-1">{item.title}</h5>
                                                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </AnimatedItem>
                                ))}
                            </AnimatedSection>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
