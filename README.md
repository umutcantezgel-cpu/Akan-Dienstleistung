<div align="center">
  <h1>AKAN Dienstleistung — Offizielle Web-Plattform</h1>
  <p>
    <b>Professionelle Unternehmenswebsite für Gebäudereinigung & Facility Services in Nordhessen</b>
  </p>

  <p>
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white" />
    <img alt="React" src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=white" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img alt="Vercel Ready" src="https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel" />
  </p>
</div>

---

## 🌟 Projektübersicht

Dieses Repository beinhaltet den vollständigen Quellcode der modernen, barrierefreien und SEO-optimierten Unternehmenspräsenz von **AKAN Dienstleistung** (Breslauer Str. 50, 34281 Gudensberg).

Die Plattform präsentiert das gesamte Portfolio gewerblicher und privater Reinigungsdienstleistungen im Schwalm-Eder-Kreis, Kassel und Nordhessen mit interaktiven Standortübersichten, transparenten Leistungsbeschreibungen, DSGVO-konformem Consent-Management und einem gehärteten Anfrageformular.

🌐 **Produktions-Domain:** [https://akan-dienstleistung.de](https://akan-dienstleistung.de)

---

## 🛠️ Tech-Stack & Architektur

- **Framework:** Next.js 15.5 (App Router) mit React 19 Server & Client Components
- **Sprache:** TypeScript 5.9 (Strict Type Checking)
- **Styling:** Tailwind CSS v4 mit modernem Farb- und Typografiesystem
- **Animationen:** Framer Motion / Motion v12 mit reduzierter Bewegung bei Accessibility-Vorgaben
- **Formular & Validierung:** React Hook Form + Zod (Client- & Server-Validierung)
- **Karten & Geo:** Leaflet mit clientseitiger dynamischer Nachladung (Consent-geschützt)
- **Testing:** Vitest + Testing Library für Unit- & Integrationstests
- **Code-Qualität:** ESLint 9 mit Zero-Warning-Policy

---

## 🧭 Informationsarchitektur & Seitenstruktur

| Route | Funktion & Status |
|---|---|
| `/` | Startseite mit Leistungsübersicht, Vorher-Nachher-Vergleich, Rezensionen, FAQ & CTA |
| `/leistungen` | Zentrale Übersicht aller 5 Gewerke mit Spezifikationen und Ablauf |
| `/leistungen/unterhaltsreinigung` | Büro-, Praxis- und Gewerbereinigung |
| `/leistungen/fensterreinigung` | Glas-, Rahmen- und Osmosereinigung |
| `/leistungen/bauendreinigung` | Grob-, Fein- und Bauabnahmereinigung |
| `/leistungen/industriereinigung` | Maschinen- und Hallenreinigung |
| `/leistungen/sonderreinigung` | Spezialverfahren, Havarien & Desinfektion |
| `/standorte` | Übersicht aller Einsatzgebiete in Nordhessen (Entfernungen & Stadtteile) |
| `/standorte/[stadt]` | Lokale Landingpages für 12 Städte (Gudensberg HQ, Kassel, Fritzlar, Baunatal, etc.) |
| `/ueber-uns` | Unternehmensgeschichte, Team, Werte und interaktive Karte |
| `/referenzen` | Galerie und Vorher-Nachher-Ergebnisse |
| `/contact` | Typensicheres Kontaktformular mit Honeypot, Rate-Limiting & Adressdetails |
| `/impressum` | Gesetzliche Pflichtangaben (§ 5 TMG, § 18 MStV) |
| `/datenschutz` | Vollständige DSGVO-Datenschutzerklärung & Cookie-Präferenzen |
| `/agb` | Allgemeine Geschäftsbedingungen für Gebäudereinigung |
| `/api/contact` | Gehärtete Serverless API Route für Anfragen |
| `/sitemap.xml` & `/robots.txt` | Dynamisch generierte Suchmaschinen-Indizes |

---

## 🚀 Lokales Setup & Entwicklung

### Voraussetzungen

- Node.js >= 20.0.0
- npm >= 10.0.0

### Schritt-für-Schritt

1. **Repository klonen:**
   ```bash
   git clone https://github.com/umutcantezgel-cpu/Akan-Dienstleistung.git
   cd Akan-Dienstleistung
   ```

2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

3. **Umgebungsvariablen vorbereiten:**
   ```bash
   cp .env.example .env.local
   ```

4. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```
   Die Seite läuft lokal unter [http://localhost:3000](http://localhost:3000).

---

## 🔑 Umgebungsvariablen (ENV)

In `.env.local` (lokal) oder im Vercel Dashboard unter **Project Settings → Environment Variables**:

| Variable | Pflicht | Standardwert | Beschreibung |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Nein | `https://akan-dienstleistung.de` | Basis-URL für Canonicals und Metadaten |
| `RESEND_API_KEY` | Optional | `""` | API-Key von [Resend](https://resend.com) für automatisierten E-Mail-Versand |
| `CONTACT_EMAIL_RECIPIENT` | Optional | `info@akan-dienstleistung.de` | Zieladresse für eingehende Kundenanfragen |
| `CONTACT_EMAIL_FROM` | Optional | `AKAN <noreply@akan-dienstleistung.de>` | Absenderadresse (in Resend verifiziert) |
| `CONTACT_WEBHOOK_URL` | Optional | `""` | Optionaler Webhook für Zapier, Slack oder CRM |
| `ANALYZE` | Nein | `"false"` | Bei `"true"` wird der Bundle-Analyzer beim Build aktiviert |

> **Hinweis zur Robustheit:** Fehlt der `RESEND_API_KEY`, arbeitet die API Route im lokalen Entwicklungs-/Fallback-Modus, loggt die Anfrage strukturiert und gibt dem Benutzer eine Erfolgsmeldung zurück – die Seite bricht niemals ab.

---

## 🧪 Qualitätssicherung & Tests

Vor jedem Release oder Push:

```bash
# 1. ESLint prüfen (muss 0 Fehler & 0 Warnungen liefern)
npm run lint

# 2. Vitest Unit- und Komponententests ausführen
npm test

# 3. Vollständigen Produktions-Build prüfen (32 statische Seiten)
npm run build
```

---

## ☁️ Vercel Deployment-Anleitung

Die Website ist für **Vercel** optimiert:

1. **GitHub Repository verknüpfen:**
   - In [Vercel](https://vercel.com) ein neues Projekt anlegen.
   - `umutcantezgel-cpu/Akan-Dienstleistung` auswählen.
2. **Build-Einstellungen:**
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (Standard)
   - **Output Directory:** `.next` (Standard)
   - **Install Command:** `npm install` (Standard)
3. **Environment Variables einrichten:**
   - `NEXT_PUBLIC_SITE_URL` = `https://akan-dienstleistung.de`
   - `RESEND_API_KEY` = *(Dein Resend API-Key)*
   - `CONTACT_EMAIL_RECIPIENT` = `info@akan-dienstleistung.de`
4. **Deploy klicken:**
   - Vercel baut alle 32 Seiten als hochperformante statische Seiten (SSG/ISR) und hostet die Edge Middleware sowie die API Route global.

---

## 🛡️ Sicherheit & Compliance

- **Sicherheits-Header:** HSTS (2 Jahre, Preload), X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, CSP.
- **Datenschutz (DSGVO):** Zero-Cookie-Baseline. Erst nach ausdrücklicher Zustimmung werden optionale funktionale Inhalte wie Google Maps geladen. Jederzeit über den permanenten Privacy-Trigger links unten widerrufbar.
- **Formular-Hardening:** Client- & Server-Zod-Validierung, Honeypot-Spamfilter und IP-basiertes Rate-Limiting gegen Flooding.

---

## 📄 Lizenz & Impressum

AKAN Dienstleistung  
Inhaber: Cemal Hilaloglu  
Breslauer Str. 50, 34281 Gudensberg  
Telefon: 0152 34754386  
E-Mail: [info@akan-dienstleistung.de](mailto:info@akan-dienstleistung.de)
