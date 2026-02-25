import { Building2, Sun, HardHat, Factory, MapPin } from 'lucide-react';
import { getAllLocationSlugs, getLocation } from '@/features/locations/data/locationData';

// Generiere Standorte-Links dynamisch
const locationLinks = getAllLocationSlugs().map(slug => {
    const loc = getLocation(slug)!;
    return {
        href: `/standorte/${slug}`,
        // Wir nehmen den ersten Wahrzeichen-Eintrag als kleine Info für das Menü
        label: loc.name,
        desc: loc.wahrzeichen[0] || 'Standort',
        icon: MapPin
    };
});

export const navLinks = [
    { href: '/', label: 'Startseite' },
    {
        href: '/leistungen', label: 'Leistungen', children: [
            { href: '/leistungen/unterhaltsreinigung', label: 'Unterhaltsreinigung', desc: 'Büros & Praxen', icon: Building2 },
            { href: '/leistungen/fensterreinigung', label: 'Fensterreinigung', desc: 'Streifenfreier Glanz', icon: Sun },
            { href: '/leistungen/bauendreinigung', label: 'Bauendreinigung', desc: 'Nach Neubau/Sanierung', icon: HardHat },
            { href: '/leistungen/industriereinigung', label: 'Industriereinigung', desc: 'Hallen & Produktion', icon: Factory },
        ]
    },
    {
        href: '/standorte', label: 'Standorte', children: locationLinks
    },
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/referenzen', label: 'Referenzen' },
    { href: '/contact', label: 'Kontakt' },
];
