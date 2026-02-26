# EXPORT SETUP & QUICKSTART

Dieses Dokument beschreibt die Schritte zur Inbetriebnahme des AKAN Dienstleistung Projekts nach dem Export.

## 🚀 1-Click Setup

Das Projekt nutzt den Next.js App Router und npm.
Führe folgende Befehle aus, um das Projekt zu starten:

```bash
# 1. Installiere alle Abhängigkeiten
npm install

# 2. Starte den lokalen Entwicklungsserver
npm run dev
```

Die Anwendung ist nun unter `http://localhost:3000` erreichbar.

## 📦 Production Build

Um die Applikation für ein Produktions-Environment zu bauen:

```bash
npm run build
npm run start
```

## 🛠 Features out of the box

- **Next.js 15 + React 19:** State-of-the-art Performance & Server Components.
- **Tailwind CSS v4:** Das komplette "Rot-Weiß Premium" Redesign ist in `app/globals.css` vorkonfiguriert.
- **SEO Ready:** Meta-Tags und `application/ld+json` Schema.org für lokales Business (LocalBusiness) sind enthalten.
- **Accessibility:** Kontrastwerte überprüft, semantisches HTML5 verwendet.

## 🖼 Asset Management

Bitte beachte, dass alle Platzhalter-Bilder aus rechtlichen Gründen durch die `<ImagePlaceholder />` Komponente ersetzt wurden. Um produktive Bilder einzuspielen, lies die **ASSET-RESTORATION.md**.

## 📞 Support & Troubleshooting

Falls es beim Setup zu Problemen kommt (etwa Build-Errors durch Node-Versionen), konsultiere bitte **TROUBLESHOOTING.md**. Wir empfehlen **Node.js 20.x (LTS)** oder höher.
