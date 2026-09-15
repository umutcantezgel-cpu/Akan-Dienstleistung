import { useRef, useEffect, useCallback, RefObject } from 'react';

/**
 * Represents a single particle in the physics simulation.
 */
export interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    baseOpacity: number;
    colorIndex: number;
}

/**
 * Configuration options for the particle physics simulation.
 */
export interface UseParticlePhysicsProps {
    /** React ref to the target canvas element */
    canvasRef: RefObject<HTMLCanvasElement | null>;
    /** Number of particles to render */
    particleCount: number;
    /** Array of RGB strings (e.g., '255, 255, 255') for particle colors */
    colors: string[];
    /** Maximum radius of a particle */
    maxRadius: number;
    /** Base movement speed of particles */
    speed: number;
    /** Whether particles should be repelled by the mouse cursor */
    mouseRepel: boolean;
    /** Radius around the cursor where the repel force is active */
    repelRadius: number;
    /** Maximum distance between particles before a connecting line is drawn */
    connectDistance: number;
}

/**
 * Custom hook that orchestrates a complex particle physics simulation on a canvas.
 * Handles particle initialization, animation loops, mouse interaction repelling, 
 * and device pixel ratio scaling for crisp rendering.
 * 
 * @param props Configuration properties for the particle simulation
 */
export function useParticlePhysics({
    canvasRef,
    particleCount,
    colors,
    maxRadius,
    speed,
    mouseRepel,
    repelRadius,
    connectDistance,
}: UseParticlePhysicsProps) {
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000, isMoving: false, vx: 0, vy: 0 });
    const lastMouseRef = useRef({ x: -1000, y: -1000 });
    const animationRef = useRef<number>(0);
    const dimensionsRef = useRef({ w: 0, h: 0 });

    const initParticles = useCallback((width: number, height: number) => {
        const particles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * speed,
                vy: (Math.random() - 0.5) * speed,
                radius: Math.random() * maxRadius + 0.5,
                baseOpacity: Math.random() * 0.5 + 0.1,
                colorIndex: Math.floor(Math.random() * colors.length),
            });
        }
        particlesRef.current = particles;
    }, [particleCount, colors, maxRadius, speed]);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        const { w, h } = dimensionsRef.current;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.clearRect(0, 0, w, h);

        const particles = particlesRef.current;
        const mouse = mouseRef.current;

        mouse.vx = mouse.x - lastMouseRef.current.x;
        mouse.vy = mouse.y - lastMouseRef.current.y;
        lastMouseRef.current.x = mouse.x;
        lastMouseRef.current.y = mouse.y;

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            if (!p) continue;

            if (mouseRepel && mouse.x > -1000) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < repelRadius) {
                    const nx = dx / (dist || 1);
                    const ny = dy / (dist || 1);
                    const normalizedDist = dist / repelRadius;
                    let force = (1 - normalizedDist * 2.5);

                    const disturbanceX = mouse.vx * 0.05 * (1 - normalizedDist);
                    const disturbanceY = mouse.vy * 0.05 * (1 - normalizedDist);

                    p.vx += nx * force * 1.5 + disturbanceX;
                    p.vy += ny * force * 1.5 + disturbanceY;
                }
            }

            const currentSpeed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (currentSpeed > speed) {
                p.vx *= 0.95;
                p.vy *= 0.95;
            } else {
                p.vx += (Math.random() - 0.5) * 0.05;
                p.vy += (Math.random() - 0.5) * 0.05;
            }

            const maxV = speed * 15;
            p.vx = Math.max(-maxV, Math.min(maxV, p.vx));
            p.vy = Math.max(-maxV, Math.min(maxV, p.vy));

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < -50) p.x = w + 50;
            if (p.x > w + 50) p.x = -50;
            if (p.y < -50) p.y = h + 50;
            if (p.y > h + 50) p.y = -50;

            const speedRatio = Math.min(1, currentSpeed / (speed * 8));
            const baseColor = colors[p.colorIndex];

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * (1 + speedRatio), 0, Math.PI * 2);

            ctx.fillStyle = `rgba(${baseColor}, ${p.baseOpacity + speedRatio * 0.5})`;
            if (speedRatio > 0.3) {
                ctx.fillStyle = `rgba(255, 215, 0, ${p.baseOpacity + speedRatio * 0.5})`;
            }
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                if (!p2) continue;

                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distSq = dx * dx + dy * dy;
                const connectDistSq = connectDistance * connectDistance;

                if (distSq < connectDistSq) {
                    const dist = Math.sqrt(distSq);
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);

                    const avgSpeedRatio = (speedRatio + Math.min(1, Math.sqrt(p2.vx * p2.vx + p2.vy * p2.vy) / (speed * 8))) / 2;
                    const connectionOpacity = (1 - dist / connectDistance) * 0.15 * (1 + avgSpeedRatio * 2);

                    ctx.strokeStyle = `rgba(${baseColor}, ${connectionOpacity})`;
                    if (avgSpeedRatio > 0.4) {
                        ctx.strokeStyle = `rgba(255, 215, 0, ${connectionOpacity})`;
                    }

                    ctx.lineWidth = 0.5 + avgSpeedRatio;
                    ctx.stroke();
                }
            }
        }

        // eslint-disable-next-line react-hooks/immutability
        animationRef.current = requestAnimationFrame(() => animate());
    }, [mouseRepel, repelRadius, speed, connectDistance, colors, canvasRef]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const resize = () => {
            const rect = canvas.parentElement?.getBoundingClientRect();
            if (!rect) return;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            const ctx = canvas.getContext('2d');
            if (ctx) ctx.scale(dpr, dpr);
            dimensionsRef.current = { w: rect.width, h: rect.height };
            initParticles(rect.width, rect.height);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = -1000;
            mouseRef.current.y = -1000;
        };

        let idleId: number | NodeJS.Timeout;
        const requestIdle = (window as any).requestIdleCallback || ((cb: Function) => setTimeout(cb, 1));
        const cancelIdle = (window as any).cancelIdleCallback || ((id: number | NodeJS.Timeout) => clearTimeout(id as any));

        const startSimulation = () => {
            resize();
            animationRef.current = requestAnimationFrame(animate);
        };

        idleId = requestIdle(startSimulation);

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

        return () => {
            if (idleId) cancelIdle(idleId);
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [animate, initParticles, canvasRef]);
}
