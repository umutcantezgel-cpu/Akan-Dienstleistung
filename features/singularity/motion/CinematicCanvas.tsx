'use client';

import type { VisualSingularity } from '../components/ThemeInjector';

interface CinematicCanvasProps {
    type: VisualSingularity;
    className?: string;
}

export default function CinematicCanvas({ type, className = '' }: CinematicCanvasProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
            {/* 1. INDUSTRIAL (Bauendreinigung) - Static calm tone */}
            {type === 'industrial' && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-neutral-900/30 to-transparent opacity-80" />
            )}

            {/* 2. ETHEREAL (Glasreinigung) - Static clean gradient */}
            {type === 'ethereal' && (
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 via-transparent to-blue-950/10" />
            )}

            {/* Baseline subtle tone */}
            <div className="absolute inset-0 bg-gradient-to-br from-theme-glow/10 to-transparent mix-blend-soft-light" />
        </div>
    );
}
