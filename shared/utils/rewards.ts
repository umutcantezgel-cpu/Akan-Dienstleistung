'use client';

// ═══════════════════════════════════════════════════════════
// OMEGA Ω-19 — Micro-Dopamine Reward System
// Handles haptic feedback, local storage achievements, 
// and dynamic full-screen rewards (confetti)
// ═══════════════════════════════════════════════════════════

export const triggerMicroVibration = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
        // Very subtle tap
        navigator.vibrate(10);
    }
};

export const triggerSuccessVibration = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
        // Double tap for success
        navigator.vibrate([30, 50, 40]);
    }
};

export const triggerErrorVibration = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
        // Heavy buzz for error/deny
        navigator.vibrate([50, 100, 50]);
    }
};

// Extremely lightweight DOM-based confetti burst
export const triggerConfettiBurst = (x?: number, y?: number) => {
    if (typeof document === 'undefined') return;

    triggerSuccessVibration();

    const burstX = x ?? window.innerWidth / 2;
    const burstY = y ?? window.innerHeight / 2;
    const colors = ['#9B1C2E', '#E85D75', '#F1D4DB', '#FFD700', '#00ffff', '#ff00ff'];

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)] || '#FFD700';
        const size = Math.random() * 8 + 4;

        // Initial state
        particle.style.position = 'absolute';
        particle.style.left = `${burstX}px`;
        particle.style.top = `${burstY}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        particle.style.transform = `translate(-50%, -50%) scale(0)`;
        particle.style.transition = `transform ${0.5 + Math.random() * 0.8}s cubic-bezier(0.1, 0.8, 0.3, 1), opacity ${0.5 + Math.random() * 0.8}s ease-in`;

        container.appendChild(particle);

        // Calculate destination
        const angle = Math.random() * Math.PI * 2;
        const velocity = 50 + Math.random() * 200;
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity - 100; // gravity bias

        // Animate next frame
        requestAnimationFrame(() => {
            particle.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${Math.random() * 1.5 + 0.5}) rotate(${Math.random() * 360}deg)`;
            particle.style.opacity = '0';
        });
    }

    // Cleanup
    setTimeout(() => {
        if (container.parentNode) {
            container.parentNode.removeChild(container);
        }
    }, 1500);
};

// Track interactions for user achievements
export const trackInteraction = (action: string) => {
    if (typeof window === 'undefined') return;
    try {
        const key = `akan_clicks_${action}`;
        const current = parseInt(localStorage.getItem(key) || '0', 10);
        const next = current + 1;
        localStorage.setItem(key, next.toString());

        // Reward logic
        if (next === 10) {
            triggerConfettiBurst();
            return { badge: 'bronze', message: 'Bronze Explorer unlocked!' };
        }
        if (next === 50) {
            triggerConfettiBurst();
            return { badge: 'silver', message: 'Silver Navigator unlocked!' };
        }
    } catch (e) {
        // ignore storage errors
    }
    return null;
};
