export type ServiceDetail = {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    iconName: string;
    painPoints: string[];
    benefits: { title: string; description: string }[];
    features: string[];
    imagePlaceholderAlt: string;
    imageSrc: string;
    beforeAfter?: {
        beforeImage: string;
        afterImage: string;
        beforeLabel: string;
        afterLabel: string;
        title: string;
        description: string;
    };
    /** Which unique template to render for this service */
    templateStyle: 'industrial' | 'refraction' | 'rhythm' | 'surgical' | 'default';
    metaTitle: string;
    metaDescription: string;
};

export const serviceDetails: Record<string, ServiceDetail> = {
    'unterhaltsreinigung': {
        id: 'unterhaltsreinigung',
        slug: 'unterhaltsreinigung',
        title: 'Unterhaltsreinigung',
        subtitle: 'Verlässliche Sauberkeit für Büros, Praxen & Gewerbeobjekte',
        description: 'Eine gepflegte Arbeitsumgebung sorgt für Wohlbefinden, Motivation und einen professionellen ersten Eindruck bei Kunden und Mitarbeitern. Mit AKAN Dienstleistung erhalten Sie verlässliche Unterhaltsreinigung nach festen Qualitätsstandards. Unser geschultes Team reinigt Ihre Räumlichkeiten flexibel und gründlich – abgestimmt auf Ihre Betriebszeiten.',
        iconName: 'Building2',
        painPoints: [
            'Unzuverlässige Reinigungszeiten und wechselnde Reinigungskräfte ohne feste Ansprechpartner',
            'Nachlassende Reinigungsqualität nach den ersten Wochen und ständige Nachkontrollen',
            'Eingeschränkte Flexibilität bei wechselndem Reinigungsbedarf oder Sonderwünschen',
            'Unzureichende Hygiene in Sanitärbereichen und Teeküchen'
        ],
        benefits: [
            {
                title: 'Geschultes & festes Personal',
                description: 'Sie haben feste Reinigungskräfte und einen persönlichen Ansprechpartner vor Ort, der Ihre Anforderungen genau kennt.'
            },
            {
                title: 'Flexible Einsatzzeiten',
                description: 'Wir reinigen vor oder nach Ihren Geschäftszeiten, am Wochenende oder in individuellen Intervallen ohne Ihren Betriebsablauf zu stören.'
            },
            {
                title: 'Moderne i-mop & Reinigungstechnik',
                description: 'Durch den Einsatz moderner Scheuersaugmaschinen wie dem i-mop reinigen wir Bodenflächen hygienisch sauber, schnell und zeitsparend.'
            }
        ],
        features: [
            'Büro- und Praxisreinigung in flexiblen Intervallen',
            'Hygienische Sanitär- und Teeküchenreinigung',
            'Bodenpflege mit moderner i-mop Technologie',
            'Oberflächen- und Schreibtischreinigung',
            'Mülltrennung und fachgerechte Entsorgung',
            'Feste Ansprechpartner & persönliche Objektbetreuung'
        ],
        imagePlaceholderAlt: 'AKAN Spezialist bei der Großflächen- und Sporthallenreinigung mit Profi-Sauger',
        imageSrc: '/images/galerie/gewerbereinigung/akan-sporthallenreinigung-grossflaeche-sauger.png',
        beforeAfter: {
            beforeImage: '/images/vorher-nachher/akan-bodenreinigung-industriehalle-vorher-verschmutzt.webp',
            afterImage: '/images/vorher-nachher/akan-bodenreinigung-industriehalle-nachher-glaenzend.webp',
            beforeLabel: 'Vorher',
            afterLabel: 'Nachher',
            title: 'Bodenflächen Grundreinigung',
            description: 'Gründliche Entfernung von Laufspuren und Schmutzfilmen für einen gepflegten Gesamteindruck.'
        },
        templateStyle: 'default',
        metaTitle: 'Unterhaltsreinigung Gudensberg & Kassel | AKAN Dienstleistung',
        metaDescription: 'Professionelle Unterhaltsreinigung für Büros, Praxen und Kanzleien in Nordhessen. Regelmäßige Intervalle, feste Ansprechpartner, moderne i-mop Technik. Jetzt anfragen!',
    },
    'fensterreinigung': {
        id: 'fensterreinigung',
        slug: 'fensterreinigung',
        title: 'Glas- & Fensterreinigung',
        subtitle: 'Streifenfreier Glanz für Schaufenster, Glasfronten und Wintergärten',
        description: 'Saubere Glasflächen sind die Visitenkarte Ihres Gebäudes. Ob Schaufenster im Einzelhandel, Büro-Glasfronten oder private Wintergärten: AKAN Dienstleistung sorgt für streifenfreien Durchblick. Mit umweltschonendem Osmose-Verfahren und moderner Teleskop-Technik reinigen wir auch schwer zugängliche Bereiche sicher und rückstandslos.',
        iconName: 'Sparkles',
        painPoints: [
            'Verschmutzte Schaufenster und Glasflächen trüben das Erscheinungsbild Ihres Unternehmens',
            'Schwer erreichbare Glasdächer, Oberlichter und Wintergärten lassen sich nur schwer selbst reinigen',
            'Streifen und Kalkrückstände bei herkömmlicher Fensterreinigung stören das Gesamtbild',
            'Verschmutzte Rahmen und Falze greifen langfristig das Material an'
        ],
        benefits: [
            {
                title: 'Streifenfreies Osmose-Verfahren',
                description: 'Reinstwasser ohne Mineralien trocknet rückstands- und streifenfrei ab – ganz ohne aggressive Reinigungsmittel.'
            },
            {
                title: 'Rahmen- & Falzreinigung inklusive',
                description: 'Wir reinigen nicht nur das Glas, sondern auch Rahmen, Fensterbänke und Dichtungen für dauerhaften Werterhalt.'
            },
            {
                title: 'Schwer zugängliche Höhen',
                description: 'Mit modernen Teleskopstangen und professioneller Ausrüstung erreichen wir Glasflächen in großer Höhe sicher und ohne Gerüstkosten.'
            }
        ],
        features: [
            'Streifenfreie Fenster- und Rahmenreinigung',
            'Schaufensterreinigung für Einzelhandel und Gewerbe',
            'Wintergärten, Glasdächer und Vordächer',
            'Umweltschonendes Osmose-Reinigungsverfahren',
            'Fassaden- und Glasfrontenreinigung in Nordhessen'
        ],
        imagePlaceholderAlt: 'AKAN Glasreiniger mit Teleskopstange bei der Fassadenreinigung',
        imageSrc: '/images/hero/akan-fensterreinigung-team-teleskopstange-aktion.webp',
        beforeAfter: {
            beforeImage: '/images/vorher-nachher/akan-glasreinigung-wintergarten-verschmutzt-vorher.webp',
            afterImage: '/images/vorher-nachher/akan-glasreinigung-pavillon-sauber-nachher.webp',
            beforeLabel: 'Vorher',
            afterLabel: 'Nachher',
            title: 'Wintergarten- & Glasreinigung',
            description: 'Streifenfreie Beseitigung von Witterungsablagerungen und Moos mit entmineralisiertem Reinwasser.'
        },
        templateStyle: 'default',
        metaTitle: 'Glas- & Fensterreinigung Gudensberg & Kassel | AKAN Dienstleistung',
        metaDescription: 'Professionelle Glas- und Fensterreinigung: Streifenfrei, materialschonend mit Osmose-Technik für Schaufenster, Wintergärten und Fassaden in Nordhessen.',
    },
    'bauendreinigung': {
        id: 'bauendreinigung',
        slug: 'bauendreinigung',
        title: 'Bauendreinigung',
        subtitle: 'Termingerecht und übergabefertig für Ihre Bauabnahme',
        description: 'Der Abschluss von Neu-, Umbau- oder Sanierungsarbeiten erfordert professionelle Sauberkeit auf den Punkt. AKAN Dienstleistung übernimmt die zuverlässige Baugrob- und Baufeinreinigung, damit Sie Ihre Objekte termingerecht und mängelfrei übergeben können. Wir entfernen Baustaub, Zementschleier und Farbspuren materialschonend und gründlich.',
        iconName: 'AlertTriangle',
        painPoints: [
            'Zeitdruck vor der offiziellen Bauabnahme oder Schlüsselübergabe an Mieter und Eigentümer',
            'Hartnäckiger Feinstaub, Farb- und Klebereste auf frisch verlegten empfindlichen Belägen',
            'Gefahr von Kratzern und Oberflächenschäden durch ungeeignete Reinigungsmethoden',
            'Unentdeckte Mängel, die erst nach Einzug beanstandet werden'
        ],
        benefits: [
            {
                title: 'Termintreue vor Abnahme',
                description: 'Wir halten vereinbarte Übergabetermine verbindlich ein – auch wenn es auf der Baustelle einmal eng wird.'
            },
            {
                title: 'Schonende Oberflächenbehandlung',
                description: 'Geeignete Spezialreiniger schützen neue Parkett-, Fliesen-, Glas- und Edelstahlflächen vor Beschädigungen.'
            },
            {
                title: 'Fotodokumentation & Schadenserfassung',
                description: 'Wir dokumentieren sichtbare Vorschäden vor Reinigungsbeginn, damit Sie bei der Abnahme auf der sicheren Seite sind.'
            }
        ],
        features: [
            'Baugrobreinigung während der Bauphase',
            'Baufein- und Bauendreinigung vor der Übergabe',
            'Zementschleier- und Farbspritzer-Entfernung',
            'Reinigung von Fenstern, Türen, Sanitär und Böden',
            'Fachgerechte Entsorgung von Verpackungsresten'
        ],
        imagePlaceholderAlt: 'Hochglänzend gereinigter Boden nach Bauabschluss',
        imageSrc: '/images/vorher-nachher/akan-bodenreinigung-industriehalle-nachher-glaenzend.webp',
        beforeAfter: {
            beforeImage: '/images/vorher-nachher/akan-bodenreinigung-industriehalle-vorher-verschmutzt.webp',
            afterImage: '/images/vorher-nachher/akan-bodenreinigung-industriehalle-nachher-glaenzend.webp',
            beforeLabel: 'Vorher',
            afterLabel: 'Nachher',
            title: 'Bodenflächen Baufeinreinigung',
            description: 'Gründliche Beseitigung von Baustellenstaub und Rückständen für die schlüsselfertige Übergabe.'
        },
        templateStyle: 'default',
        metaTitle: 'Bauendreinigung Gudensberg & Kassel | AKAN Dienstleistung',
        metaDescription: 'Zuverlässige Bauendreinigung und Baufeinreinigung für Bauherren, Architekten und Bauträger in Kassel, Gudensberg und Nordhessen. Jetzt anfragen!',
    },
    'industriereinigung': {
        id: 'industriereinigung',
        slug: 'industriereinigung',
        title: 'Industriereinigung',
        subtitle: 'Sauberkeit und Werterhalt für Hallen, Böden und Industrieanlagen',
        description: 'In industriellen Betrieben und Produktionsumgebungen sind saubere Böden und gepflegte Hallenbereiche die Basis für Arbeitssicherheit und reibungslose Abläufe. AKAN Dienstleistung reinigt Industrieböden, Hallenwände, PVC-Streifenvorhänge und Hebezeuge mit leistungsstarken Reinigungsmaschinen zuverlässig und materialschonend.',
        iconName: 'Factory',
        painPoints: [
            'Rutschige Böden und Arbeitssicherheitsrisiken durch Industrieöle und Schmierfilme',
            'Eintrübung von PVC-Streifenvorhängen und Hallenabtrennungen behindert Licht und Sicht',
            'Staub- und Fettablagerungen an Hebezeugen, Industriekranen und Konstruktionen',
            'Gefahr von Produktionsunterbrechungen bei Reinigungsarbeiten während der Schicht'
        ],
        benefits: [
            {
                title: 'Einsatz außerhalb der Betriebszeiten',
                description: 'Wir passen unsere Einsätze flexibel an Ihren Schichtbetrieb an, um Stillstandzeiten zu vermeiden.'
            },
            {
                title: 'Moderne Scheuersaugtechnik',
                description: 'Mit leistungsfähigen Kärcher Scheuersaugmaschinen entfernen wir hartnäckige Industrieöle und Reifenabrieb.'
            },
            {
                title: 'Fachgerecht & Sicherheit im Fokus',
                description: 'Unser Team ist im Umgang mit Reinigungsgeräten und Arbeitsschutzmaßnahmen vor Ort bestens geschult.'
            }
        ],
        features: [
            'Industrieboden-Tiefenreinigung und Entfettung',
            'Reinigung von PVC-Streifenvorhängen und Hallenabtrennungen',
            'Industriekrane und Hebezeuge Reinigung',
            'Hallen- und Lagerflächenreinigung',
            'Einsatz flexibel nach Schichtplan möglich'
        ],
        imagePlaceholderAlt: 'AKAN Mitarbeiter steuert Kärcher Scheuersaugmaschine in Produktionshalle',
        imageSrc: '/images/galerie/industriereinigung/akan-kaercher-scheuersaugmaschine-im-einsatz.jpg',
        beforeAfter: {
            beforeImage: '/images/vorher-nachher/akan-vorher-nachher-pvc-streifenvorhang-vorher.jpg',
            afterImage: '/images/vorher-nachher/akan-vorher-nachher-pvc-streifenvorhang-nachher.jpg',
            beforeLabel: 'Vorher',
            afterLabel: 'Nachher',
            title: 'PVC-Streifenvorhang & Hallenabtrennung',
            description: 'Entfernung von Industrie-Ablagerungen für klare Lichtdurchlässigkeit und Sicherheit im Betrieb.'
        },
        templateStyle: 'default',
        metaTitle: 'Industriereinigung Gudensberg & Kassel | AKAN Dienstleistung',
        metaDescription: 'Professionelle Industriereinigung: Hallenböden, PVC-Vorhänge, Krane und Industrieanlagen in Kassel und Nordhessen. Zuverlässig & flexibel.',
    },
    'sonderreinigung': {
        id: 'sonderreinigung',
        slug: 'sonderreinigung',
        title: 'Sonderreinigung',
        subtitle: 'Gründliche Lösungen für anspruchsvolle Reinigungsaufgaben',
        description: 'Manche Aufgaben gehen über die regelmäßige Unterhaltsreinigung hinaus. Ob tief sitzende Verkalkungen in Sanitäranlagen, verschmutzte Hallen- und Sektionaltore, Teppichgrundreinigungen oder Einsätze nach Mieterwechsel: AKAN Dienstleistung bringt auch anspruchsvolle Härtefälle wieder in einen hygienisch einwandfreien Zustand.',
        iconName: 'Droplets',
        painPoints: [
            'Hartnäckige Kalk- und Schmutzränder in Fliesenfugen, die normale Reinigungsmittel nicht lösen',
            'Verschmutzte Sektionaltore und Hallenzugänge mindern den gepflegten Gesamteindruck',
            'Verschmutzte Teppichböden und Polstermöbel in gewerblichen oder vermieteten Objekten',
            'Aufwändige Grundreinigung nach Auszug oder Renovierung übersteigt eigene Kapazitäten'
        ],
        benefits: [
            {
                title: 'Gezielte Tiefenreinigung',
                description: 'Mit abgestimmten Reinigungsverfahren und Spezialgeräten beseitigen wir tief sitzende Verunreinigungen wirksam.'
            },
            {
                title: 'Sanitär- & Fugenreinigung',
                description: 'Wir entfernen Kalk, Seifenreste und Verfärbungen in Nassbereichen und Fugen gründlich und hygienisch.'
            },
            {
                title: 'Werterhalt Ihrer Bausubstanz',
                description: 'Regelmäßige Spezial- und Grundreinigungen schützen Oberflächen, Tore und Bodenbeläge langfristig vor Verschleiß.'
            }
        ],
        features: [
            'Sanitäranlagen Tiefenreinigung (Fliesen & Fugen)',
            'Industrie-Sektionaltore und Hallenzugänge',
            'Grundreinigung bei Mieterwechsel & Übergabe',
            'Teppich- und Polstertiefenreinigung',
            'Individuelle Angebote nach Vor-Ort-Besichtigung'
        ],
        imagePlaceholderAlt: 'AKAN Spezialteam mit Linde Stapler-Arbeitsbühne bei der Höhenreinigung',
        imageSrc: '/images/galerie/industriereinigung/akan-linde-stapler-arbeitsbuehne-hoehenreinigung.jpg',
        beforeAfter: {
            beforeImage: '/images/vorher-nachher/akan-vorher-nachher-sanitaer-fliesen-vorher.jpg',
            afterImage: '/images/vorher-nachher/akan-vorher-nachher-sanitaer-fliesen-nachher.png',
            beforeLabel: 'Vorher',
            afterLabel: 'Nachher',
            title: 'Sanitäranlagen Tiefen- & Fugenreinigung',
            description: 'Gründliche Entkalkung und Reinigung von Wand- und Bodenfliesen für hygienische Frische.'
        },
        templateStyle: 'default',
        metaTitle: 'Sonderreinigung & Grundreinigung | AKAN Dienstleistung',
        metaDescription: 'Professionelle Sonderreinigung in Gudensberg, Kassel & Nordhessen: Sanitär-Tiefenreinigung, Hallentore, Teppichreinigung und Grundreinigung.',
    }
};

/** Get all service slugs for generateStaticParams */
export function getAllServiceSlugs(): string[] {
    return Object.keys(serviceDetails);
}

/** Get a specific service by slug */
export function getService(slug: string): ServiceDetail | undefined {
    return serviceDetails[slug];
}
