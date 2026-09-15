'use client';

import { useRef } from 'react';
import { useParticlePhysics } from '@/shared/hooks/useParticlePhysics';

interface ParticleCanvasProps {
    className?: string;
    particleCount?: number;
    colors?: string[];
    maxRadius?: number;
    speed?: number;
    mouseRepel?: boolean;
    repelRadius?: number;
    connectDistance?: number;
}

export default function ParticleCanvas({
    className = '',
    particleCount = 100,
    colors = ['232, 93, 117', '155, 28, 46', '241, 212, 219'],
    maxRadius = 3,
    speed = 0.2,
    mouseRepel = true,
    repelRadius = 150,
    connectDistance = 120,
}: ParticleCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useParticlePhysics({
        canvasRef,
        particleCount,
        colors,
        maxRadius,
        speed,
        mouseRepel,
        repelRadius,
        connectDistance
    });

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{ zIndex: 0 }}
            aria-hidden="true"
        />
    );
}
