'use client';

import { Image as ImageIcon } from 'lucide-react';
import NextImage from 'next/image';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-12 — Progressive Image Delivery (PERF-01)
// Automated sizes matrix & priority handling for all assets
// ═══════════════════════════════════════════════════════════

interface ImagePlaceholderProps {
    className?: string;
    fill?: boolean;
    width?: number | string;
    height?: number | string;
    alt?: string;
    iconSize?: number;
    originalSrc?: string;
    priority?: boolean;
    sizes?: string;
}

export default function ImagePlaceholder({
    className = '',
    fill,
    width,
    height,
    alt = '',
    iconSize = 32,
    originalSrc,
    priority = false,
    sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 75vw, (max-width: 1920px) 50vw, 33vw" // PERF-01 matrix
}: ImagePlaceholderProps) {
    if (originalSrc) {
        const commonProps = {
            src: originalSrc,
            alt,
            className: fill ? className : `object-cover w-full h-full ${className}`,
            priority,
            sizes,
            quality: priority ? 90 : 75,
            placeholder: 'blur' as const,
            // A tiny generated 1x1 solid color pixel (#f8f4f5 - wine-50) data-url for smooth image loading
            blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
        };

        return (
            <div className={`relative overflow-hidden bg-wine-50 ${!fill ? className : ''}`} style={!fill ? { width: width || '100%', height: height || '100%' } : { position: 'absolute', inset: 0 }}>
                {fill ? (
                    <NextImage fill {...commonProps} />
                ) : (
                    <NextImage width={Number(width) || 100} height={Number(height) || 100} {...commonProps} />
                )}
            </div>
        );
    }

    // Beautiful gradient placeholder (Fallback)
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
