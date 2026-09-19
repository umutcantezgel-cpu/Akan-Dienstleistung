export interface Testimonial {
    text: string;
    author: string;
    role: string;
    rating: number;
    badge?: string | undefined;
}

export interface TeamMember {
    name: string;
    role: string;
    desc: string;
    imageUrl: string;
    skills: { label: string; level: number }[];
}

export interface FAQ {
    question: string;
    answer: string;
    category: string;
}

export interface Stat {
    value: number;
    suffix: string;
    label: string;
    description: string;
}

export interface Region {
    name: string;
    distance: string;
}

export interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}

export const testimonials: Testimonial[] = [];

export const team: TeamMember[] = [
    {
        name: 'Zeynep Hilaloglu',
        role: 'Objektleitung',
        desc: 'Langjährige praktische Erfahrung in der Gebäudereinigung – von der Reinigung vor Ort über die Objektleitung bis hin zur Organisation. Persönlich vor Ort im Einsatz bei der Objektbetreuung sowie bei Grund- und Sonderreinigungen.',
        imageUrl: '',
        skills: [
            { label: 'Objektleitung & Organisation', level: 95 },
            { label: 'Qualitätskontrolle', level: 95 },
            { label: 'Grund- & Sonderreinigung', level: 92 },
            { label: 'Kundenbetreuung vor Ort', level: 90 },
        ],
    },
    {
        name: 'Cemal Hilaloglu',
        role: 'Inhaber & Gründer',
        desc: 'Gründer von AKAN Dienstleistung. Persönlicher Ansprechpartner für Kunden, Besichtigungen, maßgeschneiderte Angebote und verlässliche partnerschaftliche Zusammenarbeit.',
        imageUrl: '',
        skills: [
            { label: 'Kundenbetreuung', level: 95 },
            { label: 'Angebotswesen & Besichtigung', level: 92 },
            { label: 'Projektorganisation', level: 90 },
            { label: 'Unternehmensführung', level: 88 },
        ],
    },
];

export const faqs: FAQ[] = [
    {
        question: 'Wie viel kostet eine professionelle Reinigung?',
        answer: 'Die Kosten richten sich nach Art, Größe und Umfang der Reinigung. Gerne besichtigen wir Ihr Objekt vor Ort und erstellen Ihnen anschließend ein individuelles und transparentes Angebot.',
        category: 'Kosten',
    },
    {
        question: 'Welche Gebiete deckt AKAN ab?',
        answer: 'Wir sind in Gudensberg, Kassel, Baunatal, Fritzlar, Melsungen und der umliegenden Region für unsere Kunden im Einsatz. Bei größeren oder besonderen Aufträgen sind nach Absprache auch weitere Einsatzorte möglich.',
        category: 'Einsatzgebiet',
    },
    {
        question: 'Sind Ihre Mitarbeiter versichert und geschult?',
        answer: 'Ja. Unser Betrieb verfügt über eine Gewerbehaftpflichtversicherung. Unsere Mitarbeiter werden von uns sorgfältig eingearbeitet und regelmäßig zu den jeweiligen Reinigungsarbeiten, Reinigungsmitteln und Abläufen geschult.',
        category: 'Sicherheit',
    },
    {
        question: 'Welche Reinigungsmittel verwenden Sie?',
        answer: 'Wir verwenden professionelle Reinigungsmittel, die passend zur jeweiligen Oberfläche und Verschmutzung ausgewählt werden. Dabei achten wir auf eine gründliche und materialschonende Reinigung.',
        category: 'Reinigung',
    },
    {
        question: 'Wie schnell kann AKAN starten?',
        answer: 'Das richtet sich nach Art und Umfang des Auftrags. Wir sind flexibel und versuchen auch kurzfristige Anfragen möglich zu machen. Sprechen Sie uns einfach an – gemeinsam finden wir einen passenden Termin.',
        category: 'Ablauf',
    },
    {
        question: 'Bieten Sie auch Reinigungen außerhalb der Geschäftszeiten an?',
        answer: 'Ja. Reinigungszeiten stimmen wir individuell mit unseren Kunden ab. Je nach Objekt sind Einsätze beispielsweise früh morgens, abends oder am Wochenende möglich.',
        category: 'Flexibilität',
    },
    {
        question: 'Was passiert, wenn ich einmal nicht zufrieden bin?',
        answer: 'Sollte einmal etwas nicht zu Ihrer Zufriedenheit sein, sprechen Sie uns bitte direkt an. Wir kümmern uns schnell um Ihr Anliegen und finden gemeinsam eine passende Lösung. Eine zuverlässige und langfristige Zusammenarbeit mit unseren Kunden ist uns wichtig.',
        category: 'Qualität',
    },
];

export const stats: Stat[] = [
    { value: 10, suffix: '+', label: 'Jahre Praxiserfahrung', description: 'Fundiertes Praxiswissen durch unsere Objektleitung.' },
    { value: 100, suffix: '%', label: 'Verlässlichkeit', description: 'Feste Absprachen und transparente Termine.' },
    { value: 100, suffix: '%', label: 'Persönlich vor Ort', description: 'Direkte Ansprechpartner in Nordhessen.' },
    { value: 100, suffix: '%', label: 'Sorgfalt', description: 'Materialschonende Reinigung und Qualitätskontrollen.' },
];

export const regions: Region[] = [
    { name: 'Gudensberg', distance: 'Hauptsitz' },
    { name: 'Kassel', distance: '25 km' },
    { name: 'Baunatal', distance: '18 km' },
    { name: 'Fritzlar', distance: '12 km' },
    { name: 'Melsungen', distance: '30 km' },
    { name: 'Nordhessen & Region', distance: 'Umland' },
];

export const siteConfig = {
    name: 'AKAN Dienstleistung',
    founder: 'Cemal Hilaloglu',
    owner: 'Cemal Hilaloglu',
    operationsManager: 'Zeynep Hilaloglu',
    taxId: '024 827 615 98',
    serviceArea: 'Gudensberg, Kassel, Baunatal, Fritzlar, Melsungen und Region Nordhessen',
    founded: 2024,
    description: 'Professionelle Gebäudereinigung in Gudensberg, Kassel und Nordhessen. Unterhaltsreinigung, Glasreinigung, Bauendreinigung, Industriereinigung und Sonderreinigung.',
    url: 'https://akan-dienstleistung.de',
    address: {
        street: 'Breslauer Str. 50',
        city: 'Gudensberg',
        zip: '34281',
        country: 'DE',
    },
    phone: '+4915234754386',
    phoneDisplay: '0152 34754386',
    email: 'info@akan-dienstleistung.de',
    socials: {
        facebook: '#',
        instagram: '#',
    },
};

// Aliasing for backward compatibility if needed elsewhere
export const companyInfo = siteConfig;

export const timeline: TimelineEvent[] = [];
