'use client';

import { motion } from 'motion/react';
import { UserX, TrendingDown, HeadphonesIcon } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/shared/styles/animations';

const painPoints = [
    {
        icon: UserX,
        title: 'Ständig wechselndes Personal',
        description: 'Sie wissen morgens nicht, wer heute durch Ihre Büros läuft. Kommunikation und Vertrauen leiden.'
    },
    {
        icon: TrendingDown,
        title: 'Schwankende Qualität',
        description: 'Am Anfang glänzte alles, doch nach wenigen Monaten sinkt der Standard spürbar ab.'
    },
    {
        icon: HeadphonesIcon,
        title: 'Anonymer Callcenter-Frust',
        description: 'Bei einem Notfall erreichen Sie erst nach Stunden jemanden – und dann keinen Entscheider.'
    }
];

export default function PainPointsSection() {
    return (
        <section className="py-24 bg-surface border-y border-border/40 relative overflow-hidden">
            <div className="container relative z-10 max-w-5xl mx-auto px-6">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-text-primary mb-6 tracking-tight">
                        Kennen Sie das auch?
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Die meisten unserer Kunden kommen zu uns, weil sie enttäuscht wurden. Die Partnerschaft mit der alten Reinigungsfirma begann gut, doch dann folgten die typischen Probleme.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-background p-8 rounded-[2rem] border border-border/50 shadow-sm relative group hover:shadow-elevated transition-shadow duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-100 transition-all duration-300">
                                <point.icon className="w-7 h-7 svg-draw-effect" />
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-3 font-display">{point.title}</h3>
                            <p className="text-text-secondary leading-relaxed">{point.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center relative p-8 rounded-3xl bg-primary/5 border border-primary/10 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-50" />
                    <p className="text-xl md:text-2xl font-bold text-primary relative z-10 font-display">
                        Das muss nicht so sein. Wir betrachten Reinigung als echtes Handwerk.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
