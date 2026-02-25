'use client';

import { ReactNode } from 'react';
import { useConsentStore } from '../store/useConsentStore';
import { ShieldAlert } from 'lucide-react';

interface ConsentBoundaryProps {
    type: 'functional' | 'analytics' | 'marketing';
    title: string;
    description: string;
    children: ReactNode;
    fallbackImage?: string; // Optional blurred background or placeholder
}

export default function ConsentBoundary({ type, title, description, children, fallbackImage }: ConsentBoundaryProps) {
    const { preferences, savePreferences, hasConsented, openBanner } = useConsentStore();

    // Check if user has explicitly allowed this category
    const hasPermission = preferences[type] === true;

    if (hasPermission) {
        return <>{children}</>;
    }

    const handleGrantPermission = () => {
        savePreferences({ [type]: true });
    };

    return (
        <div className="relative w-full h-full min-h-[250px] rounded-2xl overflow-hidden bg-surface border border-border flex items-center justify-center p-6 text-center group">
            {/* Optional blurred background */}
            {fallbackImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 filter blur-sm transition-opacity group-hover:opacity-40"
                    style={{ backgroundImage: `url(${fallbackImage})` }}
                />
            )}

            <div className="relative z-10 max-w-sm flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <ShieldAlert className="w-6 h-6" />
                </div>

                <h3 className="text-base font-bold text-text-primary mb-2">{title} blockiert</h3>
                <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-col gap-3 w-full">
                    <button
                        onClick={handleGrantPermission}
                        className="bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary-hover transition-colors shadow-soft hover:-translate-y-0.5"
                    >
                        Inhalt laden & akzeptieren
                    </button>
                    {!hasConsented && (
                        <button
                            onClick={openBanner}
                            className="text-xs text-text-secondary hover:text-primary transition-colors underline underline-offset-4"
                        >
                            Datenschutzeinstellungen öffnen
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
