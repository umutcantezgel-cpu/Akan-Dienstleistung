/**
 * Performance monitoring utilities for AKAN Dienstleistung.
 * Tracks Core Web Vitals and provides budget enforcement.
 * @module lib/performance
 */

export interface WebVitalMetric {
    name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'INP';
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
}

/** Performance budget thresholds */
export const PERFORMANCE_BUDGETS = {
    LCP: { good: 2500, poor: 4000 },
    FID: { good: 100, poor: 300 },
    CLS: { good: 0.1, poor: 0.25 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 },
    INP: { good: 200, poor: 500 },
} as const;

/**
 * Rates a Web Vital metric against performance budgets.
 * @param name - The metric name
 * @param value - The metric value
 * @returns The rating: 'good', 'needs-improvement', or 'poor'
 */
export function rateMetric(
    name: keyof typeof PERFORMANCE_BUDGETS,
    value: number
): 'good' | 'needs-improvement' | 'poor' {
    const budget = PERFORMANCE_BUDGETS[name];
    if (value <= budget.good) return 'good';
    if (value <= budget.poor) return 'needs-improvement';
    return 'poor';
}

/**
 * Reports a Web Vital metric to the console (dev) or analytics (prod).
 * @param metric - The Web Vital metric to report
 */
export function reportWebVital(metric: WebVitalMetric): void {
    const icon = metric.rating === 'good' ? '🟢' : metric.rating === 'needs-improvement' ? '🟡' : '🔴';

    if (process.env.NODE_ENV === 'development') {
        console.log(
            `${icon} [Web Vital] ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`
        );
    }
}

/**
 * Measures the execution time of an async function.
 * @param label - A label for the measurement
 * @param fn - The async function to measure
 * @returns The result of the function
 */
export async function measureAsync<T>(label: string, fn: () => Promise<T>): Promise<T> {
    const start = performance.now();
    const result = await fn();
    const duration = performance.now() - start;

    if (process.env.NODE_ENV === 'development') {
        console.log(`⏱️ [Perf] ${label}: ${duration.toFixed(2)}ms`);
    }

    return result;
}

/**
 * Checks if the user prefers reduced motion.
 * @returns true if the user has requested reduced motion animations
 */
export function prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
