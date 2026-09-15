'use client';

import { testimonials } from '@/config/site';
import TestimonialCard from '@/shared/components/TestimonialCard';
import MagneticTilt from '@/shared/components/MagneticTilt';
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
    // URL-basierte Filterung: Zeige Bewertungen passend zur aktuellen Stadt
    const filteredTestimonials = city
        ? testimonials.filter(t => t.role.toLowerCase().includes(city.toLowerCase()))
        : [];

    // Fallback: Zeige allgemeine Bewertungen wenn keine stadtspezifischen (oder nicht genug) vorhanden
    const displayTestimonials = filteredTestimonials.length >= 3
        ? filteredTestimonials.slice(0, 3)
        : testimonials.slice(0, 3); // Fallback zu den generischen top bewerteten

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
                    {/* 3D-Kipp-Animation (Tilt-Effect) */}
                    <MagneticTilt maxTilt={8} depth={20} className="h-full w-full">
                        <TestimonialCard
                            author={testimonial.author}
                            role={testimonial.role}
                            text={testimonial.text}
                            rating={testimonial.rating}
                            delay={idx * 0.1}
                        />
                    </MagneticTilt>
                </motion.div>
            ))}
        </motion.div>
    );
}
