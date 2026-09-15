'use client';

interface AkanLogoProps {
    className?: string;
}

export default function AkanLogo({ className = '' }: AkanLogoProps) {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src="/images/logos/akan-logo.svg"
            alt="AKAN Dienstleistung Logo"
            className={className}
            style={{ objectFit: 'contain' }}
        />
    );
}
