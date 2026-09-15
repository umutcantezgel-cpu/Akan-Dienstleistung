'use client';

import dynamic from 'next/dynamic';

// ── Dynamic Imports (Client-Only UI Utilities) ─────────────
const BackToTop = dynamic(() => import('@/shared/components/BackToTop'), { ssr: false });
const StickyActionBar = dynamic(() => import('@/shared/components/StickyActionBar'), { ssr: false });

/**
 * ClientEffects — Wraps client-only utility components.
 * Visual noise (WebGL canvas, pulsating lighting, noise overlay,
 * cursor effects, intrusive toasts) have been removed for a calm, professional UX.
 */
export default function ClientEffects() {
    return (
        <>
            <BackToTop />
            <StickyActionBar />
        </>
    );
}
