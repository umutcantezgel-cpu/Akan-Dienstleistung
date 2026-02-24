import Link from 'next/link';

export const revalidate = false; // SSG: fully static

export default function Impressum() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 lg:pt-48 lg:pb-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-transparent pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-elevated border border-border/60">
          <h1 className="text-h1 font-bold text-text-primary mb-12 font-display tracking-tighter drop-shadow-sm border-b border-border/50 pb-8">Impressum</h1>
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-text-primary prose-headings:font-bold prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:tracking-tight prose-h2:mt-12 prose-p:text-medium prose-p:font-light prose-p:text-text-secondary prose-p:leading-[1.8] prose-a:text-primary prose-a:font-bold hover:prose-a:text-primary-hover transition-colors">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              AKAN Dienstleistung<br />
              Inhaber: Cemal Hilaloglu<br />
              Musterstraße 12<br />
              34281 Gudensberg
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: 0152 34754386<br />
              E-Mail: <a href="mailto:info@akan-dienstleistung.de">info@akan-dienstleistung.de</a>
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              024 827 615 98
            </p>

            <h2>Verbraucherstreitbeilegung/<wbr />Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
