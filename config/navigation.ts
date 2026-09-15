export interface NavLink {
    href: string;
    label: string;
}

export const navLinks: NavLink[] = [
    { href: '/', label: 'Startseite' },
    { href: '/services', label: 'Leistungen' },
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/galerie', label: 'Galerie' },
    { href: '/contact', label: 'Kontakt' },
];
