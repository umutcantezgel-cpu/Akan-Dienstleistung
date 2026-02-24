import Link from 'next/link';
import { Building2, HardHat, Sun, Factory, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedSection, { AnimatedItem } from '@/shared/components/AnimatedSection';
import { fadeInUp, springs } from '@/shared/styles/animations';

export default function ServicesSection() {
    return (
        <section className="py-section-lg bg-surface border-y border-border">
            <div className="container-fluid">
                <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10" variants={fadeInUp}>
                    <div className="max-w-3xl">
                        <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini mb-5">Unsere Expertise</h2>
                        <h3 className="text-h2 font-bold text-text-primary mb-6 leading-tight">Maßgeschneiderte <span className="text-primary">Reinigungskonzepte</span></h3>
                        <p className="text-text-secondary text-large font-light leading-relaxed max-w-2xl">
                            Wir bieten ein umfassendes Leistungsspektrum für gewerbliche und private Kunden, angepasst an Ihre individuellen Bedürfnisse.
                        </p>
                    </div>
                    <Link href="/services" className="text-tiny uppercase tracking-widest text-primary font-bold hover:text-primary-hover transition-colors flex items-center gap-3 group pb-2">
                        Alle Leistungen
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                </AnimatedSection>

                <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" stagger variants={fadeInUp}>
                    {[
                        { title: 'Unterhaltsreinigung', desc: 'Regelmäßige Pflege für Büros, Praxen und Kanzleien. Wir sorgen dauerhaft für ein repräsentatives Erscheinungsbild.', icon: Building2, link: '/services' },
                        { title: 'Fensterreinigung', desc: 'Streifenfreier Glanz für Fenster, Glasfassaden und Wintergärten. Klare Sicht für Ihre Räumlichkeiten.', icon: Sun, link: '/services' },
                        { title: 'Bauendreinigung', desc: 'Gründliche Reinigung nach Neubau oder Sanierung. Wir machen Ihre Immobilie bezugsfertig.', icon: HardHat, link: '/services' },
                        { title: 'Industriereinigung', desc: 'Spezialreinigung für Hallen und Produktionsstätten. Höchste Standards für Sicherheit und Hygiene.', icon: Factory, link: '/services' }
                    ].map((service, i) => (
                        <AnimatedItem key={i} variants={fadeInUp}>
                            <motion.div
                                whileHover={{
                                    y: -14,
                                    rotateX: 2,
                                    rotateY: -2,
                                    boxShadow: '0 32px 64px -16px rgba(155, 28, 46, 0.12), 0 16px 32px -8px rgba(0,0,0,0.08)',
                                }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ ...springs.snappy, duration: 0.4 }}
                                className="group bg-white rounded-2xl p-10 transition-all duration-300 border border-border h-full flex flex-col shadow-sm omega-3d-card"
                                style={{ perspective: 800, transformStyle: 'preserve-3d' }}
                            >
                                <div className="relative mb-8">
                                    <motion.div
                                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative z-10 w-16 h-16 bg-surface shadow-inner-glow rounded-xl flex items-center justify-center transition-colors duration-500 group-hover:bg-primary"
                                    >
                                        <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                                    </motion.div>
                                    <div className="absolute inset-0 w-16 h-16 rounded-xl bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-700 -z-10 scale-150" />
                                </div>

                                <h4 className="text-xl font-bold text-text-primary mb-4 tracking-tight">{service.title}</h4>
                                <p className="text-text-secondary mb-8 text-base font-light leading-relaxed flex-grow">{service.desc}</p>

                                <Link href={service.link} className="inline-flex items-center text-tiny uppercase tracking-widest font-bold text-primary group-hover:text-primary-hover transition-colors mt-auto">
                                    <span className="relative">
                                        Details
                                        <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-primary transition-all duration-500" />
                                    </span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                                </Link>
                            </motion.div>
                        </AnimatedItem>
                    ))}
                </AnimatedSection>
            </div>
        </section>
    );
}
