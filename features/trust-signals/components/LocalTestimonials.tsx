'use client';

import { testimonials } from '@/config/site';
import TestimonialCard from '@/shared/components/TestimonialCard';
import { motion } from 'motion/react';
import { fadeInUp, staggerContainer } from '@/shared/styles/animations';

interface LocalTestimonialsProps {
    city?: string;
}

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-17 — LocalTestimonials Organism
// 3D-tilted testimonial cards filtered by city for local SEO.
// ═══════════════════════════════════════════════════════════

export default function LocalTestimonials({ city }: LocalTestimonialsProps) {
    // URL-basierte Filterung: Zeige lokale Bewertungen für die aktuelle Stadt zuerst
    const local = city
        ? testimonials.filter(t => t.role.toLowerCase().includes(city.toLowerCase()))
        : [];
    const others = testimonials.filter(t => !local.includes(t));
    const displayTestimonials = [...local, ...others].slice(0, 3);

    return (
        <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
        >
            {displayTestimonials.map((testimonial, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="h-full">
                    <TestimonialCard
                        author={testimonial.author}
                        role={testimonial.role}
                        text={testimonial.text}
                        rating={testimonial.rating}
                        badge={testimonial.badge}
                        delay={idx * 0.1}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
}
