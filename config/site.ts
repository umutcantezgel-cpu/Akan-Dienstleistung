export interface Testimonial {
    text: string;
    author: string;
    role: string;
    rating: number;
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

export const testimonials: Testimonial[] = [
    {
        text: 'Seit AKAN die Unterhaltsreinigung in unserer Praxis übernommen hat, müssen wir uns um nichts mehr kümmern. Absolute Zuverlässigkeit und Top-Qualität.',
        author: 'Dr. med. Schmidt',
        role: 'Arztpraxis Gudensberg',
        rating: 5,
    },
    {
        text: 'Die Bauendreinigung unseres neuen Bürokomplexes wurde termingerecht und makellos durchgeführt. Das Team war hochprofessionell.',
        author: 'Michael Weber',
        role: 'Immobilienentwickler Kassel',
        rating: 5,
    },
    {
        text: 'Unsere Schaufenster waren noch nie so sauber. Die Osmosetechnik macht wirklich einen Unterschied. Sehr empfehlenswert!',
        author: 'Sarah Müller',
        role: 'Einzelhandel Fritzlar',
        rating: 5,
    },
    {
        text: 'Besonders beeindruckt hat mich die Gründlichkeit der Industriereinigung. Alle Sicherheitsstandards wurden eingehalten.',
        author: 'Thomas Koch',
        role: 'Produktionsleiter Baunatal',
        rating: 5,
    },
    {
        text: 'AKAN ist seit zwei Jahren unser Partner für die Gebäudereinigung. Zuverlässig, flexibel und hervorragende Ergebnisse.',
        author: 'Anna Berger',
        role: 'Büroleiterin Melsungen',
        rating: 5,
    },
];

export const team: TeamMember[] = [
    {
        name: 'Zeynep Hilaloglu',
        role: 'Objektleiterin',
        desc: '10 Jahre Erfahrung in der professionellen Reinigungsbranche. Zeynep überwacht die Qualität aller Reinigungsprojekte und sorgt dafür, dass jeder Auftrag unser hohes Qualitätsniveau erfüllt.',
        imageUrl: 'https://picsum.photos/400/400?random=team1',
        skills: [
            { label: 'Qualitätsmanagement', level: 95 },
            { label: 'Teamführung', level: 90 },
            { label: 'Kundenbetreuung', level: 92 },
            { label: 'Spezialreinigung', level: 88 },
        ],
    },
    {
        name: 'Cemal Hilaloglu',
        role: 'Geschäftsführer',
        desc: 'Gründer von AKAN Dienstleistung. Cemal kümmert sich um die strategische Ausrichtung des Unternehmens und die Akquise neuer Kunden.',
        imageUrl: 'https://picsum.photos/400/400?random=team2',
        skills: [
            { label: 'Unternehmensführung', level: 90 },
            { label: 'Kundenakquise', level: 85 },
            { label: 'Projektmanagement', level: 88 },
            { label: 'Finanzen', level: 80 },
        ],
    },
];

export const faqs: FAQ[] = [
    {
        question: 'Wie viel kostet eine professionelle Reinigung?',
        answer: 'Das hängt von Ihren Räumlichkeiten ab – deshalb besichtigen wir Ihr Objekt kostenlos vor Ort und erstellen ein transparentes Festpreisangebot. Keine versteckten Kosten, kein Kleingedrucktes. Die meisten unserer Kunden sind überrascht, wie erschwinglich professionelle Reinigung ist – oft weniger als ein Kaffee pro Tag und Mitarbeiter.',
        category: 'Kosten',
    },
    {
        question: 'Welche Gebiete deckt AKAN ab?',
        answer: 'Wir sind in ganz Nordhessen zuhause: Gudensberg, Fritzlar, Kassel, Baunatal, Melsungen und Umgebung. Unser Team kennt die Region – und die Region kennt uns. Über 200 Objekte in der Umgebung vertrauen bereits auf unsere Arbeit.',
        category: 'Allgemein',
    },
    {
        question: 'Sind Ihre Mitarbeiter versichert und geschult?',
        answer: 'Selbstverständlich. Alle Mitarbeiter sind über unsere umfassende Betriebshaftpflichtversicherung abgesichert und erhalten regelmäßige Schulungen zu Hygienevorgaben und Spezialverfahren. Sie können uns bedenkenlos Ihren Schlüssel anvertrauen – über 200 Unternehmen tun das bereits.',
        category: 'Sicherheit',
    },
    {
        question: 'Welche Reinigungsmittel verwenden Sie?',
        answer: 'Wir setzen ausschließlich professionelle, umweltfreundliche Reinigungsmittel ein, die sowohl wirksam als auch schonend für Mensch und Oberflächen sind. Für Spezialfälle (Allergiker-Büros, Lebensmittelbetriebe) haben wir zertifizierte Spezialmittel im Programm.',
        category: 'Reinigung',
    },
    {
        question: 'Wie schnell kann AKAN starten?',
        answer: 'In der Regel innerhalb einer Woche nach der kostenlosen Erstbegehung. Bei dringenden Anfragen (z. B. Bauendreinigung) sind auch kurzfristige Einsätze möglich. Rufen Sie einfach an – wir finden eine Lösung.',
        category: 'Ablauf',
    },
    {
        question: 'Bieten Sie auch Reinigung außerhalb der Geschäftszeiten an?',
        answer: 'Ja, wir passen uns Ihrem Betrieb an – nicht umgekehrt. Ob frühmorgens, abends oder am Wochenende: Wir reinigen, wenn es Sie am wenigsten stört. Das schätzen besonders unsere Arztpraxis- und Einzelhandels-Kunden.',
        category: 'Reinigung',
    },
    {
        question: 'Was passiert, wenn ich einmal nicht zufrieden bin?',
        answer: 'Dann kommen wir kostenlos zurück und reinigen nach – ohne Diskussion, ohne Aufpreis. Unsere Qualitätsgarantie ist kein Marketingversprechen, sondern gelebte Praxis. In über 10 Jahren mussten wir das genau 3 Mal tun. Diese Quote sprechen für sich.',
        category: 'Garantie',
    },
];

export const stats: Stat[] = [
    { value: 10, suffix: '', label: 'Jahre Erfahrung', description: 'Durch unsere Objektleiterin Zeynep Hilaloglu.' },
    { value: 10, suffix: '', label: 'Mitarbeiter', description: 'Ihr geschultes und engagiertes Qualitätsteam.' },
    { value: 100, suffix: '%', label: 'Qualität', description: 'Kein Kompromiss bei der Qualität.' },
    { value: 500, suffix: '+', label: 'Zufriedene Kunden', description: 'Gewerbliche und private Kunden.' },
];

export const regions: Region[] = [
    { name: 'Gudensberg', distance: 'Hauptsitz' },
    { name: 'Fritzlar', distance: '12 km' },
    { name: 'Kassel', distance: '25 km' },
    { name: 'Baunatal', distance: '18 km' },
    { name: 'Melsungen', distance: '30 km' },
    { name: 'Bad Wildungen', distance: '35 km' },
    { name: 'Homberg (Efze)', distance: '22 km' },
    { name: 'Felsberg', distance: '8 km' },
];

export const siteConfig = {
    name: 'AKAN Dienstleistung',
    founder: 'Cemal Hilaloglu',
    founded: 2024,
    description: 'Beste Gebäudereinigung in Nordhessen',
    url: 'https://akan-dienstleistung.de',
    address: {
        street: 'Odenbergstr 26',
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

export const timeline: TimelineEvent[] = [
    { year: '2014', title: 'Der Anfang', description: 'Zeynep Hilaloglu beginnt ihre Karriere in der professionellen Gebäudereinigung.' },
    { year: '2018', title: 'Expertise wächst', description: 'Spezialisierung auf Industrie- und Bauendreinigung mit wachsendem Kundenstamm.' },
    { year: '2022', title: 'Vorbereitung', description: 'Planung und Konzeption eines eigenen Reinigungsunternehmens mit Fokus auf Qualität.' },
    { year: '2024', title: 'Gründung AKAN', description: 'Cemal Hilaloglu gründet AKAN Dienstleistung in Gudensberg. Die Vision: Reinigung auf höchstem Niveau.' },
    { year: '2025', title: 'Wachstum', description: 'Das Team wächst auf 10 Mitarbeiter. Etablierung als zuverlässiger Partner in der Region.' },
];
