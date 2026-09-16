'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { Camera, ArrowRight, Sparkles, SlidersHorizontal } from 'lucide-react';
import GalleryGrid, { type GalleryImage } from '@/features/gallery/components/GalleryGrid';
import BeforeAfterGallery from '@/features/before-after/components/BeforeAfterGallery';

const galleryImages: GalleryImage[] = [
    // Industriereinigung
    { src: '/images/galerie/industriereinigung/akan-kaercher-scheuersaugmaschine-im-einsatz.jpg', title: 'Kärcher Scheuersaugmaschine im Werksbetrieb Gudensberg', category: 'Industriereinigung' },
    { src: '/images/galerie/industriereinigung/akan-linde-stapler-arbeitsbuehne-hoehenreinigung.jpg', title: 'Industrielle Höhenreinigung mit Linde Stapler & Arbeitsbühne', category: 'Industriereinigung' },
    { src: '/images/galerie/industriereinigung/akan-stapler-korb-hallenbeleuchtung-reinigung.jpg', title: 'Hallenbeleuchtung & Deckenentstaubung in großer Höhe', category: 'Industriereinigung' },
    { src: '/images/galerie/industriereinigung/akan-industriekran-traeger-hochglanz-sauber.jpg', title: 'Industriekran-Träger & Vetter Kransystem Tiefenreinigung', category: 'Industriereinigung' },
    { src: '/images/galerie/industriereinigung/akan-produktionshalle-kranbahn-reinigung.jpg', title: 'Produktionshalle Kranbahn & Hallendecke Nordhessen', category: 'Industriereinigung' },
    { src: '/images/galerie/industriereinigung/akan-industrietor-fuehrungsschienen-detail.jpg', title: 'Industrietor Führungsschienen & Mechanik Entfettung', category: 'Industriereinigung' },
    { src: '/images/galerie/industriereinigung/akan-hallentor-laufrollen-sauber.jpg', title: 'Hallentor Laufrollen & Schienen gereinigt', category: 'Industriereinigung' },
    { src: '/images/galerie/industriereinigung/akan-lueftung-rohrleitungen-hallendecke.jpg', title: 'Decken-Rohrleitungen & Lüftungsrohre Industrieanlage', category: 'Industriereinigung' },
    { src: '/images/galerie/industriereinigung/akan-industriehalle-reinigung-krananlage-perspektive.webp', title: 'Industriehalle Krananlage — Perspektive Werkhalle', category: 'Industriereinigung' },
    { src: '/images/galerie/industriereinigung/akan-pvc-streifenvorhang-gereinigt-industrieanlage.webp', title: 'PVC-Streifenvorhang gereinigt & transparent', category: 'Industriereinigung' },
    { src: '/images/galerie/industriereinigung/akan-lueftungsreinigung-remko-aggregat-detail.webp', title: 'Lüftungsreinigung REMKO Aggregat — Detail', category: 'Industriereinigung' },
    { src: '/images/galerie/industriereinigung/akan-deckenventilator-reinigung-industriehalle-vorher.webp', title: 'Deckenventilator-Wartung & Hallenreinigung', category: 'Industriereinigung' },

    // Fenster- & Glasreinigung
    { src: '/images/galerie/fensterreinigung/akan-fensterreinigung-glasfront-moderne-architektur.png', title: 'Moderne Architektur Glasfassade & Schaufensterfront', category: 'Fensterreinigung' },
    { src: '/images/galerie/fensterreinigung/akan-fenster-spiegelglanz-detailsicht.png', title: 'Streifenfreier Spiegelglanz an Panoramafenstern', category: 'Fensterreinigung' },
    { src: '/images/galerie/fensterreinigung/akan-glasreinigung-mitarbeiter-branded-hoodie.webp', title: 'AKAN Glasreiniger mit professioneller Teleskop-Ausrüstung', category: 'Fensterreinigung' },
    { src: '/images/galerie/fensterreinigung/akan-fensterreinigung-fensterfront-komplett-sauber.webp', title: 'Fensterfront Firmengebäude komplett streifenfrei', category: 'Fensterreinigung' },
    { src: '/images/galerie/fensterreinigung/akan-fensterreinigung-panoramafenster-bergblick-ergebnis.webp', title: 'Panoramafenster mit Weitblick — Makelloses Finish', category: 'Fensterreinigung' },
    { src: '/images/galerie/gewerbereinigung/akan-gewerbereinigung-glasfassade-gebaeude-aussen.webp', title: 'Glasfassade Gewerbegebäude — Außenansicht Kassel', category: 'Fensterreinigung' },
    { src: '/images/galerie/glasreinigung/akan-wintergarten-reinigung-ergebnis-innenansicht.webp', title: 'Wintergarten & Pavillon — Streifenfreie Innenansicht', category: 'Fensterreinigung' },

    // Gewerbe- & Unterhaltsreinigung
    { src: '/images/galerie/gewerbereinigung/akan-sporthallenreinigung-grossflaeche-sauger.png', title: 'Sporthallen- & Großflächenreinigung mit Industriesauger', category: 'Unterhaltsreinigung' },
    { src: '/images/galerie/gewerbereinigung/akan-unterhaltsreinigung-flur-streifenfrei.jpg', title: 'Büro- & Flurreinigung streifenfrei gepflegt', category: 'Unterhaltsreinigung' },
    { src: '/images/galerie/gewerbereinigung/akan-bueroreinigung-glanzboden-gepflegt.jpg', title: 'Gewerbliche Bodenpflege & Glanzversiegelung Büro', category: 'Unterhaltsreinigung' },
    { src: '/images/galerie/gewerbereinigung/akan-sanitaer-armaturen-hochglanz-hygiene.jpg', title: 'Sanitär-Armaturen Hochglanzpolitur & Keimschutz', category: 'Unterhaltsreinigung' },
    { src: '/images/galerie/gewerbereinigung/akan-arbeitsplatz-tiefenreinigung-desinfektion.jpg', title: 'Büroarbeitsplatz-Tiefenreinigung & Tastaturdesinfektion', category: 'Unterhaltsreinigung' },
    { src: '/images/galerie/gewerbereinigung/akan-oberflaechendesinfektion-empfang.jpg', title: 'Empfangsbereich & Thekendesinfektion Gewerbekunden', category: 'Unterhaltsreinigung' },
    { src: '/images/galerie/gewerbereinigung/akan-praxisreinigung-hygienestandard-steril.jpg', title: 'Praxis- & Kanzleireinigung nach RKI-Hygienestandards', category: 'Unterhaltsreinigung' },
    { src: '/images/galerie/gewerbereinigung/akan-bueroboden-versiegelung-pflege.jpg', title: 'Schutzversiegelung für hochfrequentierte Gewerbeböden', category: 'Unterhaltsreinigung' },
    { src: '/images/galerie/gewerbereinigung/akan-objektbetreuung-gewerbe-sauberkeit.jpg', title: 'Ganzheitliche Objektbetreuung für Liegenschaften', category: 'Unterhaltsreinigung' },
];

