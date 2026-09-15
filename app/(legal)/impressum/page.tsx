import type { Metadata } from "next";
import LegalPageTemplate from "@/features/legal/components/LegalPageTemplate";
import LegalAccordion from "@/features/legal/components/LegalAccordion";
import {
  Building2,
  FileText,
  Scale,
  ShieldAlert,
  PenTool,
  Gavel,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum | AKAN Dienstleistung",
  description: "Impressum der AKAN Dienstleistung – Angaben gemäß § 5 TMG und § 18 MStV.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://akan-dienstleistung.de/impressum",
  },
};

export default function Impressum() {
  return (
    <LegalPageTemplate
      title="Impressum"
      subtitle="Rechtliche Angaben und Pflichtinformationen gemäß Telemediengesetz (TMG) und Dienstleistungs-Informationspflichten-Verordnung (DL-InfoV)."
      lastUpdated="Februar 2026"
      icon="scale"
    >
      <h2 id="angaben-gem-5-tmg">Angaben gemäß § 5 TMG</h2>
      <LegalAccordion
        title="Betreiber & Kontakt"
        icon={<Building2 />}
        defaultOpen={true}
      >
        <p>
          <strong>AKAN Dienstleistung</strong>
          <br />
          Gebäudereinigung und Facility Services
          <br />
          Inhaber: Cemal Hilaloglu
          <br />
          Odenbergstraße 26
          <br />
          34281 Gudensberg
          <br />
          Deutschland
        </p>

        <h4 className="font-bold text-text-primary mt-6 mb-2">Kontakt</h4>
        <p className="bg-background border border-border/50 p-4 rounded-xl">
          <strong>Telefon:</strong> 0152 34754386
          <br />
          <strong>E-Mail:</strong>{" "}
          <a
            href="mailto:info@akan-dienstleistung.de"
            className="text-primary hover:underline"
          >
            info@akan-dienstleistung.de
          </a>
          <br />
          <strong>Telefax:</strong> Auf Anfrage
          <br />
          <strong>Website:</strong>{" "}
          <a
            href="https://akan-dienstleistung.de"
            className="text-primary hover:underline"
          >
            www.akan-dienstleistung.de
          </a>
        </p>
      </LegalAccordion>

      <h2 id="register-kammer">Register, Kammer & Versicherung</h2>
      <LegalAccordion
        title="Pflichtangaben zur Unternehmung"
        icon={<FileText />}
      >
        <h4 className="font-bold text-text-primary mb-2">
          Umsatzsteuer-Identifikationsnummer
        </h4>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          <strong>024 827 615 98</strong>
        </p>

        <h4 className="font-bold text-text-primary mt-6 mb-2">
          Berufsbezeichnung und Kammerzugehörigkeit
        </h4>
        <p>
          Berufsbezeichnung: Gebäudereiniger
          <br />
          Zuständige Kammer: Handwerkskammer Kassel
          <br />
          Staat, in dem der Titel verliehen wurde: Bundesrepublik Deutschland
        </p>

        <h4 className="font-bold text-text-primary mt-6 mb-2">
          Angaben zur Berufshaftpflichtversicherung
        </h4>
        <p>
          Wir unterhalten eine umfassende Betriebshaftpflichtversicherung, die für etwaige
          durch uns oder unsere Erfüllungsgehilfen verursachte Schäden
          (Personen-, Sach- und Vermögensschäden) vollumfänglich einsteht.
        </p>
        <p className="bg-background border border-border/50 p-4 rounded-xl">
          <strong>Betriebshaftpflichtversicherung:</strong>
          <br />
          Bestehend für das Gebäudereiniger-Handwerk mit weltweiter Deckung für Inlandstätigkeiten.
          <br />
          Police und Versicherungsnachweis liegen vor und werden Auftraggebern auf Anfrage gerne vorgelegt.
          <br />
          <br />
          <strong>Geltungsraum der Versicherung:</strong> Deutschland
        </p>
      </LegalAccordion>

      <h2 id="redaktionell-verantwortlich">Verantwortlichkeit & Schlichtung</h2>
      <LegalAccordion title="Redaktion & Streitschlichtung" icon={<Gavel />}>
        <h4 className="font-bold text-text-primary mb-2">
          Redaktionell verantwortlich
        </h4>
        <p>
          Verantwortlich für redaktionelle Inhalte sowie
          journalistisch-redaktionell gestaltete Angebote im Sinne des § 18 Abs.
          2 MStV:
          <br />
          <br />
          Cemal Hilaloglu
          <br />
          Odenbergstraße 26
          <br />
          34281 Gudensberg
        </p>

        <h4 className="font-bold text-text-primary mt-6 mb-2">
          EU-Streitschlichtung
        </h4>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h4 className="font-bold text-text-primary mt-6 mb-2">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h4>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </LegalAccordion>

      <h2 id="haftung-urheberrecht">Haftung & Urheberrecht</h2>
      <LegalAccordion title="Rechtliche Hinweise" icon={<ShieldAlert />}>
        <h4 className="font-bold text-text-primary mb-2">
          Haftung für Inhalte
        </h4>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>

        <h4 className="font-bold text-text-primary mt-6 mb-2">
          Haftung für Links
        </h4>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung unzumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>

        <h4 className="font-bold text-text-primary mt-6 mb-2">Urheberrecht</h4>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>

        <h4 className="font-bold text-text-primary mt-6 mb-2">Bildnachweis</h4>
        <p>
          Die auf dieser Website verwendeten Bilder und Grafiken stammen zum
          Teil von folgenden Quellen: <br />
          - Unsplash (Lizenzfrei)
          <br />- Eigene Aufnahmen (Urheberrechtlich geschützt durch AKAN
          Dienstleistung)
        </p>
      </LegalAccordion>
    </LegalPageTemplate>
  );
}
