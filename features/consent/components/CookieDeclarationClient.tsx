'use client';

import dynamic from 'next/dynamic';

const CookieDeclarationTable = dynamic(() => import('@/features/consent/components/CookieDeclarationTable'), { ssr: false });

export default function CookieDeclarationClient() {
    return <CookieDeclarationTable />;
}
