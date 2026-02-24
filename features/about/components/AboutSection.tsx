import { motion } from 'motion/react';
import { Star, ShieldCheck, Clock, Users } from 'lucide-react';
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
                            AKAN Dienstleistung wurde 2024 von Cemal Hilaloglu in Gudensberg gegründet – mit einer klaren Vision: Reinigung auf höchstem Niveau anzubieten, bei der kein Detail übersehen wird.
                        </p>
                        <p className="text-text-secondary mb-12 leading-[1.8] font-light text-large">
                            Unsere Objektleiterin Zeynep Hilaloglu bringt zehn Jahre Erfahrung in der professionellen Reinigungsbranche mit. Diese Expertise, kombiniert mit unserem zehnköpfigen engagierten Team, macht AKAN zu Ihrem verlässlichen Partner.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.02, y: -4 }}
                            transition={springs.snappy}
                            className="flex items-center gap-6 p-8 bg-background rounded-3xl border border-border shadow-soft group hover:shadow-card transition-all duration-300"
                        >
                            <Image src="https://picsum.photos/100/100?random=4" alt="Team" width={80} height={80} className="rounded-full object-cover border-4 border-surface shadow-sm" />
                            <div>
                                <p className="text-text-primary font-bold text-lg tracking-tight">Zeynep &amp; Cemal Hilaloglu</p>
                                <p className="text-tiny uppercase tracking-wider text-text-secondary font-semibold mt-1">Ihre Ansprechpartner</p>
                            </div>
                        </motion.div>
                    </AnimatedSection>

                    <AnimatedSection variants={fadeInRight}>
                        <motion.div
                            whileHover={{ y: -4 }}
                            transition={springs.snappy}
                            className="bg-background rounded-[2.5rem] shadow-card p-10 lg:p-12 border border-border"
                        >
                            <h4 className="text-xl font-bold text-text-primary mb-10 pb-6 border-b border-border/60 tracking-tight">Ihre Vorteile auf einen Blick</h4>
                            <AnimatedSection as="div" className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6" stagger>
                                {[
                                    { icon: Star, title: '10 Jahre Erfahrung', desc: 'Durch unsere Objektleiterin Zeynep Hilaloglu.', iconColor: 'text-trust-gold' },
                                    { icon: ShieldCheck, title: 'Höchstes Niveau', desc: 'Kein Kompromiss bei der Qualität der Reinigung.', iconColor: 'text-primary' },
                                    { icon: Clock, title: 'Zuverlässig', desc: 'Pünktlich, vertrauenswürdig und diskret.', iconColor: 'text-primary' },
                                    { icon: Users, title: '10 Mitarbeiter', desc: 'Ihr geschultes und engagiertes Qualitätsteam.', iconColor: 'text-primary' },
                                ].map((item, i) => (
                                    <AnimatedItem key={i} variants={fadeInUp}>
                                        <div className="flex gap-4 group">
                                            <motion.div
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.5 }}
                                                className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface flex items-center justify-center"
                                            >
                                                <item.icon className={`${item.iconColor} w-5 h-5`} />
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
