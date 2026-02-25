import type { Metadata } from 'next';
import LegalPageTemplate from '@/features/legal/components/LegalPageTemplate';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der AKAN Dienstleistung – Angaben gemäß § 5 TMG.',
  robots: { index: false, follow: true },
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
      <p>
        <strong>AKAN Dienstleistung</strong><br />
        Gebäudereinigung und Facility Services<br />
        Inhaber: Cemal Hilaloglu<br />
        Musterstraße 12<br />
        34281 Gudensberg<br />
        Deutschland
      </p>

      <h2 id="kontakt">Kontakt</h2>
      <p>
        <strong>Telefon:</strong> 0152 34754386<br />
        <strong>E-Mail:</strong> <a href="mailto:info@akan-dienstleistung.de">info@akan-dienstleistung.de</a><br />
        <strong>Telefax:</strong> Auf Anfrage<br />
        <strong>Website:</strong> <a href="https://akan-dienstleistung.de">www.akan-dienstleistung.de</a>
      </p>

      <h2 id="umsatzsteuer-id">Umsatzsteuer-Identifikationsnummer</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        <strong>024 827 615 98</strong>
      </p>

      <h2 id="berufsbezeichnung-und-kammerzugeh-rigkeit">Berufsbezeichnung und Kammerzugehörigkeit</h2>
      <p>
        Berufsbezeichnung: Gebäudereiniger<br />
        Zuständige Kammer: Handwerkskammer Kassel<br />
        Staat, in dem der Titel verliehen wurde: Bundesrepublik Deutschland
      </p>

      <h2 id="berufshaftpflichtversicherung">Angaben zur Berufshaftpflichtversicherung</h2>
      <p>
        Wir unterhalten eine Betriebshaftpflichtversicherung, die für etwaige durch uns oder unsere Erfüllungsgehilfen verursachte Schäden (Personen-, Sach- und Vermögensschäden) einsteht.<br /><br />
        <strong>Name und Sitz des Versicherers:</strong><br />
        (Name der Versicherung eintragen)<br />
        (Musterstadt 1, 12345 Musterstadt)<br /><br />
        <strong>Geltungsraum der Versicherung:</strong> Deutschland
      </p>

      <h2 id="redaktionell-verantwortlich">Redaktionell verantwortlich</h2>
      <p>
        Verantwortlich für redaktionelle Inhalte sowie journalistisch-redaktionell gestaltete Angebote im Sinne des § 18 Abs. 2 MStV:<br /><br />
        Cemal Hilaloglu<br />
        Musterstraße 12<br />
        34281 Gudensberg
      </p>

      <h2 id="eu-streitschlichtung">EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2 id="verbraucherstreitbeilegung">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2 id="haftung-fr-inhalte">Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h2 id="haftung-fr-links">Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </p>
      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung unzumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h2 id="urheberrecht">Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </p>
      <p>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>

      <h2 id="bildnachweis">Bildnachweis</h2>
      <p>
        Die auf dieser Website verwendeten Bilder und Grafiken stammen zum Teil von folgenden Quellen: <br />
        - Unsplash (Lizenzfrei)<br />
        - Eigene Aufnahmen (Urheberrechtlich geschützt durch AKAN Dienstleistung)
      </p>
    </LegalPageTemplate>
  );
}
