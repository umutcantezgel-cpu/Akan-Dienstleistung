import { Building2, Sun, HardHat, Factory, Sparkles, type LucideIcon } from 'lucide-react';

export interface Service {
    id: string;
    title: string;
    subtitle: string;
    shortDesc: string;
    longDesc: string;
    description: string;
    icon: string;
    lucideIcon: LucideIcon;
    link: string;
    features: string[];
    highlights: { label: string; value: string }[];
    category: 'commercial' | 'residential' | 'specialized';
}

export const services: Service[] = [
    {
        id: 'unterhaltsreinigung',
        title: 'Unterhaltsreinigung',
        subtitle: 'Büros, Praxen & Kanzleien',
        shortDesc: 'Konstante Qualität und feste Ansprechpartner. Wir garantieren ein repräsentatives Erscheinungsbild – jeden Tag.',
        longDesc: 'Unsere Unterhaltsreinigung bietet Ihnen die absolut verlässliche Pflege Ihrer Geschäftsräume durch feste Stammteams.',
        description: 'Ihre Mitarbeiter und Kunden verdienen ein perfektes Umfeld. Wir setzen feste Teams für Ihr Objekt ein. Das bedeutet für Sie: Keine ständige Einarbeitung neuer Kräfte, konstante Reinigungsqualität und absolute Zuverlässigkeit ohne Callcenter-Frust.',
        icon: '🏢',
        lucideIcon: Building2,
        link: '/leistungen/unterhaltsreinigung',
        features: ['Tägliche / wöchentliche Reinigung', 'Sanitäranlagen', 'Bodenreinigung & -pflege', 'Müllentsorgung', 'Individuelle Reinigungspläne'],
        highlights: [
            { label: 'Intervall', value: 'Täglich bis monatlich' },
            { label: 'Reaktionszeit', value: '< 24 Stunden' },
            { label: 'Zertifizierung', value: 'ISO 9001' },
            { label: 'Zufriedenheit', value: '98%' },
        ],
        category: 'commercial',
    },
    {
        id: 'fensterreinigung',
        title: 'Fensterreinigung',
        subtitle: 'Glas- & Fassadenreinigung',
        shortDesc: 'Kristallklare Aussichten – mit Garantie. Wir sorgen für streifenfreien Glanz bei jeder Witterung.',
        longDesc: 'Unsere Fensterreinigung sorgt für absolut kristallklare Sicht und einen perfekten ersten Eindruck von außen.',
        description: 'Ihre Gebäudehülle ist die Visitenkarte Ihres Unternehmens. Wir liefern streifenfreie Ergebnisse und sind bei Wind und Wetter Ihr fester, verlässlicher Ansprechpartner – ohne Wenn und Aber.',
        icon: '✨',
        lucideIcon: Sun,
        link: '/leistungen/fensterreinigung',
        features: ['Osmosetechnik', 'Rahmen- & Falzreinigung', 'Glasfassaden', 'Wintergärten', 'Regelmäßige Intervalle'],
        highlights: [
            { label: 'Technik', value: 'Osmose & manuell' },
            { label: 'Höhe', value: 'Bis 15 Meter' },
            { label: 'Ergebnis', value: 'Streifenfrei' },
            { label: 'Umweltfreundlich', value: 'Ja — ohne Chemie' },
        ],
        category: 'commercial',
    },
    {
        id: 'bauendreinigung',
        title: 'Bauendreinigung',
        subtitle: 'Neubau & Sanierung',
        shortDesc: 'Vom Rohbau zum Traumhaus. Wir machen Ihre Immobilie termingerecht und gründlich übergabefertig.',
        longDesc: 'Wir garantieren eine pünktliche und restlose Beseitigung von Baustaub nach Bau- oder Sanierungsarbeiten.',
        description: 'Bauverzögerungen kosten Geld und Nerven. Wir garantieren Ihnen eine strikt pünktliche, fehlerfreie Beseitigung von Baustaub und Handwerkerschmutz, damit Ihre Bauabnahme vollkommen reibungslos verläuft.',
        icon: '🚧',
        lucideIcon: HardHat,
        link: '/leistungen/bauendreinigung',
        features: ['Grobreinigung', 'Feinreinigung', 'Visuelle Reinigung', 'Fenster & Rahmen', 'Bodenversiegelung'],
        highlights: [
            { label: 'Phasen', value: 'Grob → Fein → Visuell' },
            { label: 'Termintreue', value: '100%' },
            { label: 'Entsorgung', value: 'Inklusive' },
            { label: 'Prüfprotokoll', value: 'Auf Wunsch' },
        ],
        category: 'specialized',
    },
    {
        id: 'industriereinigung',
        title: 'Industriereinigung',
        subtitle: 'Hallen & Produktionsstätten',
        shortDesc: 'Sauberkeit nach Industriestandard. Zertifiziert, versichert und exakt auf Ihre Produktionsabläufe abgestimmt.',
        longDesc: 'Absolute Verlässlichkeit für Ihre Produktionshallen mit BG-konformen Reinigungslösungen.',
        description: 'In der Industrie zählt absolute Verlässlichkeit. Wir reinigen Maschinen und Hallen BG-konform, ohne jemals Ihre kritischen Produktionsprozesse zu stören. Ein fester, direkter Ansprechpartner garantiert reibungslose Abläufe ohne Verwaltungsoverhead.',
        icon: '🏭',
        lucideIcon: Factory,
        link: '/leistungen/industriereinigung',
        features: ['Hallenreinigung', 'Maschinenreinigung', 'Hochdruckreinigung', 'Bodenbeschichtung', 'Sicherheitsstandards'],
        highlights: [
            { label: 'Sicherheit', value: 'BGV-konform' },
            { label: 'Einsatz', value: '24/7 möglich' },
            { label: 'Maschinen', value: 'Eigeninventar' },
            { label: 'Team', value: 'Spezialisiert' },
        ],
        category: 'specialized',
    },
    {
        id: 'sonderreinigung',
        title: 'Sonderreinigung',
        subtitle: 'Chirurgische Präzision für Härtefälle',
        shortDesc: 'Spezialverfahren bei extremen Kontaminationen, Havarien, Desinfektion und Sanierung mit zertifizierter Sicherheit.',
        longDesc: 'Wir bieten maßgeschneiderte Spezialreinigungen für anspruchsvolle Herausforderungen in Industrie, Gewerbe und Verwaltung.',
        description: 'Standard-Reinigungsverfahren stoßen bei Havarien, Brandschäden, tief sitzenden Verkrustungen oder sensiblen Hygienebereichen an ihre Grenzen. Wir operieren mit toxikologischer Präzision, Trockeneis-Verfahren, Ozon-Behandlungen und zertifizierten Desinfektionsmitteln.',
        icon: '🛡️',
        lucideIcon: Sparkles,
        link: '/leistungen/sonderreinigung',
        features: ['Grund- & Intensivreinigung', 'Desinfektionsreinigung nach RKI/HACCP', 'Teppich- & Polsterreinigung', 'Graffiti- & Schadstoffbeseitigung', 'Geruchsneutralisation'],
        highlights: [
            { label: 'Verfahren', value: 'Trockeneis & Ozon' },
            { label: 'Hygiene', value: 'RKI / HACCP' },
            { label: 'Verfügbarkeit', value: 'Notdienst 24/7' },
            { label: 'Dokumentation', value: 'Audit-sicher' },
        ],
        category: 'specialized',
    },
];
