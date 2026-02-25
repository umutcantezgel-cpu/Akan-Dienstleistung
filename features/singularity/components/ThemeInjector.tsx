'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export type VisualSingularity = 'default' | 'industrial' | 'ethereal' | 'rhythmic' | 'surgical' | 'heritage' | 'morphology';

interface SingularityConfig {
    '--complexity-grid': string;
    '--blur-factor': string;
    '--motion-damping': string;
    '--motion-stiffness': string;
    '--theme-primary': string;
    '--theme-bg': string;
    '--theme-text': string;
    '--singularity-glow': string;
}

const singularityMatrix: Record<VisualSingularity, SingularityConfig> = {
    default: {
        '--complexity-grid': '1rem',
        '--blur-factor': '20px',
        '--motion-damping': '30',
        '--motion-stiffness': '300',
        '--theme-primary': '155 28 46',    // Akan Red RGB
        '--theme-bg': '250 250 250',        // Surface RGB
        '--theme-text': '17 24 39',         // Gray-900 RGB
        '--singularity-glow': 'rgba(155, 28, 46, 0.1)',
    },
    industrial: {
        '--complexity-grid': '1.5rem',      // Asymmetric, larger gaps
        '--blur-factor': '2px',             // Rough, unpolished glass
        '--motion-damping': '15',           // Heavy, brutal thud
        '--motion-stiffness': '150',
        '--theme-primary': '210 40 50',     // Aggressive Red
        '--theme-bg': '10 10 12',           // Deep Asphalt
        '--theme-text': '240 240 240',      // High contrast white
        '--singularity-glow': 'rgba(210, 40, 50, 0.3)',
    },
    ethereal: {
        '--complexity-grid': '0.75rem',     // Tight, precise
        '--blur-factor': '40px',            // Heavy refraction
        '--motion-damping': '45',           // Smooth, flowing slide
        '--motion-stiffness': '200',
        '--theme-primary': '100 180 255',   // Ice Blue / Cyan highlights
        '--theme-bg': '255 255 255',        // Pure White
        '--theme-text': '30 40 50',         // Slate text
        '--singularity-glow': 'rgba(100, 180, 255, 0.15)',
    },
    rhythmic: {
        '--complexity-grid': '1.25rem',     // Perfect mathematical spacing
        '--blur-factor': '12px',
        '--motion-damping': '25',           // Bouncy, rhythmic
        '--motion-stiffness': '400',
        '--theme-primary': '180 120 40',    // Warm Amber/Gold
        '--theme-bg': '248 245 240',        // Warm paper
        '--theme-text': '40 30 20',         // Deep brown/black
        '--singularity-glow': 'rgba(180, 120, 40, 0.1)',
    },
    surgical: {
        '--complexity-grid': '2px',         // Razor thin borders/gaps
        '--blur-factor': '0px',             // Absolute clarity, no blur
        '--motion-damping': '50',           // Clinical, sharp stop
        '--motion-stiffness': '500',
        '--theme-primary': '255 0 0',       // Laser Red
        '--theme-bg': '5 5 5',              // Vantablack
        '--theme-text': '255 255 255',      // Pure white
        '--singularity-glow': 'rgba(255, 0, 0, 0.5)',
    },
    heritage: {
        '--complexity-grid': '1rem',
        '--blur-factor': '15px',
        '--motion-damping': '35',
        '--motion-stiffness': '250',
        '--theme-primary': '120 20 40',     // Deep heritage wine red
        '--theme-bg': '252 250 248',        // Museum marble
        '--theme-text': '20 20 25',
        '--singularity-glow': 'rgba(120, 20, 40, 0.2)',
    },
    morphology: {
        // These will be overridden by the MorphologyEngine in JS
        '--complexity-grid': '1rem',
        '--blur-factor': '20px',
        '--motion-damping': '30',
        '--motion-stiffness': '300',
        '--theme-primary': '155 28 46',
        '--theme-bg': '250 250 250',
        '--theme-text': '17 24 39',
        '--singularity-glow': 'rgba(155, 28, 46, 0.1)',
    }
};

export default function ThemeInjector() {
    const pathname = usePathname();

    useEffect(() => {
        if (!pathname) return;

        // 1. Determine Singularity Type based on Route
        let type: VisualSingularity = 'default';

        if (pathname.includes('/leistungen/bauendreinigung')) {
            type = 'industrial';
        } else if (pathname.includes('/leistungen/glasreinigung')) {
            type = 'ethereal';
        } else if (pathname.includes('/leistungen/unterhaltsreinigung')) {
            type = 'rhythmic';
        } else if (pathname.includes('/leistungen/sonderreinigung')) {
            type = 'surgical';
        } else if (pathname.includes('/standorte/kassel')) {
            type = 'heritage';
        } else if (pathname.includes('/standorte/')) {
            // All other cities use the algorithmic morphology engine
            type = 'morphology';
        }

        // 2. Inject CSS Variables into the :root document
        const config = singularityMatrix[type];
        const root = document.documentElement;

        Object.entries(config).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        // Clean up function (optional, but good for reset if unmounted)
        return () => {
            Object.entries(singularityMatrix.default).forEach(([key, value]) => {
                root.style.setProperty(key, value);
            });
        };
    }, [pathname]);

    return null; // This is a headless component
}
