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
        subtitle: 'Büros, Praxen, Kanzleien & Gewerbeobjekte',
        shortDesc: 'Regelmäßige Qualitätskontrollen, feste Ansprechpartner und verlässliche Reinigung nach klarem Plan.',
        longDesc: 'Unsere Unterhaltsreinigung bietet Ihnen die absolut verlässliche Pflege Ihrer Geschäftsräume durch feste Stammteams.',
        description: 'Wir arbeiten nach einem klar vereinbarten Reinigungsplan. Alle Leistungen werden zuverlässig und regelmäßig durchgeführt – ohne dass Sie ständig nachfragen oder uns daran erinnern müssen. Bei Krankheit oder Urlaub sorgen wir zuverlässig für Ersatz.',
        icon: '🏢',
        lucideIcon: Building2,
        link: '/leistungen/unterhaltsreinigung',
        features: ['Büros, Kanzleien & Praxen', 'Sanitärbereich-Reinigung & Hygiene', 'Moderne Bodenreinigung (iMop-Technik)', 'Regelmäßige Qualitätskontrollen', 'Feste Vertretungsregelung bei Ausfall'],
        highlights: [
            { label: 'Intervall', value: 'Flexibel nach Absprache' },
            { label: 'Vertretung', value: 'Zuverlässig geregelt' },
            { label: 'Qualität', value: 'Regelmäßige Kontrollen' },
            { label: 'Ansprechpartner', value: 'Persönlich vor Ort' },
        ],
        category: 'commercial',
    },
    {
        id: 'fensterreinigung',
        title: 'Glas- und Fensterreinigung',
        subtitle: 'Gepflegter erster Eindruck & streifenfreie Klarheit',
        shortDesc: 'Streifenfreie und materialschonende Reinigung von Fenstern, Rahmen und Glasflächen – auch in großen Höhen.',
        longDesc: 'Gepflegte Fenster und Glasflächen prägen den ersten Eindruck Ihres Unternehmens. Wir sorgen für gründliche und schonende Reinigung.',
        description: 'Mit moderner Reinigungstechnik, Osmoseverfahren und bei Bedarf Hubsteiger-Technik reinigen wir Glasflächen effizient und gründlich. Dabei achten wir auf eine fachgerechte und materialschonende Reinigung von Glas, Rahmen und Dichtungen.',
        icon: '✨',
        lucideIcon: Sun,
        link: '/leistungen/fensterreinigung',
        features: ['Streifenfreie Glasflächen', 'Schonende Rahmen- & Falzreinigung', 'Osmosetechnik mit Reinwasser', 'Auch in großen Höhen', 'Gepflegter erster Eindruck'],
        highlights: [
            { label: 'Verfahren', value: 'Osmose & Handwerk' },
            { label: 'Einsatz', value: 'Auch in großen Höhen' },
            { label: 'Ergebnis', value: 'Streifenfrei klar' },
            { label: 'Schonung', value: 'Rahmen & Dichtungen' },
        ],
        category: 'commercial',
    },
    {
        id: 'bauendreinigung',
        title: 'Bauendreinigung',
        subtitle: 'Termingerecht sauber für Ihre Bauabnahme',
        shortDesc: 'Baugrob- und Baufeinreinigung nach Abschluss der Bauarbeiten. Zuverlässig bezugsfertig mit Mängeldokumentation.',
        longDesc: 'Nach Abschluss der Bauarbeiten sorgen wir mit unserer Bauendreinigung für einen sauberen und bezugsfertigen Zustand.',
        description: 'Bei der Baugrob- und Baufeinreinigung entfernen wir zuverlässig Handwerkerschmutz, Baustaub, Bohrstaub, Zementschleier und weitere Verschmutzungen. Bereits vorhandene Mängel werden auf Wunsch fotografisch festgehalten.',
        icon: '🚧',
        lucideIcon: HardHat,
        link: '/leistungen/bauendreinigung',
        features: ['Baugrob- & Baufeinreinigung', 'Entfernung von Zementschleier & Baustaub', 'Schonender Umgang mit neuen Oberflächen', 'Dokumentation vorhandener Mängel', 'Termingerecht zur Abnahme'],
        highlights: [
            { label: 'Ablauf', value: 'Grob- & Feinreinigung' },
            { label: 'Termine', value: 'Strikt abgestimmt' },
            { label: 'Oberflächen', value: 'Schonend behandelt' },
            { label: 'Dokumentation', value: 'Transparent vor Ort' },
        ],
        category: 'specialized',
    },
    {
        id: 'industriereinigung',
        title: 'Industriereinigung',
        subtitle: 'Böden, Hallenabtrennungen & Krananlagen',
        shortDesc: 'Fachgerechte Grundreinigung von Industrieböden, PVC-Streifenvorhängen und Anlagenkomponenten.',
        longDesc: 'Fachgerechte und gründliche Reinigung von Industriehallen, Böden und Vorrichtungen.',
        description: 'Wir entfernen Öl-, Fett- und Abriebspuren gründlich von Industrieböden, reinigen PVC-Streifenvorhänge für optimale Lichtdurchlässigkeit und säubern Industriekrane und Anlagen in Höhenlagen.',
        icon: '🏭',
        lucideIcon: Factory,
        link: '/leistungen/industriereinigung',
        features: ['Industrieboden-Grundreinigung', 'Öl-, Fett- & Abriebentfernung', 'PVC-Streifenvorhänge & Abtrennungen', 'Industriekrane & Hebezeuge', 'Flexible Arbeitszeiten'],
        highlights: [
            { label: 'Industrieböden', value: 'Grundreinigung ohne Versiegelung' },
            { label: 'Vorrichtungen', value: 'Krane & Anlagen' },
            { label: 'Arbeitszeiten', value: 'Flexibel nach Absprache' },
            { label: 'Ausrüstung', value: 'Profi-Reinigungsgeräte' },
        ],
        category: 'specialized',
    },
    {
        id: 'sonderreinigung',
        title: 'Sonderreinigung',
        subtitle: 'Gründliche Lösungen für besondere Verschmutzungen',
        shortDesc: 'Grund- und Intensivreinigung, Sanitär-Fliesen, Desinfektion und Teppichpflege für anspruchsvolle Fälle.',
        longDesc: 'Nicht jede Verschmutzung lässt sich mit einer normalen Unterhaltsreinigung beseitigen. Wir bieten abgestimmte Sonderreinigungen.',
        description: 'Bei hartnäckigen oder außergewöhnlichen Verschmutzungen setzen wir geeignete Reinigungsmittel und Verfahren ein, die präzise auf die jeweilige Oberfläche und Verschmutzung abgestimmt werden.',
        icon: '🛡️',
        lucideIcon: Sparkles,
        link: '/leistungen/sonderreinigung',
        features: ['Grund- & Intensivreinigung (inkl. Sanitär & Fliesen)', 'Gezielte Desinfektionsreinigung', 'Teppich- & Polsterreinigung', 'Hartnäckige Verschmutzungen & Hallentore', 'Individuelle Sonderreinigung nach Bedarf'],
        highlights: [
            { label: 'Einsatz', value: 'Individuell abgestimmt' },
            { label: 'Sanitär', value: 'Fliesen & Fugen Tiefenreinigung' },
            { label: 'Reinigungsmittel', value: 'Materialsicher' },
            { label: 'Beratung', value: 'Kostenlose Vor-Ort-Besichtigung' },
        ],
        category: 'specialized',
    },
];
