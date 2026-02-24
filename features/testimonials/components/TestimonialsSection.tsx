import AnimatedSection from '@/shared/components/AnimatedSection';
import TestimonialCarousel from '@/features/testimonials/components/TestimonialCarousel';
import { testimonials } from '@/config/site';
import { fadeInUp } from '@/shared/styles/animations';

export default function TestimonialsSection() {
    return (
        <section className="py-section-lg bg-background">
            <div className="container-fluid">
                <AnimatedSection className="text-center max-w-2xl mx-auto mb-20" variants={fadeInUp}>
                    <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini mb-5">Kundenstimmen</h2>
                    <h3 className="text-h2 font-bold text-text-primary leading-tight">Was unsere Kunden sagen</h3>
                </AnimatedSection>

                <AnimatedSection variants={fadeInUp}>
                    <TestimonialCarousel testimonials={testimonials} autoPlayInterval={6000} />
                </AnimatedSection>
            </div>
        </section>
    );
}
