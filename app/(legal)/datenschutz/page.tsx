import type { Metadata } from 'next';
import LegalPageTemplate from '@/features/legal/components/LegalPageTemplate';
import CookieDeclarationClient from '@/features/consent/components/CookieDeclarationClient';

export const revalidate = false; // SSG: fully static

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der AKAN Dienstleistung – Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO.',
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return (
    <LegalPageTemplate
      title="Datenschutzerklärung"
      subtitle="Vertrauen und Sicherheit sind unser Fundament. Hier erfahren Sie detailliert, wie wir Ihre personenbezogenen Daten erheben, verarbeiten und schützen."
      lastUpdated="Februar 2026"
      icon="shield"
    >
      <h2 id="datenschutz-auf-einen-blick">1. Datenschutz auf einen Blick</h2>
      <h3 id="allgemeine-hinweise">Allgemeine Hinweise</h3>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
      </p>

      <h3 id="datenerfassung-auf-dieser-website">Datenerfassung auf dieser Website</h3>
      <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
      <p>
        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
      </p>

      <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
      <p>
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder uns per E-Mail übersenden.
      </p>
      <p>
        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
      </p>

      <p><strong>Wofür nutzen wir Ihre Daten?</strong></p>
      <p>
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden oder um Ihre geschäftlichen Anfragen (Auftragsabwicklung im B2B/B2C-Bereich) zügig zu bearbeiten.
      </p>

      <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
      <p>
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </p>

      <h2 id="hosting">2. Hosting</h2>
      <p>Wir hosten die Website bei einem externen Dienstleister (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
      <p>
        Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
      </p>
      <p>Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p>

      <h3 id="auftragsverarbeitung">Auftragsverarbeitung</h3>
      <p>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>

      <h2 id="allgemeine-hinweise-pflichtinformationen">3. Allgemeine Hinweise und Pflichtinformationen</h2>
      <h3 id="datenschutz-grundprinzipien">Datenschutz als Kernwert</h3>
      <p>
        Als Gebäudereinigungs- und Facility-Management-Unternehmen gehen wir täglich mit sensiblen Kundenbereichen um. Diese Diskretion spiegelt sich auch in unserem digitalen Auftritt wider. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
      </p>
      <p>
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
      </p>
      <p>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
      </p>

      <h3 id="verantwortliche-stelle">Hinweis zur verantwortlichen Stelle</h3>
      <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
      <p>
        AKAN Dienstleistung<br />
        Cemal Hilaloglu<br />
        Musterstraße 12<br />
        34281 Gudensberg<br />
        Telefon: 0152 34754386<br />
        E-Mail: info@akan-dienstleistung.de
      </p>
      <p>
        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
      </p>

      <h3 id="speicherdauer">Speicherdauer</h3>
      <p>
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
      </p>

      <h3 id="datenschutzbeauftragter">Gesetzlicher Datenschutzbeauftragter</h3>
      <p>
        Da wir als Unternehmen die gesetzlich vorgeschriebene Schwellengrenze in der Regel nicht überschreiten, haben wir keinen gesonderten Datenschutzbeauftragten bestellt. Alle datenschutzrelevanten Anfragen richten Sie bitte direkt an die Inhaberschaft (siehe „Verantwortliche Stelle“).
      </p>

      <h3 id="widerruf-einwilligung">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
      <p>
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>

      <h3 id="widerspruchsrecht">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
      <p>
        WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG.
      </p>

      <h3 id="beschwerderecht">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
      <p>
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
      </p>

      <h3 id="ssl-tls-verschluesselung">SSL- bzw. TLS-Verschlüsselung</h3>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
      </p>

      <h2 id="datenerfassung">4. Datenerfassung auf dieser Website</h2>
      <h3 id="cookies">Cookies, Web-Storage & Externe Medien</h3>
      <p>
        Unsere Internetseiten verwenden so genannte „Cookies“ und ähnliche Technologien (wie z.B. HTML5 Local Storage). Diese richten auf Ihrem Endgerät keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
      </p>
      <p>
        Wir nutzen auf dieser Website ein striktes, lokales Consent-Management-System ("Zero-Tolerance Privacy"). Es werden standardmäßig <strong>keine</strong> technisch nicht notwendigen Cookies gesetzt und <strong>keine</strong> Daten an Drittanbieter (wie Google) übertragen, bevor Sie nicht explizit eingewilligt haben.
      </p>

      <div className="my-8">
        <h4 className="text-xl font-bold font-display text-text-primary mb-2">Ihre aktuellen Cookie-Einstellungen</h4>
        <p className="text-sm text-text-secondary mb-4">
          Die folgende Tabelle zeigt in Echtzeit, welche Dienste aktuell auf Basis Ihrer persönlichen Datenschutzeinstellungen (Zustimmung oder Ablehnung) aktiv sind:
        </p>
        <CookieDeclarationClient />
        <p className="text-sm mt-4">
          <em>Sie können Ihre getroffene Auswahl jederzeit über das Fingerabdruck-Symbol am unteren linken Bildschirmrand widerrufen oder anpassen. Bei einem Widerruf werden die entsprechenden Cookies in Ihrem Browser umgehend gelöscht.</em>
        </p>
      </div>

      <h3 id="server-log-dateien">Server-Log-Dateien</h3>
      <p>
        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
      </p>
      <ul>
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>
      <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</p>

      <h3 id="kontaktformular">Kontaktformular & E-Mail Anfragen</h3>
      <p>
        Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>
      <p>
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
      </p>
      <p>
        Die von Ihnen eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
      </p>

      <h2 id="social-media-plugins">5. Soziale Medien und Plugins</h2>
      <p>
        Im Bereich der B2B Dienstleistung greifen wir primär auf direkte Kommunikation zurück. Sollten auf unserer Website zukünftig Plugins von Plattformen wie LinkedIn oder Facebook integriert werden, so erfolgt dies nach der bewährten Shariff-Methode oder über einen 2-Klick-Mechanismus, welcher sicherstellt, dass ohne Ihre explizite Handlung keine Daten an diese Netzwerke fließen.
      </p>

      <h2 id="bewerbungen">6. Umgang mit Bewerberdaten</h2>
      <p>
        Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben (z. B. per E-Mail oder postalisch). Im Folgenden informieren wir Sie über Umfang, Zweck und Verwendung Ihrer im Rahmen des Bewerbungsprozesses erhobenen personenbezogenen Daten. Wir versichern, dass die Erhebung, Verarbeitung und Nutzung Ihrer Daten in Übereinstimmung mit geltendem Datenschutzrecht erfolgt.
      </p>
      <h3 id="umfang-zweck">Umfang und Zweck der Datenerhebung</h3>
      <p>
        Wenn Sie uns eine Bewerbung zukommen lassen, verarbeiten wir Ihre damit verbundenen personenbezogenen Daten (z. B. Kontakt- und Kommunikationsdaten, Bewerbungsunterlagen, Notizen im Rahmen von Vorstellungsgesprächen etc.), soweit dies zur Entscheidung über die Begründung eines Beschäftigungsverhältnisses erforderlich ist. Rechtsgrundlage hierfür ist § 26 BDSG nach deutschem Recht sowie Art. 6 Abs. 1 lit. b DSGVO.
      </p>
      <h3 id="aufbewahrung">Aufbewahrungsdauer der Daten</h3>
      <p>
        Sofern wir Ihnen kein Stellenangebot machen können, Sie ein Stellenangebot ablehnen oder Ihre Bewerbung zurückziehen, behalten wir uns das Recht vor, die von Ihnen übermittelten Daten auf Grundlage unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) für bis zu 6 Monate aufzubewahren. Anschließend werden die Daten gelöscht und Unterlagen vernichtet, es sei denn es besteht eine gesetzliche Aufbewahrungspflicht.
      </p>
    </LegalPageTemplate>
  );
}
