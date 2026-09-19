export type LocationDetail = {
    slug: string;
    name: string;
    region: string;
    einwohner: string;
    theme?: 'light' | 'dark'; // Neu: Bestimmt die Text/Hintergrund-Kontraste in der Template-Struktur. Default: 'dark' (wie im Standard-Template, wo Bilder abgedunkelt werden).
    geoCoords: { lat: number; lng: number };
    wahrzeichen: string[];
    stadtteile: string[];
    entfernung: string; // Entfernung von Gudensberg
    localContent: {
        heroHeadline: string;
        heroSubline: string;
        introText: string;
        economyFact: string;
        localReference: string; // "Von X bis Y"-Formulierung
        // B2B & Contextual Depth Additions (World Champion Level)
        economicFocus?: string; // e.g., "Logistik, Automotive, Documenta-Kultur"
        localAuthority?: string; // A specific claim of authority for this region
        painPoints?: string[]; // Region-specific B2B pain points
        benefits?: { title: string; description: string }[]; // Region-specific solutions
    };
    metaTitle: string;
    metaDescription: string;
};

export const locationData: Record<string, LocationDetail> = {
    'gudensberg': {
        slug: 'gudensberg',
        theme: 'light',
        name: 'Gudensberg',
        region: 'Schwalm-Eder-Kreis',
        einwohner: '9.800',
        geoCoords: { lat: 51.1764, lng: 9.3562 },
        wahrzeichen: ['Obernburg', 'Odenberg', 'Altstadt', 'Chattengau'],
        stadtteile: ['Kernstadt', 'Dissen', 'Dorla', 'Deute', 'Gleichen', 'Maden', 'Obervorschütz'],
        entfernung: 'Hauptstandort',
        localContent: {
            heroHeadline: 'Professionelle Gebäudereinigung in Gudensberg',
            heroSubline: 'Ihr lokaler Partner seit über 10 Jahren – direkt vor Ihrer Tür',
            introText: 'Als in Gudensberg ansässiges Unternehmen kennen wir die Region wie unsere Westentasche. Von der historischen Obernburg über den Odenberg bis in die charmante Altstadt – AKAN Dienstleistung sorgt für makellose Sauberkeit in Ihrem Zuhause und Unternehmen.',
            economyFact: 'Als Herzstück des Chattengaus ist Gudensberg Heimat zahlreicher Handwerksbetriebe und Dienstleister, die auf konstante Sauberkeit ihrer Geschäftsräume vertrauen.',
            localReference: 'Von der Obernburg bis zum Odenberg',
            economicFocus: 'Logistik, Handwerk, Lebensmittelproduktion & Einzelhandel im Chattengau',
            localAuthority: 'Gudensberg ist unser operatives Herzstück. Von unserem Standort in Gudensberg aus sind wir in der gesamten Region Nordhessen im Einsatz. Diese geografische Nähe garantiert Ihnen schnelle Reaktionszeiten und eine persönliche Betreuung auf Augenhöhe.',
            painPoints: [
                'Schlechtes Facility Management und wechselnde Ansprechpartner bei anonymen Großkonzernen.',
                'Logistische Verzögerungen bei Notfall-Reinigungen (z.B. Wasserschaden) durch Firmen mit zu weiten Anfahrtswegen.',
                'Mangelnde Verlässlichkeit bei der täglichen Unterhaltsreinigung kleiner und mittlerer Betriebe im lokalen Gewerbe.'
            ],
            benefits: [
                {
                    title: 'Wortwörtliche Nachbarschaftshilfe',
                    description: 'Wir sind Teil der Gudensberger Gemeinschaft. Unser Ruf ist unser wichtigster Asset – dementsprechend behandeln wir jedes lokale Gebäude, als wäre es unser eigenes.'
                },
                {
                    title: 'Notfall-Intervention in Rekordzeit',
                    description: 'Als Gudensberger Unternehmen sind wir innerhalb von Minuten bei Ihnen vor Ort, wenn akute Verschmutzungen oder Schäden (z.B. Vandalismus) schnelles Handeln erfordern.'
                },
                {
                    title: 'Absolute Chef-Betreuung',
                    description: 'Keine anonymen Hotlines. Bei Anliegen im Raum Gudensberg und Chattengau spricht die Geschäftsführung direkt mit Ihnen. Wir stehen mit unserem Namen für die erbrachte Qualität.'
                }
            ]
        },
        metaTitle: 'Gebäudereinigung Gudensberg | AKAN Dienstleistung – Ihr lokaler Partner',
        metaDescription: 'Professionelle Gebäudereinigung aus Gudensberg für Gudensberg. Unterhaltsreinigung, Fensterreinigung, Bauendreinigung. Maximale Nähe. Jetzt anfragen!',
    },
    'kassel': {
        slug: 'kassel',
        theme: 'light',
        name: 'Kassel',
        region: 'Nordhessen',
        einwohner: '200.000',
        geoCoords: { lat: 51.3127, lng: 9.4797 },
        wahrzeichen: ['Herkules', 'Bergpark Wilhelmshöhe', 'documenta-Halle', 'Königsplatz'],
        stadtteile: ['Mitte', 'Vorderer Westen', 'Bad Wilhelmshöhe', 'Kirchditmold', 'Bettenhausen', 'Nordstadt'],
        entfernung: '25 km',
        localContent: {
            heroHeadline: 'Professionelle Gebäudereinigung in Kassel',
            heroSubline: 'Premium-Reinigung für Nordhessens Metropole – schnell vor Ort',
            introText: 'Kassel, die documenta-Stadt und UNESCO-Welterbestadt, verdient Reinigungsqualität auf Weltniveau. Vom prestigeträchtigen Bergpark Wilhelmshöhe über den pulsierenden Königsplatz bis in die kreativen Viertel der Nordstadt – AKAN Dienstleistung bringt Ihre Geschäfts- und Wohnräume zum Strahlen.',
            economyFact: 'Als Standort von Volkswagen, SMA Solar und der Universität Kassel vereint die Stadt Industrie, Wissenschaft und Kultur – und damit höchste Ansprüche an Gebäudereinigung.',
            localReference: 'Vom Herkules bis zum Königsplatz',
            economicFocus: 'Industrieproduktion, Gewerbe, Dienstleistung, Kultur & Messewesen',
            localAuthority: 'Wir verstehen die logistischen und repräsentativen Anforderungen im Kasseler Großraum. Ob Gewerbebetriebe in Waldau oder Büros und Praxen in Wilhelmshöhe: Wir bieten Ihnen zuverlässige und flexible Gebäudereinigung mit festen Ansprechpartnern.',
            painPoints: [
                'Unzuverlässige Reinigungsfirmen und wechselndes Personal im laufenden Geschäftsbetrieb.',
                'Staub- und Umweltbelastungen an Fassaden, Fenstern und gewerblichen Flächen.',
                'Mangelnde Flexibilität bei kurzfristigem Reinigungsbedarf oder Sonderreinigungen.'
            ],
            benefits: [
                {
                    title: 'Schnelle Anfahrt aus Gudensberg',
                    description: 'Durch unsere günstige Anbindung in Gudensberg erreichen wir Objekte in Kassel und Umgebung zügig und flexibel.'
                },
                {
                    title: 'Bedarfsgerechte Reinigung',
                    description: 'Wir stimmen Intervalle, Reinigungszeiten und Methoden exakt auf Ihre Räumlichkeiten und Arbeitszeiten ab.'
                },
                {
                    title: 'Verlässliche Qualitätsstandards',
                    description: 'Für Büros, Kanzleien und Praxen in Kassel sichern wir gleichbleibend hohe Sauberkeit mit festen Reinigungskräften.'
                }
            ]
        },
        metaTitle: 'Gebäudereinigung Kassel | AKAN Dienstleistung',
        metaDescription: 'Professionelle Gebäudereinigung in Kassel & Umgebung: Unterhalts-, Glas-, Industrie- & Bauendreinigung. Zuverlässig & gründlich. Jetzt Angebot anfordern!',
    },
    'fritzlar': {
        slug: 'fritzlar',
        theme: 'light',
        name: 'Fritzlar',
        region: 'Schwalm-Eder-Kreis',
        einwohner: '14.800',
        geoCoords: { lat: 51.1317, lng: 9.2753 },
        wahrzeichen: ['Fritzlarer Dom', 'Marktplatz', 'Fachwerkhäuser', 'Grauer Turm'],
        stadtteile: ['Kernstadt', 'Geismar', 'Lohne', 'Obermöllrich', 'Ungedanken', 'Züschen'],
        entfernung: '10 km',
        localContent: {
            heroHeadline: 'Professionelle Gebäudereinigung in Fritzlar',
            heroSubline: 'Nur 10 Minuten entfernt – Qualitätsreinigung für die Domstadt',
            introText: 'Fritzlar, die älteste Stadt Hessens, verbindet stolze Geschichte mit modernem Wirtschaftsleben. Vom imposanten Dom über den malerischen Marktplatz bis zum historischen Grauen Turm – AKAN Dienstleistung sorgt dafür, dass Ihre Immobilien den gleichen stolzen Glanz ausstrahlen.',
            economyFact: 'Mit dem Bundeswehrstandort und zahlreichen Einzelhändlern am historischen Marktplatz ist Fritzlar ein wichtiger Wirtschaftsmotor der Region.',
            localReference: 'Vom Fritzlarer Dom bis zum Grauen Turm',
        },
        metaTitle: 'Gebäudereinigung Fritzlar | AKAN – In 10 Min. vor Ort',
        metaDescription: 'Gebäudereinigung in Fritzlar: Unterhalts-, Fenster- und Bauendreinigung vom Profi. Nur 10 km entfernt. Kostenlose Erstberatung!',
    },
    'baunatal': {
        slug: 'baunatal',
        theme: 'light',
        name: 'Baunatal',
        region: 'Kassel, Nordhessen',
        einwohner: '28.000',
        geoCoords: { lat: 51.259, lng: 9.418 },
        wahrzeichen: ['Volkswagen Werk Kassel', 'Baunsberg', 'Stadthalle Baunatal'],
        stadtteile: ['Altenbauna', 'Altenritte', 'Großenritte', 'Guntershausen', 'Hertingshausen', 'Kirchbauna', 'Rengershausen'],
        entfernung: '12 km',
        localContent: {
            heroHeadline: 'Industrie- & Gebäudereinigung für Baunatal',
            heroSubline: 'Hohe Sauberkeitsstandards für Nordhessens Wirtschaftsmotor – verlässlich und pünktlich.',
            introText: 'Als Standort des Volkswagen-Werks und zahlreicher Zulieferer ist Baunatal das industrielle Herz Nordhessens. Wir bei AKAN Dienstleistung verstehen die Anforderungen vor Ort: Von beanspruchten Hallenböden bis zu modernen Büroflächen liefern wir gründliche und verlässliche Reinigungsqualität.',
            localAuthority: 'Baunatals Industrie und Gewerbe verlangen Zuverlässigkeit. Wir bieten Reinigungslösungen, die sich nahtlos in Schichtbetriebe und betriebliche Vorgaben integrieren lassen.',
            economicFocus: 'Automobilindustrie, Zulieferer, Logistik & produzierendes Gewerbe',
            economyFact: 'Mit dem VW-Werk als größtem Arbeitgeber Nordhessens und zahlreichen Zulieferern prägt eine anspruchsvolle Industrie die Wirtschaft Baunatals.',
            localReference: 'Vom VW-Werk bis zum Baunataler Gewerbegebiet',
            painPoints: [
                'Sicherheits- und Zugangsauflagen in gewerblichen Anlagen',
                'Reinigung flexibel abgestimmt auf Schichtbetrieb und Pausenzeiten',
                'Umgang mit hartnäckigen gewerblichen Verschmutzungen (Öle, Schmierstoffe)',
                'Hohe Beanspruchung in Sanitär- und Sozialräumen'
            ],
            benefits: [
                {
                    title: 'Industrie-Erprobte Ausrüstung',
                    description: 'Unsere Teams sind geschult im Umgang mit modernen Kärcher Scheuersaugmaschinen und reinigen auch große Hallenflächen gründlich.'
                },
                {
                    title: 'Flexible Einsatzzeiten',
                    description: 'Wir passen unsere Reinigungszeiten flexibel an Ihre Betriebszeiten an, um Arbeitsabläufe nicht zu unterbrechen.'
                },
                {
                    title: 'Leistungsstarke Reinigungsgeräte',
                    description: 'Wir setzen moderne Maschinen und geeignete Reiniger ein, um auch hartnäckige Verschmutzungen in Werkshallen sicher zu entfernen.'
                }
            ]
        },
        metaTitle: 'Industrie- & Gebäudereinigung Baunatal | AKAN Dienstleistung',
        metaDescription: 'Spezialisierte Gebäudereinigung in Baunatal: Produktionshallen, Büros & Gewerbeobjekte. Schichtbegleitend und zuverlässig. Jetzt Angebot anfragen!',
    },
    'melsungen': {
        slug: 'melsungen',
        theme: 'light',
        name: 'Melsungen',
        region: 'Schwalm-Eder-Kreis',
        einwohner: '13.500',
        geoCoords: { lat: 51.1314, lng: 9.5506 },
        wahrzeichen: ['Fachwerk-Altstadt', 'Bartenwetzer-Brücke', 'Schloss Melsungen', 'Fulda-Ufer'],
        stadtteile: ['Kernstadt', 'Adelshausen', 'Günsterode', 'Kirchhof', 'Obermelsungen', 'Röhrenfurth'],
        entfernung: '20 km',
        localContent: {
            heroHeadline: 'Professionelle Gebäudereinigung in Melsungen',
            heroSubline: 'Zuverlässige Sauberkeit für Praxen, Büros und Kanzleien',
            introText: 'Melsungen verbindet als Heimat traditionsreicher Unternehmen historische Architektur an der Fulda mit hohen Ansprüchen an Sauberkeit. AKAN Dienstleistung bietet Ihnen verlässliche Unterhalts-, Praxis- und Büroreinigung mit geschultem Personal.',
            economyFact: 'Mit international tätigen Medizintechnik-Unternehmen und einer belebten Altstadt stellt Melsungen hohe Ansprüche an Qualität und Verlässlichkeit.',
            localReference: 'Von der Fachwerk-Altstadt bis in die Gewerbezonen',
            economicFocus: 'Medizintechnik, Dienstleistung, Handwerk und Verwaltung',
            localAuthority: 'In Melsungen legen Unternehmen großen Wert auf Verlässlichkeit und Hygiene. Wir bieten Ihnen professionelle Reinigungsleistungen mit festen Ansprechpartnern und flexiblen Einsatzzeiten.',
            painPoints: [
                'Wechselnde Reinigungskräfte und mangelnde Absprachen bei der Unterhaltsreinigung.',
                'Unzureichende Hygiene in sensiblen Praxis- oder Verwaltungsbereichen.',
                'Mangelnde Flexibilität und Termintreue bei kurzfristigen Reinigungsanforderungen.'
            ],
            benefits: [
                {
                    title: 'Geschultes Personal',
                    description: 'Feste Mitarbeiter mit geschultem Blick für Sauberkeit und Hygiene in Ihren Praxis- und Geschäftsräumen.'
                },
                {
                    title: 'Diskrete Ausführung',
                    description: 'Wir reinigen zuverlässig außerhalb Ihrer Öffnungszeiten für einen ungestörten Betriebsablauf.'
                },
                {
                    title: 'Persönliche Betreuung',
                    description: 'Feste Ansprechpartner vor Ort für direkte Kommunikation und verlässliche Absprachen.'
                }
            ]
        },
        metaTitle: 'Praxis- & Gebäudereinigung Melsungen | AKAN Dienstleistung',
        metaDescription: 'Professionelle Gebäudereinigung in Melsungen: Praxen, Büros, Kanzleien und Gewerbeobjekte. Zuverlässig & diskret. Jetzt Angebot anfordern!',
    },
    'homberg-efze': {
        slug: 'homberg-efze',
        theme: 'light', // Behördenzentrum => Helles, seriöses Theme
        name: 'Homberg (Efze)',
        region: 'Schwalm-Eder-Kreis',
        einwohner: '13.800',
        geoCoords: { lat: 51.0319, lng: 9.4053 },
        wahrzeichen: ['Hohenburg', 'Marktplatz', 'Reformationsstadt', 'Efze-Tal'],
        stadtteile: ['Kernstadt', 'Allmuthshausen', 'Berge', 'Holzhausen', 'Lützelwig', 'Mühlhausen'],
        entfernung: '18 km',
        localContent: {
            heroHeadline: 'Professionelle Gebäudereinigung in Homberg (Efze)',
            heroSubline: 'Kreisstadt-Qualität – zuverlässig und termingerecht',
            introText: 'Die Kreisstadt Homberg an der Efze thront mit ihrer imposanten Hohenburg über dem Schwalm-Eder-Kreis. Als Verwaltungszentrum mit zahlreichen Behörden, Praxen und Geschäften vertrauen Homberger Unternehmen auf die zuverlässige Reinigungsqualität von AKAN Dienstleistung.',
            economyFact: 'Als Kreisstadt des Schwalm-Eder-Kreises beherbergt Homberg zahlreiche Verwaltungsgebäude, Arztpraxen und Bildungseinrichtungen mit hohen Reinigungsanforderungen.',
            localReference: 'Von der Hohenburg bis ins Efze-Tal',
        },
        metaTitle: 'Gebäudereinigung Homberg (Efze) | AKAN – Kreisstadt-Qualität',
        metaDescription: 'Professionelle Reinigung in Homberg (Efze): Büros, Praxen, Verwaltungsgebäude. 18 km Anfahrt. Kostenlose Beratung!',
    },
    'borken-hessen': {
        slug: 'borken-hessen',
        theme: 'light',
        name: 'Borken (Hessen)',
        region: 'Schwalm-Eder-Kreis',
        einwohner: '12.500',
        geoCoords: { lat: 51.0444, lng: 9.2697 },
        wahrzeichen: ['Borkener See', 'Altstadt', 'Bergsenkungsgebiet', 'Naturschutzgebiet'],
        stadtteile: ['Kernstadt', 'Arnsbach', 'Dillich', 'Freudenthal', 'Großenenglis', 'Nassenerfurth'],
        entfernung: '22 km',
        localContent: {
            heroHeadline: 'Professionelle Gebäudereinigung in Borken',
            heroSubline: 'Saubere Räume für die Seestadt Nordhessens',
            introText: 'Borken in Hessen, bekannt für seinen einzigartigen Borkener See und das faszinierende Bergsenkungsgebiet, verbindet Natur mit Lebensqualität. AKAN Dienstleistung bringt diese Qualität auch in Ihre Geschäfts- und Wohnräume – mit professioneller Grundreinigung und regelmäßiger Pflege.',
            economyFact: 'Die Stadt Borken profitiert von einem vielfältigen Gewerbegebiet und zunehmender touristischer Bedeutung rund um den Borkener See.',
            localReference: 'Vom Borkener See bis zur Altstadt',
        },
        metaTitle: 'Gebäudereinigung Borken (Hessen) | AKAN Dienstleistung',
        metaDescription: 'Gebäudereinigung in Borken/Hessen: Professionelle Unterhalts- und Fensterreinigung. Zuverlässig, gründlich, fair. Jetzt anfragen!',
    },
    'edermuende': {
        slug: 'edermuende',
        theme: 'light',
        name: 'Edermünde',
        region: 'Schwalm-Eder-Kreis',
        einwohner: '7.200',
        geoCoords: { lat: 51.2097, lng: 9.4125 },
        wahrzeichen: ['Eder-Mündung', 'Grifte', 'Naturschutzgebiet Ederaue'],
        stadtteile: ['Besse', 'Grifte', 'Haldorf', 'Holzhausen'],
        entfernung: '8 km',
        localContent: {
            heroHeadline: 'Professionelle Gebäudereinigung in Edermünde',
            heroSubline: 'Ihr Nachbar für Reinigung – nur 8 km entfernt',
            introText: 'Edermünde, idyllisch gelegen an der Mündung der Eder in die Fulda, ist eine unserer nächstgelegenen Gemeinden. Diese räumliche Nähe garantiert Ihnen kürzeste Anfahrtszeiten und maximale Flexibilität – ob für regelmäßige Unterhaltsreinigung oder dringenden Einsatz.',
            economyFact: 'Die Gemeinde Edermünde liegt verkehrsgünstig an der B253 und profitiert von der Nähe zu Kassel und Gudensberg als Wohn- und Gewerbestandort.',
            localReference: 'Von Grifte bis Besse',
        },
        metaTitle: 'Gebäudereinigung Edermünde | AKAN – Nur 8 Min. Anfahrt',
        metaDescription: 'Reinigungsservice in Edermünde: Ihr direkter Nachbar für professionelle Gebäudereinigung. Kürzeste Wege, beste Qualität. Jetzt anfragen!',
    },
    'felsberg': {
        slug: 'felsberg',
        theme: 'light',
        name: 'Felsberg',
        region: 'Schwalm-Eder-Kreis',
        einwohner: '10.800',
        geoCoords: { lat: 51.1361, lng: 9.4222 },
        wahrzeichen: ['Felsburg', 'Drei Burgen', 'Eder-Tal', 'Altstadt'],
        stadtteile: ['Kernstadt', 'Gensungen', 'Altenburg', 'Böddiger', 'Hesserode', 'Lohre'],
        entfernung: '5 km',
        localContent: {
            heroHeadline: 'Professionelle Gebäudereinigung in Felsberg',
            heroSubline: 'Nur 5 Minuten Anfahrt – Ihr nächster Reinigungspartner',
            introText: 'Die Drei-Burgen-Stadt Felsberg ist praktisch unser direkter Nachbar. Vom majestätischen Blick der Felsburg über das malerische Eder-Tal bis in die historische Altstadt – AKAN Dienstleistung ist in nur 5 Minuten bei Ihnen und sorgt für strahlende Sauberkeit.',
            economyFact: 'Felsberg und insbesondere der Stadtteil Gensungen sind wichtige Gewerbestandorte mit direkter Anbindung an die B253 und die Nähe zu Kassel.',
            localReference: 'Von der Felsburg bis ins Eder-Tal',
        },
        metaTitle: 'Gebäudereinigung Felsberg | AKAN – In 5 Min. bei Ihnen',
        metaDescription: 'Gebäudereinigung in Felsberg: Ihr direkter Nachbar aus Gudensberg. Unterhalts-, Fenster- & Bauendreinigung. Nur 5 km entfernt!',
    },
    'bad-wildungen': {
        slug: 'bad-wildungen',
        theme: 'light',
        name: 'Bad Wildungen',
        region: 'Landkreis Waldeck-Frankenberg',
        einwohner: '17.000',
        geoCoords: { lat: 51.1197, lng: 9.1231 },
        wahrzeichen: ['Kurpark', 'Schloss Friedrichstein', 'Wandelhalle', 'Quellenmuseum'],
        stadtteile: ['Kernstadt', 'Reinhardshausen', 'Albertshausen', 'Braunau', 'Hundsdorf', 'Wega'],
        entfernung: '30 km',
        localContent: {
            heroHeadline: 'Professionelle Gebäudereinigung in Bad Wildungen',
            heroSubline: 'Kurort-Sauberkeit für Hessens Gesundheitsstadt',
            introText: 'Bad Wildungen, Europas größter Kurort, setzt Maßstäbe in Sauberkeit und Wohlbefinden. Von den prachtvollen Kuranlagen über das fürstliche Schloss Friedrichstein bis zu den modernen Rehakliniken – AKAN Dienstleistung liefert Reinigungsqualität, die dem Kurort-Standard gerecht wird.',
            economyFact: 'Als Europas größter Kurort mit über 30 Kliniken und Hotels hat Bad Wildungen höchste Ansprüche an Hygiene und Gebäudereinigung.',
            localReference: 'Vom Kurpark bis zum Schloss Friedrichstein',
        },
        metaTitle: 'Gebäudereinigung Bad Wildungen | AKAN – Kurort-Qualität',
        metaDescription: 'Professionelle Reinigung in Bad Wildungen: Kliniken, Hotels, Büros, Privat. Kurort-Hygienestandards. Jetzt kostenlos anfragen!',
    },
    'schwalmstadt': {
        slug: 'schwalmstadt',
        theme: 'light',
        name: 'Schwalmstadt',
        region: 'Schwalm-Eder-Kreis',
        einwohner: '18.500',
        geoCoords: { lat: 50.9336, lng: 9.2164 },
        wahrzeichen: ['Schwälmer Tracht', 'Stadtkirche Treysa', 'Hephata', 'Schwalm-Aue'],
        stadtteile: ['Treysa', 'Ziegenhain', 'Allendorf', 'Ascherode', 'Dittershausen', 'Florshain'],
        entfernung: '25 km',
        localContent: {
            heroHeadline: 'Professionelle Gebäudereinigung in Schwalmstadt',
            heroSubline: 'Zuverlässige Reinigung für die Doppelstadt an der Schwalm',
            introText: 'Schwalmstadt, entstanden aus der Vereinigung von Treysa und Ziegenhain, ist das kulturelle Herz der Schwalm-Region. Die traditionsreiche Schwälmer Kultur steht für Sorgfalt und Liebe zum Detail – Werte, die AKAN Dienstleistung in jeder Reinigung verkörpert.',
            economyFact: 'Die diakonische Einrichtung Hephata, zahlreiche Einzelhändler und Gewerbebetriebe machen Schwalmstadt zu einem vielfältigen Wirtschaftsstandort.',
            localReference: 'Von Treysa bis Ziegenhain',
        },
        metaTitle: 'Gebäudereinigung Schwalmstadt | AKAN Dienstleistung',
        metaDescription: 'Gebäudereinigung in Schwalmstadt: Treysa & Ziegenhain. Professionelle Reinigung mit regionaler Verbundenheit. Kostenlose Beratung!',
    },
    'wabern': {
        slug: 'wabern',
        theme: 'light',
        name: 'Wabern',
        region: 'Schwalm-Eder-Kreis',
        einwohner: '7.300',
        geoCoords: { lat: 51.1014, lng: 9.3506 },
        wahrzeichen: ['Bahnhof Wabern', 'Eder-Radweg', 'Schloss Wabern'],
        stadtteile: ['Kernstadt', 'Falkenberg', 'Harle', 'Hebel', 'Niedermöllrich', 'Unshausen', 'Uttershausen', 'Zennern'],
        entfernung: '7 km',
        localContent: {
            heroHeadline: 'Professionelle Gebäudereinigung in Wabern',
            heroSubline: 'Ihr zuverlässiger Reinigungspartner – nur 7 km entfernt',
            introText: 'Wabern, der wichtige Eisenbahnknotenpunkt im Schwalm-Eder-Kreis, liegt direkt vor unserer Haustür. Die hervorragende Verkehrsanbindung ermöglicht uns, blitzschnell bei Ihnen zu sein – ob für regelmäßige Reinigung oder kurzfristige Einsätze.',
            economyFact: 'Als wichtiger Bahnknotenpunkt und Gewerbestandort mit direkter Anbindung an Kassel und Frankfurt bietet Wabern ein ideales Umfeld für Unternehmen aller Branchen.',
            localReference: 'Vom Bahnhof bis zum Eder-Radweg',
        },
        metaTitle: 'Gebäudereinigung Wabern | AKAN – Nur 7 Min. Anfahrt',
        metaDescription: 'Reinigungsservice in Wabern: Professionelle Gebäudereinigung aus der Nachbarschaft. Schnell, gründlich, fair. Jetzt anfragen!',
    },
};

/** Get all location slugs for generateStaticParams */
export function getAllLocationSlugs(): string[] {
    return Object.keys(locationData);
}

/** Get a specific location by slug */
export function getLocation(slug: string): LocationDetail | undefined {
    return locationData[slug];
}
