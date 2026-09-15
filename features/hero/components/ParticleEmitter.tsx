'use client';

import { useEffect, useRef } from 'react';
import { useScroll, useSpring, useTransform } from 'motion/react';

type Particle = {
    x: number;
    y: number;
    size: number;
    baseX: number;
    baseY: number;
    density: number;
    opacity: number;
    color: string;
};

export default function ParticleEmitter() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0, radius: 150 });

    // Parallax scroll logic
    const { scrollY } = useScroll();
    const smoothY = useSpring(scrollY, { damping: 20, stiffness: 100 });
    const parallaxY = useTransform(smoothY, [0, 1000], [0, -200]);

    useEffect(() => {
        // Respect prefers-reduced-motion — skip entire particle system
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let particlesArray: Particle[] = [];
        let animationFrameId: number;

        // Resize handler
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        // Initialize particles
        const init = () => {
            particlesArray = [];
            const numberOfParticles = Math.min((canvas.width * canvas.height) / 12000, 150); // Reduced for INP

            const colors = ['#921829', '#B53245', '#D06B80', '#D6A848'];

            for (let i = 0; i < numberOfParticles; i++) {
                const size = (Math.random() * 2) + 0.5;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const color = colors[Math.floor(Math.random() * colors.length)] || '#921829';
                const opacity = (Math.random() * 0.4) + 0.1;

                particlesArray.push({
                    x,
                    y,
                    size,
                    baseX: x,
                    baseY: y,
                    density: (Math.random() * 30) + 1,
                    opacity,
                    color
                });
            }
        };

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Get current parallax offset safely
            const currentScrollY = parallaxY.get() || 0;

            for (let i = 0; i < particlesArray.length; i++) {
                const p = particlesArray[i];
                if (!p) continue;

                // Mouse Repulsion Physics
                const dx = mouseRef.current.x - p.x;
                const dy = mouseRef.current.y - (p.y - currentScrollY);
                const distance = Math.sqrt(dx * dx + dy * dy);
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;

                const maxDistance = mouseRef.current.radius;
                let force = (maxDistance - distance) / maxDistance;
                if (force < 0) force = 0;

                const directionX = forceDirectionX * force * p.density;
                const directionY = forceDirectionY * force * p.density;

                if (distance < mouseRef.current.radius) {
                    p.x -= directionX;
                    p.y -= directionY;
                } else {
                    // Spring back to base position
                    if (p.x !== p.baseX) {
                        const dxBase = p.x - p.baseX;
                        p.x -= dxBase / 20;
                    }
                    if (p.y !== p.baseY) {
                        const dyBase = p.y - p.baseY;
                        p.y -= dyBase / 20;
                    }
                }

                // Draw Particle
                ctx.beginPath();
                ctx.arc(p.x, p.y - currentScrollY, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.fill();
                ctx.globalAlpha = 1.0; // Reset
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        let lastMouseMove = 0;
        const handleMouseMove = (e: MouseEvent) => {
            // Throttle to 60fps (16ms) for INP optimization
            const now = performance.now();
            if (now - lastMouseMove < 16) return;
            lastMouseMove = now;
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            // Move mouse out of bounds to trigger spring-back
            mouseRef.current.x = -1000;
            mouseRef.current.y = -1000;
        }

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [parallaxY]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ mixBlendMode: 'multiply', willChange: 'contents' }}
        />
    );
}
