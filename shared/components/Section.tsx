import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    spacing?: 'default' | 'large' | 'none';
}

export function Section({ children, className = '', id, spacing = 'default' }: SectionProps) {
    // Standardisiert das vertikale Padding für alle Seiten-Sektionen
    const paddingClass =
        spacing === 'large' ? 'py-section-lg' :
            spacing === 'default' ? 'py-section' : '';

    return (
        <section
            id={id}
            className={`relative w-full ${paddingClass} ${className}`.trim()}
        >
            {children}
        </section>
    );
}
