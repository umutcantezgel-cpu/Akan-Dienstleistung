import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    // 301 Redirect for renamed Route: Galerie -> Referenzen
    if (request.nextUrl.pathname.startsWith('/galerie')) {
        return NextResponse.redirect(new URL('/referenzen', request.url), 301);
    }

    // 301 Redirect for renamed Route: Services -> Leistungen (SEO-01)
    if (request.nextUrl.pathname.startsWith('/services')) {
        const newPath = request.nextUrl.pathname.replace('/services', '/leistungen');
        return NextResponse.redirect(new URL(newPath, request.url), 301);
    }

    // 1. Security Headers (Titanium Standard & Privacy-by-Design)
    response.headers.set('X-DNS-Prefetch-Control', 'off'); // Disable DNS prefetching to prevent leaking info about linked domains
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload'); // 2 years
    response.headers.set('X-Frame-Options', 'DENY'); // Prevent clickjacking entirely
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');

    // 2. Content-Security-Policy (Zero-Tolerance Privacy)
    response.headers.set('Content-Security-Policy', [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline'", // Google Fonts removed - all fonts locally hosted via next/font
        "font-src 'self' data:", // Allow data URI for some local font fallbacks or icon SVGs
        "img-src 'self' data: blob: https://*.basemaps.cartocdn.com https://*.tile.openstreetmap.org", // Allowed maps tiles
        "frame-src 'self' https://www.google.com/maps/", // Only allow explicit google maps embed
        "connect-src 'self' https://vitals.vercel-insights.com", // Vercel Analytics allowed (GDPR compliant telemetry)
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
    ].join('; '));

    // 2. Geo-Location Context (Optional: can be used later for personalized regional content)
    // const country = request.geo?.country || 'DE';
    // response.headers.set('x-user-country', country);

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - images (public images)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
    ],
};
