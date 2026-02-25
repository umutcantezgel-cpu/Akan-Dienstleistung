'use client';

import { useConsentStore } from '../store/useConsentStore';
import { ShieldCheck, XCircle } from 'lucide-react';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-22 — Dynamic Cookie Declaration Table
// Automatically reflects the user's current consent choices
// to provide 100% transparency as required by GDPR tracking
// regulations.
// ═══════════════════════════════════════════════════════════

export default function CookieDeclarationTable() {
    const { preferences } = useConsentStore();

    const cookieData = [
        {
            category: 'Essenziell',
            name: 'akan-privacy-consent',
            provider: 'AKAN Dienstleistung (Lokal)',
            purpose: 'Speichert die Zustimmungspräferenzen des Nutzers für Cookies und externe Medien.',
            expiry: '1 Jahr',
            type: 'HTML5 Local Storage',
            active: preferences.essential,
        },
        {
            category: 'Funktionell',
            name: 'N/A (Consent Boundary)',
            provider: 'AKAN Dienstleistung (Lokal)',
            purpose: 'Verwaltet den lokalen Zustand, um externe Embeds wie Google Maps erst nach manuellem Klick freizuschalten. Es werden keine Third-Party Cookies vorab geladen.',
            expiry: 'Session',
            type: 'Zustand State',
            active: preferences.functional,
        },
        {
            category: 'Statistiken',
            name: 'vercel_analytics_id',
            provider: 'Vercel Inc.',
            purpose: 'Anonymisierte Telemetriedaten (Web Vitals) zur technischen Performance-Überwachung der Website gemäß DSGVO.',
            expiry: 'Session / Transient',
            type: 'HTTP',
            active: preferences.analytics,
        },
        {
            category: 'Marketing',
            name: '-',
            provider: '-',
            purpose: 'Wir verwenden keine originären Marketing- oder Targeting-Cookies Dritter zur Erstellung von Werbeprofilen auf dieser Website.',
            expiry: '-',
            type: '-',
            active: preferences.marketing,
        }
    ];

    return (
        <div className="w-full overflow-x-auto rounded-xl border border-border shadow-soft bg-surface my-8">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-primary/5 border-b border-border">
                        <th className="p-4 text-tiny font-bold text-text-primary tracking-wide">Status</th>
                        <th className="p-4 text-tiny font-bold text-text-primary tracking-wide">Kategorie & Zweck</th>
                        <th className="p-4 text-tiny font-bold text-text-primary tracking-wide hidden md:table-cell">Technischer Name</th>
                        <th className="p-4 text-tiny font-bold text-text-primary tracking-wide hidden sm:table-cell">Anbieter / Laufzeit</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm text-text-secondary">
                    {cookieData.map((cookie, index) => (
                        <tr key={index} className="hover:bg-background/50 transition-colors">
                            <td className="p-4 align-top w-24">
                                {cookie.active ? (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-500/10 text-green-700 font-medium text-xs">
                                        <ShieldCheck className="w-3.5 h-3.5" /> Aktiv
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-500/10 text-red-700 font-medium text-xs">
                                        <XCircle className="w-3.5 h-3.5" /> Inaktiv
                                    </span>
                                )}
                            </td>
                            <td className="p-4">
                                <div className="font-bold text-text-primary mb-1">{cookie.category}</div>
                                <div className="leading-relaxed text-xs">{cookie.purpose}</div>
                                {/* Mobile-only additional info */}
                                <div className="md:hidden mt-3 pt-3 border-t border-border/50 text-xs">
                                    <div className="flex gap-2 mb-1"><span className="font-medium text-text-primary w-20">Name:</span> <code>{cookie.name}</code></div>
                                    <div className="flex gap-2"><span className="font-medium text-text-primary w-20">Anbieter:</span> {cookie.provider}</div>
                                </div>
                            </td>
                            <td className="p-4 align-top hidden md:table-cell">
                                <code className="bg-background px-2 py-1 rounded border border-border text-xs break-all">{cookie.name}</code>
                            </td>
                            <td className="p-4 align-top hidden sm:table-cell">
                                <div className="font-medium text-text-primary mb-1">{cookie.provider}</div>
                                <div className="text-xs">Laufzeit: {cookie.expiry}</div>
                                <div className="text-xs mt-1">Typ: {cookie.type}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
