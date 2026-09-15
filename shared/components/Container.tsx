import { ReactNode, ElementType } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    as?: ElementType;
}

export function Container({ children, className = '', as: Component = 'div' }: ContainerProps) {
    // Kapselt das globale Grid-Verhalten & die maximale Breite
    return (
        <Component className={`container-fluid w-full ${className}`.trim()}>
            {children}
        </Component>
    );
}
