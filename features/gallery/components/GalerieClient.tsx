'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { Camera, ArrowRight } from 'lucide-react';
import GalleryGrid, { type GalleryImage } from '@/features/gallery/components/GalleryGrid';
import AnimatedSection from '@/shared/components/AnimatedSection';
import { fadeInUp } from '@/shared/styles/animations';

const galleryImages: GalleryImage[] = [
    { src: 'https://picsum.photos/800/600?random=20', title: 'Bauendreinigung Wohnkomplex Kassel', category: 'Bauendreinigung' },
    { src: 'https://picsum.photos/800/600?random=21', title: 'Fensterreinigung Bürogebäude', category: 'Fensterreinigung' },
    { src: 'https://picsum.photos/800/600?random=22', title: 'Unterhaltsreinigung Arztpraxis', category: 'Unterhaltsreinigung' },
    { src: 'https://picsum.photos/800/600?random=23', title: 'Industriereinigung Lagerhalle', category: 'Industriereinigung' },
    { src: 'https://picsum.photos/800/600?random=24', title: 'Treppenhausreinigung', category: 'Unterhaltsreinigung' },
    { src: 'https://picsum.photos/800/600?random=25', title: 'Glasfassade nach Reinigung', category: 'Fensterreinigung' },
    { src: 'https://picsum.photos/800/600?random=26', title: 'Büroreinigung nach Feierabend', category: 'Unterhaltsreinigung' },
    { src: 'https://picsum.photos/800/600?random=27', title: 'Grundreinigung Produktionshalle', category: 'Industriereinigung' },
    { src: 'https://picsum.photos/800/600?random=28', title: 'Neubau-Feinreinigung', category: 'Bauendreinigung' },
];

export default function GalerieClient() {
    return (
        <>
            <section className="bg-background pt-32 pb-20 lg:pt-48 lg:pb-24 border-b border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-transparent pointer-events-none"></div>
                <div className="container-fluid text-center relative z-10">
                    <AnimatedSection variants={fadeInUp}>
                        <div className="inline-flex items-center justify-center gap-3 px-5 py-2 rounded-full bg-surface border border-border mb-8 shadow-inner-glow">
                            <Camera className="w-4 h-4 text-primary" />
                            <span className="text-primary font-bold tracking-[0.25em] uppercase text-mini">Referenzen</span>
                        </div>
                        <h1 className="text-h1 font-bold text-text-primary mb-8 font-display tracking-tighter leading-[1.05] drop-shadow-sm">
                            Unsere <span className="text-primary">Galerie</span>
                        </h1>
                        <p className="text-large font-light text-text-secondary max-w-2xl mx-auto leading-[1.8]">
                            Ein Bild sagt mehr als tausend Worte. Überzeugen Sie sich selbst von der Qualität unserer Arbeit in Gudensberg und Umgebung.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-section-lg bg-surface border-y border-border">
                <div className="container-fluid">
                    <Suspense fallback={<div className="h-96 flex items-center justify-center text-text-secondary">Galerie wird geladen...</div>}>
                        <GalleryGrid images={galleryImages} />
                    </Suspense>

                    <AnimatedSection className="mt-24 text-center" variants={fadeInUp}>
                        <h3 className="text-h2 font-bold text-text-primary mb-10 font-display tracking-tight leading-[1.1]">Überzeugt von unserer Qualität?</h3>
                        <Link
                            href="/contact"
                            className="inline-flex justify-center items-center gap-3 px-10 py-5 text-base font-bold tracking-wide rounded-xl text-white bg-primary hover:bg-primary-hover shadow-elevated transition-all hover:-translate-y-1 font-display group"
                        >
                            Kostenloses Angebot anfordern
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
