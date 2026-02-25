import Link from 'next/link';
import { Home, MessageCircle, AlertTriangle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-surface relative overflow-hidden py-section-lg">
            <div className="absolute inset-0 noise-overlay pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-fluid relative z-10 text-center flex flex-col items-center max-w-2xl px-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20 shadow-glow">
                    <AlertTriangle className="w-10 h-10 text-primary" />
                </div>

                <h1 className="text-h1 font-bold text-text-primary mb-4 font-display leading-tight tracking-tight">
                    404 - Seite nicht <span className="text-gradient-primary">gefunden</span>
                </h1>

                <p className="text-large text-text-secondary leading-relaxed mb-12 font-light">
                    Hoppla! Diese Seite ist wohl gerade beim Frühjahrsputz oder wurde verschoben. Lassen Sie uns gemeinsam den richtigen Weg finden.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Link
                        href="/"
                        className="w-full sm:w-auto group relative overflow-hidden flex justify-center items-center gap-2 py-4 px-8 rounded-xl text-base font-bold tracking-wide text-white bg-primary transition-all shadow-elevated hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(146,24,41,0.25)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                    >
                        <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                        Zurück zur Startseite
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-hover via-white/20 to-primary-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />
                    </Link>

                    <Link
                        href="/contact"
                        className="w-full sm:w-auto flex justify-center items-center gap-2 py-4 px-8 rounded-xl text-base font-bold tracking-wide text-text-primary bg-background border border-border transition-all hover:-translate-y-1 hover:bg-surface hover:shadow-card hover:border-border/80 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                    >
                        <MessageCircle className="w-5 h-5 text-primary" />
                        Kontakt aufnehmen
                    </Link>
                </div>
            </div>
        </div>
    );
}
