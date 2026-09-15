import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Represents a single particle in the interactive cursor trail.
 */
export interface TrailParticle {
    /** Unique identifier for React rendering */
    id: number;
    /** X coordinate of the cursor when spawned */
    x: number;
    /** Y coordinate of the cursor when spawned */
    y: number;
    /** Normalized velocity of the cursor movement (0 to 1) */
    velocity: number;
    /** Computed size based on velocity */
    size: number;
    /** Computed color hue based on underlying DOM elements */
    hue: number;
}

/**
 * Custom hook that generates a trailing particle effect behind the user's cursor.
 * Calculates velocity, size, dynamically changes color based on hovered DOM elements,
 * and manages the lifecycle of trail points for smooth animations.
 * 
 * @returns Object containing the trail state, enabled status, and a toggle function
 */
export function useCursorTrail() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [trail, setTrail] = useState<TrailParticle[]>([]);
    const idRef = useRef(0);
    const lastPos = useRef({ x: 0, y: 0 });
    const lastTime = useRef(0);
    const velocityRef = useRef(0);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isEnabled) return;

        const now = Date.now();
        const dt = Math.max(now - lastTime.current, 1);
        const dx = e.clientX - lastPos.current.x;
        const dy = e.clientY - lastPos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const velocity = distance / dt;

        velocityRef.current = velocityRef.current * 0.7 + velocity * 0.3;

        lastPos.current = { x: e.clientX, y: e.clientY };
        lastTime.current = now;

        if (distance < 3) return;

        const normalizedVelocity = Math.min(velocityRef.current / 2, 1);
        const size = 6 + (1 - normalizedVelocity) * 14;
        const hue = getContextualHue(e.clientX, e.clientY);

        const particle: TrailParticle = {
            id: idRef.current++,
            x: e.clientX,
            y: e.clientY,
            velocity: normalizedVelocity,
            size,
            hue,
        };

        const maxTrailLength = Math.round(8 + normalizedVelocity * 16);
        setTrail((prev) => [...prev.slice(-maxTrailLength), particle]);
    }, [isEnabled]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    useEffect(() => {
        if (trail.length === 0) return;
        const timer = setTimeout(() => {
            setTrail((prev) => prev.slice(1));
        }, 60);
        return () => clearTimeout(timer);
    }, [trail]);

    const toggle = useCallback(() => {
        setIsEnabled(prev => !prev);
        setTrail([]);
    }, []);

    return { isEnabled, trail, toggle };
}

function getContextualHue(x: number, y: number): number {
    const el = document.elementFromPoint(x, y);
    if (!el) return 350;

    const tag = el.tagName.toLowerCase();
    const classList = String(el.className || '');

    if (tag === 'button' || tag === 'a' || classList.includes('cta')) return 350;
    if (classList.includes('trust') || classList.includes('gold')) return 42;
    if (classList.includes('info') || classList.includes('faq')) return 220;

    return 350;
}

export function getHueColor(hue: number, alpha: number): string {
    if (hue >= 340 || hue < 10) return `rgba(146, 24, 41, ${alpha})`;
    if (hue >= 30 && hue < 55) return `rgba(214, 168, 72, ${alpha})`;
    if (hue >= 200 && hue < 240) return `rgba(59, 130, 246, ${alpha})`;
    return `rgba(146, 24, 41, ${alpha})`;
}
