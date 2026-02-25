import type { Metadata } from 'next';
import LegalPageTemplate from '@/features/legal/components/LegalPageTemplate';

export const revalidate = false; // SSG: fully static

export const metadata: Metadata = {
    title: 'Allgemeine Geschäftsbedingungen (AGB)',
    description: 'AGB der AKAN Dienstleistung – Rechtliche Grundlagen für eine partnerschaftliche Zusammenarbeit.',
    robots: { index: false, follow: true },
};

export default function AGB() {
    return (
        <LegalPageTemplate
            title="Allgemeine Geschäftsbedingungen"
            subtitle="Transparenz und Zuverlässigkeit in jeder vertraglichen Beziehung. Unsere rechtlichen Rahmenbedingungen für infrastrukturelles Facility Management."
            lastUpdated="Februar 2026"
            icon="scale"
        >
            <h2 id="geltungsbereich">1. Geltungsbereich und Vertragsgrundlagen</h2>
            <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle gegenwärtigen und zukünftigen Verträge, Lieferungen und sonstigen Leistungen zwischen der <strong>AKAN Dienstleistung</strong>, Musterstraße 12, 34281 Gudensberg (im Folgenden &bdquo;Auftragnehmer&ldquo; genannt) und ihren Kunden (im Folgenden &bdquo;Auftraggeber&ldquo; genannt).
            </p>
            <p>
                Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers werden, selbst bei Kenntnis, nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt. Alle Vereinbarungen, die zwischen dem Auftragnehmer und dem Auftraggeber zwecks Ausführung des Vertrages getroffen werden, sind in dem jeweiligen Vertrag und diesen AGB schriftlich niedergelegt.
            </p>

            <h2 id="art-und-umfang-der-leistungen">2. Art und Umfang der Leistungen</h2>
            <p>
                Der Auftragnehmer verpflichtet sich, die vertraglich vereinbarten Reinigungs- und Dienstleistungen fach- und termingerecht auszuführen. Die im Leistungsverzeichnis oder im Angebot beschriebenen Tätigkeiten und Reinigungsintervalle sind bindend.
            </p>
            <p>
                Änderungen oder Erweiterungen des Leistungsumfangs bedürfen der vorherigen schriftlichen Vereinbarung. Der Auftragnehmer stellt, sofern nicht anders vereinbart, die erforderlichen Reinigungsmittel, Geräte und Maschinen. Strom, Wasser sowie geeignete Räumlichkeiten zur Aufbewahrung des Materials und zur Nutzung durch das Personal werden vom Auftraggeber kostenlos zur Verfügung gestellt.
            </p>
            <p>
                Der Auftragnehmer ist berechtigt, zur Erfüllung seiner vertraglichen Verpflichtungen geeignete Subunternehmer nach vorheriger Ankündigung beim Auftraggeber einzusetzen, solange diese denselben Qualitäts- und Sicherheitsstandards unterliegen.
            </p>

            <h2 id="auftragsausfuehrung-und-personal">3. Auftragsausführung und Personal</h2>
            <p>
                Die Leistungen werden durch geschultes, fachlich qualifiziertes und ordnungsgemäß angemeldetes Personal ausgeführt. Der Auftragnehmer ist allein weisungsbefugt gegenüber seinem Personal. Dem Auftraggeber steht kein Direktionsrecht gegenüber den Mitarbeitern des Auftragnehmers zu. Eventuelle Mängelrügen oder Sonderwünsche sind direkt an die zuständige Objektleitung oder die Geschäftsführung des Auftragnehmers zu richten.
            </p>
            <p>
                Das Personal ist verpflichtet, die Hausordnung des Auftraggebers sowie bestehende Sicherheits- und Geheimhaltungsvorschriften zu beachten, sofern diese dem Auftragnehmer vorab schriftlich mitgeteilt wurden. Bei wiederholten Verstößen wird der Auftragnehmer nach entsprechender Mitteilung für personellen Ersatz sorgen.
            </p>

            <h2 id="abnahme-und-gewaehrleistung">4. Abnahme und Gewährleistung</h2>
            <p>
                Die Werkleistungen des Auftragnehmers gelten bei wiederkehrenden Reinigungsarbeiten als vertragsgemäß erfüllt und abgenommen, wenn der Auftraggeber nicht unverzüglich – spätestens jedoch binnen 24 Stunden nach Beendigung der jeweiligen Reinigungsarbeiten – schriftlich begründete Einwendungen erhebt. Bei Einmalaufträgen (z. B. Grundreinigung, Bauendreinigung) erfolgt eine förmliche Abnahme nach Abschluss der Arbeiten.
            </p>
            <p>
                Werden berechtigte und rechtzeitige Mängelrügen geltend gemacht, ist der Auftragnehmer zur Nachbesserung verpflichtet und berechtigt. Für die Nachbesserung ist eine angemessene Frist einzuräumen. Schlägt die Nachbesserung fehl oder wird sie unberechtigt verweigert, kann der Auftraggeber eine angemessene Herabsetzung der Vergütung (Minderung) verlangen. Ein generelles Zurückbehaltungsrecht hinsichtlich der gesamten Vergütung ist ausgeschlossen.
            </p>

            <h2 id="preise-und-zahlungsbedingungen">5. Preise und Zahlungsbedingungen</h2>
            <p>
                Alle angegebenen Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer in der jeweils gültigen Höhe. Rechnungen sind, sofern nicht anders schriftlich vereinbart, innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar. Die Abrechnung wiederkehrender Leistungen erfolgt in der Regel monatlich im Voraus.
            </p>
            <p>
                Gerät der Auftraggeber in Zahlungsverzug, ist der Auftragnehmer berechtigt, Verzugszinsen in gesetzlicher Höhe (bei B2B-Kunden 9 Prozentpunkte über dem Basiszinssatz) sowie eine Pauschale nach § 288 Abs. 5 BGB zu fordern. Bei anhaltendem Zahlungsverzug (mehr als ein Monatsbetrag) behält sich der Auftragnehmer das Recht vor, die Leistungen bis zur vollständigen Begleichung der offenen Forderungen einzustellen (Leistungsverweigerungsrecht).
            </p>
            <p>
                Preisanpassungen aufgrund von tariflichen Lohnerhöhungen, Steigerungen von Materialkosten oder gesetzlichen Lohnnebenkosten sind mit einer Ankündigungsfrist von einem Monat zulässig. Dem Auftraggeber steht in diesem Fall ein Sonderkündigungsrecht zu.
            </p>

            <h2 id="haftung">6. Haftung und Schadensersatz</h2>
            <p>
                Für Schäden, die nachweislich auf Reinigungs- oder Dienstleistungsmaßnahmen des Auftragnehmers zurückzuführen sind, haftet dieser im Rahmen der von ihm abgeschlossenen Betriebshaftpflichtversicherung. Eine Haftung für leichte Fahrlässigkeit ist, soweit gesetzlich zulässig, ausgeschlossen.
            </p>
            <p>
                Der Auftraggeber ist verpflichtet, offensichtliche Schäden unverzüglich, spätestens jedoch innerhalb von drei (3) Werktagen nach Schadenseintritt, schriftlich beim Auftragnehmer zu melden. Verspätet angezeigte Schäden können zu einem Verlust des Schadensersatzanspruchs führen.
            </p>
            <p>
                Nicht haftbar gemacht werden kann der Auftragnehmer für Schäden, die durch unsachgemäße Beschaffenheit der zu reinigenden Materialien oder verdeckte Mängel (z. B. nicht kratzfeste Gläser, fehlerhafte Verfugungen) entstehen, sofern der Auftragnehmer diese nicht durch fachgerechte Prüfung im Vorfeld hätte erkennen müssen.
            </p>

            <h2 id="vertragslaufzeit-und-kuendigung">7. Vertragslaufzeit und Kündigung</h2>
            <p>
                Verträge über laufende Unterhaltsreinigungen werden, sofern nicht anders vereinbart, auf unbestimmte Zeit geschlossen. Die ordentliche Kündigungsfrist beträgt, sofern einzelvertraglich nicht anders geregelt, drei Monate zum Monatsende. Jede Kündigung bedarf der Schriftform.
            </p>
            <p>
                Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt für den Auftragnehmer insbesondere vor, wenn der Auftraggeber mit mehr als einer Monatsvergütung in Verzug gerät oder das Insolvenzverfahren über sein Vermögen eröffnet wird.
            </p>

            <h2 id="abwerbeverbot">8. Abwerbeverbot</h2>
            <p>
                Dem Auftraggeber ist es untersagt, Mitarbeiter des Auftragnehmers während der Laufzeit des Vertrages sowie bis sechs Monate nach Vertragsbeendigung abzuwerben oder selbst bzw. durch Dritte zu beschäftigen. Bei Zuwiderhandlung verpflichtet sich der Auftraggeber zur Zahlung einer Vertragsstrafe in Höhe des dreifachen Bruttomonatsgehalts des jeweiligen Mitarbeiters, mindestens jedoch 3.000 EUR.
            </p>

            <h2 id="datenschutz-und-vertraulichkeit">9. Datenschutz und Vertraulichkeit</h2>
            <p>
                Beide Vertragsparteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten Informationen über die jeweils andere Partei streng vertraulich zu behandeln und nicht an unbefugte Dritte weiterzugeben. Dies gilt insbesondere für Betriebs- und Geschäftsgeheimnisse.
            </p>
            <p>
                Der Auftragnehmer wird personenbezogene Daten des Auftraggebers ausschließlich im Rahmen der gesetzlichen Bestimmungen (insbesondere der DSGVO) zum Zwecke der Vertragsabwicklung verarbeiten. Weitere Details sind der separaten Datenschutzerklärung zu entnehmen.
            </p>

            <h2 id="schlussbestimmungen">10. Schlussbestimmungen</h2>
            <p>
                Sollten einzelne Bestimmungen dieser AGB oder des jeweiligen Vertrages ganz oder teilweise unwirksam sein oder werden, so wird hierdurch die Gültigkeit der übrigen Bestimmungen nicht berührt. Anstelle der unwirksamen Bestimmung gilt diejenige gesetzlich zulässige Regelung als vereinbart, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
            </p>
            <p>
                Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist, soweit der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist, der Sitz des Auftragnehmers (Amtsgericht Fritzlar / Landgericht Kassel). Es gilt ausschließlich das Recht der Bundesrepublik Deutschland.
            </p>
        </LegalPageTemplate>
    );
}
