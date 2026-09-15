import Link from 'next/link';
import { Building2, HardHat, Sun, Factory, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedSection, { AnimatedItem } from '@/shared/components/AnimatedSection';
import { fadeInUp, springs } from '@/shared/styles/animations';
import ServiceCard from '@/shared/components/ServiceCard';

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
                    <Link href="/leistungen" className="text-tiny uppercase tracking-widest text-primary font-bold hover:text-primary-hover transition-colors flex items-center gap-3 group pb-2">
                        Alle Leistungen
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                </AnimatedSection>

                <AnimatedSection className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:grid md:grid-fluid-columns md:overflow-visible md:snap-none pb-8 md:pb-0 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" stagger variants={fadeInUp}>
                    {[
                        { title: 'Unterhaltsreinigung', desc: 'Makellose Räume für Ihr Unternehmen. Dauerhaft repräsentatives Erscheinungsbild für weniger als einen Kaffee pro Tag / m².', icon: Building2, link: '/leistungen/unterhaltsreinigung' },
                        { title: 'Fensterreinigung', desc: 'Streifenfreier Glanz für Fenster, Glasfassaden und Wintergärten. Klare Sicht, die bei Partnern und Kunden Vertrauen schafft.', icon: Sun, link: '/leistungen/fensterreinigung' },
                        { title: 'Bauendreinigung', desc: 'Gründliche Reinigung nach Neubau oder Sanierung. Wir machen Ihre Immobilie schnell, sicher und bezugsfertig.', icon: HardHat, link: '/leistungen/bauendreinigung' },
                        { title: 'Industriereinigung', desc: 'Spezialreinigung für Hallen und Produktionsstätten. Höchste Standards für maximale Sicherheit, Hygiene und Werterhalt.', icon: Factory, link: '/leistungen/industriereinigung' }
                    ].map((service, i) => (
                        <AnimatedItem key={i} variants={fadeInUp} className="flex-none w-[80%] sm:w-[60%] md:w-auto md:flex-1 snap-center min-h-full">
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
    );
}
