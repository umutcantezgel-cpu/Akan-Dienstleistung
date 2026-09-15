'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface RadarPoint {
    label: string;
    value: number; // 0 to 100
}

interface RadarChartProps {
    data: RadarPoint[];
    size?: number;
    color?: string;
    bgColor?: string;
    className?: string;
}

export default function RadarChart({
    data,
    size = 300,
    color = '#9B1C2E',
    bgColor = '#F1D4DB',
    className = '',
}: RadarChartProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const center = size / 2;
    const maxRadius = size * 0.38;
    const levels = 4;
    const angleStep = (2 * Math.PI) / data.length;

    // Get point position on the radar
    const getPoint = (index: number, value: number) => {
        const angle = angleStep * index - Math.PI / 2;
        const radius = (value / 100) * maxRadius;
        return {
            x: center + radius * Math.cos(angle),
            y: center + radius * Math.sin(angle),
        };
    };

    // Build the data polygon path
    const dataPath = data
        .map((point, i) => {
            const { x, y } = getPoint(i, point.value);
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
        })
        .join(' ') + ' Z';

    // Build grid polygon paths
    const gridPaths = Array.from({ length: levels }, (_, level) => {
        const levelValue = ((level + 1) / levels) * 100;
        return data
            .map((_, i) => {
                const { x, y } = getPoint(i, levelValue);
                return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            })
            .join(' ') + ' Z';
    });

    return (
        <div ref={ref} className={`flex flex-col items-center ${className}`}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Grid levels */}
                {gridPaths.map((path, i) => (
                    <path
                        key={i}
                        d={path}
                        fill="none"
                        stroke={bgColor}
                        strokeWidth={1}
                        opacity={0.6}
                    />
                ))}

                {/* Axis lines */}
                {data.map((_, i) => {
                    const { x, y } = getPoint(i, 100);
                    return (
                        <line
                            key={i}
                            x1={center}
                            y1={center}
                            x2={x}
                            y2={y}
                            stroke={bgColor}
                            strokeWidth={1}
                        />
                    );
                })}

                {/* Data polygon */}
                <motion.path
                    d={dataPath}
                    fill={color}
                    fillOpacity={0.15}
                    stroke={color}
                    strokeWidth={2}
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    style={{ transformOrigin: `${center}px ${center}px` }}
                />

                {/* Data points */}
                {data.map((point, i) => {
                    const { x, y } = getPoint(i, point.value);
                    return (
                        <motion.circle
                            key={i}
                            cx={x}
                            cy={y}
                            r={4}
                            fill="white"
                            stroke={color}
                            strokeWidth={2}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: 0.1 * i + 0.5, duration: 0.3 }}
                        />
                    );
                })}

                {/* Labels */}
                {data.map((point, i) => {
                    const { x, y } = getPoint(i, 120);
                    return (
                        <text
                            key={i}
                            x={x}
                            y={y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-micro font-semibold fill-text-secondary"
                        >
                            {point.label}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
}
