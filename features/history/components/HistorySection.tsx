import { History } from 'lucide-react';
import AnimatedSection from '@/shared/components/AnimatedSection';
import Timeline from '@/features/timeline/components/Timeline';
import { timeline } from '@/config/site';
import { fadeInUp } from '@/shared/styles/animations';

export default function HistorySection() {
    return (
        <section className="py-section-lg bg-background">
            <div className="container-fluid">
                <AnimatedSection className="text-center max-w-2xl mx-auto mb-20" variants={fadeInUp}>
                    <div className="flex items-center justify-center gap-4 mb-5">
                        <History className="w-5 h-5 text-primary" />
                        <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini">Unsere Geschichte</h2>
                    </div>
                    <h3 className="text-h2 font-bold text-text-primary mb-6 leading-tight">
                        Von der <span className="text-primary">Vision</span> zur Realität
                    </h3>
                    <p className="text-text-secondary text-large font-light leading-relaxed">
                        Die Geschichte von AKAN — vom ersten Tag bis heute.
                    </p>
                </AnimatedSection>

                <Timeline events={timeline} />
            </div>
        </section>
    );
}
