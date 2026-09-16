import { History } from 'lucide-react';
import AnimatedSection from '@/shared/components/AnimatedSection';
import { fadeInUp } from '@/shared/styles/animations';

export default function HistorySection({ timelineComponent }: { timelineComponent?: React.ReactNode }) {
    return (
        <section className="py-section-lg bg-background overflow-hidden">
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

                {timelineComponent}
            </div>
        </section>
    );
}
