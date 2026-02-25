'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useConsentStore } from '../store/useConsentStore';
import { ShieldAlert, Cookie, ChevronDown, Check, X } from 'lucide-react';
import Button from '@/shared/components/Button';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-20 — Fortress Consent Banner
// Anti-Dark-Pattern: Both accept/deny buttons have exact same visual weight.
// Granular controls with technical details exposed. DNT support.
// ═══════════════════════════════════════════════════════════

export default function ConsentBanner() {
    const { isBannerOpen, hasConsented, acceptAll, acceptNecessary, savePreferences, preferences } = useConsentStore();
    const [isMounted, setIsMounted] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    // Local state for granular settings before saving
    const [localPrefs, setLocalPrefs] = useState(preferences);

    useEffect(() => {
        setIsMounted(true);

        // Check Do Not Track (DNT) / GPC on mount if no consent given yet
        if (!hasConsented && typeof window !== 'undefined') {
            // @ts-ignore - doNotTrack is deprecated/non-standard on Window in newer TS DOM types
            const isDNT = navigator.doNotTrack === '1' || window.doNotTrack === '1';
            // @ts-ignore - GPC is not fully typed yet
            const isGPC = navigator.globalPrivacyControl === true;

            if (isDNT || isGPC) {
                // Respect browser privacy signals by default (Default Deny)
                acceptNecessary();
            } else {
                // Trigger banner open on first visit
                useConsentStore.getState().openBanner();
            }
        }
    }, [hasConsented, acceptNecessary]);

    // Focus management for A11y (BFSG compliance)
    useEffect(() => {
        if (isMounted && isBannerOpen && !showDetails) {
            // Wait for animation frame then focus primary button
            requestAnimationFrame(() => {
                const primaryBtn = document.getElementById('consent-accept-all');
                if (primaryBtn) {
                    primaryBtn.focus();
                }
            });
        }
    }, [isMounted, isBannerOpen, showDetails]);

    if (!isMounted || !isBannerOpen) return null;

    const handleSaveDetails = () => {
        savePreferences(localPrefs);
        setShowDetails(false);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 z-[9999] md:w-[600px] max-w-[calc(100vw-2rem)] bg-surface border border-border rounded-2xl shadow-elevated overflow-hidden flex flex-col"
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="consent-title"
                aria-describedby="consent-desc"
            >
                {/* ── Content Area ── */}
                <div className="p-6 md:p-8 flex-1 overflow-y-auto max-h-[70vh] custom-scrollbar">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <ShieldAlert className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h2 id="consent-title" className="text-large font-bold text-text-primary font-display mb-2">
                                IHR DATENSCHUTZ IST UNSER FUNDAMENT
                            </h2>
                            <p id="consent-desc" className="text-sm text-text-secondary leading-relaxed">
                                Wir nutzen Cookies und ähnliche Technologien. Einige sind technisch absolut notwendig (Essenziell), während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. Sie haben die volle Kontrolle.
                            </p>
                        </div>
                    </div>

                    {/* ── Granular Settings (Layer 2) ── */}
                    <AnimatePresence>
                        {showDetails && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden mt-6 border-t border-border pt-6"
                            >
                                <div className="space-y-4">
                                    <ConsentItem
                                        id="essential"
                                        title="Essenziell (Immer aktiv)"
                                        description="Technisch notwendige Cookies, ohne die unsere Website nicht funktioniert (z.B. dieses Consent-Banner)."
                                        checked={true}
                                        disabled={true}
                                        onChange={() => { }}
                                    />
                                    <ConsentItem
                                        id="functional"
                                        title="Funktionell & Externe Medien"
                                        description="Ermöglicht das Laden externer Inhalte wie interaktive Karten (Google Maps) ohne diese vorher manuell durch einen Klick entsperren zu müssen."
                                        checked={localPrefs.functional}
                                        disabled={false}
                                        onChange={(checked) => setLocalPrefs(prev => ({ ...prev, functional: checked }))}
                                    />
                                    <ConsentItem
                                        id="analytics"
                                        title="Statistiken & Performance"
                                        description="Erfasst anonymisierte Daten zur Nutzung unserer Website, damit wir verstehen, wie Besucher mit ihr interagieren (Web Vitals)."
                                        checked={localPrefs.analytics}
                                        disabled={false}
                                        onChange={(checked) => setLocalPrefs(prev => ({ ...prev, analytics: checked }))}
                                    />
                                    <ConsentItem
                                        id="marketing"
                                        title="Marketing"
                                        description="Derzeit nutzen wir keine aktiven Marketing- oder Tracking-Cookies Dritter für personalisierte Werbung auf dieser Domain."
                                        checked={localPrefs.marketing}
                                        disabled={false}
                                        onChange={(checked) => setLocalPrefs(prev => ({ ...prev, marketing: checked }))}
                                    />
                                </div>

                                <div className="flex justify-end mt-6">
                                    <Button variant="secondary" size="sm" onClick={handleSaveDetails}>
                                        Auswahl speichern
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* ── Actions Area (Anti-Dark Pattern) ── */}
                <div className="bg-white/50 border-t border-border p-4 md:px-8 py-5 flex flex-col sm:flex-row gap-3 items-center shrink-0">
                    {!showDetails ? (
                        <>
                            {/* ALL buttons have exact same visual weight - border/text colors vary slightly but bg is solid white vs solid red for contrast equity */}
                            <Button
                                variant="secondary"
                                className="w-full sm:w-1/2 justify-center font-bold"
                                onClick={acceptNecessary}
                            >
                                Nur Essentielle
                            </Button>
                            <Button
                                id="consent-accept-all"
                                variant="primary"
                                className="w-full sm:w-1/2 justify-center font-bold"
                                onClick={acceptAll}
                            >
                                Alle Akzeptieren
                            </Button>
                        </>
                    ) : null}
                </div>

                {/* ── Settings Toggle ── */}
                {!showDetails && (
                    <button
                        onClick={() => setShowDetails(true)}
                        className="absolute top-6 right-6 text-xs font-bold text-text-secondary hover:text-primary transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    >
                        Zwecke verwalten <ChevronDown className="w-3 h-3" />
                    </button>
                )}

                {/* Links */}
                <div className="bg-surface border-t border-border/50 px-6 py-3 flex justify-center gap-4 text-micro text-text-secondary">
                    <a href="/impressum" className="hover:text-primary transition-colors">Impressum</a>
                    <span>•</span>
                    <a href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</a>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

function ConsentItem({
    id,
    title,
    description,
    checked,
    disabled,
    onChange
}: {
    id: string;
    title: string;
    description: string;
    checked: boolean;
    disabled: boolean;
    onChange: (checked: boolean) => void;
}) {
    return (
        <div className={`p-4 rounded-xl border ${checked ? 'border-primary/20 bg-primary/5' : 'border-border bg-white'} transition-colors relative`}>
            <div className="flex items-start justify-between gap-4">
                <div className="pr-12">
                    <label htmlFor={id} className="font-bold text-sm text-text-primary block mb-1 cursor-pointer">
                        {title}
                    </label>
                    <p className="text-xs text-text-secondary leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Custom Toggle Switch */}
                <div className="absolute right-4 top-4">
                    <button
                        type="button"
                        id={id}
                        role="switch"
                        aria-checked={checked}
                        disabled={disabled}
                        onClick={() => !disabled && onChange(!checked)}
                        className={`w-11 h-6 rounded-full transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary ${checked ? 'bg-primary' : 'bg-border'
                            } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-opacity-90'}`}
                    >
                        <span className="sr-only">Toggle {title}</span>
                        <span
                            className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'
                                }`}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
