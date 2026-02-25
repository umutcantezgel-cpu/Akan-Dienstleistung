'use client';

// ═══════════════════════════════════════════════════════════
// HEPHAISTOS — Skip Link (Accessibility First)
// Invisible until focused, jumps to #main-content
// ═══════════════════════════════════════════════════════════

export default function SkipLink() {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-bold focus:font-display focus:shadow-elevated focus:outline-none focus:ring-4 focus:ring-primary/40 focus:ring-offset-2 transition-all"
        >
            Direkt zum Inhalt
        </a>
    );
}
