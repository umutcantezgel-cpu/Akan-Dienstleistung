"use client";

import { useConsentStore } from "../store/useConsentStore";
import { ShieldCheck, XCircle } from "lucide-react";

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
      category: "Essenziell",
      name: "akan-privacy-consent",
      provider: "AKAN Dienstleistung (Lokal)",
      purpose:
        "Speichert die Zustimmungspräferenzen des Nutzers für Cookies und externe Medien.",
      expiry: "1 Jahr",
      type: "HTML5 Local Storage",
      active: preferences.essential,
    },
    {
      category: "Funktionell",
      name: "N/A (Consent Boundary)",
      provider: "AKAN Dienstleistung (Lokal)",
      purpose:
        "Verwaltet den lokalen Zustand, um externe Embeds wie Google Maps erst nach manuellem Klick freizuschalten. Es werden keine Third-Party Cookies vorab geladen.",
      expiry: "Session",
      type: "Zustand State",
      active: preferences.functional,
    },
    {
      category: "Statistiken",
      name: "vercel_analytics_id",
      provider: "Vercel Inc.",
      purpose:
        "Anonymisierte Telemetriedaten (Web Vitals) zur technischen Performance-Überwachung der Website gemäß DSGVO.",
      expiry: "Session / Transient",
      type: "HTTP",
      active: preferences.analytics,
    },
    {
      category: "Marketing",
      name: "-",
      provider: "-",
      purpose:
        "Wir verwenden keine originären Marketing- oder Targeting-Cookies Dritter zur Erstellung von Werbeprofilen auf dieser Website.",
      expiry: "-",
      type: "-",
      active: preferences.marketing,
    },
  ];

  return (
    <div className="flex flex-col gap-5 my-10">
      <div className="flex items-center justify-between mb-2 px-1">
        <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-primary" />
          Transparenz-Dashboard
        </h3>
        <span className="text-sm font-medium text-text-secondary bg-surface px-3 py-1 rounded-full border border-border/50 shadow-sm">
          Live-Status
        </span>
      </div>
      {cookieData.map((cookie, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-6 p-5 sm:p-6 bg-surface border border-border/50 rounded-2xl shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 relative group overflow-hidden"
        >
          {/* decorative side bar overlay */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-500 ${cookie.active ? "bg-green-500/80 group-hover:bg-green-500 shadow-[2px_0_8px_rgba(34,197,94,0.3)]" : "bg-red-500/50 group-hover:bg-red-500/80"}`}
          />

          {/* Category & Purpose */}
          <div className="flex-1 w-full md:w-5/12 pl-2">
            <div className="flex items-center gap-3 mb-2.5">
              {cookie.active ? (
                <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-700 font-bold text-xs ring-1 ring-inset ring-green-600/20 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" /> Aktiv
                </span>
              ) : (
                <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-red-400/10 text-red-700 font-bold text-xs ring-1 ring-inset ring-red-600/10 shadow-sm">
                  <XCircle className="w-3.5 h-3.5" /> Inaktiv
                </span>
              )}
              <h4 className="font-display font-bold text-lg text-text-primary">
                {cookie.category}
              </h4>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed sm:pr-4">
              {cookie.purpose}
            </p>
          </div>

          {/* Technical Details Grid */}
          <div className="w-full md:w-7/12 flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-background/50 p-4 rounded-xl border border-border/30 relative">
            {/* subtle inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

            <div className="flex flex-col gap-1 relative z-10">
              <span className="text-[10px] uppercase font-bold tracking-[0.05em] text-text-secondary">
                Technischer Name
              </span>
              <code
                className="text-xs bg-surface px-2.5 py-1.5 rounded border border-border/50 text-text-primary font-mono truncate"
                title={cookie.name}
              >
                {cookie.name}
              </code>
            </div>
            <div className="flex flex-col gap-1 relative z-10">
              <span className="text-[10px] uppercase font-bold tracking-[0.05em] text-text-secondary">
                Anbieter
              </span>
              <span
                className="text-sm font-medium text-text-primary truncate"
                title={cookie.provider}
              >
                {cookie.provider}
              </span>
            </div>
            <div className="flex flex-col gap-1 relative z-10">
              <span className="text-[10px] uppercase font-bold tracking-[0.05em] text-text-secondary">
                Laufzeit
              </span>
              <span className="text-sm text-text-primary">{cookie.expiry}</span>
            </div>
            <div className="flex flex-col gap-1 relative z-10">
              <span className="text-[10px] uppercase font-bold tracking-[0.05em] text-text-secondary">
                Typ
              </span>
              <span className="text-sm text-text-primary">{cookie.type}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
