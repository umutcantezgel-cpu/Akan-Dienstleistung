import Script from 'next/script';
import { HelpCircle, Phone } from 'lucide-react';
import AnimatedSection from '@/shared/components/AnimatedSection';
import Accordion from '@/shared/components/Accordion';
import { faqs } from '@/config/site';
import { fadeInLeft, fadeInRight } from '@/shared/styles/animations';

export default function FaqSection() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <section className="py-section-lg bg-surface border-y border-border">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <AnimatedSection variants={fadeInLeft}>
                        <div className="flex items-center gap-4 mb-5">
                            <HelpCircle className="w-5 h-5 text-primary" />
                            <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-mini">FAQ</h2>
                        </div>
                        <h3 className="text-h2 font-bold text-text-primary mb-6 leading-tight font-display">
                            Ihre Fragen, <span className="text-primary">ehrlich beantwortet</span>
                        </h3>
                        <p className="text-text-secondary text-large font-light leading-[1.8] mb-12">
                            Transparenz ist kein Trend – sie ist unser Fundament. Hier finden Sie die Antworten, die Sie vor einer Entscheidung brauchen.
                        </p>
                        <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-border">
                            <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                            <div>
                                <p className="font-bold text-text-primary text-sm">Noch Fragen?</p>
                                <a href="tel:+4915234754386" className="text-sm text-primary font-semibold hover:text-primary-hover transition-colors">
                                    Rufen Sie uns an: 0152 34754386
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection variants={fadeInRight}>
                        <Accordion items={faqs} />
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
