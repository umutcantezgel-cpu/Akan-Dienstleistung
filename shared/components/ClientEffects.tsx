'use client';

import dynamic from 'next/dynamic';

// ── Dynamic Imports (Client-Only Visual Effects) ───────────
// Lazy-loaded to reduce initial bundle size & improve INP
const WebGLBackground = dynamic(() => import('@/shared/components/WebGLBackground'), { ssr: false });
const LightingRig = dynamic(() => import('@/shared/components/LightingRig'), { ssr: false });
const NoiseOverlay = dynamic(() => import('@/shared/components/NoiseOverlay'), { ssr: false });
const ScrollDistortion = dynamic(() => import('@/shared/components/ScrollDistortion'), { ssr: false });
const EnvironmentLighting = dynamic(() => import('@/shared/components/EnvironmentLighting'), { ssr: false });
const SocialProofToast = dynamic(() => import('@/shared/components/SocialProofToast'), { ssr: false });
const BackToTop = dynamic(() => import('@/shared/components/BackToTop'), { ssr: false });
const CursorTrail = dynamic(() => import('@/shared/components/CursorTrail'), { ssr: false });
const CustomCursor = dynamic(() => import('@/shared/components/CustomCursor'), { ssr: false });
const StickyActionBar = dynamic(() => import('@/shared/components/StickyActionBar'), { ssr: false });

/**
 * ClientEffects — Wraps all client-only visual effects that should be
 * lazily loaded after hydration. Extracted from layout.tsx because
 * `ssr: false` in `next/dynamic` requires a Client Component boundary.
 */
export default function ClientEffects() {
    return (
        <>
            <WebGLBackground />
            <LightingRig />
            <NoiseOverlay />
            <ScrollDistortion />
            <EnvironmentLighting />
            <SocialProofToast />
            <BackToTop />
            <CursorTrail />
            <CustomCursor />
            <StickyActionBar />
        </>
    );
}
