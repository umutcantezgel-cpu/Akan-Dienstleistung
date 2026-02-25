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
        subtitle: 'Systematische Hygiene für Hochleistungs-Arbeitsplätze',
        description: 'Eine saubere Arbeitsumgebung ist kein Kostenfaktor, sondern ein essenzieller Baustein Ihrer Produktivität und Mitarbeiterbindung. Wenn Teams in ungepflegten Büros arbeiten, sinkt die Motivation, und der Krankenstand steigt. Unsere Unterhaltsreinigung eliminiert das "Sauberkeits-Vakuum" durch militärisch präzise Taktung, redundante Personalplanung und digitale Qualitätssicherung. Wir garantieren einen konstanten, unsichtbaren Hintergrundbetrieb, der sicherstellt, dass Ihr Unternehmen jeden Morgen im Bestzustand hochfährt.',
        iconName: 'Building2',
        painPoints: [
            'Sinkende Reinigungsqualität nach den ersten Vertragsmonaten (Der "Honeymoon-Effekt")',
            'Hoher administrativer Aufwand durch ständige Reklamationen und fehlendes Feedback',
            'Sicherheitsrisiken durch ständigen Personalwechsel und ungeschulte Reinigungskräfte',
            'Unsichtbare Keimbelastung auf Tastaturen, Klinken und in Sanitäranlagen, die Fehltage provoziert'
        ],
        benefits: [
            {
                title: 'Digitale SLA-Überwachung',
                description: 'Wir arbeiten nicht nach Bauchgefühl. Jede Leistung wird digital in unserem System erfasst und qualitätsgesichert. Sie haben über Ihren festen Objektleiter jederzeit absolute Transparenz über den Reinigungsstatus.'
            },
            {
                title: 'Ausfall-Redundanz',
                description: 'Krankheit oder Urlaub bei unserem Personal spüren Sie nicht. Unser redundantes Pool-System garantiert, dass Ihr Objekt lückenlos und in gleichbleibender Qualität gereinigt wird.'
            },
            {
                title: 'Diskussionslose Konstanz',
                description: 'Wir implementieren ein Reinigungs-Raster, das so präzise getaktet ist wie ein Uhrwerk. Kein Nachhaken, keine Beschwerden durch Mitarbeiter – nur verlässliche, stille Exzellenz im Hintergrund.'
            }
        ],
        features: [
            'Tägliche oder wöchentliche Intervalle',
            'Reinigung von Büros, Praxen und Kanzleien',
            'Treppenhaus- und Sanitärreinigung',
            'Boden- und Oberflächenpflege',
            'Kostenlose Erstberatung vor Ort'
        ],
        imagePlaceholderAlt: 'Glänzendes, makellos gereinigtes Büro',
        templateStyle: 'rhythm',
        metaTitle: 'Unterhaltsreinigung & Büroreinigung | AKAN Dienstleistung',
        metaDescription: 'Professionelle Unterhaltsreinigung für Büros, Praxen und Kanzleien. Regelmäßige Intervalle, feste Ansprechpartner, geprüfte Qualität. Jetzt anfragen!',
    },
    'fensterreinigung': {
        id: 'fensterreinigung',
        slug: 'fensterreinigung',
        title: 'Fensterreinigung',
        subtitle: 'Schlierenfreie Klarheit für perfekten Durchblick & Repräsentation',
        description: 'Der erste Eindruck Ihres Firmengebäudes entsteht durch die Fassade und die Fenster. Schlieren, Witterungsspuren oder blinde Scheiben suggerieren mangelnde Sorgfalt und Pflege – ein fataler Imagetransfer für B2B-Entscheider. Unsere Glas- und Fassadenreinigung ist kein Standard-Wischen. Es ist der technische Erhalt Ihrer Gebäudehülle. Wir setzen Osmoseverfahren, Hubsteiger-Technik und materialschonende Spezialchemie ein, um selbst bei widrigsten Lichtverhältnissen makellose, unsichtbare Glasflächen zu hinterlassen.',
        iconName: 'Sparkles',
        painPoints: [
            'Reputationsverlust durch unsaubere Schaufenster und repräsentative Eingangsbereiche',
            'Sicherheitsrisiken und Ineffizienz bei der Eigenreinigung von großen Höhen & Wintergärten',
            'Streifenbildung und Schlieren, die speziell bei Gegenlicht oder Sonneneinstrahlung stören',
            'Wertminderung von teuren Eloxal-Rahmen und Dichtungen durch falsche Reinigungsmittel'
        ],
        benefits: [
            {
                title: 'High-Tech Osmoseverfahren',
                description: 'Wir entmineralisieren Wasser durch Umkehrosmose. Das Resultat: Keine Tropfengröße, keine nachgewischten Schlieren, antistatische Wirkung für längere Sauberkeit.'
            },
            {
                title: 'Rahmen- & Falz-Sanierung',
                description: 'Das Glas ist nur die halbe Miete. Wir reinigen, entmoosen und pflegen die wasserführenden Falze und die oft teuren Aluminium- oder Kunststoffrahmen tiefenwirksam.'
            },
            {
                title: 'Sichere Höhenzugangstechnik',
                description: 'Eigene Hebebühnen und geschultes Personal (FISAT zertifiziert) ermöglichen uns die schnelle, unauffällige Reinigung ohne aufwändige Rüstkosten für Ihr Gebäude.'
            }
        ],
        features: [
            'Reinigung von Glas- und Rahmenflächen',
            'Schaufenster- und Fassadenreinigung',
            'Wintergärten und Glasdächer',
            'Reinigung schwer zugänglicher Flächen',
            'Osmose-Reinigungsverfahren verfügbar'
        ],
        imagePlaceholderAlt: 'Strahlend saubere Fensterfront mit klarem Ausblick',
        templateStyle: 'refraction',
        metaTitle: 'Fensterreinigung | AKAN – Streifenfreier Glanz garantiert',
        metaDescription: 'Professionelle Fensterreinigung: Streifenfrei, rahmenschonend, mit Profi-Equipment. Auch schwer zugängliche Flächen. Kostenloses Angebot!',
    },
    'bauendreinigung': {
        id: 'bauendreinigung',
        slug: 'bauendreinigung',
        title: 'Bauendreinigung',
        subtitle: 'Termintreue Sicherheit für Ihre finale Bauabnahme',
        description: 'Der Übergang von der Baustelle zum nutzbaren Zustand ist die kritischste Phase jedes Projekts. Verzögerungen bei der Endreinigung blockieren Gewerke, gefährden Abnahmetermine und verursachen massive Pönalen. Unsere Bauendreinigung (Baugrob- und Baufeinreinigung) ist präzise auf die Anforderungen von Bauleitern und Architekten zugeschnitten. Wir entfernen nicht nur hartnäckigen Handwerkerschmutz, Zementschleier und feinsten Bohrstaub, sondern dokumentieren Mängel für eine sichere und fristgerechte Übergabe.',
        iconName: 'AlertTriangle',
        painPoints: [
            'Bauverzögerungen durch verspätete oder schlecht koordinierte Reinigungs-Trupps',
            'Irreparable Kratzer auf brandneuen, empfindlichen Flächen durch unsachgemäße Reinigungsmethoden',
            'Versteckter Baustaub, der sich Wochen nach Bezug in Klimaanlagen und auf Servern absetzt',
            'Mangelnde Flexibilität bei kurzfristigen Bauzeitenänderungen und ungeplantem Schmutzeintrag'
        ],
        benefits: [
            {
                title: 'Termingarantie & Flexibilität',
                description: 'Wir kennen die Chaosphase vor Bauabnahme. Unser Team reagiert hochgradig agil auf Bauzeitenpläne und arbeitet bei Bedarf in Nacht- oder Wochenend-Schichten, um Deadlines zu halten.'
            },
            {
                title: 'Schadensprävention & Werterhalt',
                description: 'Neues ist empfindlich. Wir nutzen für jede Oberfläche (ob versiegeltes Parkett, eloxiertes Aluminium oder Naturstein) strikt die bauphysikalisch korrekte Reinigungschemie und weiche Mechanik, um Kratzer 100% auszuschließen.'
            },
            {
                title: 'Abnahmeprotokollierung',
                description: 'Während der Reinigung fallen uns sofort Baufehler oder Beschädigungen anderer Gewerke auf. Wir fungieren als Ihr erweitertes Auge und dokumentieren diese für Ihre finale Mängelliste.'
            }
        ],
        features: [
            'Baugrob- und Baufeinreinigung',
            'Entfernung von Zementschleier',
            'Fachgerechte Abfallentsorgung',
            'Spezialreinigung neuer Bodenbeläge',
            'Flexible Terminierung'
        ],
        imagePlaceholderAlt: 'Fertig gestelltes Bauprojekt nach der finalen Reinigung',
        templateStyle: 'industrial',
        metaTitle: 'Bauendreinigung | AKAN – Termingerecht & Abnahmebereit',
        metaDescription: 'Professionelle Bauendreinigung: Baugrob- & Baufeinreinigung, Zementschleier-Entfernung. Termingerecht für Ihre Bauabnahme. Jetzt planen!',
    },
    'industriereinigung': {
        id: 'industriereinigung',
        slug: 'industriereinigung',
        title: 'Industriereinigung',
        subtitle: 'Arbeitssicherheit und Werterhalt für Anlagen',
        description: 'Reibungslose Produktionsabläufe erfordern saubere Maschinen und Hallen. Unsere spezialisierte Industriereinigung entfernt hartnäckigen Schmutz und Schmierstoffe effizient und unter strenger Einhaltung von Sicherheitsstandards.',
        iconName: 'Factory',
        painPoints: [
            'Produktionsausfälle durch verschmutzte Maschinen',
            'Sicherheitsrisiken durch ölige Böden',
            'Strenge Hygiene- und Umweltauflagen',
            'Fehlendes Fachwissen für Spezialmaschinen'
        ],
        benefits: [
            {
                title: 'Produktionssicher',
                description: 'Wir reinigen effizient und flexibel auch außerhalb Ihrer Kernzeiten, um Ausfallzeiten zu minimieren.'
            },
            {
                title: 'Werterhaltend',
                description: 'Regelmäßige Pflege verlängert die Lebensdauer Ihrer kostenintensiven Industrieanlagen.'
            },
            {
                title: 'Zertifiziert',
                description: 'Unser Fachpersonal arbeitet unter Einhaltung aller relevanten Sicherheits- und Umweltrichtlinien.'
            }
        ],
        features: [
            'Maschinen- und Anlagenreinigung',
            'Hallen- und Industrieböden',
            'Entfernung hartnäckiger Schmierstoffe',
            'Spezialverfahren nach Anforderung',
            'Sicherheitsgerechte Ausführung'
        ],
        imagePlaceholderAlt: 'Hochglänzende Produktionshalle nach Expertenreinigung',
        templateStyle: 'default',
        metaTitle: 'Industriereinigung | AKAN – Arbeitssicherheit & Werterhalt',
        metaDescription: 'Professionelle Industriereinigung: Maschinen, Hallen, Böden. Zertifiziert, sicherheitsgerecht, außerhalb Ihrer Produktionszeiten. Jetzt anfragen!',
    },
    'sonderreinigung': {
        id: 'sonderreinigung',
        slug: 'sonderreinigung',
        title: 'Sonderreinigung',
        subtitle: 'Chirurgische Präzision für extreme Kontaminationen',
        description: 'Standard-Reinigungsverfahren kapitulieren vor echten Härtefällen. Ob nach einem Wasserschaden, bei hartnäckigster Industrie-Verkrustung, Vandalismus-Schäden oder in hochsensiblen klinischen/gastronomischen Bereichen: Wir operieren mit toxikologischer Präzision. Unser Taskforce-Ansatz garantiert die materialschonende Wiederherstellung des hygienischen Grundzustandes durch Einsatz von Trockeneis, Spezial-Lösemitteln und zertifizierten Desinfektionsverfahren.',
        iconName: 'Droplets',
        painPoints: [
            'Behördliche Schließungen oder Produktionsstopps durch Verletzung von Hygiene-Standards (HACCP/ISO)',
            'Sekundärschäden an Bausubstanz durch unsachgemäße oder verschleppte Spezialreinigung nach Havarien',
            'Gesundheitsrisiken für Mitarbeiter durch versteckte Schimmelpilze, Biofilme oder chemische Rückstände',
            'Imageverlust durch sichtbaren Vandalismus oder hartnäckige Geruchsbelastung in Repräsentationsflächen'
        ],
        benefits: [
            {
                title: 'Molekulare Tiefenreinigung',
                description: 'Wir kratzen nicht an der Oberfläche. Mit Verfahren wie Trockeneisstrahlen oder Ozon-Behandlungen neutralisieren wir Verschmutzungen und Geruchsmoleküle rückstandslos auf mikroskopischer Ebene.'
            },
            {
                title: 'Zertifizierte Dekontamination',
                description: 'Unsere Fachkräfte sind geschult im Umgang mit kontaminierten Umgebungen. Wir dokumentieren den Reinigungserfolg lückenlos für Ihre Auditoren und Gesundheitsbehörden.'
            },
            {
                title: 'Materialerhaltende Spezial-Chemie',
                description: 'Extreme Verschmutzung erfordert extreme Mittel – aber immer materialspezifisch. Unsere Labor-gestützte Auswahl der Reinigungskomponenten garantiert den Erhalt Ihrer teuren Böden und Anlagen.'
            }
        ],
        features: [
            'Grund- und Intensivreinigung',
            'Desinfektionsreinigung',
            'Teppich- und Polsterreinigung',
            'Tatort- und Messie-Reinigung',
            'Graffiti-Entfernung'
        ],
        imagePlaceholderAlt: 'Hochtechnologisch ausgestattete Spezialreinigung',
        templateStyle: 'surgical',
        metaTitle: 'Sonderreinigung | AKAN – Extreme Sauberkeit',
        metaDescription: 'Professionelle Sonderreinigung für extreme Anforderungen. Desinfektion, Grundreinigung, Spezialverfahren. Kompromisslos sauber. Jetzt kontaktieren!',
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
