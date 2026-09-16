import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/shared/components/AnimatedSection';
import { fadeInLeft, fadeInRight, fadeInUp } from '@/shared/styles/animations';

export default function ProofSection({ galleryComponent }: { galleryComponent?: React.ReactNode }) {
    return (
        <section className="py-section-lg bg-background overflow-hidden">
            <div className="container-fluid">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <AnimatedSection className="w-full lg:w-5/12" variants={fadeInLeft}>
                        <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini mb-5">Visueller Beweis</h2>
                        <h3 className="text-h2 font-bold text-text-primary mb-6 leading-tight">Der <span className="text-primary">AKAN</span> Unterschied</h3>
                        <p className="text-text-secondary mb-10 leading-[1.8] font-light text-large max-w-xl">
                            Ein Bild sagt mehr als tausend Worte. Unsere professionelle Reinigung transformiert Räume,
                            verlängert die Lebensdauer von Bodenbelägen und schafft eine Atmosphäre, in der man sich wohlfühlt.
                        </p>
                        <AnimatedSection as="ul" className="space-y-4 mb-10" stagger delay={0.2}>
                            {['Entfernung hartnäckiger Verschmutzungen', 'Werterhalt Ihrer Immobilie', 'Hygienische Tiefenreinigung'].map((item, i) => (
                                <AnimatedItem key={i} as="li" variants={fadeInUp}>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-4 mt-0.5">
                                            <CheckCircle2 className="text-accent w-4 h-4" />
                                        </div>
                                        <span className="text-text-primary font-semibold">{item}</span>
                                    </div>
                                </AnimatedItem>
                            ))}
                        </AnimatedSection>
                        <Link href="/referenzen" className="text-primary font-bold hover:text-primary-hover transition-colors flex items-center gap-2 group w-fit">
                            Zur vollständigen Galerie
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>

                    <AnimatedSection className="w-full lg:w-7/12 min-w-0 max-w-full overflow-hidden" variants={fadeInRight} delay={0.3}>
                        {galleryComponent}
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
