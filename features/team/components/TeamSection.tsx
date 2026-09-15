import { Users } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/shared/components/AnimatedSection';
import TeamCard from '@/features/team/components/TeamCard';
import { team } from '@/config/site';
import { fadeInUp } from '@/shared/styles/animations';

export default function TeamSection() {
    return (
        <section className="py-section-lg bg-surface border-y border-border">
            <div className="container-fluid">
                <AnimatedSection className="text-center max-w-2xl mx-auto mb-20" variants={fadeInUp}>
                    <div className="flex items-center justify-center gap-4 mb-5">
                        <Users className="w-5 h-5 text-primary" />
                        <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini">Unser Team</h2>
                    </div>
                    <h3 className="text-h2 font-bold text-text-primary mb-6 leading-tight">
                        Die Menschen hinter <span className="text-primary">AKAN</span>
                    </h3>
                    <p className="text-text-secondary text-large font-light leading-relaxed">
                        Lernen Sie die Köpfe kennen, die für makellose Sauberkeit sorgen.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto" stagger>
                    {team.map((member, i) => (
                        <AnimatedItem key={i} variants={fadeInUp}>
                            <TeamCard member={member} />
                        </AnimatedItem>
                    ))}
                </AnimatedSection>
            </div>
        </section>
    );
}
