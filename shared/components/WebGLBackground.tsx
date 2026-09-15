'use client';

import { useEffect, useRef } from 'react';

export default function WebGLBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let animationFrameId: number;

        // Semantic Colors based on new Design Tokens
        const colors = [
            '#921829', // wine-600
            '#B53245', // wine-500
            '#7A1523', // wine-700
            '#D6A848'  // gold-500 (accent)
        ];

        // Particle System for the "Mesh"
        const particles = Array.from({ length: 4 }).map((_, i) => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * (width * 0.8) + (width * 0.4),
            color: colors[i],
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
        }));

        const render = () => {
            // Semi-transparent clear for motion blur effect
            ctx.fillStyle = '#FAFAFA'; // background color
            ctx.fillRect(0, 0, width, height);

            ctx.globalCompositeOperation = 'multiply';

            particles.forEach(p => {
                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off walls (with large padding so they center around the screen)
                if (p.x < -width || p.x > width * 2) p.vx *= -1;
                if (p.y < -height || p.y > height * 2) p.vy *= -1;

                // Draw radial gradient
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
                gradient.addColorStop(0, `${p.color}22`); // 13% opacity
                gradient.addColorStop(1, `${p.color}00`); // 0% opacity

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalCompositeOperation = 'source-over';
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none -z-1"
            style={{
                filter: 'blur(60px)',
                opacity: 0.8
            }}
        />
    );
}
