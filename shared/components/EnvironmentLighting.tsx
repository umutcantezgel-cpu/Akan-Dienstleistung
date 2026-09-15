'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function EnvironmentLighting() {
    const [lightingColor, setLightingColor] = useState('rgba(255, 245, 247, 0.03)'); // Default subtle warm white

    useEffect(() => {
        const updateLighting = () => {
            const hour = new Date().getHours();

            // Morning (6-11): Cooler, crisp light
            if (hour >= 6 && hour < 11) {
                setLightingColor('rgba(230, 240, 255, 0.04)');
            }
            // Midday (11-16): Neutral bright
            else if (hour >= 11 && hour < 16) {
                setLightingColor('rgba(255, 255, 255, 0.02)');
            }
            // Evening (16-20): Warm, golden hour / rose
            else if (hour >= 16 && hour < 20) {
                setLightingColor('rgba(255, 215, 200, 0.05)');
            }
            // Night (20-6): Deep, cool, subtle blue/purple tint
            else {
                setLightingColor('rgba(10, 10, 30, 0.15)');
            }
        };

        updateLighting();
        const interval = setInterval(updateLighting, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-[80] h-full w-full mix-blend-overlay"
            animate={{ backgroundColor: lightingColor }}
            transition={{ duration: 5 }} // Slow crossfade when hour changes
        />
    );
}
