'use client';

import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
    className?: string;
    fill?: boolean;
    width?: number | string;
    height?: number | string;
    alt?: string;
    iconSize?: number;
    originalSrc?: string;
}

export default function ImagePlaceholder({
    className = '',
    fill,
    width,
    height,
    alt,
    iconSize = 32,
    originalSrc // Ignored: Project configured to show placeholders only
}: ImagePlaceholderProps) {
    // Beautiful gradient placeholder
    const containerClasses = fill
        ? `absolute inset-0 w-full h-full ${className}`
        : className;

    return (
        <div
            className={`flex flex-col items-center justify-center bg-gradient-to-br from-surface via-primary-light/10 to-surface border border-border/30 text-text-secondary ${containerClasses}`}
            style={!fill ? { width: width || '100%', height: height || '100%' } : undefined}
        >
            <div className="w-14 h-14 rounded-full bg-primary/8 flex items-center justify-center">
                <ImageIcon size={iconSize} className="text-primary/40" />
            </div>
            {alt && <span className="text-xs font-medium opacity-50 px-4 text-center mt-2">{alt}</span>}
        </div>
    );
}
