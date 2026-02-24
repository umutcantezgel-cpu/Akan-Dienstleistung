import { TrendingUp } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/shared/components/AnimatedSection';
import StatsRing from '@/features/stats/components/StatsRing';
import { fadeInUp } from '@/shared/styles/animations';

export default function StatsSection() {
    return (
        <section className="py-section-lg bg-background relative overflow-hidden noise-overlay">
            <div className="container-fluid relative z-10">
                <AnimatedSection className="text-center max-w-2xl mx-auto mb-20" variants={fadeInUp}>
                    <div className="flex items-center justify-center gap-4 mb-5">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini">Leistungskennzahlen</h2>
                    </div>
                    <h3 className="text-h2 font-bold text-text-primary mb-6 leading-tight font-display">
                        Fakten, die <span className="text-gradient-primary">Vertrauen</span> schaffen
                    </h3>
                </AnimatedSection>

                <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8" stagger>
                    <AnimatedItem variants={fadeInUp}>
                        <StatsRing value={98} label="Kundenbindung" color="#9B1C2E" />
                    </AnimatedItem>
                    <AnimatedItem variants={fadeInUp}>
                        <StatsRing value={200} maxValue={200} suffix="+" label="Betreute Objekte" color="#E85D75" />
                    </AnimatedItem>
                    <AnimatedItem variants={fadeInUp}>
                        <StatsRing value={100} label="Terminzuverlässigkeit" color="#FFD700" />
                    </AnimatedItem>
                    <AnimatedItem variants={fadeInUp}>
                        <StatsRing value={10} maxValue={10} suffix="+" label="Jahre Erfahrung" color="#22C55E" />
                    </AnimatedItem>
                </AnimatedSection>
            </div>
        </section>
    );
}