export default function GalerieClient() {
    return (
        <>
            {/* Header Hero */}
            <section className="bg-background pt-32 pb-16 lg:pt-44 lg:pb-20 border-b border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-transparent pointer-events-none"></div>
                <div className="container-fluid text-center relative z-10">
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center justify-center gap-3 px-5 py-2 rounded-full bg-surface border border-border mb-6 shadow-inner-glow">
                            <Camera className="w-4 h-4 text-primary" />
                            <span className="text-primary font-bold tracking-[0.25em] uppercase text-mini">Echte Projektergebnisse</span>
                        </div>
                        <h1 className="text-h1 font-bold text-text-primary mb-6 font-display tracking-tighter leading-[1.05] drop-shadow-sm">
                            Unsere <span className="text-primary">Referenzen & Galerie</span>
                        </h1>
                        <p className="text-large font-light text-text-secondary max-w-3xl mx-auto leading-[1.8]">
                            Ein Bild sagt mehr als tausend Worte. Entdecken Sie reale Vorher-Nachher Vergleiche und Einblicke in unsere tägliche Reinigungsarbeit in Gudensberg, Kassel und ganz Nordhessen.
                        </p>
                    </div>
                </div>
            </section>

            {/* 1. Vorher-Nachher Showcase Section */}
            <section className="py-section bg-surface/50 border-b border-border overflow-hidden">
                <div className="container-fluid">
                    <div className="max-w-3xl mb-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                            <SlidersHorizontal className="w-3.5 h-3.5" />
                            Interaktive Vergleiche
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary font-display tracking-tight mb-4">
                            Vorher & Nachher: <span className="text-primary">Der sichtbare Unterschied</span>
                        </h2>
                        <p className="text-text-secondary text-base leading-relaxed">
                            Ziehen Sie den Schieberegler nach links oder rechts, um den Reinigungserfolg unserer geschulten Teams an echten Objekten unmittelbar zu erleben.
                        </p>
                    </div>

                    <BeforeAfterGallery />
                </div>
            </section>

            {/* 2. Gesamte Fotogalerie */}
            <section className="py-section-lg bg-surface border-y border-border overflow-hidden">
                <div className="container-fluid">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-text-secondary text-xs font-bold uppercase tracking-wider mb-3 shadow-inner-glow">
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                            Portfolio im Detail
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary font-display tracking-tight mb-4">
                            Einblicke in unsere Einsätze
                        </h2>
                        <p className="text-text-secondary text-base leading-relaxed">
                            Filtern Sie nach Einsatzbereichen, um spezifische Beispiele aus der Industrie-, Glas- und Unterhaltsreinigung anzusehen.
                        </p>
                    </div>

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
