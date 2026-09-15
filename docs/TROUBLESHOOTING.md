# TROUBLESHOOTING GUIDE

Häufige Probleme und deren Lösung beim lokalen Starten oder Produzieren der AKAN Dienstleistung App.

## 1. Fehler bei `npm install` oder Build

- **Problem**: Inkompatible Node-Versionen (z.B. Fehler bei `node-sass` oder Sharp).
- **Lösung**: Stellen Sie sicher, dass Sie Node.js v20+ verwenden. Falls es Node-Sass Fehler gibt (sehr selten in Tailwind-Projekten), löschen Sie den `node_modules` Ordner und die `package-lock.json` und führen Sie `npm install` aus.

## 2. npm audit zeigt "High Vulnerabilities"

- **Warnung**: Der Report zeigt Schwachstellen in Sub-Abhängigkeiten wie `rimraf` oder `glob` an.
- **Warum**: Diese stammen oft von etablierten Bau-Tools wie `eslint` oder Next.js internen Paketen und können erst von den Maintainern gefixt werden. Solange kein bösartiger Code direkt im Backend ausgeführt wird, ist das Risiko bei statischen Exporten minimal.

## 3. Bilder werden nicht angezeigt / brechen das Layout

- **Problem**: Next.js generiert Errors wie "Invalid src prop" nachdem die Picsum-Platzhalter durch echte Bilder ersetzt wurden.
- **Lösung**: Prüfen Sie, ob Sie im Bereich `src="/images/logo.png"` auf den richtigen Pfad im `public` Ordner zeigen. Wenn Sie externe URLs nutzen, müssen diese in der `next.config.js` (oder `.ts`) unter `images.remotePatterns` registriert werden!

## 4. Layout Shifts (CLS) bei Bildern

- **Problem**: Beim Laden der Seite springen Elemente (schlechter Lighthouse-Score).
- **Lösung**: Nutzen Sie bei `<Image fill />` auf jeden Fall einen Parent-Container mit relativer Positionierung und festen aspect-ratios (wie `aspect-[4/3] relative`). Dies ist in den Komponenten (wie `<BeforeAfterSlider>`) bereits korrekt umgesetzt.
