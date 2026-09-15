'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
    useReportWebVitals((metric) => {
        // Console log for development / debugging purposes.
        // In production, this can be hooked up to Vercel Analytics, Datadog or Google Analytics
        if (process.env.NODE_ENV === 'development') {
            console.log(`[Web Vitals] ${metric.name}: ${metric.value}`, metric);
        }

        // Example integration for custom analytics endpoint (commented out for now)
        /*
        const body = JSON.stringify(metric)
        const url = 'https://example.com/analytics'
        // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
        if (navigator.sendBeacon) {
          navigator.sendBeacon(url, body)
        } else {
          fetch(url, { body, method: 'POST', keepalive: true })
        }
        */
    });

    return null;
}
