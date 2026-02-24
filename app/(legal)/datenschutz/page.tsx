import Link from 'next/link';

export const revalidate = false; // SSG: fully static

export default function Datenschutz() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 lg:pt-48 lg:pb-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-transparent pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-elevated border border-border/60">
          <h1 className="text-h1 font-bold text-text-primary mb-12 font-display tracking-tighter drop-shadow-sm border-b border-border/50 pb-8">Datenschutzerklärung</h1>
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-text-primary prose-headings:font-bold prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:tracking-tight prose-h2:mt-12 prose-h3:text-xl prose-h3:tracking-tight prose-p:text-medium prose-p:font-light prose-p:text-text-secondary prose-p:leading-[1.8] prose-a:text-primary prose-a:font-bold hover:prose-a:text-primary-hover transition-colors">
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>

            <h2>2. Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Vercel / Netlify (Beispiel). Dieser Anbieter verarbeitet die Daten in unserem Auftrag.</p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3>Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              AKAN Dienstleistung<br />
              Cemal Hilaloglu<br />
              Musterstraße 12<br />
              34281 Gudensberg<br />
              Telefon: 0152 34754386<br />
              E-Mail: <a href="mailto:info@akan-dienstleistung.de">info@akan-dienstleistung.de</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
