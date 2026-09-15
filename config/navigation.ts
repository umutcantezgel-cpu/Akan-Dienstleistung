export interface NavLink {
    href: string;
    label: string;
}

export const navLinks: NavLink[] = [
    { href: '/', label: 'Startseite' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/referenzen', label: 'Referenzen' },
    { href: '/standorte', label: 'Standorte' },
    { href: '/contact', label: 'Kontakt' },
];
