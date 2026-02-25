'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { Camera, ArrowRight } from 'lucide-react';
import GalleryGrid, { type GalleryImage } from '@/features/gallery/components/GalleryGrid';

const galleryImages: GalleryImage[] = [
    { src: '/images/galerie/industriereinigung/akan-deckenventilator-reinigung-industriehalle-vorher.webp', title: 'Deckenventilator-Reinigung Industriehalle', category: 'Industriereinigung' },
    { src: '/images/galerie/fensterreinigung/akan-fensterreinigung-fensterfront-komplett-sauber.webp', title: 'Fensterfront komplett sauber', category: 'Fensterreinigung' },
    { src: '/images/galerie/industriereinigung/akan-industriehalle-reinigung-krananlage-perspektive.webp', title: 'Industriehalle Krananlage — Perspektive', category: 'Industriereinigung' },
    { src: '/images/galerie/fensterreinigung/akan-fensterreinigung-panoramafenster-bergblick-ergebnis.webp', title: 'Panoramafenster mit Bergblick — Ergebnis', category: 'Fensterreinigung' },
    { src: '/images/galerie/industriereinigung/akan-pvc-streifenvorhang-gereinigt-industrieanlage.webp', title: 'PVC-Streifenvorhang gereinigt', category: 'Industriereinigung' },
    { src: '/images/galerie/gewerbereinigung/akan-gewerbereinigung-glasfassade-gebaeude-aussen.webp', title: 'Glasfassade Gewerbegebäude — Außenansicht', category: 'Fensterreinigung' },
    { src: '/images/galerie/fensterreinigung/akan-glasreinigung-mitarbeiter-branded-hoodie.webp', title: 'AKAN Mitarbeiter bei der Glasreinigung', category: 'Fensterreinigung' },
    { src: '/images/galerie/industriereinigung/akan-lueftungsreinigung-remko-aggregat-detail.webp', title: 'Lüftungsreinigung REMKO Aggregat — Detail', category: 'Industriereinigung' },
    { src: '/images/galerie/glasreinigung/akan-wintergarten-reinigung-ergebnis-innenansicht.webp', title: 'Wintergarten Reinigung — Innenansicht', category: 'Fensterreinigung' },
];

export default function GalerieClient() {
    return (
        <>
            <section className="bg-background pt-32 pb-20 lg:pt-48 lg:pb-24 border-b border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-transparent pointer-events-none"></div>
                <div className="container-fluid text-center relative z-10">
                    <div className="animate-fade-in-up">
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
                    </div>
                </div>
            </section>

            <section className="py-section-lg bg-surface border-y border-border">
                <div className="container-fluid">
                    <Suspense fallback={<div className="h-96 flex items-center justify-center text-text-secondary">Galerie wird geladen...</div>}>
                        <GalleryGrid images={galleryImages} />
                    </Suspense>

                    <div className="mt-24 text-center animate-fade-in-up">
                        <h3 className="text-h2 font-bold text-text-primary mb-10 font-display tracking-tight leading-[1.1]">Überzeugt von unserer Qualität?</h3>
                        <Link
                            href="/contact"
                            className="inline-flex justify-center items-center gap-3 px-10 py-5 text-base font-bold tracking-wide rounded-xl text-white bg-primary hover:bg-primary-hover shadow-elevated transition-all hover:-translate-y-1 font-display group"
                        >
                            Kostenloses Angebot anfordern
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
